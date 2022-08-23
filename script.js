const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('#desktopMenu');

const mobileMenuIcon = document.querySelector('#menu');
const mobileMenu = document.querySelector('#mobileMenu');

const shoppingCartIcon = document.querySelector('#shoppingCartIcon');
const menuProductDetail = document.querySelector('#shoppingCart');

const cardsContainer = document.querySelector('#cardsContainer');

const productDetailAside = document.querySelector('#productDetail');
const closeDetailBtnIcon = document.querySelector('#closeDetailBtnIcon');

navEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    menuProductDetail.classList.add('inactive');
    productDetailAside.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
};

mobileMenuIcon.addEventListener('click', function (){
    menuProductDetail.classList.add('inactive');
    productDetailAside.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
});

shoppingCartIcon.addEventListener('click', function (){
    mobileMenu.classList.add('inactive');
    productDetailAside.classList.add('inactive');
    menuProductDetail.classList.toggle('inactive');
});

function openProductDetailAside (){
    productDetailAside.classList.remove('inactive');
    menuProductDetail.classList.add('inactive');
    mobileMenu.classList.add('inactive');
}

closeDetailBtnIcon.addEventListener('click', function(){
    productDetailAside.classList.add('inactive');
})

const productList = [];

productList.push ({
    product: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push ({
    product: 'Pantalla',
    price: 320,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push ({
    product: 'Computer',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push ({
    product: 'Teclado',
    price: 50,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push ({
    product: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push ({
    product: 'Pantalla',
    price: 320,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push ({
    product: 'Computer',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push ({
    product: 'Teclado',
    price: 50,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

function renderList (array) {
    for (item of array){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImage = document.createElement('img');
        productImage.setAttribute('src', item.image);
            productImage.addEventListener('click', openProductDetailAside);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const divPriceProduct = document.createElement('div');
            
            const productPrice = document.createElement('p');
            productPrice.innerText = `$.${item.price}`;
            divPriceProduct.appendChild(productPrice);
    
            const productName = document.createElement('p');
            productName.innerText = item.product;
            divPriceProduct.appendChild(productName);
        
        const divFigure = document.createElement('figure');
        const productBtnIcon = document.createElement('img');
        productBtnIcon.setAttribute('src', './icons/bt_add_to_cart.svg');
        divFigure.appendChild(productBtnIcon);
    
        productInfo.appendChild(divPriceProduct);
        productInfo.appendChild(divFigure);
    
        productCard.appendChild(productImage);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderList(productList);