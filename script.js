const navEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const mobileMenuIcon = document.querySelector('.navbar-menu-icon')
const mobileMenu = document.querySelector('.mobile-menu')
const navbarCart = document.querySelector('.navbar-cart')
const shoppingCartItems = document.querySelector('.checkout-container')
const cardsContainer = document.querySelector('.cards-container')

const productList = []

class Products {
    constructor(name, price, image, altText) {
        this.name = name
        this.price = price
        this.image = image
        this.altText = altText
    }
}

let pioneerDj = new Products('Pioneer Dj deck', 500, 'https://images.pexels.com/photos/164745/pexels-photo-164745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'This is a dj deck')
let ducatiMotors = new Products('Ducati 1600', 30000, 'https://images.pexels.com/photos/15019065/pexels-photo-15019065/free-photo-of-moto-motocicleta-estacionamiento-ducati.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'This is a ducati motorcycle')
let lesPaulGuitar = new Products('Gibson Les Paul Classic Guitar', 2000, 'https://images.pexels.com/photos/7334396/pexels-photo-7334396.jpeg?auto=compress&cs=tinysrgb&w=1600', 'This is a Gibson Les Paul Guitar')

productList.push(pioneerDj, ducatiMotors, lesPaulGuitar)

itemsListContainer()

function itemsListContainer() {
    let showItems
    productList.forEach((e) => {
        showItems = `<div class="product-card">
                        <img src=${e.image} alt=${e.altText}>
                        <div class="product-info">
                            <div>
                            <p>$${e.price}</p>
                            <p>${e.name}</p>
                            </div>
                            <figure>
                                <img src="./icons/bt_add_to_cart.svg" alt="add-to-cart">
                            </figure>
                        </div>
                    </div>`
        cardsContainer.innerHTML += showItems
    })
}

function displayDesktopMenu() {
    const isDesktopMenuOpened = desktopMenu.classList.contains('inactive')
    
    !isDesktopMenuOpened ? desktopMenu.classList.add('inactive') : desktopMenu.classList.toggle('inactive')  
} 

function displayShoppingCart() {
    const isShoppingCartOpened = shoppingCartItems.classList.contains('inactive')

    !isShoppingCartOpened ? shoppingCartItems.classList.add('inactive') : shoppingCartItems.classList.toggle('inactive') 
}

function displayMobileMenuIcon() {
    const isMobileMenuOpened = mobileMenu.classList.contains('inactive')

    !isMobileMenuOpened ? mobileMenu.classList.add('inactive') : mobileMenu.classList.toggle('inactive') 
}
