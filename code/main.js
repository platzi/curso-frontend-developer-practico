const $ = (selector) => document.querySelector(selector);
const menuOpt = $(".desktop-menu");
const navRight = $(".navbar-email");
const burgerMenu = $(".burgerMenu");
const menuMobile = $(".mobile-menu");
const cart = $(".navbar-shopping-cart");
const cartList = $(".cart-list");
const cardsContainer = $(".cards-container");
const productDetail = $(".product-detail");

// ItemsList
const productsList = [];
productsList.push({
    name: "Blood Moon Thresh",
    price: 110,
    image: "https://th.bing.com/th/id/OIP.o39c92qthWolZ8ifeBqANgHaEo?pid=ImgDet&w=1680&h=1050&rs=1",
});
productsList.push({
    name: "Blood Moon Twisted Fate",
    price: 500,
    image: "https://th.bing.com/th/id/R.3b7bd4ea26a8ee3b94695de01d675959?rik=B9PdrafUpeBssA&pid=ImgRaw&r=0",
});
productsList.push({
    name: "Gentleman Gnar",
    price: 1000,
    image: "https://cdnen.samurai-gamers.com/wp-content/uploads/2017/07/17000345/Gnar_2.jpg",
});
productsList.push({
    name: "Star Guardian Jinx",
    price: 110,
    image: "https://th.bing.com/th/id/R.c011d457375b7cd1ee02857935f280e1?rik=hHQt7I2fJWa1NQ&pid=ImgRaw&r=0",
});
productsList.push({
    name: "Eternal Sword Master Yi",
    price: 500,
    image: "https://th.bing.com/th/id/R.226f7c9235f0446cdb23286b526a44a0?rik=wphX25sAckVdxg&pid=ImgRaw&r=0",
});
productsList.push({
    name: "Cosmic Devourer Vladimir",
    price: 1000,
    image: "https://th.bing.com/th/id/R.85eddf950359e3a457ad377c2c26e260?rik=uYFb2arFiGCvtw&pid=ImgRaw&r=0",
});
productsList.push({
    name: "Battle Academy Caitlyn",
    price: 110,
    image: "https://steamuserimages-a.akamaihd.net/ugc/1767071895191909189/D9332E51B43CF37EFEF96AE945B2AB573BBEA79B/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
});
productsList.push({
    name: "Omega Squad Tristana",
    price: 500,
    image: "https://www.mobafire.com/images/champion/skins/landscape/tristana-omega-squad.jpg",
});
productsList.push({
    name: "Resistance jayce",
    price: 1000,
    image: "https://th.bing.com/th/id/R.7841d7dccfdbdba77c629202e3d2468b?rik=owS%2f2K6a9qmUJw&pid=ImgRaw&r=0",
});
productsList.push({
    name: "Spirit Blossom Lilia",
    price: 110,
    image: "https://th.bing.com/th/id/R.a17176f4e84946bbb7d36c6358df78f2?rik=gnvNqMMYYnNhGw&pid=ImgRaw&r=0",
});
productsList.push({
    name: "Spirit Blossom Cassiopeia",
    price: 500,
    image: "https://th.bing.com/th/id/R.b95319222f4145913893c1a4ac84fa3a?rik=yryb6fqt0Uq1TQ&pid=ImgRaw&r=0",
});
productsList.push({
    name: "Resistance Illaoi",
    price: 1000,
    image: "https://cdn.vox-cdn.com/thumbor/AXcNCqlKeDM4VzviOJtC3J2VdEs=/0x0:1920x1080/1200x800/filters:focal(747x264:1053x570)/cdn.vox-cdn.com/uploads/chorus_image/image/58595011/Res_Illaoi_splash.0.jpg",
});

// Display/Hide options menu PC
function toggleMenu() {
    !menuOpt.hasAttribute("hidden")
        ? menuOpt.setAttribute("hidden", "")
        : menuOpt.removeAttribute("hidden");
    menuMobile.setAttribute("hidden", "");
    cartList.setAttribute("hidden", "");
    productDetail.setAttribute("hidden", "");
    // menuOpt.classList.toggle('clase'); coloca o quita la clase
}

