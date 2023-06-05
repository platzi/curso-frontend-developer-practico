const desktopMenu = document.querySelector('.desktop-menu')
const mobileMenu = document.querySelector('.mobile-menu')
const shoppingCartItems = document.querySelector('.checkout-container')
const cardsContainer = document.querySelector('.cards-container')
const asideDetailContainer = document.querySelector('.product-detail-container')
// Parent containers classes from HTML ↑↑↑

// Variables used for DOM manipulating ↓↓↓
let showItemsAndDetails, productDetailsList, productDetailContainer

class Products {
    constructor(name, price, image, altText) {
        this.name = name
        this.price = price
        this.image = image
        this.altText = altText
    }
}

// Variable is used for storing the class Products objects
const productsOnSale = [
    { pioneerDj: new Products('Pioneer Dj deck', 500, 'https://images.pexels.com/photos/164745/pexels-photo-164745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'This is a dj deck') },
    { ducatiMotors: new Products('Ducati 1600', 30000, 'https://images.pexels.com/photos/15019065/pexels-photo-15019065/free-photo-of-moto-motocicleta-estacionamiento-ducati.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'This is a ducati motorcycle') },
    { lesPaulGuitar: new Products('Gibson Les Paul Classic Guitar', 2000, 'https://images.pexels.com/photos/7334396/pexels-photo-7334396.jpeg?auto=compress&cs=tinysrgb&w=1600', 'This is a Gibson Les Paul Guitar') },
    { smartWatch: new Products('Kaffarnaum smartwatch', 350, 'https://media.istockphoto.com/id/1380063784/es/foto/primer-plano-del-reloj-inteligente-sobre-fondo-blanco-renderizado-3d.jpg?s=612x612&w=0&k=20&c=HCJhFpUUMr74vu4UCPmjtUfGPjXJd4hCB6YnMfnJZfo=', 'This is a Kaffarnaum smartwatch') },
    { FordMustang: new Products('Ford Mustang 1967', 10000, 'https://images.pexels.com/photos/3065602/pexels-photo-3065602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'This is a Ford Mustang 1967 model') },
]

// variable used for storing objects from Class Products
const productList = []

// This function is used for pushing all products into "productList" variable
const addToTheProductList = function (arr) {
    Object.values(arr).forEach((e) => {
        Object.values(e).forEach((p) => {
            productList.push(p)
        })
    })
}

// This function shows the items in the main container
const productsInTheMainContainer = function () {
    productList.forEach((product) => {
        showItemsAndDetails = `<div class="product-card">
                                    <img src=${product.image} alt=${product.altText} class="PDetail">
                                    <div class="product-info">
                                        <div>
                                            <p>$${product.price}</p>
                                            <p>${product.name}</p>
                                        </div>
                                        <figure>
                                            <img src="./icons/bt_add_to_cart.svg" alt="add-to-cart">
                                        </figure>
                                    </div>
                                </div>`
        cardsContainer.innerHTML += showItemsAndDetails
    })

    productDetailsList = document.querySelectorAll('.PDetail')
}

// This function shows the product details
const showProductDetails = function () {
    productDetailsList.forEach((detail) => {
        detail.addEventListener("click", (c) => {
            for (let items of productList) {
                if(c.target.currentSrc === items.image) {                
                    showItemsAndDetails = `<div class="product-detail inactive">
                                                <div class="product-icon-close" onclick="closeProductDetails()">
                                                    <img src="./icons/icon_close.png" alt="close">
                                                </div>
                                        
                                                <img src=${items.image} alt="Pioneer dj">
                                        
                                                <div class="product-info">
                                                    <div>
                                                        <p>$${items.price}</p>
                                                        <p>${items.name}</p>
                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt libero odio ducimus nostrum, in laboriosam nesciunt delectus fuga laborum, quae ab! Quasi nemo sed, earum nostrum impedit laborum quas unde!</p>
                                        
                                                        <button class="primary-button add-to-cart-button">
                                                            <img src="./icons/bt_add_to_cart.svg" alt="cart">
                                                            Add to cart
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>`
                    
                    asideDetailContainer.innerHTML = showItemsAndDetails
                    productDetailContainer = document.querySelector('.product-detail')
                    productDetailContainer.classList.remove('inactive')                
                }
            }
        })
    })
}

// This function is only used for closing the product details window. You can find it within "product-detail" class div tag container
const closeProductDetails = function () {
    productDetailContainer.classList.add('inactive')
}

// These functions are used to open and close the menus from <nav> tag container ↓↓↓
const displayDesktopMenu = function () {
    desktopMenu.classList.toggle('inactive')
    shoppingCartItems.classList.add('inactive')     
    productDetailContainer.classList.add('inactive')
} 

const displayMobileMenuIcon = function () {
    mobileMenu.classList.toggle('inactive')
    shoppingCartItems.classList.add('inactive')
    productDetailContainer.classList.add('inactive')
}

const displayShoppingCart = function () {
    shoppingCartItems.classList.toggle('inactive') 
    mobileMenu.classList.add('inactive')
    desktopMenu.classList.add('inactive')
    productDetailContainer.classList.add('inactive')
}

addToTheProductList(productsOnSale)
productsInTheMainContainer()
showProductDetails()

// Pending for commiting