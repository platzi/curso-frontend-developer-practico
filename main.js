const navBarLeft= document.querySelector('.navbar-left');
const navBarRight= document.querySelector('.navbar-right');
const navBarDesktopMenu= document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const hamburgerButton = document.querySelector('.menu');
const asideProductDetail = document.querySelector('.product-detail');
const productCardsContainer = document.querySelector('.cards-container');

const navBarEmail = navBarRight.querySelector('.navbar-email');
const navBarShoppingCart = navBarRight.querySelector('.navbar-shopping-cart');
//const shoppingCartMenu = document.querySelector('.product-detail');

navBarEmail.addEventListener('click',() => {
    toggleVisibilityOf(navBarDesktopMenu);
    turnOffVisibilityOf(mobileMenu);
    turnOffVisibilityOf(asideProductDetail);
});
hamburgerButton.addEventListener('click',() => {
    toggleVisibilityOf(mobileMenu);
    turnOffVisibilityOf(navBarDesktopMenu);
    turnOffVisibilityOf(asideProductDetail);
});
navBarShoppingCart.addEventListener('click',() => {
    toggleVisibilityOf(asideProductDetail);
    turnOffVisibilityOf(navBarDesktopMenu);
    turnOffVisibilityOf(mobileMenu);
});

function toggleVisibilityOf(element){
    element.classList.toggle('inactive');
}
function turnOffVisibilityOf(element){
    element.classList.add('inactive');
}

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

function renderProducts(products){
    for(product of products){
        //Genero la carta que va a contener la informacion del producto
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        //Genero la imagen y sus datos
        const img = document.createElement('img');
        //img.setAttribute('src', "product.imgSrc");
        img.setAttribute('src', "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
        img.setAttribute('alt', product.imgAlt);
    
        //Creo el contenerdor de la info
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
    
        //Agrego finalmente tanto la informacion del producto como la figura de agregar al carrito
        productInfo.append(infoDiv, cartFigure);
        productCardsContainer.appendChild(productCard);//Finalmente agrego la carta al contenedor de cartas
    }
}

renderProducts(productList);





