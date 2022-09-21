// Variables
const desktopMenu = document.querySelector('.desktop-menu');
const navbarEmail = document.querySelector('.navbar-email');
const menuBurger = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const productDetailPreviewCloseBtn = document.querySelector('.product-detail-closebtn');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');// shopping cart container
const productDetailPreviewContainer = document.querySelector('.product-detail_preview');// product detail preview container

// cards
const cardsContainer = document.querySelector('.cards-container');

// Desktop Menu
navbarEmail.addEventListener('click',() => {
    // para que no se solape el menu con el contenido
    const isAsideOpen = aside.classList.contains('showAside');
    if (isAsideOpen) {
        aside.classList.remove('showAside');
    }

    desktopMenu.classList.toggle('showMenu');
    console.log("clicked, working navbarEmail")
    /* remove classlist if clicked out */
})

// Mobile Menu
menuBurger.addEventListener('click',() => {
    const isAsideOpen = aside.classList.contains('showAside');
    // para que no se solape el menu con el product detail
    if (isAsideOpen) {
        aside.classList.remove('showAside');
    }
    
    // para que no se solape el menu con el product detail preview
    const isProductDetailPreviewOpen = productDetailPreviewContainer.classList.contains('showProductDetailPreview');
    if (isProductDetailPreviewOpen) {
        productDetailPreviewContainer.classList.remove('showProductDetailPreview');
    }

    //burger in x
    menuBurger.setAttribute('src', './icons/x.svg');
    if (mobileMenu.classList.contains('showMobileMenu')) {
        menuBurger.setAttribute('src', './icons/icon_menu.svg');
    }

    // menuBurger.classList.toggle('showMenu');
    mobileMenu.classList.toggle('showMobileMenu');
    console.log("clicked, working menuBurger")

})

// Shopping Cart
shoppingCart.addEventListener('click',() => {
    // para que no se solapen las ventanas
    const isMobileMenuOpen = mobileMenu.classList.contains('showMobileMenu');
    const isAsideOpen = aside.classList.contains('showAside');
    const isPreviewOpen = productDetailPreviewContainer.classList.contains('showProductDetailPreview');

    //si el mobileMenu esta open
    if (isMobileMenuOpen) {
        mobileMenu.classList.toggle('showMobileMenu');
    }

    // si el preview esta open
    if (isPreviewOpen) {
        productDetailPreviewContainer.classList.toggle('showProductDetailPreview');
    }

    aside.classList.toggle('showAside');
});

// Product Detail Preview Close Button
productDetailPreviewCloseBtn.addEventListener('click', closeProductDetailPreview);



// List of Products without hardcoding HTML
const productList = [];

productList.push ({
    name:'Bike',
    price: 12700,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1200,
    image: 'https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1600,
    image: 'https://m.media-amazon.com/images/I/61eExL-rIAL._AC_SL1001_.jpg'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1500,
    image: 'https://assets.specialized.com/i/specialized/60822-140_HLMT_CHAMONIX-HLMT-MIPS-CE-MRN-M-L_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});
productList.push ({
    name:'Seat',
    price: 300,
    image: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg'
});
productList.push ({
    name:'Tennis Montain Bike',
    price: 2200,
    image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg'
});
productList.push ({
    name:'Sunglasses',
    price: 800,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602'
});
productList.push ({
    name:'Sunglasses',
    price: 600,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/siroko-tech-k3s-clearfog-lente-antiniebla-frontal/1200x/crop_center.jpg?v=1635209603'
});
productList.push ({
    name:'Bicycle seat bag',
    price: 876,
    image: 'https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg'
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

function renderProducts(productList) {//(arr)
    //for (product of arr) {
    productList.forEach(product => {
        // console.log(product.name);
        // creacion de elementos
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        // add event listener del product card
        // productCard.addEventListener('click', () => {
        //     openProductDinamic(product);
        // });
    
        const img = document.createElement('img');
        img.setAttribute('src', product.image);
        // add event listeners
        img.addEventListener('click', openProductDetailPreview);
        // img.addEventListener('click',openProductDinamic(product));
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
        
        const productPrice = document.createElement('p');
        productPrice.innerText = '$ ' + product.price;
        const productName = document.createElement('p'); 
        productName.innerText = product.name;
        // append
        productInfoDiv.append(productPrice, productName);
    
        const productInfoFigure = document.createElement('figure');
        
        const productInfoImg = document.createElement('img');
        productInfoImg.setAttribute('src', "./icons/bt_add_to_cart.svg");
        // append
        productInfoFigure.appendChild(productInfoImg);
    
        // append
        productInfo.append(productInfoDiv, productInfoFigure);
    
        // append
        productCard.append(img, productInfo);
    
        /* Con Element.append() podemos agregar varios nodos y texto,
        mientras que con Element.appendChild() solo podemos agregar un nodo. */
        cardsContainer.appendChild(productCard);	
    })
}
// si quisiera agregar productos, pero que la info me la traiga una api, para eso tengo el arr
renderProducts(productList);

// const openProductDinamic = (product) => {
//     // obtenemos del preview la imagen, el titulo y el precio
//     const productDetailPreviewImg = document.querySelector('#product-detail-preview-img');
//     const productPrice = document.querySelector('#product-price');
//     const productName = document.querySelector('#product-name');
//     // const productDescription = ;

//     productDetailPreviewImg.setAttribute('src',product.img);
//     productPrice.textContent= product.price;
//     productName.textContent= product.name;
// }


// Product Detail Preview
function openProductDetailPreview(event) {
    // const product = productList.find(product => ;
    // console.log(product);

    // const showImage = `
    // <img src="${product.image}" alt="${product.name}" title="${product.name}" id="product-detail-preview-img">
    // <div class="product-info_preview">
    // <p id="product-price">${product.price}</p>
    // <p id="product-name">${product.name}</p>
    // <p id="product-description">${product.name}</p>
    // <button class="primary-button add-to-cart-button">
    //   <img src="./icons/bt_add_to_cart.svg" alt="add to cart">
    //   Add to cart
    // </button>
    // </div>
    // `;
    // productDetailPreviewContainer.innerHTML = showImage;


    // si esta abierto el aside lo cierra
    const isAsideOpen = aside.classList.contains('showAside');
    if (isAsideOpen) {
        aside.classList.remove('showAside');
    }

    // si esta abierto el mobileMenu lo cierra
    const isMobileMenuOpen = mobileMenu.classList.contains('showMobileMenu');
    if (isMobileMenuOpen) {
        mobileMenu.classList.remove('showMobileMenu');
    }

    productDetailPreviewContainer.classList.add('showProductDetailPreview');

    // dinamic content
    // const productDetailPreviewImg = document.querySelector('#product-detail-preview-img');
    // const productPrice = document.querySelector('#product-price');
    // const productName = document.querySelector('#product-name');
    // // const productDescription = ;

    // productList.forEach(product => {
    //     productDetailPreviewImg.setAttribute('src',product.img);
    //     productPrice.textContent= product.price;
    //     productName.textContent= product.name;
    // });

}
function closeProductDetailPreview() {
    productDetailPreviewContainer.classList.remove('showProductDetailPreview');
}
