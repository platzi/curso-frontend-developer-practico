const navbar_email = document.querySelector('.navbar-email');
const navbar_burger = document.querySelector('.menu');
const navbar_shopping_cart = document.querySelector('.navbar-shopping-cart');
const desktop_menu = document.querySelector('.desktop-menu');
const mobile_menu = document.querySelector('.mobile-menu');
const cart_detail = document.querySelector('#cart-detail');
const cards_container = document.querySelector('.cards-container');
const full_detail = document.querySelector('#full-detail');
const full_detail_close = document.querySelector('.product-detail-close');
const products_in_cart = [];
const n_products_in_cart = document.querySelector('.navbar-shopping-cart div');
n_products_in_cart.innerText = 0;
const cart_products_container = document.querySelector('.cart_products_container');
let total_price = 0;
const total_p = document.getElementById('total');
total_p.innerText = '$ ' + 0;

// formulario
const form_container = document.querySelector('.form-container');
const input_name = document.querySelector('#input_name');
const input_price = document.querySelector('#input_price');
const input_img_url = document.querySelector('#input_img_url');
const add_button = document.querySelector('.add-button');

navbar_email.addEventListener('click', my_account_menu_visibility);
navbar_burger.addEventListener('click', menu_visibility);
navbar_shopping_cart.addEventListener('click', my_order_visibility);
full_detail_close.addEventListener('click', full_detail_visibility_close);

window.addEventListener('scroll', posicionar_full_detail);

function posicionar_full_detail(){
  if(window.pageYOffset > 0){
    full_detail.style.top = '0px';
  }else {
    full_detail.style.top = '61px';
  }
};


function my_account_menu_visibility(){
    desktop_menu.classList.toggle('inactive');
    if(!cart_detail.classList.contains('inactive')){
      cart_detail.classList.toggle('inactive');
    }
    if(!full_detail.classList.contains('inactive')){
      full_detail.classList.toggle('inactive');
    }
}

function menu_visibility(){
    mobile_menu.classList.toggle('visible');
    mobile_menu.classList.toggle('oculto');
    if(!cart_detail.classList.contains('inactive')){
      cart_detail.classList.toggle('inactive');
    } 
}

function my_order_visibility(){
  cart_detail.classList.toggle('inactive');
    if(!desktop_menu.classList.contains('inactive')){
        desktop_menu.classList.toggle('inactive');
    }
    if(mobile_menu.classList.contains('visible')){
        mobile_menu.classList.toggle('visible');
    }
    if(!full_detail.classList.contains('inactive')){
      full_detail.classList.toggle('inactive');
  }
}
let evento;
function full_detail_visibility(e){
  if(full_detail.classList.contains('inactive')){
    full_detail.classList.toggle('inactive');
  }
  if(!desktop_menu.classList.contains('inactive')){
    desktop_menu.classList.toggle('inactive');
  }
  
  if(!cart_detail.classList.contains('inactive')){
    cart_detail.classList.add('inactive');
  }
  print_product_info(e.target.getAttribute('src'));
}



function full_detail_visibility_close(){
  full_detail.classList.toggle('inactive');
}

