const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get("id");

const APIUrl = `https://tame-safari.flywheelsites.com/wp-json/wp/v2/posts/${id}`
console.log(APIUrl);
const productsContainer =document.querySelector(".details-container");

async function getDetails(){
    try {
        const response = await fetch(APIUrl);
        const responseJSON = await response.json();
        const title = responseJSON[i].title;
        productsContainer.innerHTML = `
        <div>tittle: ${title}</div>
        `

    }catch (error){
       // console.log(error)
    }
}
getDetails();