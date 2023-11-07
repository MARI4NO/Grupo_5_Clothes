# crear la BD para Concert PASS
CREATE DATABASE IF NOT EXISTS `concertpass_db` DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish_ci;

USE `concertpass_db`;

# Eliminar si existen las tablas
DROP TABLE IF EXISTS `sales_products`;

DROP TABLE IF EXISTS `sales`;

DROP TABLE IF EXISTS `products`;

DROP TABLE IF EXISTS `users`;

# crear las tablas de Concert PASS
--
-- Table structure for table `users`
--
CREATE TABLE `users` (
  `id` INT AUTO_INCREMENT,
  `firstName` VARCHAR(50) NOT NULL,
  `lastName` VARCHAR(50) NOT NULL,
  `email` VARCHAR(200) UNIQUE NOT NULL,
  `password` VARCHAR(100) NOT NULL,
  `image` VARCHAR(150) NOT NULL,
  PRIMARY KEY(`id`)
);

--
-- Table structure for table `products`
--
CREATE TABLE `products` (
  `id` INT AUTO_INCREMENT,
  `title` VARCHAR(300) NOT NULL,
  `image` VARCHAR(150) NOT NULL,
  `city` VARCHAR(200) NOT NULL,
  `place` VARCHAR(200) NOT NULL,
  `address` VARCHAR(250) NOT NULL,
  `date` DATE NOT NULL,
  `type` VARCHAR(150) NOT NULL,
  `price` DECIMAL(13, 2) UNSIGNED NOT NULL,
  `availables` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`)
);

--
-- Table structure for table `sales`
--
CREATE TABLE `sales` (
  `id` INT AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `totalPrice` DECIMAL(13, 2) UNSIGNED NOT NULL,
  `status` VARCHAR(100) NOT NULL,
  PRIMARY KEY(`id`),
  KEY `fk_sales_user_id` (`user_id`),
  CONSTRAINT `fk_sales_user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
);

--
-- Table structure for table `sales_products`
--
CREATE TABLE `sales_products` (
  `id` INT AUTO_INCREMENT,
  `product_id` INT NOT NULL,
  `sale_id` INT NOT NULL,
  `cant` INT UNSIGNED NOT NULL,
  PRIMARY KEY(`id`),
  CONSTRAINT `fk_sales_products_product_id` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  CONSTRAINT `fk_sales_products_sale_id` FOREIGN KEY (`sale_id`) REFERENCES `sales` (`id`)
);