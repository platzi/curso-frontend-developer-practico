const desktopMenu = document.querySelector('.desktop-menu');
const navBarEmail = document.querySelector('.navbar-email');
const menuMobile = document.querySelector('.mobile-menu');
const iconShopingCart = document.querySelector('.navbar-shopping-cart');
const BurgerIconMobile = document.querySelector('.iconBurgerMenu');
const asideShoppingCart = document.querySelector('#shoppingCartContainer');
const asideProductDetail = document.querySelector('#product-detail');
const botonCerrarAside = document.querySelector('.product-detail-close');
const buttonBackShopingCart = document.querySelector('.arrowback');

const menuContainer = document.querySelector('.main-container');
const mainCardsContainer = document.querySelector('.cards-container');
const productList = [];
const shoppingCart = document.querySelector('.shopping-cart');
const containerCart = document.querySelector('.containerCart');
let elementsInCart = []//Array que guarda los elementos añadidos al carrito.

//event of navbar email for desktop Menu
navBarEmail.addEventListener('click', function(){
    asideShoppingCart.classList.add('inactive');
    asideProductDetail.classList.add('inactive');
    mainCardsContainer.classList.add('opacity-elements');
    desktopMenu.classList.toggle('inactive');
});
//event of navbar mobile
BurgerIconMobile.addEventListener('click', function(){
    asideShoppingCart.classList.add('inactive');
    asideProductDetail.classList.add('inactive');
    menuMobile.classList.toggle('inactive');
});
//event of aside shoping cart (product-detail)
iconShopingCart.addEventListener('click', function(){
    menuMobile.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    asideProductDetail.classList.add('inactive');
    asideShoppingCart.classList.toggle('inactive');
});
//event close aside
botonCerrarAside.addEventListener('click', function(){
    asideProductDetail.classList.add('inactive');
});
//event close shopingCart
buttonBackShopingCart.addEventListener('click', function(){
    asideShoppingCart.classList.add('inactive');
});

class Product{
    constructor(name, image, price){
        this.name = name;
        this.image = image;
        this.price = price;
    };
};

let bike = new Product('Bike', 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', '120,00');
let tv = new Product('TV old', 'https://images.pexels.com/photos/5721910/pexels-photo-5721910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', '400,00');
let laptop = new Product('Laptop', 'https://images.pexels.com/photos/5703527/pexels-photo-5703527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', '350,00');
let fridge = new Product('Fridge', 'https://images.pexels.com/photos/2962002/pexels-photo-2962002.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', '850,00');
let shirt = new Product('Pink shirt', 'https://images.pexels.com/photos/2249248/pexels-photo-2249248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', '50,00');
let pants = new Product('Pants', 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', '70,00');
let plant = new Product('Plant', 'https://images.pexels.com/photos/4505447/pexels-photo-4505447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', '10,00');
let clock = new Product('Clock', 'https://images.pexels.com/photos/177154/pexels-photo-177154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', '100,00');
productList.push(bike, tv, laptop, fridge, shirt, pants, plant, clock);

function renderProducts(arr){
    for (const product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        const productImage = document.createElement('img');
        productImage.setAttribute('src', product.image);

        
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        productCard.append(productImage, productInfo);
        
        const divInfo = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText = product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;

        divInfo.append(productPrice, productName);
        
        const productFigure = document.createElement('figure');
        const figureImage = document.createElement('img');
        figureImage.setAttribute('src', './icons/bt_add_to_cart.svg');
        figureImage.classList.add('buttonAddCart');
        productFigure.appendChild(figureImage);
        productInfo.append(divInfo, productFigure);

        mainCardsContainer.appendChild(productCard);

        productImage.addEventListener('click', function(){
          asideProductDetail.classList.remove('inactive');
        })
        figureImage.addEventListener('click', function(){
            elementsInCart.push(product);
            renderProductsCart(elementsInCart);
        });
      }
      
}
renderProducts(productList);

function renderProductsCart(arr){
    shoppingCart.textContent = '';

    for (const product of arr) {
        const figureCart = document.createElement('figure');
        const imageProduct = document.createElement('img');
        imageProduct.setAttribute('src', product.image);
        figureCart.appendChild(imageProduct);
        const productName = document.createElement('p');
        productName.classList.add('productName');
        productName.innerText = product.name;
        const productPrice = document.createElement('p');
        productPrice.classList.add('productPrice')
        productPrice.innerText = product.price;
        const iconClose = document.createElement('img');
        iconClose.classList.add('iconClose');
        iconClose.setAttribute('src', './icons/icon_close.png');

        shoppingCart.append(figureCart, productName, productPrice, iconClose);
        iconClose.addEventListener('click', deleteProducts);
    }
};
renderProductsCart(elementsInCart);

function deleteProducts(){
  const selectedIndex = elementsInCart.findIndex((product) => product.id === this.dataset.productId);
  console.log(selectedIndex);
  if (selectedIndex !== -1) {
    elementsInCart.splice(selectedIndex, 1);
    renderProductsCart(elementsInCart);
  }
};
/* const cartCounter = document.querySelector('.counterCart');
let spanCounter = document.createElement('span');
let counterElements = elementsInCart.length;
spanCounter.textContent = counterElements;
cartCounter.appendChild(spanCounter); */