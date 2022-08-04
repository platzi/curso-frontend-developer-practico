const menuEmail= document.querySelector('.navbar-email');
const desktopMenu= document.querySelector('.desktop-menu');
const menuCarritoIcon= document.querySelector('.navbar-shopping-cart')
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const menuHamburguer= document.querySelector('.menu');
const mobileMenu= document.querySelector('.mobile-menu');
const cardsContainer= document.querySelector('.cards-container')
const productDetailCloseIcon= document.querySelector('.product-detail-close')


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamburguer.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu(){
    const isAsideClosed= shoppingCartContainer.classList.add('inactive');

    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }


    desktopMenu.classList.toggle('inactive');
    productDetailContainer.classList.add('inactive');
}

function toggleMobileMenu(){
    const isAsideClosed= shoppingCartContainer.classList.add('inactive');
    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }
    closeProductDetailAside();
    mobileMenu.classList.toggle('inactive')
}

function toggleCarritoAside(){
    const isMobileMenuClosed=mobileMenu.classList.contains('inactive');
    const isDesktopMenuclosed= desktopMenu.classList.contains('inactive');
    const isProductDetailClosed=productDetailContainer.classList.contains('inactive');

      if(!isMobileMenuClosed){
            mobileMenu.classList.add('inactive');
        } else if(!isDesktopMenuclosed){
            desktopMenu.classList.add('inactive')
        }else if(!isProductDetailClosed){
            productDetailContainer.classList.add('inactive');
        }
    

        shoppingCartContainer.classList.toggle('inactive');      
}
function openProductDetailAside(){
productDetailContainer.classList.remove('inactive');
shoppingCartContainer.classList.add('inactive');
desktopMenu.classList.add('inactive');
}


function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}

//el detalle de la informacion sobre productos se guardan en una base de datos
//A esa base de datos accede el back-end, el back-end por medio de API rest puede hacer consultas al front-end.
//Repetir clase de Arrays.

const productList= []; //Array que devolveria el codigo JS, la escribire manualmente.

productList.push(
    {
        name: 'Bike',
        price: 120,
        img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    }
)

productList.push(
    {
        name: 'Tele',
        price: 200,
        img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    }
)

productList.push(
    {
        name: 'Laptop',
        price: 300,
        img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    }
)



  /*<div class="product-card">
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
  for(product of arr){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const img = document.createElement('img');
    img.setAttribute('src', product.img);
    //product= {name, price, img} -> product.img
    img.addEventListener('click', openProductDetailAside)


    const productInfo= document.createElement('div');
    productInfo.classList.add('product-info');


    const productInfoDiv= document.createElement('div');

    const productPrice= document.createElement('p');
    productPrice.innerText= '$' + product.price;
    const productName= document.createElement('p');
    productName.innerText= product.name;

    productInfoDiv.append(productPrice);
    productInfoDiv.append(productName);

    const productInfoFigure = document.createElement('figure');
    const productImgCart= document.createElement('img')
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfoFigure.append(productImgCart);
    cardsContainer.append(productCard);

    productInfo.append(productInfoDiv);
    productInfo.append(productInfoFigure);

    productCard.append(img);
    productCard.append(productInfo);

}  
}

renderProducts(productList);



