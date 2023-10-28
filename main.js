const navEmail = document.querySelector('.navbar-email'); //component with class '.navbar-email' 
const desktopMenu = document.querySelector('.desktop-menu'); //component with class '.desktop-menu'
const menuHamIcon = document.querySelector('.menu'); //component with class '.menu'
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart'); //component with class '.navbar-shopping-cart'
const productDetailCloseIcon = document.querySelector('.product-detail-close'); //component with class '.product-detail-close'
const mobileMenu = document.querySelector('.mobile-menu'); //component with class '.mobile-menu'
const cardContainer = document.querySelector('.cards-container'); //component with class '.cards-container'
const shoppingCardContainer = document.querySelector('#shopping-cart-container'); //component with id '#shopping-cart-container'
const productDetailContainer = document.querySelector('#product-detail'); //component with id '#product-detail'
const productList = []; //array with products as object

// Adding products to productList
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Computador',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

// Adding event listeners to components
navEmail.addEventListener('click', toggleDesktopMenu); // navEmail event 'click' to function toggleDesktopMenu
menuHamIcon.addEventListener('click', toggleMobileMenu); // menuHamIcon event 'click' to function toggleMobileMenu
menuCarritoIcon.addEventListener('click', toggleCarritoAside); // menuCarritoIcon event 'click' to function toggleCarritoAside
productDetailCloseIcon.addEventListener('click', closeProductDetailAside); //productDetailCloseIcon event 'click' to function closeProductDetailAside

// Adding functions to make dynamic index
function toggleDesktopMenu() { //function that validates if the container of shopping card (shoppingCardContainer) is active and toggles desktop menu
    const isShoppingCardContainerClosed = shoppingCardContainer.classList.contains('inactive');

    if (!isShoppingCardContainerClosed) {
        shoppingCardContainer.classList.add('inactive')
    }

    closeProductDetailAside()
    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu() { //function that validates if the container of shopping card (shoppingCardContainer) is active and toggles mobile menu
    const isShoppingCardContainerClosed = shoppingCardContainer.classList.contains('inactive')

    if (!isShoppingCardContainerClosed) {
        shoppingCardContainer.classList.add('inactive')
    }

    closeProductDetailAside()
    mobileMenu.classList.toggle('inactive')
}

function toggleCarritoAside() { //function that validates if the mobile and desktop menu are toggled and toggles shopping card container (shoppingCardContainer)
    const mobileMenuClosed = mobileMenu.classList.contains('inactive');
    const desktopMenuClosed = desktopMenu.classList.contains('inactive');

    if (!mobileMenuClosed) {
        mobileMenu.classList.add('inactive')
    } else if (!desktopMenuClosed) {
        desktopMenu.classList.add('inactive')
    }

    closeProductDetailAside()
    shoppingCardContainer.classList.toggle('inactive')
}

function openProductDetailAside() {
    shoppingCardContainer.classList.add('inactive')
    productDetailContainer.classList.remove('inactive')
}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive')
}

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div'); //parent
        const img = document.createElement('img'); // child: productCard
        const productInfo = document.createElement('div'); // child: productCard
        const productInfoDiv = document.createElement('div'); // child: productInfo --> child: productCard
        const productInfoDivName = document.createElement('p'); // child: productInfoDiv --> child: productInfo --> child: productCard
        const productInfoDivPrice = document.createElement('p'); // child: productInfoDiv --> child: productInfo --> child: productCard
        const productInfoFigure = document.createElement('figure') // child: productInfo --> child: productCard
        const iconAddCart = document.createElement('img') // child: productInfoFigure --> child: productInfo --> child: productCard
        const routeIconAddCart = './icons/bt_add_to_cart.svg'
    
        productCard.classList.add('product-card') //add class 'product-card'
        
        img.setAttribute('src', product.image) //source of the image
    
        productInfo.classList.add('product-info') //add class 'product-info'
    
        productInfoDivName.innerText = product.name //add text of the value in key 'name' in object contained in array productList
    
        productInfoDivPrice.innerText = '$' + product.price //add text of the value in key 'price' in object contained in array productList
    
        iconAddCart.setAttribute('src', routeIconAddCart) //set atribute source to get image contained in variable routeIconAddCart

        // Appending children of different components (from inside to outside)
        productInfoFigure.appendChild(iconAddCart)
        productInfoDiv.appendChild(productInfoDivName)
        productInfoDiv.appendChild(productInfoDivPrice)
        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productInfoFigure)
        productCard.appendChild(img)
        productCard.appendChild(productInfo)
        cardContainer.appendChild(productCard)

        // Adding event listeners of components
        img.addEventListener('click', openProductDetailAside) //open aside of product detail if image is clicked
    }    
}

renderProducts(productList) // render all products in productList
