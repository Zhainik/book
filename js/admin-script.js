// admin-script.js

document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Проверка логина и пароля
    if (username === 'a1' && password === 'p1') {
        // Вход выполнен успешно
        alert('Вход выполнен успешно!');
        // Вход администратора 1
        window.location.href = 'admin-dashboard.html';
    } else if (username === 'a2' && password === 'p2') {
        // Вход выполнен успешно
        alert('Вход выполнен успешно!');
        // Вход администратора 2
        window.location.href = 'admin-dashboard.html';
    } else {
        // Неверный логин или пароль    
        alert('Ошибка входа. Проверьте логин и пароль.');
    }
});
