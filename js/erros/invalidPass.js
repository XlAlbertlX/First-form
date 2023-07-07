let errorPass = false; //глобальная переменная, которая отвечает за состояние валидности полей

//создание ошибки при коротком пароле
let shortPass = '';
shortPass = document.createElement('div');
shortPass.className = 'error';
shortPass.display = 'none';
document.getElementById('form__item3').appendChild(shortPass);

document.getElementById('pass').addEventListener("change", function (event){
    event.preventDefault();
    let pass = document.getElementById('pass').value;
    let pass2 = document.getElementById('pass2').value;
    if (pass.length <= 5) {
        shortPass.style.display = 'block';
        shortPass.textContent = "Пароль слишком короткий. Мнимальная длина пароля - 6 символов!";
        errorPass = true;
    }
    if (pass.length > 5 || pass.value !== ""){
        shortPass.style.display = 'none';
        errorPass = false;
    }

    if (pass !== pass2) {
        PassMismatch.style.display = 'block';
        PassMismatch.textContent = "Пароли не совпадают!";
        errorPass = true;
    }
    if (pass === pass2) {
        PassMismatch.style.display = 'none';
        errorPass = false;
    }

    return errorPass;
});


//создание ошибки при несовпадении паролей
let PassMismatch = '';
PassMismatch = document.createElement('div');
PassMismatch.className = 'error';
PassMismatch.display = 'none';
document.getElementById('form__item4').appendChild(PassMismatch);

document.getElementById('pass2').addEventListener("change", function (event){
    event.preventDefault();
    let pass = document.getElementById('pass').value;
    let pass2 = document.getElementById('pass2').value;
    if (pass !== pass2) {
        PassMismatch.style.display = 'block';
        PassMismatch.textContent = "Пароли не совпадают!";
        errorPass = true;
    }
    if (pass === pass2) {
        PassMismatch.style.display = 'none';
        errorPass = false;
    }
    return errorPass;
});


//ошибка, если используются запрещенные символы


let invalidPass = '';
invalidPass = document.createElement('div');
invalidPass.className = 'error';
invalidPass.display = 'none';
document.getElementById('form__item3').appendChild(invalidPass);

document.getElementById('pass').addEventListener("change", function (event){
    event.preventDefault();
    let pass = event.target;
    if (!pass.validity.valid && pass.value != "") {
        invalidPass.style.display = 'block';
        pass.className = 'pod';
        invalidPass.textContent = "Пароль должен состоять только из латинских букв, цифр и специальных символов (!@#$%^&*)";
        errorPass = true;
    }
    if (pass.value == "") {
        invalidPass.style.display = 'none';
        pass.className = '';
    }
    if (pass.validity.valid) {
        invalidPass.style.display = 'none';
        errorPass = false;
    }
    return errorPass;
});









