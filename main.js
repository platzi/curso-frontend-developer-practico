const menuMail = document.getElementById('menuMail');
const menuDesktop = document.querySelector('.desktop-menu');
const menuHamburgesa = document.querySelector('.menu')
const menuMobile = document.querySelector('.mobile-menu')
const shoppingCar = document.querySelector('.navbar-shopping-cart')
const order_detail = document.querySelector('.order-detail')
const product_detail = document.querySelector('.product-detail')
const productCard = document.querySelector('.product-card')
const productsContainer = document.querySelector('.cards-container')

menuMail.addEventListener('click', toggleMenu)
menuHamburgesa.addEventListener('click', toggleMenuMobile)
shoppingCar.addEventListener('click', toggleMenushoppingCar)
class productGenerator{
    constructor({
        src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        name ='Productaso',
        price=69,
    }){
        this.name=name;
        this.price=price;
        this.src=src;
    }
    render(place){
        const cardsContainer = document.createElement('div');
        cardsContainer.setAttribute('class', 'cards-container');
        const productCard = document.createElement("div");
        productCard.setAttribute('class', 'product-card');
        const productImg = document.createElement('img');
        productImg.setAttribute('src',this.src);
        productImg.setAttribute('alt',`${this.name}!!, que buen producto`);
        const productInfo = document.createElement('div');
        productInfo.setAttribute('class', 'product-info');
        const productInfoDetail = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText=`$${this.price}.00`
        const productName = document.createElement('p');
        productName.innerText=`${this.name}`
        const productIconContainer= document.createElement('figure');
        const productIcon = document.createElement('img');
        productIcon.setAttribute('src', "./icons/bt_add_to_cart.svg");
        // empaquetando todos los elementos
        productIconContainer.appendChild(productIcon);
        productInfoDetail.append(productPrice, productName);
        //...
        productInfo.append(productInfoDetail,productIconContainer);
        //..
        productCard.append(productImg,productInfo);
        place.appendChild(productCard);
    }
}
const firstProduct=new productGenerator({});
const lastProduct=new productGenerator({name:'Ultimo',price:1000});

const products = []
products.push(firstProduct)
products.push(lastProduct)

renderElements(products) 

// 1. Que la pagina de detalles de producto aparesca cuando le de clic en el producto
// 2.Que funcione el boton cerrar
productCard.addEventListener('click',toggleDetailsProducts)

//Funciones
function toggleDetailsProducts(){
    product_detail.classList.toggle("inactive")
}
function renderElements(arr) {
    for (let product of products) {
        const cardsContainer = document.createElement('div');
        cardsContainer.setAttribute('class', 'cards-container');
        const productCard = document.createElement("div");
        productCard.setAttribute('class', 'product-card');
        const productImg = document.createElement('img');
        productImg.setAttribute('src',"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" );
        productImg.setAttribute('alt',`${product.name}!!, que buen producto`);
        const productInfo = document.createElement('div');
        productInfo.setAttribute('class', 'product-info');
        const productInfoDetail = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText=`$${product.price}.00`
        const productName = document.createElement('p');
        productName.innerText=`${product.name}`
        const productIconContainer= document.createElement('figure');
        const productIcon = document.createElement('img');
        productIcon.setAttribute('src', "./icons/bt_add_to_cart.svg");
        // empaquetando todos los elementos
        productIconContainer.appendChild(productIcon);
        productInfoDetail.append(productPrice, productName);
        //...
        productInfo.append(productInfoDetail,productIconContainer);
        //..
        productCard.append(productImg,productInfo);
        productsContainer.appendChild(productCard);
        

    }
}
function toggleMenu() {
    if (!order_detail.classList.contains("inactive")) {

        order_detail.classList.add("inactive")
    }
    menuDesktop.classList.toggle("inactive")
}
function toggleMenuMobile() {
    if (! order_detail.classList.contains("inactive")) {

        order_detail.classList.add("inactive")
    }
    if (!menuDesktop.classList.contains("inactive")) {

        menuDesktop.classList.add("inactive")
    }
    menuMobile.classList.toggle("inactive")
}
function toggleMenushoppingCar() {
    console.log('hola')

    if (!menuDesktop.classList.contains("inactive")) {

        menuDesktop.classList.add("inactive")
    }
    if (!menuMobile.classList.contains("inactive")) {

        menuMobile.classList.add("inactive")
    }
    order_detail.classList.toggle("inactive")
}

