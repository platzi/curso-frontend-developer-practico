const menuEmail = document.querySelector(".navbar-email");
const mobileMenu = document.querySelector('.mobile-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const productCloseDetailContainer = document.querySelector('.product-detail-close');
const productDetailImg = document.querySelector('.productDetailImg');
const cardsContainer = document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobilepMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailContainer.addEventListener("click", closeProductDetailAside)

function toggleDesktopMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed) {
        shoppingCartContainer.classList.toggle('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobilepMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    const isProductDetailContainer = productDetailContainer.classList.contains('inactive');

    if (!isAsideClosed) {
        shoppingCartContainer.classList.toggle('inactive');
    }
    if (!isProductDetailContainer) {
        mobileMenu.classList.toggle('hover');
    }

    mobileMenu.classList.toggle('inactive');

}

function toggleCarritoAside(){
    const isMobileMenuClosed =  mobileMenu.classList.contains('inactive');
    const isDesktopMenu = desktopMenu.classList.contains('inactive');
    const isProductDetailContainer = productDetailContainer.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.toggle('inactive');
    }
    if (!isDesktopMenu) {
        desktopMenu.classList.toggle('inactive');
    }
    if (!isProductDetailContainer) {
        productDetailContainer.classList.toggle('inactive');
    }
    
    shoppingCartContainer.classList.toggle('inactive');
}

function oppenProductDetailAside (){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    const isMobileMenuClosed =  mobileMenu.classList.contains('inactive');
    const isDesktopMenu = desktopMenu.classList.contains('hover');

    if (!isAsideClosed) {
        shoppingCartContainer.classList.toggle('inactive');
    }
    if (!isMobileMenuClosed) {
        mobileMenu.classList.toggle('inactive');
    }

    if (!isDesktopMenu) {
        desktopMenu.classList.add('hover');
    }

    function imgReference(objName) {
        productDetailImg.setAttribute("src", objName.image )
    }
    imgReference
    productDetailContainer.classList.remove("inactive");
}

function closeProductDetailAside (){
    const isDesktopMenu = desktopMenu.classList.contains('hover');

    if (!isDesktopMenu) {
        desktopMenu.classList.remove('hover');
    }

    productDetailContainer.classList.add("inactive");

}
 
// ---------------------ProductsList---------------------

const productsList = [];

function addToProductList(VarOfTheProduct) {
    productsList.push(VarOfTheProduct);
};

class CreateProducts{
    constructor(
        name,
        price,
        image,
        description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ) {
        this.name = name;
        this.price = price;
        this.image = image;
        this.description = description;
    }
}

// ------------------------Products------------------------

let productBike = new CreateProducts("Bike", 100, "./images/Product-Bike.jpg");
let productVase = new CreateProducts("Vase", 10, "./images/Product-vase.jpg");
let productComputer= new CreateProducts("Computer", 500, "./images/Product-Electronic-laptop.jpg");
let productXylophone= new CreateProducts("Xylophone", 4, "./images/Product-Toy-music.jpg");
let productCrocks= new CreateProducts("Crocks", 12, "./images/Product-crocks.jpg");
let productIron= new CreateProducts("Iron", 15, "./images/Product-Electronic-Iron.jpg");
let productWeights= new CreateProducts("Wheaves", 8, "./images/Product-pesas.jpg");
let productShirt= new CreateProducts("Shirt", 10.50, "./images/Product-shirt.jpg");
let productShoes= new CreateProducts("Shoes", 15, "./images/Product-shoes.jpg");
let productTennisBall= new CreateProducts("Tennis Ball", 1.20, "./images/Product-tennisBall.jpg");
let productMrio= new CreateProducts("Action Figure of Mario ", 3 , "./images/Product-Toy-mario.jpg");
let productSpiner= new CreateProducts("Spiner", 2.50, "./images/Product-Toy-spiner.jpg");

addToProductList(productBike);
addToProductList(productVase);
addToProductList(productComputer);
addToProductList(productXylophone);
addToProductList(productCrocks);
addToProductList(productIron);
addToProductList(productWeights);
addToProductList(productShirt);
addToProductList(productShoes);
addToProductList(productTennisBall);
addToProductList(productMrio);
addToProductList(productSpiner);




/* <div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
            <div>
                <p>$120,00</p>
                <p>Bike</p>
            </div>
            <figure>
                <img src="./icons/bt_add_to_cart.svg" alt="">
            </figure>
        </div>
    </div> */

for (product of productsList) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
      
        // product= {name, price, image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener("click", oppenProductDetailAside)
      
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
      
        const productInfoDiv = document.createElement('div');
      
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;

        productInfoDiv.appendChild(productName);
        productInfoDiv.appendChild(productPrice);

      
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
      
        productInfoFigure.appendChild(productImgCart);
      
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
      
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
      
        cardsContainer.appendChild(productCard);
      }
// ---------------------productDetaleImg---------------------

