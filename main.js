const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const shoppingCart = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

//console.log(aside);

menuEmail.addEventListener('click',toogleDesktopMenu);
menuHamIcon.addEventListener('click',toogleMobileMenu);
shoppingCart.addEventListener('click',toogleShoppingCar);

function toogleDesktopMenu(){
    // console.log('1');
    if (!aside.classList.contains('inactive')){
        aside.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');    
    
}

function toogleMobileMenu(){
    // console.log('2');
    if (!aside.classList.contains('inactive')){
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toogleShoppingCar(){    
    // console.log('3');
    if (!desktopMenu.classList.contains('inactive')){
        desktopMenu.classList.add('inactive');
    }

    if (!mobileMenu.classList.contains('inactive')){
        mobileMenu.classList.add('inactive');
    }
    aside.classList.toggle('inactive');
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
