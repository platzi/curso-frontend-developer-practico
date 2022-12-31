// General tags
const body = document.querySelector('body');

// Selectors
const nav_email = document.querySelector('li.navbar-email');
const desktop_menu = document.querySelector('div.desktop-menu');
const burger_button = document.querySelector('img.menu');
const mobile_menu = document.querySelector('aside.mobile-menu');
const cart_button = document.querySelector('li.navbar-shopping-cart');
const cart_detail = document.querySelector('aside.cart-detail');
const cards_container = document.querySelector('div.cards-container');
const product_detail = document.querySelector('aside.product-detail');
const close_product_detail = document.querySelector('div.product-detail-close');
const wrapper = document.querySelector('div.wrapper');
const cart_items_count = document.getElementById('cart-items-count');
const cart_container = document.querySelector('div.shopping-cart-container');
const total = document.querySelector('div.order>p:nth-child(2)');

//A constant array so cart items can be pushed
const cart = [];
// constant array of products, later i am gonna consume a REST API  
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

// Event listeners
nav_email.addEventListener('click', onToggleDesktopPopUpMenu);
burger_button.addEventListener('click', onToggleMobileMenu);
cart_button.addEventListener('click', onToggleCartDetail);
close_product_detail.addEventListener('click', onCloseProductDetail);

// HTML Create Elements
function createProductElementHTML(product){
    const product_card = document.createElement('div');
    product_card.classList.add('product-card');

    const product_image = document.createElement('img');
    product_image.setAttribute('src', product.image);
    product_image.addEventListener('click', onOpenProductDetail);

    const product_info = document.createElement('div');
    product_info.classList.add('card-info');

    const product_info_div = document.createElement('div');

    const product_price = document.createElement('p');
    product_price.innerText= `$${product.price}`;

    const product_name = document.createElement('p');
    product_name.innerText = product.name;

    const figure_container = document.createElement('figure');
    const image_cart_icon = document.createElement('img');
    image_cart_icon.setAttribute('src', './icons/bt_add_to_cart.svg');
    figure_container.addEventListener('click', onAddCart);

    figure_container.appendChild(image_cart_icon);
    product_info_div.append(product_price, product_name);
    product_info.append(product_info_div, figure_container);
    product_card.append(product_image, product_info);
    


    return product_card;
}

function createCartItemElementHTML(product){
  
    const shopping_cart = document.createElement('div');
    shopping_cart.classList.add('shopping-cart');

    const figure = document.createElement('figure');
    const img = document.createElement('img');
    img.setAttribute('src', product.image_source);

    const div_info = document.createElement('div');

    const name = document.createElement('p');
    name.innerText = product.name;

    const units = document.createElement('p');
    units.innerText = product.units;

    const price = document.createElement('p');
    price.innerText = product.price;

    const delete_cart_item = document.createElement('img');
    delete_cart_item.setAttribute('src', './icons/icon_close.png');
    delete_cart_item.addEventListener('click', onDeleteCartItem);

    div_info.append(name, units);

    figure.appendChild(img);
    shopping_cart.append(figure, div_info, price, delete_cart_item);

    return shopping_cart;

}

// Click Events
function onToggleDesktopPopUpMenu(event){

    //Appear wrapper and then appear the popup menu
    if(wrapper.classList.contains('inactive')){
        body.classList.add('wrapper--overflow-none');
        wrapper.classList.add('wrapper--overflow-none');
        wrapper.classList.add('wrapper--fade-in');
        wrapper.classList.remove('inactive');
        setTimeout(function(){
    
            desktop_menu.classList.remove('inactive');
        }, 250);

        return;
    }
    if(!cart_detail.classList.contains('inactive'))
    {
        console.log('contiene active');
        
        cart_detail.classList.add('product-detail--hide');
        
        setTimeout(function(){
            cart_detail.classList.add('inactive');
            cart_detail.classList.remove('product-detail--show');
            cart_detail.classList.remove('product-detail--hide');
            
            desktop_menu.classList.remove('inactive');
            
        }, 250);

        return;
    }

    if(!product_detail.classList.contains('inactive')){
        product_detail.classList.add('product-detail--hide');
    
        setTimeout(function(){
            product_detail.classList.add('inactive');
            product_detail.classList.remove('product-detail--show')
            product_detail.classList.remove('product-detail--hide');

            desktop_menu.classList.remove('inactive');
            },250);
            return;
    }

    desktop_menu.classList.add('inactive');
    wrapper.classList.add('wrapper--fade-out');
    setTimeout(function(){
        wrapper.classList.remove('wrapper--fade-in');
        wrapper.classList.remove('wrapper--fade-out');
        wrapper.classList.remove('wrapper--overflow-none');
        wrapper.classList.add('inactive');
        body.classList.remove('wrapper--overflow-none');

    }, 250);
}

