
let formData = document.querySelector(".form");
let submitButton = document.querySelector(".button");
let errorMessages = document.querySelectorAll(".error-message");
let emptyfields = document.querySelectorAll(".empty-field");
let showPasswordButton = document.querySelector(".btn");

let firstName, lastName, email, password;
let fnTarget, lnTarget, emailTarget, pwdTarget;
let field;
let fnFlag, lnFlag, emailFlag, pwdFlag;

let nameRegex = /^[a-z]+$/i;
let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

for(let errorMessage of errorMessages){
    errorMessage.classList.add("d-none");
}

for(let message of emptyfields){
    message.classList.add("d-none");
}

formData.addEventListener("keyup", (e) => {
    e.preventDefault();
    field = e.target.dataset.key;
    switch (field){
        case "firstname":
            firstName = e.target.value;
            fnTarget = e.target;
            break;
        case "lastname":
            lastName = e.target.value;
            lnTarget = e.target;
            break;
        case "email":
            email = e.target.value;
            emailTarget = e.target;
            break;
        case "password":
            password = e.target.value;
            pwdTarget = e.target;
            break;
        default:
            firstName = lastName = email = password = "";
            break;
    }
});

submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(fnTarget, lnTarget, emailTarget, pwdTarget);
    if(firstName){
        emptyfields[0].classList.add("d-none");
        if(!nameRegex.test(firstName)){
            fnTarget.classList.add("error");
            errorMessages[0].classList.remove("d-none");
            fnFlag = false;
        }else{
            errorMessages[0].classList.add("d-none");
            fnTarget.classList.remove("error");
            fnFlag = true;
        }
    }else{
        emptyfields[0].classList.remove("d-none");
    }
    if(lastName){
        emptyfields[1].classList.add("d-none");
        if(!nameRegex.test(lastName)){
            lnTarget.classList.add("error")
            errorMessages[1].classList.remove("d-none");
            lnFlag = false;
        }else{
            errorMessages[1].classList.add("d-none");
            lnTarget.classList.remove("error");
            lnFlag = true;
        }
    }else{
        emptyfields[1].classList.remove("d-none");
    }
    if(email){
        emptyfields[2].classList.add("d-none");
        if(!emailRegex.test(email)){
            emailTarget.classList.add("error");
            errorMessages[2].classList.remove("d-none");
            emailFlag = false;
        }else{
            errorMessages[2].classList.add("d-none");
            emailTarget.classList.remove("error");
            emailFlag = true;
        }
    }else{
        emptyfields[2].classList.remove("d-none");
    }
    if(password){
        emptyfields[3].classList.add("d-none");
        if(!passwordRegex.test(password)){
            pwdTarget.classList.add("error");
            errorMessages[3].classList.remove("d-none");
            pwdFlag = false;
        }else{
            errorMessages[3].classList.add("d-none");
            pwdTarget.classList.remove("error");
            pwdFlag = true;
        }
    }else{
        emptyfields[3].classList.remove("d-none");
    }

    if(fnFlag && lnFlag && emailFlag && pwdFlag){
        fnTarget.value = lnTarget.value = emailTarget.value = pwdTarget.value = "";
        window.location.href = "./success.html"
    }
});

showPasswordButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (pwdTarget.getAttribute("type") === "text"){
        pwdTarget.setAttribute("type", "password");
    }else{
        pwdTarget.setAttribute("type", "text");
    }
})