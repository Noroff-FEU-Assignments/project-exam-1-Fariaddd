const URL = 'http://projectexam.local/wp-json/wp/v2/posts/';

const productsContainer = document.querySelectorAll(".container-food");

async function foodMeny(){
    try {
        const response = await fetch(URL);
        console.log(response)
        const responseJSON = await response.json();
      // console.log(productsData);
      for (let i = 0; i < responseJSON.length; i++){
          const title = responseJSON[i].title.rendered;
         // console.log(title);
        productsContainer.innerHTML = `
        <div class="div-container">
        <a href="./products.html">
        <img class="img" src="./img/chana-masala.webp" alt="chana-masala">
    </a>
        <div class="text">
         <a href="./buy.html"><button>Chana Masalaw</button>
        </a>
        </div>
    </div>
        `
             
       console.log(responseJSON[i]);
      };
       

    } catch (error) {
        

    
    }
}

foodMeny();
