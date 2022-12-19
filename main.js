const navbarEmail = document.querySelector('.navbar-email');
const accountMenu = document.querySelector('.account-menu');
const mobileIconMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartMenu = document.querySelector('.product-detail')
const shoppingCartIcon = document.querySelector('.navbar-shopping-cart')
const CardsContainer = document.querySelector('.cards-container');

// When user clicks on navbarEmail the idea is to show or hide the AccountMenu
navbarEmail.addEventListener('click', toggleAccountMenu);


function toggleAccountMenu(){
    // Using classList it will shows or hides class inactive depending on the current status
    accountMenu.classList.toggle('inactive');
    shoppingCartMenu.classList.add('inactive');
}

// Add event when click in the Img menu to display the Mobile menu
mobileIconMenu.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
    shoppingCartMenu.classList.add('inactive');
}

// Add windows for shopping cart icon
shoppingCartIcon.addEventListener('click', toggleShoppingCartAside);

function toggleShoppingCartAside(){
    shoppingCartMenu.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    accountMenu.classList.add('inactive');
}


// All available products
const tinte = {
    name: 'Tinte',
    price: 20000,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
};
const keratina = {
    name: 'keratina',
    price: 75000,
    image: "https://www.infobae.com/new-resizer/NyMpfVWDxmgIIOSiW_PCdqglnUc=/992x558/filters:format(webp):quality(85)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/08/02170132/alissadoss-3.gif",
};
const unnas = {
    name: 'Unnas',
    price: 12000,
    image: "https://nails.pe/wp-content/uploads/2021/04/unas_babybommer.png",
};

// This var will store all the available products for the store
const productList = [];
productList.push(tinte);
productList.push(keratina);
productList.push(unnas);

// Create an HTML entry for each product based on product-card class
function updateProducts(arr){
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '₡' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

        productInfoFigure.appendChild(productImgCart);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        CardsContainer.appendChild(productCard);   
    }
}

updateProducts(productList);