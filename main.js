const menuEmail = document.querySelector('.navbar-email');//para conectar con el elemento del email de barra de navegacion
const menuHamburguerIcon = document.querySelector('.menu');//para conectar con el elemento sanduche dde barra de navegacion
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');//
const mobileMenu = document.querySelector('.mobile-menu');//para conectar con el menu mobile
const desktopMenu = document.querySelector('.desktop-menu');//para conectar con el menu desktop
const aside = document.querySelector('.product-detail');//
const cardsContainer = document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamburguerIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);


function toggleDesktopMenu(){
    console.log('clickeando menu desktop');
    const isAsideClosed = aside.classList.contains('inactive');
    if(!isAsideClosed){
        aside.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');//toggle -> permite intercambiar
}

function toggleMobileMenu(){
    console.log('clickeando el menu mobile');
    const isAsideClosed = aside.classList.contains('inactive');
    if(!isAsideClosed){
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');//toggle -> permite intercambiar
}


function toggleCarritoAside(){
    console.log('clickeando el aside');
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    const isdesktopMenuClosed = desktopMenu.classList.contains('inactive');
    if(!isdesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }
    aside.classList.toggle('inactive');//toggle -> permite intercambiar
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Computer',
    price: 567,
    image: 'https://img.global.news.samsung.com/pe/wp-content/uploads/2018/05/224-1024x683.jpg'
});
productList.push({
    name: 'Monitor',
    price: 230,
    image: 'https://es.digitaltrends.com/wp-content/uploads/2018/07/que-monitor-comprar-feat.jpg'
});
productList.push({
    name: 'Keys',
    price: 89,
    image: 'https://www.shutterstock.com/image-vector/vector-black-pc-keyboard-very-260nw-1026742981.jpg'
});
productList.push({
    name: 'Camara',
    price: 699,
    image: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/110CC/production/_90463896_ccc.jpg'
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Computer',
    price: 567,
    image: 'https://img.global.news.samsung.com/pe/wp-content/uploads/2018/05/224-1024x683.jpg'
});
productList.push({
    name: 'Monitor',
    price: 230,
    image: 'https://es.digitaltrends.com/wp-content/uploads/2018/07/que-monitor-comprar-feat.jpg'
});
productList.push({
    name: 'Keys',
    price: 89,
    image: 'https://www.shutterstock.com/image-vector/vector-black-pc-keyboard-very-260nw-1026742981.jpg'
});
productList.push({
    name: 'Camara',
    price: 699,
    image: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/110CC/production/_90463896_ccc.jpg'
});

//CREACION DE UNA FUNCION PARA RENDERIZAR UN GRUPO DE IMAGENES
function renderProducts(arreglo){
    for (product of arreglo) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src',product.image);

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
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');

        productInfoFigure.appendChild(productImgCart);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);




