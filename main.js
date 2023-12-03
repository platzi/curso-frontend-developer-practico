const navBarLeft= document.querySelector('.navbar-left');
const navBarRight= document.querySelector('.navbar-right');
const navBarDesktopMenu= document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const hamburgerButton = document.querySelector('.menu');
const asideShoppingCart = document.querySelector('.shopping-cart-detail');
const asideProductDetail = document.querySelector('.product-detail');
const productCardsContainer = document.querySelector('.cards-container');

const navBarEmail = navBarRight.querySelector('.navbar-email');
const navBarShoppingCart = navBarRight.querySelector('.navbar-shopping-cart');

navBarEmail.addEventListener('click',() => {
    toggleVisibilityOf(navBarDesktopMenu);
    turnOffVisibilityOf(mobileMenu);
    turnOffVisibilityOf(asideShoppingCart);
    turnOffVisibilityOf(asideProductDetail);
});
hamburgerButton.addEventListener('click',() => {
    toggleVisibilityOf(mobileMenu);
    turnOffVisibilityOf(navBarDesktopMenu);
    turnOffVisibilityOf(asideShoppingCart);
    turnOffVisibilityOf(asideProductDetail);
});
navBarShoppingCart.addEventListener('click', renderShoppingCartMenu);

let productList = [
    {
    "name": "Classic Watch",
    "category": "Others",
    "imgSrc": "images/watch.jpg",
    "imgAlt": "Elegant classic watch",
    "price": 50.00,
    "description": "A timeless watch for every occasion."
    },
    {
    "name": "Running Shoes",
    "category": "Clothes",
    "imgSrc": "images/shoes.jpg",
    "imgAlt": "Comfortable running shoes",
    "price": 75.00,
    "description": "Comfortable running shoes for the active person."
    },
    {
    "name": "Casual T-Shirt",
    "category": "Clothes",
    "imgSrc": "images/tshirt.jpg",
    "imgAlt": "Soft cotton t-shirt",
    "price": 15.00,
    "description": "Soft cotton t-shirt available in several colors."
    },
    {
    "name": "Denim Jeans",
    "category": "Clothes",
    "imgSrc": "images/jeans.jpg",
    "imgAlt": "Stylish denim jeans",
    "price": 40.00,
    "description": "Durable and stylish denim jeans."
    },
    {
    "name": "Smartphone",
    "category": "Electronics",
    "imgSrc": "images/smartphone.jpg",
    "imgAlt": "Latest model smartphone",
    "price": 299.99,
    "description": "Latest model with high-resolution camera and long-lasting battery."
    },
    {
    "name": "Bluetooth Headphones",
    "category": "Electronics",
    "imgSrc": "images/headphones.jpg",
    "imgAlt": "Wireless Bluetooth headphones",
    "price": 89.99,
    "description": "Wireless headphones with noise cancellation."
    },
    {
    "name": "Office Chair",
    "category": "Furnitures",
    "imgSrc": "images/chair.jpg",
    "imgAlt": "Ergonomic office chair",
    "price": 120.00,
    "description": "Ergonomic office chair with lumbar support."
    },
    {
    "name": "Wooden Desk",
    "category": "Furnitures",
    "imgSrc": "images/desk.jpg",
    "imgAlt": "Spacious wooden desk",
    "price": 250.00,
    "description": "Spacious wooden desk with modern design."
    },
    {
    "name": "Teddy Bear",
    "category": "Toys",
    "imgSrc": "images/teddy.jpg",
    "imgAlt": "Cuddly teddy bear",
    "price": 25.00,
    "description": "Soft and cuddly teddy bear for children of all ages."
    },
    {
    "name": "Remote Control Car",
    "category": "Toys",
    "imgSrc": "images/rc_car.jpg",
    "imgAlt": "Remote control car",
    "price": 45.00,
    "description": "Fast remote control car with rechargeable battery."
    },
    {
    "name": "Coffee Mug",
    "category": "Others",
    "imgSrc": "images/mug.jpg",
    "imgAlt": "Unique coffee mug",
    "price": 8.99,
    "description": "Ceramic coffee mug with unique design."
    },
    {
    "name": "Yoga Mat",
    "category": "Others",
    "imgSrc": "images/yoga_mat.jpg",
    "imgAlt": "Eco-friendly yoga mat",
    "price": 20.00,
    "description": "Eco-friendly yoga mat for all levels of yoga practitioners."
    }
];

