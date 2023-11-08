const menuEmail= document.querySelector('.navbar-email');
const desktopMenu= document.querySelector('.desktop-menu');

const menuHamIcon= document.querySelector('.menu');
const mobilMenu= document.querySelector('.mobile-menu');

const menuShopCardIcon = document.querySelector('.navbar-shopping-card');
const shoppingCardContainer = document.querySelector('#shoppingCardContainer');

const cardsContainer = document.querySelector('.cards-container')

/*event listener */
menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuShopCardIcon.addEventListener('click',toggleShoppingCard)

/*function of the event */
function toggleDesktopMenu() {
desktopMenu.classList.toggle('inactive');
mobilMenu.classList.toggle('inactive')
shoppingCardContainer.classList.add('inactive')
}

function toggleMobileMenu(){
    mobilMenu.classList.toggle('inactive');
    desktopMenu.classList.toggle('inactive')
    shoppingCardContainer.classList.add('inactive') 
}

function toggleShoppingCard(){
    shoppingCardContainer.classList.toggle('inactive')
    mobilMenu.classList.add('inactive')
    desktopMenu.classList.add('inactive')
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
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  
})
/* Product list creation*/
for (product of productList){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    //product={name,price,image} -> product.image
    const img = document.createElement('img');
    img.setAttribute('src', product.image);

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
    productCard.appendChild(img);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard)

}