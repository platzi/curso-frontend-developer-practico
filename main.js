/* creamos variable apuntando al elemento */
const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCartIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

navEmail.addEventListener('click', toggleDesktopMenu );
menuHamIcon.addEventListener('click', toggleMobileMenu );
menuCartIcon.addEventListener('click', toggleCartAside );

function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive'); /* preguntamos si contiene la clase ianctive */
    if (!isAsideClosed) {
        aside.classList.add('inactive'); 
    }
    
    desktopMenu.classList.toggle('inactive'); /* toogle activa e inactiva una clase */
}

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive'); 
    if (!isAsideClosed) {
        aside.classList.add('inactive'); 
    }

    mobileMenu.classList.toggle('inactive'); /* toogle activa e inactiva una clase */
}

function toggleCartAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive'); 
    
    
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
    
    aside.classList.toggle('inactive'); /* toogle activa e inactiva una clase */
 

}

const productList = [];
productList.push({
    name:'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name:'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name:'Computer',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});



function renderProducts(arr) {
    for (product of arr){
        //crear cada elemento de html pero en js
        const productCard = document.createElement('div');  
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');  
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div'); 
    
        const productPrice = document.createElement('p'); 
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name; 
    
        productInfoDiv.appendChild(productPrice);//anidar elemento
        productInfoDiv.appendChild(productName);//anidar elemento
    
        const productInfoFigure = document.createElement('figure'); 
        const productImgCart = document.createElement('img'); 
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart); //anidar elemento
    
        productInfo.appendChild(productInfoDiv);//anidar elemento
        productInfo.appendChild(productInfoFigure);//anidar elemento
    
        productCard.appendChild(productImg);//anidar elemento
        productCard.appendChild(productInfo);//anidar elemento
        
        cardsContainer.appendChild(productCard);//anidar elemento
    
        /* 18:57 22/29*/
    }
}

renderProducts(productList);