/* barra despliegue desktop */
const navemail = document.querySelector(".navbar-email");
const desktopmenu = document.querySelector(".desktop-menu");
/* barra despliegue mobile */
const menuburger = document.querySelector(".menu");
const menumobile = document.querySelector(".mobile-menu");
/* barra despliegue mobile -aside */
const menucar = document.querySelector(".navbar-shopping-cart");
const shoppingcartcontainer = document.querySelector("#shoppingcartcontainer");
/* producdetail */
const productdetailcontainer = document.querySelector("#productdetail");
const producdetailcloseicon = document.querySelector(".product-detail-close");

/* other */
const cardscontainer = document.querySelector(".cards-container");


menucar.addEventListener("click", togglecarmenu);
navemail.addEventListener("click", toggledesktopmenu);
menuburger.addEventListener("click", togglemobilemenu);
producdetailcloseicon.addEventListener("click", productdetail);



function toggledesktopmenu (){
    desktopmenu.classList.toggle("inactive");
    shoppingcartcontainer.classList.add("inactive");
    productdetailcontainer.classList.add("inactive");
}
function togglemobilemenu(){ 
    menumobile.classList.toggle("inactive");
    productdetailcontainer.classList.add("inactive");
    shoppingcartcontainer.classList.add("inactive");
}
function togglecarmenu () {
    shoppingcartcontainer.classList.toggle("inactive"); 
    productdetailcontainer.classList.add("inactive")
    desktopmenu.classList.add("inactive");
    menumobile.classList.add("inactive");
}
/* funciones para abrir y cerrar la seleccion de productos */
function productdetail(){
    productdetailcontainer.classList.toggle("inactive");
    desktopmenu.classList.add("inactive");
    menumobile.classList.add("inactive");
    shoppingcartcontainer.classList.add("inactive");
}

const productlist = [];

productlist.push({
    name: "bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productlist.push({
    name: "TV",
    price: 220,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productlist.push({
    name: "Laptop",
    price: 150,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

function renderproduct(arr){
    for (products of arr){
        const productcard = document.createElement("div");
        productcard.classList.add("product-card");
    
        const img = document.createElement("img");
        img.setAttribute("src", products.image);
        img.addEventListener("click", productdetail);
    
        const productinfo = document.createElement("div");
        productinfo.classList.add("product-info");
    
        const productdiv = document.createElement("div");
    
        const productprice = document.createElement("p");
        productprice.innerText = "$" + products.price;
    
        const productname = document.createElement("p");
        productname.innerText = products.name;
    
        productdiv.append(productprice, productname);
    
        const productfigure = document.createElement("figure");
        const productimg = document.createElement("img");
        img.setAttribute("src", "./img/image.png");
    
        productfigure.append(productimg);
        productinfo.append(productdiv, productdiv);
    
        productcard.append(img, productinfo);
    
        cardscontainer.append(productcard);
    }
}
renderproduct(productlist);
/* JS terminado */