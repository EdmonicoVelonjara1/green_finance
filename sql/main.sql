-- id_ticker : id de la table ticker
-- date : date de la donnée boursière
-- open : prix d'ouverture
-- high : prix le plus haut
-- low : prix le plus bas
-- close : prix de clôture
-- adj_close : prix de clôture ajusté
-- volume : volume échangé

-- La base de données green_finance est utilisée pour stocker les données boursières et les tendances des actions.
CREATE DATABASE IF NOT EXISTS green_finance;
USE green_finance;

CREATE TABLE IF NOT EXISTS ticker (
    id VARCHAR(191) PRIMARY KEY NOT NULL,    
    name VARCHAR(100)
);

-- Table de données boursières
CREATE TABLE IF NOT EXISTS stock_market_data(
    id INT PRIMARY KEY NOT NULL,
    id_ticker VARCHAR(191) NOT NULL,
    date DATE,
    open FLOAT NOT NULL,
    high FLOAT NOT NULL,
    low FLOAT NOT NULL,
    close FLOAT NOT NULL,
    adj_close FLOAT NOT NULL,
    volume BIGINT NOT NULL,
    FOREIGN KEY (id_ticker) REFERENCES ticker(id)
);

-- Table de rendements cumulés
CREATE TABLE IF NOT EXISTS cumulative_return(
    id_ticker VARCHAR(191) NOT NULL PRIMARY KEY,
    cum_return_open FLOAT NOT NULL,
    cum_return_high FLOAT NOT NULL,
    cum_return_low FLOAT NOT NULL,
    cum_return_close FLOAT NOT NULL,
    cum_return_adj_close FLOAT NOT NULL,
    date DATE NOT NULL,    
    FOREIGN KEY (id_ticker) REFERENCES ticker(id)
);

-- Table de tendances
CREATE TABLE IF NOT EXISTS trending (
    id_ticker VARCHAR(191) NOT NULL PRIMARY KEY,
    trend_open FLOAT NOT NULL,
    trend_close FLOAT NOT NULL,
    trend_adj_close FLOAT NOT NULL,
    date DATE NOT NULL,    
    FOREIGN KEY (id_ticker) REFERENCES ticker(id)
);

-- Table de volatilité
CREATE TABLE IF NOT EXISTS volatility (
    id_ticker VARCHAR(191) NOT NULL PRIMARY KEY,
    volatility_open FLOAT NOT NULL,
    volatility_close FLOAT NOT NULL,
    volatility_adj_close FLOAT NOT NULL,
    date DATE NOT NULL,    
    FOREIGN KEY (id_ticker) REFERENCES ticker(id)
);

-- Table de preductions d'anomalie de prix et de volume
CREATE TABLE IF NOT EXISTS anomaly_prediction(
    id_ticker VARCHAR(191) NOT NULL PRIMARY KEY,
    anomaly_price FLOAT NOT NULL,
    anomaly_volume FLOAT NOT NULL,
    date DATE NOT NULL,    
    FOREIGN KEY (id_ticker) REFERENCES ticker(id)
);


-- Table de indicateurs techniques
CREATE TABLE indicators_technical (
    indicator_id INT AUTO_INCREMENT PRIMARY KEY,
    id_ticker VARCHAR(191) NOT NULL,
    
    sma_5 FLOAT,
    sma_10 FLOAT,
    sma_20 FLOAT,
    sma_50 FLOAT,
    sma_100 FLOAT,
    sma_200 FLOAT,
    
    ema_5 FLOAT,
    ema_10 FLOAT,
    ema_20 FLOAT,
    ema_50 FLOAT,
    ema_100 FLOAT,
    ema_200 FLOAT,

    rsi_7 FLOAT, 
    rsi_14 FLOAT, 
    rsi_21 FLOAT, 
    
    macd FLOAT,
    macd_signal FLOAT,
    bollinger_upper FLOAT,
    bollinger_lower FLOAT,
    date DATE NOT NULL,
    FOREIGN KEY (id_ticker) REFERENCES ticker(id_ticker)
);

-- Table de statistiques

CREATE TABLE IF NOT EXISTS statistic (
    id_ticker VARCHAR(191) PRIMARY KEY NOT NULL,
    cum_return_open FLOAT NOT NULL,
    cum_return_close FLOAT NOT NULL,
    cum_return_adj_close FLOAT NOT NULL,
    trend_open FLOAT NOT NULL,
    trend_close FLOAT NOT NULL,
    trend_adj_close FLOAT NOT NULL,
    volatility_open FLOAT NOT NULL,
    volatility_close FLOAT NOT NULL,
    volatility_adj_close FLOAT NOT NULL,
    anomaly_price FLOAT NOT NULL,
    anomaly_volume FLOAT NOT NULL,
    rsi FLOAT NOT NULL,
    date DATE NOT NULL,
    FOREIGN KEY (id_ticker) REFERENCES ticker(id)
);
