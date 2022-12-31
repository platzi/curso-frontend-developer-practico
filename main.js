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

    figure_container.appendChild(image_cart_icon);
    product_info_div.append(product_price, product_name);
    product_info.append(product_info_div, figure_container);
    product_card.append(product_image, product_info);
    


    return product_card;
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

// Renders
function productsRender(products_array){

    products_array.forEach(function(product){
        cards_container.appendChild(createProductElementHTML(product));
    })
}

productsRender(productList);