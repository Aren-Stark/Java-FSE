select distinct h.hotel_id,h.hotel_name,h.rating 
      from Hotel_details h
      join Orders o on h.hotel_id=o.hotel_id
      where monthname(o.order_date)="July"
      order by h.hotel_id;