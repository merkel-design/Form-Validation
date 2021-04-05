const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const email = document.getElementById('email');
const formItem = document.getElementsByClassName('grid-form-item-position');


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
        successForm(username);
    }
    else if (usernameValue.length <= 3){
        errorForm(username, "Your username must be longer than 3 letters");
    }

};


function successForm(inputID) {
    inputID.classList.add("grid-form-item-position-success")
};

function errorForm(inputID, message) {
    inputID.classList.add("error")
    console.log(message)
};

