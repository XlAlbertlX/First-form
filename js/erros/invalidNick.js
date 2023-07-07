let input = document.getElementById('nick');

//создаем элемент, в котором будет содержаться ошибка
let elem = document.createElement('div');
elem.id = 'notify';
elem.style.display = 'none';
document.getElementById('form__item1').appendChild(elem);
let errorNickname = false;

document.getElementById('nick').addEventListener("invalid", function (event) {
    event.preventDefault();
    if (!input.validity.valid && input.value != "") {
        elem.textContent   = 'Можно использовать только латинские символы, цифры, - и _ ! Длина ника от 5 до 16 символов!';
        elem.className     = 'error';
        elem.style.display = 'block';
        input.className    = 'pod';
        errorNickname = true;
    }
    else {
        errorNickname = false;
    }
    return errorNickname;
});

document.getElementById('nick').addEventListener("blur", function (event) {
    event.preventDefault();
    if (!input.validity.valid && input.value != "") {
        elem.textContent   = 'Можно использовать только латинские символы, цифры, - и _ ! Длина ника от 5 до 16 символов!';
        elem.className     = 'error';
        elem.style.display = 'block';
        input.className    = 'pod';
        errorNickname = true;
    }
    else {
        input.className = '';
        errorNickname = false;
    }
    return errorNickname;
});



input.addEventListener('input', function(event){
    //Добавление подъема заголовка, если в поле есть текст
    if (input.value.length > 0) {
        input.className = 'pod';
    }
    else {
        input.className = '';
    }
    if ( 'block' === elem.style.display ) {
        input.className = 'pod';
        elem.style.display = 'none';
    }
});

