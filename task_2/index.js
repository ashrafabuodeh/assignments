const email = document.getElementById("email");
const companyName = document.getElementById("company-name");
const password = document.getElementById("password");
const passwordCheck = document.getElementById("password-check");
const city = document.getElementById("city");

function checkValidate(e) {
    e.preventDefault();
    let check = true;
    const regularExpressionForEmail = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/;
    if (!regularExpressionForEmail.test(email.value)) {
        document.getElementById("email-error").innerHTML = "Email is not valid";
        check = false;
    } else {
        document.getElementById("email-error").innerHTML = "";
    }
    if (companyName.value === "") {
        document.getElementById("company-error").innerHTML = "Company name can't be empty";
        check = false;
    } else {
        document.getElementById("company-error").innerHTML = "";
    }
    const regularExpressionForPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/;
    if (!regularExpressionForPassword.test(password.value)) {
        document.getElementById("password-error").innerHTML = "Password must have 8 or more characters with a mix of letters, numbers & symbols.";
        check = false;
    } else {
        document.getElementById("password-error").innerHTML = "";
        if (password.value !== passwordCheck.value) {
            document.getElementById("password-check-error").innerHTML = "Passwords don't match";
            check = false;
        } else {
            document.getElementById("password-check-error").innerHTML = "";
        }
    }
    if (city.value === "Choose Your City") {
        document.getElementById("option-error").innerHTML = "please select a City ";
        check = false;
    } else {
        document.getElementById("option-error").innerHTML = "";
    }
    if (check)
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
    if (localStorage.getItem(email.value) === null) {
        localStorage.setItem(email.value, convertToJSON);
        location.replace("/task_1/index.html");
    } else {
        document.getElementById("email-error").innerHTML = "Email is exist";
    }
}
