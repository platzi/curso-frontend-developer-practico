const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const canvasMenu = document.querySelector('.mobile-menu');
const menuHambIcon = document.querySelector('.hambMmenuIcon');

const iconCarrito = document.querySelector('.shopping-cart-icon');
const menuCarrito = document.querySelector('.shoppingCartContainer');

const cardsContainer = document.querySelector('.cards-container');

const productDetailContainer = document.querySelector('#productDetail');

const productContainerCloseIcon = document.querySelector('.product-detail-close');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHambIcon.addEventListener('click', toggleMobileMenu);
iconCarrito.addEventListener('click', toggleCarritoMenu);
productContainerCloseIcon.addEventListener('click', CloseProductDetailAside)


function toggleDesktopMenu(){
    const IsMenudeskClose = menuCarrito.classList.contains('inactive');

    if(!IsMenudeskClose){
        menuCarrito.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive') 
}

function toggleMobileMenu(){
    const IsCarritoClose = menuCarrito.classList.contains('inactive');
    CloseProductDetailAside();

    if(!IsCarritoClose){
        menuCarrito.classList.add('inactive');
    }
    canvasMenu.classList.toggle('inactive'); 
}


function toggleCarritoMenu(){
    const IsmobileMenuOpenClose = canvasMenu.classList.contains('inactive');

    if(!IsmobileMenuOpenClose){
        canvasMenu.classList.add('inactive');
    }
  

const isProductdetailContainerClosed = productDetailContainer.classList.contains('inactive');



    if(!isProductdetailContainerClosed){
        productDetailContainer.classList.add('inactive');
    }

    menuCarrito.classList.toggle('inactive');
}


const productList = [];
productList.push(
    {
      name:'Bike',
      price:120,
      image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    });
    productList.push(
    {
        name:'Computador',
        price:1200,
        image:'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    });
    

    function renderProducts(arr){

    for(product of arr){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openProductdetail);

    
    

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;
    const productDesc = document.createElement('p');
    productDesc.innerText = product.description;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productFig = document.createElement('figure');
    const productButonImg = document.createElement('img');
    productButonImg.setAttribute('src', './icons/bt_add_to_cart.svg');
    

    productFig.appendChild(productButonImg);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productFig);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);

}
    }

    function openProductdetail(){
        menuCarrito.classList.add('inactive');
        productDetailContainer.classList.remove('inactive');      
    }

    function CloseProductDetailAside(){        
        productDetailContainer.classList.add('inactive');
    }
    

    renderProducts(productList)