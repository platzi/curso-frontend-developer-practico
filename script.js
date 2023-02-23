const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarritoIcon= document.querySelector('.navbar-shopping-cart');
const menuHamIcon= document.querySelector('.menu');
const mobileMenu= document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardContainer = document.querySelector('.cards-container');

navEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu(){
    const isCarrritoAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isCarrritoAsideClosed){
        shoppingCartContainer.classList.add('inactive')
    }

    desktopMenu.classList.toggle('inactive');
// el .toggle Añade o quita la clase que indiques
}

function toggleMobileMenu(){
    const isCarrritoAsideClosed = shoppingCartContainer.classList.contains('inactive');

    //Si el carrito no esta cerrado, con el .add agregamos la clase inactive para cerrarlo
    if(!isCarrritoAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');

}

function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed= desktopMenu.classList.contains('inactive');

    if(!isMobileMenuClosed){
        //
        mobileMenu.classList.add('inactive');
    }
    if(!isDesktopMenuClosed){
        
        desktopMenu.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');
}

const productList = [];

//Con el .push lo que hacemos es agregar elementos al array productList
productList.push({
    name:'Bike',
    price: 120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name:'Pantalla',
    price: 200,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name:'PC',
    price: 500,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
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

function renderProducts(array){
    for (product of array){
    
        
    
    
        //Creando un div
        const productCard = document.createElement('div');
        //agregando una clase al div
        productCard.classList.add('product-card');
        //Crear una etiqueta img
        const productImg = document.createElement('img');
        // product = {name, price ,image} -> product.image
        productImg.setAttribute('src', product.image);
    
        //Creando un div
        const productInfo = document.createElement('div');
        //agregando una clase al div
        productInfo.classList.add('product-info');
        
        //?-------------------------------------------------
    
        //creando un div
        const productInfoDeta = document.createElement('div');
    
        //creando un p (parrafo)
        const productPrice = document.createElement('p');
        // el .innerText nos permite cambiar el contenido de texto de un elemento de texto o consultar su valor
        productPrice.innerText = '$' + product.price;
        
        //creando un p (parrafo)
        const productName = document.createElement('p');
        // el innerText permite cambiar texto o valor de un elemento
        productName.innerText = product.name;
    
        
    
        //Creando un figure
        const productInfoFigure = document.createElement('figure');
        // creando una etiqueta img
        const productImgFigure = document.createElement('img');
        //Agregando el valor(contenido), a la etiqueta img(productImgFigure)
        productImgFigure.setAttribute('src', './icons/bt_add_to_cart.svg')
    
        //devolvioendo las etiquetas al padre, de cada una
        
    
        cardContainer.appendChild(productCard);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        
        productInfo.appendChild(productInfoDeta);
        productInfoDeta.appendChild(productPrice);
        productInfoDeta.appendChild(productName);
    
        productInfo.appendChild(productInfoFigure);
        productInfoFigure.appendChild(productImgFigure);
    }
}

renderProducts(productList);