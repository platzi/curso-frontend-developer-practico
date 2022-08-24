const mainInactive = document.querySelector('.navbar-email');
const menusito = document.querySelector('.desktop-menu');
const mobile = document.querySelector('.menu');
const menuLateral = document.querySelector('.mobile-menu');
const carrito = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const ProductDetailAside = document.querySelector('#productDetail')
const cerrarDetalles = document.querySelector('.product-detail-close');

mainInactive.addEventListener('click',toggleDesktopMenu);
mobile.addEventListener('click',toggleDesktopMenuLateral);
carrito.addEventListener('click',toggleDesktopMiOrden);

carrito.addEventListener('click',toggleDesktopMiOrden);
cerrarDetalles.addEventListener('click',closeDetail);

function toggleDesktopMenu(){
    ProductDetailAside.classList.add('inactive')
    shoppingCartContainer.classList.add('inactive');
    menusito.classList.toggle('inactive');
}

function toggleDesktopMenuLateral(){
    ProductDetailAside.classList.add('inactive')
    menusito.classList.add('inactive');
    shoppingCartContainer.classList.add('inactive');
    menuLateral.classList.toggle('inactive');
}

function toggleDesktopMiOrden(){
    ProductDetailAside.classList.add('inactive')
    menusito.classList.add('inactive');
    menuLateral.classList.add('inactive');
    shoppingCartContainer.classList.toggle('inactive');
    
}

function openProductDetailAside(){
    menusito.classList.add('inactive');
    shoppingCartContainer.classList.add('inactive');
    ProductDetailAside.classList.remove('inactive')
}
function closeDetail(){
    ProductDetailAside.classList.add('inactive')

}

const productLista = [];

productLista.push({
    name:'Bike',
    price: 120,
    imge: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productLista.push({
    name:'Bike',
    price: 120,
    imge: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productLista.push({
    name:'Bike',
    price: 120,
    imge: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productLista.push({
    name:'Bike',
    price: 120,
    imge: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productLista.push({
    name:'Bike',
    price: 120,
    imge: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productLista.push({
    name:'Bike',
    price: 120,
    imge: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})


function renderImg(arr){
    for( product of arr){
    const productCad =document.createElement('div');
    productCad.classList.add('product-card');

    const img = document.createElement('img');
    img.setAttribute('src',product.imge);
    img.addEventListener('click', openProductDetailAside)

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText= '$'+ product.price;
    const productName = document.createElement('p')
    productName.innerText = product.name;
    productInfoDiv.append(productPrice,productName);

    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImgCart)

    productInfo.append(productInfoDiv,productInfoFigure);
    // productInfo.appendChild(productInfoDiv);
    // productInfo.appendChild(productInfoFigure);

    //productCad.appendChild(img,productInfo);
    productCad.appendChild(img);
    productCad.appendChild(productInfo)
    cardsContainer.appendChild(productCad);

}
}

renderImg(productLista)
