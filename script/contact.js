
const contactForm = document.querySelector('.contact-form');
const contactToster = document.querySelector('.contact-toster');


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
    }catch{

    }

}
contactForm.onsubmit= formHandler