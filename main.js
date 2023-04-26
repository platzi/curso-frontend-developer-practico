const menuEmail = document.querySelector(`.navbar-email`)
const desktopMenu = document.querySelector(`.desktop-menu`)
const menuCarritoIcon = document.querySelector(`.navbar-shopping-cart`)
const menuHamIcon = document.querySelector(`.menu`)
const mobileMenu = document.querySelector(`.mobile-menu`)
const shoppinCartContainer = document.querySelector(`#shoppinCartContainer`)
const productDetailContainer = document.querySelector(`#productDetail`)
const productDetailCloseIcon = document.querySelector(`.product-detail-close`)
const cardsContainer = document.querySelector(`.cards-container`)
menuEmail.addEventListener(`click`, toggleDesktopMenu)
menuHamIcon.addEventListener(`click`, toggleMobileMenu)
menuCarritoIcon.addEventListener(`click`, toggleCarritoshoppinCartContainer)
productDetailCloseIcon.addEventListener(`click`, closeProductDetailAside)

function toggleDesktopMenu() {
    const isShoppinCartContainerClosed = shoppinCartContainer.classList.contains(`inactive`);
    if (!isShoppinCartContainerClosed) {
        shoppinCartContainer.classList.add(`inactive`);
    }
    desktopMenu.classList.toggle(`inactive`)
    
}

function toggleMobileMenu () {
    const isShoppinCartContainerClosed = shoppinCartContainer.classList.contains(`inactive`);

    if (!isShoppinCartContainerClosed) {
        shoppinCartContainer.classList.add(`inactive`);
    }
    closeProductDetailAside()
    
    mobileMenu.classList.toggle(`inactive`) 
}

function toggleCarritoshoppinCartContainer() {
    const isMobileMenuClosed = mobileMenu.classList.contains(`inactive`);
    const isDesktopMenuClosed = desktopMenu.classList.contains(`inactive`);
    
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add(`inactive`);
    }
    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add(`inactive`);
    }
    const isProductDetailClosed = productDetailContainer.classList.contains(`inactive`);
    if (!isProductDetailClosed) {
        productDetailContainer.classList.add(`inactive`);
    }
    shoppinCartContainer.classList.toggle(`inactive`)
}

function openProductDetailAside() {
    shoppinCartContainer.classList.add(`inactive`)
    productDetailContainer.classList.remove(`inactive`)
}

function closeProductDetailAside() {
    productDetailContainer.classList.add(`inactive`)
}

const productList = [];
productList.push({
    name: `Bike`,
    price: 120,
    image: `https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`
})

productList.push({
    name: `Pantalla`,
    price: 220,
    image: `https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`
})

productList.push({
    name: `Tv`,
    price: 650,
    image: `https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`
})

function renderProducts(arr) {
    for(product of arr) {
        const productCard = document.createElement(`div`);
        productCard.classList.add(`product-card`);
    
        const productCardImage = document.createElement(`img`);
        productCardImage.setAttribute(`src`, product.image);
        productCardImage.addEventListener(`click`, openProductDetailAside)
    
        const productCardInfo = document.createElement(`div`);
        productCardInfo.classList.add(`product-info`);
    
        const productCardDiv = document.createElement(`div`)
    
        const productCardPrice = document.createElement(`p`);
        productCardPrice.innerText = `$` + product.price;
    
        const productCardName = document.createElement(`p`);
        productCardName.innerText = product.name;
    
        productCardDiv.appendChild(productCardPrice);
        productCardDiv.appendChild(productCardName);
    
        const productFigure = document.createElement(`figure`);
        const productCardFigure = document.createElement(`img`);
        productCardFigure.setAttribute(`src`, `./icons/bt_add_to_cart.svg`);
    
        productFigure.appendChild(productCardFigure);
    
        productCardInfo.appendChild(productCardDiv);
        productCardInfo.appendChild(productFigure);
    
        productCard.appendChild(productCardImage);
        productCard.appendChild(productCardInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);


