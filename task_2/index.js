checkFormInputValidate = (e) => {
    const city = document.forms['form']['city'].value??'';
    const companyName = document.forms['form']['companyName'].value??'';
    const email = document.forms['form']['email'].value??'';
    const password = document.forms['form']['password'].value??'';
    const passwordCheck = document.forms['form']['passwordCheck'].value??'';
    const regularExpressionForPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    e.preventDefault();
    let check = true;
    if (companyName === "") {
        errorDisplay("company-error");
        check = false;
    } else {
        document.getElementById("company-error").style.display = "none";
    }
    if (!regularExpressionForPassword.test(password)) {
        errorDisplay("password-error");
        check = false;
    } else {
        document.getElementById("password-error").style.display = "none";
        if (password !== passwordCheck) {
            errorDisplay("password-check-error");
            check = false;
        } else {
            document.getElementById("password-check-error").style.display = "none";
        }
    }
    if (city === "Choose Your City") {
        errorDisplay("option-error");
        check = false;
    } else {
        document.getElementById("option-error").style.display = "none";
    }
    if (check) {
        const user = new User(email, companyName, password, city);
        user.addUser();
    }
}


errorDisplay = (errorId) => {
    document.getElementById(errorId).style.display = "block";
}

class User {
    personInfo = {
        email: '',
        companyName: '',
        password: '',
        city: ''
    };
    constructor(email, companyName, password, city) {
        this.personInfo.email = email;
        this.personInfo.companyName = companyName,
        this.personInfo.password = password,
        this.personInfo.city = city
    }

    addUser = () => {
        const userStringify = JSON.stringify(this.personInfo);
        if (localStorage.getItem(this.personInfo.email) === null) {
            localStorage.setItem(this.personInfo.email, userStringify);
            location.replace("../task_1/index.html");
        } else {
            document.getElementById('email-error').style.display = "block";
        }
    }
}
