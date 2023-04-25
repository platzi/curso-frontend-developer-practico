const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const carritoMenu = document.querySelector('.navbar-shopping-cart');
const burgerMenu = document.querySelector('.menu');
const mobilepMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const prodructDetailContainer= document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');
const productDetailCloseIcon= document.querySelector('.product-detail-close');



menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleMobileMenu);
carritoMenu.addEventListener('click', togglecarritoaside);
productDetailCloseIcon.addEventListener('click', closeProductDetalaside);


function toggleDesktopMenu (){
    const isCarritoAsideClosed = shoppingCartContainer.classList.contains('inactive');
    const isproducDetailClosed = prodructDetailContainer.classList.contains('inactive');

    if(!isCarritoAsideClosed){
        shoppingCartContainer.classList.add('inactive');

    }
    if(!isproducDetailClosed){
        prodructDetailContainer.classList.add('inactive'); }   
   
    desktopMenu.classList.toggle('inactive');
}


function toggleMobileMenu (){
    const isCarritoAsideClosed = shoppingCartContainer.classList.contains('inactive');
   
    if(!isCarritoAsideClosed){
        shoppingCartContainer.classList.add('inactive');

    }
    closeProductDetalaside();
    mobilepMenu.classList.toggle('inactive');
}

function togglecarritoaside (){
    const isMobileMenuClosed = mobilepMenu.classList.contains('inactive');
    const isMenuDesktopClosed = desktopMenu.classList.contains('inactive');
    const isproducDetailClosed = prodructDetailContainer.classList.contains('inactive');

    if(!isMobileMenuClosed){
        mobilepMenu.classList.add('inactive');}

    if(!isMenuDesktopClosed){
        desktopMenu.classList.add('inactive');}

     if(!isproducDetailClosed){
     prodructDetailContainer.classList.add('inactive'); }   
     shoppingCartContainer.classList.toggle('inactive');

    }


function oPendructDetail(){
    shoppingCartContainer.classList.add('inactive');
    prodructDetailContainer.classList.remove('inactive');
    desktopMenu.classList.add('inactive');

}

function closeProductDetalaside(){
    prodructDetailContainer.classList.add('inactive');
}

const productList = []
productList.push(
{
    name:'bike',
    price: 120,
    image : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',


});
productList.push(
    {
        name:'Televisor',
        price: 400,
        image : 'https://images.freeimages.com/images/large-previews/32e/tv-hd-2-1206402.jpg',
        
    
    });
productList.push(
{
    name:'Computador',
    price: 500,
    image : 'https://images.freeimages.com/images/large-previews/f86/workspace-1635875.jpg',
    
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
      </div>
    </section>  */


function renderProducts (arr){
    for( product of arr){
        const productcard =document.createElement('div');
        productcard.classList.add('product-card');
    
        const productImg = document.createElement ('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click',oPendructDetail);



        const produtInfo = document.createElement('div');
        produtInfo.classList.add('product-info')
    
        const productInfoDiv = document.createElement('div')
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product . price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart =  document.createElement('img')
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
        
        produtInfo.appendChild(productInfoDiv);
        produtInfo.appendChild(productInfoFigure);
    
        productcard.appendChild(productImg);
        productcard.appendChild(produtInfo);
    
        cardsContainer.appendChild(productcard)
    
    }
}

renderProducts(productList);
