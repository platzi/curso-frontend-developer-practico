const menuEmail = document.querySelector('.navbar-email');
const deskTopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
// tomado de <img src="./icons/icon_menu.svg" alt="menu" class="menu">
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const shoppingCartContainer = document.getElementById('shoppingCartContainer')
const cardsContainer = document.querySelector('.cards-container')
const productDetailContainer = document.querySelector('#productDetail')
const productDetailCloseIcon = document.querySelector('.product-detail-close')

menuEmail.addEventListener('click', toggleDesktopMenu);
/*toggle: intercambiar*/
menuHamIcon.addEventListener('click', toggleMobileMenu)
menuCarritoIcon.addEventListener('click', ToggleShoopingCart)
productDetailCloseIcon.addEventListener('click', closeProductDetalAside )


function toggleDesktopMenu () {
    const isAsideClosed = shoppingCartContainer.classList.contains('.inactive');
    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');

    deskTopMenu.classList.toggle('inactive')
    }
}

function toggleMobileMenu () {
    const isAsideClosed = shoppingCartContainer.classList.contains('.inactive');
    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }

    closeProductDetalAside ()

    mobileMenu.classList.toggle('inactive')
}

function ToggleShoopingCart () {
    //necesitamos cerrar el menu mobile cada vez que abramos el carrito de compra
    // Pero antes de eso tenemos verificar si está inactiva
    const isMobileMenuClosed = mobileMenu.classList.contains('.inactive');
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
    const isdeskTopMenuclosed = deskTopMenu.classList.contains('.inactive')
    if(!isdeskTopMenuclosed) {
        deskTopMenu.classList.add('inactive')
    }

    const isProductDetailClosed = productDetailContainer.classList.contains('.inactive');
    if (!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive');
    }
    // const isdeskTopMenuclosed = deskTopMenu.classList.contains('.inactive')
    // if(!isdeskTopMenuclosed) {
    //     deskTopMenu.classList.add('inactive')
    // }



    shoppingCartContainer.classList.toggle('inactive')
}

function openProductDetailAside () {
   shoppingCartContainer.classList.add('inactive');  
productDetailContainer.classList.remove('inactive') //poruqe queremos quitar la clase inactive para que aparezca
}

function closeProductDetalAside () {


    productDetailContainer.classList.add('inactive')
}

const productList = [];



productList.push({
    name: "Bike",
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: "Laptop",
    price: 550,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: "Screen",
    price: 180,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

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

// vamos a crear los elementos del comentario uno x uno

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        // a esa imagen no le vamos a asignar la URL sino la propiedad del objeto productList
        productImg.setAttribute('src', product.image)
        productImg.addEventListener('click', openProductDetailAside)
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        
        const productInfoDiv = document.createElement('div');
        
    
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName)
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.append(productImgCart)
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);


        
    }

}
renderProducts(productList)