const products_array = [  {
  name: 'Cafetera',
  price: 65.00,
  img: './img/cafetera.png',
  des: 'Disfruta de un espresso caliente con la cafetera perfecta para tu hogar.'
},
{
  name: 'Lavadora',
  price: 250.00,
  img: './img/lavadora.png',
  des: 'Mantén tu ropa siempre limpia y brillante con la última tecnología en lavadoras.'
},
{
  name: 'Smart TV',
  price: 350.00,
  img: './img/smart-tv.png',
  des: 'Disfruta de tus programas favoritos con una Smart TV de alta definición.'
},
{
  name: 'Estufa eléctrica',
  price: 125.00,
  img: './img/estufa-electrica.png',
  des: 'Prepare sus comidas favoritas de manera rápida y sencilla con la última estufa eléctrica.'
},
{
  name: 'Refrigerador',
  price: 400.00,
  img: './img/refrigerador.png',
  des: 'Mantenga sus alimentos frescos y en buen estado con un refrigerador de alta eficiencia.'
},
{
  name: 'Microondas',
  price: 50.00,
  img: './img/microondas.png',
  des: 'Calienta tus alimentos rápida y fácilmente con el último microondas.'
},
{
  name: 'Cocina eléctrica',
  price: 180.00,
  img: './img/cocina-electrica.png',
  des: 'Prepare sus comidas favoritas de manera rápida y sencilla con una cocina eléctrica.'
},
{
  name: 'Aspiradora',
  price: 75.00,
  img: './img/aspiradora.png',
  des: 'Mantén tu hogar limpio y ordenado con una aspiradora de última generación.'
},
{
  name: 'Cafetera eléctrica',
  price: 35.00,
  img: './img/cafetera-electrica.png',
  des: 'Disfruta de un espresso caliente con la cafetera eléctrica perfecta para tu hogar.'
},
{
  name: 'Plancha',
  price: 25.00,
  img: './img/plancha.png',
  des: 'Mantén tus prendas de vestir perfectamente planchadas con una plancha moderna.'
},
{
  name: 'Plancha de vapor',
  price: 55.00,
  img: './img/plancha-vapor.png',
  des: 'Mantén tus prendas de vestir perfectamente planchadas con una plancha de vapor moderna.'
},
{
  name: 'Licuadora',
  price: 30.00,
  img: './img/licuadora.png',
  des: 'Prepare sus batidos y smoothies favoritos con una licuadora de última generación.'
},
{
  name: 'Horno eléctrico',
  price: 175.00,
  img: './img/horno-electrico.png',
  des: 'Prepare sus comidas favoritas de manera rápida y sencilla con un horno eléctrico moderno.'
},
{
  name: 'Ventilador',
  price: 40.00,
  img: './img/ventilador.png',
  des: 'Refresca tu hogar con un ventilador de alta eficiencia.'
},
{
  name: 'Estéreo',
  price: 75.00,
  img: './img/estereo.png',
  des: 'Disfruta de tus canciones favoritas con un estéreo de última generación.'
},
{
  name: 'Teléfono Inteligente',
  price: 200.00,
  img: './img/telefono-inteligente.png',
  des: 'Estar conectado nunca fue tan fácil con un teléfono inteligente de última generación.'
},
{
  name: 'Placa de cocina eléctrica',
  price: 120.00,
  img: './img/plancha-cocina-electrica.png',
  des: 'Prepare sus comidas favoritas de manera rápida y sencilla con una placa de cocina eléctrica.'
},
{
  name: 'Secadora',
  price: 200.00,
  img: './img/secadora.png',
  des: 'Mantén tu ropa siempre limpia y brillante con la última tecnología en secadoras.'
},
{
  name: 'Lavavajillas',
  price: 250.00,
  img: './img/lavavajillas.png',
  des: 'Mantén tu cocina limpia y ordenada con un lavavajillas de última generación.'
},
{
  name: 'Aire acondicionado',
  price: 350.00,
  img: './img/aire-acondicionado.png',
  des: 'Refresca tu hogar con un aire acondicionado de alta eficiencia.'
}];

class Product{
    constructor(name, price, img){
        this.name = name;
        this.price = price;
        this.img = img;
    }
    add(){
        products_array.push({
            name: this.name,
            price: this.price,
            img: this.img
        });
    }
}

function add_product (name, price, img){
    const product = new Product(name, price, img);
    product.add();
}

