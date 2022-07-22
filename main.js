const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCard = document.querySelector('#shoppingCartContainer');
const cardContainder = document.querySelector('.cards-container');
const prodcutDetailContainder = document.querySelector('#productDetail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoMenu);
productDetailCloseIcon.addEventListener('click',closeProductDetailAside);

function toggleDesktopMenu(){
    const isshoppingCardClosed = menuMobile.classList.contains('inactive');    
    if (isshoppingCardClosed){
        shoppingCard.classList.add('inactive')
    }
     if (!prodcutDetailContainder.classList.contains('inactive')){
        prodcutDetailContainder.classList.add('inactive')
    }
desktopMenu.classList.toggle('inactive')
}   

function toggleMobileMenu(){
    const isshoppingCardClosed = menuMobile.classList.contains('inactive');    
    if (isshoppingCardClosed){
        shoppingCard.classList.add('inactive')
    }
    if (!prodcutDetailContainder.classList.contains('inactive')){
        prodcutDetailContainder.classList.add('inactive')
    }
    menuMobile.classList.toggle('inactive')
}
function toggleCarritoMenu(){
    const ismobileMenuClosed = !menuMobile.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')
        if (ismobileMenuClosed){
            menuMobile.classList.add('inactive')
        }
        if (!isDesktopMenuClosed){
            desktopMenu.classList.add('inactive')
        }
        shoppingCard.classList.toggle('inactive')
        closeProductDetailAside();
}

function openProductDetailAside(){
    prodcutDetailContainder.classList.remove('inactive')
    if (!desktopMenu.classList.contains('inactive') ){
        desktopMenu.classList.add('inactive');
    }else if (!shoppingCard.classList.contains('inactive')){
        shoppingCard.classList.add('inactive')
    }
}

function closeProductDetailAside(){
    prodcutDetailContainder.classList.add('inactive')
}

const productList = [];
productList.push({
    name:'bike',
    price: '120',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
}) 
productList.push({
    name:'Celular',
    price: '560',
    image: 'https://exitocol.vtexassets.com/arquivos/ids/12009546/celular-xiaomi-redmi-note-11-128gb-azul-4gb-ram-camara-cuadruple-de-50-mp.jpg?v=637817658437870000'
})  
productList.push({
    name:'Tv',
    price: '1260',
    image: 'https://www.lg.com/co/images/televisores/md07504655/gallery/1100_01_v1.jpg'
})  
productList.push({
    name:'Pc',
    price: '1200',
    image: 'https://liquimarcas.co/wp-content/uploads/2021/06/computador-barato-powergroup-j4040-1.jpg'
})  

function renderProducts(arr){
    for (product of arr){
        const productCard=  document.createElement('div');
        productCard.classList.add('product-card');
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image );
        productImg.addEventListener('click', openProductDetailAside);
        const productInfo=  document.createElement('div');
        productInfo.classList.add('product-info');
        const productInfoDiv=  document.createElement('div');
        
        const productPrice=  document.createElement('div');
        productPrice.innerText = '$'+ product.price;
        const productName=  document.createElement('div');
        productName.innerText = product.name;
        
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        
        const productinfoFigure=  document.createElement('figure');
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg' );
        
        productinfoFigure.appendChild(productImgCard);
        
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productinfoFigure);
        
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        
        cardContainder.appendChild(productCard);
        }
}
renderProducts(productList);