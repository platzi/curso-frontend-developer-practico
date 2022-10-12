const menuEmail = document.querySelector(`.navbar-email`);
const menuHamIcon = document.querySelector(`.menu`);
const menuCarritoIcon = document.querySelector(`.navbar-shopping-cart`);
const desktopMenu = document.querySelector(`.desktop-menu`);
const mobileMenu = document.querySelector(`.mobile-menu`);
const aside = document.querySelector(`.product-detail`);
const cardsContainer = document.querySelector(`.cards-container`);

menuEmail.addEventListener(`click`, toggleDesktopMenu);
menuHamIcon.addEventListener(`click`, toggleMobileMenu);
menuCarritoIcon.addEventListener(`click`, toggleCarritoAside);

function toggleDesktopMenu() {
  const isAsideClosed = aside.classList.contains(`inactive`);

  if (!isAsideClosed) {
    aside.classList.add(`inactive`);
  }

  desktopMenu.classList.toggle(`inactive`);
}

function toggleMobileMenu() {
  const isAsideClosed = aside.classList.contains(`inactive`);

  if (!isAsideClosed) {
    aside.classList.add(`inactive`);
  }
  mobileMenu.classList.toggle(`inactive`);
}

function toggleCarritoAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains(`inactive`);

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add(`inactive`);
  }
  aside.classList.toggle(`inactive`);
}

const productList = [];
productList.push({
  name: `Bike`,
  price: 120,
  image:"https://images.pexels.com/photos/5446297/pexels-photo-5446297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
  name: `tennis`,
  price: 80,
  image:`https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
});

productList.push({
  name: `consola`,
  price: 380,
  image: `https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
});


for (product of productList) {
  /*para crear archivos html desde js crateElement*/
  const productCard = document.createElement(`div`);
  productCard.classList.add(`product-card`);
  //product= {name,price,image} --> product.image//
  const productImg = document.createElement(`productImg`);
  productImg.setAttribute(`src`, product.image);

  const productInfo = document.createElement(`div`);
  productInfo.classList.add(`product-info`);

  const producInfoDiv = document.createElement(`div`);

  const productPrice = document.createElement(`p`);
  productPrice.innerText = `$` + product.price;
  const productName = document.createElement(`p`);
  productName.innerText = product.name;

  producInfoDiv.appendChild(productPrice);
  producInfoDiv.appendChild(productName);

  const productInfoFigure = document.createElement(`figure`);
  const productImgCard = document.createElement(`img`);
  productImgCard.setAttribute(`src`, `./icons/bt_add_to_cart.svg`);

  productInfoFigure.appendChild(productImgCard);

  productInfo.appendChild(producInfoDiv);
  productInfo.appendChild(productInfoFigure);

  productCard.appendChild(productImg);
  productCard.appendChild(productInfo);

  cardsContainer.appendChild(productCard);
}
