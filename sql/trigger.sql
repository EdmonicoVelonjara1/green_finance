USE stock_data_analyzis;

-- Trigger 1: Vérification des valeurs positives pour les prix et le volume dans stock_market_data
-- Objectif: S'assurer que les prix (open, high, low, close, adj_close) et le volume ne sont pas négatifs avant insertion.
DELIMITER //
CREATE TRIGGER before_insert_stock_market_data
BEFORE INSERT ON stock_market_data
FOR EACH ROW
BEGIN
    IF NEW.open < 0 OR NEW.high < 0 OR NEW.low < 0 OR NEW.close < 0 OR NEW.adj_close < 0 THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Les prix (open, high, low, close, adj_close) ne peuvent pas être négatifs';
    END IF;
    IF NEW.volume < 0 THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Le volume ne peut pas être négatif';
    END IF;
END //
DELIMITER ;

-- Trigger 2: Vérification de la cohérence des prix dans stock_market_data
-- Objectif: Vérifier que high >= low et que open/close sont compris entre high et low.
DELIMITER //
CREATE TRIGGER before_insert_stock_market_data_price_coherence
BEFORE INSERT ON stock_market_data
FOR EACH ROW
BEGIN
    IF NEW.high < NEW.low THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Le prix haut (high) doit être supérieur ou égal au prix bas (low)';
    END IF;
    IF NEW.open > NEW.high OR NEW.open < NEW.low OR NEW.close > NEW.high OR NEW.close < NEW.low THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Les prix open et close doivent être compris entre low et high';
    END IF;
END //
DELIMITER ;

-- Trigger 3: Mise à jour de la table cumulative_return après insertion dans stock_market_data
-- Objectif: Calculer les rendements cumulés pour open, high, low, close, adj_close.
-- Formule: Rendement cumulé = ((Prix actuel - Prix initial) / Prix initial) * 100
DELIMITER //
CREATE TRIGGER after_insert_cumulative_return
AFTER INSERT ON stock_market_data
FOR EACH ROW
BEGIN
    DECLARE first_open, first_high, first_low, first_close, first_adj_close FLOAT;
    
    -- Récupérer les premiers prix pour ce ticker
    SELECT open, high, low, close, adj_close
    INTO first_open, first_high, first_low, first_close, first_adj_close
    FROM stock_market_data
    WHERE id_ticker = NEW.id_ticker
    ORDER BY date ASC
    LIMIT 1;
    
    -- Calculer les rendements cumulés (en %)
    INSERT INTO cumulative_return (
        id_ticker,
        cum_return_open,
        cum_return_high,
        cum_return_low,
        cum_return_close,
        cum_return_adj_close,
        date
    )
    VALUES (
        NEW.id_ticker,
        IF(first_open != 0, ((NEW.open - first_open) / first_open) * 100, 0),
        IF(first_high != 0, ((NEW.high - first_high) / first_high) * 100, 0),
        IF(first_low != 0, ((NEW.low - first_low) / first_low) * 100, 0),
        IF(first_close != 0, ((NEW.close - first_close) / first_close) * 100, 0),
        IF(first_adj_close != 0, ((NEW.adj_close - first_adj_close) / first_adj_close) * 100, 0),
        NEW.date
    )
    ON DUPLICATE KEY UPDATE
        cum_return_open = IF(first_open != 0, ((NEW.open - first_open) / first_open) * 100, 0),
        cum_return_high = IF(first_high != 0, ((NEW.high - first_high) / first_high) * 100, 0),
        cum_return_low = IF(first_low != 0, ((NEW.low - first_low) / first_low) * 100, 0),
        cum_return_close = IF(first_close != 0, ((NEW.close - first_close) / first_close) * 100, 0),
        cum_return_adj_close = IF(first_adj_close != 0, ((NEW.adj_close - first_adj_close) / first_adj_close) * 100, 0),
        date = NEW.date;
END //
DELIMITER ;

