const menuEmail = document.querySelector(".navbar-email");
const menuDesktop = document.querySelector(".desktop-menu");
const menuCarrito = document.querySelector(".navbar-shopping-cart");
const menuSmallIcon = document.querySelector(".menuSmall");
const menuMobile = document.querySelector(".mobile-menu");
const aside = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");
const mainContainer = document.querySelector('.main-container');

menuEmail.addEventListener("click", mostrarMenu);
menuSmallIcon.addEventListener("click", mostrarMenuMobile);
menuCarrito.addEventListener("click", mostrarMenuCarrito);

function mostrarMenu() {
  const isMenuCarritoClosed = aside.classList.contains("inactive");

  if (!isMenuCarritoClosed) {
    aside.classList.add("inactive");
  }
  menuDesktop.classList.toggle("inactive");
}

function mostrarMenuMobile() {
  const isMenuCarritoClosed = aside.classList.contains("inactive");

  if (!isMenuCarritoClosed) {
    aside.classList.add("inactive");
  }
  menuMobile.classList.toggle("inactive");
}

function mostrarMenuCarrito() {
  const isMobileMenuClosed = menuMobile.classList.contains("inactive");
  const isDesktopMenuClosed = menuDesktop.classList.contains("inactive");

  if (!isMobileMenuClosed) {
    menuMobile.classList.add("inactive");
  }

    if (!isDesktopMenuClosed) {
      menuDesktop.classList.add("inactive");
  }
  aside.classList.toggle("inactive");
}

const producList = [];
producList.push({
  name:'Bike',
  price:'120',
  image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
producList.push({
  name:'Pantalla',
  price:'220',
  image:'https://images.pexels.com/photos/1714204/pexels-photo-1714204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
producList.push({
  name:'Compu',
  price:'620',
  image:'https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});

/*
<div class="product-card">
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
    </div>
  </div> */


  function renderProducts(arr) {
    for (product of arr) {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
  
      const productImg = document.createElement('img');
      productImg.setAttribute('src', product.image);
  
      const productInfo = document.createElement('div');
      productInfo.classList.add('product-info');
  
      const productInfoDiv = document.createElement('div');
  
      const productPrice = document.createElement('p');
      productPrice.innerText = '$' + product.price;
      const productName = document.createElement('p');
      productName.innerText = product.name;
  
      productInfoDiv.appendChild(productPrice);
      productInfoDiv.appendChild(productName);
  
      const productInfofigure = document.createElement('figure');
      const figureImgCart = document.createElement('img');
      figureImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
  
      productInfofigure.appendChild(figureImgCart);
  
      productInfo.appendChild(productInfoDiv);
      productInfo.appendChild(productInfofigure);
  
      productCard.appendChild(productImg);
      productCard.appendChild(productInfo);
  
      cardsContainer.appendChild(productCard);
  
    }
  }

  renderProducts(producList);