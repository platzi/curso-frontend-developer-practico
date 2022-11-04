
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const iconMenuMobile = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const iconCarrito = document.querySelector('.navbar-shopping-cart');
const orderCarrito = document.querySelector('#shopping-cart-container');
const cardsContainer = document.querySelector('.cards-container');
const detailProduct = document.querySelector('#product-detail');
const iconProductDetailClosed = document.querySelector('.product-detail-close')


menuEmail.addEventListener('click', toggleDesktopMenu);
iconMenuMobile.addEventListener('click', toggleMobileMenu);
iconCarrito.addEventListener('click', toggleIconCarrito);
iconProductDetailClosed.addEventListener('click', closedDetailProduct);



function toggleDesktopMenu(){
    const isordercarritoClosed = orderCarrito.classList.contains('inactive');
    const isProductDetailClosed= detailProduct.classList.contains('inactive');
    if (!isordercarritoClosed){
        orderCarrito.classList.add('inactive')
    };   
    if (!isProductDetailClosed){
        detailProduct.classList.add("inactive")
    };
    desktopMenu.classList.toggle('inactive')
};

function toggleMobileMenu(){
    const isordercarritoClosed = orderCarrito.classList.contains('inactive');
    const isdetailProduct = detailProduct.classList.contains('inactive')
    if (!isordercarritoClosed){
        orderCarrito.classList.add('inactive')
    };
    if (!isdetailProduct){
        detailProduct.classList.add('inactive')
    }
    mobileMenu.classList.toggle('inactive')
};

function toggleIconCarrito(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuclosed = desktopMenu.classList.contains('inactive');
    const isProductDetailClosed= detailProduct.classList.contains('inactive');
    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive')
    };
    if (!isDesktopMenuclosed){
        desktopMenu.classList.add('inactive')
    };
    if (!isProductDetailClosed){
        detailProduct.classList.add("inactive")
    };
    
    orderCarrito.classList.toggle('inactive')

};

function showDetailProduct(){
    const isDesktopMenuclosed = desktopMenu.classList.contains('inactive');
    if (!isDesktopMenuclosed){
        desktopMenu.classList.add('inactive')
    };
    
    detailProduct.classList.toggle("inactive")
};

function closedDetailProduct(){
    const isProductDetailClosed= detailProduct.classList.contains('inactive');

    if (!isProductDetailClosed){
        detailProduct.classList.add("inactive")
    };



}


let listProducts = [];
let product1 = {
    'name': "Bike",
    "value": 120,
    "img" : "https://st.depositphotos.com/1032174/1281/v/950/depositphotos_12813937-stock-illustration-full-suspension-mountain-bike.jpg" 
};

let product2 = {
    'name': "Bike2",
    "value": 420,
    "img" : "https://st.depositphotos.com/1032174/1281/v/950/depositphotos_12813937-stock-illustration-full-suspension-mountain-bike.jpg" 
};

let product3 = {
    'name': "Bike3",
    "value": 320,
    "img" : "https://st.depositphotos.com/1032174/1281/v/950/depositphotos_12813937-stock-illustration-full-suspension-mountain-bike.jpg" 
}

listProducts.push(product1,product2,product3)


function renderProducts(arr){
    for (element of arr){
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        const images = document.createElement("img");
        images.setAttribute("src", element.img);
        images.addEventListener("click", showDetailProduct)

        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");


        const productInfoDiv = document.createElement("div");
        const producPrice = document.createElement("p");
        producPrice.innerText = "$ " + element.value;
        const producName = document.createElement("p");
        producName.innerText = element.name;
        productInfoDiv.appendChild(producPrice);
        productInfoDiv.appendChild(producName);

        const productInfofigure = document.createElement("figure");
        const imgIconCarrito = document.createElement("img");
        imgIconCarrito.setAttribute("src", "./icons/bt_add_to_cart.svg");
        productInfofigure.appendChild(imgIconCarrito);

        productInfo.appendChild(productInfoDiv),
        productInfo.appendChild(productInfofigure);

        productCard.appendChild(images);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);

    };
}

renderProducts(listProducts)