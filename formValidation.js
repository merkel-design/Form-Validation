const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const email = document.getElementById('email');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();


    if (usernameValue.length > 3){
        successForm(username)
    }
    else if (usernameValue.length <= 3){
        errorForm(username, "Your username must be longer than 3 letters")
    }

};


function successForm(input) {
    input.classList.add("success-input")
};

function errorForm(input, message) {
    input.classList.add("eror-input")
    console.log(message)
};

