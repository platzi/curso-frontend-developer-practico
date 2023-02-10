const emailMenu = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

emailMenu.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    desktopMenu.toggleAttribute("hidden");
}

const mobileicon = document.querySelector('.menu');
const mobilemenu = document.querySelector(".mobile-menu");

const shoppingicon = document.querySelector(".navbar-shopping-cart");
const shoppingmenu = document.querySelector(".product-detail");


mobileicon.addEventListener("click",()=>{
    if (!shoppingmenu.hasAttribute("hidden")) {  
        shoppingmenu.toggleAttribute("hidden");
    } 
    if (!productDetails.hasAttribute("hidden")) {
        productDetails.toggleAttribute("hidden");
    }
    mobilemenu.toggleAttribute("hidden");
});

shoppingicon.addEventListener("click", ()=>{
    if (!mobilemenu.hasAttribute("hidden")) {
        mobilemenu.toggleAttribute("hidden");
    }
    if (!productDetails.hasAttribute("hidden")) {
        productDetails.toggleAttribute("hidden");
    }
    shoppingmenu.toggleAttribute("hidden");
     
});
//Lista de productos
const productList = [];
//productos
productList.push({
    name: "Nike",
    price: 400,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
    name: "Bike",
    price: 100,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
    name: "Tv",
    price: 1400,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
    name: "Car",
    price: 24400,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
    name: "Mouse",
    price: 40,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
    name: "Phone",
    price: 400,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
    name: "Earphones",
    price: 300,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

for (const product of productList) {
    const produdctCard = document.createElement("div");
    produdctCard.classList.add("product-card");

    const img = document.createElement("img");
    img.src = product.img;

    const produdctinfo = document.createElement("div");
    produdctinfo.classList.add("product-info");

    const produdctinfodiv = document.createElement("div");

    const productname = document.createElement("p");
    productname.innerText = product.name;
    const productprice = document.createElement("p");
    productprice.innerText = "$"+product.price;
    produdctinfodiv.appendChild(productprice);
    produdctinfodiv.appendChild(productname);

    const produdctFigure = document.createElement("figure");
    const produdctImgCard = document.createElement("img");
    produdctImgCard.src = "./icons/bt_add_to_cart.svg";
    produdctFigure.appendChild(produdctImgCard);

    produdctinfo.appendChild(produdctinfodiv);
    produdctinfo.appendChild(produdctFigure);

    produdctCard.appendChild(img);
    produdctCard.appendChild(produdctinfo);

    const cardsConteiner = document.querySelector(".cards-container");
    cardsConteiner.appendChild(produdctCard);

    img.addEventListener("click", ()=>{
        renderDetails(product);
    });


}
const productDetails = document.querySelector(".product-details");

function renderDetails(product) {
    if (!shoppingmenu.hasAttribute("hidden")) {  
        shoppingmenu.toggleAttribute("hidden");
    } 
    if (productDetails.hasAttribute("hidden")) { 
        productDetails.toggleAttribute("hidden");
    }

    const namepro = document.getElementById("name");
    namepro.innerText = product.name;

    const pricepro = document.getElementById("price");
    pricepro.innerText = "$"+ product.price;

    const imgpro = document.getElementById("productimg");
    imgpro.src = product.img;

    console.log(product);
    
}



const productDetailsClose = document.querySelector(".product-details-close");
productDetailsClose.addEventListener("click", ()=>{
    if (!productDetails.hasAttribute("hidden")) {
        productDetails.toggleAttribute("hidden");
    }
});
    