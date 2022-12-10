const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const navbarMobileMenu = document.querySelector('.mobile-menu');
const navbarMobileMenuIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const menuCarrito = document.querySelector('.product-detail');
const cardscontainers = document.querySelector('.cards-container');

navbarMobileMenuIcon.addEventListener('click', toggleMobileMenu);
navbarEmail.addEventListener('click', toggleDesktopMenu);
menuCarritoIcon.addEventListener('click', toggleCarrito);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    if (desktopMenu.classList.contains('inactive')) {
        navbarEmail.innerText = 'Open';
    } else {
        navbarEmail.innerText = 'Close';
    }
    const isMenuCarritoClosed = menuCarrito.classList.contains('inactive');
    if (!isMenuCarritoClosed) {
        menuCarrito.classList.add('inactive');
    }
}

function toggleMobileMenu() {
    const isMenuCarritoClosed = menuCarrito.classList.contains('inactive');
    if (!isMenuCarritoClosed) {
        menuCarrito.classList.add('inactive');
    }
    navbarMobileMenu.classList.toggle('inactive');
}

function toggleCarrito() {
    const isNavbarMobileMenuClosed = navbarMobileMenu.classList.contains('inactive');
    if (!isNavbarMobileMenuClosed) {
        navbarMobileMenu.classList.add('inactive');
    }   
    menuCarrito.classList.toggle('inactive');
    
    
}

const productList = []
productList.push({
    name: 'bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'pantalla',
    price: 1200,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'pc',
    price: 12000,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})


function renderProducts(array){
    for (product of array){
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')
        const img = document.createElement('img')
        img.setAttribute('src', product.image)
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')
        const div = document.createElement('div')
        const price = document.createElement('p')
        price.innerText = '$' + product.price
        const name = document.createElement('p')
        name.innerText = product.name
        div.append(price, name)
        const figure = document.createElement('figure')
        const img2 = document.createElement('img')
        img2.setAttribute('src', './icons/bt_add_to_cart.svg')
    
        figure.appendChild(img2)
        productInfo.append(div, figure)
        productCard.append(img, productInfo)
    
        cardscontainers.appendChild(productCard)
    }
}

renderProducts(productList)

