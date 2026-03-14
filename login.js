

async function get_data(){
    const data = await fetch("https://jsonplaceholder.typicode.com/users");         //Fetch user data from https://jsonplaceholder.typicode.com/users
    const users = await data.json();                                                //get the data and convert to json
    return users;
}

function get_username_field(){
    let username = document.getElementById("username");                     //Get the username field in the DOM via getElementByID() and using the id "username"
    let user_input = username.value;
    return user_input;
}

function get_password_field(){
    let password = document.getElementById("email");                     //Get the password field in the DOM via getElementByID() and using the id "email"
    let user_input = password.value;
    return user_input;
}

async function compare_username(user_input){
    let users = await get_data();
    for (let i = 0; i < users.length; i++){
        if (user_input.toLowerCase() == users[i].username.toLowerCase()){     //If the user's username is equal to any username in users file return user ID
            return users[i].id;
        }
    }
    return null;
}

async function compare_password(user_input, user_id){
    let users = await get_data();
    for (let i = 0; i < users.length; i++){
        if (users[i].id === user_id){                                   //If the user's username is equal to any username in users file check if the email field matches the user's email
            if (user_input === users[i].email){
                return true;
            }
        }
    }
    return false;
}

async function main(){
    let username = get_username_field();
    let user_id = await compare_username(username);
    const form = document.getElementById("login_form");


    if (user_id != null){
        let email = await get_password_field();
        let email_matches = await compare_password(email, user_id);
        if (email_matches == true){
            const email_success = document.createElement("div");
            email_success.textContent = "Password matches!";
            email_success.classList.add("login_success");
            document.body.appendChild(email_success);
            form.after(email_success);
            setTimeout(function(){
                window.location.href = "menu_view.html";
            }, 2000)
            
        }

        else{
            let email_invalid = document.querySelector(".invalid_email");
            if (email_invalid == null){
                const email_fail = document.createElement("div");
                email_fail.textContent = "Wrong Password";
                email_fail.classList.add("login_fail", "invalid_email");
                document.body.appendChild(email_fail);
                form.after(email_fail);
                }  
        }
    }

    else{
        let username_invalid = document.querySelector(".invalid_username");

        if (username_invalid == null){
            const username_does_not_match = document.createElement("div");
            username_does_not_match.textContent = "Username is not in our database";
            username_does_not_match.classList.add("login_fail", "invalid_username");
            document.body.appendChild(username_does_not_match);
            form.after(username_does_not_match);
            }
        }
    
    }

let button = document.getElementById("login_button");
button.addEventListener("click", main);