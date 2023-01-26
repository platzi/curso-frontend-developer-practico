const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const menuCart = document.querySelector('.navbar-shopping-cart');
const productDetailMenu = document.querySelector('.product-detail');

// 
navEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleMobileMenu);
menuCart.addEventListener('click', toggleProductDetailMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    productDetailMenu.classList.add('inactive'); 
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');   
    productDetailMenu.classList.add('inactive'); 
}

function toggleProductDetailMenu() {
    productDetailMenu.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');   

}


// // Manera de usar funcion en addEventListener
// navEmail.addEventListener("click", function(){toggleElement(desktopMenu)});
// burgerMenu.addEventListener("click", function(){toggleElement(mobileMenu)});
// menuCart.addEventListener("click", function(){toggleElement(productDetailMenu)});

// function toggleElement(elemento){
//     elemento.classList.toggle("inactive");
// }