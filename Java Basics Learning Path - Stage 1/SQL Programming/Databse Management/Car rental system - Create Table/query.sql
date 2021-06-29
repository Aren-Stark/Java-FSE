CREATE TABLE Owners (
    owner_id VARCHAR(10) NOT NULL,
    owner_name VARCHAR(20) NULL,
    address VARCHAR(20)NULL,
    phone_no BIGINT NULL,
    email_id VARCHAR(20) NULL,
    PRIMARY KEY (owner_id)
);

CREATE TABLE Cars (
    car_id VARCHAR(10) NOT NULL PRIMARY KEY,
    car_name VARCHAR(20) NULL,
    car_type VARCHAR(20) NULL,
    owner_id VARCHAR(10) NULL,
    FOREIGN KEY (owner_id) REFERENCES Owners(owner_id)
);

CREATE TABLE Customers (
    customer_id VARCHAR(10) NOT NULL PRIMARY KEY,
    customer_name VARCHAR(20) NULL,
    address VARCHAR(20)NULL,
    phone_no BIGINT NULL,
    email_id VARCHAR(20) NULL
);

CREATE TABLE Rentals (
    rental_id VARCHAR(10) NOT NULL PRIMARY KEY,
    customer_id VARCHAR(10) NULL,
    car_id VARCHAR(10) NULL,
    pickup_date DATE NULL,
    return_date DATE NULL,
    km_driven INT NULL,
    fare_amount Double(10,2) NULL,
    FOREIGN KEY (customer_id) REFERENCES Customers(customer_id),
    FOREIGN KEY (car_id) REFERENCES Cars(car_id)
    
);

