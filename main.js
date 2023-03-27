const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuHamIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')
const cardContainer = document.querySelector('.cards-container')


menuEmail.addEventListener('click', toggleDesktopMenu )
menuHamIcon.addEventListener('click', toggleMobileMenu)
menuCarritoIcon.addEventListener('click',toggleCarritoAside )

function toggleDesktopMenu() {
  const isAsideClosed = aside.classList.contains('inactive')
  if(!isAsideClosed){
    aside.classList.add('inactive')
  }
  desktopMenu.classList.toggle('inactive')
}
function toggleMobileMenu() {
  const isAsideClosed = aside.classList.contains('inactive')

  if(!isAsideClosed){
    aside.classList.add('inactive')
  }
  mobileMenu.classList.toggle('inactive')
}
function toggleCarritoAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive')

  if(!isMobileMenuClosed){
    mobileMenu.classList.add('inactive')
  }

  aside.classList.toggle('inactive')
}

const productList = []
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
  name: 'pantalla',
  price: 220,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
  name: 'computador',
  price: 620,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

/* <div class="product-card">
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

function renderProduct(arr) {
  for (product of productList) {
    const productCart = document.createElement('div')
    productCart.classList.add('product-card')

    const producImg = document.createElement('img')
    producImg.setAttribute('src', product.image)

    const productInfo = document.createElement('div')
    productInfo.classList.add('product-info')

    const productInfoDiv = document.createElement('div')

    const productPrice = document.createElement('p')
    productPrice.innerText = `$ ${product.price}`

    const productName = document.createElement('p')
    productName.innerText = product.name

    productInfoDiv.appendChild(productPrice)
    productInfoDiv.appendChild(productName)

    const productInfoFigure = document.createElement('figure')

    const productImgCart = document.createElement('img')
    productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg')

    productInfoFigure.appendChild(productImgCart)
    productInfo.appendChild(productInfoDiv)
    productInfo.appendChild(productInfoFigure)

    productCart.appendChild(producImg)
    productCart.appendChild(productInfo)

    cardContainer.appendChild(productCart)
  }
}

renderProduct(productList)
