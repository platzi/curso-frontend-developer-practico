const menuEmail = document.querySelector('.navbar-email');
const menuDesktop = document.querySelector('.desktop-menu');

const menuMobileOption = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');

const shoopingCart = document.querySelector('.navbar-shopping-cart');
const containerCartShooping = document.querySelector('.product-detail');

const mainContainerCart = document.querySelector('.cards-container');
const mainContainer = document.querySelector('.main-container');


const productList = [];
productList.push({
        name:'Computer',
        price:220,
        image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
        name: 'Cellphone',
        price: 5620,
        image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
        name: 'Bike',
        price: 5961,
        image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});


menuEmail.addEventListener("click", toggleDesktopMenu);
menuMobileOption.addEventListener("click", toggleDesktopMenuMobile);
shoopingCart.addEventListener('click',toggleContainerCart);

function toggleDesktopMenu(){
       
        if(!(containerCartShooping.classList.toggle('inactive'))){
                containerCartShooping.classList.toggle('inactive');
                menuDesktop.classList.toggle('inactive');
        }else{
                menuDesktop.classList.toggle('inactive');
        }

}

function toggleDesktopMenuMobile(){
        ;
        if(!(containerCartShooping.classList.toggle('inactive'))){
                containerCartShooping.classList.toggle('inactive');
                menuMobile.classList.toggle('inactive')
        }else{
                menuMobile.classList.toggle('inactive')
        }
}

function toggleContainerCart(){
        if(!(menuDesktop.classList.contains("inactive"))){
                menuDesktop.classList.toggle('inactive'); 
                containerCartShooping.classList.toggle('inactive');
        }else if(!(menuMobile.classList.toggle('inactive'))){
                menuMobile.classList.toggle('inactive');
                containerCartShooping.classList.toggle('inactive');
        }
        else{
                containerCartShooping.classList.toggle('inactive');
        }
        
}

for(product of productList){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const img = document.createElement('img');
        img.setAttribute('src',product.image);


        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const info = document.createElement('div');

        const price = document.createElement('p');
        price.innerText ='$'+ product.price ;

        const name = document.createElement('p');
        name.innerText = product.name;

        const cart = document.createElement('figure');

        const cartImage = document.createElement('img');
        cartImage.setAttribute('src',"./icons/bt_add_to_cart.svg");
      

        cart.appendChild(cartImage);
        info.appendChild(price);
        info.appendChild(name);
        productInfo.appendChild(info);
        productInfo.appendChild(cart);
        productCard.appendChild(img);
        productCard.appendChild(productInfo) ;
        
        mainContainerCart.appendChild(productCard);
        
        
}

mainContainer.appendChild(mainContainerCart);


