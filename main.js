const menuEmail = document.querySelector('.navbar-email');
const menuDesktop = document.querySelector('.desktop-menu');
const menuMobile = document.querySelector('.menu');
const iconMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardContainer = document.querySelector('.cards-container');
const productCard = document.querySelectorAll('.product-card');
const detailProduct = document.querySelector('.detail-product');
const detailProductClose = document.querySelector('.detail-product-close');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuMobile.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleShoppingCart);
detailProductClose.addEventListener('click', closeDetailProduct);


//inactivar o activar el menu, se usa toggle ya que es una funcion que quita o pone la clase si esta está o no
function toggleDesktopMenu(){
    if(!aside.classList.contains('inactive')){
        aside.classList.add('inactive');
    }else if (!detailProduct.classList.contains('inactive')){
        detailProduct.classList.add('inactive');
    }
    menuDesktop.classList.toggle('inactive');
}

function closeDetailProduct(){
    detailProduct.classList.add('inactive');
}

function toggleMobileMenu(){
    if(!aside.classList.contains('inactive')){
        aside.classList.add('inactive');
    }else if (!detailProduct.classList.contains('inactive')){
        detailProduct.classList.add('inactive');
    }
    iconMenu.classList.toggle('inactive');
}

function toggleShoppingCart(){
    if(!menuDesktop.classList.contains('inactive')){
        menuDesktop.classList.add('inactive');
    } else if (!iconMenu.classList.contains('inactive')){
        iconMenu.classList.add('inactive');
    }else if (!detailProduct.classList.contains('inactive')){
        detailProduct.classList.add('inactive');
    }
    aside.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name: 'Cat',
    price: 120,
    img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
})
productList.push({
    name: 'Cellphone',
    price: 220,
    img: "https://images.unsplash.com/photo-1505156868547-9b49f4df4e04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1432&q=80",
})
productList.push({
    name: 'Bed',
    price: 100,
    img: "https://images.unsplash.com/photo-1582582621959-48d27397dc69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
})
productList.push({
    name: 'Skateboard',
    price: 120,
    img: "https://images.unsplash.com/photo-1564982752979-3f7bc974d29a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
})
productList.push({
    name: 'Watch',
    price: 320,
    img: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
})

createCard(productList);

function createCard(productList){
for( product of productList){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const img = document.createElement('img');
    img.src = product.img;
    img.addEventListener('click', openDetailProduct)

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const price = document.createElement('p');
    price.innerHTML = "$" + product.price;
    
    const name = document.createElement('p');
    name.innerHTML = product.name;

    const productInfoFigure = document.createElement('figure');
   
    const imgCart = document.createElement('img');
    imgCart.src = "./icons/bt_add_to_cart.svg";

    productInfoFigure.appendChild(imgCart);
    productInfoDiv.appendChild(price);
    productInfoDiv.appendChild(name);
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
    productCard.appendChild(img);
    productCard.appendChild(productInfo);

    cardContainer.appendChild(productCard);

}

function openDetailProduct(){
    menuDesktop.classList.add('inactive');
    aside.classList.add('inactive');
    menuMobile.classList.add('inactive');
    detailProduct.classList.remove('inactive');
}



}