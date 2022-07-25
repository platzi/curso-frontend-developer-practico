const navEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const BurguerMenu = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const cartMenu = document.querySelector('.navbar-shopping-cart')
const cart = document.querySelector('.product-detail') 
const cardsContainer = document.querySelector('.cards-container')

navEmail.addEventListener('click',() => {
  !cartMenu.classList.contains('inactive') && cart.classList.add('inactive')
  desktopMenu.classList.toggle('inactive')
})

BurguerMenu.addEventListener('click',() => {
  !cartMenu.classList.contains('inactive') && cart.classList.add('inactive')
  mobileMenu.classList.toggle('inactive')
})

cartMenu.addEventListener('click',() => {
  !desktopMenu.classList.contains('inactive') && desktopMenu.classList.add('inactive')
  !mobileMenu.classList.contains('inactive') && mobileMenu.classList.add('inactive')
  cart.classList.toggle('inactive')
})

const productList = []
for (let i = 0; i < 10; i++) {
  productList.push({
    name: 'bike',
    price: 120,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""'
  })
}

function RenderProducts(array) {
  for (product of array) {
    const htmlCards = `
    <div class="product-card">
      <img src=${product.img} alt="">
      <div class="product-info">
        <div>
          <p>$${product.price}</p>
          <p>${product.name}</p>
        </div>
        <figure>
          <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
      </div>
    </div>
    `
    cardsContainer.innerHTML += htmlCards
  }
}

RenderProducts(productList)

// Código del profe
// function RenderProducts(array) {
//   for (product of array) {
//     const productCard = document.createElement('div')
//     productCard.classList.add('product-card')
  
//     const productImg = document.createElement('img')
//     productImg.setAttribute('src', product.img)
  
//     const productInfo = document.createElement('div')
//     productInfo.classList.add('product-info')
  
//     const productInfoDiv = document.createElement('div')
//     productInfoDiv.classList.add('product-card')
  
//     const productPrice = document.createElement('p')
//     productPrice.innerText = '$' + product.price
//     const productName = document.createElement('p')
//     productName.innerText = '$' + product.name
  
//     productInfoDiv.appendChild(productPrice)
//     productInfoDiv.appendChild(productName)
  
//     const productInfoFigure = document.createElement('figure')
//     const productImgCart = document.createElement('img')
//     productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')
  
//     productInfoFigure.appendChild(productImgCart);
  
//     productInfo.appendChild(productInfoDiv)
//     productInfo.appendChild(productInfoFigure)
  
//     productCard.appendChild(productImg)
//     productCard.appendChild(productInfo)
  
//     cardsContainer.appendChild(productCard)
//   }
// }

// RenderProducts(productList)