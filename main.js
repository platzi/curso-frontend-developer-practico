const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

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
    
    mobileMenu.classList.toggle('inactive');
  }
  
  function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    
    if (!isMobileMenuClosed) {
      mobileMenu.classList.add('inactive'); 
    }
    
    aside.classList.toggle('inactive');
  }

  const productList =[];
  productList.push({
    name: 'biko',
    price: 100,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
   })

   productList.push({
    name: 'Tv',
    price: 20343,
    imagen: 'https://images.pexels.com/photos/10519117/pexels-photo-10519117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
   })

   productList.push({
    name: 'Ipad',
    price: 3143,
    imagen: 'https://images.pexels.com/photos/4238489/pexels-photo-4238489.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
   })

   productList.push({
    name: 'Bad Grass',
    price: 1530,
    imagen: 'https://images.pexels.com/photos/9642284/pexels-photo-9642284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
   })

    function renderProducts (arr) {
        for (producto of arr){
            const productCard = document.createElement('div');
            productCard.classList.add('product-card')
        
            const productImg = document.createElement('img');
            productImg.setAttribute('src', producto.imagen)
        
            const productInfo = document.createElement('div');
            productInfo.classList.add('product-info')
        
            const productInfoDiv = document.createElement('div');
        
            const productPrice = document.createElement('p');
            productPrice.innerText = '$' + producto.price
            const productName = document.createElement('p');
            productName.innerText = producto.name
        
            productInfoDiv.appendChild(productPrice)
            productInfoDiv.appendChild(productName)
        
        
            const productInfoFigure = document.createElement('figure')
            const productImgCart = document.createElement('img')
            productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg' )
            
            productInfoFigure.appendChild(productImgCart)
            productInfo.appendChild(productInfoDiv)
            productInfo.appendChild(productInfoFigure)
        
            productCard.appendChild(productImg)
            productCard.appendChild(productInfo)
        
            cardsContainer.appendChild(productCard)
        
        }
    }
    renderProducts(productList)