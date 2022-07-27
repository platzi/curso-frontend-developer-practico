const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cartIcon = document.querySelector('.navbar-shopping-cart')
const cartMenu = document.querySelector('.product-detail-cart');
const cardContainerProduct = document.querySelector('.cards-container')


navbarEmail.addEventListener('click', showDesktopMenu);
burguerMenu.addEventListener('click', showMobileMenu);
cartIcon.addEventListener('click', showCartMenu)

function showDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    cartMenu.classList.add('inactive')
};

function showMobileMenu() {
    mobileMenu.classList.toggle('inactive');
    cartMenu.classList.add('inactive')
};

function showCartMenu() {
    cartMenu.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
}


const productList = [];
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

function renderProducts(array) {
for (product of array) {
const cardProduct = `<div class="product-card">
<img src=${product.image} alt="">
<div class="product-info">
  <div>
    <p>$${product.price}</p>
    <p>${product.name}</p>
  </div>
  <figure>
    <img src="./icons/bt_add_to_cart.svg" alt="">
  </figure>
</div>
</div> `
cardContainerProduct.innerHTML += cardProduct;
}
}

renderProducts(productList);

/*
function renderProducts(array) {

for (product of array) {
const productCard = document.createElement('div');
productCard.classList.add('product-card');

const productImg = document.createElement('img');
productImg.setAttribute('src', product.image )

productInfo = document.createElement('div');
productInfo.classList.add('product-info');

productInfoDiv = document.createElement('div');


productPrice = document.createElement('p');
productPrice.innerText = product.price;

productName = document.createElement('p');
productName.innerText = product.name;


productFigure = document.createElement('figure')
productFigureImg = document.createElement('img')
productFigureImg.setAttribute('src', './icons/bt_add_to_cart.svg')

productFigure.append(productFigureImg);
productInfoDiv.append(productPrice, productName);

productInfo.append(productInfoDiv, productFigure);

productCard.append(productImg,productInfo);
cardContainerProduct.append(productCard);

} 
}
renderProducts(productList)

*/

