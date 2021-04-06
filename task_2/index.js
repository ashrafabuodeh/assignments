checkFormInputValidate = (e) => {
    const city = document.forms['form']['city'].value ?? '';
    const companyName = document.forms['form']['companyName'].value ?? '';
    const email = document.forms['form']['email'].value ?? '';
    const password = document.forms['form']['password'].value ??'';
    const passwordCheck = document.forms['form']['passwordCheck'].value ??'';
    e.preventDefault();

    const account = new Account({email, companyName, password, passwordCheck, city});
    account.validateAccount();
    account.setAccount();
}


class Account {
    constructor({email, companyName, password, passwordCheck, city}){
          this.city = city,
          this.companyName = companyName,
          this.email = email;
          this.isValidateAccount = true,
          this.password = password,
          this.passwordCheck = passwordCheck
    }

    /**
     * Set accounts for users and check if the account for user is exist, then add  account details to local storage as object
     */
    setAccount = () => {
        const accountStringify = JSON.stringify(this);
        if (this.isValidateAccount)
            if (localStorage.getItem(this.email) === null) {
                localStorage.setItem(this.email, accountStringify);
                location.replace("../task_1/index.html");
            } else {
                displayError('email-error');
            }
    }

     /**
     * Check validate for account by calling all validates input in form
     */
      validateAccount = () => {
        this.validateCity();
        this.validateCompanyName();
        this.validatePassword();
    }

    /**
     * Check validate for city if the user choose city or not 
     */
    validateCity = () => {
        if (this.city === "Choose Your City") {
            displayError("option-error");
            this.isValidateAccount = false;
        } else {
            removeError("option-error");
        }
    }

    /**
     * Check validate for company Name if it is empty or not 
     */
    validateCompanyName = () => {
        if (this.companyName.trim() ==='') {
            displayError("company-error");
            this.isValidateAccount = false;
        } else {
            removeError("company-error");
        }
    }

    /**
     * Check validate for password by regular expression 
     */
    validatePassword = () => {
        const regularExpressionForPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
        if (!regularExpressionForPassword.test(this.password)) {
            displayError("password-error");
            this.isValidateAccount = false;
        } else {
            removeError('password-error');
            this.validatePasswordCheker();
        }
    }

    /**
     * Check validate for confirm password if it is the same for the original password
     */
    validatePasswordCheker = () => {
        if (this.password !== this.passwordCheck) {
            displayError("password-check-error");
            this.isValidateAccount = false;
        } else {
            removeError("password-check-error");
        }
    }
}

displayError = (errorId) => {
    document.getElementById(errorId).style.display = "block";
}

removeError = (errorId) => {
    document.getElementById(errorId).style.display = "none";
}
