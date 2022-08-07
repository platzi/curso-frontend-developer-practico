const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');

const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailsCloseIcon = document.querySelector('.product-detail-close');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');

// const productDetailImg = document.querySelector('#productDetail');

menuEmail.addEventListener('click', toggleDestopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailsCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDestopMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }
    closeProductDetailAside();

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDestopMenuClosed = desktopMenu.classList.contains('inactive');

    if(!isMobileMenuClosed || !isDestopMenuClosed){
        mobileMenu.classList.add('inactive');

        desktopMenu.classList.add('inactive');
    }

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
    if(!isProductDetailClosed){
        productDetailContainer.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside(){
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
    
    shoppingCartContainer.classList.remove('menu-animation')
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
    productDetailImg.removeAttribute('src');
}


/*Lista de productos */
const productList = [];
productList.push({
    name: 'Bicicleta',
    price: 120,
    image: "https://www.oxfordstore.cl/media/catalog/product/cache/e2b750e3a1f8d67cf5cdd4eb0e9445ad/b/a/ba2931_emerald_29_negro-celeste_2022_02_1_1.jpg",
});
productList.push({
    name: 'Pantalla',
    price: 220,
    image: "http://images.lider.cl/wmtcl?source=url[file:/productos/1094683a.jpg]&sink",
});
productList.push({
    name: 'Laptop',
    price: 620,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO9Z2mUufFeCPkVhxWji63ap31nzJCVJDixoIygRqQltEBzHXIhiFg0prKI8rh1g9S47M&usqp=CAU",
});
productList.push({
    name: 'Audifonos',
    price: 90,
    image: "https://cdn.shopify.com/s/files/1/0086/2758/5129/products/A3032_img_feature_01_v2_d9fdb9e6-8c89-4a66-beed-3142152ba008_560x560.png?v=1598470396",
});

productList.push({
    name: 'Audifonos-Inalámbricos',
    price: 55,
    image: "https://www.sony.cl/image/6ff70f66ce935f02861635b3e936a70c?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF",
});
productList.push({
    name: 'Cable Usb',
    price: 10,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzqTIVLKN-sfrEOKTiDI0ZhyFiRjKOLdhxLQ&usqp=CAU",
});
productList.push({
    name: 'Micrófono de mano',
    price: 25,
    image: "https://www.sielcom.cl/wp-content/uploads/2021/11/microfono-dinamico-profesional-novik-neo-fnk580-011-42ee60ca48aed64fc115150775848154-640-0.jpeg",
});
productList.push({
    name: 'Ratones Gaming Pc',
    price: 15,
    image: "https://i.blogs.es/7c0651/roccat-kone-aimo/450_1000.webp",
});




/*
<div class="product-card">
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
</div>
*/

function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        //product = {name, price, image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src',product.image);
        productImg.addEventListener('click',openProductDetailAside);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText =  product.name;

        //Regresando y metiendo los productos
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

        //Regresando y metiendo los productos
        productInfoFigure.appendChild(productImgCart);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);
    }
}
renderProducts(productList);
