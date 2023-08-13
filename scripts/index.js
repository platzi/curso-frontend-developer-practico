const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burgerIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const cartIcon = document.querySelector(".navbar-shopping-cart");
const asideCartDetail = document.querySelector(".product-detail");
const cardsContainer = document.querySelector('.cards-container');
const productInfo = document.querySelector('#pDetail');
const productInfoClose = document.querySelector('.product-detail-close');

const toggleElement = (element) => {
    let elements = [desktopMenu, mobileMenu, asideCartDetail, productInfo];
    element.classList.toggle('inactive');

    ifActiveElement(elements.filter((_element) => _element !== element));
};

const productList = [
    {
        image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        name: "Bike",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: 120
    },
    {
        image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        name: "Tv",
        desc: "Quod praesentium pariatur culpa dignissimos, placeat ratione asperiores sint est dolorum blanditiis cumque nisi amet.",
        price: 320
    },
    {
        image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        name: "Laptop",
        desc: "eius natus corrupti consequuntur. Rem, id architecto.",
        price: 580
    }
];

function generateCards(products){
    for (const product of products) {
        const pCard = document.createElement('div');
        pCard.classList.add('product-card');
        cardsContainer.appendChild(pCard);

        const img = document.createElement('img');
        img.setAttribute('src', product.image);
        pCard.appendChild(img);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        pCard.appendChild(productInfo);

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

        img.addEventListener('click', () => {
            const infoPrice = document.querySelector('.pInfo p:nth-child(1)');
            infoPrice.innerText = '$' + product.price;
            const infoName = document.querySelector('.pInfo p:nth-child(2)');
            infoName.innerText = product.name;
            const infoDesc = document.querySelector('.pInfo p:nth-child(3)');
            infoDesc.innerText = product.desc;
            showProductInfo();
        });
    }
}

function ifActiveElement(elements) {
    elements.forEach(element => {
        if (!element.classList.contains('inactive')) {
            element.classList.add('inactive');
        }
    });
}

function showProductInfo(){
    toggleElement(productInfo);
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

productInfoClose.addEventListener('click', () => {
    ifActiveElement([productInfo]);
});
