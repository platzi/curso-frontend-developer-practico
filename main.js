/* barra despliegue desktop */
const navemail = document.querySelector(".navbar-email");
const desktopmenu = document.querySelector(".desktop-menu");
/* barra despliegue mobile */
const menuburger = document.querySelector(".menu");
const menumobile = document.querySelector(".mobile-menu");
/* barra despliegue mobile -aside */
const menucar = document.querySelector(".navbar-shopping-cart");
const shoppingcartcontainer = document.querySelector("#shoppingcartcontainer");

const cardscontainer = document.querySelector(".cards-container");


menucar.addEventListener("click", togglecarmenu);
navemail.addEventListener("click", toggledesktopmenu);
menuburger.addEventListener("click", togglemobilemenu);
function toggledesktopmenu (){
    shoppingcartcontainer.classList.add("inactive");
    desktopmenu.classList.toggle("inactive");
}
function togglemobilemenu(){  
    shoppingcartcontainer.classList.add("inactive");
    menumobile.classList.toggle("inactive");
}
function togglecarmenu () {
    desktopmenu.classList.add("inactive");
    menumobile.classList.add("inactive");
    shoppingcartcontainer.classList.toggle("inactive");
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

for (products of productlist){
    const productcard = document.createElement("div");
    productcard.classList.add("product-card");

    const img = document.createElement("img");
    img.setAttribute("src", products.image);

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