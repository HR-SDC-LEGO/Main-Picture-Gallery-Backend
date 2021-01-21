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
  image_id INT,
  FOREIGN KEY (product_id) REFERENCES products(product_id),
  product_image varchar(255)
);

  insert into products (product_name, product_id) values("Colloseium", "1");
  insert into images (product_id, image_id, product_image)  values("1","1026", "https://legoimages.s3-us-west-1.amazonaws.com/Lego-product-pictures/10276_alt10.jpg");
  insert into images (product_id, image_id, product_image)  values("1","48573745", "https://legoimages.s3-us-west-1.amazonaws.com/Lego-product-pictures/10276_alt11.jpg");
  insert into images (product_id, image_id, product_image)  values("1","23442", "https://legoimages.s3-us-west-1.amazonaws.com/Lego-product-pictures/10276_alt12.jpg");
  insert into images (product_id, image_id, product_image)  values("1","1029345", "https://legoimages.s3-us-west-1.amazonaws.com/Lego-product-pictures/10276_alt13.jpg");
  insert into images (product_id, image_id, product_image)  values("1","9374675", "https://legoimages.s3-us-west-1.amazonaws.com/Lego-product-pictures/10276_alt14.jpg");
  insert into images (product_id, image_id, product_image)  values("1","2345", "https://legoimages.s3-us-west-1.amazonaws.com/Lego-product-pictures/10276_alt15.jpg");
  insert into images (product_id, image_id, product_image)  values("1","19374", "https://legoimages.s3-us-west-1.amazonaws.com/Lego-product-pictures/10276_alt16.jpg");
  insert into images (product_id, image_id, product_image)  values("1","1927", "https://legoimages.s3-us-west-1.amazonaws.com/Lego-product-pictures/10276_alt17.jpg");
  insert into images (product_id, image_id, product_image)  values("1","1076", "https://legoimages.s3-us-west-1.amazonaws.com/Lego-product-pictures/10276_alt18.jpg");
  insert into images (product_id, image_id, product_image)  values("1","10276", "https://legoimages.s3-us-west-1.amazonaws.com/Lego-product-pictures/10276_alt2.jpg");
  insert into images (product_id, image_id, product_image)  values("1","1276", "https://legoimages.s3-us-west-1.amazonaws.com/Lego-product-pictures/10276_alt3.jpg");
  insert into images (product_id, image_id, product_image)  values("1","103476", "https://legoimages.s3-us-west-1.amazonaws.com/Lego-product-pictures/10276_alt4.jpg");
  insert into images (product_id, image_id, product_image)  values("1","1025566", "https://legoimages.s3-us-west-1.amazonaws.com/Lego-product-pictures/10276_alt5.jpg");
  insert into images (product_id, image_id, product_image)  values("1","12876576", "https://legoimages.s3-us-west-1.amazonaws.com/Lego-product-pictures/10276_alt6.jpg");
  insert into images (product_id, image_id, product_image)  values("1","10454576", "https://legoimages.s3-us-west-1.amazonaws.com/Lego-product-pictures/10276_alt7.jpg");
  insert into images (product_id, image_id, product_image)  values("1","102553376", "https://legoimages.s3-us-west-1.amazonaws.com/Lego-product-pictures/10276_alt8.jpg");
  insert into images (product_id, image_id, product_image)  values("1","10254376", "https://legoimages.s3-us-west-1.amazonaws.com/Lego-product-pictures/10276_alt9.jpg");


