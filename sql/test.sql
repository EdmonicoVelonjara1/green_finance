DELIMITER //

CREATE OR REPLACE TRIGGER after_insert_overall_stat
AFTER INSERT ON statistic
FOR EACH ROW
BEGIN
    DECLARE ticker_id , counter INT;
    DECLARE mean_price, mean_volume, 
            median_price, median_volume,
            min_price, min_volume,
            max_price, max_volume,
            std_price, std_volume ,
            asym FLOAT;
    
    -- Capture the ticker and date from the new row
    SET ticker_id = NEW.id_ticker;
   
    SELECT avg(avg_price), avg(avg_volume),
           med_stat(median_price)

    SET counter = (SELECT count(*) FROM overall_stat;)

    IF counter = 0 THEN 

    END IF;

    SELECT 
        AVG(close), 
        AVG(volume), 
        median(ticker_id, 'C', month_val, year_val), 
        median(ticker_id, 'V', month_val, year_val),
        MIN(close), 
        MIN(volume),
        MAX(close), 
        MAX(volume),
        STDDEV(close), 
        STDDEV(volume)
    INTO 
        avg_price, 
        avg_volume,
        median_price, 
        median_volume,
        min_price, 
        min_volume,
        max_price, 
        max_volume,
        std_price, 
        std_volume
    FROM stock_market_data
    WHERE id_ticker = ticker_id
      AND MONTH(date) = month_val
      AND YEAR(date) = year_val;

    -- Insert statistics into the statistic table
    INSERT INTO statistic (
        id_ticker,
        avg_price,
        avg_volume,
        median_price,
        median_volume,
        min_price,
        min_volume,
        max_price,
        max_volume,
        std_price,
        std_volume,
        month, 
        year
    )
    VALUES (
        NEW.id_ticker,
        IFNULL(avg_price, 0),
        IFNULL(avg_volume, 0),
        IFNULL(median_price, 0),
        IFNULL(median_volume, 0),        
        IFNULL(min_price, 0),
        IFNULL(min_volume, 0),
        IFNULL(max_price, 0),
        IFNULL(max_volume, 0),
        IFNULL(std_price, 0),
        IFNULL(std_volume, 0),
        month_val,
        year_val
    );
END //

DELIMITER ;
