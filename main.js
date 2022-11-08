
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const iconMenuMobile = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const iconCarrito = document.querySelector('.navbar-shopping-cart');
const orderCarrito = document.querySelector('#shopping-cart-container');
const cardsContainer = document.querySelector('.cards-container');
const detailProduct = document.querySelector('#product-detail');
const iconProductDetailClosed = document.querySelector('.product-detail-close');


class Interactive {
    constructor({
        principalSelector,
        selectores = []
    }) {
        this.principalSelector = principalSelector;
        this.selectores = selectores;
    };
       
    print(){
        console.log("esta variable esta " + this.selectores)
    }

    closeSelectores(){
        for (let element of this.selectores){
            let isClosed = element.classList.contains('inactive');
            if (!isClosed){
                element.classList.add('inactive')
            }; 
        };
    }

    toggleSelectores (){
        this.closeSelectores()
        this.principalSelector.classList.toggle('inactive')   
    };   
};


const interactiveDesktopMenu2 = new Interactive({
    principalSelector : desktopMenu,
    selectores : [orderCarrito,detailProduct]
    });

const toggleMobileMenu = new Interactive({
    principalSelector : mobileMenu,
    selectores : [orderCarrito,detailProduct]
    });

const toggleIconCarrito = new Interactive({
    principalSelector : orderCarrito,
    selectores : [mobileMenu,desktopMenu,detailProduct]
    });


const showDetailProduct = new Interactive({
    principalSelector : detailProduct,
    selectores : [mobileMenu,desktopMenu]
    });



menuEmail.addEventListener('click', function(){
  interactiveDesktopMenu2.toggleSelectores()})

iconMenuMobile.addEventListener('click', function(){
  toggleMobileMenu.toggleSelectores()})

iconCarrito.addEventListener('click', function(){
  toggleIconCarrito.toggleSelectores()})

iconProductDetailClosed.addEventListener('click', function(){
  showDetailProduct.toggleSelectores()})




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