document.addEventListener("DOMContentLoaded", () => {
  function toggleDesktopMenu() {
    const isMobileMenuOpen = mobileMenu.classList.contains("inactive");
    const isShoppingCar = shoppingCar.classList.contains("inactive");
    if (!isShoppingCar) {
      shoppingCar();
    }
    if (!isMobileMenuOpen) {
      toggleMobileMenu();
    }
    desktopMenu.classList.toggle("inactive");
  }

  function toggleMobileMenu() {
    const isShoppingCar = shoppingCar.classList.contains("inactive");
    const isDesktopMenuOpen = desktopMenu.classList.contains("inactive");
    if (!isDesktopMenuOpen) {
      toggleDesktopMenu();
    }
    if (!isShoppingCar) {
      toggleShoppingCar();
    }
    mobileMenu.classList.toggle("inactive");
  }

  function toggleShoppingCar() {
    const isMobileMenuOpen = mobileMenu.classList.contains("inactive");
    const isDesktopMenuOpen = desktopMenu.classList.contains("inactive");
    if (!isDesktopMenuOpen) {
      toggleDesktopMenu();
    }
    if (!isMobileMenuOpen) {
      toggleMobileMenu();
    }
    shoppingCar.classList.toggle("inactive");
  }

  // Desktop
  const desktopMenu = document.querySelector(".desktop-menu");
  const navEmail = document.querySelector(".navbar-email");
  navEmail.addEventListener("click", toggleDesktopMenu);
  desktopMenu.addEventListener("mouseleave", toggleDesktopMenu);

  // Mobile
  const mobileMenu = document.querySelector(".mobile-menu");
  const mobileMenuButton = document.querySelector("#mobile-menu-button");
  mobileMenuButton.addEventListener("click", toggleMobileMenu);
  mobileMenuButton.addEventListener("click", toggleMobileMenu);

  // Shopping Car
  const shoppingCar = document.querySelector("#shoppingCar");
  const shoppingCarBottom = document.querySelector(".navbar-shopping-cart");
  shoppingCarBottom.addEventListener("click", toggleShoppingCar);
  shoppingCarBottom.addEventListener("click", toggleShoppingCar);

  // Adding cards container;
  const html = `
  <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
  <div class="product-info">
    <div>
      <p>$120,00</p>
      <p>Bike</p>
    </div>
    <figure>
      <img src="./icons/bt_add_to_cart.svg" alt="">
    </figure>
  </div>`;
  const product1 = {
    price: 120,
    name: "Bike",
    imgSource: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    figure: "./icons/bt_add_to_cart.svg"
  }
  const product2 = {...product1};
  product2.name = 'MotorCycle'
  product2.price = 2000;
  const products = new Array(10).fill(product1);
  products.forEach((item, index, array) => {
    if (index % 2 == 0) {
        array[index] = product2;
    }
  });
  const cardsContainer = document.querySelector(".cards-container"); 
  function renderProducts(arr) {
    arr.forEach((item) => {
        const div = document.createElement('div');
        const price = document.createElement('p');
        const nestedDiv = document.createElement('div');
        const name = document.createElement('p');
        const img = document.createElement('img');
        const figure = document.createElement('figure');
        const nestedImage = document.createElement('img');
        const twoNestedDiv = document.createElement('div');
    
    
        div.classList.add('product-card');
        nestedDiv.classList.add('product-info');
        img.setAttribute('src', item.imgSource);
        img.addEventListener('click', openProductDetail);
        price.textContent = `$${item.price}`
        name.textContent = item.name;
        nestedImage.setAttribute('src', item.figure);
        
       twoNestedDiv.append(name, price)
        nestedDiv.append(twoNestedDiv, figure);
        div.append(img, nestedDiv);
        cardsContainer.appendChild(div);
      }) 
  } 

  renderProducts(products)

});
