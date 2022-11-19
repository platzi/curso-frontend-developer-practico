const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shopCar = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const containerCards = document.querySelector('.cards-container')

burguerMenu.addEventListener('click',showMobileMenu);
menuEmail.addEventListener('click',showDesktopMenu);
shopCar.addEventListener('click',showDetailProduct)

function showDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    shoppingCartContainer.classList.toggle('inactive',true);
}
function showMobileMenu(){
    mobileMenu.classList.toggle('inactive');
    shoppingCartContainer.classList.toggle('inactive',true);
}
function showDetailProduct(){
    shoppingCartContainer.classList.toggle('inactive');
    desktopMenu.classList.toggle('inactive',true);
    mobileMenu.classList.toggle('inactive',true);
}


let descripProductos = [];
for (let index = 0; index < imagenes.length; index++) {
    let objeto = {imagen: imagenes[index],
                  price:prices[index],
                  tipo: tipos[index]}
    descripProductos.push(objeto);    
}

function showProducts(){
    descripProductos.forEach(element => {
    let cardProduct = `<div class="product-card">
                        <img src="${element.imagen}" alt="">
                        <div class="product-info">
                        <div>
                            <p>$ ${element.price}</p>
                            <p>${element.tipo}</p>
                        </div>
                        <figure>
                            <img src="./icons/bt_add_to_cart.svg" alt="">
                        </figure>
                        </div>
                        </div>`;
    containerCards.innerHTML += cardProduct;
});
}
console.log(containerCards)
showProducts();