const navEmail = document.querySelector(".navbar-email");
const inactive = document.querySelector(".inactive");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu");
const cardsContainer =  document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const myOrderContent = document.querySelector('.my-order-content');
const cantArticulosIcon = document.querySelector('.cantArticulos');


navEmail.addEventListener('click',toggleDesktopMenu);
menuHamIcon.addEventListener('click',toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toggleCarritoAside);
productDetailCloseIcon.addEventListener('click',closeProductDetailAside);

function toggleDesktopMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
        }

    inactive.classList.toggle('inactive');

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

   if(!isProductDetailClosed){
    productDetailContainer.classList.add('inactive');
    }
}

function toggleMobileMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
        }

    mobileMenu.classList.toggle('inactive');

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

   if(!isProductDetailClosed){
    productDetailContainer.classList.add('inactive');
    }


}

function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

   if(!isMobileMenuClosed){
    mobileMenu.classList.add('inactive');
    }
    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
        }

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

   if(!isProductDetailClosed){
    productDetailContainer.classList.add('inactive');
    }
   
    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside(){
    productDetailContainer.classList.remove('inactive');

    shoppingCartContainer.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    /*const isShoppingCartClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isShoppingCartClosed){
        shoppingCartContainer.classList.add('inactive');
    }*/
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Bottle',
    price: 50,
    image: 'https://images.pexels.com/photos/786575/pexels-photo-786575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productList.push({
    name: 'Mouse',
    price: 100,
    image: 'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productList.push({
    name: 'Keyboard',
    price: 79,
    image: 'https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productList.push({
    name: 'Book',
    price: 30,
    image: 'https://images.pexels.com/photos/3309957/pexels-photo-3309957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productList.push({
    name: 'PC',
    price: 300,
    image: 'https://images.pexels.com/photos/2148216/pexels-photo-2148216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productList.push({
    name: 'Monitor',
    price: 200,
    image: 'https://images.pexels.com/photos/439803/pexels-photo-439803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productList.push({
    name: 'Window',
    price: 130,
    image: 'https://images.pexels.com/photos/1906795/pexels-photo-1906795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

function renderProducts(arr){
    for (product of productList){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        //product = {name,price,image} --> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$ ' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCard);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    
    }
}

renderProducts(productList);

const productsCart = [];

productsCart.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productsCart.push({
    name: 'Bottle',
    price: 50,
    image: 'https://images.pexels.com/photos/786575/pexels-photo-786575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productsCart.push({
    name: 'Mouse',
    price: 100,
    image: 'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productsCart.push({
    name: 'Keyboard',
    price: 79,
    image: 'https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productsCart.push({
    name: 'Book',
    price: 30,
    image: 'https://images.pexels.com/photos/3309957/pexels-photo-3309957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productsCart.push({
    name: 'PC',
    price: 300,
    image: 'https://images.pexels.com/photos/2148216/pexels-photo-2148216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productsCart.push({
    name: 'Monitor',
    price: 200,
    image: 'https://images.pexels.com/photos/439803/pexels-photo-439803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productsCart.push({
    name: 'Window',
    price: 130,
    image: 'https://images.pexels.com/photos/1906795/pexels-photo-1906795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productsCart.push({
    name: 'Window',
    price: 130,
    image: 'https://images.pexels.com/photos/1906795/pexels-photo-1906795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});




/*<div class="shopping-cart">
        <figure>
          <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike">
        </figure>
        <p>Bike</p>
        <p>$30,00</p>
        <img src="./icons/icon_close.png" alt="close">
      </div>*/

      /*<div class="order">
        <p>
          <span>Total</span>
        </p>
        <p>$560.00</p>
      </div>*/


function addProductsToCart(arr){
    for (product of productsCart){
        const productInCart = document.createElement('div');
        productInCart.classList.add('shopping-cart');

        const figureImg = document.createElement('figure');
        const imageIn = document.createElement('img');
        imageIn.setAttribute('src',product.image);

        const pName = document.createElement('p');
        pName.innerText = product.name;
        const pPrice = document.createElement('p');
        pPrice.innerText = '$ ' + product.price;

        const imgIcon = document.createElement('img');
        imgIcon.setAttribute('src','./icons/icon_close.png');



        figureImg.appendChild(imageIn);
        productInCart.appendChild(figureImg);
        productInCart.appendChild(pName);
        productInCart.appendChild(pPrice);
        productInCart.appendChild(imgIcon);

        myOrderContent.appendChild(productInCart);

    

        

    }

    const order = document.createElement('div');
        order.classList.add('order');
        const pOrder = document.createElement('p');
        const spanOrder = document.createElement('span');
        const totalPrice = document.createElement('p');
        let sumaTotal = 0;
        let otraSuma = 0;

        order.appendChild(pOrder);
        order.appendChild(totalPrice);
        pOrder.appendChild(spanOrder);
        myOrderContent.appendChild(order);
        spanOrder.innerText = 'Total';
        

        for(let i = 0; i < productsCart.length;i++){
            sumaTotal =+ productsCart[i].price;
            otraSuma = otraSuma + sumaTotal;
        }

        totalPrice.innerText = '$ ' + otraSuma;

        const buttonCheckout = document.createElement('button');
        buttonCheckout.classList.add('primary-button');
        buttonCheckout.innerText = 'Checkout';

        myOrderContent.appendChild(buttonCheckout);

        cantArticulosIcon.innerText = productsCart.length;


}

/*<button class="primary-button">
        Checkout
      </button>*/


addProductsToCart(productsCart);






