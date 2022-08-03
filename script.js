const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const mobileBtn = document.querySelector("#mobile-menu-btn")
const mobileMenu = document.querySelector(".mobile-menu");

const cartBtn = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector("#shopping-cart-container");

const productContainer = document.querySelector(".cards-container");

const productDetails = document.querySelector("#product-detail");
const productDetailsCloseIcon = document.querySelector(".product-detail-close");



// Checks if all the other menus are closed
function allMenusClosed(){
    let allMenusClosed = shoppingCartContainer.classList.contains("inactive") && mobileMenu.classList.contains("inactive") && productDetails.classList.contains("inactive") && desktopMenu.classList.contains("inactive") ? true : false;

    return allMenusClosed;
}


function toggleDesktopMenu(){
    if(allMenusClosed()){
        desktopMenu.classList.toggle("inactive");
    }
    else{
        closeDetails();
        shoppingCartContainer.classList.add("inactive");
        mobileMenu.classList.add("inactive");
        desktopMenu.classList.toggle("inactive");
    }
}

function toggleMobileMenu(){
    if(allMenusClosed()){
        mobileMenu.classList.toggle("inactive");
    }
    else{
        closeDetails();
        shoppingCartContainer.classList.add("inactive");
        desktopMenu.classList.add("inactive");
        mobileMenu.classList.toggle("inactive");
    }
}

function toggleCart(){
    if(allMenusClosed()){
        shoppingCartContainer.classList.toggle("inactive");
    }
    else{
        closeDetails();
        desktopMenu.classList.add("inactive");
        mobileMenu.classList.add("inactive");
        shoppingCartContainer.classList.toggle("inactive");
    }
}

function openDetails(){
    if(allMenusClosed()){
        productDetails.classList.remove("inactive");
    }
    else{
        desktopMenu.classList.add("inactive");
        mobileMenu.classList.add("inactive");
        shoppingCartContainer.classList.add("inactive");
        productDetails.classList.remove("inactive");
    }
}

function closeDetails(){
    productDetails.classList.add("inactive");
}


menuEmail.addEventListener('click', toggleDesktopMenu);
mobileBtn.addEventListener('click', toggleMobileMenu);
cartBtn.addEventListener('click', toggleCart);
productDetailsCloseIcon.addEventListener('click', closeDetails);

const productList = [];
productList.push({
    name: 'Ray Ban glasses',
    price: 2950,
    img: "https://images.ray-ban.com/is/image/RayBan/805289115694_0001.png?impolicy=SEO_1x1",
    description: "esta es una descripción para ejemplificar"
},
{
    name: 'Macbook air',
    price: 37999,
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1633027804000",
    description: "esta es una descripción para ejemplificar" 
},
{
    name: 'Stratocaster guitar',
    price: 4970,
    img: "https://m.media-amazon.com/images/I/71XBvZJ8t1L._AC_SX425_.jpg",
    description: "esta es una descripción para ejemplificar" 
},
{
    name: 'logitech mouse',
    price: 365,
    img: "https://m.media-amazon.com/images/I/61UxfXTUyvL._AC_SY450_.jpg",
    description: "esta es una descripción para ejemplificar" 
},
{
    name: 'Indian FTR 1200',
    price: 334900,
    img: "https://www.indianmotorcycle.mx/fileadmin/templates/model_21/ftr-family/FTR_R_CARBON_FIBER_Front_3Q.jpg",
    description: "esta es una descripción para ejemplificar" 
},
{
    name: 'Chelsea boots',
    price: 2452,
    img: "https://cdn.shopify.com/s/files/1/0419/1525/products/1024x1024-Men-Cavalier-Sandstone-012422-3.4.jpg?v=1646426165",
    description: "esta es una descripción para ejemplificar" 
},
{
    name: 'combi',
    price: 80000,
    img: 'https://www.coolkombi.com/wp-content/uploads/2017/04/vokswagen_en4.png',
    description: "esta es una descripción para ejemplificar"
},
{
    name:'eloquent JS',
    price:600,
    img:'https://image.cdn0.buscalibre.com/5d290e1f4ef0b5ea1e8b4567.__RSF640x640__.jpg',
    description: "esta es una descripción para ejemplificar"
},
{
    name:'keyboard',
    price:2366,
    img:'https://m.media-amazon.com/images/I/61YICk5lrTL._AC_SS450_.jpg',
    description: "esta es una descripción para ejemplificar"
},
{
    name:'backpack',
    price:449,
    img:'https://m.media-amazon.com/images/I/71OboCuNnAL._AC_AA220_.jpg',
    description: "esta es una descripción para ejemplificar"
},
{
    name:'French press',
    price:444.34,
    img:'https://ae01.alicdn.com/kf/H54127ff5df8245fd877a0c6eb357bb8ch/New-French-Press-Coffee-Tea-Maker-12Oz-Thickened-Borosilicate-Glass-Coffee-Press-Rust-Free-and-Dishwasher.jpg',
    description: "esta es una descripción para ejemplificar"
},
{
    name:'coffee makes',
    price:999,
    img:'https://m.media-amazon.com/images/I/61cd+qt1e9L._AC_SL1200_.jpg',
    description: "esta es una descripción para ejemplificar"
},
{
    name:'headphones',
    price:2835,
    img:'https://m.media-amazon.com/images/I/71QbbvhjDcL._AC_SL1500_.jpg',
    description: "esta es una descripción para ejemplificar"
},
{
    name:'Wallet',
    price:608,
    img:'https://cdn.shopify.com/s/files/1/0250/0657/1613/products/vulkit_RFID_wallet_cardholder_3.jpg?v=1652340704',
    description: "esta es una descripción para ejemplificar"
},
{
    name:'Mi band 7',
    price:949,
    img:'https://mistoremx.oss-us-east-1.aliyuncs.com/data/gallery_album/240/original_img/1655247456879976409.webp',
    description: "esta es una descripción para ejemplificar"
},
{
    name:'Logitech c920',
    price:1224,
    img:'https://resource.logitech.com/w_800,c_lpad,ar_1:1,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/webcams/c920s/gallery/c920s-gallery-1.png?v=1',
    description: "esta es una descripción para ejemplificar"
});

