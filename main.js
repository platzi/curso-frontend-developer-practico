/*The main reason of structuring the code in functions was purely for didactic purposes, this is like a test field to learn the basic concepts of 
front-end with javascript.

Probably encapsulating all theses funcitonalities in a function is not the best strategy since the global scope of the listeners would be a 
better and easier approach but it was also a first attempt to create reusable functions that can be applied to different elements.

The main purpose is testing all the different ways to create, access and modify HTML elements and its attributes, classes, etc to create and change
components and interactions between them.
*/
////////EMAIL MENU///////
function emailMenu() {
  let desktopMenu = document.querySelector(".desktop-menu");
  let navbarRight = document.querySelector(".navbar-right");
  let cartIcon = document.querySelector(".navbar-shopping-cart");

  function openMenu() {
    desktopMenu.setAttribute("class", "desktop-menu");
  }

  function hideMenu() {
    desktopMenu.setAttribute("class", "desktop-menu inactive");
  }

  //screenSize check alternatives-> window.innerWidth // window.matchMedia("(max-width: 770px)").matches //  $(window).width()
  function screenSize() {
    if (document.documentElement.clientWidth < 770) {
      desktopMenu.style.visibility = "hidden";
    } else {
      desktopMenu.style.visibility = "visible";
    }
  }
  navbarRight.addEventListener("mouseenter", openMenu);
  navbarRight.addEventListener("mouseleave", hideMenu);
  desktopMenu.addEventListener("mouseenter", openMenu);
  desktopMenu.addEventListener("mouseleave", hideMenu);
  cartIcon.addEventListener("click", hideMenu);
  cartIcon.addEventListener("mouseenter", hideMenu);
  window.addEventListener("load", screenSize);
  window.addEventListener("resize", screenSize);
  /*The last two eventListeners are in charge of not showing the desktop-menu if the size of the display is mobile.
There is a need for this because of how the HTML is made, because the elements li didnt work well with mouseover/mouseleave 
and i had to choose select the whole div instead to make it work. That made that the shopping cart element shows the desktop
 menu in mobile version where its not suppose to do that, because cart icon is intended to open a menu when clicking.*/
}

////////MOBILE MENU DISPLAY////////
function mobileHamburgerMenu() {
  const iconMenu = document.querySelector(".menu");
  const mobileMenu = document.querySelector(".mobile-menu");

  function toggleMobileMenu() {
    mobileMenu.classList.toggle("inactive");
  }
  //The menu will close if user clicks anything but the menu.
  function handleDocumentClick(event) {
    if (
      !mobileMenu.contains(event.target) &&
      !iconMenu.contains(event.target)
    ) {
      mobileMenu.classList.add("inactive");
    }
  }

  iconMenu.addEventListener("click", toggleMobileMenu);
  document.addEventListener("click", handleDocumentClick);
}

////////CART ICON////////
function cartIcon() {
  let shoppingCartIcon = document.querySelector(".navbar-shopping-cart");
  let shoppingCartMenu = document.querySelector(".product-detail");
  let desktopMenu = document.querySelector(".desktop-menu");

  function showShoppingMenu() {
    shoppingCartMenu.classList.toggle("inactive");
    //For mobile width desktop-menu will always be hidden
    if (
      shoppingCartMenu.classList.contains("inactive") &&
      document.documentElement.clientWidth > 770
    ) {
      desktopMenu.style.visibility = "visible";
    } else {
      desktopMenu.style.visibility = "hidden";
    }
  }

  function handleDocumentClick(event) {
    const isShoppingCartMenuClicked = shoppingCartMenu.contains(event.target);
    const isShoppingCartIconClicked = shoppingCartIcon.contains(event.target);
    const isDocumentWideEnough = document.documentElement.clientWidth > 770;

    if (!isShoppingCartMenuClicked && !isShoppingCartIconClicked) {
      shoppingCartMenu.classList.add("inactive");
    }

    if (
      !isShoppingCartMenuClicked &&
      !isShoppingCartIconClicked &&
      isDocumentWideEnough
    ) {
      desktopMenu.style.visibility = "visible";
    }
  }

  shoppingCartIcon.addEventListener("click", showShoppingMenu);
  document.addEventListener("click", handleDocumentClick);
}

