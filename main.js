//Seleccionamos la clase de la etiqueta a la que se le va a dar click.
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu =document.querySelector('.desktop-menu');
const menuIcon =document.querySelector('.menu');
const mobileMenu =document.querySelector('.mobile-menu');
const menuCarrito =document.querySelector('.navbar-shopping-cart');
const productDetail =document.querySelector('.product-detail');


//Le añadimos el evento.
menuEmail.addEventListener('click', toggleDesktopMenu);
menuIcon.addEventListener('click', toggleMobileMenu);
menuCarrito.addEventListener('click', toggleProductDetail);

//Por defecto está inactiva, con cada click aparece y con otro desaparece.

function toggleDesktopMenu() {
    
    const isProductDetailClosed = productDetail.classList.contains('inactive');
    
    if (!isProductDetailClosed){ 
        productDetail.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    
    const isProductDetailClosed = productDetail.classList.contains('inactive');
    
    if (!isProductDetailClosed){ //Si está abierto el carrito(en mobile), lo cerramos.
        productDetail.classList.add('inactive');
    }
    //una vez cerrado, activamos nuestro menú mobile.
    mobileMenu.classList.toggle('inactive');
}

function toggleProductDetail(){
    
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    
    if (!isMobileMenuClosed){ //Si está abierto el menú mobile, lo cerramos.
        mobileMenu.classList.add('inactive');
    }
    if (!isDesktopMenuClosed){ //Si está abierto el menú Desktop, lo cerramos.
        desktopMenu.classList.add('inactive');
    }
    //una vez cerrado, activamos nuestro carrito.
    productDetail.classList.toggle('inactive');
}

//product List

const cardsContainer =document.querySelector('.cards-container');
const productList = [];

//Puedes agregar los productos que quieras

productList.push({
    
    name: 'Laptop',
    price: 800,
    image: 'https://www.tecnologia-informatica.com/wp-content/uploads/2018/07/funciones-de-la-computadora-1.jpeg'
});
productList.push({
    
    name: 'Audifonos',
    price: 150,
    image: 'https://falabella.scene7.com/is/image/Falabella/14749898_2?wid=800&hei=800&qlt=70'
});
productList.push({
    
    name: 'Teléfono',
    price: 300,
    image: 'https://micelu.co/wp-content/uploads/2021/07/IPHONE-XR-ROJO.jpg'
});
productList.push({
    
    name: 'Monitor',
    price: 500,
    image: 'https://www.tuexperto.com/wp-content/uploads/2020/03/monitor-full-hd.jpg.webp'
});
productList.push({
    
    name: 'Camara',
    price: 200,
    image: 'https://www.profesionalreview.com/wp-content/uploads/2021/05/formato-raw-10.jpg'
});
productList.push({
    
    name: 'Bafle',
    price: 350,
    image: 'https://www.cycelectronica.com/media/XPRO-S8__75032.1642527876.jpg'
});

function renderProducts(list){

    //product = objeto con {name,price,image} en cada iteracion del for.
    for (product of list) {

        //Creamos cada uno de los elementos HTML
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
       
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        
        const productName = document.createElement('p');
        productName.innerText =  product.name;
    
        const productFigure = document.createElement('figure');
        
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
       
        //Ahora metemos todos los hijos en sis etiquetas padre, de menor a mayor preferiblemente.
        productFigure.appendChild(productImgCart);
        productDiv.appendChild(productPrice);
        productDiv.appendChild(productName);
        productInfo.appendChild(productDiv);
        productInfo.appendChild(productFigure);
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        //Se agrega la etiqueta 'Mas padre' a nuestra clase contenedor, que lleva nuestra información al HTML.
        cardsContainer.appendChild(productCard);
    }
}

//productList se le envía como argumento a renderProducts.
renderProducts(productList);