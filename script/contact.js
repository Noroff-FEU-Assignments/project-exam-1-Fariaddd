const contactForm = document.getElementById("contactForm");
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const seccessfull = document.querySelector("#seccessfull");
const subject = document.querySelector("#subject");
const errorNo = document.querySelectorAll(".bord-error");

function validateForm(){

    clearMessage();
    let errorSuccess = false;
   
    if(nameInput.value.length < 1){
        errorNo[0].innerText = "Name can not be blank";
        nameInput.classList.add("error-border");
        errorSuccess = true;
    }
    if(!emailIsValid(email.value)){
        errorNo[1].innerText = "Invalid email";
        email.classList.add("error-border");
        errorSuccess = true;
    }
    if(message.value.lenght < 25){
        errorNo[2].innerText = "Enter message";
        message.classList.add("error-border");
        errorSuccess = true;
    }
    if(subject.value.length < 15){
        errorNo[3].innerText = "Enter Your Subject";
        subject.classList.add("error-border");
        errorSuccess = true;
    } 
    if(!errorSuccess){
        seccessfull.innerText = " Your message has been sent!";
    }
}  
function clearMessage(){
    for(let i = 0; i < errorNo.length; i++){
        errorNo[i].innerText = "";
    }
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    message.classList.remove("error-border");
    subject.classList.remove("error-border");
}
function emailIsValid(email){
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}