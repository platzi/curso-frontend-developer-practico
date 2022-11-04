const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsConteiner = document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {

    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
    
    aside.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Monitor',
    price: 490,
    imagen: 'https://www.lg.com/pe/images/monitores/md06247398/gallery/MNT-27GN750-Gallery-D02.jpg',
});

productList.push({
    name: 'Teclado',
    price: 80,
    imagen: 'https://www.impacto.com.pe/storage/products/MQSWJGUSPETGNRM1607707380log-1.jpg',
});

productList.push({
    name: 'Pc',
    price: 1200,
    imagen: 'https://mipclista.com/3512-home_default/pc-gamer-draco-plus-core-i5-10400f-10th-gen.jpg',
});

productList.push({
    name: 'Laptop Acer',
    price: 1600,
    imagen: 'https://innovaperu.pe/wp-content/uploads/727.jpg',
});

productList.push({
    name: 'Teclado HyperX',
    price: 90,
    imagen: 'https://images.utilex.pe/101661/450x450/teclado-gamer-alloy-core-rgb-hyperx-CYSOBK74GPQMU.png',
});

productList.push({
    name: 'Silla hergonomica',
    price: 600,
    imagen: 'https://mercury.vteximg.com.br/arquivos/ids/4553316-3000-3000/image-dfa194cda1934afbbc96cc26465f9de8.jpg?v=637746688699030000',
});

productList.push({
    name: 'Mesa Gamer',
    price: 800,
    imagen: 'https://tiendasetup.com/wp-content/uploads/2021/02/71im8JLZavL._AC_SL1500_-1024x903.jpg',
});

productList.push({
    name: 'Case blanco',
    price: 230,
    imagen: 'https://falabella.scene7.com/is/image/FalabellaPE/19308834_1?wid=800&hei=800&qlt=70',
});

/* <div class="product-card">
                <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
                <div class="product-info">
                <div>
                    <p>$120,00</p>
                    <p>Bike</p>
                </div>
                <figure>
                    <img src="./icons/bt_add_to_cart.svg" alt="">
                </figure>
                </div>
            </div> */

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.imagen);
    
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
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsConteiner.appendChild(productCard);
    }
}

renderProducts(productList);