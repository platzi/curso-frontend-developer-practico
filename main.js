var navbarEmail = document.querySelector('.navbar-email');
var iconMenu = document.querySelector('.icon_menu')
var desktopMenu = document.querySelector('.desktop-menu');
var mobileMenu = document.querySelector('.mobile-menu');
var productDetail = document.querySelector('.product-detail');
var imgShoppingCart = document.querySelector('.img_shopping-cart');
var cardsContainer = document.querySelector('.cards-container');
var closeDetails = document.querySelector('.product-detail-close');

//Función para agregar clases
function addClase(elemento,clase){
    elemento.classList.add(clase);
}
//función para crear elementos
function newElement(etq){
    let elemento = document.createElement(etq);
    return elemento;
}
//Fucion para mostrar elementos
function mostrar(elemento){
    elemento.classList.toggle('d-none');
}
//Función para ocultar elementos
function ocultar(elemento){
    if(!elemento.classList.contains('d-none'))addClase(elemento,'d-none');
}
//Función constructora de nuevos productos
function nuevoProducto(name,price,image){
    this.name = name;
    this.price = price;
    this.image = image;
}
//Función para maquetar productos
function printProducto(name,price,image){
    var nameProduct = newElement('p');
    console.log(nameProduct);
    nameProduct.textContent =name;
    var priceProduct = newElement('p');
    priceProduct.textContent =price;
    var divPrice=newElement('div');
    divPrice.append(nameProduct, priceProduct);
    var figure = newElement('figure');
    var imgCart = newElement('img');
    imgCart.setAttribute('src',"./icons/bt_add_to_cart.svg")
    figure.append(imgCart);
    var divProductInfo = newElement('div');
    addClase(divProductInfo,'product-info');
    divProductInfo.append(divPrice, figure);
    var imgProduct = newElement('img');
    imgProduct.setAttribute('src',image);
    var productCard = newElement('div');
    addClase(productCard,'product-card');
    productCard.append(imgProduct, divProductInfo);
    cardsContainer.append(productCard);
}
//Eventos
navbarEmail.addEventListener('click', function(){
    mostrar(desktopMenu);
    ocultar(productDetail);
    ocultar(closeDetails)
})
iconMenu.addEventListener('click', function(){
    mostrar(mobileMenu);
    ocultar(productDetail);
    ocultar(closeDetails);
})
imgShoppingCart.addEventListener('click', function(){
    mostrar(productDetail);
    ocultar(mobileMenu);
    ocultar(desktopMenu);
    ocultar(closeDetails);

})
closeDetails.addEventListener('click', function(){
    mostrar(closeDetails);
    ocultar(productDetail);
    ocultar(mobileMenu);
    ocultar(desktopMenu);
})
//Nuevos productos
const productList=[];
var bici = new nuevoProducto('Bicicleta',120,"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
var pantalla = new nuevoProducto('Pantalla',350,"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
var portatil = new nuevoProducto('Portatil',800,"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
var libro = new nuevoProducto('Libro',120,"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");

//Guardar los nuevos productos en el Array
productList.push(bici, pantalla, portatil, libro);

//Bucle para imprimir los productos del array en pantalla
for (const producto of productList) {
    printProducto(producto.name,producto.price,producto.image)
}



