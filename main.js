//MENU DE OPCIONES SUPERIOR DERECHO
const emailMenu = document.querySelector('.navbar-email');
const desktopMenu =  document.querySelector('.desktop-menu');

emailMenu.addEventListener('click', toogleDesktopMenu);
function toogleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}

//MENU DE OPCIONES SUPERIOR IZQUIERDO - MOBILE
const menuIcon = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');
menuIcon.addEventListener('click', toogleMobileMenu);
function toogleMobileMenu() {
    menuMobile.classList.toggle('inactive');

    if(!shoppingMenu.classList.contains('inactive')){
        shoppingMenu.classList.toggle('inactive');   
    }

    const detailMenu = document.querySelector('#product-detail');
    if(!detailMenu.classList.contains('inactive')){
        detailMenu.classList.toggle('inactive');
    }
    
}

//MENU DE OPCIONES LATERAL DERECHO
const shoppingCartMenu = document.querySelector('.navbar-shopping-cart');
const shoppingMenu = document.querySelector('aside');

shoppingCartMenu.addEventListener('click', toogleShoppingMenu);
function toogleShoppingMenu() {
    shoppingMenu.classList.toggle('inactive');

    const detailMenu = document.querySelector('#product-detail');

    if(!menuMobile.classList.contains('inactive')){
        menuMobile.classList.toggle('inactive');
    }

    if(!detailMenu.classList.contains('inactive')){
        detailMenu.classList.toggle('inactive');
    }

    

}

//MENU DE CARRO DE COMPRAS
const productList = [];

productList.push({
    name: 'Bike',
    price: 120.00,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name: 'Pantalla',
    price: 120.00,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name: 'Computador',
    price: 120.00,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name: 'Telefono',
    price: 120.00,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name: 'Mueble',
    price: 120.00,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name: 'Silla',
    price: 120.00,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

const cardsContainer = document.querySelector('.cards-container'); 

function renderProducts (arr) {
    
    var contador = 0;

    for(product of arr){

        stringHTML = `<div class='product-card'>
        <img src="` + product.img + `" id="imagen-`+contador+`" alt="Imagen del producto">
        <div class="product-info">
        <div>
            <p>` + product.price+ `</p>
            <p>` + product.name + `</p>
            </div>
            <figure>
                <img src="./icons/bt_add_to_cart.svg" alt="">
            </figure>
        </div>
        </div>
        `;
    
        cardsContainer.innerHTML += stringHTML;
        contador++;

    }
}

renderProducts (productList);

function renderProductsForImg(arr){
    var contador = 0;
    for(product of arr){
        const imgProduct = document.querySelector('#imagen-'+contador+'');
        imgProduct.addEventListener('click',openProductDetailAside);
        
        const detailMenu = document.querySelector('#product-detail');
        function openProductDetailAside() {
            detailMenu.classList.remove('inactive');

            if(!shoppingMenu.classList.contains('inactive')){
                shoppingMenu.classList.add('inactive');
            }

        }

        const closeDetailMenu = document.querySelector('.product-detail-close, .title-container');
        closeDetailMenu.addEventListener('click',closeProductDetailAside);

        function closeProductDetailAside() {
            detailMenu.classList.add('inactive');

            if(!shoppingMenu.classList.contains('inactive')){
                shoppingMenu.classList.add('inactive');
            }

        }


        contador++;

    }
}

renderProductsForImg(productList);



