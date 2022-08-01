const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const carritoDeCompras = document.querySelector("#shoppingCartContainer");
const cardsContainer = document.querySelector(".cards-container");
const mainContainer = document.querySelector(".main-container");
const productDetailContainer = document.querySelector("#productDetail");
const productDetailButtonClose = document.querySelector(".product-detail-close");


menuCarritoIcon.addEventListener('click', toggleCarritoCompras);
menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
mainContainer.addEventListener('click', colseMenusClick);
productDetailButtonClose.addEventListener('click', closeProductDetail);


function colseMenusClick() {

    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')
    const isCarritoComprasClosed = carritoDeCompras.classList.contains('inactive');
    
    if (!isMobileMenuClosed || !isDesktopMenuClosed || !isCarritoComprasClosed )  {

        mobileMenu.classList.add("inactive");
        desktopMenu.classList.add("inactive");   
        carritoDeCompras.classList.add("inactive");
   
    }

}

function toggleDesktopMenu() {
    const isCarritoComprasClosed = carritoDeCompras.classList.contains('inactive');

    if (!isCarritoComprasClosed) {

            carritoDeCompras.classList.add("inactive");
       
    }
    productDetailContainer.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isCarritoComprasClosed = carritoDeCompras.classList.contains('inactive');

    if (!isCarritoComprasClosed) {

            carritoDeCompras.classList.add("inactive");
       
    }
    productDetailContainer.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoCompras() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')

    if (!isMobileMenuClosed || !isDesktopMenuClosed) {

        mobileMenu.classList.add("inactive");
        desktopMenu.classList.add("inactive");   
   
    }
    productDetailContainer.classList.add('inactive');
    carritoDeCompras.classList.toggle("inactive")

}
function openProductDetailContainer() {
    desktopMenu.classList.toggle('inactive');
    carritoDeCompras.classList.toggle("inactive")
    productDetailContainer.classList.remove('inactive');

    
}
function closeProductDetail() {
    
    productDetailContainer.classList.add('inactive');
    
}

const productList = [];
productList.push({

    name: 'bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({

    name: 'Nike Air max 270',
    price: 70,
    image: "https://images.pexels.com/photos/2225727/pexels-photo-2225727.jpeg?auto=compress&cs=tinysrgb&w=400",
});
productList.push({

    name: 'MacbookPro 15"',
    price: 1200,
    image: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400",
});
productList.push({

    name: 'Dell XPS 9230',
    price: 1300,
    image: "https://images.pexels.com/photos/1266982/pexels-photo-1266982.jpeg?auto=compress&cs=tinysrgb&w=600",
});
productList.push({

    name: 'RTX 3090ti',
    price: 3200,
    image: "https://images.pexels.com/photos/4581902/pexels-photo-4581902.jpeg?auto=compress&cs=tinysrgb&w=400"
});


    /* <div class="product-card">
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
        </section> 
    */
 

    function renderProducts(arr) {
        for (product of arr) {
        
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
    
            const productImg = document.createElement('img');
            productImg.setAttribute('src', product.image);
            productImg.addEventListener('click', openProductDetailContainer);
    
            const productInfo = document.createElement('div');
            productInfo.classList.add('product-info');
    
            const productInfoDiv = document.createElement('div');
            
            const productPrice = document.createElement('p');
            productPrice.innerText = `$${product.price}`;
    
    
            const productName = document.createElement('p');
            productName.innerText = product.name;
    
            productInfoDiv.appendChild(productPrice);
            productInfoDiv.appendChild(productName);
    
            const productFigure = document.createElement('figure');
            
            const cartIcon = document.createElement('img');
            cartIcon.setAttribute('src', "./icons/bt_add_to_cart.svg");
            cartIcon.setAttribute('alt', `Imagen de ${product.name}`);
    
            productFigure.appendChild(cartIcon); 
    
            productInfo.appendChild(productInfoDiv);
            productInfo.appendChild(productFigure);
            
            productCard.appendChild(productImg);
            productCard.appendChild(productInfo);
    
            cardsContainer.appendChild(productCard);
    
            
    
        }
    }
  
    renderProducts(productList);

    


