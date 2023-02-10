//Declaración de variable

// Variable para Menú Desktop
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

// Variable para Menú Mobil
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

// Variable para Menu carrito de compras
const menuCarIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer= document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');

const productDetailContainer=document.querySelector('#productDetail');
const productDetailCloseIcon=document.querySelector('.product-detail-close');


//Eventos

//Desktop
menuEmail.addEventListener('click', toggleDesktopMenu);

//Mobile
menuHamIcon.addEventListener('click', toggleMobilMenu);

//carrito
menuCarIcon.addEventListener('click', togleCarritoAside);

productDetailCloseIcon.addEventListener('click', closeProductDetailAside);
//funciones

//Desktop
function toggleDesktopMenu() {

    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');

}

//Mobil
function toggleMobilMenu() {

    const isAsideClosed =shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');

    closeProductDetailAside();
}

//funciones 
//icon cart
function togleCarritoAside() {
    //Declaración de variables 
    const ismobileMenuClosed = mobileMenu.classList.contains('inactive');
    const ismenuDesktopClosed = desktopMenu.classList.contains('inactive');
    const isProductDeatilClosed=productDetailContainer.classList.contains('inactive');
    
    if (!ismobileMenuClosed) {
        mobileMenu.classList.add('inactive'); //oculta los nodos mobil
    }
    if (!ismenuDesktopClosed) {
        desktopMenu.classList.add('inactive');//oculta los nodos Desktop
    }
    if(!isProductDeatilClosed){
        productDetailContainer.classList.add('inactive');//oculta el nodo de detalle producto
    }

    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside(){
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');

}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}

const productList = [];//array 
//objetos
productList.push({
    name: 'Computador Portatil',
    price: 120,
    image: 'https://img.freepik.com/psd-gratis/maqueta-portatil-aislada_1310-1458.jpg?w=740&t=st=1676056456~exp=1676057056~hmac=9a717a990a8782fb6ff5085af537712ca0a53aab31cc21bcf794afca297bb863',
});
productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Teclado',
    price: 620,
    image: 'https://img.freepik.com/foto-gratis/boton-teclado_1203-9150.jpg?w=740&t=st=1676057057~exp=1676057657~hmac=3bd66a06fe639ee7360f6de08e27b3a86447c74ffbc5d2172bc4d3f62e4d0510',
});
productList.push({
    name: 'smartphone',
    price: 300,
    image: 'https://images.pexels.com/photos/3934704/pexels-photo-3934704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Audífonos',
    price: 220,
    image: 'https://images.pexels.com/photos/14935011/pexels-photo-14935011.jpeg',
});
productList.push({
    name: 'Guitarra',
    price: 620,
    image: 'https://images.pexels.com/photos/3428498/pexels-photo-3428498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Saxofón',
    price: 620,
    image: 'https://images.pexels.com/photos/12457442/pexels-photo-12457442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Tablet',
    price: 620,
    image: 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});


//Crear Maquetacion HTML

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div'); //Crea el contenedor div
        productCard.classList.add('product-card');//Añade la clase product-card al contenedor

        // product= {name, price, image} -> product.image
        const productImg = document.createElement('img');//Crea el elemento de IMG
        productImg.setAttribute('src', product.image);//Añade  el atributo src  y luego su valor de la imagen que esta en la lista de productList 
        productImg.addEventListener('click',openProductDetailAside);

        const productInfo = document.createElement('div');//Crea el contenedor DIV
        productInfo.classList.add('product-info'); //Añade la clase product-info al contenedor 

        const productInfoDiv = document.createElement('div');//Crea el contendor DIV

        const productPrice = document.createElement('p');//Crea el párrafo P
        productPrice.innerText = '$' + product.price;// Añade el signo peso y el valor que esta contenida en la lista ProductList
        const productName = document.createElement('p');//CRea el párrafo P
        productName.innerText = product.name;//Añade el nombre del producto que esta en lista de objeto productList


        const productInfoFigure = document.createElement('figure');//crea la etiqueta figure
        const productImgCart = document.createElement('img');//Crea la etiqueta img
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg'); //añade el atributo a la etiqueta img

        //appendChild

        //la forma mas corta es con append ya que recibe dos nodos.
        productInfoDiv.append(productPrice,productName);
        // productInfoDiv.appendChild(productPrice);
        // productInfoDiv.appendChild(productName);

        productInfoFigure.appendChild(productImgCart);

        //forma corta 
        productInfo.append(productInfoDiv, productInfoFigure);

        // productInfo.appendChild(productInfoDiv);
        // productInfo.appendChild(productInfoFigure);

        //forma corta 
        productCard.append(productImg, productInfo);
        // productCard.appendChild(productImg);
        // productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);
    }
}

//Se manda a llamar la función
renderProducts(productList);
