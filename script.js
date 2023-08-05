const menuEmail = document.querySelector('.navbar-email');
const menuDesktop = document.querySelector('.desktop-menu');
const menuBurger = document.querySelector('.menu')
const menuMobile = document.querySelector('.mobile-menu')
const aside = document.querySelector('.product-detail')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const cardsContainer = document.querySelector('.cards-container')
const productDetailSecundary = document.querySelector('.product-detail-secundary')
const productDetailSecundaryIcon = document.querySelector('.product-detail-close')


menuEmail.addEventListener('click', toggleDesktopMenu);
menuBurger.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside)
productDetailSecundaryIcon.addEventListener('click', closeProductDetailSecundary);


function toggleDesktopMenu(){
    const isAsideClosed = aside.classList.contains('inactive')

    if(!isAsideClosed){
        aside.classList.add('inactive')
    }


    menuDesktop.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideClosed = aside.classList.contains('inactive')

    if(!isAsideClosed){
        aside.classList.add('inactive')
    }

    closeProductDetailSecundary()

    menuMobile.classList.toggle('inactive');
}

function toggleCarritoAside(){
    const isMobileMenuClosed = menuMobile.classList.contains('inactive')

    if(!isMobileMenuClosed){
        menuMobile.classList.add('inactive')
    }

    const isProductDetailSecundaryClosed = productDetailSecundary.classList.contains('inactive')

    if(!isProductDetailSecundaryClosed){
        productDetailSecundary.classList.add('inactive')
    }

    aside.classList.toggle('inactive')
}

function openProductDetailSecundary(){

    aside.classList.add('inactive')

    productDetailSecundary.classList.remove('inactive')
}

function closeProductDetailSecundary(){
    productDetailSecundary.classList.add('inactive')

}


// LISTA DE PRODUCTOS
const productList = []

productList.push({
   name: 'Bike',
   price: 120,
   image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
   name: 'Laptop ',
   price: 1500,
   image: "https://www.digitaltrends.com/wp-content/uploads/2023/02/macbook-pro-14-m2-max.jpg?p=1"
});

productList.push({
   name: 'PlayStation 5',
   price: 3000,
   image: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2023/04/ps5-3011390.jpg?tf=1200x"
});

function renderProducts(arr){
    for (product of arr){
    
        // CONTENEDOR GENERAL
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
    
        // IMAGEN
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailSecundary);
    
    
        //CONTENEDOR DE DATOS
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        
            // Nombre + Precio
            const productInfoDiv = document.createElement('div');
    
            const productPrice = document.createElement('p');
            productPrice.innerText = 'S/' + product.price;
            
            const productName = document.createElement('p');
            productName.innerText = product.name;
    
            //Figure
            const productInfoFigure = document.createElement('figure');
            const productImgCart = document.createElement('img');
            productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
    
    
        // ORGANIZACIÓN
    
        productInfoFigure.appendChild(productImgCart);
        
        productInfoDiv.append(productName, productPrice);
    
        productInfo.append(productInfoDiv, productInfoFigure);
    
        productCard.append(productImg, productInfo);
    
        cardsContainer.appendChild(productCard)
    }
}

renderProducts(productList)