const nav_email = document.querySelector('li.navbar-email');
const desktop_menu = document.querySelector('div.desktop-menu');
const burger_button = document.querySelector('img.menu');
const mobile_menu = document.querySelector('div.mobile-menu');
const cart_button = document.querySelector('li.navbar-shopping-cart');
const cart_detail = document.querySelector('aside.cart-detail');
const cards_container = document.querySelector('div.cards-container');
const productList = [];
productList.push({
    name: 'bike',
    price: '120.00',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'TV',
    price: '8599.99',
    image: 'https://images.pexels.com/photos/5197069/pexels-photo-5197069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productList.push({
    name: 'Xbox One Controller',
    price: '600.00',
    image: 'https://images.pexels.com/photos/1365795/pexels-photo-1365795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productList.push({
    name: 'Gamer Setup',
    price: '12000.00',
    image: 'https://images.pexels.com/photos/7238759/pexels-photo-7238759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

//https://images.pexels.com/photos/5197069/pexels-photo-5197069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
nav_email.addEventListener('click', onToggleDesktopPopUpMenu);
burger_button.addEventListener('click', onToggleMobileMenu);
cart_button.addEventListener('click', onToggleCartDetail);

// Formatos HTML
function createProductElementHTML(product){
    const product_card = document.createElement('div');
    product_card.classList.add('product-card');

    const product_image = document.createElement('img');
    product_image.setAttribute('src', product.image);

    const product_info = document.createElement('div');
    product_info.classList.add('product-info');

    const product_info_div = document.createElement('div');

    const product_price = document.createElement('p');
    product_price.innerText= `$${product.price}`;

    const product_name = document.createElement('p');
    product_name.innerText = product.name;

    const figure_container = document.createElement('figure');
    const image_cart_icon = document.createElement('img');
    image_cart_icon.setAttribute('src', './icons/bt_add_to_cart.svg');

    figure_container.appendChild(image_cart_icon);
    product_info_div.append(product_price, product_name);
    product_info.append(product_info_div, figure_container);
    product_card.append(product_image, product_info);
    


    return product_card;
}

// Eventos de click
function onToggleDesktopPopUpMenu(event){

    if(!cart_detail.classList.contains('inactive'))
        cart_detail.classList.toggle('inactive');

    desktop_menu.classList.toggle('inactive');
}

function onToggleMobileMenu(event){

    if(!cart_detail.classList.contains('inactive'))
        cart_detail.classList.toggle('inactive');

    mobile_menu.classList.toggle('inactive');
}

function onToggleCartDetail(event){

    if(!desktop_menu.classList.contains('inactive'))
        desktop_menu.classList.toggle('inactive');

    if(!mobile_menu.classList.contains('inactive'))
        mobile_menu.classList.toggle('inactive');

    cart_detail.classList.toggle('inactive');
}

// Renders
function productsRender(products_array){

    products_array.forEach(function(product){
        cards_container.appendChild(createProductElementHTML(product));
    })
}

productsRender(productList);