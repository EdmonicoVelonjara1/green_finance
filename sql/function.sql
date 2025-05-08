-- Calcul de la tendance: Hebdomadaire

DELIMITER //
CREATE OR REPLACE FUNCTION weekly_trend(
    ticker_id VARCHAR(191), 
    year YEAR, 
    month MONTH, 
    day_begin INT DEFAULT 1,
    day_end INT DEFAULT 7,
    price_type VARCHAR(10) DEFAULT 'close',
    is_cumulative BOOLEAN DEFAULT FALSE
)
RETURNS FLOAT DETERMINISTIC
BEGIN
    DECLARE week_end_price FLOAT DEFAULT 0;
    DECLARE cum_return FLOAT DEFAULT 0;
    DECLARE i INT DEFAULT 0;
    DECLARE current_price FLOAT DEFAULT 0;
    DECLARE previous_price FLOAT DEFAULT 0;
    DECLARE nb_days INT DEFAULT 0;

    SELECT COUNT(*) INTO nb_days 
    FROM stock_market_data 
    WHERE id_ticker = ticker_id 
        AND YEAR(date) = year 
        AND MONTH(date) = month;
        AND DAY(date) <= day_end
        AND DAY(date) >= day_begin;

    IF nb_days = 0 THEN
        RETURN NULL;
    END IF;

    IF is_cumulative THEN
        IF price_type = 'close' THEN
            WHILE i < nb_days DO
                SET current_price  = (SELECT close FROM stock_market_data WHERE id_ticker = ticker_id AND YEAR(date) = year AND MONTH(date) = month AND DAY(date) <= day_end AND DAY(date) >= day_start ORDER BY date DESC LIMIT 1 OFFSET i);
                SET previous_price = (SELECT close FROM stock_market_data WHERE id_ticker = ticker_id AND YEAR(date) = year AND MONTH(date) = month AND DAY(date) <= day_end AND DAY(date) >= day_start ORDER BY date DESC LIMIT 1 OFFSET i + 1);

                IF previous_price IS NOT NULL THEN
                    SET cum_return = cum_return + ((current_price - previous_price) / previous_price);

                END IF;

                SET i = i + 1;
            END WHILE;
            SET cum_return = 100 * cum_return / nb_days;
        ELSEIF price_type = 'open' THEN
            WHILE i < nb_days DO
                SET current_price  = (SELECT open FROM stock_market_data WHERE id_ticker = ticker_id AND YEAR(date) = year AND MONTH(date) = month AND DAY(date) <= day_end AND DAY(date) >= day_start ORDER BY date DESC LIMIT 1 OFFSET i);
                SET previous_price = (SELECT open FROM stock_market_data WHERE id_ticker = ticker_id AND YEAR(date) = year AND MONTH(date) = month AND DAY(date) <= day_end AND DAY(date) >= day_start ORDER BY date DESC LIMIT 1 OFFSET i + 1);

                IF previous_price IS NOT NULL THEN
                    SET cum_return = cum_return + ((current_price - previous_price) / previous_price);

                END IF;

                SET i = i + 1;
            END WHILE;
            SET cum_return = 100 * cum_return / nb_days;
        ELSEIF price_type = 'adj_close' THEN
            WHILE i < nb_days DO
                SET current_price  = (SELECT adj_close FROM stock_market_data WHERE id_ticker = ticker_id AND YEAR(date) = year AND MONTH(date) = month AND DAY(date) <= day_end AND DAY(date) >= day_start ORDER BY date DESC LIMIT 1 OFFSET i);
                SET previous_price = (SELECT adj_close FROM stock_market_data WHERE id_ticker = ticker_id AND YEAR(date) = year AND MONTH(date) = month AND DAY(date) <= day_end AND DAY(date) >= day_start ORDER BY date DESC LIMIT 1 OFFSET i + 1);

                IF previous_price IS NOT NULL THEN
                    SET cum_return = cum_return + ((current_price - previous_price) / previous_price);

                END IF;

                SET i = i + 1;
            END WHILE;
            SET cum_return = 100 * cum_return / nb_days;
        END IF;
    ELSE
        IF price_type = 'close' THEN
            SET current_price = (SELECT close FROM stock_market_data WHERE id_ticker = ticker_id AND YEAR(date) = year AND MONTH(date) = month AND DAY(date) <= day_end AND DAY(date) >= day_begin ORDER BY date DESC LIMIT 1);
            SET previous_price = (SELECT close FROM stock_market_data WHERE id_ticker = ticker_id AND YEAR(date) = year AND MONTH(date) = month AND DAY(date) <= day_end AND DAY(date) >= day_begin ORDER BY date ASC LIMIT 1);
        ELSEIF price_type = 'open' THEN
            SET current_price = (SELECT open FROM stock_market_data WHERE id_ticker = ticker_id AND YEAR(date) = year AND MONTH(date) = month AND DAY(date) <= day_end AND DAY(date) >= day_begin ORDER BY date DESC LIMIT 1);
            SET previous_price = (SELECT open FROM stock_market_data WHERE id_ticker = ticker_id AND YEAR(date) = year AND MONTH(date) = month AND DAY(date) <= day_end AND DAY(date) >= day_begin ORDER BY date ASC LIMIT 1);
        ELSEIF price_type = 'adj_close' THEN
            SET current_price  = (SELECT adj_close FROM stock_market_data WHERE id_ticker = ticker_id AND YEAR(date) = year AND MONTH(date) = month AND DAY(date) <= day_end AND DAY(date) >= day_begin ORDER BY date DESC LIMIT 1);
            SET previous_price = (SELECT adj_close FROM stock_market_data WHERE id_ticker = ticker_id AND YEAR(date) = year AND MONTH(date) = month AND DAY(date) <= day_end AND DAY(date) >= day_begin ORDER BY date ASC LIMIT 1);
        END IF;
        IF previous_price IS NOT NULL THEN
            SET cum_return = 100 * ((current_price - previous_price) / previous_price);
        END IF;
    END IF;

    RETURN cum_return;

