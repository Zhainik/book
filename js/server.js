// server.js

const express = require('express');
const mysql = require('mysql');

const app = express();

// Параметры подключения к базе данных MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456789',
    database: 'test',
});

// Подключение к базе данных
connection.connect((err) => {
    if (err) {
        console.error('Ошибка подключения к базе данных:', err);
        return;
    }
    console.log('Подключено к базе данных MySQL');
});


// Обработчик запроса на сохранение данных
app.post('http://localhost:3000/saveData', (req, res) => {
    // Извлечение данных из запроса
    const phoneValue = req.body.phone;
    const registrationTypeValue = req.body.registrationType;
    const countryValue = req.body.country;
    const cityValue = req.body.city;
    const streetValue = req.body.street;
    const houseValue = req.body.house;
    const apartmentValue = req.body.apartment;

    // Выполнение операции сохранения данных в базу данных
    const query = 'INSERT INTO your_table_name (phone, registration_type, country, city, street, house, apartment) VALUES (?, ?, ?, ?, ?, ?, ?)';
    const values = [phoneValue, registrationTypeValue, countryValue, cityValue, streetValue, houseValue, apartmentValue];

    connection.query(query, values, (err, result) => {
        if (err) {
            console.error('Ошибка выполнения запроса:', err);
            res.status(500).send('Ошибка выполнения запроса');
            return;
        }

        console.log('Данные успешно сохранены');
        res.send('Данные успешно сохранены');
    });
});

// Запуск сервера
app.listen(3000, () => {
    console.log('Сервер запущен на порту 3000');
});
