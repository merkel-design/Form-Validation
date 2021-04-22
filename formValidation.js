const form = document.getElementById('form');
const username = document.getElementById('username');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
const email = document.getElementById('email');
const formItem = document.getElementsByClassName('grid-form-item-position');
const usernameCheckmark = document.getElementById('usernameCheckmark');
const emailCheckmark = document.getElementById('emailCheckmark');
const usernameErrorMessage = document.getElementById('usernameErrorMessage');
const emailErrorMessage =  document.getElementById('emailErrorMessage');

const password1message = document.getElementById('password1message');
const password2message = document.getElementById('password2message');



form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();

     const password1Value = password1.value.trim();
     const password2Value = password2.value.trim();
    

    
    // USERNAME
    if (usernameValue.length > 3){
        successForm(username, usernameCheckmark, usernameExclamation, usernameErrorMessage);
        
    }
    else if (usernameValue.length <= 3){
        errorForm(username, "Your username must be longer than 3 letters", usernameErrorMessage, usernameExclamation, usernameCheckmark);
    }
    
    // EMAIL

    if (emailValue === '') {
        errorForm(email, "Your email cannot be blank.", emailErrorMessage, emailExclamation, emailCheckmark);
    }
    else if (!validateEmail(emailValue)){
        errorForm(email, "Email is not valid", emailErrorMessage, emailExclamation, emailCheckmark);
    }
    else {
        successForm(email, emailCheckmark, emailExclamation, emailErrorMessage)
    };

    //PASSWORDS
    

    for (let i = 0; i < password1Value.length; i++) {
        let password1splitted = password1Value.split('');
        let password2splitted = password2Value.split('');

        
        if (password1splitted[i] !== password2splitted[i]) {
            errorForm(password1, "The passwords must match", password1message, password1Exclamation, password1Checkmark);
            errorForm(password2,"The passwords must match", password2message, password2Exclamation, password2Checkmark);
            
        }
        else if (password1splitted.length !== password2splitted.length) {
            errorForm(password1,"The passwords must match", password1message, password1Exclamation, password1Checkmark);
            errorForm(password2,"The passwords must match", password2message, password2Exclamation, password2Checkmark);
        }
        else {
            successForm(password1, password1Checkmark, password1Exclamation, password1message);
            successForm(password2, password2Checkmark, password2Exclamation, password2message);
            
           
        }
    }


// End of function
};


function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


function successForm(inputID, checkmarkParent, removeIcon, messageContainer) {
    //adds the green border 
    //then if the error class was added before this instant, the error class is removed
    //removeIcon is there to remove the prior exclamation mark

    inputID.classList.remove("grid-form-item-position-error");
    inputID.classList.add("grid-form-item-position-success");

    checkmarkParent.classList.remove("hidingToggle");
    removeIcon.classList.add("hidingToggle");

    (messageContainer).innerHTML = " ";
    
    
};

function errorForm(inputID, message, messageContainer, exclamationParent, removeIcon) {
    //adds the red border
    //removeIcon is there to remove the prior check mark
    inputID.classList.add("grid-form-item-position-error");
    inputID.classList.remove("grid-form-item-position-success");

    exclamationParent.classList.remove("hidingToggle");
    removeIcon.classList.add("hidingToggle");

    (messageContainer).textContent = message;


    


    console.log(message);
};