END //
DELIMITER ;

CREATE OR REPLACE FUNCTION get_week_number(
    date DATE
)
RETURNS INT DETERMINISTIC
BEGIN
    DECLARE week_number INT DEFAULT 0;
    SET week_number = WEEK(date, 1);
    RETURN week_number;
END //
DELIMITER ;

DELIMITER //
CREATE OR REPLACE FUNCTION calculate_trend_price(ticker_id VARCHAR(191), year YEAR, month MONTH, type_price VARCHAR(10))  
RETURNS FLOAT DETERMINISTIC 
BEGIN
    DECLARE trend FLOAT DEFAULT 0;
    DECLARE i INT DEFAULT 0;
    DECLARE current_price FLOAT DEFAULT 0;
    DECLARE previous_price FLOAT DEFAULT 0;

    IF type_price = 'open' THEN
        
        SET current_price  = (SELECT open FROM stock_market_data WHERE id_ticker = ticker_id AND YEAR(date) <= year AND MONTH(date) = month ORDER BY date ASC LIMIT 1 OFFSET i);
        SET previous_price = (SELECT open FROM stock_market_data WHERE id_ticker = ticker_id AND YEAR(date) <= year AND MONTH(date) = month ORDER BY date DESC LIMIT 1 OFFSET i + 1);
        IF previous_price IS NOT NULL THEN
            SET trend = 100 * ((current_price - previous_price) / previous_price);
            
        END IF;

    ELSEIF type_price = 'close' THEN
        SET current_price  = (SELECT close FROM stock_market_data WHERE id_ticker = ticker_id AND YEAR(date) <= year AND MONTH(date) <= month ORDER BY date DESC LIMIT 1 OFFSET i);
        SET previous_price = (SELECT close FROM stock_market_data WHERE id_ticker = ticker_id AND YEAR(date) <= year AND MONTH(date) <= month ORDER BY date DESC LIMIT 1 OFFSET i + 1);
        IF previous_price IS NOT NULL THEN
            SET trend = 100 * ((current_price - previous_price) / previous_price);
            
        END IF;

    ELSEIF type_price = 'adj_close' THEN
        SET current_price  = (SELECT adj_close FROM stock_market_data WHERE id_ticker = ticker_id AND YEAR(date) <= year AND MONTH(date) <= month ORDER BY date DESC LIMIT 1 OFFSET i);
        SET previous_price = (SELECT adj_close FROM stock_market_data WHERE id_ticker = ticker_id AND YEAR(date) <= year AND MONTH(date) <= month ORDER BY date DESC LIMIT 1 OFFSET i + 1);
        IF previous_price IS NOT NULL THEN
            SET trend = 100 * ((current_price - previous_price) / previous_price);
            
        END IF;

    END IF;
    RETURN trend;
