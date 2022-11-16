const request = new XMLHttpRequest()

const nav_bar_email = document.querySelector('.navbar-email');
const desktop_menu = document.querySelector('.desktop-menu');

const button_burguer = document.querySelector('.menu');
const mobile_menu = document.querySelector('.mobile-menu');

const shopping_cart = document.querySelector('.navbar-shopping-cart');
const cart_detail = document.querySelector('.product-detail');


request.open('GET', 'https://api.escuelajs.co/api/v1/products', true)

nav_bar_email.addEventListener('click', toggle_desktop_menu);
button_burguer.addEventListener('click', toggle_mobile_menu);
shopping_cart.addEventListener('click', toggle_shopping_cart);


function toggle_desktop_menu(){
    let is_cart_detail = cart_detail.classList.contains('inactive');

    if(is_cart_detail){
        desktop_menu.classList.toggle('inactive');
    } else{
        cart_detail.classList.add('inactive'); 
        desktop_menu.classList.toggle('inactive');
    }
};

function toggle_mobile_menu(){
    let is_cart_detail = cart_detail.classList.contains('inactive');
    
    if(is_cart_detail){
        mobile_menu.classList.toggle('inactive');
    } else{
        cart_detail.classList.add('inactive'); 
        mobile_menu.classList.toggle('inactive');
    }
};

function toggle_shopping_cart(){
    let is_desktop_menu = !desktop_menu.classList.contains('inactive');
    let is_mobile_menu = !mobile_menu.classList.contains('inactive');
    
    
    if(is_desktop_menu){
        desktop_menu.classList.add('inactive');
        cart_detail.classList.toggle('inactive');
    }else if(is_mobile_menu){
        mobile_menu.classList.add('inactive');
        cart_detail.classList.toggle('inactive'); 
    }else{
        cart_detail.classList.toggle('inactive');
    }
};

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

request.onload = function(){
    let data = JSON.parse(this.response)
    //console.log(data)
    if (request.status >= 200 && request.status < 400) {
        for (record of data){ 
            const product_card = document.createElement("div");
            product_card.setAttribute('class', 'product-card');
            
            const product_image = document.createElement('img');
            product_image.setAttribute('src', record['category']['image']);
            product_card.appendChild(product_image);

            const product_info = document.createElement('div');
            product_info.setAttribute('class', 'product-info');
            const product_info_div = document.createElement('div');
            const product_name = document.createElement('p');
            let name = record['title'];
            const product_price = document.createElement('p');
            let price = `$ ${record['price']}`; 

            product_price.append(price);
            product_name.append(name);
            product_info_div.append(product_price, product_name);

            const figure = document.createElement('figure');
            const figure_img = document.createElement('img');
            figure_img.setAttribute('src', "../icons/bt_add_to_cart.svg");
            figure.appendChild(figure_img);

            product_info.append(product_info_div, figure);
            product_card.appendChild(product_info);
            
            const cards_container = document.querySelector('.cards-container')
            cards_container.append(product_card)

            //document.body.append(product_card);            

            console.log(record);
        }
      } else {
        console.log('error');
      }
}

request.send()