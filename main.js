const menu = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu')
const leftMobileIconMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu'); 
const rightShoppingIconMenu = document.querySelector('.navbar-shopping-cart');
const shoppingMenu = document.querySelector('#shoppingCardContainer');
const productDetailContainer = document.querySelector('#productDetail');
const ProductDetailcloseIcon = document.querySelector('.product-detail-close');
const productList = [];
const productCardsContainer = document.querySelector('.cards-container');


productList.push({
    name: 'Bike',
    price: 720,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
},
{
    name: 'Bicycle helmet',
    price: 80,
    image: 'https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,c_pad,q_auto,w_800,h_600/BontragerSolsticeMIPSCPSC_30466_A_Primary',
},
{
    name:'Bicycle helmet',
    price: 120,
    image: 'https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
},
{
    name:'Bicycle helmet',
    price: 80,
    image: 'https://www.sefiles.net/images/library/large/bontrager-solstice-mips-bike-helmet-331799-1-12-2.jpg'
},
{
    name:'Bicycle helmet',
    price: 150,
    image: 'https://assets.specialized.com/i/specialized/60822-140_HLMT_CHAMONIX-HLMT-MIPS-CE-MRN-M-L_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
},
{
    name: 'Jersey',
    price: 40,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/WTOS_Delft_cycling_jersey_%28cropped%29.jpg/1200px-WTOS_Delft_cycling_jersey_%28cropped%29.jpg',
},
);


menu.addEventListener('click',toggleDesktopMenu);
leftMobileIconMenu.addEventListener('click', toggleMobileMenu);
rightShoppingIconMenu.addEventListener('click', toggleShoppingMenu);
ProductDetailcloseIcon.addEventListener('click', closeProductDetail);

function toggleDesktopMenu(){
    const isShoppingMenuClosed = shoppingMenu.classList.contains('inactive');
    if(!isShoppingMenuClosed){
        shoppingMenu.classList.add('inactive');
    }
    closeProductDetail();
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isShoppingMenuClosed = shoppingMenu.classList.contains('inactive');
    if (!isShoppingMenuClosed){
        shoppingMenu.classList.add('inactive');
    }
    closeProductDetail();
    mobileMenu.classList.toggle('inactive');
}

function toggleShoppingMenu (){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
  
    }
    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }
    if(!isProductDetailClosed){
        productDetailContainer.classList.add('inactive');
    }

    shoppingMenu.classList.toggle('inactive');
}

function closeProductDetail(){
    productDetailContainer.classList.add('inactive');
}
function openProductDetail(){
    shoppingMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}

function showProducts(products){
    for (product of productList){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        const productImage = document.createElement('img');
        productImage.setAttribute('src', product.image);
        productImage.addEventListener('click', openProductDetail);
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        const productInfoDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText= '$'+product.price;
        const productName = document.createElement('p');
        productName.innerText ='$'+product.name;
        
        productInfoDiv.append(productPrice,productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImageCard = document.createElement('img');
        productImageCard.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImageCard);
    
        productInfo.append(productInfoDiv, productInfoFigure);
    
        productCard.append(productImage,productInfo);
    
        productCardsContainer.appendChild(productCard);
    }
}

showProducts(productList);
