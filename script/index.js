const URL = 'http://projectexam.local/wp-json/wp/v2/posts'

async function getPosts(){
    try{
        const Response = await fetch(URL);
        const Responsejson = await Response.json();
        console.log(Responsejson);

    }catch{

    }
}
getPosts();