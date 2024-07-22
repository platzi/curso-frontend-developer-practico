const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const shoppingCartIcon = document.querySelector(".navbar-shopping-cart");
const productDetailCloseIcon = document.querySelector('.product-detail-close')
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleDesktopMenu)
menuHamIcon.addEventListener('click', toggleMobileMenu)
shoppingCartIcon.addEventListener('click', toggleShoppingCartAside)
productDetailCloseIcon.addEventListener('click', closeProductDetailAside)

function toggleDesktopMenu() {

    const isAsideOpen = !shoppingCartContainer.classList.contains('inactive')
    const isProductDetailOpen = !productDetailContainer.classList.contains('inactive')

    if (isAsideOpen) {
        shoppingCartContainer.classList.add('inactive')
    } else if (isProductDetailOpen) {
        productDetailContainer.classList.add('inactive')
    }

    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu() {
    const isAsideOpen = !shoppingCartContainer.classList.contains('inactive')
    const isProductDetailOpen = !productDetailContainer.classList.contains('inactive')

    if (isProductDetailOpen) {
        productDetailContainer.classList.add('inactive')
    } else if (isAsideOpen) {
        shoppingCartContainer.classList.add('inactive')

    }

    mobileMenu.classList.toggle('inactive')

}

function toggleShoppingCartAside() {
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive')
    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive')
    const isProductDetailOpen = !productDetailContainer.classList.contains('inactive')

    if (isProductDetailOpen) {
        productDetailContainer.classList.add('inactive')
    } else if (isMobileMenuOpen) {
        mobileMenu.classList.add('inactive')

    } else if (isDesktopMenuOpen) {
        desktopMenu.classList.add('inactive')
    }

    shoppingCartContainer.classList.toggle('inactive')

}

function openProductDetailAside() {
    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive')
    const isAsideOpen = !shoppingCartContainer.classList.contains('inactive')

    if (isAsideOpen) {
        shoppingCartContainer.classList.add('inactive')

    } else if (isDesktopMenuOpen) {
        desktopMenu.classList.add('inactive')
    }
    productDetailContainer.classList.remove('inactive')

}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive')


}
const productArray = [];
productArray.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productArray.push({
    name: 'Screen',
    price: 220,
    image: 'https://images.pexels.com/photos/6476808/pexels-photo-6476808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})
productArray.push({
    name: 'Computer',
    price: 620,
    image: 'https://images.pexels.com/photos/461064/pexels-photo-461064.jpeg?auto=compress&cs=tinysrgb&w=600'
})


function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')

        const productImg = document.createElement('img')
        productImg.setAttribute('src', product.image)
        productImg.addEventListener('click', openProductDetailAside)

        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')

        const productInfoDiv = document.createElement('div')


        const productPrice = document.createElement('p')
        productPrice.innerText = '$' + product.price;

        const productName = document.createElement('p')
        productName.innerText = product.name;

        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productName)

        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

        productInfoFigure.appendChild(productImgCart);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard)

    }

}

renderProducts(productArray)

