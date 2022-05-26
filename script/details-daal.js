const queryString = document.location.search;
const params = new URLSearchParams(queryString):
const productsID = params.get("id")
const APIUrl = 'http://projectexam.local/wp-json/wp/v2/posts/${id}'
const productsContainer =document.querySelector(".daal-container");
async function getDetails(){
    try {
        const response = await fetch(APIUrl);
        const responseJSON = await response.json();
        const id = responseJSON[i].id;
        productsContainer.innerHTML = `
        <div>id: ${id}</div>
        `

    }catch (error){
       // console.log(error)
    }
}
getDetails();