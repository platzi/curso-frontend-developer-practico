const desktopMenu = document.querySelector('.desktop-menu');
const navBarEmail = document.querySelector('.navbar-email');
const menuMobile = document.querySelector('.mobile-menu');
const iconShopingCart = document.querySelector('.navbar-shopping-cart');
const BurgerIconMobile = document.querySelector('.iconBurgerMenu');
const asideShoppingCart = document.querySelector('#shoppingCartContainer');
const asideProductDetail = document.querySelector('#product-detail');
const buttonBackShopingCart = document.querySelector('.arrowback');

const menuContainer = document.querySelector('.main-container');
const mainCardsContainer = document.querySelector('.cards-container');
const productList = [];
const shoppingCart = document.querySelector('.shopping-cart');
const containerCart = document.querySelector('.containerCart');
const counterShoppingCart = document.querySelector('.counterCart');
let elementsInCart = []//Array que guarda los elementos añadidos al carrito.
//event of navbar email for desktop Menu
navBarEmail.addEventListener('click', function(){
    asideShoppingCart.classList.add('inactive');
    asideProductDetail.classList.add('inactive');
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
//event close shopingCart
buttonBackShopingCart.addEventListener('click', function(){
    asideShoppingCart.classList.add('inactive');
});

class Product{
    constructor(name, image, price, id, desciption){
        this.name = name;
        this.image = image;
        this.price = price;
        this.id = id;
        this.desciption = desciption;
    };
};

let bike = new Product('Bike', 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', '120,00', 0, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nemo architecto quos? Ipsam totam nihil odio a quisquam asperiores vero. Obcaecati explicabo, earum sapiente dolore ipsa perspiciatis reiciendis veniam perferendis.");
let tv = new Product('TV old', 'https://images.pexels.com/photos/5721910/pexels-photo-5721910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', '400,00', 1, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nemo architecto quos? Ipsam totam nihil odio a quisquam asperiores vero. Obcaecati explicabo, earum sapiente dolore ipsa perspiciatis reiciendis veniam perferendis.");
let laptop = new Product('Laptop', 'https://images.pexels.com/photos/5703527/pexels-photo-5703527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', '350,00', 2, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nemo architecto quos? Ipsam totam nihil odio a quisquam asperiores vero. Obcaecati explicabo, earum sapiente dolore ipsa perspiciatis reiciendis veniam perferendis.");
let fridge = new Product('Fridge', 'https://images.pexels.com/photos/2962002/pexels-photo-2962002.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', '850,00', 3, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nemo architecto quos? Ipsam totam nihil odio a quisquam asperiores vero. Obcaecati explicabo, earum sapiente dolore ipsa perspiciatis reiciendis veniam perferendis.");
let shirt = new Product('Pink shirt', 'https://images.pexels.com/photos/2249248/pexels-photo-2249248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', '50,00', 4, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nemo architecto quos? Ipsam totam nihil odio a quisquam asperiores vero. Obcaecati explicabo, earum sapiente dolore ipsa perspiciatis reiciendis veniam perferendis.");
let pants = new Product('Pants', 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', '70,00', 5, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nemo architecto quos? Ipsam totam nihil odio a quisquam asperiores vero. Obcaecati explicabo, earum sapiente dolore ipsa perspiciatis reiciendis veniam perferendis.");
let plant = new Product('Plant', 'https://images.pexels.com/photos/4505447/pexels-photo-4505447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', '10,00', 6, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nemo architecto quos? Ipsam totam nihil odio a quisquam asperiores vero. Obcaecati explicabo, earum sapiente dolore ipsa perspiciatis reiciendis veniam perferendis.");
let clock = new Product('Clock', 'https://images.pexels.com/photos/177154/pexels-photo-177154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', '100,00', 7, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nemo architecto quos? Ipsam totam nihil odio a quisquam asperiores vero. Obcaecati explicabo, earum sapiente dolore ipsa perspiciatis reiciendis veniam perferendis.");
productList.push(bike, tv, laptop, fridge, shirt, pants, plant, clock);

function renderProducts(arr){
    for (const product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        const productImage = document.createElement('img');
        productImage.setAttribute('src', product.image);
        productImage.addEventListener('click', ()=> {
            asideProductDetail.classList.remove('inactive');
            function renderAsideInfo(){
                asideProductDetail.textContent = '';
                    const divProductContainer = document.createElement('div');
                divProductContainer.classList.add('product-detail-close');
                const imageClose = document.createElement('img');
                imageClose.setAttribute('src', './icons/icon_close.png');
                imageClose.addEventListener('click', ()=>{
                    asideProductDetail.classList.add('inactive');
                })
                divProductContainer.appendChild(imageClose);
                const imageProduct = document.createElement('img');
                imageProduct.setAttribute('src', product.image);
                const divContainerInfo = document.createElement('div');
                divContainerInfo.classList.add('product-info');
                const productPrice = document.createElement('p');
                productPrice.textContent = product.price;
                const productName = document.createElement('p');
                productName.textContent = product.name;
                const productDescription = document.createElement('p');
                productDescription.textContent = product.desciption;
                const buttonAddToCart = document.createElement('button');
                buttonAddToCart.classList.add('primary-button', 'add-to-cart-button');
                buttonAddToCart.addEventListener('click', ()=>{
                    elementsInCart.push(product);
                    renderProductsCart(elementsInCart);
                })
                const imgCart = document.createElement('img');
                imgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
                buttonAddToCart.textContent = 'Add to cart';
                buttonAddToCart.appendChild(imgCart);
                divContainerInfo.append(productPrice, productName, productDescription, buttonAddToCart);
                asideProductDetail.append(divProductContainer, imageProduct, divContainerInfo);
                return asideProductDetail;
            }
            renderAsideInfo()
        })
        
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

        productImage.addEventListener('click', ()=>{
          asideProductDetail.classList.remove('inactive');
        })
        figureImage.addEventListener('click', ()=>{
            elementsInCart.push(product);
            sumarProductos();
            renderProductsCart(elementsInCart);
        });
        
      }
}
renderProducts(productList);
let longitudCart = 0;
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
        iconClose.setAttribute('data-product-id', product.id);
        
        shoppingCart.append(figureCart, productName, productPrice, iconClose);
        iconClose.addEventListener('click', ()=>{
            //elimina los objetos no deseados.
            let indexValues = elementsInCart.indexOf(product);
            elementsInCart.splice(indexValues, 1);
            restarElementos();
            renderProductsCart(elementsInCart);
        });
    }   
};
renderProductsCart(elementsInCart);

function sumarProductos(){
    counterShoppingCart.textContent = ''
    const contador = document.createElement('p');
    longitudCart++;
    contador.textContent = longitudCart;
    counterShoppingCart.appendChild(contador);
};
function restarElementos(){
        counterShoppingCart.textContent = '';
        const contador = document.createElement('p');
        longitudCart--;
        contador.textContent = longitudCart;
        counterShoppingCart.appendChild(contador);
};