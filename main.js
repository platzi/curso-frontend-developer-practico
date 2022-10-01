const navBarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuHamIcon = document.querySelector('.menu');
const orderListShopping = document.querySelector('.product-detail');
const iconCartshopping = document.querySelector('.navbar-shopping-cart');
const mainContainer = document.querySelector('.main__container');
const cardsContainer = document.querySelector('.cards-container');

let productList = [];

navBarEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
iconCartshopping.addEventListener('click', toggleIconCartShopping);
mainContainer.addEventListener('click', closeMenusClick);

function toggleDesktopMenu() {
  orderListShopping.classList.add('inactive');
  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  orderListShopping.classList.add('inactive');
  mobileMenu.classList.toggle('inactive');
}

function toggleIconCartShopping() {
  desktopMenu.classList.add('inactive');
  mobileMenu.classList.add('inactive');
  orderListShopping.classList.toggle('inactive');
}

function closeMenusClick() {
  desktopMenu.classList.add('inactive');
}


productList.push({
  name: 'Bike',
  price: 1200,
  image:
    'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Bola',
  price: 70,
  image: 'https://images.pexels.com/photos/3723233/pexels-photo-3723233.jpeg?auto=compress&cs=tinysrgb&w=600',
});
productList.push({
  name: 'scooter',
  price: 2500,
  image:
    'https://images.pexels.com/photos/209841/pexels-photo-209841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Celular',
    price: 3200,
    image:
      'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  });

function renderProducts() {
    for (product of productList) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productDetail = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        const productFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productFigure.appendChild(productImgCart);
    
        productDetail.appendChild(productPrice);
        productDetail.appendChild(productName);
    
        productInfo.appendChild(productDetail);
        productInfo.appendChild(productFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);

