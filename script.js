// SELECION DE LOS ELEMENTOS MEDIANTE UN QUERYSELECTOR 
const desktopMenu = document.querySelector(".desktop-menu");
const navbarEmail = document.querySelector(".navbar-email");
const burgerIconMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const mainCarIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");
const cardsContainer = document.querySelector('.cards-container')

// ASIGNACION DE LOS EVENT LISTENERS 
navbarEmail.addEventListener("click", togggleShowDesktopMenu);
burgerIconMenu.addEventListener('click', togggleMobileMenu)
mainCarIcon.addEventListener('click', togggleCarAside)


// FUNCIONES DE ASIGNACION Y SELECION DE LAS CLASES
function togggleCarAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        // si mobilemenu esta open, hay que cerrarlo
        mobileMenu.classList.add('inactive')
    }
    if (!isDDesktopMenuClosed) {
        // si mobilemenu esta open, hay que cerrarlo
        desktopMenu.classList.add('inactive')
    }

    aside.classList.toggle('inactive')
}

function togggleShowDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive')

    if (!isAsideClosed) {
        aside.classList.add('inactive')
    }

    desktopMenu.classList.toggle("inactive");
}

function togggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        // si mobilemenu esta open, hay que cerrarlo
        aside.classList.add('inactive')
    }

    mobileMenu.classList.toggle("inactive");
}

const listItems = []
listItems.push(
    {
        name: 'Bike',
        price: 120,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        name: 'TV',
        price: 1200,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        name: 'PC',
        price: 1220,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    });


function renderProducts(arr) {
    for (items of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const img = document.createElement('img');
        img.setAttribute('src', items.image);
        img.setAttribute('alt', 'img card');

        // -------

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        // ------

        const productInfoDiv = document.createElement('div');


        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + items.price + ',00';

        const productName = document.createElement('p');
        productName.innerText = items.name;

        // -------

        const productInfoFigure = document.createElement('figure');
        const productImg = document.createElement('img');
        productImg.setAttribute('src', './icons/bt_add_to_cart.svg');


        productInfoDiv.appendChild(productName)
        productInfoDiv.appendChild(productPrice)
        productInfoFigure.appendChild(productImg)
        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productInfoFigure)
        productCard.appendChild(img)
        productCard.appendChild(productInfo)

        console.log(productCard);


        cardsContainer.appendChild(productCard)
    }


}

renderProducts(listItems)
