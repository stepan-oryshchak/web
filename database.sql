USE web_lab_5;

CREATE TABLE projectors (
    id SERIAL PRIMARY KEY,
    model VARCHAR(255) NOT NULL,
	resolution NUMERIC(5) NOT NULL,
    input_type VARCHAR(255) NOT NULL,
    price NUMERIC(10, 2) NOT NULL
);