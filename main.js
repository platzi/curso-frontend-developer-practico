/* const $ = (selector) => document.querySelector(selector); */

const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')

const menuHamIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')

const menuCartIcon = document.querySelector('.navbar-shopping-cart');

/* Selecionar menuHamIcon y MenuCartIcon */

const arrowBack = document.querySelector('.arrow-back');
const cartMenu = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

const mainContentProducts = document.querySelector('.main-container')


/* const menuEmail = $('.navbar-email');
const desktopMenu = $('.desktop-menu'); */

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);

menuCartIcon.addEventListener('click', toggleCartShopping);
arrowBack.addEventListener('click', toggleCartShopping);

/* clickNavbarResponsive.addEventListener('click', toggleMainContent); */
/* NavbarResponsive.addEventListener('click', toggleMainContent); */


function toggleDesktopMenu() {
    const isCartMenu = cartMenu.classList.contains('inactive');
    
    if (!isCartMenu) {
        cartMenu.classList.add('inactive')
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isCartMenuClosed = cartMenu.classList.contains('inactive');
    const isMainMenuContentClosed = mainContentProducts.classList.contains('inactive')
    
    if (!isCartMenuClosed) {
        cartMenu.classList.add('inactive')
    }

    if (!isMainMenuContentClosed) {
        mainContentProducts.classList.add('inactive')
    } else if (isCartMenuClosed) {
        mainContentProducts.classList.toggle('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCartShopping() {
    const ismobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isMainMenuContentClosed = mainContentProducts.classList.contains('inactive')
    
    if (!ismobileMenuClosed) {
        mobileMenu.classList.add('inactive')
    }else if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive')
    }
    
    if (!isMainMenuContentClosed) {
        mainContentProducts.classList.add('inactive')
    } else if (ismobileMenuClosed) {
        mainContentProducts.classList.toggle('inactive');
    }

    cartMenu.classList.toggle('inactive');
}


const productList = []
productList.push({
    name: "Bike",
    price: 120,
    image: "https://media.istockphoto.com/id/482965873/es/foto/bicicleta-de-monta%C3%B1a-de-29-pulgadas-con-ruedas-sobre-blanco.jpg?s=1024x1024&w=is&k=20&c=LPHFQ8-e0KIDRBS1AdztC7kKZon-GMedhevjM-CZ7_M=",
});
productList.push({
    name: "Casual Shoes ",
    price: 40,
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_961962-MCO53969482763_022023-F.webp",
});
productList.push({
    name: "Computer",
    price: 635,
    image: "https://http2.mlstatic.com/D_NQ_NP_962770-MLM54029806942_022023-O.webp",
});
productList.push({
    name: "Chair",
    price: 45,
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_699538-MCO69510888045_052023-F.webp",
});
productList.push({
    name: "Desktop Gamer",
    price: 130,
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_924794-MLA54287479221_032023-F.webp",
});
productList.push({
    name: "Diapers",
    price: 50,
    image: "https://jumbocolombiaio.vtexassets.com/arquivos/ids/184673-1600-1600?v=637813974873170000&width=1600&height=1600&aspect=true",
});
productList.push({
    name: "Electric Stove",
    price: 110,
    image: "https://http2.mlstatic.com/D_NQ_NP_734749-MLU71092971649_082023-O.webp",
});
productList.push({
    name: "Mistery Box",
    price: 50,
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_861151-MCO52815488323_122022-F.webp",
});
productList.push({
    name: "Sports Clothing",
    price: 40,
    image: "https://http2.mlstatic.com/D_NQ_NP_847095-MCO51526024647_092022-O.webp",
});
productList.push({
    name: "Toys",
    price: 25,
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_739740-MCO47849335494_102021-F.webp",
});
productList.push({
    name: "Weight Kit",
    price: 25,
    image: "https://http2.mlstatic.com/D_NQ_NP_772995-MCO52821182277_122022-O.webp",
});
productList.push({
    name: "Xbox One S",
    price: 420,
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_641295-MLA69573719686_052023-F.webp",
});

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        // product = {name, price, image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);