// Display/Hide options menu for mobiles
function toggleMenuMobile() {
    menuMobile.toggleAttribute("hidden");
    cartList.setAttribute("hidden", "");
    menuOpt.setAttribute("hidden", "");
    productDetail.setAttribute("hidden", "");
}

// Display/Hide cart
function toggleCart() {
    cartList.toggleAttribute("hidden");
    menuMobile.setAttribute("hidden", "");
    menuOpt.setAttribute("hidden", "");
    productDetail.setAttribute("hidden", "");
}

// Create products list
function createProductsList(array) {
    let i = 0;
    for (product of array) {
        // Creating all elements
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        const productImg = document.createElement("img");
        productImg.setAttribute("src", product.image);
        productImg.setAttribute("onclick", `openProductDetail(${i})`);

        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");

        const productInfoDiv = document.createElement("div");

        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + product.price + " RP";

        const productName = document.createElement("p");
        productName.innerText = product.name;

        const iconFigure = document.createElement("figure");

        const icon = document.createElement("img");
        icon.setAttribute("src", "./icons/bt_add_to_cart.svg");

        // Appending all elements to create the card.
        // Ref:
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
          </div>
          */
        iconFigure.append(icon);
        productInfoDiv.append(productPrice, productName);
        productInfo.append(productInfoDiv, iconFigure);
        productCard.append(productImg, productInfo);
        cardsContainer.appendChild(productCard);

        i++;
    }
}

// Create the details of the products
function openProductDetail(index) {
    menuMobile.setAttribute("hidden", "");
    menuOpt.setAttribute("hidden", "");
    cartList.setAttribute("hidden", "");
    deleteChildrenProductDetail();

    const product = productsList[index];

    // Creating all elements
    const closeDiv = document.createElement("div");
    closeDiv.classList.add("product-detail-close");

    const closeIcon = document.createElement("img");
    closeIcon.setAttribute("src", "./icons/icon_close.png");
    closeIcon.setAttribute("alt", "close");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);
    productImg.setAttribute("alt", product.name);

    const productDesc = document.createElement("div");
    productDesc.classList.add("product-desc");

    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;

    const productName = document.createElement("p");
    productName.innerText = product.name;

    const productText = document.createElement("p");
    productText.innerText = "Generic Description for this item";

    const addCartButton = document.createElement("button");
    addCartButton.classList.add("primary-button");
    addCartButton.classList.add("add-to-cart-button");

    const addCartIcon = document.createElement("img");
    addCartIcon.setAttribute("src", "./icons/bt_add_to_cart.svg");
    addCartIcon.setAttribute("alt", "add to cart");

    // Appending elements
    addCartButton.append(addCartIcon);
    addCartButton.append("Add to cart");
    productDesc.append(productPrice, productName, productText, addCartButton);
    closeDiv.append(closeIcon);
    productDetail.append(closeDiv, productImg, productDesc);

    productDetail.removeAttribute("hidden");
}

// Close product detail
function closeProductDetail(event) {
    const currentNodeClass = event.target.classList['value'];
    const parentNodeClass = event.target.parentNode.classList['value'];

    if (parentNodeClass == "product-detail-close" || currentNodeClass == "product-detail-close") {
        deleteChildrenProductDetail();
    }
}

// Delete all children of the Product Detail to hide it
function deleteChildrenProductDetail() {
    // Deleting children
    while (productDetail.lastElementChild) {
        productDetail.removeChild(productDetail.lastElementChild);
    }

    productDetail.setAttribute("hidden", "");
}

// Getting the products and displaying them
createProductsList(productsList);

// Events
const clickOptGral = navRight.addEventListener("click", toggleMenu);
const clickOptMob = burgerMenu.addEventListener("click", toggleMenuMobile);
const clickCartGral = cart.addEventListener("click", toggleCart);
const clickCloseDetail = document.addEventListener("click", closeProductDetail);