
const navEmail = document.querySelector('.navbar-email');
const iconMobilMenu = document.querySelector('.iconMobilMenu');

const desktopMenu = document.querySelector('.desktop-menu');
const mobilMenu = document.querySelector('.mobile-menu');

const iconShoppingCart = document.querySelector('.navbar-shopping-cart');
const shoppingCart = document.querySelector('.shopping-cart-container')

navEmail.addEventListener('click', activeDesktopMenu);
navEmail.addEventListener('blur', inactiveDesktopMenu,true,);

iconMobilMenu.addEventListener('click', activeMobilMenu);
iconMobilMenu.addEventListener('blur', inactiveMobilMenu,true,);

iconShoppingCart.addEventListener('click',activeShoppingCart);
iconShoppingCart.addEventListener('blur', inactiveShoppingCart,true,);

document.body.onresize = function(){
    hideAllMenus();
}

function hideAllMenus() {
    inactiveDesktopMenu();
    inactiveMobilMenu();
    inactiveShoppingCart();
}

function activeDesktopMenu(){
    hideAllMenus()
    navEmail.style.color = 'black';
    navEmail.style.fontWeight = 'bold';
    desktopMenu.classList.toggle('inactiveDesktopMenu');
}
function inactiveDesktopMenu(){
    desktopMenu.style.color = '#C7C7C7';
    desktopMenu.classList.add('inactiveDesktopMenu');
}

function activeMobilMenu(){
    hideAllMenus()
    mobilMenu.classList.toggle('inactiveMobilMenu');
}
function inactiveMobilMenu(){
    mobilMenu.classList.add('inactiveMobilMenu');
}

function activeShoppingCart(){
    hideAllMenus()
    shoppingCart.classList.toggle('inactiveShoppingCart');
}
function inactiveShoppingCart(){
    shoppingCart.classList.add('inactiveShoppingCart');
}

// código para agregar productos a la lista de productos
const productList = [];
productList.push({
    name: 'Bike',
    price: 150,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Computer',
    price: 1150,
    image: 'https://images.pexels.com/photos/41227/pexels-photo-41227.jpeg?auto=compress&cs=tinysrgb&w=400'
});
productList.push({
    name: 'Camera',
    price: 110,
    image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=400'
});
productList.push({
    name: 'Coffee',
    price: 10,
    image: 'https://images.pexels.com/photos/9050512/pexels-photo-9050512.jpeg?auto=compress&cs=tinysrgb&w=400'
});
productList.push({
    name: 'Tablet',
    price: 80,
    image: 'https://images.pexels.com/photos/4065885/pexels-photo-4065885.jpeg?auto=compress&cs=tinysrgb&w=400'
});
productList.push({
    name: 'Guitar',
    price: 100,
    image: 'https://images.pexels.com/photos/16445710/pexels-photo-16445710/free-photo-of-hombre-musica-musico-sujetando.jpeg?auto=compress&cs=tinysrgb&w=400'
});
productList.push({
    name: 'Valeriia Miller',
    price: 15,
    image: 'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=400'
});

for(product of productList){
    const productCart = `<div class="product-card">
                            <img src=${product.image} alt=${product.name}>
                            <div class="product-info">
                                <div>
                                    <p >$ ${product.price}</p>
                                    <p>${product.name}</p>
                                </div>
                                <figure>
                                    <img src="./icons/bt_add_to_cart.svg" alt="">
                                </figure>
                            </div>
                        </div>`
    const cardsContainer = document.querySelector('.cards-container');
    cardsContainer.innerHTML += productCart;
}