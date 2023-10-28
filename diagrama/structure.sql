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

# Insertar datos en la BD de Concert PASS
--
-- Insert data into the table `users`
--
INSERT INTO
  `users`
VALUES
  (
    '1',
    'Juan',
    'Garnica',
    'test@test.es',
    '$2a$10$eP/SHHZjrRQAPusoXh/vt.P9vWSgdn3c5Qd5xcb6hT.Jyj7DP.fdu'
  ),
  (
    '2',
    'Lucia',
    'Sanchez',
    'lucia@mail.es',
    '$2a$10$eP/SHHZjrRQAPusoXh/vt.P9vWSgdn3c5Qd5xcb6hT.Jyj7DP.fdu'
  ),
  (
    '3',
    'Carlos',
    'Mendez',
    'carlos@mail.es',
    '$2a$10$eP/SHHZjrRQAPusoXh/vt.P9vWSgdn3c5Qd5xcb6hT.Jyj7DP.fdu'
  ),
  (
    '4',
    'Marcos',
    'Gomez',
    'marcos@mail.es',
    '$2a$10$eP/SHHZjrRQAPusoXh/vt.P9vWSgdn3c5Qd5xcb6hT.Jyj7DP.fdu'
  ),
  (
    '5',
    'María',
    'Sanchez',
    'maria@mail.es',
    '$2a$10$eP/SHHZjrRQAPusoXh/vt.P9vWSgdn3c5Qd5xcb6hT.Jyj7DP.fdu'
  );

--
-- Insert data into the table `products`
--
INSERT INTO
  `products`
VALUES
  (
    '1',
    'Fila 9 - Sin Escalas - Tour 2023',
    'image-1694544036024.png',
    'Guadalajara',
    'Cuerda Cultura',
    'Calle Garibaldi 580',
    '2023-09-01',
    'Meet & Greet',
    '20000',
    '400'
  ),
  (
    '2',
    'Taylor Swift - The eras tour',
    'image-1694544386397.png',
    'Buenos Aires',
    'Estadio River Plate',
    'Av. Pres. Figueroa Alcorta 7597',
    '2023-09-09',
    'Popular',
    '20000',
    '900'
  ),
  (
    '3',
    'The Lumineers - South America Tour 2023',
    'image-1694544534211.png',
    'Buenos Aires',
    'Estadio Obras',
    'Av. del Libertador 7395',
    '2023-10-01',
    'Popular',
    '15000',
    '400'
  ),
  (
    '4',
    'Lollapalooza Argentina',
    'image-1694544678404.png',
    'San Isidro',
    'Hipódromo de San Isidro',
    'Av. Bernabé Márquez 700',
    '2024-03-15',
    'Popular',
    '50000',
    '456'
  ),
  (
    '5',
    'Duki',
    'image-1694544846183.jpg',
    'Buenos Aires',
    'Estadio River Plate',
    'Av. Pres. Figueroa Alcorta 7597',
    '2023-12-02',
    'Platea',
    '40000',
    '345'
  ),
  (
    '6',
    'Abel Pintos - Amores y Rarezas',
    'image-1694745003185.jpg',
    'Buenos Aires',
    'Estadio Vélez Sarsfield',
    'Av. Juan Bautista Justo 9200',
    '2023-11-18',
    'Popular',
    '20000',
    '346'
  );

--
-- Insert data into the table `sales`
--
INSERT INTO
  `sales`
VALUES
  ('1', '1', '40000', 'pagado'),
  ('2', '2', '15000', 'pendiente'),
  ('3', '5', '140000', 'pagado'),
  ('4', '1', '75000', 'pendiente');

--
-- Insert data into the table `sales_products`
--
INSERT INTO
  `sales_products`
VALUES
  ('1', '1', '1', '2'),
  ('2', '3', '2', '1'),
  ('3', '4', '3', '2'),
  ('4', '5', '3', '1'),
  ('5', '2', '4', '3'),
  ('6', '3', '4', '1');