function renderProducts(arr){
    for (const product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add("product-card");
    
        productContainer.appendChild(productCard);
        
        const img = document.createElement('img');
        img.setAttribute('src', product.img);
        img.addEventListener('click', openDetails);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add("product-info");
    
        const infoDiv = document.createElement("div");
    
        const pPrice = document.createElement('p');
        pPrice.innerText = `$ ${product.price}`;
    
        const pNmae = document.createElement("p");
        pNmae.innerText = product.name;
        const infoFigure = document.createElement("figure");
    
        const figureImg = document.createElement("img");
        figureImg.setAttribute('src', "./icons/bt_add_to_cart.svg" );
    
        productCard.appendChild(img);
        productCard.appendChild(productInfo);
    
        productInfo.appendChild(infoDiv);
        productInfo.appendChild(infoFigure);
    
        infoDiv.appendChild(pPrice);
        infoDiv.appendChild(pNmae);
    
        infoFigure.appendChild(figureImg);
    
    }
}

/* function renderDetails(product){
    const productDetailsClose = document.createElement("div");
    productDetailsClose.classList.add("product-detail-close");
    productDetails.appendChild(productDetailsClose);


    const closeImg = document.createElement('img');
    closeImg.setAttribute('src', "./icons/icon_close.png" );
    closeImg.addEventListener('click', closeDetails);
    productDetailsClose.appendChild(closeImg);

    const productImg = document.createElement('img');
    productImg.setAttribute('src', "");
    productDetails.appendChild(productImg);

    const productInfo = document.createElement('div');
    productInfo.classList.add("product-info");
    productDetails.appendChild(productInfo);

    const pPrice = document.createElement('p');
    pPrice.innerText = `$ ${product.price}`;
    const pNmae = document.createElement("p");
    pNmae.innerText = product.name;
    const pDescription = document.createElement('p');
    pDescription.innerText = product.description;
    
    productInfo.appendChild(pPrice);
    productInfo.appendChild(pNmae);
    productInfo.appendChild(pDescription);

    const addCartBtn = document.createElement("button");
    addCartBtn.classList.add("primary-button");
    addCartBtn.classList.add("add-to-cart-button");
    addCartBtn.innerHTML = 
    `<img src="./icons/bt_add_to_cart.svg" alt="add to cart">
    Add to cart`;

    productInfo.appendChild(addCartBtn);
}
 */

renderProducts(productList);
// renderDetails(productList);