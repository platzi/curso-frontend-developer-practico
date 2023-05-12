const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')
const mobileMenuIconButton = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const cardsContainer = document.querySelector('.cards-container')

console.log('prueba')

menuEmail.addEventListener('click', toggleDesktopMenu)
mobileMenuIconButton.addEventListener('click', toggleMobileMenu)
menuCarritoIcon.addEventListener('click', toggleCarritoAside)

function toggleDesktopMenu() {

    const isAsideclosed = aside.classList.contains('inactive');

    if (!isAsideclosed) {
        aside.classList.add('inactive')
        // si el mobileMenu esta open, hay que cerrarlo
    }

 desktopMenu.classList.toggle('inactive')
 console.log('click');
}

function toggleMobileMenu() {

    const isAsideclosed = aside.classList.contains('inactive');

    if (!isAsideclosed) {
        aside.classList.add('inactive')
        // si el mobileMenu esta open, hay que cerrarlo
    }

    mobileMenu.classList.toggle('inactive')
    console.log('click');
}

function toggleCarritoAside() {
    
    const isMobileMenuclosed = mobileMenu.classList.contains('inactive');

   aside.classList.add('inactive')
        if (!isMobileMenuclosed) {
            mobileMenu.classList.add('inactive')
        // si el mobileMenu esta open, hay que cerrarlo
        }

    aside.classList.toggle('inactive')

}


const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

productList.push({
    name: 'Pantalla',
    price: 200,
    image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})

productList.push({
    name: 'Computadora',
    price: 500,
    image: 'https://images.pexels.com/photos/6804098/pexels-photo-6804098.jpeg?auto=compress&cs=tinysrgb&w=300',
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
for (product of productList) {
    const productCard = document.createElement('div')
    productCard.classList.add('product-card')

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image)
    // Product = {name, price, image} -> producto.image

    const productInfo = document.createElement('div')
    productInfo.classList.add('product-info')

    const productInfoDiv = document.createElement('div')

    const productPrice = document.createElement('p')
    productPrice.innerText = '$ ' + product.price
    const productName = document.createElement('p')
    productName.innerText = product.name

    productInfoDiv.appendChild(productPrice)
    productInfoDiv.appendChild(productName)

    const productInfofigure = document.createElement('figure')
    const productImgCart = document.createElement('figure')
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')

    productInfofigure.appendChild(productImgCart)

    productInfo.appendChild(productInfoDiv)
    productInfo.appendChild(productInfofigure)

    productCard.appendChild(productImg)
    productCard.appendChild(productInfo)

    cardsContainer.appendChild(productCard)
}