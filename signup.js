
function get_username_field(){
    let username = document.getElementById("username");                         //Get the username field in the DOM via getElementByID() and using the id "username"
    let user_input = username.value;
    return user_input;
}

function get_email_field(){
    let email = document.getElementById("email");                               //Get the email field in the DOM via getElementByID() and using the id "email"
    let user_input = email.value;
    return user_input;
}

function get_password_field(){
    let password = document.getElementById("password");                          //Get the password field in the DOM via getElementByID() and using the id "password"
    let user_input = password.value;
    return user_input;
}

function get_confirm_password_field(){
    let confirm_password = document.getElementById("confirm_password");           //Get the confirm_password field in the DOM via getElementByID() and using the id "confirm_password"
    let user_input = confirm_password.value;
    return user_input;
}

function validate_username(username){

    if (username.length > 20 || username.length < 3){
        return false;
    } 

    return /^[A-Za-z0-9-_]+$/.test(username);

}

function validate_password(password){

    if (password.length < 8){
        return false;
    } 
    
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9\s])/.test(password);

}   

function validate_email(email){

    return /^[^\s@(),:;<>\[\]]+@[^\s@(),:;<>\[\]]+\.(com|io|net)$/.test(email);

}

function validate_confirm_password(password, confirm_password){

    if (password != confirm_password){
        return false;
    }

    return true;
}


function main(){

    username = get_username_field();
    email = get_email_field();
    password = get_password_field();
    confirm_password = get_confirm_password_field();
    const form = document.getElementById("signup_form");

    if (validate_username(username) == false) {
        let username_invalid = document.querySelector(".invalid_username");
        if (username_invalid == null) {
            username_invalid = document.createElement("div");
            username_invalid.classList.add("invalid_username", "invalid_signup");
            form.after(username_invalid);
            username_invalid.textContent =  "Username is invalid (must be 3-20 characters long and only have a-z, 0-9, - and _)";
        }       
    }
    else{
        let username_invalid = document.querySelector(".invalid_username");
        if (username_invalid != null) {
            username_invalid.remove();
        }
    }

    if (validate_email(email) == false) {
        let email_invalid = document.querySelector(".invalid_email");
        if (email_invalid == null) {
            email_invalid = document.createElement("div");
            email_invalid.classList.add("invalid_email", "invalid_signup");
            form.after(email_invalid);
            email_invalid.textContent =  "Email is invalid (MUST contain @ and end with .com, .net, or .io)";
            }
        }
    else{
        let email_invalid = document.querySelector(".invalid_email");
        if (email_invalid != null) {
            email_invalid.remove();
            }
        } 

    if (validate_password(password) == false) {
        let password_invalid = document.querySelector(".invalid_password");
        if (password_invalid == null) {
            password_invalid = document.createElement("div");
            password_invalid.classList.add("invalid_password", "invalid_signup");
            form.after(password_invalid);
            password_invalid.textContent = "Password is invalid (MIN 8 characters, MUST contain a lowercase, uppercase, special charatcer, no spaces)";
        }    
    }
    else{
        let password_invalid = document.querySelector(".invalid_password");
        if (password_invalid != null) {
            password_invalid.remove();
            }
    }


    if (validate_confirm_password(password, confirm_password) == false) {
        let confirm_password = document.querySelector(".invalid_confirm_password");
        if (confirm_password == null) {
            confirm_password = document.createElement("div");
            confirm_password.classList.add("invalid_confirm_password","invalid_signup");
            form.after(confirm_password);
            confirm_password.textContent = "Passwords Don't match";
        }    
    }
    else{
        let validate_password = document.querySelector(".invalid_confirm_password");
        if (validate_password != null) {
            validate_password.remove();
            }
    }

    if ((validate_username(username) == true) && (validate_email(email) == true) &&
        (validate_password(password) == true) && (validate_confirm_password(password, confirm_password) == true)){
        const account_success = document.createElement("div");
        account_success.textContent = "Signup Successful! Redirecting to Login...";
        account_success.classList.add("success_box");
        document.body.appendChild(account_success);
        form.after(account_success);
        setTimeout(function(){
                window.location.href = "login.html";
            }, 2000)

    }

}

let button = document.getElementById("signup_button");
button.addEventListener("click", main);