function print_product(product_array){

    // for(product of product_array){
    //   const product_card = document.createElement('div');
    //     product_card.classList.add('product-card');
    
    //     const img_product = document.createElement('img');
    //     img_product.src = product.img;
    //     product_card.appendChild(img_product);
        
    //     const product_info = document.createElement('div');
    //     product_info.classList.add('product-info');
    //     product_card.appendChild(product_info);
    
    //     const description_container = document.createElement('div');
    //     product_info.appendChild(description_container);
    
    //     const price = document.createElement('p');
    //     price.innerText = product.price;
    //     description_container.appendChild(price);
    
    //     const name = document.createElement('p');
    //     name.innerText = product.name;
    //     description_container.appendChild(name);
      
    //     const add_cart_icon_container = document.createElement('figure');
    //     product_info.appendChild(add_cart_icon_container);

    //     const img_add_cart_icon = document.createElement('img');
    //     img_add_cart_icon.src = './icons/bt_add_to_cart.svg';
    //     add_cart_icon_container.appendChild(img_add_cart_icon);
        
    //     cards_container.appendChild(product_card);

    //     console.log(product)
    // }

    product_array.forEach(product => {
        const product_card = document.createElement('div');
        product_card.classList.add('product-card');
    
        const img_product = document.createElement('img');
        img_product.src = product.img;
        product_card.appendChild(img_product);
        
        const product_info = document.createElement('div');
        product_info.classList.add('product-info');
        product_card.appendChild(product_info);
    
        const description_container = document.createElement('div');
        product_info.appendChild(description_container);
    
        const price = document.createElement('p');
        price.innerText = "$ " + product.price;
        description_container.appendChild(price);
    
        const name = document.createElement('p');
        name.innerText = product.name;
        description_container.appendChild(name);
      
        const add_cart_icon_container = document.createElement('figure');
        product_info.appendChild(add_cart_icon_container);

        const img_add_cart_icon = document.createElement('img');
        img_add_cart_icon.src = './icons/bt_add_to_cart.svg';
        add_cart_icon_container.appendChild(img_add_cart_icon);

        img_add_cart_icon.setAttribute('id', product.name);
        img_add_cart_icon.addEventListener('click', add_product_to_cart);
        
        cards_container.appendChild(product_card);
  
        img_product.addEventListener('click', full_detail_visibility);

    });
}

function print_product_info(imagen){
  products_array.forEach(producto => {
    if(producto.img == imagen){
      const img = document.querySelector('.product-img')
      img.setAttribute('src', producto.img);
      img.setAttribute('alt', producto.name);
      const price = document.querySelector('#full-detail .product-info p:nth-child(1)'); 
      price.innerHTML = '$ ' + producto.price;
      const name = document.querySelector('#full-detail .product-info p:nth-child(2)'); 
      name.innerHTML = producto.name;
      const des = document.querySelector('#full-detail .product-info p:nth-child(3)'); 
      des.innerHTML = producto.des;
    }
  });
}

function add_product_to_cart(e){

  let product_name = e.target.getAttribute('id');
  products_array.forEach(product => {
    if(product.name === product_name){
      products_in_cart.push(product);
      n_products_in_cart.innerText = products_in_cart.length;
    }
  });

  products_in_cart.forEach(product => {
    if(product.name === product_name){
      const item_container = document.createElement('div');
      item_container.setAttribute('class', 'shopping-cart');
      
      const img_container = document.createElement('figure');
  
      const img = document.createElement('img');
      img.setAttribute('src', product.img);
      img_container.appendChild(img);
  
      const name = document.createElement('p');
      name.innerText = product.name;
  
      const price = document.createElement('p');
      price.innerText = '$ ' + product.price;
  
      const delete_icon = document.createElement('img');
      delete_icon.setAttribute('src', './icons/icon_close.png');
      delete_icon.setAttribute('alt', 'close');
  
      item_container.append(img_container, name, price, delete_icon);
      
      cart_products_container.appendChild(item_container);

      total_price += product.price;
    }
  });

  total_p.innerText = '$ ' + total_price;

}


/* <div class="shopping-cart">
<figure>
  <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike">
</figure>
<p>Bike</p>
<p>$30,00</p>
<img src="./icons/icon_close.png" alt="close">
</div> */
print_product(products_array);