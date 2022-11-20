const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shopCar = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const containerCards = document.querySelector('.cards-container');

burguerMenu.addEventListener('click',showMobileMenu);
menuEmail.addEventListener('click',showDesktopMenu);
shopCar.addEventListener('click',showDetailProduct);

function showDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    shoppingCartContainer.classList.toggle('inactive',true);
    productDetails.classList.toggle('inactive',true)
}
function showMobileMenu(){
    mobileMenu.classList.toggle('inactive');
    shoppingCartContainer.classList.toggle('inactive',true);
    productDetails.classList.toggle('inactive',true)
}
function showDetailProduct(){
    shoppingCartContainer.classList.toggle('inactive');
    desktopMenu.classList.toggle('inactive',true);
    mobileMenu.classList.toggle('inactive',true);
    productDetails.classList.toggle('inactive',true)
}


let descripProductos = [];
for (let index = 0; index < imagenes.length; index++) {
    let objeto = {imagen: imagenes[index],
                  price:prices[index],
                  tipo: tipos[index]}
    descripProductos.push(objeto);    
}
let serieClase = 1;
function showProducts(){
    descripProductos.forEach(element => {
    let cardProduct = `<div class="product-card card-${serieClase}">
                        <img src="${element.imagen}" alt="">
                        <div class="product-info">
                        <div>
                            <p>$ ${element.price},00</p>
                            <p>${element.tipo}</p>
                        </div>
                        <figure>
                            <img src="./icons/bt_add_to_cart.svg" alt="">
                        </figure>
                        </div>
                        </div>`;
    containerCards.innerHTML += cardProduct;
    serieClase++;
});
}
showProducts();



console.log(serieClase);
let a = []
for (let index = 0; index < serieClase-1; index++) {
    a[index] = document.querySelector(`.card-${index+1}`)
    a[index].addEventListener('click', imagenUno)
}

let productDetails = document.querySelector('#productDetail');

// let closeProductDetails;
function imagenUno(x){
    let a = x.path[1].querySelector('img').src;
    console.log(a);
    let index = imagenes.indexOf(a);
    console.log(index);
    let productDetalles = `<div class="product-detail-close">
                            <img src="./icons/icon_close.png" alt="close">
                          </div>
                          <img src=${a} alt="bike">
                          <div class="product-info-detail">
                            <p>$ ${prices[index]},00</p>
                            <p>${tipos[index]}</p>
                            <p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
                            <button class="primary-button add-to-cart-button">
                            <img src="./icons/bt_add_to_cart.svg" alt="add to cart">
                            Add to cart
                            </button>
                          </div>
                          `
    productDetails.innerHTML = productDetalles;
    
    let closeProductDetails = document.querySelector('.product-detail-close');
    closeProductDetails.addEventListener('click', closeProductDetail); 
    
    productDetails.classList.toggle('inactive',false)
    desktopMenu.classList.toggle('inactive',true);
    mobileMenu.classList.toggle('inactive',true);
    shoppingCartContainer.classList.toggle('inactive',true);
}

function closeProductDetail(){
    productDetails.classList.toggle('inactive',true)
}

