const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const hamburgerMenu = document.querySelector(".menu");
const shoppingCart = document.querySelector(".navbar-shopping-cart");
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector(".product-detail");

menuEmail.addEventListener("click", toggleDesktopMenu);
hamburgerMenu.addEventListener("click", toggleMobileMenu);
shoppingCart.addEventListener("click", toggleCartAside);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
  aside.classList.add("inactive");
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle("slide-right");
  aside.classList.add("inactive");
}

function toggleCartAside() {
  aside.classList.toggle("inactive");
}

const productList = [];

productList.push ({
    name:'Bike',
    price: 12700,
    image: 'https://m.media-amazon.com/images/I/71bPvQRbJkS._AC_SL1500_.jpg'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1200,
    image: 'https://m.media-amazon.com/images/I/61phUVdKIYL._AC_SX679_.jpg'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1600,
    image: 'https://m.media-amazon.com/images/I/61ivmDAZomL._AC_SL1000_.jpg'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1500,
    image: 'https://m.media-amazon.com/images/I/71DUpOLEe6L._AC_SL1500_.jpg'
});
productList.push ({
    name:'Seat',
    price: 300,
    image: 'https://cdn.shopify.com/s/files/1/0275/2426/8118/products/SDL_SW80336TG-2_PD1.png?v=1633409252&width=600'
});
productList.push ({
    name:'Cycling Shoes',
    price: 2200,
    image: 'https://m.media-amazon.com/images/I/61ig1Mgpd8L._AC_SX695_.jpg'
});
productList.push ({
    name:'Sunglasses',
    price: 800,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602'
});
productList.push ({
    name:'Sunglasses',
    price: 600,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/siroko-tech-k3s-clearfog-lente-antiniebla-frontal/1200x/crop_center.jpg?v=1635209603'
});
productList.push ({
    name:'Bicycle seat bag',
    price: 876,
    image: 'https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg'
}); 
    
    for (product of productList){

        const htmlCards= `<div class="product-card">
        <img src=${product.image} class="product-img">
        <div class="product-info">
        <div>
        <p>$${product.price}</p>
        <p>${product.name}</p>
        </div>
        <figure>
        <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
        </div>
    </div>`
    
    const cardsContainer = document.querySelector('.cards-container');
    cardsContainer.innerHTML += htmlCards
    }