END //
DELIMITER ;


CREATE OR REPLACE FUNCTION calculate_volatility(ticker_id VARCHAR(192), year YEAR, month MONTH, type_price VARCHAR(10))
RETURNS FLOAT DETERMINISTIC
BEGIN
    DECLARE volatility FLOAT DEFAULT 0;
    DECLARE i INT DEFAULT 0;
    DECLARE current_price FLOAT DEFAULT 0;
    DECLARE previous_price FLOAT DEFAULT 0;

    IF type_price = 'open' THEN
        SET current_price  = (SELECT open FROM stock_market_data WHERE id_ticker = ticker_id AND YEAR(date) <= year AND MONTH(date) <= month ORDER BY date ASC LIMIT 1 OFFSET i);
        SET previous_price = (SELECT open FROM stock_market_data WHERE id_ticker = ticker_id AND YEAR(date) <= year AND MONTH(date) <= month ORDER BY date DESC LIMIT 1 OFFSET i + 1);
        IF previous_price IS NOT NULL THEN
            SET volatility = 100 * ((current_price - previous_price) / previous_price);
            
        END IF;

    ELSEIF type_price = 'close' THEN
        SET current_price  = (SELECT close FROM stock_market_data WHERE id_ticker = ticker_id AND YEAR(date) <= year AND MONTH(date) <= month ORDER BY date DESC LIMIT 1 OFFSET i);
        SET previous_price = (SELECT close FROM stock_market_data WHERE id_ticker = ticker_id AND YEAR(date) <= year AND MONTH(date) <= month ORDER BY date DESC LIMIT 1 OFFSET i + 1);
        IF previous_price IS NOT NULL THEN
            SET volatility = 100 * ((current_price - previous_price) / previous_price);
            
        END IF;

    ELSEIF type_price = 'adj_close' THEN
        SET current_price  = (SELECT adj_close FROM stock_market_data WHERE id_ticker = ticker_id AND YEAR(date) <= year AND MONTH(date) <= month ORDER BY date DESC LIMIT 1 OFFSET i);
        SET previous_price = (SELECT adj_close FROM stock_market_data WHERE id_ticker = ticker_id AND YEAR(date) <= year AND MONTH(date) <= month ORDER BY date DESC LIMIT 1 OFFSET i + 1);
        IF previous_price IS NOT NULL THEN
            SET volatility = 100 * ((current_price - previous_price) / previous_price);
            
        END IF;

    END IF;
    RETURN volatility;
END //
DELIMITER ;


DELIMITER //
CREATE OR REPLACE FUNCTION calculate_anomaly(ticker_id VARCHAR(191), year YEAR, month MONTH, type_price VARCHAR(10))
RETURNS FLOAT DETERMINISTIC
BEGIN
    DECLARE anomaly FLOAT DEFAULT 0;
    DECLARE i INT DEFAULT 0;
    DECLARE current_price FLOAT DEFAULT 0;
    DECLARE previous_price FLOAT DEFAULT 0;

    IF type_price = 'open' THEN
        SET current_price  = (SELECT open FROM stock_market_data WHERE id_ticker = ticker_id AND YEAR(date) <= year AND MONTH(date) <= month ORDER BY date ASC LIMIT 1 OFFSET i);
        SET previous_price = (SELECT open FROM stock_market_data WHERE id_ticker = ticker_id AND YEAR(date) <= year AND MONTH(date) <= month ORDER BY date DESC LIMIT 1 OFFSET i + 1);
        IF previous_price IS NOT NULL THEN
            SET anomaly = 100 * ((current_price - previous_price) / previous_price);
            
        END IF;

    ELSEIF type_price = 'close' THEN
        SET current_price  = (SELECT close FROM stock_market_data WHERE id_ticker = ticker_id AND YEAR(date) <= year AND MONTH(date) <= month ORDER BY date DESC LIMIT 1 OFFSET i);
        SET previous_price = (SELECT close FROM stock_market_data WHERE id_ticker = ticker_id AND YEAR(date) <= year AND MONTH(date) <= month ORDER BY date DESC LIMIT 1 OFFSET i + 1);
        IF previous_price IS NOT NULL THEN
            SET anomaly = 100 * ((current_price - previous_price) / previous_price);
            
        END IF;

    ELSEIF type_price = 'adj_close' THEN
        SET current_price  = (SELECT adj_close FROM stock_market_data WHERE id_ticker = ticker_id AND YEAR(date) <= year AND MONTH(date) <= month ORDER BY date DESC LIMIT 1 OFFSET i);
        SET previous_price = (SELECT adj_close FROM stock_market_data WHERE id_ticker = ticker_id AND YEAR(date) <= year AND MONTH(date) <= month ORDER BY date DESC LIMIT 1 OFFSET i + 1);
        IF previous_price IS NOT NULL THEN
            SET anomaly = 100 * ((current_price - previous_price) / previous_price);
            
        END IF;

    END IF;
    RETURN anomaly;
