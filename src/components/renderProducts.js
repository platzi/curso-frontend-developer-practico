import { getProducts } from "./getProducts.js";
import { openProductDetail } from "./openProductDetail.js";

const renderProducts = async () => {
  const cardsContainer = document.querySelector('.cards-container')
  const data = await getProducts()

  data.forEach(product => {
  const productCard = document.createElement('div');
  productCard.classList.add('product-card');

  const productImg = document.createElement('img');
  productImg.setAttribute('src', product.images[0]);
  productImg.addEventListener('click', openProductDetail)

  const productInfo = document.createElement('div');
  productInfo.classList.add('product-info_list');

  const productInfoDiv = document.createElement('div');

  const productPrice = document.createElement('p');
  productPrice.innerText = '$' + product.price;
  const productName = document.createElement('p');
  productName.innerText = product.title;

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

  cardsContainer.appendChild(productCard);
 })

}

export {renderProducts}