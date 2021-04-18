CREATE TABLE plant(
  plant_id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  description VARCHAR(255),
  price INTEGER,
  image VARCHAR(255)
);


INSERT INTO plant (name, description, price, image) VALUES ('Golden Pothos', 'A low light plant', 5, 'https://cdn.shopify.com/s/files/1/0484/1865/2321/products/GoldenPothos2_700x700_crop_center.jpg?v=1605730445');

INSERT INTO plant (name, description, price, image) VALUES ('ZZ Plant', 'Great air filter', 19, 'https://cdn.shopify.com/s/files/1/0484/1865/2321/products/ZZ_Plant_6_inch_352x352.jpg?v=1613284865');

INSERT INTO plant (name, description, price, image) VALUES ('Pickle Plant', 'Do not eat these pickles', 7, 'https://cdn.shopify.com/s/files/1/0484/1865/2321/products/IMG_4818_352x352.jpg?v=1616175572');

INSERT INTO plant (name, description, price, image) VALUES ('Echeveria agavoides', 'A pet friendly succulet', 8, 'https://cdn.shopify.com/s/files/1/0484/1865/2321/products/APC_0009_352x352.jpg?v=1618598379');

