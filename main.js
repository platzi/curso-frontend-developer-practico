const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    if(!isAsideClosed){ 
        shoppingCartContainer.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    if(!isAsideClosed){ 
        shoppingCartContainer.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}
function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');     

    if(!isMobileMenuClosed){ 
        mobileMenu.classList.add('inactive');
    }
    shoppingCartContainer.classList.toggle('inactive');      
}

const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Computador',
    price: 520,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})


function renderProducts(arr) {
    for(product of productList){
        // Creamos el div que contiene todo el producto.
        const productCard = document.createElement('div');
        // Le añadimos una clase al div
        productCard.classList.add('product-card');

        // product = {name, price, image} -> product.image ==> el objeto a crear
        

        // Creamos la etiqueta img y se le da un atributo al src
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        
        // Creamos el div que contiene la infomacion del producto
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        // Creamos un div dentro del div=>"product-info" que contiene Name y Price del producto
        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;

        productInfoDiv.appendChild(productPrice, );
        productInfoDiv.appendChild(productName, );
        
        //Creamos la etiqueta figure dentro del div=> "product-info"
        const productInfoFigure = document.createElement('figure');
        //Creamos la etiqueta img y modificamos su atributo src
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
        //Añadimos la etiqueta img dentro de figure
        productInfoFigure.appendChild(productImgCart);

        //añadimos las etiqueas div y figure a el div =>"product-info"
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
        //Añadimos la etiqueta img y div => "product-card"
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        // agregamos el div=> "product-card" a el div =>"cards-container"
        cardsContainer.appendChild(productCard);
    }
}
renderProducts(productList)