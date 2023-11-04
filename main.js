
// Nav


// Menu correo electronico desktop
const menuEmail = document.querySelector('.navbar-email'); // creo la variable que va a tener el click
const desktopMenu = document.querySelector('.desktop-menu'); // creo la variable que se va a ejecutar despues del click
// Menu movile
const burguerMenu = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
// Productos en el carrito
const carritomenu = document.querySelector('.navbar-shopping-cart')
const productDetail = document.querySelector('.product-detail')

menuEmail.addEventListener('click', toggledesktopMenu); // Escucho el evento desktop
burguerMenu.addEventListener('click', toggleMovileMenu); // Escucho el evento movile
carritomenu.addEventListener('click', togglecarrtioMenu);

function toggledesktopMenu(){ // creo mi funcion "toggle" es intercambiar ene español
    const isProductDetailClosed = productDetail.classList.contains('inctive'); // Defino una varibale para cerrar mi productDetail

    if(!isProductDetailClosed){ // Esta abierto mi productDetail
        productDetail.classList.add('inctive'); // si esta abierto lo cierro 
    }

    desktopMenu.classList.toggle('inctive'); // añado toggle para intercambiar  mi productDetail 
}

function toggleMovileMenu(){ // creo mi funcion "toggle" es intercambiar ene español
    const iseProductDetailClosed = productDetail.classList.contains('inctive'); // Defino una varibale para cerrar mi productDetail

    if (!iseProductDetailClosed){ // Esta abierto mi productDetail
        productDetail.classList.add('inctive'); // si esta abierto lo cierro 
    }

    mobileMenu.classList.toggle('inctive'); // añado toggle para intercambiar  mi productDetail 
}

function togglecarrtioMenu(){
    const isMovileMenuClosed = mobileMenu.classList.contains('inctive'); // Defino una varibale para cerrar mi movile menu
    const isDesktopMenuClosed = desktopMenu.classList.contains('inctive'); // Defino una varibale para cerrar mi desktopMenu
    
    if (!isMovileMenuClosed){ // Esta abierto mi movile menu? 
        mobileMenu.classList.add('inctive'); // si esta abierto lo cierro
    } 
    if (!isDesktopMenuClosed){ // Esta abierto mi desktopMenu?
        desktopMenu.classList.add('inctive'); // si esta abierto lo cierro
    }


    productDetail.classList.toggle('inctive'); // añado toggle para intercambiar  mi productDetail 
}

// Menu

const cardsContainer = document.querySelector('.cards-container');

const productlist = []; // Creo que array
productlist.push({  // Creo el elemento
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productlist.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productlist.push({
    name: 'Mouse',
    price: 320,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productlist.push({
    name: 'Tecaldo',
    price: 420,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productlist.push({
    name: 'Pilas',
    price: 520,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productlist.push({
    name: 'Pilas',
    price: 520,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productlist.push({
    name: 'Pilas',
    price: 520,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productlist.push({
    name: 'Pilas',
    price: 520,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productlist.push({
    name: 'Pilas',
    price: 520,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productlist.push({
    name: 'Pilas',
    price: 520,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productlist.push({
    name: 'Pilas',
    price: 520,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productlist.push({
    name: 'Pilas',
    price: 520,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productlist.push({
    name: 'Pilas',
    price: 520,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productlist.push({
    name: 'Pilas',
    price: 520,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productlist.push({
    name: 'Pilas',
    price: 520,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})


// Inicio la insersion en el HTML

function menuhtml(arr){
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const prodcutImg = document.createElement('img');
        prodcutImg.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.append(productPrice, productName);
    
        const productInfoFigure = document.createElement('figure');
    
        const prodcutImgCart = document.createElement('img');
        prodcutImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(prodcutImgCart);
        productInfo.append(productInfoDiv, productInfoFigure);
        productCard.append(prodcutImg, productInfo);
        cardsContainer.appendChild(productCard);
    }
}

menuhtml(productlist);
















