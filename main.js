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
  let navbarEmail = document.querySelector(".navbar-email");
  let navbarRight = document.querySelector(".navbar-right");
  let cartIcon = document.querySelector(".navbar-shopping-cart");
  let mainContainer = document.querySelector(".main-container");
  let menuOpen = false;

  function openMenu() {
    desktopMenu.setAttribute("class", "desktop-menu");
    menuOpen = true;
  }

  function hideMenu() {
    if (menuOpen) {
      desktopMenu.setAttribute("class", "desktop-menu inactive");
      menuOpen = false;
    }
  }

  //screenSize check alternatives-> window.innerWidth // window.matchMedia("(max-width: 770px)").matches //  $(window).width()
  function screenSize() {
    if (document.documentElement.clientWidth < 770) {
      desktopMenu.style.visibility = "hidden";
    } else {
      desktopMenu.style.visibility = "visible";
    }
  }

  navbarEmail.addEventListener("click", () => {
    if (menuOpen) {
      hideMenu();
    } else {
      openMenu();
    }
  });
  cartIcon.addEventListener("click", hideMenu);
  cartIcon.addEventListener("mouseenter", hideMenu);

  mainContainer.addEventListener("mouseenter", hideMenu);

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
      "Experience the epitome of elegance with our Cream Classic roller skates. These skates combine a vintage aesthetic with modern comfort, creating a perfect blend of style and functionality. The creamy color exudes sophistication, while ensuring a smooth and enjoyable ride. Step into these skates and let your inner grace shine on the rink.",
  },
  ///////////////////
  {
    id: 6,
    category: "skate",
    name: "Legacy Bird",
    price: 68.99,
    urlImg:
      "https://img.freepik.com/premium-photo/pair-skateboards-with-black-crow-front_900370-12480.jpg?w=826",
    description:
      "Experience timeless appeal and optimal performance with our Retro Cruiser skateboard. The sleek black color and iconic crow graphic give it a distinctive look. Whether you're a beginner or a seasoned rider, this skateboard guarantees a smooth and enjoyable experience. Carve your own path with style.",
  },
  {
    id: 7,
    category: "skate",
    name: "Stormtrooper Helmet",
    price: 99.95,
    urlImg:
      "https://img.freepik.com/premium-photo/two-skateboards-with-one-that-has-storm-trooper-it_900370-12467.jpg?w=740",
    description:
      "Unleash the force of style with our Galactic Rider skateboard. Inspired by the legendary Stormtrooper helmet, this skateboard features a sleek black and white design with an iconic graphic. Join the ranks of the skateboarding elite and showcase your individuality with this extraordinary skateboard!",
  },
  {
    id: 8,
    category: "skate",
    name: "Skull Mex Skate",
    price: 89.95,
    urlImg:
      "https://img.freepik.com/premium-photo/two-skateboards-with-skulls-them-one-which-has-skull-it_900370-12483.jpg?w=740",
    description:
      "Dominate the streets with Mexican flow. Embrace the rebellious spirit and unleash your inner strength with this edgy ride. The captivating skull graphic adds a touch of attitude. Whether grinding rails or mastering tricks, the Skull will accompany you on your journey to skateboarding greatness!",
  },
  {
    id: 9,
    category: "skate",
    name: "Ghilbli Style",
    price: 59.95,
    urlImg:
      "https://img.freepik.com/premium-photo/two-skateboards-with-picture-giant-monster-bottom_900370-12466.jpg?w=740",
    description:
      "Embark on an anime-inspired adventure with our Anime Cruiser skateboard. Featuring captivating artwork and vibrant colors, this skateboard brings the magic of Ghibli films to life. With its smooth ride and sturdy construction, it's perfect for both beginners and anime enthusiasts. Let your imagination soar with this eye-catching skateboard.",
  },
  {
    id: 10,
    category: "skate",
    name: "Dragon Ball Flip",
    price: 79.95,
    urlImg:
      "https://img.freepik.com/premium-photo/skateboard-with-cartoon-image-woman-with-green-hair_900370-12470.jpg?w=740",
    description:
      "Unleash your inner power with our Super Saiyan Shredder skateboard. Featuring a captivating design inspired by anime, this skateboard is perfect for expressing your style. Whether you're cruising or performing tricks, it delivers an exceptional ride. Embrace the energy and stand out from the crowd with this powerful skateboard",
  },
  {
    id: 11,
    category: "surfskate",
    name: "Black PantherY",
    price: 129.95,
    urlImg:
      "https://yowsurf.com/wp-content/uploads/yow-medina-panthera-33.5-surfskate-bottom-scaled.jpg",
    description:
      "Discover the vibrant world of surf skating with our Colorful Stars board. Its eye-catching design features a burst of colorful stars that will turn heads as you ride. Experience the perfect combination of style and performance, allowing you to carve and cruise with ease. Get ready to shine on the streets and elevate your surf skating game with this captivating board!",
  },
  {
    id: 12,
    category: "surfskate",
    name: "Classic Wood",
    price: 139.95,
    urlImg:
      "https://yowsurf.com/wp-content/uploads/yow-lowers-34-surfskate-bottom.jpg",
    description:
      "Embrace the captivating world of surf skating with our Colorful Geometry board. Its dynamic geometric pattern adds a modern touch to your ride, while providing a stable and responsive experience. The high-quality construction ensures durability and smooth gliding. Unleash your creativity and conquer the streets with this stunning board that combines style and functionality!",
  },
  {
    id: 13,
    category: "surfskate",
    name: "Beginners Enthusiasm",
    price: 110.95,
    urlImg:
      "https://yowsurf.com/wp-content/uploads/yow-grom-mundaka-32-surfskate-bottom-2.jpg",
    description:
      "Experience the joy of surf skating with our Colorful Dots board. Its playful design features a vibrant array of dots that will bring energy to your rides. The board's smooth performance and responsive handling make it a perfect choice for riders of all levels. Stand out from the crowd and express your individuality with this fun and reliable surf skate!",
  },
  {
    id: 14,
    category: "surfskate",
    name: "Begginers Luck",
    price: 89.95,
    urlImg:
      "https://yowsurf.com/wp-content/uploads/yow-coxos-31-surfskate-bottom-2.jpg",
    description:
      "Ride with confidence and style on our Green Hexagons surf skate. Its captivating design features a pattern of green hexagons that exudes a modern and fresh vibe. With its smooth gliding and responsive maneuverability, this board allows you to explore new tricks and techniques. Let your true colors shine.",
  },
  {
    id: 15,
    category: "other",
    name: "Basic Toolbox",
    price: 39.95,
    urlImg:
      "https://img.freepik.com/premium-photo/toolbox-set-with-everything-you-need-any-job_829136-808.jpg?w=826",
    description:
      "Maintain and repair your roller skates, skateboards, and surfskates with ease using our comprehensive toolbox set. It includes a wide range of essential tools for adjustments, repairs, and maintenance. Whether you're a beginner or a pro skater, this set provides everything you need to keep your gear in optimal condition and ensure flawless performance during every session. Get ready for worry-free skating.",
  },
  {
    id: 16,
    category: "other",
    name: "Premium Toolbox",
    price: 55.95,
    urlImg:
      "https://img.freepik.com/premium-photo/toolbox-with-everything-you-need-any-job_829136-799.jpg?w=826",
    description:
      "Take your maintenance and repair game to the next level with our premium toolbox set. Designed for the most discerning enthusiasts, this set offers high-quality tools that guarantee durability and precision for every adjustment and repair. From heavy-duty wrenches and screwdrivers to specialized tools for bearings and axles, this comprehensive kit provides everything you need to maintain and repair your roller skates, skateboards, and surfskates with the utmost excellence. Become an equipment care expert and enjoy unparalleled skating experiences.",
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
  productIconImg.setAttribute("onclick", "addToCart(" + product.id + ")");
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
const skateButton = document.querySelector("#skate");
const surfskateButton = document.querySelector("#surfskate");
const rollerButton = document.querySelector("#roller");
const otherButton = document.querySelector("#other");

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

skateButton.addEventListener("click", () => {
  showProductsByCategory("skate");
});

surfskateButton.addEventListener("click", () => {
  showProductsByCategory("surfskate");
});

rollerButton.addEventListener("click", () => {
  showProductsByCategory("roller");
});

otherButton.addEventListener("click", () => {
  showProductsByCategory("other");
});


/////////PRODUCT DETAIL LIST FOR THE ASIDE/////////
//La producción de cada elemento que se incruste debe ser disparada por hacer click en añadir al carrito tanto icono como en modal, entonces es cuando se añade
// si ya está añadido, no crear otro, sino añadir el número/precio sumar
//acticonst una función si se hace click en esos elementos, en la función, crear elemento, añadir al contenedor padre y controlar que todo funcione ok

// Variable para almacenar el total del precio
let totalPrice = 0;
// Objeto para realizar el seguimiento de la cantidad de cada producto en el carrito
const cartItems = {};

// Función para añadir un producto al carrito
function addToCart(productIndex) {
  const product = productList[productIndex]; // Asegúrate de tener una variable "productList" definida con los productos

  const myOrderContent = document.querySelector(".my-order-content");

  // Verificar si el producto ya está en el carrito///////////REPASAR ESTO ni zorra de que hace
  if (cartItems.hasOwnProperty(product.name)) {
    // Incrementar la cantidad del producto en el carrito
    cartItems[product.name]++;
    // Obtener el elemento del producto en el carrito
    const existingCartItem = document.querySelector(`.shopping-cart[data-product="${product.name}"]`);
    // Actualizar la cantidad en el elemento existente
    const quantityElement = existingCartItem.querySelector('.quantity');
    quantityElement.textContent = `x${cartItems[product.name]}`;
  } else {
    const shoppingCartDiv = document.createElement("div");
    shoppingCartDiv.classList.add("shopping-cart");
    shoppingCartDiv.setAttribute('data-product', product.name);

    const figure = document.createElement("figure");
    const image = document.createElement("img");
    image.src = product.urlImg;
    image.alt = product.name;
    figure.appendChild(image);
    shoppingCartDiv.appendChild(figure);

    // Crear el elemento p para el nombre del producto
    const name = document.createElement("p");
    name.textContent = product.name;
    shoppingCartDiv.appendChild(name);

    // Crear el elemento p para la cantidad del producto
    const quantity = document.createElement("p");
    quantity.classList.add("quantity");
    quantity.textContent = "x1";
    shoppingCartDiv.appendChild(quantity);

    // Crear el elemento p para el precio del producto
    const price = document.createElement("p");
    price.textContent = product.price;
    shoppingCartDiv.appendChild(price);

    // Crear el elemento img para el botón de cerrar
    const closeButton = document.createElement("img");
    closeButton.src = "./icons/icon_close.png";
    closeButton.alt = "close";
    shoppingCartDiv.appendChild(closeButton);

    // Agregar el elemento div del carrito de compras al DOM
    myOrderContent.insertBefore(shoppingCartDiv, myOrderContent.firstChild);

    // Agregar el producto al objeto cartItems con cantidad 1
    cartItems[product.name] = 1;
  }

  totalPrice += product.price;

  // Actualización del contenido del elemento de total
  let totalPriceElement = document.getElementById("total-price");
  totalPriceElement.textContent = "$" + totalPrice.toFixed(2);
}



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
