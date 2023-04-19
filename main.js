const email= document.querySelector('.navbar-email')
const desktop= document.querySelector('.desktop-menu')
const hamb = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const shcar = document.querySelector('.navbar-shopping-cart')
const productDetail = document.querySelector('.product-detail')
const cardsContainer = document.querySelector('.cards-container')

email.addEventListener('click', toggleFunction)

function toggleFunction(){
    const isProductDetail= productDetail.classList.contains('inactive')
    desktop.classList.toggle('inactive')
    if(!isProductDetail){
        productDetail.classList.toggle('inactive')
    }
}

hamb.addEventListener('click', toggleHam)

function toggleHam(){
    
    mobileMenu.classList.toggle('inactive')
}

shcar.addEventListener('click',toggleShcar)

function toggleShcar(){
    productDetail.classList.toggle('inactive')
    const isDesktopOpen = desktop.classList.contains('inactive')
    if(!isDesktopOpen){
        desktop.classList.toggle('inactive')
    }
    if(isProductDetail){
        desktop.classList.toggle('inactive')
    }
}

const productList = [];
productList.push({
    name: 'bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'wheels',
    price: 20,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'dirt-bike',
    price: 200,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
/* <div class="product-card">
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
        </div>*/ 

for (product of productList){
    const productCard = document.createElement('div')
    productCard.classList.add('product-card')

    const productImg = document.createElement('img')
    productImg.setAttribute('src', product.image)

    const productContainer = document.createElement('div')
    productContainer.classList.add('product-info')

    const productInfo = document.createElement('div')

    const productPrice = document.createElement('p')
    productPrice.innerText = '$' + product.price 

    const productName = document.createElement('p')
    productName.innerHTML = product.name

    const productFigure = document.createElement('figure')
    const figureImg = document.createElement('img')
    figureImg.setAttribute('src','./icons/bt_add_to_cart.svg')

    productFigure.appendChild(figureImg)

    productInfo.appendChild(productPrice)
    productInfo.appendChild(productName)

    productContainer.appendChild(productInfo)
    productContainer.appendChild(productFigure)

    productCard.appendChild(productImg)
    productCard.appendChild(productContainer)

    cardsContainer.appendChild(productCard)
}