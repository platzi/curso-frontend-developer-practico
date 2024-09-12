const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon= document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const countProductsCart = document.querySelector('.count-products-in-cart');
const myOrderContent = document.querySelector('.my-order-content-list');
const subTotalCart = document.querySelector('#subTotal');


/*product detail aside*/
const imagen = document.querySelector("#img_product");
const priceProduct = document.querySelector("#prudct_price");

const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');


menuEmail.addEventListener('click',toggleDesktopMenu);
burgerMenu.addEventListener('click',toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toggleCarritoAside);
productDetailCloseIcon.addEventListener('click',closeProductDetailAside);


function toggleDesktopMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }


    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }

    if(!isProductDetailClosed){
        productDetailContainer.classList.add('inactive');
    }


    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }
    
    if(!isProductDetailClosed){
        productDetailContainer.classList.add('inactive');
    }
    
    shoppingCartContainer.classList.toggle('inactive');




}

function openProductDetailAside(event){
    shoppingCartContainer.classList.add("inactive");
    mobileMenu.classList.add("inactive");
    productDetailContainer.classList.remove("inactive");
    desktopMenu.classList.add("inactive");
    console.log(event)
    imagen.setAttribute("src", event.target.src);
    priceProduct.innerText = event.target.nextElementSibling.innerText; 
}
function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}
let clicks = 0;

function removeProductToCart(event){
    console.log(event);
    var hijo_eliminado = event.target.parentNode;
    var padre_eliminador = event.target.parentNode.parentElement;
    padre_eliminador.removeChild(hijo_eliminado);
    adittionProducts();
    clicks--;
    console.log(clicks);
    countProductsCart.innerText=clicks;
}

function adittionProducts(){
    var suma = 0;
    for(var i =0; i<myOrderContent.children.length;i++){
        suma += +(myOrderContent.children[i].childNodes[2].innerText.substring(2));
    }

    subTotalCart.innerText='$ '+suma+'.00';
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Ball',
    price: 25,
    image:'https://images.unsplash.com/photo-1516567727245-ad8c68f3ec93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=449&q=80'
});
productList.push({
    name: 'TV',
    price: 220,
    image:'https://m.media-amazon.com/images/I/51puug1pU3L._AC_UF700,800_QL80_.jpg'
});
productList.push({
    name: 'Iphone',
    price: 790,
    image:'https://i5.walmartimages.com.mx/mg/gm/3pp/asr/22a682ad-7638-4e7c-bfc9-b9e605ac0e29.9088ecff021979252b5ef1b151315500.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff'
});
productList.push({
    name: 'Laptop',
    price: 40,
    image:'https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=868&q=80'
});
productList.push({
    name: 'Mouse',
    price: 130,
    image:'https://images.unsplash.com/photo-1605773527852-c546a8584ea3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
});

/* <div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div> */

function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card')
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src',product.image);
        productImg.setAttribute("id", "imagen");
        productImg.addEventListener("click", openProductDetailAside);

    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info')
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$'+product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg')
        productImgCart.classList.add('card-btn-add-to-cart')
        productImgCart.addEventListener('click',renderProductsCart)
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
    
        cardsContainer.appendChild(productCard);

    }
}

renderProducts(productList);


/* <div class="shopping-cart">
        <figure>
          <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike">
        </figure>
        <p>Bike</p>
        <p>$30,00</p>
        <img src="./icons/icon_close.png" alt="close">
      </div> */

const productCartList = [];
function renderProductsCart(event){
    clicks++;
    console.log(clicks);
    countProductsCart.innerText=clicks;

    const shoppingCart = document.createElement('div');
    shoppingCart.classList.add('shopping-cart')

    const figureCart = document.createElement('figure');
    figureCart.classList.add('figure-cart');


    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src',event.target.parentNode.parentNode.parentElement.firstChild.attributes.src.nodeValue);

    figureCart.appendChild(productImgCart);
    

    var text = event.target.parentNode.parentNode.innerText;
    var parts = text.split('\n');
    var price = parts[0].substring(1); // Elimina el símbolo del dólar "$"
    var product = parts[2];

    const productNameCart = document.createElement('p');
    productNameCart.innerText = product;

    const productPriceCart = document.createElement('p');
    productPriceCart.innerText = "$ "+price;

    const deleteProductCart = document.createElement('img');
    deleteProductCart.setAttribute('src','./icons/icon_close.png');
    deleteProductCart.classList.add('remove-cart-button');
    deleteProductCart.addEventListener('click',removeProductToCart);

    shoppingCart.appendChild(figureCart);
    shoppingCart.appendChild(productNameCart);
    shoppingCart.appendChild(productPriceCart);
    shoppingCart.appendChild(deleteProductCart);

    myOrderContent.appendChild(shoppingCart);

    adittionProducts();
    // var suma = 0;
    // for(var i =0; i<myOrderContent.children.length;i++){
    //     suma += +(myOrderContent.children[i].childNodes[2].innerText.substring(2));
    // }

    // subTotalCart.innerText='$ '+suma+'.00';


};