function onToggleMobileMenu(event){

    if(wrapper.classList.contains('inactive')){
        // It means that is closed
        
        body.classList.add('wrapper--overflow-none');

        wrapper.classList.add('wrapper--overflow-none');
        wrapper.classList.add('wrapper--fade-in');
        wrapper.classList.remove('inactive');
        setTimeout(function(){
            
          mobile_menu.classList.add('mobile-menu--show');
          mobile_menu.classList.remove('inactive');
        }, 250);

        return;
    }
    else{

        if(!cart_detail.classList.contains('inactive')){
        
            cart_detail.classList.add('product-detail--hide');
            setTimeout(function(){
                cart_detail.classList.add('inactive');
                cart_detail.classList.remove('product-detail--show');
                cart_detail.classList.remove('product-detail--hide');
                
    
                mobile_menu.classList.add('mobile-menu--show');
                mobile_menu.classList.remove('inactive');
            }, 250);
            
            
            return;
        }
            
    
        if(!product_detail.classList.contains('inactive')){
            product_detail.classList.add('product-detail--hide');
        
            setTimeout(function(){
                product_detail.classList.add('inactive');
                product_detail.classList.remove('product-detail--show');
                product_detail.classList.remove('product-detail--hide');
    
                mobile_menu.classList.add('mobile-menu--show');
                mobile_menu.classList.remove('inactive');
            }, 250);

            return;
        }

        mobile_menu.classList.add('mobile-menu--hide');
        setTimeout(function(){
            mobile_menu.classList.remove('mobile-menu--show');
            mobile_menu.classList.remove('mobile-menu--hide');
            mobile_menu.classList.add('inactive');

            wrapper.classList.add('wrapper--fade-out');
            setTimeout(function(){
                wrapper.classList.remove('wrapper--fade-in');
                wrapper.classList.remove('wrapper--fade-out');
                wrapper.classList.remove('wrapper--overflow-none');
                body.classList.remove('wrapper--overflow-none');
                wrapper.classList.add('inactive');
            },250);
        }, 250);
    }
        

}

function onToggleCartDetail(event){
    if(wrapper.classList.contains('inactive')){
        // It means that is closed   
        body.classList.add('wrapper--overflow-none');
        wrapper.classList.add('wrapper--overflow-none');
        wrapper.classList.add('wrapper--fade-in');
        wrapper.classList.remove('inactive');
        setTimeout(function(){
            
            cart_detail.classList.add('product-detail--show');
            cart_detail.classList.remove('inactive');
            cartTotal();
        }, 250);

        return;
    }
    else{
        
        if(!mobile_menu.classList.contains('inactive')){
            
            mobile_menu.classList.add('mobile-menu--hide');
            setTimeout(function(){
                mobile_menu.classList.remove('mobile-menu--show');
                mobile_menu.classList.remove('mobile-menu--hide');
                mobile_menu.classList.add('inactive');

                cart_detail.classList.add('product-detail--show');
                cart_detail.classList.remove('inactive');
            }, 250);
            return;
        }

        if(!product_detail.classList.contains('inactive')){
            product_detail.classList.add('product-detail--hide');
    
            setTimeout(function(){
                product_detail.classList.add('inactive');
                product_detail.classList.remove('product-detail--show')
                product_detail.classList.remove('product-detail--hide');

                cart_detail.classList.add('product-detail--show');
                cart_detail.classList.remove('inactive');
            },250);

            return;
        }

        if(!desktop_menu.classList.contains('inactive'))
            desktop_menu.classList.toggle('inactive');

        
        cart_detail.classList.add('product-detail--hide');
        
        setTimeout(function(){
            cart_detail.classList.add('inactive');
            cart_detail.classList.remove('product-detail--show');
            cart_detail.classList.remove('product-detail--hide');
            
            wrapper.classList.add('wrapper--fade-out');
            setTimeout(function(){
                wrapper.classList.remove('wrapper--fade-in');
                wrapper.classList.remove('wrapper--fade-out');
                wrapper.classList.remove('wrapper--overflow-none');
                wrapper.classList.add('inactive');
                body.classList.remove('wrapper--overflow-none');

            }, 250);
        }, 250);
    }
}

