const desktopMenu = document.querySelector(".desktop-menu");
const navEmail = document.querySelector(".navbar-email"); //Sera clickeable
const menuHamburger = document.querySelector(".menu"); //Sera clickeable
const mobileMenu = document.querySelector(".mobile-menu");
const menuCart = document.querySelector(".navbar-shopping-cart"); //Sera clickeable
const aside = document.querySelector(".product-detail");
const cards = document.querySelector(".cards-container");
const asideSecundary = document.querySelector(".product-detail-secundary");
const producDetailClose = document.querySelector(".product-detail-secundary--close");

menuHamburger.addEventListener("click",toggleMobileMenu);
navEmail.addEventListener("click",  toggleDesktopMenu);
menuCart.addEventListener("click",toggleMenuCart);
producDetailClose.addEventListener("click",closeAsideSecundary);



function openAsideSecundary(){
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    aside.classList.add('inactive');
    asideSecundary.classList.remove('inactive');

}

function closeAsideSecundary(){
    asideSecundary.classList.add("inactive");
}

function toggleMenuCart()  {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    if(!isMobileMenuClosed){
        mobileMenu.classList.add("inactive");

    }
    else if(!isDesktopMenuClosed){
        desktopMenu.classList.add("inactive");

    }
    aside.classList.toggle("inactive");
    asideSecundary.classList.add('inactive')


}

function toggleMobileMenu()  {
    const isAsideClosed = aside.classList.contains('inactive');
    if(!isAsideClosed){
        aside.classList.add("inactive");
    }
    mobileMenu.classList.toggle("inactive");
    asideSecundary.classList.add('inactive')

}

function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive');
    if(!isAsideClosed){
      aside.classList.add("inactive");
    }
    desktopMenu.classList.toggle("inactive");
        asideSecundary.classList.add('inactive')

}

//Array de ejemplo
const productList = [];
productList.push({
    name: "bike",
    price: 120,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

});
productList.push({
    name: "Pantalla",
    price: 220,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

});
productList.push({
    name: "Compu",
    price: 620,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

});
productList.push({
    name: "Compu",
    price: 620,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

});productList.push({
    name: "Compu",
    price: 620,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

});productList.push({
    name: "Compu",
    price: 620,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

});productList.push({
    name: "Compu",
    price: 620,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

});productList.push({
    name: "Compu",
    price: 620,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

});productList.push({
    name: "Compu",
    price: 620,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

});productList.push({
    name: "Compu",
    price: 620,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

});productList.push({
    name: "Compu",
    price: 620,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

});productList.push({
    name: "Compu",
    price: 620,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

});productList.push({
    name: "Compu",
    price: 620,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

});productList.push({
    name: "Compu",
    price: 620,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

});


function renderProduct(arr){
 for (product of arr){
    const productCard = document.createElement("div");
    //Se agrega la clase
    productCard.classList.add("product-card");

    const img = document.createElement("img");
    //Se agrega el atributo
    img.setAttribute("src",product.img);
    //Escucha el evento click del elemento creado con JS    
    img.addEventListener('click',openAsideSecundary)

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const div = document.createElement("div");

    const pPrice = document.createElement("p")
    pPrice.innerText = "$" + product.price;

    const pName = document.createElement("p");
    pName.innerText = product.name;

    const figure = document.createElement("figure");

    const imgCard = document.createElement("img");
    imgCard.setAttribute("src","./icons/bt_add_to_cart.svg")
    
    //Agregar elementos dentro de otros
    figure.appendChild(imgCard);

    div.appendChild(pPrice);
    div.appendChild(pName);

    productInfo.appendChild(div);
    productInfo.appendChild(figure);

    productCard.appendChild(img);
    productCard.appendChild(productInfo);

    cards.appendChild(productCard);

}
}

renderProduct(productList)