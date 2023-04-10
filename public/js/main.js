const menuEmail=document.querySelector('.navbar-email')
const desktopMenu=document.querySelector('.desktop-menu')
const menuMobile=document.querySelector('.mobile-menu')
const menuCarritoIcon=document.querySelector('.navbar-shopping-cart')
const shoppingCartContainer=document.querySelector('#shoppingCartContainer')
const menuBurgerIco=document.querySelector('.menu-burgerIco')
const cardsContainer=document.querySelector('.cards-container')
const productDetail=document.querySelector('#productDetail')
const productDetailCloseIcon=document.querySelector('.product-detail-close')

menuEmail.addEventListener('click',toggleDesktopMenu)
menuBurgerIco.addEventListener('click',toggleMobileMenu)
menuCarritoIcon.addEventListener('click',toggleCarritoIcon)
productDetailCloseIcon.addEventListener('click',closeProductDetailAside)

function toggleCarritoIcon() {
  shoppingCartContainer.classList.toggle('inactive')
   desktopMenu.classList.add('inactive')
   menuMobile.classList.add('inactive')
     productDetail.classList.add('inactive')
}


function toggleDesktopMenu() {
 desktopMenu.classList.toggle('inactive')
shoppingCartContainer.classList.add('inactive')
  productDetail.classList.add('inactive')
}
function toggleMobileMenu() {
 menuMobile.classList.toggle('inactive')
   shoppingCartContainer.classList.add('inactive')
       productDetail.classList.add('inactive')
}

const productList=[]
productList.push({
  name:"Bike",
  price:100,
  image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=94"
})
productList.push({
  name:"Laptop",
  price:7000,
  image:"https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=600"
})
productList.push({
  name:"Zapato Deportivo",
  price:40,
  image:"https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=600"
})
productList.push({
  name:"Zapato casual",
  price:120,
  image:"https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
})
productList.push({
  name:"Zapato Mujer",
  price:120,
  image:"https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
})
productList.push({
  name:"Zapato deportivo 2",
  price:120,
  image:"https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
})

function openProductDetailAside() {
  productDetail.classList.remove('inactive')
     desktopMenu.classList.add('inactive')
   menuMobile.classList.add('inactive')
  shoppingCartContainer.classList.add('inactive')
  
}

function closeProductDetailAside() {
    productDetail.classList.add('inactive')
  
}


function rederProducts(arr) {
  for(product of arr){
 const productCard= document.createElement('div')
  productCard.classList.add('product-card')

  const productImg=document.createElement('img')
     
  productImg.setAttribute('src',product.image)
    productImg.addEventListener('click',openProductDetailAside)

  const productInfo= document.createElement('div')
    productInfo.classList.add('product-info')
  
  const productInfoDiv= document.createElement('div')


  
  const productPrice= document.createElement('p')
  productPrice.innerText="$"+product.price

    const productName= document.createElement('p')
  productName.innerText=product.name
  productInfoDiv.appendChild(productPrice)
  productInfoDiv.appendChild(productName)

  
  const productInfoFigure= document.createElement('figure')
  const productImgCart= document.createElement('img')
  productImgCart.setAttribute('src','assets/icons/bt_add_to_cart.svg')
 
    
  
  productInfoFigure.appendChild(productImgCart)
  productInfo.appendChild(productInfoDiv)
  productInfo.appendChild(productInfoFigure)

productCard.appendChild(productImg)
  productCard.appendChild(productInfo)
  cardsContainer.appendChild(productCard)
}
}

rederProducts(productList)