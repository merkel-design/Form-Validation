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

 

    const regex = ['!','#','$','%','&',"'",'*','+','-','/','=','?','^','_',"`","{","}","|","]","[","(",")"];
    
    
    // USERNAME
    if (usernameValue.length > 3){
        successForm(username);
    }
    else if (usernameValue.length <= 3){
        errorForm(username, "Your username must be longer than 3 letters");
    }
    
    // EMAIL

    // let beforeAtSign = ;
    // let afterAtSign = ;

    for (i=0; i < emailValue.length; i++) {
        
        if (emailValue[0] === regex[i] || emailValue[emailValue.length - 1] === regex[i]) {
            errorForm(email, `"${regex[i]}" cannot be the first or last character in an email address. Please try again.`);
        }

        else if (emailValue.length >= 64) {
            errorForm(email, "Your email must be less than 64 characters.");
        }

        else if (emailValue.length >= 64) {
            errorForm(email, "Your email must be less than 64 characters.");
        }
        else if (emailValue[i] && emailValue[i+1] === regex[i]) {
            errorForm(email, "Your email cannot have consecutive special characters.");
        }
        // else if (emailValue){
        //     successForm(email)
        // }
        
    };

// End of function
};


function successForm(inputID) {
    //adds the green border 
    //then if the error class was added before this instant, the error class is removed
    inputID.classList.remove("grid-form-item-position-error");
    inputID.classList.add("grid-form-item-position-success");
    
};

function errorForm(inputID, message) {
    //adds the red border
    inputID.classList.add("grid-form-item-position-error");
    inputID.classList.remove("grid-form-item-position-success");
    console.log(message);
};

