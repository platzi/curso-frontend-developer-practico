// Guardando elementos de index.html ----------------------------

const menuEmail = document.querySelector('.navbar-email'); // Email on the navbar
const desktopMenu = document.querySelector('.desktop-menu'); // Desktop menu
const mobileMenuLogo = document.querySelector('.menu'); //Mobile menu Logo
const mobileMenu = document.querySelector('.mobile-menu'); //Mobile menu
const shoppingCartMenu = document.querySelector('.navbar-shopping-cart'); //Navbar shopping cart
const shoppingCartContainer = document.querySelector('#shoppingCartContainer') //Aside product order
const productDetailContainer = document.querySelector('#productDetail') //Aside product order
const productDetailCloseIcon = document.querySelector('.product-detail-close'); //Close product detail icon
const cardsContainer = document.querySelector('.cards-container'); //Aside product order

const orderContent = document.querySelector('.my-order-content');  //Shopping cart products
console.log(orderContent.childNodes);
const shoppingCartCounter = document.querySelector('.shopping-cart-counter'); //Products added counter
shoppingCartCounter.innerText = 0;
// Asignando funciones a eventos-------------------------

//Clicking email on the navbar
menuEmail.addEventListener('click', toggleDesktopMenu); 
//Clicking menu on the mobile version
mobileMenuLogo.addEventListener('click', toogleMobileMenu);
//Clicking shopping cart
shoppingCartMenu.addEventListener('click', toggleShoppingCartContainer);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);



// Agregandos productos a la lista de productos-------------------------

const productList = [];
productList.push({
    id: 0,
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: 'Esta bicicleta tiene una movilidad increible, puedes llegar a diferentes lugares en muy poco tiempo, viajar por el mundo mientras eres saludable'
});

productList.push({
    id: 1,
    name: 'Pantalla',
    price: 220,
    image: 'https://i.pinimg.com/564x/3f/c3/9e/3fc39e45e3e14d467ca6155e9ef562aa.jpg',
    description: 'Este televisor sirve para ver cosas increíbles, películas increíbles, series increíble, partidos increíblos. La pantalla es increíble'
});

productList.push({
    id: 2,
    name: 'Computador',
    price: 650,
    image: 'https://i.pinimg.com/564x/37/71/45/377145b6e7b4fbd9b939f78720a8d4cd.jpg',
    description: 'Este computador te sirve para hacer cosas increíbles, manejar programas increíbles, jugar videojuegos increíbles y programar cosas increíbles'
});

productList.push({
    id: 3,
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: 'Esta bicicleta tiene una movilidad increible, puedes llegar a diferentes lugares en muy poco tiempo, viajar por el mundo mientras eres saludable'
});

productList.push({
    id: 4,
    name: 'Pantalla',
    price: 220,
    image: 'https://i.pinimg.com/564x/3f/c3/9e/3fc39e45e3e14d467ca6155e9ef562aa.jpg',
    description: 'Este televisor sirve para ver cosas increíbles, películas increíbles, series increíble, partidos increíblos. La pantalla es increíble'
});

productList.push({
    id: 5,
    name: 'Computador',
    price: 620,
    image: 'https://i.pinimg.com/564x/37/71/45/377145b6e7b4fbd9b939f78720a8d4cd.jpg',
    description: 'Este computador te sirve para hacer cosas increíbles, manejar programas increíbles, jugar videojuegos increíbles y programar cosas increíbles'
});

productList.push({
    id: 6,
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: 'Esta bicicleta tiene una movilidad increible, puedes llegar a diferentes lugares en muy poco tiempo, viajar por el mundo mientras eres saludable'
});

productList.push({
    id: 7,
    name: 'Pantalla',
    price: 220,
    image: 'https://i.pinimg.com/564x/3f/c3/9e/3fc39e45e3e14d467ca6155e9ef562aa.jpg',
    description: 'Este televisor sirve para ver cosas increíbles, películas increíbles, series increíble, partidos increíblos. La pantalla es increíble'
});

productList.push({
    id: 8,
    name: 'Computador',
    price: 620,
    image: 'https://i.pinimg.com/564x/37/71/45/377145b6e7b4fbd9b939f78720a8d4cd.jpg',
    description: 'Este computador te sirve para hacer cosas increíbles, manejar programas increíbles, jugar videojuegos increíbles y programar cosas increíbles'
});

// Maquetando la lista de productos ------------------------

function renderProducts(arr){

    let i = 0;
    var imagenesProducts = [];
    var addToCartButton = [];

    for (product of arr){   

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        cardsContainer.appendChild(productCard);
    
        imagenesProducts[i] = document.createElement('img');
        imagenesProducts[i].setAttribute('src', product.image);
        imagenesProducts[i].style.cursor = 'pointer';
        imagenesProducts[i].classList.add(String(i));
        productCard.appendChild(imagenesProducts[i]);
        
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        productCard.appendChild(productInfo);
    
        const productInfoDiv = document.createElement('div');
        productInfo.appendChild(productInfoDiv);
    
        const productPrice = document.createElement('p');
        productPrice.innerText = `$${product.price}`;
        productInfoDiv.appendChild(productPrice);
    
        const productName = document.createElement('p');
        productName.innerText = `${product.name}`;
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure')
        productInfo.appendChild(productInfoFigure);
    
        addToCartButton[i] = document.createElement('img');
        addToCartButton[i].setAttribute('src', "./icons/bt_add_to_cart.svg");
        addToCartButton[i].style.cursor = 'pointer';
        addToCartButton[i].classList.add(String(i));
        productInfoFigure.appendChild(addToCartButton[i]);
        
        i++;
        }

    //Clicking image function

    imagenesProducts.forEach( imagen => {
        imagen.addEventListener('click', () => {openProductDetailAside(imagen.className)});
    })

    //Clicking add to cart function

    addToCartButton.forEach( carButton => {
        carButton.addEventListener('click', () => {addProductToCart(carButton.className)});
    })

}

