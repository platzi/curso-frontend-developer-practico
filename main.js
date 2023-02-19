const desktop_menu = document.querySelector('.desktop-menu');
const navbar_email = document.querySelector('.navbar-email');
const navbar_cart = document.querySelector('.navbar-shopping-cart');
const mobile_menu = document.querySelector('.mobile-menu');
const icon_mobile_menu = document.querySelector('.menu');
const aside = document.querySelector('.product-detail');
const cards_containter = document.querySelector('.cards-container');

navbar_email.addEventListener('click', clickEmail);
icon_mobile_menu.addEventListener('click', clickIconMenu);
navbar_cart.addEventListener('click', clickIconCart);

function clickEmail(){
    isEnable(false, aside);
    desktop_menu.classList.toggle('inactive');
}

function clickIconMenu(){
    isEnable(false, aside);
    mobile_menu.classList.toggle('inactive');
}

function clickIconCart(){
    isEnable(false, mobile_menu);
    isEnable(false, desktop_menu);
    aside.classList.toggle('inactive');
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


/*
<div class="product-card">
      <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
      <div class="product-info">
        <div>
          <p>$120,00</p>
          <p>Bike</p>
        </div>
        <figure>
          <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
      </div>
    </div> 
    */

    for (eachItem of productsList){

        const div_main = document.createElement('div');
        div_main.classList.add('product-card');
    
        const img = document.createElement('img');
        img.setAttribute('src', eachItem.img)
        img.setAttribute('alt','Imagen de articulo')
    
        const div_info = document.createElement('div');
        div_info.classList.add('product-info');
    
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
        div_main.appendChild(img);
        div_main.appendChild(div_info);
    
    cards_containter.appendChild(div_main);
    }


