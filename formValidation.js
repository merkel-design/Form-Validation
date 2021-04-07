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

 

    
    
    // USERNAME
    if (usernameValue.length > 3){
        successForm(username);
        //, username-grid-item-parent
    }
    else if (usernameValue.length <= 3){
        errorForm(username, "Your username must be longer than 3 letters");
    }
    
    // EMAIL

    if (emailValue === '') {
        errorForm(email, "Your email cannot be blank.");
    }
    else if (!validateEmail(emailValue)){
        errorForm(email, "Email is not valid");
    }
    else {
        successForm(email)
    };


// End of function
};


function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


function successForm(inputID, checkmarkParent) {
    //adds the green border 
    //then if the error class was added before this instant, the error class is removed
    inputID.classList.remove("grid-form-item-position-error");
    inputID.classList.add("grid-form-item-position-success");

    //username-grid-item-parent

    // checkmarkParent.i.classList.remove("hiding-toggle");

    
    
};

function errorForm(inputID, message) {
    //adds the red border
    inputID.classList.add("grid-form-item-position-error");
    inputID.classList.remove("grid-form-item-position-success");
    console.log(message);
};

