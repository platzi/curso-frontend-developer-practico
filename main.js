/* creamos variable apuntando al elemento */
const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCartIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const shoppingDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');

//Eventos
navEmail.addEventListener('click', toggleDesktopMenu );
menuHamIcon.addEventListener('click', toggleMobileMenu );
menuCartIcon.addEventListener('click', toggleCartAside );
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

//Funciones
function toggleDesktopMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive'); /* preguntamos si contiene la clase ianctive */
    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }
    
    desktopMenu.classList.toggle('inactive'); /* toogle activa e inactiva una clase */
}

function toggleMobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive'); 
    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive'); 
    }
    closeProductDetailAside();

    mobileMenu.classList.toggle('inactive'); /* toogle activa e inactiva una clase */
}

function toggleCartAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive'); 
    
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    const isProductDetailClosed = shoppingDetailContainer.classList.contains('inactive'); 
    
    if (!isProductDetailClosed) {
        shoppingDetailContainer.classList.add('inactive');
    }
    
    shoppingCartContainer.classList.toggle('inactive'); /* toogle activa e inactiva una clase */
}

function openProductDetailAside(){
    //cerrar el shoping cart si es que se abre
    shoppingCartContainer.classList.add('inactive');
    shoppingDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside() {
    shoppingDetailContainer.classList.add('inactive');

    //Pregntar si mi shopping cart esta abierto

}

const productList = [];
productList.push({
    name:'Sandalias Minnie - 18',
    price: 30,
    image: './productos/sandalias-minie.jpeg'
});
productList.push({
    name:'Skechers Arcoiris- 17',
    price: 100,
    image: './productos/skechers-holo.jpeg'
});
productList.push({
    name:'Escolar Gobierno - 22',
    price: 80,
    image: './productos/escolar-gob.jpeg'
});

productList.push({
    name:'Choclo Beige - 19',
    price: 80,
    image: './productos/choclo-cafe19.jpeg'
});
productList.push({
    name:'Escolar Gobierno - 19',
    price: 80,
    image: './productos/botines-gamusa19.jpeg'
});
productList.push({
    name:'Tacones Gamusa - 4',
    price: 100,
    image: './productos/tacon-gamusa4.jpeg'
});
productList.push({
    name:'Plancha Vidal Sasson',
    price: 120,
    image: './productos/plancha-vidal.jpeg'
});



//Elemento de display
function renderProducts(arr) {
    for (product of arr){
        //crear cada elemento de html pero en js
        const productCard = document.createElement('div');  
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside); //escuche el evento del click
    
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