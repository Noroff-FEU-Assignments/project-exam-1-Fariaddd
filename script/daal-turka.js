const APIurl = 'http://projectexam.local/wp-json/wp/v2/posts'

const getDetail = document.querySelector("daall-container")

async function getPost(){
    try{
        const response = await fetch(APIurl);
        const responseJSON = await response.json();
        console.log(responseJSON);
        
        const myArr = responseJSON;
        for (let i = 0; i < myArr.length; i++){
            const name = getPost[i].id;
            getDetail.innerHTML += `
            <div class="div-container">
                <a href="daal-turka.html?id=${myArr[i]}">
                <img class="img" src="${myArr[i].x_featured_media_original}" alt="chana-masala">
                 </a>
                <div class="text">
                 <a href="daal-turka.html"><button>${myArr[i].title.rendered}</button>
                </a>
                </div>
            </div>`
        }
    }catch{

    }
}
getPost();