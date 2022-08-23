const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('#desktopMenu');

const menu = document.querySelector('#menu');
const mobileMenu = document.querySelector('#mobileMenu');

const shoppingCartIcon = document.querySelector('#shoppingCartIcon');
const menuProductDetail = document.querySelector('#menuProductDetail');

const cardsContainer = document.querySelector('#cardsContainer');

navEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    menuProductDetail.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
};

menu.addEventListener('click', toggleMenuMobile);

function toggleMenuMobile(){
    menuProductDetail.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
};

shoppingCartIcon.addEventListener('click', toggleMenuProductDetail);

function toggleMenuProductDetail (){
    mobileMenu.classList.add('inactive'); 
    menuProductDetail.classList.toggle('inactive');
};

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