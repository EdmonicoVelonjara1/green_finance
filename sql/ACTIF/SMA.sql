DROP PROCEDURE IF EXISTS calculate_sma;
DELIMITER //

CREATE PROCEDURE calculate_sma (
    IN p_ticker_id INT,
    IN p_period INT
)
BEGIN
    -- Create table to store SMA results
    CREATE TABLE IF NOT EXISTS indicator_sma (
        id INT AUTO_INCREMENT PRIMARY KEY,
        id_ticker INT,
        date DATE,
        sma FLOAT,
        period INT,
        FOREIGN KEY (id_ticker) REFERENCES stock_data(id_ticker)
    );

    -- Clear existing SMA data for this ticker and period
    DELETE FROM indicator_sma WHERE id_ticker = p_ticker_id AND period = p_period;

    -- Insert SMA: average of close prices over the last 'period' days
    INSERT INTO indicator_sma (id_ticker, date, sma, period)
    SELECT 
        id_ticker,
        date,
        CASE 
            WHEN ROW_NUMBER() OVER (PARTITION BY id_ticker ORDER BY date) < p_period 
            THEN NULL
            ELSE AVG(close) OVER (
                PARTITION BY id_ticker 
                ORDER BY date 
                ROWS BETWEEN p_period - 1 PRECEDING AND CURRENT ROW
            )
        END AS sma,
        p_period
    FROM stock_data
    WHERE id_ticker = p_ticker_id
    ORDER BY date;
END;
//
DELIMITER ;
