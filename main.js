const navEmail= document.querySelector ('.navbar-email');
const desktopMenu = document.querySelector ('.desktop-menu');

const menuHamIcon = document.querySelector ('.menu');
const mobileMenu = document.querySelector ('.mobile-menu');

const menuCarritoIcon = document.querySelector ('.navbar-shopping-cart');
const aside = document.querySelector ('.product-detail');

const cardsContainer = document.querySelector ('.cards-container');

const productDetailSecondary = document.querySelector ('.product-detail-secondary');
const buttonExitAsideSecondary = document.querySelector ('.product-detail-close-secondary');

navEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside)
buttonExitAsideSecondary.addEventListener('click', closeAsideSecondary)

function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive');
 
    if (!isAsideClosed) {
        aside.classList.add('inactive');
          }
desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');
 
    if (!isAsideClosed) {
        aside.classList.add('inactive');
          }
    closeAsideSecondary();

    mobileMenu.classList.toggle('inactive');
    }

 function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains ('inactive');
    const isSecondaryAsideClosed = productDetailSecondary.classList.contains ('inactive');
 
   if (!isMobileMenuClosed || !isDesktopMenuClosed || !isSecondaryAsideClosed) {
     
    mobileMenu.classList.toggle('inactive');
     
    desktopMenu.classList.toggle('inactive');

    productDetailSecondary.classList.add ('inactive');
     }

    aside.classList.toggle('inactive');
   }

  function openProductDetailAsideSecondary () {
    aside.classList.add ('inactive');
    productDetailSecondary.classList.remove ('inactive')
  }

  function closeAsideSecondary () {
    productDetailSecondary.classList.add('inactive');
  }
  

  const productList = [];
  productList.push ({
    name: 'Bike',
    price: 120,
    imagen:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  });  
  productList.push ({
    name: 'Computer',
    price: 60,
    imagen:"https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  });   
  productList.push ({
    name: 'TV Vitange',
    price: 90,
    imagen:"https://images.pexels.com/photos/2251206/pexels-photo-2251206.jpeg?cs=srgb&dl=pexels-hu%E1%BB%B3nh-%C4%91%E1%BA%A1t-2251206.jpg&fm=jpg",
  });   
  productList.push ({
    name: 'Desk',
    price: 100,
    imagen:"https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  });   
  productList.push ({
    name: 'Shelving',
    price: 300,
    imagen:"https://images.pexels.com/photos/5705490/pexels-photo-5705490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  });   
  productList.push ({
    name: 'Iphone and EarPods',
    price: 600,
    imagen:"https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  });   
  productList.push ({
    name: 'Action Figure',
    price: 30,
    imagen:"https://images.pexels.com/photos/7422160/pexels-photo-7422160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  });   
  productList.push ({
    name: 'Dumbbells',
    price: 70,
    imagen:"https://images.pexels.com/photos/4164760/pexels-photo-4164760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  });   
  productList.push ({
    name: 'Collection Books',
    price: 900,
    imagen:"https://images.pexels.com/photos/694740/pexels-photo-694740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  });    
    
    
function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement ('div');
    productCard.classList.add('product-card');
  
    //Product = {name, price, image} --> product.image//
     const productImg = document.createElement ('img');
     productImg.setAttribute ('src', product.imagen);
     productImg.addEventListener ('click', openProductDetailAsideSecondary);
  
     const productInfo = document.createElement ('div');
     productInfo.classList.add ('product-info');
  
     const productInfoDiv = document.createElement ('div');
    
     const productPrice = document.createElement ('p');
     productPrice.innerText = '$' + product.price;
     const productName = document.createElement ('p');
     productName.innerText = product.name;
  
     productInfoDiv.appendChild(productPrice);
     productInfoDiv.appendChild(productName);
  
     const productInfoFigure = document.createElement ('figure');
     const productImgCard = document.createElement ('img');
     productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');

     productInfoFigure.appendChild(productImgCard);
  
     productInfo.appendChild(productInfoDiv);
     productInfo.appendChild(productInfoFigure);
  
     productCard.appendChild(productImg);
     productCard.appendChild(productInfo);
  
     cardsContainer.appendChild (productCard);
  }
  
}

renderProducts (productList);

