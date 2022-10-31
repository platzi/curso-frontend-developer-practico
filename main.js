const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu'); 
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCarContainer = document.querySelector('#shoppingCarContainer');
const cardsContainer = document.querySelector('.cards-container');




navEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);


//Funciones que permiten ocultar los menús dependiendo del caso necesario
function toggleDesktopMenu(){
    const isAsideClosed = shoppingCarContainer.classList.contains('inactive');
    

    if (!isAsideClosed){
        shoppingCarContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive')

}

function toggleMobileMenu(){
    const isAsideClosed = shoppingCarContainer.classList.contains('inactive');
    mobileMenu.classList.toggle('inactive')

    if (!isAsideClosed){
        shoppingCarContainer.classList.add('inactive');
    }
}

function toggleCarritoAside(){
    const isMobileMenuClosed= mobileMenu.classList.contains('inactive');
    const isAsideClosed = shoppingCarContainer.classList.contains('inactive');



    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    if (!isAsideClosed){
        desktopMenu.classList.add('inactive')
    }


    shoppingCarContainer.classList.toggle('inactive');

}

//Creamos nuestra lista de productos, eliminandolos del HTML y llamandolos desde Js
const productList = []; 
productList.push ({
    name:'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',  
});
productList.push ({
    name:'Televisión',
    price: 1200,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',  
});
productList.push ({
    name:'Computador',
    price: 700,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',  
});
productList.push ({
    name:'Telefono',
    price: 400,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',  
});
productList.push ({
    name:'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',  
});
productList.push ({
    name:'Cargador',
    price: 60,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',  
});

//Encapsulamos nuestro For en una funcion que luego la vamos a poder llamar de acuerdo a lo que necesitemos en ese momento

function renderProducts (arr){
    for (product of arr) {
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
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    
        
    }
} 

renderProducts(productList);