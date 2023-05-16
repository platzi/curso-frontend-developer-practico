const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const hamburguerIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const productDetailCloseIcon = document.querySelector('.product-detail-close')

const shoppingCartIcon = document.querySelector(".navbar-shopping-cart");
const detaillShoppingCart = document.querySelector("#detaillShoppingCart");

const darken = document.querySelector(".darken");
const productDetail = document.querySelector("#productDetail");


const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleMenu);
hamburguerIcon.addEventListener("click", toggleMobileMenu);
shoppingCartIcon.addEventListener("click", toggleDetaillCart);
productDetailCloseIcon.addEventListener('click',closeProductDetailAside)


function toggleMenu() {
    desktopMenu.classList.toggle("inactive");
    productDetail.classList.add('inactive')
    detaillShoppingCart.classList.add("inactive");

}

function toggleMobileMenu() {
    mobileMenu.classList.toggle("show-mobile-menu");
    detaillShoppingCart.classList.add("inactive");

}

function toggleDetaillCart() {
    detaillShoppingCart.classList.toggle("inactive");
    mobileMenu.classList.remove("show-mobile-menu");
    desktopMenu.classList.add("inactive");
    productDetail.classList.add('inactive')

}

function openProductDetailAside(){
    productDetail.classList.remove('inactive')

    detaillShoppingCart.classList.add("inactive");
    desktopMenu.classList.add("inactive");
    darken.classList.remove('inactive')
    mobileMenu.classList.remove("show-mobile-menu");

}

function closeProductDetailAside(){
    productDetail.classList.add('inactive')
    darken.classList.add('inactive')

}

const productList = [
    {
        name: "Bike",
        price: 120,
        img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        name: "Shelf",
        price: 20,
        img: "https://images.pexels.com/photos/2062427/pexels-photo-2062427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        name: "Desk",
        price: 100,
        img: "https://images.pexels.com/photos/1297611/pexels-photo-1297611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        name: "Guitar",
        price: 40,
        img: "https://images.pexels.com/photos/1624753/pexels-photo-1624753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        name: "Skateboard",
        price: 50,
        img: "https://images.pexels.com/photos/841369/pexels-photo-841369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        name: "Lamp",
        price: 15,
        img: "https://images.pexels.com/photos/242827/pexels-photo-242827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        name: "Toys",
        price: 25,
        img: "https://images.pexels.com/photos/3663060/pexels-photo-3663060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        name: "Chair",
        price: 10,
        img: "https://images.pexels.com/photos/116910/pexels-photo-116910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        name: "Table",
        price: 20,
        img: "https://images.pexels.com/photos/279626/pexels-photo-279626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        name: "Flower vase",
        price: 15,
        img: "https://images.pexels.com/photos/269220/pexels-photo-269220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
];



function render(array) {
    for (product of array) {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        const img = document.createElement("img");
        img.setAttribute("src", product.img);
        img.addEventListener('click',openProductDetailAside)

        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");

        const productInfoDiv = document.createElement("div");

        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + product.price;

        const productName = document.createElement("p");
        productName.innerText = product.name;

        const figure = document.createElement("figure");
        const iconFigure = document.createElement("img");
        iconFigure.setAttribute("src", "./icons/bt_add_to_cart.svg");

        productInfoDiv.append(productPrice, productName);
        figure.append(iconFigure);
        productInfo.append(productInfoDiv, figure);
        productCard.append(img, productInfo);

        cardsContainer.append(productCard);
    }
}

render(productList)