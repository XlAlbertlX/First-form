document.getElementById('form-reg').addEventListener("submit", allGood);

function allGood(event) {
    event.preventDefault();
    console.log(errorPass);
    if (errorNickname === false && errorPass === false) {
        window.location = 'http://www.broadsmile.ru';
    }
}