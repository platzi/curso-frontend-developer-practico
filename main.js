const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const burgerMenu = document.querySelector('.menu');
const carritoMenuIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click',toggleDesktopMenu);
burgerMenu.addEventListener('click',toggleMobileMenu);
carritoMenuIcon.addEventListener('click',toggleCarritoAside);

function toggleDesktopMenu(){
   
        let emailNavbar='desktopMenu';
        closeWindows(emailNavbar);
}

function toggleMobileMenu(){
        let mobileMenu='mobileMenu';
        closeWindows(mobileMenu);
}

function toggleCarritoAside(){
        let carritoIcon='carritoDeCompras';
        closeWindows(carritoIcon);

}

function closeWindows(etiqueta){
    console.log(etiqueta);
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
    const isAsideOpen = !shoppingCartContainer.classList.contains('inactive');
    const isdesktopMenuOpen = !desktopMenu.classList.contains('inactive');

    switch (etiqueta) {
        case 'desktopMenu':
            if (isAsideOpen) {
                shoppingCartContainer.classList.add('inactive');
            }
            desktopMenu.classList.toggle('inactive');
            break;
        case 'carritoDeCompras':
            if (isdesktopMenuOpen) {
                desktopMenu.classList.add('inactive');
            }else if (isMobileMenuOpen) {
                mobileMenu.classList.add('inactive');
            }
            shoppingCartContainer.classList.toggle('inactive');
            break;
        case 'mobileMenu':
            if (isAsideOpen) {
                shoppingCartContainer.classList.add('inactive');
            }
            mobileMenu.classList.toggle('inactive');
            break
    }

}

function renderProducts(arr) {
  /* el for of nos siver para recorrer un objeto por sus atributos, esto nos sirve para que no tengamos que usar el indice de un array con mayor dificultad cuando se habla de objetos.
  
  para maquetar desde el JS con la manipulacion del DOM debemos primero crear los elementos del html de arriba hacia abajo con document.createElement('Elemento a crear: div,p,section, img, etc...') de arriba hacia abajo, luego debemos de ir anexando a los elementos padres cada uno de los elecmentos hijos con appendChild(variable otorgada las elementos), se puede ocupar el append(variable1,variable2,etc...) para agregar mas elementos de una vez en el elemento padre*/  
for (const product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    
    const img = document.createElement('img');
    img.setAttribute('src',product.image);
    
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
    
    const productInfoDiv = document.createElement('div');
    
    const productPrice = document.createElement('p');
    productPrice.innerText='$'+product.price;
    
    const productName = document.createElement('p');
    productName.innerText=product.name;
    
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
    
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
    
    productInfoFigure.appendChild(productImgCart);
    
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
    
    productCard.append(img,productInfo);
    
    cardsContainer.appendChild(productCard);
        
    }
}

const productList =[];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Pantalla',
    price: 12000,
    image: 'https://m.media-amazon.com/images/I/81tmsk6LYiL._AC_SL1500_.jpg'
});

productList.push({
    name: 'Computador',
    price: 1200,
    image: 'https://m.media-amazon.com/images/I/71n0k0TSRwS._AC_SL1500_.jpg'
});

renderProducts(productList);

