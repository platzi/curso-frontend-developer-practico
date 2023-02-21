const desktop_menu = document.querySelector('.desktop-menu');
const navbar_email = document.querySelector('.navbar-email');
const navbar_cart = document.querySelector('.navbar-shopping-cart');
const mobile_menu = document.querySelector('.mobile-menu');
const icon_mobile_menu = document.querySelector('.menu');
const shopping_cart = document.querySelector('#shopping_cart');
const cards_containter = document.querySelector('.cards-container');
const product_detail = document.querySelector('.product-detail');
const btnClose = document.querySelector('.product-detail-close')

navbar_email.addEventListener('click', clickDesktopMenu);
icon_mobile_menu.addEventListener('click', clickMobileMenu);
navbar_cart.addEventListener('click', clickIconCart);

function clickDesktopMenu(){
    isEnable(false, product_detail);
    isEnable(false, shopping_cart);
    isEnable(false, mobile_menu);
    desktop_menu.classList.toggle('inactive');
}

function clickMobileMenu(){
    isEnable(false, shopping_cart);
    isEnable(false, desktop_menu);
    isEnable(false, product_detail);
    mobile_menu.classList.toggle('inactive');
}

function clickIconCart(){
    isEnable(false, mobile_menu);
    isEnable(false, desktop_menu);
    isEnable(false, product_detail);
    shopping_cart.classList.toggle('inactive');
}

 /*Disable menu forms function*/
function isEnable(status, item){
    if (status==true){
        item.classList.remove('inactive');
    } else {
        item.classList.add('inactive');
    }
}

/*Fill item's array*/
const productsList = [];
productsList.push({
    name: 'Tablet',
    price: 120.00,
    img: 'https://images.pexels.com/photos/2351844/pexels-photo-2351844.jpeg?auto=compress&cs=tinysrgb&w=400'
});
productsList.push({
    name: 'Lamp',
    price: 50.00,
    img: 'https://images.pexels.com/photos/9088893/pexels-photo-9088893.jpeg?auto=compress&cs=tinysrgb&w=400'
});
productsList.push({
    name: 'Toy',
    price: 10.00,
    img: 'https://images.pexels.com/photos/1330638/pexels-photo-1330638.jpeg?auto=compress&cs=tinysrgb&w=400'
});
productsList.push({
    name: 'Tablet',
    price: 120.00,
    img: 'https://images.pexels.com/photos/2351844/pexels-photo-2351844.jpeg?auto=compress&cs=tinysrgb&w=400'
});
productsList.push({
    name: 'Lamp',
    price: 50.00,
    img: 'https://images.pexels.com/photos/9088893/pexels-photo-9088893.jpeg?auto=compress&cs=tinysrgb&w=400'
});
productsList.push({
    name: 'Toy',
    price: 10.00,
    img: 'https://images.pexels.com/photos/1330638/pexels-photo-1330638.jpeg?auto=compress&cs=tinysrgb&w=400'
});
productsList.push({
    name: 'Tablet',
    price: 120.00,
    img: 'https://images.pexels.com/photos/2351844/pexels-photo-2351844.jpeg?auto=compress&cs=tinysrgb&w=400'
});
productsList.push({
    name: 'Lamp',
    price: 50.00,
    img: 'https://images.pexels.com/photos/9088893/pexels-photo-9088893.jpeg?auto=compress&cs=tinysrgb&w=400'
});
productsList.push({
    name: 'Toy',
    price: 10.00,
    img: 'https://images.pexels.com/photos/1330638/pexels-photo-1330638.jpeg?auto=compress&cs=tinysrgb&w=400'
});
productsList.push({
    name: 'Tablet',
    price: 120.00,
    img: 'https://images.pexels.com/photos/2351844/pexels-photo-2351844.jpeg?auto=compress&cs=tinysrgb&w=400'
});
productsList.push({
    name: 'Lamp',
    price: 50.00,
    img: 'https://images.pexels.com/photos/9088893/pexels-photo-9088893.jpeg?auto=compress&cs=tinysrgb&w=400'
});
productsList.push({
    name: 'Toy',
    price: 10.00,
    img: 'https://images.pexels.com/photos/1330638/pexels-photo-1330638.jpeg?auto=compress&cs=tinysrgb&w=400'
});

    for (eachItem of productsList){

        const product_card = document.createElement('div');
        product_card.classList.add('product-card');
    
        const img = document.createElement('img');
        img.setAttribute('src', eachItem.img)
        img.setAttribute('alt','Imagen de articulo')
    
        const div_info = document.createElement('div');
        div_info.classList.add('product-info_PC');
    
        const div = document.createElement('div');
    
        const precio = document.createElement('p');
        precio.innerText = '$'+ eachItem.price;
    
        const name = document.createElement('p');
        name.innerText = eachItem.name;
    
        const figure = document.createElement('figure');
    
        const icon_cart = document.createElement('img');
        icon_cart.setAttribute('src','./icons/bt_add_to_cart.svg');
        icon_cart.setAttribute('alt','Ícono de carrito');
    
        div.appendChild(precio);
        div.appendChild(name);
        figure.appendChild(icon_cart);
        div_info.appendChild(div);
        div_info.appendChild(figure);
        product_card.appendChild(img);
        product_card.appendChild(div_info);
    
    cards_containter.appendChild(product_card);

    product_card.addEventListener('click', clickProductCard);
    btnClose.addEventListener('click', clickBtnClose);
    }

    function clickProductCard(){
        isEnable(false, shopping_cart);
        isEnable(false, mobile_menu);
        isEnable(false, desktop_menu);
        product_detail.classList.toggle('inactive');
        console.log("FUncionando");
    }

    function clickBtnClose(){
        product_detail.classList.add('inactive');
    }

