const menuEmail= document.querySelector('.navbar-email');
const desktopMenu= document.querySelector('.desktop-menu');

const menuHamIcon= document.querySelector('.menu');
const mobilMenu= document.querySelector('.mobile-menu');

const menuShopCardIcon = document.querySelector('.navbar-shopping-card');
const shoppingCardContainer = document.querySelector('#shoppingCardContainer');

const cardsContainer = document.querySelector('.cards-container')

//const productImg = document.querySelector('img')

const productDetailContainer = document.querySelector('#productDetail')
const ProductDetailCloseIcon = document.querySelector('.product-detail-close')

/*event listener */
menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuShopCardIcon.addEventListener('click',toggleShoppingCard)
ProductDetailCloseIcon.addEventListener('click',closeProductDetail)

/*function of the event */
function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    mobilMenu.classList.toggle('inactive')
    shoppingCardContainer.classList.add('inactive')
    productDetailContainer.classList.add('inactive')
}

function toggleMobileMenu(){
    mobilMenu.classList.toggle('inactive');
    desktopMenu.classList.toggle('inactive')
    shoppingCardContainer.classList.add('inactive') 
    productDetailContainer.classList.add('inactive')
}

function toggleShoppingCard(){
    shoppingCardContainer.classList.toggle('inactive')
    mobilMenu.classList.add('inactive')
    desktopMenu.classList.add('inactive')
    productDetailContainer.classList.add('inactive')
}

function closeProductDetail(){
    productDetailContainer.classList.add('inactive')
}

const productList= []
productList.push({
    name: 'bike',
    price:120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
},
{
    name: 'screen',
    price:200,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    
},
{
    name: 'computer',
    price:650,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

    /* Product list creation*/
for (product of productList){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    
    //product={name,price,image} -> product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click',openProductDetail)
    //productImg.addEventListener('click',makeProductDetail)
    function openProductDetail(){
        productDetailContainer.classList.remove('inactive')
        desktopMenu.classList.add('inactive');
        mobilMenu.classList.add('inactive')
        shoppingCardContainer.classList.add('inactive')
    }
    
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');
    
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    
    const productName = document.createElement('p');
    productName.innerText = product.name;
    
    productInfoDiv.append(productPrice,productName);
    
    const productInfoFigure = document.createElement('figure');
    const productImgCard = document.createElement('img');
    productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');
    
    productInfoFigure.appendChild(productImgCard);

    productInfo.append(productInfoDiv,productInfoFigure);

    /*productCard.append(img , productInfo)*/;
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard)
}


//aside productDetail creation
/*<div class="product-detail-close">
<img src="./icons/icon_close.png" alt="close">
</div>
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike">
<div class="product-info">
    <p>$35,00</p>
    <p>Bike</p>
    <p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
    <button class="primary-button add-to-cart-button">
    <img src="./icons/bt_add_to_cart.svg" alt="add to cart">
    Add to cart
    </button>
</div>*/


//Below is the function to create product details
/*function makeProductDetail(){
    productDetailContainer.classList.remove('inactive')
    desktopMenu.classList.add('inactive');
    mobilMenu.classList.add('inactive')
    shoppingCardContainer.classList.add('inactive')


    const ProductDetailCloseIcon=document.createElement('div');
    ProductDetailCloseIcon.classList.add('product-detail-close');
    const imgClose = document.createElement('img');
    imgClose.setAttribute('src','./icons/icon_close.png');
    ProductDetailCloseIcon.appendChild(imgClose);

    const img= document.createElement('img');
    img.setAttribute('src','https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
    
    const productPrice = document.createElement('p');
    productPrice.innerText = '$35,00';
    
    const productName = document.createElement('p');
    productName.innerText = 'Bike';

    const productDescription = document.createElement('p');
    productDescription.innerText = "With its practical position, this bike also fulfills a decorative function, add your hall or workspace.";

    const btn_AddToCard=document.createElement('button');
    btn_AddToCard.classList.add('primary-button','add-to-cart-button');
    const img_AddToCard=document.createElement('img');
    img_AddToCard.setAttribute('src','./icons/bt_add_to_cart.svg');
    btn_AddToCard.append(img_AddToCard,"Add to card")
    
    productInfo.append(productPrice,productName,productDescription,btn_AddToCard)
    
    productDetailContainer.append(ProductDetailCloseIcon,img,productInfo)
}*/