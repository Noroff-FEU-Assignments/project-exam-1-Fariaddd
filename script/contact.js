const contactForm = document.querySelector('.contact-form');
const contactToster = document.querySelector('.contact-toaster');

async function formHandler (event){
    event.preventDefault()
    try{
        const formElement = event.target,
    { action, method } = formElement,
    body = new FormData(formElement);

    const Response = await fetch(action, {
        method,
        body
      })
      const Responsejson = await Response.json();
      console.log(Responsejson.message);
      contactToster.innerHTML = Responsejson.message

      const nameIput = this.querySelector('#yourName');
console.log(nameIput);
if(nameIput.value.length < 5){
    console.log(nameIput.classList)
    nameIput.classList.add("error")
}else{
    console.log(nameIput.value.length + 'ff')
    if(yourName.classList.contains("error")){
        yourName.classList.remove("error");
    }
    nameIput.classList.add("perfect")
}
const subjectIput = this.querySelector('#yourSubject');
console.log(subjectIput);
if(subjectIput.value.length < 15){
    console.log(subjectIput.classList)
    subjectIput.classList.add("error")
}else{
    console.log(subjectIput.value.length + 'ff')
    if(yourSubject.classList.contains("error")){
        yourSubject.classList.remove("error");
    }
    subjectIput.classList.add("perfect")
}
const yourMessage = this.querySelector('#yourMessage');
console.log(yourMessage);
if(yourMessage.value.length < 25){
    console.log(yourMessage.classList)
    yourMessage.classList.add("error")
}else{
    console.log(yourMessage.value.length + 'ff')
    if(yourMessage.classList.contains("error")){
        yourMessage.classList.remove("error");
    }
    yourMessage.classList.add("perfect")
}

const yourEmail = document.querySelector("#yourEmail").value;

const mailFormat =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(mailFormat.test(yourEmail) = true){
if(yourEmail.classList.contains("error")){
            yourEmail.classList.remove("error")}
};
}catch{

    }
}
contactForm.onsubmit= formHandler  





