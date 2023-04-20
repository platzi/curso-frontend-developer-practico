const email= document.querySelector('.navbar-email')
const desktop= document.querySelector('.desktop-menu')
const hamb = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const shcar = document.querySelector('.navbar-shopping-cart')
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const cardsContainer = document.querySelector('.cards-container')
const openProductDetail = document.querySelector('#product-detail')
const closeButton = document.querySelector('#closeButton')

email.addEventListener('click', toggleFunction)

function toggleFunction(){
    const isProductDetail= shoppingCartContainer.classList.contains('inactive')
    const isDescription= openProductDetail.classList.contains('inactive')
    desktop.classList.toggle('inactive')
    if(!isProductDetail){
        shoppingCartContainer.classList.toggle('inactive')
    }
    if(!isDescription){
        openProductDetail.classList.toggle('inactive')
    }
}

hamb.addEventListener('click', toggleHam)

function toggleHam(){
    const isSh = shoppingCartContainer.classList.contains('inactive')
    const isDescription= openProductDetail.classList.contains('inactive')
    mobileMenu.classList.toggle('inactive')

    if(!isSh){
        shoppingCartContainer.classList.toggle('inactive')
    }
    if(!isDescription){
        openProductDetail.classList.toggle('inactive')
    }
}

shcar.addEventListener('click',toggleShcar)

function toggleShcar(){
    const isMobileMenu = mobileMenu.classList.contains('inactive')
    const isDescription= openProductDetail.classList.contains('inactive')
    shoppingCartContainer.classList.toggle('inactive')
    const isDesktop = desktop.classList.contains('inactive')
    if(!isDescription){
        openProductDetail.classList.toggle('inactive')
        
    }
    console.log("hola1")
    if(!isDesktop){
        desktop.classList.toggle('inactive')
    }
    console.log("hola2")
    console.log("hola3")
    if(!isMobileMenu){
        mobileMenu.classList.toggle('inactive')
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



    function renderProducts(array){
        for (product of productList){
            const productCard = document.createElement('div')
            productCard.classList.add('product-card')
        
            const productImg = document.createElement('img')
            productImg.setAttribute('src', product.image)
            productImg.addEventListener('click', openDescription)
        
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
}

renderProducts(productList);

closeButton.addEventListener('click', openDescription)

function openDescription(){
    const isDesktop = desktop.classList.contains('inactive')
    const isSh = shoppingCartContainer.classList.contains('inactive')
    const isMobileMenu = mobileMenu.classList.contains('inactive')
    openProductDetail.classList.toggle('inactive');
    if(!isDesktop){
        desktop.classList.toggle('inactive')
    }
    if (!isSh){
        shoppingCartContainer.classList.toggle('inactive')
    }
    if(!isMobileMenu){
        mobileMenu.classList.toggle('inactive')
    }
}
