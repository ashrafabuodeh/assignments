const email = document.getElementById("email");
const companyName = document.getElementById("companyName");
const password = document.getElementById("password1");
const passwordCheck = document.getElementById("password2");
const city = document.getElementById("city");
function checkValidate(e) {
    e.preventDefault();
    let check = true;
    const regularExpressionForEmail = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/;
    if (!regularExpressionForEmail.test(email.value)) {
        document.getElementById("emailError").innerHTML = "Email is not valid";
        check = false;
    } else {
        document.getElementById("emailError").innerHTML = "";
    }
    if (companyName.value === "") {
        document.getElementById("companyError").innerHTML = "Company name can't be empty";
        check = false;
    } else {
        document.getElementById("companyError").innerHTML = "";
    }
    const regularExpressionForPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/;
    if (!regularExpressionForPassword.test(password.value)) {
        document.getElementById("passwordError").innerHTML = "Password must have 8 or more characters with a mix of letters, numbers & symbols.";
        check = false;
    } else {
        document.getElementById("passwordError").innerHTML = "";
        if (password.value !== passwordCheck.value) {
            document.getElementById("passwordCheckError").innerHTML = "Passwords don't match";
            check = false;
        } else {
            document.getElementById("passwordCheckError").innerHTML = "";
        }
    }
    if (city.value === "Choose Your City") {
        document.getElementById("optionError").innerHTML = "please select a City ";
        check = false;
    } else {
        document.getElementById("optionError").innerHTML = "";
    }
    if(check)
    adduser(email, companyName, password, city);
}
function adduser(email, companyName, password, city) {
    const user = {
        email: email.value,
        companyName: companyName.value,
        password1: password.value,
        city: city.value,
    };
    const convertToJSON = JSON.stringify(user);
    for(let i = 0; i < localStorage.length; i++)
    {
        if(localStorage.getItem(email.value) === null)
        {
        localStorage.setItem(email.value, convertToJSON);
        location.replace("task_1/index.html");
        }
        else
        {
            document.getElementById("emailError").innerHTML = "This email is exist";
        }
    }
}

