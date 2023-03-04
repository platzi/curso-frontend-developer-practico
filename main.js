const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const burguerMenu = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const shoppingCart = document.querySelector('.navbar-shopping-cart')
const productDetail = document.querySelector('.product-detail')
const cardsContainer = document.querySelector('.cards-container')
//const productCard = document.querySelector('.product-card')
//const productInfo = document.querySelector('.product-info')

//toggle = alternar
menuEmail.addEventListener('click', toggleDesktopMenu); 
burguerMenu.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleProducDetail);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    productDetail.classList.add('inactive');
    
}
function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');
    productDetail.classList.add('inactive');
}
function toggleProducDetail (){
    productDetail.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');

}
//array con nuestros productos
const productList = [];

//metemos los elementos del array
function meterElementosArray(){
productList.push({
    name: 'Race-Bike',
    price: 50000,
    image: 'https://images.pexels.com/photos/11074451/pexels-photo-11074451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
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
};
meterElementosArray();

//Maqutamos html para renderizar productos
function renderProducts (arr){
for (let product of arr){

const productCardDiv = document.createElement('div');
productCardDiv.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);

    const productInfoDiv = document.createElement('div');
    productInfoDiv.classList.add('product-info');

        const productInfoDivDiv = document.createElement('div');

            const productPrice = document.createElement('p');
            productPrice.innerText = '$' + product.price ;
            const productName = document.createElement('p');
            productName.innerText = product.name;

        const productInfoFigure = document.createElement('figure');
            const productImgCart = document.createElement('img');
            productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

//Introducimos nuestra maquetacion en html, uno o dos nodos depende de(append,appendchild);
cardsContainer.appendChild(productCardDiv);
    productCardDiv.append(productImg , productInfoDiv);
        productInfoDiv.append(productInfoDivDiv , productInfoFigure);
            productInfoDivDiv.append(productPrice , productName);
            productInfoFigure.appendChild(productImgCart);
};
};
renderProducts(productList);