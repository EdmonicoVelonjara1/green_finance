DROP PROCEDURE IF EXISTS set_rsi;
DELIMITER //

CREATE PROCEDURE IF NOT EXISTS set_rsi (
    IN ticker_id INT,
    IN smd_date DATE,
    IN v_init_price FLOAT,
    IN v_final_price FLOAT
)
-- RETURNS FLOAT DETERMINISTIC 
BEGIN 
    DECLARE v_gain_7, v_loss_7,
            v_gain_14, v_loss_14,
            v_gain_21, v_loss_21,

            sum, delta, 
            rs_7, rs_14, rs_21,
            v_rsi_7, v_rsi_14, v_rsi_21,
            
            p_gain_7,  p_loss_7,
            p_gain_14, p_loss_14,
            p_gain_21, p_loss_21,

            avg_gain_7,  avg_loss_7,  
            avg_gain_14, avg_loss_14,  
            avg_gain_21, avg_loss_21,
            
            gain_7,  loss_7,  
            gain_14, loss_14,  
            gain_21, loss_21 FLOAT DEFAULT 0;
    
    DECLARE counter INT DEFAULT 0;
    DECLARE p_rsi_id INT DEFAULT 1;

    SET counter = (SELECT count(*) FROM indicator_rsi WHERE id_ticker = ticker_id);    
    SET p_rsi_id =( SELECT id FROM indicator_rsi WHERE id_ticker = ticker_id);

    -- IF counter > 1 THEN 
        -- SET v_init_price = SELECT close FROM stock_market_data WHERE id = smd_id - 1; 
        -- SET v_final_price = SELECT close FROM stock_market_data WHERE id = smd_id;

    SET delta = v_final_price - v_init_price;
    SET sum = v_init_price + v_final_price;

    IF counter = 2 THEN
        IF delta > 0 THEN
            SET v_gain_7  = delta;
            SET v_gain_14 = delta;
            SET v_gain_21 = delta;
            
        ELSEIF delta < 0 THEN
            SET v_loss_7 = (-1)*delta;
            SET v_loss_14 = (-1)*delta;
            SET v_loss_21 = (-1)*delta;
        END IF;
    
        SET avg_gain_7 = (sum + v_gain_7) / 7;
        SET avg_loss_7 = (sum + v_loss_7) / 7;
        SET avg_gain_14 = (sum + v_gain_14) / 14;
        SET avg_loss_14 = (sum + v_loss_14) / 14;
        
        SET avg_gain_21 = (sum + v_gain_21) / 21;
        SET avg_loss_21 = (sum + v_loss_21) / 21;
        
    ELSEIF counter > 2 THEN
        SET p_gain_7 = (SELECT v_gain_7 FROM indicator_rsi WHERE id = (p_rsi_id - 1));
        SET p_loss_7 = (SELECT v_loss_7 FROM indicator_rsi WHERE id = (p_rsi_id - 1));
     
        SET p_gain_14 = (SELECT v_gain_14 FROM indicator_rsi WHERE id = (p_rsi_id - 1));
        SET p_loss_14 = (SELECT v_loss_14 FROM indicator_rsi WHERE id = (p_rsi_id - 1));
        
        SET p_gain_21 = (SELECT v_gain_21 FROM indicator_rsi WHERE id = (p_rsi_id - 1));
        SET p_loss_21 = (SELECT v_loss_21 FROM indicator_rsi WHERE id = (p_rsi_id - 1));

        IF delta > 0 THEN
            SET v_gain_7   = (delta * 6 + p_gain_7) / 7;
            SET v_gain_14  = (delta * 13 + p_gain_14) / 14;
            SET v_gain_21  = (delta * 20 + p_gain_21) / 21;
          
        ELSEIF delta < 0 THEN
          SET v_loss_7  = (delta * 6 + p_loss_7) / 7;
          SET v_loss_14 = (delta * 13 + p_loss_14) / 14;
          SET v_loss_21 = (delta * 20 + p_loss_21) / 21;
        END IF;
    END IF ;

    IF avg_loss_7 = 0 THEN
        SET rs_7 = 10000000000000000000;
    
    IF avg_loss_14 = 0 THEN
        SET rs_14 = 10000000000000000000;
    
    IF avg_loss_21 = 0 THEN
        SET rs_21 = 10000000000000000000;
    
    ELSE
        SET rs_7 = (avg_gain_7 / avg_loss_7);
        SET rs_14 = (avg_gain_14 / avg_loss_14);
        SET rs_21 = (avg_gain_21 / avg_loss_21);
    END IF;

    SET v_rsi_7 = (100 - 100 / (1 + rs_7));
    SET v_rsi_14 = (100 - 100 / (1 + rs_14));
    SET v_rsi_21 = (100 - 100 / (1 + rs_21));

    -- END IF;

    -- RETURN rsi;
    INSERT INTO indicator_rsi (
        id_ticker,

        loss_7,
        gain_7,
        rsi_7,

        loss_14,
        rsi_14,
        gain_14,
        
        loss_21,
        gain_21,
        rsi_21,
        date
    ) VALUES (
        ticker_id,
        loss_7,
        gain_7,
        v_rsi_7,

        loss_14,
        gain_14,
        v_rsi_14,

        loss_21,
        gain_21,
        v_rsi_21,
        smd_date
    );

END //
DELIMITER ;