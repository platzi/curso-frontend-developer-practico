const navbar_email = document.querySelector('.navbar-email');
const navbar_burger = document.querySelector('.menu');
const navbar_shopping_cart = document.querySelector('.navbar-shopping-cart');
const desktop_menu = document.querySelector('.desktop-menu');
const mobile_menu = document.querySelector('.mobile-menu');
const my_order_desktop = document.querySelector('.product-detail');
const cards_container = document.querySelector('.cards-container');

// formulario
const form_container = document.querySelector('.form-container');
const input_name = document.querySelector('#input_name');
const input_price = document.querySelector('#input_price');
const input_img_url = document.querySelector('#input_img_url');
const add_button = document.querySelector('.add-button');

navbar_email.addEventListener('click', my_account_menu_visibility);
navbar_burger.addEventListener('click', menu_visibility);
navbar_shopping_cart.addEventListener('click', my_order_visibility);

function my_account_menu_visibility(){
    desktop_menu.classList.toggle('inactive');
    if(!my_order_desktop.classList.contains('inactive')){
        my_order_desktop.classList.toggle('inactive');
    }
}

function menu_visibility(){
    mobile_menu.classList.toggle('visible');
    if(!my_order_desktop.classList.contains('inactive')){
        my_order_desktop.classList.toggle('inactive');
    } 
}

function my_order_visibility(){
    my_order_desktop.classList.toggle('inactive');
    if(!desktop_menu.classList.contains('inactive')){
        desktop_menu.classList.toggle('inactive');
    }
    if(mobile_menu.classList.contains('visible')){
        mobile_menu.classList.toggle('visible');
    }
}

const products_array = [  {
    name: 'Cafetera',
    price: 65.00,
    img: './img/cafetera.png'
  },
  {
    name: 'Lavadora',
    price: 250.00,
    img: './img/lavadora.png'
  },
  {
    name: 'Smart TV',
    price: 350.00,
    img: './img/smart-tv.png'
  },
  {
    name: 'Estufa eléctrica',
    price: 125.00,
    img: './img/estufa-electrica.png'
  },
  {
    name: 'Refrigerador',
    price: 400.00,
    img: './img/refrigerador.png'
  },
  {
    name: 'Microondas',
    price: 50.00,
    img: './img/microondas.png'
  },
  {
    name: 'Cocina eléctrica',
    price: 180.00,
    img: './img/cocina-electrica.png'
  },
  {
    name: 'Aspiradora',
    price: 75.00,
    img: './img/aspiradora.png'
  },
  {
    name: 'Cafetera eléctrica',
    price: 35.00,
    img: './img/cafetera-electrica.png'
  },
  {
    name: 'Plancha',
    price: 25.00,
    img: './img/plancha.png'
  },
  {
    name: 'Plancha de vapor',
    price: 55.00,
    img: './img/plancha-vapor.png'
  },
  {
    name: 'Licuadora',
    price: 30.00,
    img: './img/licuadora.png'
  },
  {
    name: 'Horno eléctrico',
    price: 175.00,
    img: './img/horno-electrico.png'
  },
  {
    name: 'Ventilador',
    price: 40.00,
    img: './img/ventilador.png'
  },
  {
    name: 'Estéreo',
    price: 75.00,
    img: './img/estereo.png'
  },
  {
    name: 'Teléfono Inteligente',
    price: 200.00,
    img: './img/telefono-inteligente.png'
  },
  {
    name: 'Placa de cocina eléctrica',
    price: 120.00,
    img: './img/plancha-cocina-electrica.png'
  },
  {
    name: 'Secadora',
    price: 200.00,
    img: './img/secadora.png'
  },
  {
    name: 'Lavavajillas',
    price: 250.00,
    img: './img/lavavajillas.png'
  },
  {
    name: 'Aire acondicionado',
    price: 350.00,
    img: './img/aire-acondicionado.png'
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
        
        cards_container.appendChild(product_card);
        console.log(cards_container)
    });
}

print_product(products_array);