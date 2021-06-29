select rental_id,car_id,customer_id,km_driven
        from Rentals where month(return_date)=8 and  year(return_date)=2019;