renderProducts(productList);

// Funciones que se ejecutan con evento ---------------

function toggleDesktopMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
    
    
        if(!isAsideClosed){
            shoppingCartContainer.classList.toggle('inactive');
        } 
        if (!isProductDetailClosed){
            productDetailContainer.classList.add('inactive');
        }
    
        desktopMenu.classList.toggle('inactive');
    }
    
    function toogleMobileMenu(){
        const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
        const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
    
        if(!isAsideClosed){
            shoppingCartContainer.classList.toggle('inactive');
        } 
        if (!isProductDetailClosed){
            productDetailContainer.classList.add('inactive');
        }
    
        mobileMenu.classList.toggle('inactive');
    }
    
    function toggleShoppingCartContainer(){
        const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
        const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
        const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
    
        if(!isMobileMenuClosed){
            mobileMenu.classList.toggle('inactive');
        } 
    
        if(!isDesktopMenuClosed){
            desktopMenu.classList.toggle('inactive');
        } 
    
        if (!isProductDetailClosed){
            productDetailContainer.classList.add('inactive');
        }
    
        shoppingCartContainer.classList.toggle('inactive');
    }
    
    function openProductDetailAside(idProduct){

        const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
        const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
        
    
        if(!isDesktopMenuClosed){
            desktopMenu.classList.toggle('inactive');
        }
        if(!isAsideClosed){
            shoppingCartContainer.classList.toggle('inactive');
        } 
    
        
        // -- Modificación del product deatil container ---
        idProduct = parseInt(idProduct);

        //Cambiando imagen
        productDetailContainer.childNodes[3].setAttribute('src', productList[idProduct].image)

        //Cambiando textos
        productDetailContainer.childNodes[5].childNodes[1].innerText = `$${productList[idProduct].price}`
        productDetailContainer.childNodes[5].childNodes[3].innerText = productList[idProduct].name
        productDetailContainer.childNodes[5].childNodes[5].innerText = productList[idProduct].description
        //-------
    
        productDetailContainer.classList.remove('inactive');
    }
    
    function closeProductDetailAside(){
        productDetailContainer.classList.add('inactive');
    }

/* <div class="shopping-cart">
        <figure>
          <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike">
        </figure>
        <p>Bike</p>
        <p>$30,00</p>
        <img src="./icons/icon_close.png" alt="close">
      </div>  */

deleteOrderProductIterator = 0;
deleteOrderProductButtons = [];

function addProductToCart(idButton){
    
    idButton = parseInt(idButton);

    const shoppingCartDiv = document.createElement('div');
    shoppingCartDiv.classList.add('shopping-cart');
    shoppingCartDiv.classList.add(`shoppingCartDiv${deleteOrderProductIterator}`);
    //orderContent.appendChild(shoppingCartDiv);
    orderContent.insertBefore(shoppingCartDiv, orderContent.firstChild);
    
    const figureOrder = document.createElement('figure');
    shoppingCartDiv.appendChild(figureOrder);
    
    const imageOrder = document.createElement('img');
    imageOrder.setAttribute('src', productList[idButton].image);
    figureOrder.appendChild(imageOrder);

    const orderProductName = document.createElement('p');
    orderProductName.innerText = productList[idButton].name;
    shoppingCartDiv.appendChild(orderProductName);

    const orderProductPrice = document.createElement('p'); 
    orderProductPrice.innerText = `$${productList[idButton].price}`;
    shoppingCartDiv.appendChild(orderProductPrice);

    deleteOrderProductButtons[deleteOrderProductIterator] = document.createElement('img');
    deleteOrderProductButtons[deleteOrderProductIterator].setAttribute('src', "./icons/icon_close.png");
    deleteOrderProductButtons[deleteOrderProductIterator].style.cursor = 'pointer';
    shoppingCartDiv.appendChild(deleteOrderProductButtons[deleteOrderProductIterator]);
    
    deleteOrderProductButtons[deleteOrderProductIterator].classList.add(String(deleteOrderProductIterator))
    

   // Calling each deleting order product function
    deleteOrderProductButtons.forEach( deletedProduct => {
    if (String(deleteOrderProductIterator) == deletedProduct.className){
    deletedProduct.addEventListener('click', () => {deleteOrderProduct(deletedProduct.className)})};

    
})
    
    deleteOrderProductIterator++;
    shoppingCartCounter.innerText++;
}



function deleteOrderProduct(deletingId){
    const elementToDelete = document.querySelector(`.shoppingCartDiv${deletingId}`);
    
    elementToDelete.remove();
    
    deleteOrderProductIterator--;
    shoppingCartCounter.innerText--;
    deleteOrderProductButtons.pop(1)

}