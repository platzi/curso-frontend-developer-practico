const navEmail = document.querySelector(".navbar-email");
const burguerMenu = document.querySelector('.menu');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarrito = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('#shopping-cart-container');
const cardsContainer = document.querySelector('.cards-container');

navEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);
menuCarrito.addEventListener('click', toggleCarritoAside);


function toggleDesktopMenu() {

    desktopMenu.classList.toggle('inactive');

    if (!aside.classList.contains('inactive')) {
        aside.classList.add('inactive');
    }
}

function toggleMobileMenu() {

    mobileMenu.classList.toggle('inactive');

    if (!aside.classList.contains('inactive')) {
        aside.classList.add('inactive');
    }

}

function toggleCarritoAside() {

    aside.classList.toggle('inactive');

    if (!mobileMenu.classList.contains('inactive')) {
        mobileMenu.classList.add('inactive');
    }
    if (!desktopMenu.classList.contains('inactive')) {
        desktopMenu.classList.add('inactive');
    }
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 12700,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Bicycle helmet',
    price: 1200,
    img: 'https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});
productList.push({
    name: 'Bicycle helmet',
    price: 1600,
    img: 'https://m.media-amazon.com/images/I/61eExL-rIAL._AC_SL1001_.jpg'
});
productList.push({
    name: 'Bicycle helmet',
    price: 1500,
    img: 'https://assets.specialized.com/i/specialized/60822-140_HLMT_CHAMONIX-HLMT-MIPS-CE-MRN-M-L_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});
productList.push({
    name: 'Seat',
    price: 300,
    img: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg'
});
productList.push({
    name: 'Tennis Montain Bike',
    price: 2200,
    img: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg'
});
productList.push({
    name: 'Sunglasses',
    price: 800,
    img: 'https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602'
});
productList.push({
    name: 'Sunglasses',
    price: 600,
    img: 'https://cdn.siroko.com/s/files/1/1220/6874/products/siroko-tech-k3s-clearfog-lente-antiniebla-frontal/1200x/crop_center.jpg?v=1635209603'
});
productList.push({
    name: 'Bicycle seat bag',
    price: 876,
    img: 'https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg'
});

renderProducts(productList);

function renderProducts(array){

    for (const producto of array) {

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const img = document.createElement('img');
        img.setAttribute('src', producto.img);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText = `$${producto.price}`;
        const productName = document.createElement('p');
        productName.innerText = producto.name;

        productInfoDiv.append(productPrice, productName);

        const productInfoFigure = document.createElement('figure');
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');

        productInfoFigure.appendChild(productImgCard);
        productInfo.append(productInfoDiv, productInfoFigure);
        productCard.append(img, productInfo);

        cardsContainer.appendChild(productCard);

    }
}

