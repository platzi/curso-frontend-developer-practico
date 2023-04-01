const menuEmail = document.querySelector(".navbar-email");
const menuHamIcon = document.querySelector(".menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const productDetailCloseIcon = document.querySelector(".product-detail-close");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const productDetailContainer = document.querySelector("#productDetail");
const cardsContainer = document.querySelector(".cards-container");


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside)
productDetailCloseIcon.addEventListener('click', closeProductDetailAside)

function toggleDesktopMenu() {
    const isAsideClose = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClose) {
        shoppingCartContainer.classList.add('inactive')
    }

    desktopMenu.classList.toggle('inactive')

}

function toggleMobileMenu() {
    const isAsideClose = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClose) {
        shoppingCartContainer.classList.add('inactive')
    }

    closeProductDetailAside();

    mobileMenu.classList.toggle('inactive')
}

function toggleCarritoAside() {
    const isDesktopMenuClose = desktopMenu.classList.contains('inactive')
    const isMobileMenuClose = mobileMenu.classList.contains('inactive');

    if (!isMobileMenuClose) {
        mobileMenu.classList.add('inactive')
    }

    if (!isDesktopMenuClose) {
        desktopMenu.classList.add('inactive')
    }

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if (!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive')
    }

    shoppingCartContainer.classList.toggle('inactive')
}

function openProductDetailAsaide() {
    shoppingCartContainer.classList.add('inactive')

    productDetailContainer.classList.remove('inactive')

    mobileMenu.classList.add('inactive')
}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive')
}

const productList = [];
productList.push({
    name: 'Bicicleta',
    price: 120000,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

productList.push({
    name: 'Cuadros',
    price: 1250,
    image: "https://images.pexels.com/photos/139764/pexels-photo-139764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
})

productList.push({
    name: 'Bolso',
    price: 12500,
    image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
})

productList.push({
    name: 'bolso',
    price: 13000,
    image: "https://images.pexels.com/photos/1528975/pexels-photo-1528975.jpeg"
})

productList.push({
    name: 'Anteojos',
    price: 9000,
    image: "https://images.pexels.com/photos/7923929/pexels-photo-7923929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
})

productList.push({
    name: 'Lampara',
    price: 6000,
    image: "https://images.pexels.com/photos/6862111/pexels-photo-6862111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
})

function renderProduct(productList) {
    for (product of productList) {
        const productCard = document.createElement('div')
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAsaide)

        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div')


        const productPrice = document.createElement('p')
        productPrice.innerText = '$' + product.price;

        const productName = document.createElement('p')
        productName.innerText = product.name;

        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productName)

        const productInfoFigure = document.createElement('figure')
        const productImgCard = document.createElement('img')
        productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg')

        productInfoFigure.appendChild(productImgCard);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);
    }
}
renderProduct(productList)