const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const cartsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');   
    if (!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');   
    // abrir el aside 
    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
        // si el mobilMenu esta abierto hay que cerrarlo
    
    shoppingCartContainer.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120 ,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    name: 'Laptop',
    price: 670 ,
    image: "https://images.pexels.com/photos/5797997/pexels-photo-5797997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});

productList.push({
    name: 'Computer',
    price: 453 ,
    image: "https://images.pexels.com/photos/15372903/pexels-photo-15372903/free-photo-of-escritorio-tecnologia-ordenado-teclado-mecanico.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});

productList.push({
    name: 'Computer Game',
    price: 1200 ,
    image: "https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});

productList.push({
    name: 'NES',
    price: 100 ,
    image: "https://images.pexels.com/photos/1637439/pexels-photo-1637439.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});

productList.push({
    name: 'GameBoy Color',
    price: 87 ,
    image: "https://images.pexels.com/photos/2263816/pexels-photo-2263816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});

productList.push({
    name: 'Cassette the Arcade',
    price: 175 ,
    image: "https://images.pexels.com/photos/1373100/pexels-photo-1373100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});

productList.push({
    name: 'PlayStation 1',
    price: 90 ,
    image: "https://images.pexels.com/photos/4219883/pexels-photo-4219883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});

/* <div class="product-card">
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
</div> */


function renderProducts (arr){
    for (product of arr){
        //crea la etiqueta div
        const productCart= document.createElement('div');
        productCart.classList.add('product-card');
    
        //crea la etiqueta img con la imagen dentro
        const producImg = document.createElement('img');
        producImg.setAttribute('src', product.image);
        // product = {name, price, image} -> product.image
    
        //crea la etiqueta info
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
            // insertar en el html con valor de texto el precio y el nombre
        const productInfoDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
        //mandar al html
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement ('figure');
        const productImgCart = document.createElement ('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
        //mandar al html
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
        productCart.appendChild(producImg);
        productCart.appendChild(productInfo);
    
        cartsContainer.appendChild(productCart);
    
    }
    
}

renderProducts(productList);