const emailMenu = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail')
const cardsContainer = document.querySelector('.cards-container');



emailMenu.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleAside);



function toggleAside() {
    aside.classList.toggle('active-cart');
    mobileMenu.classList.remove('active');
    desktopMenu.classList.add('inactive');
}


function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    aside.classList.remove('active-cart');
}

function toggleMobileMenu() {
    
    mobileMenu.classList.toggle('active');
    aside.classList.remove('active-cart');
}

const productList = [];

productList.push({
    name: 'Bike',   
    price: '120',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Control Xbox Series X',   
    price: '70',
    image: 'https://images.pexels.com/photos/4298306/pexels-photo-4298306.jpeg'
});
productList.push({
    name: 'Teclado Mecanico Anne Pro 2',   
    price: '90',
    image: 'https://images.pexels.com/photos/13728045/pexels-photo-13728045.jpeg'
});
productList.push({
    name: 'Bike',   
    price: '120',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});


//  <div class="product-card">
// <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
// <div class="product-info">
//   <div>
//     <p>$120,00</p>
//     <p>Bike</p>
//   </div>
//   <figure>
//     <img src="./icons/bt_add_to_cart.svg" alt="">
//   </figure>
// </div>
// </div>

function renderProducts (arr) {
    for (product of arr) {

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const img = document.createElement('img');
        img.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productCard.append(img, productInfo);
        productInfo.append(productInfoDiv,productInfoFigure);
        productInfoDiv.append(productPrice, productName);
        productInfoFigure.append(productImgCart);
        cardsContainer.append(productCard);
        
    
    
    }

}

renderProducts(productList);




