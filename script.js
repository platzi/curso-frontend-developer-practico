const userEmail  = document.querySelector(`.navbar-email`)
const userMenu = document.querySelector(`.desktop-menu`)
const iconCarritoCompras = document.querySelector('.navbar-shopping-cart')

let productCard = []

// VARIABLE PARA ASIDE PRODUCT DETAIL
const productDetail = document.querySelector('#productDetail')

// VARIABLE PARA EL BOTON X QUE CIERRA EL PRODUCT DETAIL
const buttonCloseProductDetail = document.querySelector('#closeProductDetail')

const burgerMenu = document.querySelector(`.menu`)
const mobileMenu = document.querySelector(`.mobile-menu`)
const carritoCompras = document.querySelector('#shoppingCartContainer')


userEmail.addEventListener('click', toggleDesktopMenu)
burgerMenu.addEventListener('click', toggleBurguerMenu)
iconCarritoCompras.addEventListener('click', toggleCarritoCompras)

function toggleDesktopMenu(){
    const isCarritoClosed = carritoCompras.classList.contains('inactive')
       
    if(!isCarritoClosed){
        carritoCompras.classList.add('inactive')
    }
    
    userMenu.classList.toggle('inactive')
}

function toggleBurguerMenu(){
    const isCarritoClosed = carritoCompras.classList.contains('inactive')
       
    if(!isCarritoClosed){
        carritoCompras.classList.add('inactive')
    }
    mobileMenu.classList.toggle('inactive')
}

function toggleCarritoCompras(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive')
    const isDesktopMenuClosed = userMenu.classList.contains('inactive')
       
    if(!isMobileMenuClosed || !isDesktopMenuClosed ){
        mobileMenu.classList.add('inactive')
        userMenu.classList.add('inactive')
    }
    carritoCompras.classList.toggle('inactive')
}


const productContainer = document.querySelector('.cards-container')
const productsList = []


productsList.push(
    {
        name: 'Bike',
        price: 128,
        image:'https://images.pexels.com/photos/5976796/pexels-photo-5976796.jpeg'
    }
)
productsList.push(
    {
        name: 'Digital Camera',
        price: 1500,
        image:'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
)
productsList.push(
    {
        name: 'Brush Kit',
        price: 50,
        image:'https://images.pexels.com/photos/6634680/pexels-photo-6634680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
)
productsList.push(
    {
        name: 'Bathroom Accesories',
        price: 75,
        image:'https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
)
productsList.push(
    {
        name: 'Iphone 14',
        price: 2000,
        image:'https://images.pexels.com/photos/6446250/pexels-photo-6446250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
)
productsList.push(
    {
        name: 'Retro Nintendo 3DS',
        price: 120,
        image:'https://images.pexels.com/photos/1367036/pexels-photo-1367036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
)

productsList.forEach((product) => {
    productCardContainer = `
        <div id="productCard" class="product-card">
        <img src="${product.image}" alt="${product.name}" class="product-img">
        <div class="product-info">
            <div>
                <p>${product.price}</p>
                <p>${product.name}</p>
            </div>
            <figure>
                <img src="./icons/bt_add_to_cart.svg" alt="">
            </figure>
        </div>    
        </div>
    `   
    productContainer.innerHTML += productCardContainer

    // VARIABLE PARA LAS TARJETAS DE LOS PRODUCTOS
    productCard = document.querySelectorAll('#productCard')


    }
)

productCard.forEach((card =>{
    card.addEventListener('click', openProductDetail)
})
)

buttonCloseProductDetail.addEventListener('click', closeProductDetail)



function closeProductDetail(){
    productDetail.classList.add('inactive')
}

function openProductDetail(){
    carritoCompras.classList.add('inactive')
    mobileMenu.classList.add('inactive')
    userMenu.classList.add('inactive')

    productDetail.classList.remove('inactive')
}

        