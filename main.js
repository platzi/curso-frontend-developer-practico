const menuEmail = document.querySelector('.navbar-email')
const DesktopMenu = document.querySelector('.desktop-menu')

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    
    const IsCarritoDetailClosed = CarritoDetail.classList.contains('inactive');
    if(!IsCarritoDetailClosed){

        CarritoDetail.classList.add('inactive')
    }
    
    DesktopMenu.classList.toggle('inactive');
}


const menuburguer= document.querySelector('.menu')
const MobileMenu = document.querySelector('.mobile-menu')

menuburguer.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu(){

    const IsCarritoDetailClosed = CarritoDetail.classList.contains('inactive');
    if(!IsCarritoDetailClosed){

        CarritoDetail.classList.add('inactive')
    }
    
    MobileMenu.classList.toggle('inactive');
}


const CarritoDetail = document.querySelector('.product-detail')
const menuCarrito = document.querySelector('.navbar-shopping-cart')

menuCarrito.addEventListener('click', toggleCarritoDetail);

function toggleCarritoDetail(){

    const IsMobileMenuClosed = MobileMenu.classList.contains('inactive');
   
    if(!IsMobileMenuClosed){
        MobileMenu.classList.add('inactive')
    }
    
   
    CarritoDetail.classList.toggle('inactive');

  
}

const productlist = [];

productlist.push({

    name: 'Bike',
    price: 120,
    Imagen:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"


});

productlist.push({

    name: 'Pantalla',
    price: 220,
    Imagen:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"


});

productlist.push({

    name: 'Computador',
    price: 650,
    Imagen:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"


});

productlist.push({

    name: 'Bike',
    price: 120,
    Imagen:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"


});

productlist.push({

    name: 'Pantalla',
    price: 220,
    Imagen:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"


});

productlist.push({

    name: 'Computador',
    price: 650,
    Imagen:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"


});



const CardsContainer = document.querySelector('.cards-container')

function RenderProducts(arr){
for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    // product= {name, price, image} -> product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.Imagen);
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv = document.createElement('div');
  
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;
  
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
  
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
  
    productInfoFigure.appendChild(productImgCart);
  
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
  
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
  
    CardsContainer.appendChild(productCard);
  }
}

RenderProducts(productlist);
