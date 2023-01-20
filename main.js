const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

const burgerMenuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');

const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);

burgerMenuIcon.addEventListener('click', toggleMobileMenu);

menuCarritoIcon.addEventListener('click', toggleCarritoAside);

productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu(){
//    console.log('Click');
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    
    const isCarritoAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isCarritoAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }

    closeProductDetailAside();

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if(!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if(!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive');
    }


    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside() {
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
}

//console.log('JS funcionando');

const productList = [];
productList.push({
    name: 'Bike',
    price: 150,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    name: 'Shirt',
    price: 17,
    image: "https://media.istockphoto.com/id/1199864582/es/foto/camiseta-aislada-sobre-blanco.jpg?s=1024x1024&w=is&k=20&c=Jm4wZuXGl33L_XRr0yPhXWjOGxu7Oj0OMpIHeXFZ1YY="
});

productList.push({
    name: 'Tennis shoes Nike',
    price: 53,
    image: "https://images.pexels.com/photos/4252969/pexels-photo-4252969.jpeg"
});

productList.push({
    name: 'Computer',
    price: 635,
    image: "https://images.pexels.com/photos/1999463/pexels-photo-1999463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});

productList.push({
    name: 'Smarthphone',
    price: 190,
    image: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});

productList.push({
    name: 'Sofa',
    price: 254,
    image: "https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});

productList.push({
    name: 'Doll Captain America',
    price: 20,
    image: "https://http2.mlstatic.com/D_NQ_NP_761102-CBT50141142921_052022-V.jpg"
});

productList.push({
    name: 'Toy car with Remote Control',
    price: 20,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3BURN1s-I0cgS11isCtA8dduRs_xy_sW6_Q&usqp=CAU"
});

productList.push({
    name: 'Tools kit',
    price: 20,
    image: "https://images.pexels.com/photos/175039/pexels-photo-175039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});

productList.push({
    name: 'Portfolio',
    price: 53,
    image: "https://media.istockphoto.com/id/182255361/es/foto/negro-malet%C3%ADn.jpg?s=1024x1024&w=is&k=20&c=L6AJUaQAy8e0XYPux9buutfFMWAOrdyydwpu8h0oSXg="
});

productList.push({
    name: 'Blender',
    price: 22,
    image: "https://almacencoogranada.com/wp-content/uploads/2020/06/L63200electro1.jpg"
});

productList.push({
    name: 'Chair',
    price: 70,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhY56eZQPRMW60xEgEXwP7hHukw4caQcW8EA&usqp=CAU"
});


/*
<div class="product-card">
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
</div>
*/

function renderProducts(arr){

    for (product of productList) {
        const productCard = document.createElement('div'); //Crea elemento div productCard.
        productCard.classList.add('product-card'); //Añade clase product-card a elemento div
    
        //product= {name, price, image} -> product.image
    
        const productImg = document.createElement('img'); //Crea elemento img productImg
        productImg.setAttribute('src', product.image); //Añade objeto image con la ruta de la imagen al elemento img
        productImg.addEventListener('click', openProductDetailAside);

        const productInfo = document.createElement('div'); //Crea elemento div productInfo
        productInfo.classList.add('product-info'); //Añade clase product-info a elemento div
    
        const productInfoDiv = document.createElement('div'); //Crea nuevo elemento div para albergar dos párrafos
    
        const productPrice = document.createElement('p'); //Crea elemento p para primer párrafo
        productPrice.innerText = '$' + product.price; //Agrega texto a primer párrafo
        const productName = document.createElement('p'); //Crea elemento p para segundo párrafo
        productName.innerText = product.name; //Agrega texto a segundo párrafo con objeto name
    
        productInfoDiv.appendChild(productPrice); //Define ingreso de párrafo productPrice al div productInfoDiv 
        productInfoDiv.appendChild(productName); //Define ingreso de párrafo productName al div productInfoDiv
    
        const productInfoFigure = document.createElement('figure'); //Crea elemento figure
        const productImgCart = document.createElement('img'); //Crea elemento img
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg'); //Añade ruta con imagen al elemento img productImgCart
    
        productInfoFigure.appendChild(productImgCart); //Define ingreso de imagen dentro del elemento figure
    
        productInfo.appendChild(productInfoDiv); //Define ingreso del elemento div con dos párrafos, dentro del elemento div productInfo
        productInfo.appendChild(productInfoFigure); //Define ingreso del elemento figure con imagen, dentro del elemento div productInfo
    
        productCard.appendChild(productImg); //Define ingreso de la primera imagen (productImg) dentro del elemento div productCard
        productCard.appendChild(productInfo); //Define ingreso del elemento div productInfo dentro del elemento div productCard
    
        cardsContainer.appendChild(productCard); //Define ingreso del elemento div productCard dentro del contenedor div general cardsContainer definido en la parte html
    }
}

renderProducts(productList);