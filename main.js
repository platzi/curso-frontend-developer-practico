const navbarEmail = document.querySelector('.navbar-email'); // Email en forma de texto que despliega el menu en version desktop
const desktopMenu = document.querySelector('.desktop-menu');
const navbarMobile = document.querySelector('.menu'); // Imagen en el navbar que despliega el menu en version mobile
const mobileMenu = document.querySelector('.mobile-menu');
const navbarShoppingCart = document.querySelector('.navbar-shopping-cart'); // Imagen en el navbar que despliega el carrito de compras.
const shoppingCart = document.querySelector('#shopping-cart');
const shoppingCartProductCounter = document.querySelector('#shopping-cart-product-counter');
const orderContent = document.querySelector('.my-order-content');
let shoppingCartTotal = document.querySelector('#shopping-cart-total');

// Display products
const cardsContainer = document.querySelector('.cards-container'); //Para desplegar y setear las tarjetas con informacion de productos dentro de este contenedor

//Product details
const productDetailContainer = document.querySelector('#product-datail');
const productDetailClose = document.querySelector('.product-detail-close');
const productDetailImg = document.querySelector('.product-img');
const productDetailPrice = document.querySelector('.product-price');
const productDetailName = document.querySelector('.product-name');
const productDetailDescription = document.querySelector('.product-description');
const productDetailAddToCart = document.querySelector('.add-to-cart-button');

// Lista de productos, las propiedades de cada uno de ellos son > {name, price, src}
const products = [
    {
        id: 12,
        price: 487.99,
        name: "Having dinner",
        description: "Having dinner - Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea excepturi tempore nihil, nostrum optio exercitationem?",
        src: "https://images.pexels.com/photos/1668860/pexels-photo-1668860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 11,
        price: 999.47,
        name: "Sofa brown",
        description: "Sofa brown - Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea excepturi tempore nihil, nostrum optio exercitationem?",
        src: "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 10,
        price: 478.58,
        name: "Pillows kit",
        description: "Pillows kit - Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea excepturi tempore nihil, nostrum optio exercitationem?",
        src: "https://images.pexels.com/photos/1248583/pexels-photo-1248583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 9,
        price: 248.68,
        name: "Living room set",
        description: "Living room set - Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea excepturi tempore nihil, nostrum optio exercitationem?",
        src: "https://images.pexels.com/photos/259580/pexels-photo-259580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 8,
        price: 148.97,
        name: "Bookshelf",
        description: "Bookshelf - Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea excepturi tempore nihil, nostrum optio exercitationem?",
        src: "https://images.pexels.com/photos/683929/pexels-photo-683929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 7,
        price: 348.47,
        name: "Simple chair",
        description: "Simple chair - Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea excepturi tempore nihil, nostrum optio exercitationem?",
        src: "https://images.pexels.com/photos/116910/pexels-photo-116910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 6,
        price: 982.47,
        name: "Piece of Art",
        description: "Piece of Art - Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea excepturi tempore nihil, nostrum optio exercitationem?",
        src: "https://images.pexels.com/photos/1067556/pexels-photo-1067556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 5,
        price: 248.64,
        name: "Bedroom stack",
        description: "Bedroom stack - Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea excepturi tempore nihil, nostrum optio exercitationem?",
        src: "https://images.pexels.com/photos/6480198/pexels-photo-6480198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 4,
        price: 578.53,
        name: "Meeting setup",
        description: "Meeting setup - Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea excepturi tempore nihil, nostrum optio exercitationem?",
        src: "https://images.pexels.com/photos/273671/pexels-photo-273671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 3,
        price: 391.24,
        name: "Piece kit",
        description: "Piece kit - Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea excepturi tempore nihil, nostrum optio exercitationem?",
        src: "https://images.pexels.com/photos/2440471/pexels-photo-2440471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 2,
        price: 691.25,
        name: "Carpet cool",
        description: "Carpet cool - Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea excepturi tempore nihil, nostrum optio exercitationem?",
        src: "https://images.pexels.com/photos/3965509/pexels-photo-3965509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 1,
        price: 471.69,
        name: "Office kit",
        description: "Office kit - Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea excepturi tempore nihil, nostrum optio exercitationem?",
        src: "https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
]
// Array que gestionara los elementos que estan en el carrito de compras.
let shoppingCartProducts = [];

navbarEmail.addEventListener('click', toggleDesktopMenu);
navbarMobile.addEventListener('click', toggleMobileMenu);
navbarShoppingCart.addEventListener('click', toggleShoppingCart);
productDetailClose.addEventListener('click', closeProductDetail);
productDetailAddToCart.addEventListener('click', addProductToShoppingCart);

function closeComponentsToDisplayMenu() {
    const isShoppingCartOpen = !shoppingCart.classList.contains('inactive');
    const isProductDetailOpen = !productDetailContainer.classList.contains('inactive');
    if (isShoppingCartOpen) {
        shoppingCart.classList.add('inactive')
    }
    if (isProductDetailOpen) {
        closeProductDetail();
    }
}

function toggleDesktopMenu() {
    closeComponentsToDisplayMenu();
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    closeComponentsToDisplayMenu();
    mobileMenu.classList.toggle('inactive');
}

function closeMobileOrDesktopMenu() {
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');
    if (isMobileMenuOpen) {
        mobileMenu.classList.add('inactive');
    }
    if (isDesktopMenuOpen) {
        desktopMenu.classList.add('inactive');
    }
}

function toggleShoppingCart() {
    const isProductDetailOpen = !productDetailContainer.classList.contains('inactive');
    closeMobileOrDesktopMenu();
    if (isProductDetailOpen) {
        productDetailContainer.classList.add('inactive');
    }
    shoppingCart.classList.toggle('inactive');
}

function openProductDetail(e) {
    //validar que ningun menu este abierto, al igual que el carrito de compras.
    closeMobileOrDesktopMenu();
    const isShoppingCartOpen = !shoppingCart.classList.contains('inactive');
    if (isShoppingCartOpen) {
        shoppingCart.classList.add('inactive');
    }
    const product = products.filter(product => product.id == e.target.id); //obtener los datos del elemento clickeado

    //Le asigno los valores correspondientes a las partes del contenedor correspondientes
    productDetailImg.setAttribute('src', product[0].src)
    productDetailPrice.textContent = `$ ${product[0].price}`;
    productDetailName.textContent = product[0].name;
    productDetailDescription.textContent = product[0].description;
    productDetailAddToCart.setAttribute('id', e.target.id);
    productDetailContainer.classList.remove('inactive') //mostrar el product detail con los datos pertinentes.
}

function closeProductDetail() {
    productDetailContainer.classList.add('inactive');
}

function displayProducts(products) {
    for (product of products) {

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.src);
        productImg.setAttribute('alt', product.name);
        productImg.setAttribute('id', product.id); //para saber que datos de producto mostrar en los detalles
        productImg.addEventListener('click', openProductDetail);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.textContent = `$ ${product.price}`;

        const productName = document.createElement('p');
        productName.textContent = product.name;

        productInfoDiv.append(productPrice, productName);

        const productInfoFigure = document.createElement('figure');

        const imgCart = document.createElement('img');
        imgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
        imgCart.setAttribute('alt', `carrito compras`);
        imgCart.setAttribute('title', `Agregar ${product.name} al carrito`);
        imgCart.setAttribute('id', product.id);
        imgCart.addEventListener('click', addProductToShoppingCart);

        productInfoFigure.appendChild(imgCart);

        productInfo.append(productInfoDiv, productInfoFigure);

        productCard.append(productImg, productInfo);

        cardsContainer.appendChild(productCard);
    }
}

