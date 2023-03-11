const textEmail = document.querySelector('.navbar-email');
const menuDesktop = document.querySelector('.desktop-menu');
const menuBurgerIcon = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const shoppingCartIcon = document.querySelector('.shopping-cart-icon');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const imagen = document.querySelector("#infoImages");
const priceProduct = document.querySelector(".precioProducto");

textEmail.addEventListener('click', toggleDesktopMenu);
menuBurgerIcon.addEventListener('click',toggleMenuMobile);
shoppingCartIcon.addEventListener('click', toggleShoppingCartContainer);
productDetailCloseIcon.addEventListener('click', closeProductDetail);

function toggleDesktopMenu(){
    menuDesktop.classList.toggle('inactive');
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
}

function toggleMenuMobile(){
    menuMobile.classList.toggle('oculto');
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
}

function toggleShoppingCartContainer (){ 
    menuDesktop.classList.add('inactive');
    shoppingCartContainer.classList.toggle('inactive');
    menuMobile.classList.add('oculto');
    productDetailContainer.classList.add('inactive');
}

function openProductDetail(event){
    productDetailContainer.classList.remove('inactive');
    menuDesktop.classList.add('inactive');
    menuMobile.classList.add('oculto');
    shoppingCartContainer.classList.add('inactive');

    imagen.setAttribute("src", event.target.src);
    priceProduct.innerText = event.target.nextElementSibling.innerText; 

    
}

function closeProductDetail(){
    productDetailContainer.classList.add('inactive');
}

const productList = [];

productList.push({
    name: 'Bike MTB Giant',
    price: 2000,
    image: 'https://off.road.cc/sites/default/files/styles/970wide/public/thumbnails/image/Giant_TranceX_gallery08.jpeg?itok=1us0I1LD'
});

productList.push({
    name: 'Toyota Land Cruiser',
    price: 15000,
    image: 'https://http2.mlstatic.com/D_NQ_NP_615410-MCO53984474300_022023-O.webp'
});

productList.push({
    name: 'ESP Guitar',
    price: 8000,
    image: 'https://ae01.alicdn.com/kf/H2d3cc0770fe945d49c65e659ee4d5496Y/Guitarra-El-ctrica-con-forma-de-ganso-envejecido-reliquia-James-Hetfield-Explore-EET-FUK-incrustaci-n.jpg_Q90.jpg_.webp'
});

productList.push({
    name: 'MacBook',
    price: 3100,
    image: 'https://media.cnn.com/api/v1/images/stellar/prod/220715122428-macbook-air-m2-review-9.jpg?c=original'
});


function renderProdcuts(listOfProducts){

    for(product of listOfProducts){

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetail);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productDivInfo = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productDivInfo.append(productPrice,productName);
    
        const productFigure = document.createElement('figure');
        const productIcon = document.createElement('img');
        productIcon.setAttribute('src','./icons/bt_add_to_cart.svg');
    
        productFigure.append(productIcon);
    
        productInfo.append(productDivInfo,productFigure);
    
        productCard.append(productImg,productInfo);
    
        cardsContainer.append(productCard);
        
    }
}

renderProdcuts(productList);


 function openProductDetailAside(event){

 }