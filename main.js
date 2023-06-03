let menuEmail = document.querySelector('.navbar-email');
let menuBurguerIcon = document.querySelector('.menu');
let menuShopCart = document.querySelector('.navbar-shopping-cart');
let desktopMenu = document.querySelector('.desktop-menu');
let mobileMenu = document.querySelector('.mobile-menu');
let shopCart = document.querySelector('#shoppingCartContainer');

let cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu,);
menuBurguerIcon.addEventListener('click', toggleMobileMenu,);
menuShopCart.addEventListener('click', toggleShopCartMenu,);

function toggleDesktopMenu() {
    const isShopCartClosed = shopCart.classList.contains('inactive');

    if (!isShopCartClosed) {
        shopCart.classList.add('inactive');
    } 

    toggleProductDetail();
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isShopCartClosed = shopCart.classList.contains('inactive');

    if (!isShopCartClosed) {
        shopCart.classList.add('inactive');
    } 

    toggleProductDetail();
    mobileMenu.classList.toggle('inactive');
}

function toggleShopCartMenu() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
   
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }

    toggleProductDetail();
    shopCart.classList.toggle('inactive');  
}

function toggleProductDetail(){
    let isThereActiveProduct = document.querySelectorAll('.product-detail').length > 0;
    if (isThereActiveProduct) {
        document.querySelectorAll('.product-detail').forEach((element) => { 
          element.remove();
        });
    }
}

let productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: 'Little used bike in perfect condition',
});
productList.push({
    name: 'Helmet',
    price: 40,
    image: 'https://img.freepik.com/foto-gratis/hombre-casco-bicicleta_23-2148139052.jpg?w=996&t=st=1685012250~exp=1685012850~hmac=cb37770a6b9c49042955eea84a95cf54975f33fd0d66774576518138de1ecce4', 
    description: 'Bike or skate helmet',
});
productList.push({
    name: 'Gloves',
    price: 30,
    image: 'https://img.freepik.com/foto-gratis/manillar-bicicleta_23-2148017244.jpg?w=740&t=st=1685012208~exp=1685012808~hmac=882b0dbc237911f8aec794f21d20030a2fe5346ae0188b7155ac9499d7c73454', 
    description: 'Protective gloves for bicycles or skates',
});
productList.push({
    name: 'SkateBoard',
    price: 160,
    image: 'https://img.freepik.com/psd-gratis/mockup-skateboard_1310-876.jpg?size=626&ext=jpg&ga=GA1.2.510947045.1681300511&semt=sph',
    description: 'New skateboard to enjoy outdoors',
});
productList.push({
    name: 'Knee Pad',
    price: 60,
    image: 'https://img.freepik.com/foto-gratis/chicos-patinan-piscina_1321-1334.jpg?w=996&t=st=1685012092~exp=1685012692~hmac=e147b977374e06ba68bd38afd55d665d257bb792cf853592a6aa2ec90131c3d2',
    description: 'Protective knee pad for skaters',
});
productList.push({
    name: 'Hoverboard',
    price: 130,
    image: 'https://media.istockphoto.com/id/585592044/es/foto/los-chicos-se-paran-en-el-giroscopio-negro-al-aire-libre.jpg?s=612x612&w=0&k=20&c=zfwteuipUombe043Hhfvmr8e8WQz3N6e2pYkXzELYlk=',
    description: 'Automatic balance on your hoverboard',
});
productList.push({
    name: 'RollerSkate',
    price: 90,
    image: 'https://img.freepik.com/foto-gratis/seccion-baja-mujer-patines_23-2148140553.jpg?w=740&t=st=1685012012~exp=1685012612~hmac=32665dcac04fa37b187d7d747d2468335db340021f524929cab21e1de184332e',
    description: 'Adult adjustable parallel skates',
});
productList.push({
    name: 'InlineSkate',
    price: 150,
    image: 'https://img.freepik.com/foto-gratis/mujer-desenfocada-patines_23-2148382725.jpg?w=996&t=st=1685011963~exp=1685012563~hmac=d3caffd43dff9f8b3081187b184103b5421173ef348998df741b73d14311a086',
    description: 'Line Roller Skates, Fitness Inline',
});

function renderProducts(arr) {
    for (product of arr) {
    let productCard = document.createElement('div');
    productCard.classList.add('product-card');

    //product= {name, price, image} -> product.image
    const productImg = document.createElement('img');
    productImg.src = product.image;
    productImg.addEventListener('click', openProductDetailAside);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info'); 
    productInfo.innerHTML = `<div>
                            <p> € ${product.price} </p>
                            <p> ${product.name} </p>
                            </div>`

    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImgCart);

    productInfo.append(productInfoFigure);

    productCard.append(productImg, productInfo);

    cardsContainer.appendChild(productCard);
    }
}

function openProductDetailAside(event){

    let productOn = productList.find(product => product.image == event.target.src);

    let productDetailAside = document.createElement('aside');
    productDetailAside.classList.add('product-detail');

    let productDetailClose = document.createElement('div');
    productDetailClose.classList.add('product-detail-close');

    let productDetailCloseImg = document.createElement('img');
    productDetailCloseImg.setAttribute('src', './icons/icon_close.png');
    productDetailCloseImg.addEventListener('click', closeProductDetailAside);

    let productDetailImg = document.createElement('img');
    productDetailImg.setAttribute('src', productOn.image);

    let productInfoDetail = document.createElement('div');
    productInfoDetail.classList.add('product-info');
    productInfoDetail.innerHTML = `<div>
                                <p> € ${productOn.price} </p>
                                <p> ${productOn.description} </p>
                                </div>`;

    let buttonProductDetail = document.createElement('button');
    buttonProductDetail.classList.add('primary-button');
    buttonProductDetail.classList.add('add-to-cart-button');

    let addToCartImg = document.createElement('img');
    addToCartImg.setAttribute('src', './icons/bt_add_to_cart.svg');
    buttonProductDetail.innerText = 'Add to cart';

    buttonProductDetail.append(addToCartImg);
    productDetailClose.appendChild(productDetailCloseImg);
    productDetailAside.append(productDetailClose, productDetailImg, productInfoDetail, buttonProductDetail);

    cardsContainer.appendChild(productDetailAside);
 
    shopCart.classList.add('inactive')
}
    
function closeProductDetailAside() {
    let productDetailAside = document.querySelector('.product-detail');
    productDetailAside.remove();
}

renderProducts(productList);



