drop database if Exists LEGO;

create database LEGO;
use LEGO;

create Table products (
  product_name varchar(55),
  product_id int,
  PRIMARY KEY(product_id)
);

create table images (
  FOREIGN KEY (product_id) REFERENCES products(product_id),
  product_imgae varchar(255)

);

