

<<<<<<< HEAD
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const productDetailCloseIcon = document.querySelector(".product-detail-close");

const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const cardsContainer = document.querySelector(".cards-container");
const productDetailContainer = document.querySelector("#productDetail");

menuEmail.addEventListener("click", toggleDesktopMenu);
burguerIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside);

function toggleDesktopMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains("inactive");

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add("inactive");
  }

=======
const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close')
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu() {
>>>>>>> b70b87dc6fbbdaebbe3ba21207339ea81f7dad33
  desktopMenu.classList.toggle("inactive");
  shoppingCartContainer.classList.add("inactive");
  productDetailContainer.classList.add("inactive");

  // const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

  // if (!isAsideClosed) {
  //   shoppingCartContainer.classList.add('inactive');
  // }
  
  // desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
<<<<<<< HEAD
  const isAsideClosed = shoppingCartContainer.classList.contains("inactive");

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add("inactive");
  }

  closeProductDetailAside();

=======
>>>>>>> b70b87dc6fbbdaebbe3ba21207339ea81f7dad33
  mobileMenu.classList.toggle("inactive");
  shoppingCartContainer.classList.add("inactive");
  productDetailContainer.classList.add("inactive");


  // const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

  // if (!isAsideClosed) {
  //   shoppingCartContainer.classList.add('inactive'); 
  // }

  // closeProductDetailAside();
  
  // mobileMenu.classList.toggle('inactive');
}

<<<<<<< HEAD
// function showMobileMenu() {
//   shoppingCartContainer.classList.add("inactive");
//   mobileMenu.classList.toggle("inactive");
// }

function toggleCarritoAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }

  const isProductDetailClosed =
    productDetailContainer.classList.contains("inactive");

  if (!isProductDetailClosed) {
    productDetailContainer.classList.add("inactive");
  }

  shoppingCartContainer.classList.toggle("inactive");
}

// function showMyOrder() {
//   productDetailContainer.classList.add("inactive");
//   mobileMenu.classList.add("inactive");
//   shoppingCartContainer.classList.toggle("inactive");
//   desktopMenu.classList.add("inactive");
// }

function openProductDetailAside() {
  shoppingCartContainer.classList.add("inactive");
  productDetailContainer.classList.remove("inactive");
}

function closeProductDetailAside() {
  productDetailContainer.classList.add("inactive");
=======
function toggleCarritoAside() {
  shoppingCartContainer.classList.toggle("inactive");
  mobileMenu.classList.add("inactive");
  desktopMenu.classList.add("inactive");
  productDetailContainer.classList.add("inactive");

  // const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  
  // if (!isMobileMenuClosed) {
  //   mobileMenu.classList.add('inactive');
  // }

  // const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
  
  // if (!isProductDetailClosed) {
  //   productDetailContainer.classList.add('inactive'); 
  // }
  
  // shoppingCartContainer.classList.toggle('inactive');
>>>>>>> b70b87dc6fbbdaebbe3ba21207339ea81f7dad33
}

function openProductDetailAside() {
  shoppingCartContainer.classList.add('inactive');
  productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside() {
  productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
<<<<<<< HEAD
  name: "Books",
  price: 20,
  image:
    "https://images.pexels.com/photos/768125/pexels-photo-768125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
=======
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Laptop',
  price: 1220,
  image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?cs=srgb&dl=pexels-karsten-madsen-18105.jpg&fm=jpg',
>>>>>>> b70b87dc6fbbdaebbe3ba21207339ea81f7dad33
});
productList.push({
  name: 'Celular',
  price: 620,
  image: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=800',
});
<<<<<<< HEAD

productList.push({
  name: "Watch",
=======
productList.push ({
  name:'Sunglasses',
>>>>>>> b70b87dc6fbbdaebbe3ba21207339ea81f7dad33
  price: 350,
  image: 'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg',
});

function renderProducts(arr) {
  for (product of arr) {
<<<<<<< HEAD
    const productCard = document.createElement("article");
    productCard.classList.add("product-card");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);
    productImg.addEventListener("click", openProductDetailAside);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;

    const productName = document.createElement("p");
=======
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    // product= {name, price, image} -> product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openProductDetailAside);
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv = document.createElement('div');
  
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
>>>>>>> b70b87dc6fbbdaebbe3ba21207339ea81f7dad33
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
  
    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);
