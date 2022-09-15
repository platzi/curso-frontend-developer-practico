const email = document.querySelector(".navbar-email");
const deskptopMenu = document.querySelector(".desktop-menu");
const hamMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menucarro = document.querySelector(".navbar-shopping-cart")
const shoppinhCartContainer = document.querySelector("#shoppinhCartContainer")
const cardsContainer= document.querySelector(".cards-container")

email.addEventListener("click", toggleDesktopMenu);
hamMenu.addEventListener("click", togglemobileMenu);
menucarro.addEventListener("click", togglemenuCar);

function toggleDesktopMenu () {

    const isasideOpen = shoppinhCartContainer.classList.contains("inactive");
    
    if (!isasideOpen) {
        shoppinhCartContainer.classList.add("inactive");
    }   
    deskptopMenu.classList.toggle("inactive");

}

function togglemobileMenu () {
    const isasideOpen = shoppinhCartContainer.classList.contains("inactive");
    
if (!isasideOpen) {
    shoppinhCartContainer.classList.add("inactive");
}
    mobileMenu.classList.toggle("inactive");
}


function togglemenuCar () {
    const ismobileMenuOpen = mobileMenu.classList.contains("inactive");
if (!ismobileMenuOpen) {
    mobileMenu.classList.add("inactive");
}
shoppinhCartContainer.classList.toggle("inactive");

}

const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'LightStick',
  price: 220,
  image: 'https://m.media-amazon.com/images/I/41NA2-yXUfL._SL500_.jpg',
});
productList.push({
  name: 'Compu',
  price: 620,
  image: 'https://www.tiendavargas.com/images/thumbs/0002152_computadora-hp-probook-440-i7-65004g1tw10_510.jpeg',
});

productList.push({
    name: 'Lightstick - Twice',
    price: 620,
    image: 'https://i.pinimg.com/564x/6c/6a/40/6c6a405637e37638579396d30e5ab4e8.jpg',
  });
  productList.push({
    name: 'Ajolote',
    price: 620,
    image: 'https://i.blogs.es/c48abe/ajolotes-minecraft/1366_2000.webp',
  });

function renderProducts(arr) {
    for (product of arr) {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
    
      // product= {name, price, image} -> product.image
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
