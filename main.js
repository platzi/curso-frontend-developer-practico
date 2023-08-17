
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

    
    //------------------------------------
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
                            <img src=${product.image} alt=${product.name}" class="product-img" id="${i}img">
                            <div class="product-info">
                                <div>
                                    <p>${product.price.toLocaleString("en", {
                                        style: "currency",
                                        currency: "USD"
                                    })}</p>
                                    <p>${product.name}</p>
                                </div>
                                <figure>
                                    <img src="./icons/bt_add_to_cart.svg" alt="shopping-cart" class="icon-cart" id="${i}icon">
                                </figure>
                            </div>
                        </div>`
    
    const cardsContainer = document.querySelector('.cards-container');
    cardsContainer.innerHTML += productCart;
    i++;
}
//--------------agrega Eventlistener a la imagen de cada producto----------------------------
const prodList = document.querySelectorAll('.product-card .product-img');
for(p of prodList){
    p.addEventListener('click', mostrarDetalle);
}
//--------------agrega Eventlistener al icono carrito de cada producto------------------
const prodCartIcon = document.querySelectorAll('.product-card .icon-cart');
for(p of prodCartIcon){
    p.addEventListener('click', addToCart);
}
// código para mostral el detalle del producto cuando se hace click sobre la imagen
const detalleProducto = document.querySelector('.product-detail');
function mostrarDetalle(){
    inactiveDesktopMenu();
    inactiveMobilMenu();
    inactiveShoppingCart();

    const productDetailImg = document.querySelector(".product-detail .foto");
    // console.log(this.id.slice(0,1));   obtiene el primer caracter (X) del atributo id=Ximg
    productDetailImg.setAttribute("src", productList[this.id.slice(0,1)].image);

    const productDetailPrice = document.querySelector(".product-detail .priceP");
    productDetailPrice.textContent = productList[this.id.slice(0,1)].price;

    const productDetailName = document.querySelector(".product-detail .nameP");
    productDetailName.textContent = productList[this.id.slice(0,1)].name;

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


    const primaryButton = document.querySelector('.product-information .add-to-cart-button');
    primaryButton.setAttribute('id',`${this.id.slice(0,1)}but`);
    primaryButton.addEventListener('click', addToCart);
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

var arrayCart = [];
function addToCart(){
    indice = this.id.slice(0,1)
    if (!arrayCart.includes(productList[indice])){
        arrayCart.push(productList[indice]);
        //--cargar los productos del carrito-----------
        const productCart = `<div id="${indice}p" class="shopping-cart">
                                <figure>
                                    <img src="${productList[indice].image}" alt="${productList[indice].name}">
                                </figure>
                                <p>${productList[indice].name}</p>
                                <p>${productList[indice].price.toLocaleString("en", {
                                    style: "currency",
                                    currency: "USD"
                                })}</p>
                                <img src="./icons/icon_close.png" alt="delete" class="icon-delete" id="${indice}ic">
                            </div>`
        //------incrementamos total productos en icono carrito--------
        const totalProducts = document.querySelector('.navbar-shopping-cart #total-products');
        totalProducts.textContent = arrayCart.length;
        //----se inserta productos al html del carrito-----
        const cardsContainer = document.querySelector('.my-order-container');
        cardsContainer.innerHTML += productCart;
        
        //agregando eventListener a la x del producto agregado
        // document.getElementById(`${indice}ic`).addEventListener('click', deleteProductCart);
        // document.getElementById(`${indice}ic`).style.cursor = "pointer";
        // iconDeleteProduct.addEventListener('click', deleteProductCart);


        const iconsDelete = document.querySelectorAll('.shopping-cart .icon-delete');
        for(q of iconsDelete){
            q.addEventListener('click', deleteProductCart);
            q.style.cursor = "pointer";
        }


        // actualizamos el total del carrito
        const campoTotal = document.querySelector('#totalCart');
        let totalCart = arrayCart.reduce((sum, element)=> sum + element.price, 0).toLocaleString("en", {
            style: "currency",
            currency: "USD"
        });
        campoTotal.textContent = totalCart;
    } 

    //cerramos detalle del producto si es que estuviera abierto
    if(!document.querySelector('.inactive-product-detail')){
        cerraDetail();
    }
}

// función para eliminar un producto del carrito
function deleteProductCart(){
    let indice = this.id.slice(0,1);
    // console.log(indice);
    //se elimina el elemento de arrayCart
    for(let i=0;i<arrayCart.length;i++){
        if(arrayCart[i].name == productList[indice].name){
          arrayCart.splice(i,1);
        }
    }
    //se eliminar el html del producto
    const node = document.getElementById(`${indice}p`);
    node.parentNode.removeChild(node);
    // console.log(arrayCart);
    // actualizamos el total del carrito
    const campoTotal = document.querySelector('#totalCart');
    let totalCart = arrayCart.reduce((sum, element)=> sum + element.price, 0).toLocaleString("en", {
        style: "currency",
        currency: "USD"
    });
    campoTotal.textContent = totalCart;

    //------incrementamos total productos en icono carrito--------
    const totalProducts = document.querySelector('.navbar-shopping-cart #total-products');
    totalProducts.textContent = arrayCart.length;
}
