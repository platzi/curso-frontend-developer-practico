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



  const productList = []

  productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  })

  productList.push({
    name: 'Pantalla',
    price: 300,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  })

  productList.push({
    name: 'teclado',
    price: 45,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  })


  function renderProducts(arr){
    for(product of arr){
      // <div class="product-card">
      const productCard = document.createElement('div')
      productCard.classList.add('product-card')
      // <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
      const productImage = document.createElement('img')
      // product = {name, price, image} -> product.image
      productImage.setAttribute('src', product.image)
  
      // <div class="product-info">
      const productInfo = document.createElement('div')
      productInfo.classList.add('product-info')
  
  
      // div
      const productInfoDiv = document.createElement('div')
      // <p>$120,00</p>
      const productPrice = document.createElement('p')
      productPrice.innerText = '$' + product.price
      // <p>Bike</p>
      const productName = document.createElement('p')
      productName.innerText = product.name
  
      productInfoDiv.append(productPrice, productName)
  
  
      // <figure>
      const productInfoFigure = document.createElement('figure')
      // <img src="./icons/bt_add_to_cart.svg" alt="">
      const productImgCart = document.createElement('img')
      productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg')
      //* metemos productImgCart al figure -> productInfoFigure
      productInfoFigure.appendChild(productImgCart)
  
      productInfo.append(productInfoDiv, productInfoFigure)
      
      productCard.append(productImage,productInfo)
  
  
      // Agregar en el contenedor padre - cards-container
      cardsContainer.appendChild(productCard)
    }
  }

  renderProducts(productList)