END //
DELIMITER ;
DELIMITER //
CREATE OR REPLACE FUNCTION calculate_anomaly_volume(ticker_id VARCHAR(191), year YEAR, month MONTH)
RETURNS FLOAT DETERMINISTIC
BEGIN
    DECLARE anomaly_volume FLOAT DEFAULT 0;
    DECLARE i INT DEFAULT 0;
    DECLARE current_volume BIGINT DEFAULT 0;
    DECLARE previous_volume BIGINT DEFAULT 0;

    SET current_volume  = (SELECT volume FROM stock_market_data WHERE id_ticker = ticker_id AND YEAR(date) <= year AND MONTH(date) <= month ORDER BY date ASC LIMIT 1 OFFSET i);
    SET previous_volume = (SELECT volume FROM stock_market_data WHERE id_ticker = ticker_id AND YEAR(date) <= year AND MONTH(date) <= month ORDER BY date DESC LIMIT 1 OFFSET i + 1);
    
    IF previous_volume IS NOT NULL THEN
        SET anomaly_volume = 100 * ((current_volume - previous_volume) / previous_volume);
        
    END IF;

    RETURN anomaly_volume;
END //
DELIMITER ;

-- DELIMITER //
-- CREATE OR REPLACE FUNCTION 



DELIMITER //

CREATE OR REPLACE FUNCTION mean_price(ticker_id VARCHAR(191), year YEAR, month MONTH, type_price VARCHAR(10))
RETURNS FLOAT DETERMINISTIC
BEGIN
    DECLARE mean_price FLOAT DEFAULT 0;
    DECLARE i INT DEFAULT 0;
    DECLARE current_price FLOAT DEFAULT 0;
    DECLARE previous_price FLOAT DEFAULT 0;

    IF type_price = 'open' THEN
        SET current_price  = (SELECT open FROM stock_market_data WHERE id_ticker = ticker_id AND YEAR(date) <= year AND MONTH(date) <= month ORDER BY date ASC LIMIT 1 OFFSET i);
        SET previous_price = (SELECT open FROM stock_market_data WHERE id_ticker = ticker_id AND YEAR(date) <= year AND MONTH(date) <= month ORDER BY date DESC LIMIT 1 OFFSET i + 1);
        IF previous_price IS NOT NULL THEN
            SET mean_price = (current_price + previous_price) / 2;
            
        END IF;

    ELSEIF type_price = 'close' THEN
        SET current_price  = (SELECT close FROM stock_market_data 
                            WHERE id_ticker = ticker_id 
                            AND YEAR(date) <= year AND MONTH(date) <= month ORDER BY date DESC LIMIT 1 OFFSET i);
        SET previous_price = (SELECT close FROM stock_market_data WHERE id_ticker = ticker_id AND YEAR(date) <= year AND MONTH(date) <= month ORDER BY date DESC LIMIT 1 OFFSET i + 1);
        IF previous_price IS NOT NULL THEN
            SET mean_price = (current_price + previous_price) / 2;
            
        END IF;

    ELSEIF type_price = 'adj_close' THEN
        SET current_price  = (SELECT adj_close FROM stock_market_data WHERE id_ticker = ticker_id AND YEAR(date) <= year AND MONTH(date) <= month ORDER BY date DESC LIMIT 1 OFFSET i);
        SET previous_price = (SELECT adj_close FROM stock_market_data WHERE id_ticker = ticker_id AND YEAR(date) <= year AND MONTH(date) <= month ORDER BY date DESC LIMIT 1 OFFSET i + 1);
        IF previous_price IS NOT NULL THEN
            SET mean_price = (current_price + previous_price) / 2;
            
        END IF;

    END IF;
    RETURN mean_price;
END //
DELIMITER ;