CREATE TABLE IF NOT EXISTS statistic (
    id  INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    id_ticker       INT,
    avg_price       FLOAT NOT NULL,
    avg_volume      FLOAT NOT NULL,
    median_price    FLOAT NOT NULL,
    median_volume   FLOAT NOT NULL,
    min_price       FLOAT NOT NULL,
    min_volume      FLOAT NOT NULL,
    max_price       FLOAT NOT NULL,
    max_volume      FLOAT NOT NULL,
    std_price       FLOAT NOT NULL,
    std_volume      FLOAT NOT NULL,

    month  INT,
    year   INT,

    FOREIGN KEY (id_ticker) REFERENCES ticker(id)
);


SELECT DISTINCT YEAR(date) AS year 
    FROM stock_market_data 
    ORDER BY year DESC;
