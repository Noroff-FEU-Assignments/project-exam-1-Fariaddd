const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get("id");

const APIUrl = `https://tense-expansion.flywheelsites.com/wp-json/wp/v2/posts/${id}`;


const productsContainer =document.querySelector(".details-container");
const title = document.querySelector(".food-text-container")
const mainImag = document.querySelector(".main-img-container")
const img = document.querySelector(".main-img")

async function getDetails(){
    try {
        const response = await fetch(APIUrl);
        const content = await response.json();
        console.log(content);
        let titleTitle = content.title.rendered;
        let mainImg = content.x_featured_media;
        title.innerHTML += `
                <div class="headline">
                    <h1> ${titleTitle}</h1>
                    <div class="text-container">
                      <ul>
                        <li>1 cup uncooked brown basmati rice, for serving (rice is optional, I like to cook extra to have on hand for other meals) </li>
                                <li>2 tablespoons coconut oil or extra-virgin olive oil</li>
                                <li>1 medium yellow onion, chopped</li>
                                <li>½ teaspoon fine sea salt, to taste </li>
                      </ul>
                    </div>
                     <div class="btn-container">
                       <button >ORDER</button>
                    </div>
                     </div>
                    </div>  
                </div>`

        mainImag.innerHTML += ` <div class="main-img-container">
                                    <div class="main-img">
                                        <img src="${mainImg}" alt="chana-masala" >
                                    </div>
                                </div>

        

        `

        productsContainer.innerHTML = `
        <div>tittle: ${title}</div>
        `
        

    }catch (error){
       // console.log(error)
    }
}
getDetails();