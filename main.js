const navbarEmailElement = document.querySelector('.navbar-email');
const desktopMenuElement =document.querySelector('.desktop-menu');

const hamburgerElement = document.querySelector('.menu');
const mobileMenuElement = document.querySelector('.mobile-menu');

const navbarCartElement = document.querySelector('.navbar-shopping-cart');
const cartMenuElement = document.querySelector('.shopping-cart-detail');

// 
class Product {
    constructor(name, price, img) {
        this.name = name;
        this.price = price;
        this.img = img;
        this.cardContainerElement = document.querySelector('.cards-container');
    }

    // Method to create and add a product card to the card container
    addProduct(product) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.img);
        
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        
        const productInfoDiv = document.createElement('div');
        
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
        
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
        
        productInfoDiv.append(productPrice, productName);
        productInfoFigure.appendChild(productImgCart);
        productInfo.append(productInfoDiv, productInfoFigure);
        productCard.append(productImg, productInfo);
        this.cardContainerElement.appendChild(productCard);
    }

    // Method to display a list of products
    displayProducts(products) {
        for (const product of products) {
          this.addProduct(product);
        }
    }
}

// Event listeners to toggle visibility of menu and cart elements
navbarEmailElement.addEventListener('click', () => {
    desktopMenuElement.classList.toggle('inactive');
    cartMenuElement.classList.add('inactive');
})

hamburgerElement.addEventListener('click', () => {
    mobileMenuElement.classList.toggle('inactive');
    cartMenuElement.classList.add('inactive');
})

navbarCartElement.addEventListener('click', () => {
    cartMenuElement.classList.toggle('inactive');
    mobileMenuElement.classList.add('inactive');
    desktopMenuElement.classList.add('inactive');
})

// Sample product data
const productList = [
    new Product('Bike', 120, 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2'),
    new Product('TV', 399, 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2'),
    new Product('Laptop', 650, 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2'),
    new Product('Desktop Computer', 1700, 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2'),
];

const productDisplay = new Product();
productDisplay.displayProducts(productList);