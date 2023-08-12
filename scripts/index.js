const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burgerIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const cartIcon = document.querySelector(".navbar-shopping-cart");
const asideCartDetail = document.querySelector(".product-detail");
const cardsContainer = document.querySelector('.cards-container');

const toggleElement = (element) => {
    let elements = [desktopMenu, mobileMenu, asideCartDetail];
    element.classList.toggle('inactive');

    ifActiveElement(elements.filter((_element) => _element !== element));
};

const productList = [
    {
        image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        name: "Bike",
        price: 120
    },
    {
        image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        name: "Tv",
        price: 320
    },
    {
        image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        name: "Laptop",
        price: 580
    }
];

function generateCards(products){
    for (const product of products) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        cardsContainer.appendChild(productCard);

        const img = document.createElement('img');
        img.setAttribute('src', product.image);
        productCard.appendChild(img);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        productCard.appendChild(productInfo);

        const div = document.createElement('div');
        const price = document.createElement('p');
        price.innerText = '$' + product.price;
        div.appendChild(price);

        const name = document.createElement('p');
        name.innerText = product.name;
        div.appendChild(name);
        productInfo.appendChild(div);

        const figure = document.createElement('figure');
        const cartImg = document.createElement('img');
        cartImg.setAttribute('src', '../icons/bt_add_to_cart.svg');
        figure.appendChild(cartImg);
        productInfo.appendChild(figure);
    }
}

function ifActiveElement(elements) {
    elements.forEach(element => {
        if (!element.classList.contains('inactive')) {
            element.classList.add('inactive');
        }
    });
}

generateCards(productList);

navEmail.addEventListener('click', () => {
    toggleElement(desktopMenu);
});

burgerIcon.addEventListener('click', () => {
    toggleElement(mobileMenu);
});

cartIcon.addEventListener('click', () => {
    toggleElement(asideCartDetail);
});


