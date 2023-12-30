const menuEmail     = document.querySelector('.navbar-email')
const menuHamIcon   = document.querySelector('.menu')
const menuCarrito   = document.querySelector('.navbar-shopping-cart')


const desktopMenu   = document.querySelector('.desktop-menu')
const mobileMenu    = document.querySelector('.mobile-menu')
const cartDetail    = document.querySelector('.product-detail')

const cardsContainer = document.querySelector('.cards-container')


menuEmail.addEventListener('click', toggleDesktopMenu)
menuHamIcon.addEventListener('click', toggleMobileMenu)
menuCarrito.addEventListener('click', toggleMenuCart)


function toggleDesktopMenu(){
   const ismobileMenuClosed = mobileMenu.classList.contains('inactive')
   const isCartDetailClosed = cartDetail.classList.contains('inactive')
   if (!ismobileMenuClosed){
      mobileMenu.classList.add('inactive')
   }
   if (!isCartDetailClosed){
      cartDetail.classList.add('inactive')
   }
   desktopMenu.classList.toggle('inactive') 
}

function toggleMobileMenu(){
   const isCartDetailClosed = cartDetail.classList.contains('inactive')
   const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')
   if (!isCartDetailClosed){
      cartDetail.classList.add('inactive')
   }
   if (!isDesktopMenuClosed){
      desktopMenu.classList.add('inactive')
   }
   
   mobileMenu.classList.toggle('inactive')
 }

 function toggleMenuCart(){
   const ismobileMenuClosed = mobileMenu.classList.contains('inactive')
   const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')
   if (!ismobileMenuClosed){
      mobileMenu.classList.add('inactive')
   }
   if (!isDesktopMenuClosed){
      desktopMenu.classList.add('inactive')
   }
   cartDetail.classList.toggle('inactive') 
}

/*<div class="product-card">
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

const productList = [];
productList.push({
   name: "Bicky",
   precio: 120,
   img :"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

productList.push({
   name: "TV",
   precio: 320,
   img :"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

productList.push({
   name: "Compute",
   precio: 620,
   img :"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

showListProducts(productList)

function showListProducts(arr){
   for (product of arr) {
      const productCard = document.createElement('div')
      productCard.classList.add('product-card')
   
      const productImg = document.createElement('img')
      productImg.setAttribute('src',product.img)
   
      const productInfo = document.createElement('div')
      productInfo.classList.add('product-info')
   
      const productInfoDiv = document.createElement('div')   
   
      const productPrice = document.createElement('p')
      productPrice.innerText= '$'+ product.precio
   
      const productName = document.createElement('p')
      productName.innerText= product.name
   
      const productFigure = document.createElement('figure')
      const productImgCart = document.createElement('img')
      productImgCart.setAttribute('src',"./icons/bt_add_to_cart.svg")
   
      productInfoDiv.append(productPrice, productName)
      productFigure.appendChild(productImgCart)
      productInfo.append(productInfoDiv,productFigure)
      productCard.append(productImg,productInfo)
   
      cardsContainer.appendChild(productCard)
   }
}



