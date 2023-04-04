const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuBurger = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const iconoCarritoCompras = document.querySelector(".navbar-shopping-cart");
const asideProductDetail = document.querySelector(".product-detail");
const productCardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    const IsAsideProductDetailClosed = asideProductDetail.classList.contains('inactive');

    if (!IsAsideProductDetailClosed) {
        asideProductDetail.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

menuBurger.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
    IsAsideProductDetailClosed = asideProductDetail.classList.contains('inactive');
    if (!IsAsideProductDetailClosed) {
        asideProductDetail.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}


iconoCarritoCompras.addEventListener('click', toggleAsideProductDetail);

function toggleAsideProductDetail() {

    const IsmobileMenuClosed = mobileMenu.classList.contains('inactive');
    const IsDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if (!IsDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }

    if (!IsmobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    asideProductDetail.classList.toggle('inactive');
}

function renderProducts(arrayProducts) {
    for (const product of arrayProducts) {

        const productCart = document.createElement('div');
        productCart.classList.add("product-card");

        const ProductImage = document.createElement('img');
        //ProductImage.src = product.image;
        ProductImage.setAttribute('src', product.image);

        const productInfo = document.createElement('div');
        productInfo.classList.add("product-info");

        const divData = document.createElement('div');

        const ParrafoProductPrice = document.createElement('p');
        ParrafoProductPrice.innerHTML = '$' + product.price;

        const ParrafoProductoName = document.createElement('p');
        ParrafoProductoName.innerHTML = product.name;

        const productFigure = document.createElement('figure');

        const productAddCartImg = document.createElement('img');
        productAddCartImg.setAttribute('src', './icons/bt_add_to_cart.svg');

        productFigure.appendChild(productAddCartImg);
        divData.append(ParrafoProductPrice, ParrafoProductoName);
        productInfo.append(divData, productFigure);
        productCart.append(ProductImage, productInfo);

        productCardsContainer.appendChild(productCart);
    }
}

function renderProducts2(arrayProducts) {
    for (const product of arrayProducts) {
        const html = `<div class="product-card">
                        <img src=${product.image}
                            alt="">
                            <div class="product-info">
                                <div>
                                    <p>$${product.price}</p>
                                    <p>${product.name}</p>
                                </div>
                                <figure>
                                    <img src="./icons/bt_add_to_cart.svg" alt="">
                                </figure>
                            </div>
                    </div>`;
        
        productCardsContainer.innerHTML += html;
    }
}

const productList = [];
productList.push({
    name: "Bike",
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: "Computer",
    price: 1000,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: "Keyboard",
    price: 300,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

renderProducts(productList);