emailMenu();
mobileHamburgerMenu();
cartIcon();

//This is where I should query a database to get a resultSet/row/table of results that match an object
//If this were java(of strongly typed lang), a class with all the specific data types would be necessary
//to store all the columns of the database into each object.
const productList = [];
productList.push(
  {
    id: 0,
    category: "roller",
    name: "Rainbow Five",
    price: 99.95,
    urlImg:
      "https://img.freepik.com/free-photo/cool-roller-skate-still-life_23-2150304799.jpg?t=st=1687778130~exp=1687778730~hmac=241b2465aa354253729ebfd64ce065b2c5f8d329e07fa8a3784ef3ca49f52e52&w=740",
    description:
      "Experience the vibrant joy of skating with our Rainbow Five roller skates. These sleek and stylish skates feature a colorful design that will make you stand out on the rink. With smooth-rolling wheels and a comfortable fit, these skates are perfect for beginners and experienced skaters alike. Let the rainbow guide your every glide!",
  },

  {
    id: 1,
    category: "roller",
    name: "Rainbow Six",
    price: 119.95,
    urlImg:
      "https://img.freepik.com/free-photo/cool-roller-skate-still-life_23-2150304807.jpg?t=st=1687772830~exp=1687773430~hmac=987166a4afcbe72f190a078bd4ff7f9a03a5a025041a361ce2ae9c1e00435598&w=740",
    description:
      "Take your skating game to the next level with our Rainbow Six roller skates. These high-performance skates combine style and functionality for an unforgettable skating experience. The eye-catching rainbow design will turn heads as you zoom by, while ensuring a smooth ride and comfortable fit. Get ready to shine on the rink with Rainbow Six!",
  },
  {
    id: 2,
    category: "roller",
    name: "Pink Future",
    price: 132.95,
    urlImg:
      "https://img.freepik.com/free-photo/cool-roller-skate-still-life_23-2150304791.jpg?t=st=1687772878~exp=1687773478~hmac=ab016b44dddeb854d4e4b0c5ccda4dd473c7fe40c6c64ba3da6485f16679b572&w=740",
    description:
      "Step into the future of skating with our Pink Future roller skates. These cutting-edge skates not only deliver a sleek and stylish look but also provide superior performance. The pink color exudes confidence and dynamism, while offering stability and control. Embrace the future of skating and make a bold statement on the rink!",
  },
  {
    id: 3,
    category: "roller",
    name: "Purple Future",
    price: 159.99,
    urlImg:
      "https://img.freepik.com/free-photo/cool-roller-skate-still-life_23-2150304795.jpg?t=st=1687772953~exp=1687773553~hmac=8d26c5da92d5c2c656613bd44a485387f18006168f64c861c845c267fac656ee&w=740",
    description:
      "Unleash your inner skater with our Purple Future roller skates. Designed for those who crave both style and performance, these skates feature a stunning purple color that will make you the center of attention. With a smooth ride and durable construction, these skates are built to last. Get ready to skate into the future with Purple Future!",
  },
  {
    id: 4,
    category: "roller",
    name: "Blue classic",
    price: 99.99,
    urlImg:
      "https://img.freepik.com/free-photo/cool-roller-skate-still-life_23-2150304805.jpg?t=st=1687773119~exp=1687773719~hmac=f0bba25cb1566af0070e23d5860e4d3714be0603c64e13d9fbf8a1e86c343c27&w=740",
    description:
      "Rediscover the timeless charm of skating with our Blue Classic roller skates. These skates embrace the nostalgia of classic roller skating with a modern twist. The sleek blue design adds a touch of elegance, while providing stability and maneuverability on the rink. Whether you're a seasoned skater or a beginner, these skates will bring joy to your every stride.",
  },
  {
    id: 5,
    category: "roller",
    name: "Cream Classic",
    price: 89.95,
    urlImg:
      "https://img.freepik.com/free-photo/cool-roller-skate-still-life_23-2150304814.jpg?t=st=1687773185~exp=1687773785~hmac=0a8867a1d7398dc826aed29a7a88a8e5ab2a04692d8d710df466bf56dc71581b&w=740",
    description:
      "Experience the epitome of elegance with our Cream Classic roller skates. These skates combine a vintage aesthetic with modern comfort, creating a perfect blend of style and functionality. The creamy color exudes sophistication, while ensuring a smooth and enjoyable ride. Step into these skates and let your inner grace shine on the rink!",
  },
  {
    id: 6,
    category: "roller",
    name: "Cream Classic",
    price: 89.95,
    urlImg:
      "https://img.freepik.com/free-photo/cool-roller-skate-still-life_23-2150304814.jpg?t=st=1687773185~exp=1687773785~hmac=0a8867a1d7398dc826aed29a7a88a8e5ab2a04692d8d710df466bf56dc71581b&w=740",
    description:
      "Experience the epitome of elegance with our Cream Classic roller skates. These skates combine a vintage aesthetic with modern comfort, creating a perfect blend of style and functionality. The creamy color exudes sophistication, while ensuring a smooth and enjoyable ride. Step into these skates and let your inner grace shine on the rink!",
  },
  ///////////////////
  {
    id: 7,
    category: "skate",
    name: "Cream Classic",
    price: 89.95,
    urlImg:
      "https://img.freepik.com/free-photo/cool-roller-skate-still-life_23-2150304814.jpg?t=st=1687773185~exp=1687773785~hmac=0a8867a1d7398dc826aed29a7a88a8e5ab2a04692d8d710df466bf56dc71581b&w=740",
    description:
      "Experience the epitome of elegance with our Cream Classic roller skates. These skates combine a vintage aesthetic with modern comfort, creating a perfect blend of style and functionality. The creamy color exudes sophistication, while ensuring a smooth and enjoyable ride. Step into these skates and let your inner grace shine on the rink!",
  },
  {
    id: 8,
    category: "surfskate",
    name: "Cream Classic",
    price: 89.95,
    urlImg:
      "https://img.freepik.com/free-photo/cool-roller-skate-still-life_23-2150304814.jpg?t=st=1687773185~exp=1687773785~hmac=0a8867a1d7398dc826aed29a7a88a8e5ab2a04692d8d710df466bf56dc71581b&w=740",
    description:
      "Experience the epitome of elegance with our Cream Classic roller skates. These skates combine a vintage aesthetic with modern comfort, creating a perfect blend of style and functionality. The creamy color exudes sophistication, while ensuring a smooth and enjoyable ride. Step into these skates and let your inner grace shine on the rink!",
  }
);
//Making this code a reusable function will be a closer approach to a professional js-doc or practice.
//The parameter would be the array fetched from a database or another doc.

