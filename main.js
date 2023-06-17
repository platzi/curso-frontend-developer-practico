const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamBtn = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartBtn = document.querySelector('.navbar-shopping-cart');
const cartMenu = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetail = document.querySelector('#productDetail');
const productDetailCloseBtn = document.querySelector('.product-detail-close');

productDetailCloseBtn.addEventListener('click' , closeProductDetail);

menuEmail.addEventListener('click' , toggleDesktopMenu);
menuHamBtn.addEventListener('click' , toggleMobileMenu);
shoppingCartBtn.addEventListener('click' , toggleCartMenu);

function toggleDesktopMenu(){
    const isCartMenuOpen = !cartMenu.classList.contains('inactive');
    const isProductDetailOpen = !productDetail.classList.contains('inactive');

    if(isCartMenuOpen){
        cartMenu.classList.toggle('inactive');
    }
    if(isProductDetailOpen){
        productDetail.classList.toggle('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isCartMenuOpen = !cartMenu.classList.contains('inactive');
    const isProductDetailOpen = !productDetail.classList.contains('inactive');
    if(isCartMenuOpen){
        cartMenu.classList.toggle('inactive');
    }
    if(isProductDetailOpen){
        productDetail.classList.toggle('inactive');
    }
   mobileMenu.classList.toggle('inactive');
}

function toggleCartMenu(){
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');
    const isProductDetailOpen = !productDetail.classList.contains('inactive');
    if(isDesktopMenuOpen){
        desktopMenu.classList.toggle('inactive');
    }

    if(isMobileMenuOpen){
        mobileMenu.classList.toggle('inactive');
    }

    if(isProductDetailOpen){
        productDetail.classList.toggle('inactive');
    }

    cartMenu.classList.toggle('inactive');
 }

 const productList = [];
 productList.push({
    nombre: 'Bike',
    precio: 120,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
 });

 productList.push({
    nombre: 'Pantalla',
    precio: 100,
    imagen: 'https://acf.geeknetic.es/imgri/imagenes/auto/22/02/17/rqw-windowscolor.jpg?f=webp'
 });
 
 productList.push({
    nombre: 'Laptop',
    precio: 80,
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGTLMQw6pkEeQ6GrI67s46ztTfQ76RIPoaCQ&usqp=CAU'
 });

 function openProductDetail(){
    const isCartMenuOpen = !cartMenu.classList.contains('inactive');
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');
    if(isCartMenuOpen){
        cartMenu.classList.toggle('inactive');
    }

    if(isDesktopMenuOpen){
        desktopMenu.classList.toggle('inactive');
    }

    if(isMobileMenuOpen){
        mobileMenu.classList.toggle('inactive');
    }

    productDetail.classList.remove('inactive');
}

function closeProductDetail(){
    productDetail.classList.add('inactive');
}

 renderproducts(productList);
 

 function renderproducts(arr){
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        productCard.addEventListener('click' , openProductDetail)
    
        const img = document.createElement('img');
        img.setAttribute('src' , product.imagen);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const precio = document.createElement('p');
        precio.innerText = '$' + product.precio;
    
        const nombre= document.createElement('p');
        nombre.innerText = product.nombre;
    
        const figure = document.createElement('figure');
        
        const icono = document.createElement('img');
        icono.setAttribute('src' , './icons/bt_add_to_cart.svg');
    
        figure.append(icono);
        productInfoDiv.append(precio,nombre);
        productInfo.append(productInfoDiv , figure);
        productCard.append(img , productInfo);
    
        cardsContainer.append(productCard);
    
     }
 }

