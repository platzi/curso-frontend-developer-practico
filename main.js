
const navEmail = document.querySelector('.navbar-email');
const iconMobilMenu = document.querySelector('.iconMobilMenu');

const desktopMenu = document.querySelector('.desktop-menu');
const mobilMenu = document.querySelector('.mobile-menu');

const iconShoppingCart = document.querySelector('.navbar-shopping-cart');
const shoppingCart = document.querySelector('.shopping-cart-container')

navEmail.addEventListener('click', activeDesktopMenu);
// navEmail.addEventListener('blur', inactiveDesktopMenu,true,);

iconMobilMenu.addEventListener('click', activeMobilMenu);
// iconMobilMenu.addEventListener('blur', inactiveMobilMenu,true,);

iconShoppingCart.addEventListener('click',activeShoppingCart);
// iconShoppingCart.addEventListener('blur', inactiveShoppingCart,true,);

document.body.onresize = function(){
    hideAllMenus();
    if (!document.querySelector('.inactive-product-detail')){
        document.querySelector('.main-container').style.width = "100%";
        let anchoMain = document.querySelector(".main-container").offsetWidth;
        // console.log(anchoMain);
        let anchoActual = anchoMain - 360;
        // console.log(anchoActual);
        document.querySelector('.main-container').style.width = anchoActual + "px";
    }
}

function hideAllMenus() {
    inactiveDesktopMenu();
    inactiveMobilMenu();
    inactiveShoppingCart();
    //cerraDetail()
}

function activeDesktopMenu(){
    inactiveMobilMenu();
    inactiveShoppingCart();
    cerraDetail();
    navEmail.style.color = 'black';
    navEmail.style.fontWeight = 'bold';
    desktopMenu.classList.toggle('inactiveDesktopMenu');
}
function inactiveDesktopMenu(){
    desktopMenu.style.color = '#C7C7C7';
    desktopMenu.classList.add('inactiveDesktopMenu');
}

function activeMobilMenu(){
    inactiveDesktopMenu();
    inactiveShoppingCart();
    cerraDetail();
    mobilMenu.classList.toggle('inactiveMobilMenu');
}
function inactiveMobilMenu(){
    mobilMenu.classList.add('inactiveMobilMenu');
}

function activeShoppingCart(){
    inactiveDesktopMenu();
    inactiveMobilMenu();
    cerraDetail();
    shoppingCart.classList.toggle('inactiveShoppingCart');
    if (!document.querySelector('.inactiveShoppingCart')){
        if (document.body.offsetWidth<=640)
            hiddenProductsList();
        else
            displayProductsList();
    } 
}
function inactiveShoppingCart(){
    shoppingCart.classList.add('inactiveShoppingCart');
}

// código para agregar productos a la lista de productos
const productList = [];
productList.push({
    name: 'Bike',
    price: 150.00,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Computer',
    price: 1150.00,
    image: 'https://images.pexels.com/photos/41227/pexels-photo-41227.jpeg?auto=compress&cs=tinysrgb&w=400'
});
productList.push({
    name: 'Camera',
    price: 110.00,
    image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=400'
});
productList.push({
    name: 'Coffee',
    price: 10.00,
    image: 'https://images.pexels.com/photos/9050512/pexels-photo-9050512.jpeg?auto=compress&cs=tinysrgb&w=400'
});
productList.push({
    name: 'Tablet',
    price: 80.00,
    image: 'https://images.pexels.com/photos/4065885/pexels-photo-4065885.jpeg?auto=compress&cs=tinysrgb&w=400'
});
productList.push({
    name: 'Guitar',
    price: 100.00,
    image: 'https://images.pexels.com/photos/16445710/pexels-photo-16445710/free-photo-of-hombre-musica-musico-sujetando.jpeg?auto=compress&cs=tinysrgb&w=400'
});
productList.push({
    name: 'Valeriia Miller',
    price: 15,
    image: 'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=400'
});
var i =0;
//--renderiza la lista de productos a partir del array productList
for(product of productList){
    const productCart = `<div id="${i}" class="product-card">
                            <img src=${product.image} alt=${product.name}">
                            <div class="product-info">
                                <div>
                                    <p>$ ${product.price}</p>
                                    <p>${product.name}</p>
                                </div>
                                <figure>
                                    <img src="./icons/bt_add_to_cart.svg" alt="">
                                </figure>
                            </div>
                        </div>`
    
    const cardsContainer = document.querySelector('.cards-container');
    cardsContainer.innerHTML += productCart;
    i++;
}
//--------------agrega Eventlistener a cada producto----------------------------
const prodList = document.querySelectorAll('.product-card');
for(p of prodList){
    p.addEventListener('click', mostrarDetalle);
}
// código para mostral el detalle del producto cuando se hace click sobre la imagen
const detalleProducto = document.querySelector('.product-detail');
function mostrarDetalle(){
    inactiveDesktopMenu();
    inactiveMobilMenu();
    inactiveShoppingCart();

    const productDetailImg = document.querySelector(".product-detail .foto");
    productDetailImg.setAttribute("src", productList[this.id].image);

    const productDetailPrice = document.querySelector(".product-detail .priceP");
    productDetailPrice.textContent = productList[this.id].price;

    const productDetailName = document.querySelector(".product-detail .nameP");
    productDetailName.textContent = productList[this.id].name;

    //redimensionando main-container;
    document.querySelector('.main-container').style.width = "100%";
    if (document.body.offsetWidth<=640){  //si la ventana del navegador es menor a 640
        hiddenProductsList();   //se oculta la lista de productos para evitar scrooll vertical
    }
    let anchoMain = document.querySelector(".main-container").offsetWidth;
    let anchoActual = anchoMain - 360;  //360 = ancho de product-detail
    //-- a continuación se redimensiona el width del main-container 
    //para evitar que la pantalla product-detail tape a la lista de productos
    document.querySelector('.main-container').style.width = anchoActual + "px";

    //se muestra el detalle del producto
    detalleProducto.classList.remove('inactive-product-detail');
}
//-----función cerrar product-detail al hacer click en X
const btnCerrarDetail = document.querySelector('.product-detail-close');
btnCerrarDetail.addEventListener('click', cerraDetail);

function cerraDetail(){
    document.querySelector('.main-container').style.width = "100%";//restaura el width de main container
    displayProductsList();  //hace visible la lista de productos si es que estuviera oculto
    detalleProducto.classList.add('inactive-product-detail'); //oculta el product-detail
}

function hiddenProductsList() {
    document.querySelector('.cards-container').style.display = "none";
}
function displayProductsList(){
    document.querySelector('.cards-container').style.display = "grid";
}