/////////////MODAL CREATOR//////////////
const body = document.body;

for (product of productList) {
  const overlay = document.createElement("div");
  overlay.id = "overlay" + product.id;
  overlay.classList.add("overlay", "inactive", "active");

  const productModal = document.createElement("aside");
  productModal.id = "modal";
  productModal.classList.add("product-modal", "active");

  const productModalClose = document.createElement("div");
  productModalClose.classList.add("product-modal-close");

  const closeButton = document.createElement("img");
  closeButton.src = "./icons/icon_close.png";
  closeButton.alt = "close";

  const productImage = document.createElement("img");
  productImage.src = product.urlImg;
  productImage.alt = "bike";

  const productInfoModal = document.createElement("div");
  productInfoModal.classList.add("product-info-modal");

  const productPrice = document.createElement("p");
  productPrice.textContent = product.price;

  const productName = document.createElement("p");
  productName.textContent = product.name;

  const productDescription = document.createElement("p");
  productDescription.textContent = product.description;

  const addToCartButton = document.createElement("button");
  addToCartButton.classList.add("primary-button", "add-to-cart-button");

  const cartIcon = document.createElement("img");
  cartIcon.src = "./icons/bt_add_to_cart.svg";
  cartIcon.alt = "add to cart";

  const addToCartText = document.createTextNode("Add to cart");

  // Adding elements into the proper container.
  productModalClose.appendChild(closeButton);
  addToCartButton.appendChild(cartIcon);
  addToCartButton.appendChild(addToCartText);

  productInfoModal.appendChild(productPrice);
  productInfoModal.appendChild(productName);
  productInfoModal.appendChild(productDescription);
  productInfoModal.appendChild(addToCartButton);

  productModal.appendChild(productModalClose);
  productModal.appendChild(productImage);
  productModal.appendChild(productInfoModal);

  overlay.appendChild(productModal);

  // Adding the HTML block inside the main container
  body.appendChild(overlay);

  //Closes modal if exit buttom clicked
  productModalClose.addEventListener("click", () => {
    overlay.classList.add("inactive");
  });

  //Closes modal if user clicks outside modal
  overlay.addEventListener("click", (event) => {
    event.target === overlay ? overlay.classList.add("inactive") : null;
  });
}

