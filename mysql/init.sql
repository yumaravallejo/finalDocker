
CREATE DATABASE IF NOT EXISTS app_db;

USE app_db;

CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario VARCHAR(255) NOT NULL,
    clave VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL
);

INSERT INTO usuarios (usuario, clave) VALUES ('Yumara', '123456');
INSERT INTO usuarios (usuario, clave) VALUES ('Javito', '123456');

INSERT INTO productos (nombre) VALUES ('Producto 1');
INSERT INTO productos (nombre) VALUES ('Producto 2');
INSERT INTO productos (nombre) VALUES ('Producto 3');
