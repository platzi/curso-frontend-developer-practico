const menuEmail = document.querySelector('.navbar-email')
const menuHamburger = document.querySelector('.menu')
const menuCartIcon = document.querySelector('.navbar-shopping-cart')
const desktopMenu = document.querySelector('.desktop-menu')
const mobileMenu = document.querySelector('.mobile-menu')
const aside = document.querySelector('.product-detail')
const cardContainer = document.querySelector('.cards-container') 
const productDetail = document.querySelector('.product-detail-secondary')



menuEmail.addEventListener('click', toggleDesktopMenu) 
menuHamburger.addEventListener('click', toggleMobileMenu)
menuCartIcon.addEventListener('click', toggleAside) 

    function toggleDesktopMenu() {
        desktopMenu.classList.toggle('inactive')
        productDetail.classList.add('inactive')
        aside.classList.add('inactive')
    }

//Abrir y cerrar el carrito 
    function toggleMobileMenu() {
        mobileMenu.classList.toggle('inactive')
        desktopMenu.classList.add('inactive')
        aside.classList.add('inactive')
        productDetail.classList.add('inactive')
    }  

//Abrir y cerrar el aside 
    function toggleAside() {
         aside.classList.toggle('inactive')
         desktopMenu.classList.add('inactive')
         mobileMenu.classList.add('inactive')
         productDetail.classList.add('inactive')
        }


const productList = []

productList.push( {
    image: 'https://img.freepik.com/premium-photo/3d-render-concept-single-push-scooter-children-3d-art-design-illustration_460848-5606.jpg?w=740',
    name: 'Scooter',
    price: 180,
    icon: './icons/bt_add_to_cart.svg',
    description: 'A nice scooter for kids to enjoy outdoors',
})
productList.push( {
    image: 'https://img.freepik.com/free-photo/view-electronic-product-balancing-podium_23-2150141323.jpg?t=st=1714431289~exp=1714434889~hmac=05aec79b8d12b26eb8643d2d28b3de02c65a67bfe86aedf530061ea52bfa1159&w=740',
    name: 'Camara',
    price: 150,
    icon: './icons/bt_add_to_cart.svg',
    description: 'A high-quality camera for your photography needs',

})
productList.push( {
    image: 'https://img.freepik.com/free-photo/levitating-music-headphones-display_23-2149817602.jpg?t=st=1714431207~exp=1714434807~hmac=4767bf962cb433e3c6e083101fbada9c77d163fabe692be5fce65d4acbca69f4&w=740',
    name: 'Audifonos',
    price: 20,
    icon: './icons/bt_add_to_cart.svg',
    description: 'Lightweight headphones with great sound quality',
})
productList.push( {
    image: 'https://img.freepik.com/free-vector/realistic-virtual-reality-headset_52683-52870.jpg?t=st=1714431719~exp=1714435319~hmac=c309a73684d1960beeab08c0184388e69d4d034682125a9ddadf687724e14f2d&w=826',
    name: 'Lentes VR',
    price: 300,
    icon: './icons/bt_add_to_cart.svg',
    description: 'Experience virtual reality with these VR glasses',
})


function showProducts() {
    productList.forEach((product) => {
    const productCard = document.createElement('div')
    productCard.classList.add('product-card')
    

    const productImg = document.createElement('img')
    productImg.setAttribute('src', product.image)
   
    const productInfo = document.createElement('div')
    productInfo.classList.add('product-info')

    const productInfoDiv = document.createElement('div')

    const productPrice = document.createElement('p')
    productPrice.classList.add('product-Price')
    productPrice.innerText = '$' + product.price

    const productName = document.createElement('p')
    productName.classList.add('product-Name')
    productName.innerText = product.name

    productInfoDiv.appendChild(productName)
    productInfoDiv.appendChild(productPrice)

    const productInfoFigure = document.createElement('figure')

    const productImgCart= document.createElement('img')
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')
    productImgCart.classList.add('add-to-cart-button')
    productImgCart.style.cursor = 'pointer'

    productInfoFigure.appendChild(productImgCart)

    productInfo.appendChild(productInfoDiv)
    productInfo.appendChild(productInfoFigure)

    productCard.appendChild(productImg)
    productCard.appendChild(productInfo)
   
    productImg.addEventListener('click', () => {
        showProductDetails(product);
        aside.classList.add('inactive')
         mobileMenu.classList.add('inactive')
         desktopMenu.classList.add('inactive')
    });
    productImgCart.addEventListener('click', () => {
        addToCart()
        
    })
    cardContainer.appendChild(productCard)
});
}

function showProductDetails(product) {
// Limpia el contenido existente del product-detail-secondary
productDetail.innerHTML = ''

// Abre el aside
productDetail.classList.remove('inactive')

// Crea el contenido para mostrar el detalle del producto
const productDetailImg = document.createElement('img')
productDetailImg.setAttribute('src', product.image);

const productInfoDetail = document.createElement('div')
productInfoDetail.classList.add('product-info')
productInfoDetail.style.display = 'flex'
productInfoDetail.style.flexDirection ='column'
productInfoDetail.style.alignItems = 'left'

const productDetailName = document.createElement('p')
productDetailName.innerText = product.name;

const productDetailPrice = document.createElement('p')
productDetailPrice.innerText = `$${product.price}`;
productDetailPrice.classList.add('productDetail-price')
productDetailPrice.style.color = '#000000'
productDetailPrice.style.fontSize = '20px'



const productDetailDescription = document.createElement('p')
productDetailDescription.innerText = product.description
const closeButton = document.createElement('div')
closeButton.classList.add('product-detail-close')

const closeButtonImg = document.createElement('img')
closeButtonImg.setAttribute('src', './icons/icon_close.png')

const addCartButton = document.createElement('button')
addCartButton.classList.add('.primary-button')
addCartButton.style.border = 'none'
addCartButton.style.background = 'none'
addCartButton.style.cursor = 'pointer'

const addCartImg = document.createElement('img')
addCartImg.setAttribute('src', './icons/bt_add_to_cart.svg')
addCartImg.classList.add('add-to-cart-button')

 addCartButton.appendChild(addCartImg)

closeButton.appendChild(closeButtonImg);
closeButton.addEventListener('click', () => {
    productDetail.classList.add('inactive')
});
productInfoDetail.appendChild(productDetailName)
productInfoDetail.appendChild(productDetailDescription)
productInfoDetail.appendChild(productDetailPrice)


productInfoDetail.appendChild(addCartButton)
productDetail.appendChild(closeButton);

productDetail.appendChild(productDetailImg);

productDetail.appendChild(productInfoDetail)
   
}
showProducts()