-- Trigger 4: Mise à jour de la table trending après insertion dans stock_market_data
-- Objectif: Calculer les tendances (variation en % par rapport au jour précédent).
-- Formule: Tendance = ((Prix actuel - Prix précédent) / Prix précédent) * 100
DELIMITER //
CREATE TRIGGER after_insert_trending
AFTER INSERT ON stock_market_data
FOR EACH ROW
BEGIN
    DECLARE prev_open, prev_close, prev_adj_close FLOAT;
    
    -- Récupérer les prix du jour précédent
    SELECT open, close, adj_close
    INTO prev_open, prev_close, prev_adj_close
    FROM stock_market_data
    WHERE id_ticker = NEW.id_ticker AND date < NEW.date
    ORDER BY date DESC
    LIMIT 1;
    
    -- Insérer ou mettre à jour la table trending
    INSERT INTO trending (
        id_ticker,
        trend_open,
        trend_close,
        trend_adj_close,
        date
    )
    VALUES (
        NEW.id_ticker,
        IF(prev_open IS NOT NULL AND prev_open != 0, ((NEW.open - prev_open) / prev_open) * 100, 0),
        IF(prev_close IS NOT NULL AND prev_close != 0, ((NEW.close - prev_close) / prev_close) * 100, 0),
        IF(prev_adj_close IS NOT NULL AND prev_adj_close != 0, ((NEW.adj_close - prev_adj_close) / prev_adj_close) * 100, 0),
        NEW.date
    )
    ON DUPLICATE KEY UPDATE
        trend_open = IF(prev_open IS NOT NULL AND prev_open != 0, ((NEW.open - prev_open) / prev_open) * 100, 0),
        trend_close = IF(prev_close IS NOT NULL AND prev_close != 0, ((NEW.close - prev_close) / prev_close) * 100, 0),
        trend_adj_close = IF(prev_adj_close IS NOT NULL AND prev_adj_close != 0, ((NEW.adj_close - prev_adj_close) / prev_adj_close) * 100, 0),
        date = NEW.date;
END //
DELIMITER ;

-- Trigger 5: Mise à jour de la table volatility après insertion dans stock_market_data
-- Objectif: Calculer la volatilité (écart-type des rendements journaliers sur 20 jours).
-- Formule: Volatilité = SQRT(Variance des rendements journaliers) * SQRT(252) pour annualisation
DELIMITER //
CREATE TRIGGER after_insert_volatility
AFTER INSERT ON stock_market_data
FOR EACH ROW
BEGIN
    DECLARE vol_open, vol_close, vol_adj_close FLOAT;
    
    -- Calculer l'écart-type des rendements journaliers sur 20 jours
    SET vol_open = (
        SELECT STDDEV((smd2.open - smd1.open) / smd1.open * 100)
        FROM stock_market_data smd1
        JOIN stock_market_data smd2
        ON smd1.id_ticker = smd2.id_ticker
        AND smd1.date = (SELECT MAX(date) FROM stock_market_data WHERE id_ticker = smd1.id_ticker AND date < smd2.date)
        WHERE smd2.id_ticker = NEW.id_ticker
        AND smd2.date <= NEW.date
        AND smd2.date > DATE_SUB(NEW.date, INTERVAL 20 DAY)
        LIMIT 20
    );
    SET vol_close = (
        SELECT STDDEV((smd2.close - smd1.close) / smd1.close * 100)
        FROM stock_market_data smd1
        JOIN stock_market_data smd2
        ON smd1.id_ticker = smd2.id_ticker
        AND smd1.date = (SELECT MAX(date) FROM stock_market_data WHERE id_ticker = smd1.id_ticker AND date < smd2.date)
        WHERE smd2.id_ticker = NEW.id_ticker
        AND smd2.date <= NEW.date
        AND smd2.date > DATE_SUB(NEW.date, INTERVAL 20 DAY)
        LIMIT 20
    );
    SET vol_adj_close = (
        SELECT STDDEV((smd2.adj_close - smd1.adj_close) / smd1.adj_close * 100)
        FROM stock_market_data smd1
        JOIN stock_market_data smd2
        ON smd1.id_ticker = smd2.id_ticker
        AND smd1.date = (SELECT MAX(date) FROM stock_market_data WHERE id_ticker = smd1.id_ticker AND date < smd2.date)
        WHERE smd2.id_ticker = NEW.id_ticker
        AND smd2.date <= NEW.date
        AND smd2.date > DATE_SUB(NEW.date, INTERVAL 20 DAY)
        LIMIT 20
    );
    
    -- Annualiser la volatilité (racine de 252 jours de trading par an)
    SET vol_open = IFNULL(vol_open, 0) * SQRT(252);
    SET vol_close = IFNULL(vol_close, 0) * SQRT(252);
    SET vol_adj_close = IFNULL(vol_adj_close, 0) * SQRT(252);
    
    -- Insérer ou mettre à jour la table volatility
    INSERT INTO volatility (
        id_ticker,
        volatility_open,
        volatility_close,
        volatility_adj_close,
        date
    )
    VALUES (
        NEW.id_ticker,
        vol_open,
        vol_close,
        vol_adj_close,
        NEW.date
    )
    ON DUPLICATE KEY UPDATE
        volatility_open = vol_open,
        volatility_close = vol_close,
        volatility_adj_close = vol_adj_close,
        date = NEW.date;
