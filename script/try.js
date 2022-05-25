//const APIurl = 'http://projectexam.local/wp-json/wp/v2/posts'

//const getDetails = document.querySelector(".container-")

//async function getPosts(){
  //  try{
//         const response = await fetch(APIurl);
//         const responseJSON = await response.json();
//         console.log(responseJSON);
        
//         const myArr = responseJSON;
//         for (let i = 0; i < myArr.length; i++){
//             getDetails.innerHTML += `
//             <div class="div-container">
//                 <a href="products.html?id=${myArr[i].id}">
//                 <img class="img" src="${myArr[i].x_featured_media_original}" alt="chana-masala">
//                  </a>
//                 <div class="text">
//                  <a href="./products.html"><button>${myArr[i].title.rendered}</button>
//                 </a>
//                 </div>
//             </div>
//             `
//         }
//     }catch{

//     }
// }
// getPosts();