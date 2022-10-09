const menuEmail = document.getElementById('menu-email');
const desktopContextMenu = document.getElementById('desktop-menu');
const burguerButton = document.getElementById('burguer-menu');
const mobileMenu = document.getElementById('mobile-menu');
const cartDetail = document.getElementById('cart-detail');
const cartButton = document.getElementById('cart-button');
const cardContainer = document.getElementById('card-container');
const productViewDetail = document.getElementById('product-view-detail');
const productDetailClose = document.getElementById('product-detail-close');
const productDetailImage = document.getElementById('product-detail-image');
const productDetailName = document.getElementById('product-detail-name');
const productDetailPrice = document.getElementById('product-detail-price');

menuEmail.addEventListener('click', () => {
  desktopContextMenu.classList.toggle('inactive');

  cartDetail.classList.add('inactive');
  productViewDetail.classList.add('inactive');
});

burguerButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('inactive');

  cartDetail.classList.add('inactive');
  productViewDetail.classList.add('inactive');
});

cartButton.addEventListener('click', () => {
  cartDetail.classList.toggle('inactive');

  mobileMenu.classList.add('inactive');

  desktopContextMenu.classList.add('inactive');
  productViewDetail.classList.add('inactive');
});

productDetailClose.addEventListener('click', () => {
  productViewDetail.classList.add('inactive');
});

const productList = [
  {
    name: 'Bike',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    price: '100.00'
  },
  {
    name: 'MacBook Air',
    image: 'https://cdn.pocket-lint.com/r/s/970x/assets/images/161396-laptops-review-hands-on-macbook-air-review-image1-v2jzcb3rqd.jpg',
    price: '100.00'
  },
  {
    name: 'Tv',
    image: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2019/12/samsung-qled-q90r-analisis-opinion_52.jpg',
    price: '100.00'
  },
  {
    name: 'Tablet',
    image: 'https://i.pcmag.com/imagery/roundups/01lTcvK5fxqsTM696Gk6LmY-18..v1648740456.jpg',
    price: '100.00'
  },
];

/* <div class="product-card">
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
      </div> */

for (product of productList) {
  const name = product.name;
  const image = product.image;
  const price = product.price;

  const productCard = document.createElement('div');
  productCard.classList.add('product-card');
  const productImage = document.createElement('img');
  productImage.setAttribute('src', image);
  productCard.append(productImage);
  const productInfo = document.createElement('div');
  productInfo.classList.add('product-info');
  const productInfoDiv = document.createElement('div');
  const priceP = document.createElement('p');
  priceP.innerText = price;
  const productNameP = document.createElement('p');
  productNameP.innerText = name;
  productInfoDiv.append(priceP, productNameP);
  productInfo.append(productInfoDiv);
  const figureCart = document.createElement('figure');
  const cartImage = document.createElement('img');
  cartImage.setAttribute('src', './icons/bt_add_to_cart.svg');
  figureCart.append(cartImage);
  productInfo.append(figureCart);
  productCard.append(productInfo);
  cardContainer.append(productCard);

  productImage.addEventListener('click', function () {
    productViewDetail.classList.remove('inactive');
    cartDetail.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    desktopContextMenu.classList.add('inactive');

    productDetailName.innerText = name;
    productDetailImage.setAttribute('src', image);
    productDetailPrice.innerText = price;
  });
}