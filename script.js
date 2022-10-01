//fusion desktop menu and navbar
const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')

menuEmail.addEventListener('click', toggleDesktopMenu)

function toggleDesktopMenu () {
  //MY SOLUTION BUT

  // if (desktopMenu.classList.contains('inactive')){
  //   desktopMenu.classList.remove('inactive')
  // }else{
  //   desktopMenu.classList.add('inactive')
  // }

  //THERE IS "classList.toggle('')" wich toggle the class on every click
  //SO
  const isAsideCartOpen = !asideCart.classList.contains('inactive')

  if (isAsideCartOpen){
    asideCart.classList.add('inactive')
  }

  desktopMenu.classList.toggle('inactive')
}

//fusion mobile menu 
const burguerMenuIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')

mobileMenu.classList.remove('active')
burguerMenuIcon.addEventListener ('click', toggleMobileMenu)

function toggleMobileMenu() {
  const isAsideCartOpen = !asideCart.classList.contains('inactive')

  if (isAsideCartOpen){
    asideCart.classList.add('inactive')
  }

  mobileMenu.classList.toggle('active')
}

//fusion shopping cart
const cartMenuIcon = document.querySelector('.navbar-shopping-cart')
const asideCart = document.querySelector('.product-detail')

cartMenuIcon.addEventListener ('click', toggleCartMenu)

function toggleCartMenu() {
  const isMobileMenuOpen = mobileMenu.classList.contains('active')

  if (isMobileMenuOpen){
    mobileMenu.classList.remove('active')
  }
  asideCart.classList.toggle('inactive')

  const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive')

  if (isDesktopMenuOpen){
    desktopMenu.classList.add('inactive')
  }
}


const productList = []
const cardsContainer = document.querySelector('.cards-container')

function pushProductsList(productList) {
  productList.push ({
      name:'Bike',
      price: 12700,
      image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  })
  productList.push ({
      name:'Bicycle helmet',
      price: 1200,
      image: 'https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
  })
  productList.push ({
      name:'Bicycle helmet',
      price: 1600,
      image: 'https://m.media-amazon.com/images/I/61eExL-rIAL._AC_SL1001_.jpg'
  })
  productList.push ({
      name:'Bicycle helmet',
      price: 1500,
      image: 'https://assets.specialized.com/i/specialized/60822-140_HLMT_CHAMONIX-HLMT-MIPS-CE-MRN-M-L_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
  })
  productList.push ({
      name:'Seat',
      price: 300,
      image: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg'
  })
  productList.push ({
      name:'Tennis Montain Bike',
      price: 2200,
      image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg'
  })
  productList.push ({
      name:'Sunglasses',
      price: 800,
      image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602'
  })
  productList.push ({
      name:'Sunglasses',
      price: 600,
      image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/siroko-tech-k3s-clearfog-lente-antiniebla-frontal/1200x/crop_center.jpg?v=1635209603'
  })
  productList.push ({
      name:'Bicycle seat bag',
      price: 876,
      image: 'https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg'
  })
}
pushProductsList(productList)

/*
  <div class="product-card">

    <img
      src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      alt="">
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

function renderProducts (productList) {
  for (product of productList){
    const productCart = document.createElement('div')
    productCart.classList.add('product-card')

    const productImg = document.createElement('img')
    productImg.setAttribute('draggable', false)
    productImg.setAttribute('src', product.image)

    const productInfo = document.createElement('div')
    productInfo.classList.add('product-info')

    const productInfoDiv = document.createElement('div')
    
    const productPrice = document.createElement('p')
    productPrice.innerText = `$${product.price}`
    const productName = document.createElement('p')
    productName.innerText = `${product.name}`

    const productInfoFigure = document.createElement('figure')
    const productImgCart = document.createElement('img')
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')

    productInfoFigure.appendChild(productImgCart)

    productInfoDiv.append(productPrice,productName)
    productInfo.append(productInfoDiv,productInfoFigure)
    productCart.append(productImg,productInfo)
    
    cardsContainer.appendChild(productCart)
  }
}
renderProducts(productList)
