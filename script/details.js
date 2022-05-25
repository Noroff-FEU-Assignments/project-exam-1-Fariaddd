const queryString = document.location.search;
const params = new URLSearchParams(queryString):
const productsID = params.get("title")
const APIUrl = 'http://projectexam.local/wp-json/wp/v2/posts/${title}'
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