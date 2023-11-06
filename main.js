const navbar = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const carrito = document.querySelector('.navbar-shopping-cart');
const productoDetalle = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');
navbar.addEventListener('click', toogleMenu);
menuHamIcon.addEventListener('click', toogleMobileMenu);
carrito.addEventListener('click', mostrarProductosCarrito);


function toogleMenu(){
    const productoDetalleVisible = productoDetalle.classList.contains('inactive');
    if(!productoDetalleVisible){
        productoDetalle.classList.add('inactive');
    }
desktopMenu.classList.toggle('inactive');
}


function toogleMobileMenu(){

    const productoDetalleVisible = productoDetalle.classList.contains('inactive');
    if(!productoDetalleVisible){
        productoDetalle.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function mostrarProductosCarrito(){
    const desktopMenuVisible = desktopMenu.classList.contains('inactive');
    const mobileMenuVisible = mobileMenu.classList.contains('inactive');

    if(!desktopMenuVisible){
        desktopMenu.classList.add('inactive');
    } else if(!mobileMenuVisible){
        mobileMenu.classList.add('inactive');
    }
    productoDetalle.classList.toggle('inactive');
}


const productList = [];

productList.push({
    name: 'Bike',
    precio:120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

productList.push({
    name: 'TV 50 pulgadas',
    precio: 3500,
    image: "https://images.pexels.com/photos/4488194/pexels-photo-4488194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
})

productList.push({
    name: 'Macbook Air 2021',
    precio: 7500,
    image: "https://images.pexels.com/photos/238118/pexels-photo-238118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
})


 function renderProducts(arr) {
for(product of arr){
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
      const productImg = document.createElement('img');
      productImg.setAttribute('src', product.image);

     const productInfo = document.createElement('div');
      productInfo.classList.add('product-info');
     
      const productInfoDiv = document.createElement('div');
     
      const productPrecio = document.createElement('p');
      productPrecio.innerHTML = `Q. ${product.precio}`;

      const productNombre = document.createElement('p');
      productNombre.innerHTML = `${product.name}`;

      productInfoDiv.appendChild(productPrecio);
      productInfoDiv.appendChild(productNombre);


      const productInfoFigure = document.createElement('figure');
      const productImgCard = document.createElement('img');
      productImgCard.setAttribute('src', "./icons/bt_add_to_cart.svg");
     
      productInfoFigure.appendChild(productImgCard);


      productInfo.appendChild(productInfoDiv);
      productInfo.appendChild(productInfoFigure);

      productCard.appendChild(productImg);
      productCard.appendChild(productInfo);

      
      const mainContainer = document.querySelector('.main-container');


     cardsContainer.appendChild(productCard)

     mainContainer.appendChild(cardsContainer);
}

}

renderProducts(productList);