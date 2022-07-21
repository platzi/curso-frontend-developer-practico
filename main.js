const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const productDetailCloseIcon = document.querySelector('.product-detail-close'); 

const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const shoppingCart = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');

const productDetailContainer = document.querySelector('#productDetail');
//console.log(aside);

menuEmail.addEventListener('click',toogleDesktopMenu);
menuHamIcon.addEventListener('click',toogleMobileMenu);
shoppingCart.addEventListener('click',toogleShoppingCar);
productDetailCloseIcon.addEventListener('click',closeProductDetail);

function toogleDesktopMenu(){
     console.log('1');
    if (!shoppingCartContainer.classList.contains('inactive')){
        shoppingCartContainer.classList.add('inactive');
    }
    if (!productDetailContainer.classList.contains('inactive')){
        productDetailContainer.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');    
    
}

function toogleMobileMenu(){
     console.log('2');
    if (!shoppingCartContainer.classList.contains('inactive')){
        shoppingCartContainer.classList.add('inactive');
    }
    if (!productDetailContainer.classList.contains('inactive')){
        productDetailContainer.classList.add('inactive');
    }     
    mobileMenu.classList.toggle('inactive');
}

function toogleShoppingCar(){    
     console.log('3');
    if (!desktopMenu.classList.contains('inactive')){
        desktopMenu.classList.add('inactive');
    }

    if (!mobileMenu.classList.contains('inactive')){
        mobileMenu.classList.add('inactive');
    }
    if (!productDetailContainer.classList.contains('inactive')){
        productDetailContainer.classList.add('inactive');
    }    
    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside(){
     console.log('4');
    if (!shoppingCartContainer.classList.contains('inactive')){
        shoppingCartContainer.classList.add('inactive');
    } 
     if (!desktopMenu.classList.contains('inactive')){
        desktopMenu.classList.add('inactive');
    } 
    if (!mobileMenu.classList.contains('inactive')){
        mobileMenu.classList.add('inactive');
    }
    if (!shoppingCartContainer.classList.contains('inactive')){
        shoppingCartContainer.classList.add('inactive');
    }    
    productDetailContainer.classList.remove('inactive');
}

function closeProductDetail(){
     console.log('5');
    productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'Placas Desarrollo',
    price: 100,
    image: 'https://i0.wp.com/epyelectronica.com/wp-content/uploads/2020/10/placas-de-desarrollo.png?w=500&ssl=1'
})
productList.push({
    name: 'Shield',
    price: 200,
    image: 'https://i0.wp.com/epyelectronica.com/wp-content/uploads/2020/09/Shield-CNC-V3.png?w=500&ssl=1'
})
productList.push({
    name: 'Drivers',
    price: 40,
    image: 'https://i0.wp.com/epyelectronica.com/wp-content/uploads/Driver-Puente-H-L298N.jpg?w=500&ssl=1'
})
productList.push({
    name: 'Inalambrico',
    price: 230,
    image: 'https://i0.wp.com/epyelectronica.com/wp-content/uploads/2020/09/Modulo-Inalambrico-Xbee-S2C-Zigbee.png?w=500&ssl=1'
})
productList.push({
    name: 'Testers',
    price: 1220,
    image: 'https://i0.wp.com/epyelectronica.com/wp-content/uploads/UT33D.png?w=500&ssl=1'
})
productList.push({
    name: 'Alimentadores',
    price: 140,
    image: 'https://i0.wp.com/epyelectronica.com/wp-content/uploads/Cargador-de-Alimentacion-Arduino-DC-5v-2A.jpg?w=500&ssl=1'
})
productList.push({
    name: 'Componentes',
    price: 50,
    image: 'https://i0.wp.com/epyelectronica.com/wp-content/uploads/2020/10/componentes-electronicos.png?w=700&ssl=1'
})
productList.push({
    name: 'Displays',
    price: 220,
    image: 'https://i0.wp.com/epyelectronica.com/wp-content/uploads/2020/10/s-l400.jpg?w=400&ssl=1'
})
productList.push({
    name: 'Testers',
    price: 1220,
    image: 'https://i0.wp.com/epyelectronica.com/wp-content/uploads/UT33D.png?w=500&ssl=1'
})
productList.push({
    name: 'Motores - Llatas',
    price: 420,
    image: 'https://i0.wp.com/epyelectronica.com/wp-content/uploads/motores-servos-y-llantas.jpg?w=500&ssl=1'
})



function rendersProducts(arr){
    const cardsContainer = document.querySelector('.main-container');
    const productCardContainer = document.createElement("div");  
    productCardContainer.classList.add('cards-container');
    cardsContainer.appendChild(productCardContainer);

    for (product of productList){
        
        const productCard = document.createElement("div");  
        productCard.classList.add('product-card');

        const productImg = document.createElement("img");
        productImg.setAttribute('src',product.image)
        productImg.addEventListener('click',openProductDetailAside);

        const productInfo = document.createElement("div");
        productInfo.classList.add('product-info');        

        const div = document.createElement("div");

        const productInfoPrice = document.createElement("p");
        productInfoPrice.innerHTML = '$' + product.price;

        const productInfoName = document.createElement("p");
        productInfoName.innerHTML = '$' + product.name;
        
        const figure = document.createElement("figure");

        const figureIcon = document.createElement("img");
        figureIcon.setAttribute("src","./icons/bt_add_to_cart.svg")

        div.appendChild(productInfoPrice);
        div.appendChild(productInfoName);    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);    
        productInfo.appendChild(div);
        productInfo.appendChild(figure);
        figure.appendChild(figureIcon);

        productCardContainer.appendChild(productCard);
    }    
}
rendersProducts(productList);
