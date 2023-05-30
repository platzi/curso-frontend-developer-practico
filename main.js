const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');
const productDeteailContainer = document.querySelector('.product-detail-info');
const productDeteailContainerClose = document.querySelector('.product-detail-close-info');



menuEmail.addEventListener("click", toggleDesktopMenu);
burgerMenu.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);
productDeteailContainerClose.addEventListener('click', closeProductDetailAside);


function toggleDesktopMenu (){
    const isMenuCarritoClosed = desktopMenu.classList.add('inactive');
    if(!isMenuCarritoClosed){
        aside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
    productDeteailContainer.classList.add('inactive');
}

function toggleMobileMenu (){

    const isAsideClosed = aside.classList.contains('inactive');

    if(!isAsideClosed){
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
    productDeteailContainer.classList.add('inactive');
}

function toggleCarritoAside (){
    
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');
    productDeteailContainer.classList.add('inactive');

    }

function openProductDetailAside(){
    productDeteailContainer.classList.remove('inactive');
}

function closeProductDetailAside(){
    productDeteailContainer.classList.add('inactive');
}

const productList = [];
productList.push(
    {name: "Bike",
    price:  120,
    image:  "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            }
);

productList.push(
    {name: "Monitor",
    price:  320,
    image:  "https://images.pexels.com/photos/251225/pexels-photo-251225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
);

productList.push(
    {name: "Compu",
    price:  620,
    image:  "https://images.pexels.com/photos/69432/pexels-photo-69432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
);

productList.push(
    {name: "Bike",
    price:  120,
    image:  "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            }
);

productList.push(
    {name: "Monitor",
    price:  320,
    image:  "https://images.pexels.com/photos/251225/pexels-photo-251225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
);

productList.push(
    {name: "Compu",
    price:  620,
    image:  "https://images.pexels.com/photos/69432/pexels-photo-69432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
);

productList.push(
    {name: "Bike",
    price:  120,
    image:  "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            }
);

productList.push(
    {name: "Monitor",
    price:  320,
    image:  "https://images.pexels.com/photos/251225/pexels-photo-251225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
);

productList.push(
    {name: "Compu",
    price:  620,
    image:  "https://images.pexels.com/photos/69432/pexels-photo-69432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
);


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
*/

function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', product.image);
        productImgCart.addEventListener('click', openProductDetailAside);
        
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCarrito = document.createElement('img');
        productImgCarrito.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCarrito);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImgCart);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    
    }
}

renderProducts(productList);


