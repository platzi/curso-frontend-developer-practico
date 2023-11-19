const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');
const productDetailClose = document.querySelector('.product-detail-close');
const mainContainer = document.querySelector('.main-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
    aside.classList.add('inactive');
    if(document.querySelector('.product-individual-detail')){
        document.querySelector('.product-individual-detail').remove();
    };
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    if(document.querySelector('.product-individual-detail')){
        document.querySelector('.product-individual-detail').remove();
    };
    aside.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    if(document.querySelector('.product-individual-detail')){
        document.querySelector('.product-individual-detail').remove();
    };
    aside.classList.toggle('inactive');
}

function openProductDetailAside(e) {
    // Manipulo el DOM para renderizar el producto seleccionado
    // si existe el aside lo elimino
    if(document.querySelector('.product-individual-detail')){
        document.querySelector('.product-individual-detail').remove();
    };

    // tomo el id de la imagen clickeada
    var myid = e.currentTarget.id;

    // creo el aside con los productos del elementos
    const productAsideContainer = document.createElement('aside');
    productAsideContainer.classList.add('product-individual-detail');
    
    const productDetailClose = document.createElement('div');
    productDetailClose.classList.add('product-detail-close');
    productDetailClose.addEventListener('click', closeProductDetail);

    const imgClose = document.createElement('img');
    imgClose.setAttribute('src', './icons/icon_close.png');
    // imgClose.addEventListener('click', closeProductDetail)
    
    const imgProduct = document.createElement('img');
    imgProduct.setAttribute('src', productList[myid-1].image);

    const productInfoIndividual = document.createElement('div');
    productInfoIndividual.classList.add('product-info-individual');

    const productPriceIndividual = document.createElement('p');
    productPriceIndividual.innerText = '$ ' + productList[myid-1].price;

    const productNameIndividual = document.createElement('p');
    productNameIndividual.innerText = productList[myid-1].name;

    const productComenIndividual = document.createElement('p');
    productComenIndividual.innerText = productList[myid-1].comen;

    const buttonAddToCart = document.createElement('button');
    buttonAddToCart.classList.add('primary-button');
    buttonAddToCart.classList.add('add-to-cart-button');

    const imgAddToCart = document.createElement('img');
    imgAddToCart.setAttribute('src', './icons/bt_add_to_cart.svg');

    const addToCart = document.createElement('p');
    addToCart.innerText = 'Add to Cart';
    
    productDetailClose.appendChild(imgClose);
    
    productInfoIndividual.appendChild(productPriceIndividual);
    productInfoIndividual.appendChild(productNameIndividual);
    productInfoIndividual.appendChild(productComenIndividual);
    
    buttonAddToCart.appendChild(imgAddToCart);
    buttonAddToCart.appendChild(addToCart);
    productInfoIndividual.appendChild(buttonAddToCart);

    productAsideContainer.appendChild(productDetailClose);
    productAsideContainer.appendChild(imgProduct);
    productAsideContainer.appendChild(productInfoIndividual);

    mainContainer.insertAdjacentElement("afterend", productAsideContainer);

} 

function closeProductDetail() {
    // alert('Hay que cerrar');
    aside.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    if(document.querySelector('.product-individual-detail')){
        document.querySelector('.product-individual-detail').remove();
    };
}

const productList = [];

productList.push ({
    id: '1',
    name:'Bike',
    price: 12700,
    comen: 'Bici perfecta para fines de semana',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push ({
    id: '2',
    name:'Bicycle helmet',
    price: 1200,
    comen:'Helmet perfecto para el weekend',
    image: 'https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});
productList.push ({
    id: '3',
    name:'Bicycle helmet',
    price: 1600,
    comen: 'Helmet profesional',
    image: 'https://m.media-amazon.com/images/I/61eExL-rIAL._AC_SL1001_.jpg'
});
productList.push ({
    id: '4',
    name:'Bicycle helmet',
    price: 1500,
    comen: 'Helmet semi-profesional',
    image: 'https://assets.specialized.com/i/specialized/60822-140_HLMT_CHAMONIX-HLMT-MIPS-CE-MRN-M-L_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});
productList.push ({
    id: '5',
    name:'Seat',
    price: 300,
    comen: 'Asiento de bici super anatómico',
    image: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg'
});
productList.push ({
    id: '6',
    name:'Tennis Montain Bike',
    price: 2200,
    comen: 'Zapatillas ultra livianas para bici',
    image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg'
});
productList.push ({
    id: '7',
    name:'Sunglasses',
    price: 800,
    comen: 'Anteojos de sol para principiantes',
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602'
});
productList.push ({
    id: '8',
    name:'Sunglasses',
    price: 600,
    comen: 'Anteojos de sol para profesionales',
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/siroko-tech-k3s-clearfog-lente-antiniebla-frontal/1200x/crop_center.jpg?v=1635209603'
});
productList.push ({
    id: '9',
    name:'Bicycle seat bag',
    price: 876,
    comen: 'Bolso multiuso para viajes',
    image: 'https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg'
}); 

function renderProducts(arr) {
    for (product of arr){

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        // productCard.id="prod-"+product.id;
        
        // product = {name, price, image}
        const img = document.createElement('img');
        img.setAttribute('src', product.image);
        img.id=product.id;
        img.addEventListener('click', openProductDetailAside);
        // img.addEventListener('click', function() {
        //     verProducto(product.name, product.price, product.image);
        // });

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');
        
        const productPrice = document.createElement('p');
        productPrice.innerText = '$ ' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;

        const productInfoFigure = document.createElement('figure');
        const imgCart = document.createElement('img');
        imgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

        productInfoFigure.appendChild(imgCart);

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(img);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);