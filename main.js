const menuemail = document.querySelector('.navbar-email');
const desktopmenu = document.querySelector('.desktop-menu');
const menuhambicon = document.querySelector('.menu');
const menucarritoicon = document.querySelector('.navbar-shopping-cart');
const mobilemenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const productlist = [];
const cardcontainer = document.querySelector('.cards-container');

menuemail.addEventListener('click', togglodesktopmenu);
menuhambicon.addEventListener('click', togglomobilemenu);
menucarritoicon.addEventListener('click', togglocarritoaside);
productlist.push({
    name: 'bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productlist.push({
    name: 'pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productlist.push({
    name: 'radio',
    price: 420,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

function togglodesktopmenu() {
    // add and delete property hidden
    desktopmenu.classList.toggle('inactive')
}

function togglomobilemenu() {
    // add and delete property hidden
    const isasideclosed = aside.classList.contains('inactive');

    if (!isasideclosed) {
        aside.classList.add('inactive')
    }
    mobilemenu.classList.toggle('inactive')
}

function togglocarritoaside() {
    const ismobilemenuclosed = mobilemenu.classList.contains('inactive');

    if (!ismobilemenuclosed) {
        mobilemenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive')
}

function renderproducts(arr) {
    for (product of arr) {
        const productcard = document.createElement('div');
        productcard.classList.add('product-card');

        const product_img = document.createElement('img');
        product_img.setAttribute('src', product.image);

        const productinfo = document.createElement('div');
        productinfo.classList.add('product-info');

        const productinfodiv = document.createElement('div');

        const productprice = document.createElement('p');
        productprice.innerText = '$' + product.price;

        const productname = document.createElement('p');
        productname.innerText = product.name;

        productinfodiv.appendChild(productprice)
        productinfodiv.appendChild(productname)

        const productinfofigure = document.createElement('figure');
        const productimgcart = document.createElement('img');

        productimgcart.setAttribute('src', './icons/bt_add_to_cart.svg');

        productinfofigure.appendChild(productimgcart);
        productinfo.appendChild(productinfodiv);
        productinfo.appendChild(productinfofigure);

        productcard.appendChild(product_img);
        productcard.appendChild(productinfo);
        cardcontainer.appendChild(productcard);
    }
}

renderproducts(productlist);