END //
DELIMITER ;

-- Trigger 6: Mise à jour de la table indicators_technical après insertion dans stock_market_data
-- Objectif: Calculer les indicateurs techniques (SMA, EMA, RSI, MACD, Bollinger Bands).
-- Formules:
-- SMA (Simple Moving Average): Moyenne des prix sur N jours
-- EMA (Exponential Moving Average): EMA_t = (Prix * k) + (EMA_{t-1} * (1-k)), k = 2/(N+1)
-- RSI (Relative Strength Index): 100 - (100 / (1 + RS)), RS = (Moyenne gains / Moyenne pertes) sur 14 jours
-- MACD: EMA(12) - EMA(26), Signal = EMA(9) de MACD
-- Bollinger Bands: Moyenne ± 2 * écart-type sur 20 jours
DELIMITER //
CREATE TRIGGER after_insert_indicators_technical
AFTER INSERT ON stock_market_data
FOR EACH ROW
BEGIN
    DECLARE sma_50, sma_200, ema_50, ema_200, rsi_14, macd, macd_signal, bollinger_upper, bollinger_lower FLOAT;
    DECLARE avg_gain, avg_loss, rs FLOAT;
    DECLARE ema_12, ema_26, prev_ema_50, prev_ema_200 FLOAT;
    DECLARE count_days INT;
    
    -- SMA 50 et 200 (moyenne simple sur 50 et 200 jours)
    SELECT AVG(close), COUNT(*)
    INTO sma_50, count_days
    FROM stock_market_data
    WHERE id_ticker = NEW.id_ticker
    AND date <= NEW.date
    AND date > DATE_SUB(NEW.date, INTERVAL 50 DAY);
    SET sma_50 = IF(count_days >= 50, sma_50, NULL);
    
    SELECT AVG(close), COUNT(*)
    INTO sma_200, count_days
    FROM stock_market_data
    WHERE id_ticker = NEW.id_ticker
    AND date <= NEW.date
    AND date > DATE_SUB(NEW.date, INTERVAL 200 DAY);
    SET sma_200 = IF(count_days >= 200, sma_200, NULL);
    
    -- EMA 50 et 200 (moyenne exponentielle)
    -- Récupérer l'EMA précédent
    SELECT ema_50, ema_200
    INTO prev_ema_50, prev_ema_200
    FROM indicators_technical
    WHERE id_ticker = NEW.id_ticker
    AND date < NEW.date
    ORDER BY date DESC
    LIMIT 1;
    
    -- Calculer EMA (k = 2/(N+1))
    SET ema_50 = IF(prev_ema_50 IS NULL, sma_50, (NEW.close * (2.0 / (50 + 1))) + (prev_ema_50 * (1 - (2.0 / (50 + 1)))));
    SET ema_200 = IF(prev_ema_200 IS NULL, sma_200, (NEW.close * (2.0 / (200 + 1))) + (prev_ema_200 * (1 - (2.0 / (200 + 1)))));
    
    -- RSI 14 (sur 14 jours)
    SELECT 
        AVG(CASE WHEN smd2.close > smd1.close THEN (smd2.close - smd1.close) ELSE 0 END),
        AVG(CASE WHEN smd2.close < smd1.close THEN (smd1.close - smd2.close) ELSE 0 END)
    INTO avg_gain, avg_loss
    FROM stock_market_data smd1
    JOIN stock_market_data smd2
    ON smd1.id_ticker = smd2.id_ticker
    AND smd1.date = (SELECT MAX(date) FROM stock_market_data WHERE id_ticker = smd1.id_ticker AND date < smd2.date)
    WHERE smd2.id_ticker = NEW.id_ticker
    AND smd2.date <= NEW.date
    AND smd2.date > DATE_SUB(NEW.date, INTERVAL 14 DAY);
    
    SET rs = IF(avg_loss = 0, NULL, avg_gain / avg_loss);
    SET rsi_14 = IF(rs IS NULL, NULL, 100 - (100 / (1 + rs)));
    
    -- MACD (EMA12 - EMA26)
    SELECT AVG(close)
    INTO ema_12
    FROM stock_market_data
    WHERE id_ticker = NEW.id_ticker
    AND date <= NEW.date
    AND date > DATE_SUB(NEW.date, INTERVAL 12 DAY);
    SELECT AVG(close)
    INTO ema_26
    FROM stock_market_data
    WHERE id_ticker = NEW.id_ticker
    AND date <= NEW.date
    AND date > DATE_SUB(NEW.date, INTERVAL 26 DAY);
    SET macd = IF(ema_12 IS NOT NULL AND ema_26 IS NOT NULL, ema_12 - ema_26, NULL);
    
    -- MACD Signal (EMA9 du MACD, simplifié ici)
    SET macd_signal = NULL; -- Nécessite historique MACD, mieux géré par procédure
    
    -- Bollinger Bands (sur 20 jours)
    SELECT AVG(close), STDDEV(close)
    INTO bollinger_upper, bollinger_lower
    FROM stock_market_data
    WHERE id_ticker = NEW.id_ticker
    AND date <= NEW.date
    AND date > DATE_SUB(NEW.date, INTERVAL 20 DAY);
    SET bollinger_upper = IF(bollinger_upper IS NOT NULL, bollinger_upper + 2 * bollinger_lower, NULL);
    SET bollinger_lower = IF(bollinger_upper IS NOT NULL, bollinger_upper - 4 * bollinger_lower, NULL); -- -2 * écart-type
    
    -- Insérer ou mettre à jour la table indicators_technical
    INSERT INTO indicators_technical (
        id_ticker,
        sma_50,
        sma_200,
        ema_50,
        ema_200,
        rsi_14,
        macd,
        macd_signal,
        bollinger_upper,
        bollinger_lower,
        date
    )
    VALUES (
        NEW.id_ticker,
        sma_50,
        sma_200,
        ema_50,
        ema_200,
        rsi_14,
        macd,
        macd_signal,
        bollinger_upper,
        bollinger_lower,
        NEW.date
    );
