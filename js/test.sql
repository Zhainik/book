-- Создание таблицы "subscribers" для абонентов
CREATE TABLE subscribers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  phone_number VARCHAR(10) NOT NULL,
  registration_type ENUM('individual', 'organization') NOT NULL,
  last_name VARCHAR(50),
  first_name VARCHAR(50),
  middle_name VARCHAR(50),
  organization_name VARCHAR(100),
  department_name VARCHAR(100),
  country VARCHAR(50),
  city VARCHAR(50),
  street VARCHAR(100),
  house VARCHAR(10),
  apartment VARCHAR(10)
);

-- Создание таблицы "users" для пользователей системы
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  password VARCHAR(50) NOT NULL
);
