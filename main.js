const menuEmail = document.querySelector('.navbar-email'); //Creamos una variable en la cual seleccinamos el elemento 
const menuHamIcon = document.querySelector('.menu'); //Creamos un selector para el mobileMenu para hacer que aparezca o desaparezca con la misma clase incative
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart'); //Creamos un selector para el mobileMenu para hacer que aparezca o desaparezca con la misma clase incative
const desktopMenu = document.querySelector('.desktop-menu'); // Cremamos una variable llamada desktopMenu y le decimos que seleccione a cualquier elemento que tenga la clase desktop-menu  
const mobileMenu = document.querySelector('.mobile-menu');  //También necesitamos un selector para ese menú hamburguesa 
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container'); //Creamos el selector cardsContainer


menuEmail.addEventListener('click', toggleDesktopMenu); //utilizamos su propiedad addEventListener para ejecutar algo cuando le demo click.
menuHamIcon.addEventListener('click', toggleMobileMenu); //utilizamos su propiedad addEventListener para ejecutar algo cuando le demo click.
menuCarritoIcon.addEventListener('click', toggleCarritoAside); //utilizamos su propiedad addEventListener para ejecutar algo cuando le demo click.

//toggleDesktopMenu es el nombre de una función que debemos crear.

function toggleDesktopMenu(){ //acá es donde hacemos que aparezca o desaparezca el pequeño menu.

    const isAsideClosed = aside.classList.contains('inactive'); 

    if(!isAsideClosed){ //Si nuestro MobileMenu no tiene la clase inactive, es decir, si no esta cerrado  
        aside.classList.add('inactive');
    }


    desktopMenu.classList.toggle('inactive'); //Ejecuta la función classList.toggle, lo que hace es quitar o poner la clase inactive dependiendo si la tiene o no

}

function toggleMobileMenu(){
    const isAsideClosed = aside.classList.contains('inactive'); 

    if(!isAsideClosed){ //Si nuestro MobileMenu no tiene la clase inactive, es decir, si no esta cerrado  
        aside.classList.add('inactive');
    }


    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){  //cada vez que querramos abrir el carrito si le damos click vamos a cerrar el menuMobile
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive'); 

    if(!isMobileMenuClosed){ //Si nuestro MobileMenu no tiene la clase inactive, es decir, si no esta cerrado  
        mobileMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');
}


const producList = []; //Este array lo utilizamos cuando hacemos la solicitud a BD
producList.push({
    name: 'JavaScript',
    price: 120,
    image: 'https://www.anerbarrena.com/wp-content/uploads/2017/08/programacion-javascript-js-e1503258707880.jpg',
});

producList.push({
    name: 'React',
    price: 220,
    image: 'https://www.syntonize.com/wp-content/uploads/2021/02/React-Syntonize.png',
});

producList.push({
    name: 'HTML',
    price: 320,
    image: 'https://play-lh.googleusercontent.com/85WnuKkqDY4gf6tndeL4_Ng5vgRk7PTfmpI4vHMIosyq6XQ7ZGDXNtYG2s0b09kJMw',
});

producList.push({
    name: 'GitHub',
    price: 420,
    image: 'https://rockcontent.com/es/wp-content/uploads/sites/3/2020/07/qu%C3%A9-es-git-hub-y-c%C3%B3mo-funciona-1024x576.jpg',
});


//Esto lo que nos va a permitir es crear cada uno de estos elementos de nuestro html pero utilizando JavaScript 

function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement('div');  //Creamos un componente div
        productCard.classList.add('product-card');      //Le asignamos una clase
    
        const productImg = document.createElement('img');      //Creamos una imagen y no le agregamos una clase sino un src
        //el src no debe ser el enlace de la imagen, sino que debe ser la propiedad image de cada uno de los objetos que representan un producto dentro del array de productos.
        productImg.setAttribute('src', product.image); //se cambia el atributo de src y se le agrega lo que venga en product.image
    
        const productInfo = document.createElement('div');  //Creamos un componente div
        productInfo.classList.add('product-info');      //Le asignamos una clase
    
        const productInfoDiv = document.createElement('div'); //Creamos un componente div
    
        const productPrice = document.createElement('p'); //Creamos parrafos
        productPrice.innerText = '$' + product.price; //A estos parrafos le insertamos el texto con una propiedad 
        const productName = document.createElement('p');  //Creamos parrafos
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
    
        const productInfoFigure = document.createElement('figure'); 
        const productImgCart = document.createElement('img'); //Acá vamos a tener nuestra imagen de producto.
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg'); //También le hacemos una insersión del atributo src.
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    
    }
}

renderProducts(producList);