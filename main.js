const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const menuCart = document.querySelector('.navbar-shopping-cart');
const shoppingCartDetailMenu = document.querySelector('.shopping-cart-detail');

const ProductDetailCard = document.querySelector('.product-detail');
const productDetailCardCloseBtn = document.querySelector('.product-detail-close');

// 
navEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleMobileMenu);
menuCart.addEventListener('click', toggleShoppingCartDetailMenu);
productDetailCardCloseBtn.addEventListener('click', closeProductDetailCard);


function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    shoppingCartDetailMenu.classList.add('inactive'); 
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');   
    shoppingCartDetailMenu.classList.add('inactive'); 
}

function toggleShoppingCartDetailMenu() {
    shoppingCartDetailMenu.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');  
    ProductDetailCard.classList.add('inactive'); 
}

function openProductDetailCard(){
    ProductDetailCard.classList.remove('inactive');
    shoppingCartDetailMenu.classList.add('inactive'); 
    desktopMenu.classList.add('inactive');
}

function closeProductDetailCard(){
    ProductDetailCard.classList.add('inactive');
}



//----------------------------------------------------------------
const cardContainer = document.querySelector('.cards-container');

//Array Product List
const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1200,
    image: 'https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1600,
    image: 'https://m.media-amazon.com/images/I/61eExL-rIAL._AC_SL1001_.jpg'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1500,
    image: 'https://assets.specialized.com/i/specialized/60822-140_HLMT_CHAMONIX-HLMT-MIPS-CE-MRN-M-L_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});
productList.push ({
    name:'Seat',
    price: 300,
    image: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg'
});
productList.push ({
    name:'Tennis Montain Bike',
    price: 2200,
    image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg'
});
productList.push ({
    name:'Sunglasses',
    price: 800,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602'
});
productList.push ({
    name:'Sunglasses',
    price: 600,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/siroko-tech-k3s-clearfog-lente-antiniebla-frontal/1200x/crop_center.jpg?v=1635209603'
});
productList.push ({
    name:'Bicycle seat bag',
    price: 876,
    image: 'https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg'
});

//Array Product List
function renderProduct(arr){
    for (product of arr) {
        // div - product-card
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        // img of product
        const productIimg = document.createElement('img');
        productIimg.setAttribute('src', product.image);
    
        // div - product-info
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-detail-info');
    
        // div of product info
        const prodcutInfoDiv = document.createElement('div');
    
        // p of product price
        const prodcutPrice = document.createElement('p');
        prodcutPrice.innerHTML = '$' + product.price;
        // p of product name
        const prodcutName = document.createElement('p');
        prodcutName.innerHTML = product.name;
    
        // insert productPrice and prodcutName in productInfoDiv
        // prodcutInfoDiv.appendChild(prodcutPrice);
        // prodcutInfoDiv.appendChild(prodcutName);
        prodcutInfoDiv.append(prodcutPrice, prodcutName);
    
        // figure and img with cart icon
        const prodcutInfoFigure = document.createElement('figure');
        const prodcutImgCart = document.createElement('img');
        prodcutImgCart.setAttribute('src', "./icons/bt_add_to_cart.svg");
        // insert prodcutImgCart in prodcutInfoFigure
        prodcutInfoFigure.appendChild(prodcutImgCart);
    
        // insert productInfoDiv and prodcutInfoFigure in productInfo
        // productInfo.appendChild(prodcutInfoDiv);
        // productInfo.appendChild(prodcutInfoFigure);
        productInfo.append(prodcutInfoDiv, prodcutInfoFigure);
    
        // insert productIimg and productInfo in productCard
        // productCard.appendChild(productIimg);
        // productCard.appendChild(productInfo);
        productCard.append(productIimg, productInfo);
    
        // insert productCard in cardContainer
        cardContainer.appendChild(productCard);

        // addEventListener for productCard
        productCard.addEventListener('click', openProductDetailCard);
    }

}

renderProduct(productList);



// Run it initially
handleDeviceChange(smallDevice);



//----------------------------------------------------------------
// // Manera de usar funcion en addEventListener
// navEmail.addEventListener("click", function(){toggleElement(desktopMenu)});
// burgerMenu.addEventListener("click", function(){toggleElement(mobileMenu)});
// menuCart.addEventListener("click", function(){toggleElement(shoppingCartDetailMenu)});

// function toggleElement(elemento){
//     elemento.classList.toggle("inactive");
// }