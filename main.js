const menuEmail = document.querySelector('.navbar-email');
const DeskTopMenu = document.querySelector('.desktop-menu');
const MenuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer= document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click',toggleDeskTopMenu);
menuHamIcon.addEventListener('click',toggleMobileMenu);
MenuCarritoIcon.addEventListener('click',toggleCarritoshoppingCartContainer);

function toggleDeskTopMenu(){
DeskTopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const idAsideClosed = shoppingCartContainer.classList.contains('inactive');
    if(!idAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoshoppingCartContainer(){
    const ismobileMenuClosed = mobileMenu.classList.contains('inactive');
    
if(!ismobileMenuClosed){
    //abrir el aside
    mobileMenu.classList.add('inactive')
    
}
shoppingCartContainer.classList.toggle('inactive');
}

const producList= [];
producList.push({
    name:'Bike',
    price:120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

producList.push({
    name:'Pantalla',
    price:220,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

producList.push({
    name:'Computador',
    price:520,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
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
       */


function renderProducts(arr){

    for(product of arr){
        const productCard= document.createElement('div');
        productCard.classList.add('product-card');
     
        // product= {name,price, image}--> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src',product.image);
     
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
     
        const productInfoDiv = document.createElement('div');
     
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
     
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
     
        const productInfofigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
     
        productInfofigure.appendChild(productImgCart);
     
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfofigure);
     
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
     
        cardsContainer.appendChild(productCard);
     
     }
}

renderProducts(producList);