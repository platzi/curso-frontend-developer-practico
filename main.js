const menuEmail = document.querySelector('.navbar-email');
const menuHanIco = document.querySelector('.menu');
const menuCarIco = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const movileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHanIco.addEventListener('click', toggleMovileMenu);
menuCarIco.addEventListener('click', toggleCarMenu);

function toggleDesktopMenu(){
    const isCarMenu = aside.classList.contains('inactive');

    if(!isCarMenu){
        aside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMovileMenu(){
    const isCarMenu = aside.classList.contains('inactive');

    if(!isCarMenu){
        aside.classList.add('inactive');
    }

    movileMenu.classList.toggle('inactive');
}

function toggleCarMenu(){
    const isMovileMenuClose = movileMenu.classList.contains('inactive');
    const isDesktopMenuClose = desktopMenu.classList.contains('inactive');

    if(!isMovileMenuClose){
        movileMenu.classList.add('inactive');
    }

    if(!isDesktopMenuClose){
        desktopMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');
}

const productList = [];

productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"  
});
productList.push({
    name: "Monitor Gamer",
    price: 250,
    image: "https://images.samsung.com/is/image/samsung/p6pim/co/ls27bg402enxgo/gallery/co-odyssey-g4-27g40b-ls27bg402enxgo-533609519?$650_519_PNG$"  
});
productList.push({
    name: "Mac",
    price: 1300,
    image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-2017-macbook-rosegold-gallery?wid=5210&hei=3149&fmt=jpeg&qlt=95&.v=1500414254005"  
});


function renderProducts(arr){
    for(product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        productCard.appendChild(productImg);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$ ' + product.price ;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        /* 
        Con Element.append() podemos agregar varios nodos y texto mientras que con 
        Element.appendChild() solo podemos agregar un nodo.

        EJ: 
        productInfoDiv.append(productPrice, productName)
        */

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);    
    
        const productoInfoFigure = document.createElement('figure');
        const carAdd = document.createElement('img');
        carAdd.setAttribute('src', "./icons/bt_add_to_cart.svg" );
    
        productoInfoFigure.appendChild(carAdd);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productoInfoFigure);
    
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);