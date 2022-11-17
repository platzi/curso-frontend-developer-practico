const request = new XMLHttpRequest()

const nav_bar_email = document.querySelector('.navbar-email');
const desktop_menu = document.querySelector('.desktop-menu');

const cards_container = document.querySelector('.cards-container')
const product_detail = document.querySelector('.product-detail')
const product_detail_close = document.querySelector('.product-detail-close')

const button_burguer = document.querySelector('.menu');
const mobile_menu = document.querySelector('.mobile-menu');

const shopping_cart = document.querySelector('.navbar-shopping-cart');
const cart_detail = document.querySelector('.cart-product-detail');


request.open('GET', 'https://api.escuelajs.co/api/v1/products?offset=0&limit=12', true)

nav_bar_email.addEventListener('click', toggle_desktop_menu);
button_burguer.addEventListener('click', toggle_mobile_menu);
shopping_cart.addEventListener('click', toggle_shopping_cart);
product_detail_close.addEventListener('click', close_product_detail);



function toggle_desktop_menu(){
    let is_cart_detail = cart_detail.classList.contains('inactive');

    if(is_cart_detail){
        desktop_menu.classList.toggle('inactive');
    } else{
        cart_detail.classList.add('inactive'); 
        desktop_menu.classList.toggle('inactive');
    }
    close_product_detail()
};

function toggle_mobile_menu(){
    let is_cart_detail = cart_detail.classList.contains('inactive');
    
    if(is_cart_detail){
        mobile_menu.classList.toggle('inactive');
    } else{
        cart_detail.classList.add('inactive'); 
        mobile_menu.classList.toggle('inactive');
    }
    close_product_detail()
};

function toggle_shopping_cart(){
    const is_desktop_menu = !desktop_menu.classList.contains('inactive');
    const is_mobile_menu = !mobile_menu.classList.contains('inactive');
    
    if(is_desktop_menu){
        desktop_menu.classList.add('inactive');
        cart_detail.classList.toggle('inactive');
    }else if(is_mobile_menu){
        mobile_menu.classList.add('inactive');
        cart_detail.classList.toggle('inactive'); 
    }else{
        cart_detail.classList.toggle('inactive');
    }
    close_product_detail()
}

function open_product_detail() {
    cart_detail.classList.add('inactive');
    product_detail.classList.remove('inactive');
  }
  
function close_product_detail() {
    product_detail.classList.add('inactive');
};

request.onload = function(){
    let data = JSON.parse(this.response)
    //console.log(data)
    if (request.status >= 200 && request.status < 400) {
        for (record of data){ 
            const product_card = document.createElement("div");
            product_card.setAttribute('class', 'product-card');
            
            const product_image = document.createElement('img');
            product_image.setAttribute('src', record.category.image);
            product_image.addEventListener('click', open_product_detail);

            const product_info = document.createElement('div');
            product_info.setAttribute('class', 'products-info');

            const product_info_div = document.createElement('div');
            const product_name = document.createElement('p');
           
            let name = record.title;
            const product_price = document.createElement('p');
            let price = `$ ${record.price}`; 

           

            const figure = document.createElement('figure');
            const figure_img = document.createElement('img');
            figure_img.setAttribute('src', "./icons/bt_add_to_cart.svg");
            

            product_card.appendChild(product_image);
            product_price.append(price);
            product_name.append(name);
            product_info_div.append(product_price, product_name);
            figure.appendChild(figure_img);
            product_info.append(product_info_div, figure);
            product_card.appendChild(product_info);
            
            cards_container.append(product_card)

            //document.body.append(product_card);            

            console.log(record);
        };

      } else {
        console.log('error');
      }
}

request.send()