//menu de email
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
//menu de telefono
const btnMovilMenu = document.querySelector('.menu');
const mobilMenu = document.querySelector('.mobile-menu');
//carrito de compra
const productDetail = document.querySelector('.product-detail');
const btnProductDetail = document.querySelector('.navbar-shopping-cart');
//productos
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
btnMovilMenu.addEventListener('click',toggleMovilMenu);
btnProductDetail.addEventListener('click',toggleProductDetail);
//carrito de compra
function toggleProductDetail(){
    const menuMovileClose= mobilMenu.classList.contains('inactive');
    if(!menuMovileClose){
        mobilMenu.classList.add('inactive') 

    }
        
    const desktopMenuClose= desktopMenu.classList.contains('inactive');
    if(!desktopMenuClose){
        desktopMenu.classList.add('inactive');
    }
    productDetail.classList.toggle('inactive')
}
// menu de telefono
function toggleMovilMenu(){
    const productDetailClose= productDetail.classList.contains('inactive');

    if(!productDetailClose){
            productDetail.classList.add('inactive') 
    }
        
        mobilMenu.classList.toggle('inactive');
}
//menu de email
function toggleDesktopMenu(){
    const productDetailClose= productDetail.classList.contains('inactive');

    if(!productDetailClose){
            productDetail.classList.add('inactive') 
    }
     desktopMenu.classList.toggle('inactive');
}
//productos
//1.se crea un array
const productList= [];
//2.agregar al array un objeto
productList.push({
    name: 'bike',
    price: 880000,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'pantalla',
    price: 1200000,
    image: 'https://http2.mlstatic.com/D_NQ_NP_642290-CBT50120749820_052022-V.jpg',
});
productList.push({
    name: 'torre gamer',
    price: 5000000,
    image: 'https://http2.mlstatic.com/D_NQ_NP_961337-MCO49195211726_022022-O.jpg',
});
productList.push({
    name: 'mouse',
    price: 150000,
    image: 'https://druckersas.com/wp-content/uploads/2021/04/Mouse-Gamer-Logitech-G-Series-Proteus-Spectrum-G502-1.jpg',
});
productList.push({
    name: 'audifonos',
    price: 550000,
    image: 'https://dcompras.gt/image/cache/catalog/Hp%20produc/Aud%C3%ADfonos%20DHE-8003UM%201-912x1000.png',
});
productList.push({
    name: 'bike',
    price: 880000,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'pantalla',
    price: 1200000,
    image: 'https://http2.mlstatic.com/D_NQ_NP_642290-CBT50120749820_052022-V.jpg',
});
productList.push({
    name: 'torre gamer',
    price: 5000000,
    image: 'https://http2.mlstatic.com/D_NQ_NP_961337-MCO49195211726_022022-O.jpg',
});
productList.push({
    name: 'mouse',
    price: 150000,
    image: 'https://druckersas.com/wp-content/uploads/2021/04/Mouse-Gamer-Logitech-G-Series-Proteus-Spectrum-G502-1.jpg',
});
productList.push({
    name: 'audifonos',
    price: 550000,
    image: 'https://dcompras.gt/image/cache/catalog/Hp%20produc/Aud%C3%ADfonos%20DHE-8003UM%201-912x1000.png',
});
//3.insertar en html recorriendo el array
function renderProducts(arr){
    for (var product of arr){
        //Creando los elementos del html
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const imageProduct = document.createElement('img');
        imageProduct.setAttribute('src',product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const divVacio = document.createElement('div');
        
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        const figure = document.createElement('figure');
    
        const imgShop = document.createElement('img');
        imgShop.setAttribute('src','./icons/bt_add_to_cart.svg');
        
        //organizando los elementos padres e hijos del html
        figure.appendChild(imgShop);
    
        divVacio.appendChild(productPrice);
        divVacio.appendChild(productName);
    
        productInfo.appendChild(figure);
        productInfo.appendChild(divVacio);
    
        productCard.appendChild(imageProduct);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}
renderProducts(productList);




