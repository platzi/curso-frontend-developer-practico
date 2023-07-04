const menu_email = document.querySelector('.navbar-email');
const desktop_menu = document.querySelector('.desktop-menu');
const menu = document.querySelector('.menu');
const mobile = document.querySelector('.mobile-menu');
const shopping_cart = document.querySelector('.navbar-shopping-cart');
const product_detail = document.querySelector('.product-detail');
const cards_container = document.querySelector('.cards-container');

menu_email.addEventListener('click', toggleDesktopMenu);
menu.addEventListener('click', toggleMobileMenu);
shopping_cart.addEventListener('click', toggleProductDetail);

function toggleDesktopMenu() {
    product_detail.classList.add('inactive');
    desktop_menu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  product_detail.classList.add('inactive');
    mobile.classList.toggle('inactive');
}

function toggleProductDetail() {

   mobile.classList.add('inactive');
   desktop_menu.classList.add('inactive');
    product_detail.classList.toggle('inactive');
    
}

const product_list = [];
product_list.push({
    name : 'bike',
    price : 120,
    image : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

product_list.push({
    name : 'pantalla',
    price : 450,
    image : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

product_list.push({
    name : 'car',
    price : 650,
    image : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

product_list.push({
    name : 'bike',
    price : 120,
    image : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

product_list.push({
    name : 'pantalla',
    price : 450,
    image : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

product_list.push({
    name : 'car',
    price : 650,
    image : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

function render_product(arr){
    for (product of arr){
        const product_card = document.createElement('div');
        product_card.classList.add('product-card');
    
        const product_image = document.createElement('img');
        product_image.setAttribute('src', product.image);
    
        const product_info = document.createElement('div');
        product_info.classList.add('product-info');
    
        const product_info_div = document.createElement('div');
    
        const product_price = document.createElement('p');
        product_price.innerText = '$' + product.price;
    
        const product_name = document.createElement('p');
        product_name.innerText = product.name;
    
        product_info_div.appendChild(product_price);
        product_info_div.appendChild(product_name);
    
        const product_figure = document.createElement('figure');
        const product_img_cart = document.createElement('img');
        product_img_cart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        product_figure.appendChild(product_img_cart);
    
        product_info.appendChild(product_info_div);
        product_info.appendChild(product_figure);
    
        product_card.appendChild(product_image);
        product_card.appendChild(product_info);
    
        cards_container.appendChild(product_card);
    }
}

render_product(product_list);