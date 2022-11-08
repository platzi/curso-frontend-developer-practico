const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const burgerMenu = document.querySelector('.menu');
const iconCart = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const imageDetail = document.querySelector('#imageDetail');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');

    mobileMenu.classList.add('inactive');
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
};

burgerMenu.addEventListener('click', funcionMobileMenu);

function funcionMobileMenu(){
    mobileMenu.classList.toggle('inactive');

    desktopMenu.classList.add('inactive');
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
};

iconCart.addEventListener('click', toggleCart);

function toggleCart(){
    shoppingCartContainer.classList.toggle('inactive');

    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
};

function openProductDetailAside(e){
    productDetailContainer.classList.remove('inactive');

    mobileMenu.classList.add('inactive');
    shoppingCartContainer.classList.add('inactive');
    desktopMenu.classList.add('inactive');

    imageDetail.setAttribute('src', e.target.src)
}

productDetailCloseIcon.addEventListener('click', toCloseProductDetailAside)

function toCloseProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Computador',
    price: 620,
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});


/* REFERENCIA: de cómo se pondrá el HTML desde Javascript:

/* 
<div class="product-card">

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
</div>
*/


//Haciendo los elementos HTML desde Javascript

function renderProducts(arr) {

    //Sin maquetarlos, solo hacerlos:

    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);

        //Tratando de poner imagen en product detail aside
        const productImg2 = document.createElement('img');
        productImg2.setAttribute('src', product.image);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');
        
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + ' ' + product.price;
        
        const productName = document.createElement('p');
        productName.innerText = product.name;

        const productInfoFigure = document.createElement('figure');

        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');


    //Maquetando los elementos HTML segun deban ir

        //Meter dentro del cardsContainer el productCard
        cardsContainer.appendChild(productCard);

        //Meter dentro del productCard: el img y el productInfo
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        //Meter dentro del productInfo: el productInfoDiv y el Figure
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        //Meter dentro del productInfoDiv: el precio y el nombre
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        //Meter dentro del Figure: el icono del image Cart
        productInfoFigure.appendChild(productImgCart);

    }

}

renderProducts(productList);
