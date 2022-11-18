const menuemail = document.querySelector('.navbar-email');
const desktopmenu = document.querySelector('.desktop-menu');
const menuhamicon = document.querySelector('.menu');
const mobilemenu = document.querySelector('.mobile-menu');
const productDetailCloseIcon = document.querySelector('.product-detail-close')
const menucarritoicon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardscontainer = document.querySelector('.cards-container');

const productDetailContainer = document.querySelector('#productDetail')


menuemail.addEventListener('click', toggledesktopmenu);
menuhamicon.addEventListener('click', togglemobilemenu);
menucarritoicon.addEventListener('click', togglecarritoaside);
productDetailCloseIcon.addEventListener('click', CloseProductDetailAside)
;
/*
function toggledesktopmenu() {
    const asideinactivo = shoppingCartContainer.classList.contains('inactive');
    const productDetailinactivo = productDetailContainer.classList.contains('inactive');

    if (!productDetailinactivo) {
        productDetailContainer.classList.add('inactive');
    }
    if (!asideinactivo) {
        shoppingCartContainer.classList.add('inactive');
    }
    desktopmenu.classList.toggle('inactive');
}



function togglemobilemenu() {
    const asideinactivo = shoppingCartContainer.classList.contains('inactive');
    const productDetailinactivo = productDetailContainer.classList.contains('inactive');
    

    if (!productDetailinactivo) {
        productDetailContainer.classList.add('inactive');
    }
    if (!asideinactivo) {
        shoppingCartContainer.classList.add('inactive');
    }

    mobilemenu.classList.toggle('inactive');
}
*/


function togglecarritoaside() {
    const mobilemenuinactivo = mobilemenu.classList.contains('inactive');
    const desktopmenuinactivo = desktopmenu.classList.contains('inactive');
    const productDetailinactivo = productDetailContainer.classList.contains('inactive');

    if (!productDetailinactivo) {
        productDetailContainer.classList.add('inactive');
    }

    if (!mobilemenuinactivo) {
        mobilemenu.classList.add('inactive');
    }

    if (!desktopmenuinactivo) {
        desktopmenu.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');
}



function openProductDetalAside(){
    const desktopmenuinactivo = desktopmenu.classList.contains('inactive');
    productDetailContainer.classList.remove('inactive');

    const asideinactivo = shoppingCartContainer.classList.contains('inactive');
    if (!asideinactivo) {
        shoppingCartContainer.classList.add('inactive');
    }

    if (!desktopmenuinactivo) {
        desktopmenu.classList.add('inactive');
    }

}

function CloseProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}


const productlist = [];
productlist.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productlist.push({
    name: 'Smart TV',
    price: 500,
    image: 'data:image/jpeg;base64,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'
});

productlist.push({
    name: 'Refrijeradora',
    price: 250,
    image: 'https://img.global.news.samsung.com/pe/wp-content/uploads/2020/12/Family-Hub.jpg'
});

productlist.push({
    name: 'lavadora',
    price: 300,
    image: 'https://www.prado.com.sv/media/catalog/product/1/6/167652_1.jpg?width=265&height=265&canvas=265,265&optimize=medium&bg-color=255,255,255&fit=bounds'
});

productlist.push({
    name: 'microondas',
    price: 70,
    image: 'https://images.samsung.com/is/image/samsung/mx-microwave-oven-convection-mc32k7055ct-mc32k7055ct-ax-001-front-black?$650_519_PNG$'
});

productlist.push({
    name: 'cocina',
    price: 225,
    image: 'https://electromegaecuador.com/wp-content/uploads/2020/03/13-1.png'
});

productlist.push({
    name: 'plancha',
    price: 60,
    image: 'https://osterco.vteximg.com.br/arquivos/ids/160926-500-500/GCSTBS6001-1.jpg?v=637516998006800000'
});



for (product of productlist) {
    const productCard = document.createElement('div')
    productCard.classList.add('product-card');
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openProductDetalAside);

    const productInfo = document.createElement('div')
    productInfo.classList.add('product-info');

    const productInfodiv = document.createElement('div');
    


    const productPrice = document.createElement('p');
    productPrice.innerText = '$'+ product.name;
    const productName = document.createElement('p');
    productName.innerText = product.name;

    productInfodiv.appendChild(productPrice);
    productInfodiv.appendChild(productName);

    const productInfoFigure = document.createElement('figure');
    const productIngCard= document.createElement('img');
    productIngCard.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productIngCard);

    productInfo.appendChild(productInfodiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
    cardscontainer.appendChild(productCard);

}