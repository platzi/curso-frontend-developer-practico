const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const menuTitle = document.querySelector('.title-img');
const productDetail = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toogleDesktopMenu);
menuHamIcon.addEventListener('click', toogleMobileMenu);
menuTitle.addEventListener('click', toggleMenuTitle)

const cardsContainer = document.querySelector('.cards-container');

function toogleDesktopMenu() {
    const isProductDetailClosed = productDetail.classList.contains('inactive');

    if (!isProductDetailClosed) {
        productDetail.classList.add('inactive');
    }

    desktopMenu.classList.toggle("inactive");
}

function toogleMobileMenu() {

    const isProductDetailClosed = productDetail.classList.contains('inactive');


    if (!isProductDetailClosed) {
        productDetail.classList.add('inactive');
    }


    mobileMenu.classList.toggle("inactive");
}

function toggleMenuTitle() {
    //aca quiero ver que no este abiertos los dos menus al mismo tiempo, por eso cuanto abro uno me fijo si el otro esta cerrado
    const ismobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if (!ismobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }

    productDetail.classList.toggle("inactive");
}

const productList = [];
productList.push({
    name: 'bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Screen',
    price: 320,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Computer',
    price: 720,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Computer',
    price: 720,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Computer',
    price: 720,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});


function renderProducts(arr) {
    for (product of productList) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const imageCard = document.createElement('img');
        imageCard.setAttribute('src', product.image);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');
        const productInfoDivPrice = document.createElement('p');
        const productInfoDivName = document.createElement('p');

        productInfoDivPrice.innerText = `$ ${product.price}`;
        productInfoDivName.innerText = product.name;

        productInfoDiv.appendChild(productInfoDivPrice);
        productInfoDiv.appendChild(productInfoDivName);

        const productInfoFigure = document.createElement('figure');

        const imgFigure = document.createElement('img');
        imgFigure.setAttribute('src', './icons/bt_add_to_cart.svg');

        productInfoFigure.appendChild(imgFigure);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productInfo);
        productCard.appendChild(imageCard);

        cardsContainer.appendChild(productCard);

    }
}

renderProducts(productList);

