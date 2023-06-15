// script.js 

// Обработчик события отправки формы
document.getElementById('search-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Отменить отправку формы

    // Получить значения полей поиска
    var phoneNumber = document.getElementById('phone-number').value.toLowerCase();
    var fullName = document.getElementById('full-name').value.toLowerCase();
    var organization = document.getElementById('organization').value.toLowerCase();
    var address = document.getElementById('address').value.toLowerCase();

    console.log('Выполняется поиск:');
    console.log('Номер телефона:', phoneNumber);
    console.log('ФИО:', fullName);
    console.log('Название организации:', organization);
    console.log('Адрес:', address);

    // Получение строк таблицы
    var rows = document.getElementsByClassName('data-row');

    for (var i = 0; i < rows.length; i++) {
        var row = rows[i];
        var rowData = row.cells;

        // Получение значений из ячеек таблицы
        var phone = rowData[0].innerHTML.toLowerCase();
        var name = rowData[1].innerHTML.toLowerCase();
        var org = rowData[2].innerHTML.toLowerCase();
        var addr = rowData[3].innerHTML.toLowerCase();

        // Проверка соответствия значений поиска с данными ячеек
        if (phone.includes(phoneNumber) && name.includes(fullName) && org.includes(organization) && addr.includes(address)) {
            row.style.display = 'table-row'; // Отображение строки таблицы
        } else {
            row.style.display = 'none'; // Скрытие строки таблицы
        }
    }

    // Очистить значения полей поиска
    document.getElementById('phone-number').value = '';
    document.getElementById('full-name').value = '';
    document.getElementById('organization').value = '';
    document.getElementById('address').value = '';
});