const container = document.getElementById("container"); // El contenedor principal que rodea a los elementos generados

//CARD CREATOR
for (product of productList) {
  const cardsContainer = document.querySelector(".cards-container");

  const productCard = document.createElement("div");
  productCard.classList.add("product-card");
  productCard.setAttribute("category", product.category);

  const productImg = document.createElement("img");
  productImg.setAttribute("src", product.urlImg);
  productImg.setAttribute("alt", "Ups, error loading product image.");
  productImg.setAttribute("id", product.id);

  const productData = document.createElement("div");
  productData.classList.add("product-info");

  const productDataChild = document.createElement("div");

  const productPrice = document.createElement("p");
  productPrice.innerText = "$" + product.price;

  const productName = document.createElement("p");
  productName.innerText = product.name;

  const productIconFigure = document.createElement("figure");
  const productIconImg = document.createElement("img");
  productIconImg.setAttribute("src", "./icons/bt_add_to_cart.svg");
  productIconImg.setAttribute("alt", "Cart Icon");

  //
  productData.append(productDataChild, productIconFigure);
  productDataChild.append(productPrice, productName);
  productIconFigure.append(productIconImg);
  productCard.append(productImg, productData);
  cardsContainer.append(productCard);

  productImg.addEventListener("click", () => {
    const overlayId = document.querySelector("#overlay" + productImg.id);
    overlayId.classList.remove("inactive");
  });
}

///////////HIDING AND SHOWING PRODUCT-CARDS BY CATEGORY///////////
const allButton = document.querySelector("#all");
const skatesButton = document.querySelector("#skate");
const surfskatesButton = document.querySelector("#surfskate");
const rollersButton = document.querySelector("#roller");
const othersButton = document.querySelector("#other");

function showProductsByCategory(category) {
  const productCards = document.querySelectorAll(".product-card");

  productCards.forEach((card) => {
    const productCategory = card.getAttribute("category");

    if (productCategory !== category && category !== "all") {
      card.classList.add("inactive");
    } else if (category == "all") {
      card.classList.remove("inactive");
    } else {
      card.classList.remove("inactive");
    }
  });
}

allButton.addEventListener("click", () => {
  showProductsByCategory("all");
});

skatesButton.addEventListener("click", () => {
  showProductsByCategory("skate");
});

surfskatesButton.addEventListener("click", () => {
  showProductsByCategory("surfskate");
});

rollersButton.addEventListener("click", () => {
  showProductsByCategory("roller");
});

othersButton.addEventListener("click", () => {
  showProductsByCategory("others");
});

//////////EXAMPLE OF REUSABLE FUNCTION:
/*
function toggleMenu(menuElement, triggerElement) {
	const menu = document.querySelector(menuElement);
	const trigger = document.querySelector(triggerElement);
  
	const handleMouseEnter = function () {
	  menu.setAttribute("class", "desktop-menu");
	};
  
	const handleMouseLeave = function () {
	  menu.setAttribute("class", "desktop-menu inactive");
	};
  
	trigger.addEventListener('mouseenter', handleMouseEnter);
	trigger.addEventListener('mouseleave', handleMouseLeave);
	menu.addEventListener('mouseenter', handleMouseEnter);
	menu.addEventListener('mouseleave', handleMouseLeave);
  }
  
  // Ejemplo de uso
  toggleMenu('.desktop-menu', '.navbar-right');
  */
