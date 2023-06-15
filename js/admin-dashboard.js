// admin-dashboard.js

var table = document.getElementById("data-table");

// Обработчик события нажатия кнопки "Добавить"
document.getElementById("add-btn").addEventListener("click", function () {
    openModal("add");
});

// Обработчик события нажатия кнопки "Редактировать"
document.getElementById("edit-btn").addEventListener("click", function () {
    openModal("edit");
});

// Обработчик события нажатия кнопки "Удалить"
document.getElementById("delete-btn").addEventListener("click", function () {
    openModal("delete");
});

// Функция открытия модального окна
function openModal(mode) {
    var modal = document.getElementById("modal");

    if (mode === "add") {
        clearForm();
        modal.style.display = "inline";
    } else if (mode === "edit") {
        var selectedRow = getSelectedRow();
        if (selectedRow) {
            fillForm(selectedRow);
            modal.style.display = "inline";
        } else {
            alert("Пожалуйста, выберите строку для редактирования.");
        }
    } else if (mode === "delete") {
        var selectedRow = getSelectedRow();
        if (selectedRow) {
            if (confirm("Вы действительно хотите удалить эту запись?")) {
                deleteRecord(selectedRow);
            }
        } else {
            alert("Пожалуйста, выберите строку для удаления.");
        }
    }
}

// Функция очистки полей формы
function clearForm() {
    document.getElementById("phone").value = "";
    document.getElementById("registration-type").value = "";
    document.getElementById("country").value = "";
    document.getElementById("city").value = "";
    document.getElementById("street").value = "";
    document.getElementById("house").value = "";
    document.getElementById("apartment").value = "";
}
// Функция заполнения полей формы данными из выбранной строки таблицы
function fillForm(row) {
    var rowData = row.cells;
    document.getElementById("phone").value = rowData[0].innerHTML;
    document.getElementById("registration-type").value = rowData[1].innerHTML;
    document.getElementById("country").value = rowData[2].innerHTML;
    document.getElementById("city").value = rowData[3].innerHTML;
    document.getElementById("street").value = rowData[4].innerHTML;
    document.getElementById("house").value = rowData[5].innerHTML;
    document.getElementById("apartment").value = rowData[6].innerHTML;
}

// Функция получения выбранной строки таблицы
function getSelectedRow() {
    var selectedRow = table.querySelector(".selected");
    return selectedRow;
}

// Функция удаления записи
function deleteRecord(row) {
    row.parentNode.removeChild(row);
}

// Обработчик события нажатия кнопки "Сохранить"
document.getElementById("save-btn").addEventListener("click", function (event) {
    event.preventDefault();
    saveData();
});

// Функция сохранения данных
function saveData() {
    // Получение значений полей формы
    var phoneValue = document.getElementById("phone").value;
    var registrationTypeValue = document.getElementById("registration-type").value;
    var countryValue = document.getElementById("country").value;
    var cityValue = document.getElementById("city").value;
    var streetValue = document.getElementById("street").value;
    var houseValue = document.getElementById("house").value;
    var apartmentValue = document.getElementById("apartment").value;

    if (phoneValue.trim() === "" || registrationTypeValue.trim() === "" || countryValue.trim() === "" || cityValue.trim() === "" || streetValue.trim() === "" || houseValue.trim() === "" || apartmentValue.trim() === "") {
        alert("Пожалуйста, заполните все поля формы.");
        return;
    }

    // Отправка запроса на сервер API для сохранения данных
    fetch('http://localhost:3000/saveData', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            phone: phoneValue,
            registrationType: registrationTypeValue,
            country: countryValue,
            city: cityValue,
            street: streetValue,
            house: houseValue,
            apartment: apartmentValue,
        }),
    })
        .then((response) => response.text())
        .then((data) => {
            console.log(data);
            clearForm();
            document.getElementById("modal").style.display = "none";
        })
        .catch((error) => {
            console.error('Ошибка:', error);
            alert('Ошибка при сохранении данных');
        });
}


// Обработчик события нажатия кнопки "Отменить"
document.getElementById("cancel-btn").addEventListener("click", function (event) {
    event.preventDefault();
    clearForm();
    document.getElementById("modal").style.display = "none";
});

// Обработчик события нажатия на кнопку "Закрыть" в модальном окне
document.querySelector(".close").addEventListener("click", function () {
    clearForm();
    document.getElementById("modal").style.display = "none";
});

// Обработчик события нажатия на вне модального окна для его закрытия
window.addEventListener("click", function (event) {
    var modal = document.getElementById("modal");
    if (event.target === modal) {
        clearForm();
        modal.style.display = "none";
    }
});