END //
DELIMITER ;

-- Trigger 7: Mise à jour de la table statistic après insertion dans stock_market_data
-- Objectif: Consolider les données des autres tables dans statistic.
DELIMITER //
CREATE TRIGGER after_insert_statistic
AFTER INSERT ON stock_market_data
FOR EACH ROW
BEGIN
    DECLARE cum_return_open, cum_return_close, cum_return_adj_close FLOAT;
    DECLARE trend_open, trend_close, trend_adj_close FLOAT;
    DECLARE volatility_open, volatility_close, volatility_adj_close FLOAT;
    DECLARE anomaly_price, anomaly_volume, rsi FLOAT;
    
    -- Récupérer les données des autres tables
    SELECT cum_return_open, cum_return_close, cum_return_adj_close
    INTO cum_return_open, cum_return_close, cum_return_adj_close
    FROM cumulative_return
    WHERE id_ticker = NEW.id_ticker AND date = NEW.date;
    
    SELECT trend_open, trend_close, trend_adj_close
    INTO trend_open, trend_close, trend_adj_close
    FROM trending
    WHERE id_ticker = NEW.id_ticker AND date = NEW.date;
    
    SELECT volatility_open, volatility_close, volatility_adj_close
    INTO volatility_open, volatility_close, volatility_adj_close
    FROM volatility
    WHERE id_ticker = NEW.id_ticker AND date = NEW.date;
    
    SELECT anomaly_price, anomaly_volume
    INTO anomaly_price, anomaly_volume
    FROM anomaly_prediction
    WHERE id_ticker = NEW.id_ticker AND date = NEW.date;
    
    SELECT rsi_14
    INTO rsi
    FROM indicators_technical
    WHERE id_ticker = NEW.id_ticker AND date = NEW.date;
    
    -- Insérer dans statistic
    INSERT INTO statistic (
        id_ticker,
        cum_return_open,
        cum_return_close,
        cum_return_adj_close,
        trend_open,
        trend_close,
        trend_adj_close,
        volatility_open,
        volatility_close,
        volatility_adj_close,
        anomaly_price,
        anomaly_volume,
        rsi,
        date
    )
    VALUES (
        NEW.id_ticker,
        IFNULL(cum_return_open, 0),
        IFNULL(cum_return_close, 0),
