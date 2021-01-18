drop database if Exists LEGO;

create database LEGO;
use LEGO;

create Table products (
  product_name varchar(55),
  product_id int not null AUTO_INCREMENT,
  PRIMARY KEY(product_id)
);

create table images (
  product_id INT,
  FOREIGN KEY (product_id) REFERENCES products(product_id),
  product_image varchar(255)
);

