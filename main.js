const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamburguer = document.querySelector('.menu')
const menuMobile = document.querySelector('.mobile-menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const asideMenuCarrito = document.querySelector('.product-detail')
const cardsContainer = document.querySelector('.cards-container')


navEmail.addEventListener('click', toggleDesktopMenu);
menuHamburguer.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toggleAsidepMenuCarrito);



function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive')
    asideMenuCarrito.classList.add('inactive')
}

function toggleMobileMenu(){
    menuMobile.classList.toggle('inactive')
    asideMenuCarrito.classList.add('inactive')
}

function toggleAsidepMenuCarrito(){
    asideMenuCarrito.classList.toggle('inactive')
    menuMobile.classList.add('inactive')
    desktopMenu.classList.add('inactive')
}

const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name: 'Pantalla',
    price: 320,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name: 'Computador',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

function renderProducts(arr){
    for (product of arr){ //funciona parecido al foreach
        const productCard = document.createElement('div');
        productCard.classList.add('product-card')
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        productCard.appendChild(productImg) //Agrego la imagen del producto
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const div1 = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText= '$ ' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        const productFigure = document.createElement('figure');
        const productImgCarrito = document.createElement('img');
        productImgCarrito.setAttribute('src', './icons/bt_add_to_cart.svg');
        
        productFigure.appendChild(productImgCarrito);
        div1.appendChild(productPrice);
        div1.appendChild(productName);
        productInfo.appendChild(div1);
        productInfo.appendChild(productFigure);
        productCard.appendChild(productInfo);
        cardsContainer.appendChild(productCard);
    
    }
}

renderProducts(productList);

