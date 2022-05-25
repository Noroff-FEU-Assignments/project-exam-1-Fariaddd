const URL = 'http://projectexam.local/wp-json/wp/v2/posts/';

const productsContainer = document.querySelector(".container-food");

async function foodMeny(){
    try {
        const response = await fetch(URL);
        console.log(response)
        const responseJSON = await response.json();
      // console.log(productsData);
      for (lett i = 0; i < responseJSON.length; i++){
          const title = responseJSON[i].title.rendered;
         // console.log(title);
        productsContainer.innerHTML = '<section class="container-" ${}>
        <div class="div-container">
             <a href="./products.html">
             <img class="img" src="./img/chana-masala.webp" alt="chana-masala">
         </a>
             <div class="text">
              <a href="./buy.html"><button>Chana Masalaw</button>
             </a>
             </div>
         </div>
         <div class="div-container">
             <a href="./products.html">
             <img class="img" src="./img/Dall Turka.JPG" alt="Dall-Turka">
             </a>
             <div class="text"> 
                 <a href="./buy.html"><button>Dall Turka</button>
                 </a>
             </div>
         </div>
         <div class="div-container">
             <img class="img" src="./img/Vegetable Biryani.JPG" alt="Biryani">
             <div class="text">
                 <a href="./products.html"><button>Vegetable Biryani</button></a>
             </div>
     </section>'
       console.log(responseJSON[i]);
      };
       

    } catch (error) {
        

    
    }
}

foodMeny();
