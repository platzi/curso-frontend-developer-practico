//account settings
const navEmail = document.querySelector('.navbar-email');
const deskMenu = document.querySelector('.desktop-menu');
//navMenu responsive
const HamMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
//shopping cart nav
const shoppingMenu = document.querySelector('.navbar-shopping-cart');
const shoppingList = document.querySelector('.product-detail')
//seleccionando clase de div para insertar productos de un array
const cardsContainer = document.querySelector('.cards-container')

navEmail.addEventListener('click',toggleDesktopMenu);
HamMenu.addEventListener('click',toggleMobileMenu);
shoppingMenu.addEventListener('click',toggleShoppingMenu);

function toggleDesktopMenu(){
    const asideClosed = shoppingList.classList.contains('inactive');

    if(!asideClosed){
        shoppingList.classList.add('inactive');
    }
    deskMenu.classList.toggle('inactive');
}
function toggleMobileMenu(){
    const asideClosed = shoppingList.classList.contains('inactive');

    if(!asideClosed){
        shoppingList.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}
function toggleShoppingMenu(){
    const mobileMenuClosed = mobileMenu.classList.contains('inactive');
    const deskMenuClosed = deskMenu.classList.contains('inactive');
    
    if(!mobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }else if(!deskMenuClosed){
        deskMenu.classList.add('inactive');
    }
    shoppingList.classList.toggle('inactive');
}

const productList = [];

productList.push({
    name: 'bike',
    price: 120,
    Image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'bike',
    price: 120,
    Image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'bike',
    price: 120,
    Image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
/*recorre el array, es una sintaxis mas reducida, me devuelve los nombres de los product
for(product of productList){
    console.log(product.name)
}
// me devuelve el indice de los productos
for(product in productList){
    console.log(product)
}*/

/*<div class="product-card">
        img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
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

function renderProducts(arr){
    for(product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const ProductImg = document.createElement('img');
        ProductImg.setAttribute('src', product.Image);
    
        const productinfo = document.createElement('div');
        productinfo.classList.add('product-info');
    
        const productinfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productinfoDiv.appendChild(productPrice);
        productinfoDiv.appendChild(productName);
    
        const productinfoFigure = document.createElement('figure');
    
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productinfoFigure.appendChild(productImgCart);
    
        productinfo.appendChild(productinfoDiv);
        productinfo.appendChild(productinfoFigure);
    
        productCard.appendChild(ProductImg);
        productCard.appendChild(productinfo);
    
        cardsContainer.appendChild(productCard);
    }
}
renderProducts(productList)