renderProducts(productList);

const isFloat = value => Number(value) === value && value % 1 !== 0;

function toggleVisibilityOf(element){
    element.classList.toggle('inactive');
}
function turnOffVisibilityOf(element){
    element.classList.add('inactive');
}
function turnOnVisibilityOf(element){
    element.classList.remove('inactive');
}

function renderProducts(products){
    for(product of products){
        //Genero la carta que va a contener la información del producto
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        //Genero la imagen y sus datos
        const img = document.createElement('img');
        //img.setAttribute('src', "product.imgSrc");
        img.setAttribute('src', "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
        img.setAttribute('alt', product.imgAlt);
        //Creo el event listener para abrir los detalles del producto
        const productDetails = product;
        img.addEventListener('click', () => renderProductDetails(productDetails));
    
        //Creo el contenedor de la info
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        productCard.append(img, productInfo);
    
        //Meto el nombre y precio del producto en un div(infoDiv)
        const infoDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
        infoDiv.append(productPrice, productName);
    
        //Genero la figura de agregar al carrito
        const cartFigure = document.createElement('figure');
        const cartImg = document.createElement('img');
        cartImg.setAttribute('src','./icons/bt_add_to_cart.svg');
        cartImg.setAttribute('alt','Add to cart icon');
        cartFigure.append(cartImg);
        cartFigure.addEventListener('click', () => addProductToCart(productDetails))
    
        //Agrego finalmente tanto la información del producto como la figura de agregar al carrito
        productInfo.append(infoDiv, cartFigure);
        productCardsContainer.appendChild(productCard);//Finalmente agrego la carta al contenedor de cartas
    }
}

function renderShoppingCartMenu(){
    updateCart();

    //Mostrar el menu del shopping cart y ocultar los demás.
    toggleVisibilityOf(asideShoppingCart);
    turnOffVisibilityOf(navBarDesktopMenu);
    turnOffVisibilityOf(mobileMenu);
    turnOffVisibilityOf(asideProductDetail);
}

function renderProductDetails(productDetails){
    turnOnVisibilityOf(asideProductDetail);
    turnOffVisibilityOf(asideShoppingCart);
    turnOffVisibilityOf(navBarDesktopMenu);
    turnOffVisibilityOf(mobileMenu);

    //Genero el manejador del botón para cerrar los detalles
    const closeProductDetailsButton = asideProductDetail.querySelector('.product-detail-close');
    closeProductDetailsButton.addEventListener('click', () => turnOffVisibilityOf(asideProductDetail));

    //Genero los manejadores de los datos a modificar en el aside
    const imgOfProduct = asideProductDetail.querySelector('#ProductImage');
    const priceOfProduct = asideProductDetail.querySelector('#ProductPrice');
    const nameOfProduct = asideProductDetail.querySelector('#ProductName');
    const descriptionOFProduct = asideProductDetail.querySelector('#ProductDescription');

    //Cambio los datos placeholder por los datos del producto seleccionado
    //imgOfProduct.setAttribute('src', productDetails.imgSrc);
    imgOfProduct.setAttribute('src', "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
    imgOfProduct.setAttribute('alt', productDetails.imgAlt);
    priceOfProduct.innerText = productDetails.price;
    nameOfProduct.innerText = productDetails.name;
    descriptionOFProduct.innerText = productDetails.description;
}

function addProductToCart(productDetails){
    const cartOrderContainer = asideShoppingCart.querySelector('.my-order-content');
    const productCartContainer = document.createElement('div');
    productCartContainer.classList.add('shopping-cart');
    const orderDiv = asideShoppingCart.querySelector('.order');
    const numberOfSameProduct = document.createElement('div');

    if(isThisProductInTheCart(cartOrderContainer, productDetails)){
        return;
    } else {
        numberOfSameProduct.innerText = 1;
    }

    //Genero la imagen del producto y la agrego un un figure 
    const productImg = document.createElement('img');
    productImg.setAttribute('src', "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
    productImg.setAttribute('alt', productDetails.imgAlt);
    const productFigure = document.createElement('figure');
    productFigure.classList.add('cart-product-figure');
    
    productFigure.append(productImg, numberOfSameProduct);

    //Agrego el precio y nombre del producto
    const productPrice = document.createElement('p');
    const productName = document.createElement('p');
    if(isFloat(productDetails.price)){ //Verifico si tengo que agregar los decimales a mano o es un flotante
        productPrice.innerText = '$' + (productDetails.price*numberOfSameProduct.innerText);
    } else {
        productPrice.innerText = '$' + productDetails.price + '.00';
    }
    productName.innerText = productDetails.name;
    
    //Agrego la imagen para quitar el producto del carrito junto con el evento para eliminarlo y hacer un update de precios
    const productDeleteButton = document.createElement('img');
    productDeleteButton.setAttribute('src', './icons/icon_close.png');
    productDeleteButton.setAttribute('alt', 'close');
    productDeleteButton.addEventListener('click', function(){
        if(numberOfSameProduct.innerText == 1){
            productCartContainer.remove();
            updateCart();
        } else {
            numberOfSameProduct.innerText--;
            updateCart();
        }
    });

    //Integro todos los componentes
    productCartContainer.append(productFigure, productName, productPrice, productDeleteButton);
    cartOrderContainer.insertBefore(productCartContainer, orderDiv);
    updateCart();
}

function updateCart(){
    const totalPriceContainer = asideShoppingCart.querySelector('#TotalPrice');
    const products = asideShoppingCart.getElementsByClassName('shopping-cart');
    const shoppingCartProductsQty = navBarRight.querySelector('.navbar-shopping-cart').getElementsByTagName('div');
    let totalPrice = 0.00;
    shoppingCartProductsQty[0].innerText = 0;

    for(productPos = 0; productPos < products.length; productPos++){
        // Obtiene el precio del producto (asumiendo que el precio está en el segundo elemento <p>)
        const priceElement = products[productPos].querySelectorAll('p')[1];
        const amountOfSameProduct = products[productPos].querySelector('.cart-product-figure').querySelector('div');
        const price = parseFloat(priceElement.innerText.replace('$', '')) * parseInt(amountOfSameProduct.innerText);
        shoppingCartProductsQty[0].innerText = parseInt(shoppingCartProductsQty[0].innerText) + parseInt(amountOfSameProduct.innerText);
        totalPrice = parseFloat(totalPrice) + parseFloat(price);
    }

    if(isFloat(totalPrice)){ //Verifico si tengo que agregar los decimales a mano o es un flotante
        totalPriceContainer.innerText = '$' + totalPrice;
    } else {

        totalPriceContainer.innerText = '$' + totalPrice + '.00';
    }
}

function isThisProductInTheCart(containerOfProducts, product){
    const products = containerOfProducts.getElementsByClassName('shopping-cart');
    for(productNumber = 0; productNumber < products.length; productNumber++){
        const infoOfProduct = products[productNumber].querySelectorAll('p');
        //Verifico que tanto el nombre como el precio sean el mismo
        if(product.name == infoOfProduct[0].innerText && product.price == parseFloat(infoOfProduct[1].innerText.replace('$', ''))){
            const numberOfSameProduct = products[productNumber].querySelector('.cart-product-figure').querySelector('div');
            numberOfSameProduct.innerText++;
            updateCart();
            return true;
        } 
    }
    return false;
}

