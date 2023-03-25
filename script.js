//Inicio del menu para que aparesca. 
//vamos a agarrar el objeto email para hacer que el menu aparesca.
const menu_email = document.querySelector('.navbar-email');
const menu_desktop = document.querySelector('.desktop-menu');
menu_email.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    const isAsideClosed = aside.classList.contains('inactive');
    if(!isAsideClosed){
        aside.classList.add('inactive');
    }

    menu_desktop.classList.toggle('inactive'); /* esto hace que se coloque o se quite dependiendo si esta o no */

}

// fin Agregando Menu Correo

// inicio MenuHamburguesa
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
menuHamIcon.addEventListener('click',toggleMenuHamIcon)
function toggleMenuHamIcon(){
    const isAsideClosed = aside.classList.contains('inactive');
    if(!isAsideClosed){
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive'); /* esto hace que se coloque o se quite dependiendo si esta o no */

}
// fin menu ham


// inicio MenuHamburguesa
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
menuCarritoIcon.addEventListener('click',toggleMenuCarrito)
aside.addEventListener('click',toggleMenuCarrito)

function toggleMenuCarrito(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
    aside.classList.toggle('inactive'); /* esto hace que se coloque o se quite dependiendo si esta o no */
}
// fin menu ham


// integrando productos Automaticamente

const cardsContainer=document.querySelector('.cards-container');
const productList = [];
productList.push({
    name:'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name:'Pantalla',
    price: 350,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name:'MotoBike',
    price: 990,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name:'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name:'Pantalla',
    price: 350,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name:'MotoBike',
    price: 990,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

RendersProducts(productList);
function RendersProducts(productList){
    for (product of productList){
        const productcard= document.createElement('div');
        productcard.classList.add('product-card');
        
        const productImg= document.createElement('img');
        productImg.setAttribute('src',product.image);
        
        const productinfo= document.createElement('div');
        productinfo.classList.add('product-info');
        
        const productInfoDiv= document.createElement('div');
        
        const productPrice= document.createElement('p');
        productPrice.innerText ='$'+ product.price;
        const productName= document.createElement('p');
        productName.innerText =product.name;
        const productInfoFigure= document.createElement('figure');
        const productImgCart= document.createElement('img');
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        productinfo.appendChild(productInfoDiv);
        productinfo.appendChild(productInfoFigure);
    
        productcard.appendChild(productImg);
        productcard.appendChild(productinfo);
        cardsContainer.appendChild(productcard)
        
    }
}