function onOpenProductDetail(event){
    if(!mobile_menu.classList.contains('inactive'))
        mobile_menu.classList.toggle('inactive');
    
    if(!desktop_menu.classList.contains('inactive'))
        desktop_menu.classList.toggle('inactive');

    if(!cart_detail.classList.contains('inactive'))
        cart_detail.classList.toggle('inactive');

    if(wrapper.classList.contains('inactive'))
        wrapper.classList.remove('inactive');
    
    wrapper.classList.add('wrapper--overflow-none');
    body.classList.add('wrapper--overflow-none');
    wrapper.classList.add('wrapper--fade-in');
    setTimeout(function(){
        
        product_detail.classList.add('product-detail--show');
        product_detail.classList.remove('inactive');

        const product_info = event.target.nextSibling;
        const image_source = event.target.getAttribute('src');
        const price = product_info.querySelector('p:nth-child(1)').innerText;
        const name = product_info.querySelector('p:nth-child(2)').innerText;

        product_detail.querySelector('.product-detail>img').setAttribute('src', image_source)
        product_detail.querySelector('div.product-info>p:nth-child(1)').innerText = price;
        product_detail.querySelector('div.product-info>p:nth-child(2)').innerText = name;
    }, 250);
    
}

function onCloseProductDetail(event){

    product_detail.classList.add('product-detail--hide');
    
    setTimeout(function(){
        product_detail.classList.add('inactive');
        product_detail.classList.remove('product-detail--show')
        product_detail.classList.remove('product-detail--hide');

        wrapper.classList.add('wrapper--fade-out');
        setTimeout(function(){
            wrapper.classList.remove('wrapper--fade-in');
            wrapper.classList.remove('wrapper--fade-out');
            wrapper.classList.remove('wrapper--overflow-none');
            wrapper.classList.add('inactive');

            body.classList.remove('wrapper--overflow-none');
        },250);
    },250);
    

}

function onAddCart(event){

    const product_info = event.composedPath()[2]; 
    const price = product_info.querySelector('div>p:nth-child(1)').innerText;
    const name = product_info.querySelector('div>p:nth-child(2)').innerText;
    const image_source = product_info.previousSibling.getAttribute('src');

    let found = cart.some(function(cart_item){
        if(cart_item.name === name){
            cart_item.units += 1;
            return true;
        }    
    })
    
    if(!found){
        cart.push({
            name : name,
            price : price,
            units: 1,
            image_source : image_source
        });
    }

    clearContainer(cart_container);
    cart_items_count.innerText = cart.length;
    arrayRender(cart_container, cart, createCartItemElementHTML);
}

function onDeleteCartItem(event){
    //animation of delete
    console.log()
    const parent = event.composedPath()[1];
    const elements = cart_container.childNodes;
    let index = Array.prototype.indexOf.call(cart_container.children, parent);
    let length = elements.length - 1;


    if(index > 0 && index !== length){
        parent.classList.add('product-detail--hide');
        cart.splice(index, 1);
        
        setTimeout(function(){
            for(let i = index; i < elements.length; i++){
                elements[i].classList.add('shopping-cart-container--delete-element');
            }

            setTimeout(function(){
                parent.remove();
                
                for(let i = index; i < elements.length; i++){
                    elements[i].classList.remove('shopping-cart-container--delete-element');
                }   
            }, 250)
        }, 250);
        
        cart_items_count.innerText = cart.length;
        return;
    }
    else if(index == 0){
        console.log('Eliminando el primero');
        parent.classList.add('product-detail--hide');
        cart.shift();
        setTimeout(function(){
            cart_container.classList.add('shopping-cart-container--delete-element');
            setTimeout(function(){
                parent.remove();
                cart_container.classList.remove('shopping-cart-container--delete-element');
            }, 250);
        }, 250);

        cart_items_count.innerText = cart.length;
        return;
    }

    cart.pop();
    parent.classList.add('product-detail--hide');
    setTimeout(function(){
        parent.classList.remove('product-detail--hide');
        parent.remove();
    }, 250);

    cart_items_count.innerText = cart.length;
    
}
// Renders
function arrayRender(node_container, array, html_create_element_function){
    array.forEach(function(element){
        node_container.appendChild(html_create_element_function(element));
    })
}


// Clear childs

function clearContainer(node_element){
    while(node_element.firstChild){
        node_element.removeChild(node_element.lastChild);
    }
}


// Specific functions

function cartTotal(){
    const cart_items = cart_container.querySelectorAll('div.shopping-cart');
    let totalPay = 0;
    cart_items.forEach(function(item){

        let price = Number(item.querySelector('.shopping-cart>p').innerText.replace('$', ''));
        let units = Number(item.querySelector('.shopping-cart>div>p:nth-child(2)').innerText);
        
        totalPay += (price * units);

    });
    console.log(totalPay);
    total.innerText = `$${totalPay}`;
    
}

arrayRender(cards_container, productList, createProductElementHTML);
arrayRender(cart_container, cart, createCartItemElementHTML);