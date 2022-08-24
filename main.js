// DESKTOP MENU ------------------------------------------------------>
const navBarEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
// MOBILE MENU ------------------------------------------------------>
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
// ICON CAR SHOPING ------------------------------------------------------>
const navbarShoppingCart = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");

// CARDS CONTAINER
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');


navBarEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
navbarShoppingCart.addEventListener("click", toggleProductDetail);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);


function toggleDesktopMenu() {
    const isProductDetailClosed = shoppingCartContainer.classList.contains("inactive");

    desktopMenu.classList.toggle("inactive");

    if (!isProductDetailClosed) {
        shoppingCartContainer.classList.add("inactive");
    }
}

function toggleMobileMenu() {
    const isProductDetailClosed = shoppingCartContainer.classList.contains("inactive");

    if (!isProductDetailClosed) {
        productDetail.classList.add("inactive");
    }

    mobileMenu.classList.toggle("inactive");

    closeProductDetailAside();

}

function toggleProductDetail() {

    const isProductDetailClosed = productDetailContainer.classList.contains("inactive");
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add("inactive");
    }

    if (!isProductDetailClosed) {
        productDetailContainer.classList.add("inactive");
    }

    shoppingCartContainer.classList.toggle("inactive");
}

function openProductDetailAside()
{
    shoppingCartContainer.classList.add('inactive');

    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside()
{
    productDetailContainer.classList.add('inactive');
}

// ARRAY DE LISTA DE PRODUCTOS
const productList = [];

productList.push
    (
        {
            name: "Bike",
            price: 250,
            image: "https://exitocol.vtexassets.com/arquivos/ids/7234186-800-auto?v=637532554326130000&width=800&height=auto&aspect=true",
        }
    );

productList.push
    (
        {
            name: "Xbox One",
            price: 460,
            image: "https://exitocol.vtexassets.com/arquivos/ids/7234186-800-auto?v=637532554326130000&width=800&height=auto&aspect=true",
        }
    );

productList.push
    (
        {
            name: "Televisor",
            price: 1250,
            image: "https://exitocol.vtexassets.com/arquivos/ids/7234186-800-auto?v=637532554326130000&width=800&height=auto&aspect=true",
        }
    );

productList.push
    (
        {
            name: "Bike",
            price: 250,
            image: "https://exitocol.vtexassets.com/arquivos/ids/7234186-800-auto?v=637532554326130000&width=800&height=auto&aspect=true",
        }
    );

productList.push
    (
        {
            name: "Xbox One",
            price: 460,
            image: "https://exitocol.vtexassets.com/arquivos/ids/7234186-800-auto?v=637532554326130000&width=800&height=auto&aspect=true",
        }
    );

productList.push
    (
        {
            name: "Televisor",
            price: 1250,
            image: "https://exitocol.vtexassets.com/arquivos/ids/7234186-800-auto?v=637532554326130000&width=800&height=auto&aspect=true",
        }
    );

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const img = document.createElement('img');
        img.setAttribute("src", product.image);
        img.addEventListener("click", openProductDetailAside);

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
        productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

        productInfoFigure.appendChild(productImgCart);

        productInfo.appendChild(productInfoFigure);
        productInfo.appendChild(productInfoDiv);

        productCard.appendChild(img);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);

