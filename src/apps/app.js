// SELECCION DE ELEMENTOS HTML
let menuEmail = document.querySelector('.desktop-menu');
let email = document.querySelector('.navbar-email');
let iconMenu= document.querySelector('#iconMenu');
let menuBurger= document.querySelector('.mobile-menu');
let cartMenu = document.querySelector('.product-detail');
let cartIcon = document.querySelector('.navbar-shopping-cart');
const cardsContainer = document.querySelector('.cards-container')
const mainContainer = document.querySelector('.main-container')



//FUNCIONES CREADAS
const showProductsOnScreen= (object)=>{

    for(product of object){
        const productCard= document.createElement('div');
        productCard.classList.add('product-card');
    
        const image = document.createElement('img');
        image.src= product.img;
        
        const infoProduct = document.createElement('div');
        infoProduct.classList.add('product-info');
        
        const div = document.createElement('div');
        const infoPrice = document.createElement('p');
        infoPrice.innerHTML = '$'+ product.price;
        
        const infoName = document.createElement('p');
        infoName.innerHTML= product.name;
        const figure = document.createElement('figure');
        const figureImg = document.createElement('img');
        figureImg.src= "./icons/bt_add_to_cart.svg";
        
        
        //AGREGAR HTML
        div.appendChild(infoPrice);
        div.appendChild(infoName);
        figure.appendChild(figureImg);
        infoProduct.appendChild(div);
        infoProduct.appendChild(figure);
        productCard.appendChild(image);
        productCard.appendChild(infoProduct);
        cardsContainer.appendChild(productCard);
        mainContainer.appendChild(cardsContainer);
    }
}
const showMenu = (navComp)=>{  // mostrar el menu del email
    navComp.classList.toggle('inactive');
}

const closeMenu = (menu1)=>{
    isMenuOpen1 = !menu1.classList.contains('inactive');
    if(isMenuOpen1){
        menu1.classList.add('inactive');
    }
}

//LLAMADA DE FUNCIONES
showProductsOnScreen(productList);
//ADDEVENTLISTENER

email.addEventListener('click',()=>{
    showMenu(menuEmail);
    closeMenu(cartMenu);
});
iconMenu.addEventListener('click',()=>{
    showMenu(menuBurger);
    closeMenu(cartMenu);
});
cartIcon.addEventListener('click',()=>{
    showMenu(cartMenu);
    closeMenu(menuBurger);
    closeMenu(menuEmail);
});