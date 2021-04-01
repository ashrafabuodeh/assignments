const city = document.getElementById("city");
const companyName = document.getElementById("company-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordCheck = document.getElementById("password-check");
const regularExpressionForEmail = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/;
const regularExpressionForPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;

checkValidate = (e) => {
    e.preventDefault();
    let check = true;
    if (email.value === '') {
        document.getElementById("email-error").innerHTML = "Please enter an email";
        check = false;
    } else
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
    if (!regularExpressionForPassword.test(password.value)) {
        document.getElementById("password-error").innerHTML = "Password must contains a mix of letters, numbers & symbols";
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
    {
        const user = new User(email , companyName , password , city);
        addUser(user);
    }
}

addUser = user => {
    const convertToJSON = JSON.stringify(user.personInfo);
    if (localStorage.getItem(user.personInfo.email) === null) {
        localStorage.setItem(user.personInfo.email, convertToJSON);
        location.replace("../task_1/index.html");   
    } else {
        document.getElementById("email-error").innerHTML = "This email already exists";
    }
}

class User{
    personInfo = {
        email: '',
        companyName: '',
        password: '',
        city: ''
    };
    constructor(email , companyName , password , city){
        this.personInfo.email = email.value ;
        this.personInfo.companyName = companyName.value,
        this.personInfo.password = password.value ,
        this.personInfo.city = city.value
    }
}
