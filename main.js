const navbarEmail= document.querySelector('.navbar-email')
const desktopMenu= document.querySelector('.desktop-menu')
const mobileMenu= document.querySelector('.mobile-menu')
const imgMenuMobile= document.querySelector('.menu')
const carritoCompras= document.querySelector('.navbar-shopping-cart')
const productDetail= document.querySelector('.product-detail')
const cardsContainer= document.querySelector('.cards-container')

navbarEmail.addEventListener('click', toggleDesktopMenu)
imgMenuMobile.addEventListener('click', toggleMobileMenu)
carritoCompras.addEventListener('click', toggleAsideShoppingCart)

function toggleDesktopMenu(){
    productDetail.classList.add('inactive')
    desktopMenu.classList.toggle('inactive')

}   
function toggleMobileMenu(){
    productDetail.classList.add('inactive')
    mobileMenu.classList.toggle('inactive');

}
function toggleAsideShoppingCart(){
        mobileMenu.classList.add('inactive')
        desktopMenu.classList.add('inactive')
        productDetail.classList.toggle('inactive')

}

const productList= [];
productList.push({
    name: 'Bike',
    price: 120,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Bike',
    price: 120,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Bike',
    price: 120,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})


/*
<div class="product-card">
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

//Mostramos los productos mediante Arrays
function renderProducts(arr){
    for(product of arr){
        const productCard= document.createElement('div')
        productCard.classList.add('product-card');
    
        const productImg= document.createElement('img');
        productImg.setAttribute('src',product.img)
    
        const productInfo= document.createElement('div')
        productInfo.classList.add('product-info');
    
      
        const productInfoDiv= document.createElement('div')
    
        const productPrice= document.createElement('p')
        productPrice.innerText= '$ '+ product.price
    
        const productName= document.createElement('p')
        productName.innerText= product.name
        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productName)
    
        const productInfoFigure=document.createElement('figure')
        const productImgCart= document.createElement('img')
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg')
    
        productCard.appendChild(productImg)
        productCard.appendChild(productInfo)
    
        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productInfoFigure)
    
        productInfoFigure.appendChild(productImgCart)
    
    
        cardsContainer.appendChild(productCard)
    } 
}

renderProducts(productList)