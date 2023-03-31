// Desktop Menu
const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

navEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {

    // if (desktopMenu.classList.contains('inactive')) {
    //     desktopMenu.classList.remove('inactive');
    //     console.log("Quitaste la clase Inactive");
    // } 
    // else {
    //     desktopMenu.classList.add('inactive');
    //     console.log("Agregaste la clase Inactive");
    // }
    
    desktopMenu.classList.toggle('inactive');

    // Cerrar los siguientes:
    mobileMenu.classList.add('inactive');
    asideMyOrder.classList.add('inactive');
}

// Mobile Menu
const hamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

hamIcon.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');

    // Cerrar los siguientes:
    desktopMenu.classList.add('inactive');
    asideMyOrder.classList.add('inactive');
}


// Aside My order
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const asideMyOrder = document.querySelector('.product-detail');

shoppingCart.addEventListener('click', toggleAsideMyOrder);

function toggleAsideMyOrder() {
    asideMyOrder.classList.toggle('inactive');

    // Cerrar los siguientes:
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
}


// Dynamically add a product to the Product Cards container

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

const productList = [];

productList.push(
    {
        name: 'Bycicle',
        price: 3500,
        img: 'https://m.media-amazon.com/images/I/71itdkblCyL._AC_SX679_.jpg',
    }
);

productList.push(
    {
        name: 'Laptop',
        price: 14000,
        img: 'https://www.officedepot.com.mx/medias/100097591-2.jpg-515ftw?context=bWFzdGVyfHJvb3R8MTA2ODYyfGltYWdlL2pwZWd8aDU1L2hhMS8xMTAyNzA1NDY1NzU2Ni8xMDAwOTc1OTEtMi5qcGdfNTE1ZnR3fDBjMTc0NjY0NTk4NmZlNGYxNzk0NTI4MjhiNDY2MTgxYTI1YWQyZmZmMGZkYmJjNDM0YzEzMWQ2ZWNiOWRmNjc',
    }
);
/*
productList.push(
    {
        name: 'Frisbit',
        price: 14000748532657834,
        img: './logos/S6000206.JPG',
    }
);
*/

const cardsContainer = document.querySelector('.cards-container');

function renderProducts(arr) {
    for (product of productList) {
    
        // Creating HTML elements
    
        var productCardDiv = document.createElement('div');
        productCardDiv.classList.add('product-card');
    
        var cardImg = document.createElement('img');
        cardImg.setAttribute('src', product.img);
    
        var infoDivContainer = document.createElement('div');
        infoDivContainer.classList.add('product-info');
    
        var infoDiv = document.createElement('div');
    
        var priceP = document.createElement('p');
        priceP.innerText = '$' + product.price;
    
        var nameP = document.createElement('p');
        nameP.innerText = product.name;
    
        var imageContainerFigure = document.createElement('figure');
    
        var shoppingCartImage = document.createElement('img');
        shoppingCartImage.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        // Insert Child elements into Parent elements
    
        imageContainerFigure.appendChild(shoppingCartImage);
    
        infoDiv.appendChild(priceP);
        infoDiv.appendChild(nameP);
    
        infoDivContainer.appendChild(infoDiv);
        infoDivContainer.appendChild(imageContainerFigure);
    
        productCardDiv.appendChild(cardImg);
        productCardDiv.appendChild(infoDivContainer);
    
        cardsContainer.appendChild(productCardDiv);
    }
}

renderProducts(productList);







