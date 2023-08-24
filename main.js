const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');

navEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleShoppingCart);


function toggleDesktopMenu () {
    const isShoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isShoppingCartContainerClosed) {
        shoppingCartContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu () {
    const isShoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isShoppingCartContainerClosed) {
        shoppingCartContainer.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleShoppingCart () {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if (!isMobileMenuClosed, !isDesktopMenuClosed) {
        mobileMenu.classList.add('inactive');
        desktopMenu.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name : 'Balón de baloncesto',
    price : 90,
    image : 'https://deportesregol.com/wp-content/uploads/2020/02/0726_Balon_Baloncesto_Spalding_NBA_Lakers_.jpg',
});
productList.push({
    name : 'Laptop Lenovo',
    price : 320,
    image : 'https://images7.kabum.com.br/produtos/fotos/sync_mirakl/256187/Notebook-Lenovo-Ideapad-3i-I7-1165g7-16GB-512GB-SSD-15-6-Polegadas-Full-HD-Placa-De-V-deo-Intel-Iris-Xe-Windows-11_1667844508_g.jpg',
});
productList.push({
    name : 'Samsung S22',
    price : 220,
    image : 'https://images.samsung.com/es/smartphones/galaxy-s22-ultra/buy/02_carousel/04_basic-colors/s22_ultra_productkv_burgundy_mo.jpg',
});
productList.push({
    name : 'PlayStation 4',
    price : 290,
    image : 'https://falabella.scene7.com/is/image/Falabella/gsc_114177726_915363_1?wid=800&hei=800&qlt=70',
});
productList.push({
    name : 'PlayStation 5',
    price : 500,
    image : 'https://crecos.vtexassets.com/arquivos/ids/232487-800-auto?v=638110335732000000&width=800&height=auto&aspect=true',
});
productList.push({
    name : 'Laptop Gamer ASUS',
    price : 420,
    image : 'https://www.cyberpuerta.mx/img/product/L/CP-ASUS-90NR08A5-M00380-111de7.jpg',
});
productList.push({
    name : 'Balón de voleibol',
    price : 80,
    image : 'https://apleton.co/img/p/6/3/63-thickbox_default.jpg',
});
productList.push({
    name : 'Juego Mortal Kombat 1',
    price : 70,
    image : 'https://m.media-amazon.com/images/I/51ghEwfMlQL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg',
});
productList.push({
    name : 'Jordan 4 Retro Black Cat',
    price : 100,
    image : 'https://cdn-images.farfetch-contents.com/15/05/76/88/15057688_25617121_600.jpg',
});
productList.push({
    name : 'Iphone 14',
    price : 225,
    image : 'https://mac-center.com/cdn/shop/products/IMG-7379978_823x.jpg?v=1673376870',
});
productList.push({
    name : 'TV LG',
    price : 250,
    image : 'https://www.lg.com/ar/images/televisores/md07539644/gallery/1-1100x730.jpg',
});
productList.push({
    name : 'Dualshock 4',
    price : 120,
    image : 'https://cosonyb2c.vtexassets.com/arquivos/ids/297036/Dualshock-White1.jpg?v=1770013124',
});
productList.push({
    name : 'Audífonos Gamer G9000',
    price : 150,
    image : 'https://tidyhome.com.co/wp-content/uploads/2023/03/AUDIFONOS-GAMER-GALERIA-G9000.png',
});
productList.push({
    name : 'Mouse Gamer RGB Havit',
    price : 100,
    image : 'https://inboxstore.com.co/wp-content/uploads/2023/03/Mouse_Gamer_MS1016_USB_1-570x570.jpg',
});
productList.push({
    name : 'Teclado Gamer Micronics',
    price : 110,
    image : 'https://www.kobyinversiones.com/wp-content/uploads/2022/09/Teclado-Gamer-micronics-FURIOUS-MIC-K806-1.jpg',
});
productList.push({
    name : 'Ventilador Samurai',
    price : 180,
    image : 'https://i.linio.com/p/e043c548264ad7dd8baf59fd89e25e04-product.jpg',
});
productList.push({
    name : 'Aire acondicionado Eco friendly',
    price : 200,
    image : 'https://www.solartex.co/tienda/wp-content/uploads/2019/11/equipo-dividido-split-aire-acondicionado.png',
});
productList.push({
    name : 'Jersey NBA Kyrie Irving',
    price : 100,
    image : 'https://media.statesidesports.com.au/products/17b0344c-1055-11ec-9e51-0612955e0a0a/cw3658_015_irving_bn_1.jpg',
});
productList.push({
    name : 'Balón de futbol',
    price : 90,
    image : 'https://ss201.liverpool.com.mx/xl/1116292039.jpg',
});
productList.push({
    name : 'Nevera LG Bottom Freezer 454lts',
    price : 250,
    image : 'https://www.lg.com/co/images/neveras/md06083176/gallery/medium_12.jpg',
});

function renderProducts(arr) {
    for (product of productList) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText =  product.name;
    
        productInfoDiv.append(productPrice, productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.append(productInfoDiv, productInfoFigure);
    
        productCard.append(productImg, productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);