function updateShoppingCartTotal(e) {
    setTimeout(() => {
        let total = 0.00;
        shoppingCartProducts.forEach((product) => {
            total += product.price
        })
        shoppingCartTotal.innerHTML = `$ ${total.toFixed(2)}`;
        // Amentar el contador de productos.
        shoppingCartProductCounter.innerHTML = shoppingCartProducts.length; 
    }, 100);
}

function deleteProductToShoppingCart(e) {
    //Visualmente (html)
    let producto = document.getElementById(e.target.id);
    if (producto.parentNode) {
        producto.parentNode.removeChild(producto);
    }
    //logicamente (array)
    for(let i in shoppingCartProducts) {
        if((shoppingCartProducts[i].id == e.target.id)){
            shoppingCartProducts.splice(i, 1);
            break;
        }
    }
    updateShoppingCartTotal();
}

function addProductToShoppingCart(e) {
    
    console.log(e.target)
    const product = products.filter(product => product.id == e.target.id);
    
        console.log(product);
        console.log(product[0]);

        // Agregarlo al carrito (array)
        shoppingCartProducts.push(product[0]);
        // Crear una tarjeta para añadirla al carrito (html)
        const shoppingCart = document.createElement('div');
        shoppingCart.setAttribute('class', 'shopping-cart');
        shoppingCart.setAttribute('id', e.target.id); //para saber que tarjeta quitar a nivel de html

        // Datos del producto en el carrito de compras
        const figure = document.createElement('figure');
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product[0].src);
        productImg.setAttribute('alt', product[0].name);
        figure.appendChild(productImg);

        const productName = document.createElement('p');
        productName.textContent = product[0].name;

        const productPrice = document.createElement('p');
        productPrice.textContent = `$ ${product[0].price}`;

        const productDelete = document.createElement('img');
        productDelete.setAttribute('src', './icons/icon_close.png');
        productDelete.setAttribute('alt', 'delete product icon');

        productDelete.setAttribute('id', product[0].id); //para saber que dato eliminar
        productDelete.addEventListener('click', deleteProductToShoppingCart);
        
        //Agregar los datos del producto a una tarjeta
        shoppingCart.append(figure, productName, productPrice, productDelete);
        
        //Agregar la tarjeta con los datos del producto al carrito de compras como tal
        orderContent.appendChild(shoppingCart);
        
        updateShoppingCartTotal(); //Actualiza los datos del carrito 
}

displayProducts(products);
