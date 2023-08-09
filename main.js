
const $template = document.getElementById("product-card-template").content;
const $frag = document.createDocumentFragment();


document.addEventListener("click", e=>{
    if (e.target.matches(".navbar-email")) {
        document.querySelector(".desktop-menu").classList.toggle("active");
        document.querySelector(".product-detail").classList.add("active")

    }
    if (e.target.matches(".navbar-shopping-cart *")) {
        document.querySelector(".product-detail").classList.toggle("active")
        document.querySelector(".desktop-menu").classList.add("active");

    }
})



async function generarTarjetas(){
    const res = await fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=15");
    const data = await res.json();
    console.log(data);


    data.forEach(element => {

        $template.querySelector("img").src = element.images;
        $template.querySelector(".price").textContent = `$${element.price}`
        $template.querySelector(".name").textContent = element.title


        let $clone = document.importNode($template, true);
         $frag.appendChild($clone);
    });
    document.querySelector(".cards-container").appendChild($frag)
}


document.addEventListener("DOMContentLoaded", generarTarjetas)



