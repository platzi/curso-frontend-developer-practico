const menuEmail = document.querySelector('li.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarritoIcon = document.querySelector('li.navbar-shopping-cart');
const burguerMenu = document.querySelector('img.menu');
const movileMenu = document.querySelector('.mobile-menu');
const asideMenu = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

const toggleDesktopMenu = () =>
{
    const isAsideMenuClose = asideMenu.classList.contains('inactive');
    desktopMenu.classList.toggle('inactive');
    if(!isAsideMenuClose)
    {
        asideMenu.classList.add('inactive');
    }
}
const toggleMobileMenu = () =>
{
    const isAsideMenuClose = asideMenu.classList.contains('inactive');
    movileMenu.classList.toggle('inactive');
    if(!isAsideMenuClose)
    {
        asideMenu.classList.add('inactive');
    }

}
const toggleCarritoAside = () =>
{
    const isMobileMenuClose = movileMenu.classList.contains('inactive');
    const isDesktopMenuClose = desktopMenu.classList.contains('inactive');
    if(!isMobileMenuClose)
    {
        movileMenu.classList.add('inactive');
    }
    if(!isDesktopMenuClose)
    {
        desktopMenu.classList.add('inactive');
    }
    asideMenu.classList.toggle('inactive');
}

menuEmail.addEventListener('click',toggleDesktopMenu);
burguerMenu.addEventListener('click',toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toggleCarritoAside);

const productList = [];
productList.push(
    {
        name: "bike",
        price: 120,
        image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    }
);
productList.push(
    {
        name: "Pantalla",
        price: 320,
        image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    }
);
productList.push(
    {
        name: "Shampoo",
        price: 150,
        image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    }
);

const allCardProducts = [];
productList.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add("product-card");

    const image = document.createElement('img');
    image.setAttribute('src',product.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add("product-card__info");

    const div1 = document.createElement('div');

    const price = document.createElement('p');
    price.innerText = `$ ${product.price}`;

    const name = document.createElement('p');
    name.innerText = product.name;

    const figure = document.createElement('figure');

    const iconCarrito = document.createElement('img');
    iconCarrito.setAttribute('src',"./icons/bt_add_to_cart.svg");

    figure.appendChild(iconCarrito);
    div1.append(price,name);
    productInfo.append(div1,figure);
    productCard.append(image,productInfo);
    allCardProducts.push(productCard);
    cardsContainer.append(...allCardProducts);
})