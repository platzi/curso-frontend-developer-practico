const menuUser = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menu = document.querySelector(".menu");
const mobileMenu = document.querySelector('.mobile-menu');
const carritoIcon = document.querySelector('.navbar-shopping-cart');
const asideBuyList = document.querySelector('#cartContainer');
const cardsContainer =document.querySelector('.cards-container');
const detailContainer = document.querySelector('#detailProduct');
const closeDetail = document.querySelector('.product-detail-close')

menu.addEventListener('click', toggleMobileMenu);
menuUser.addEventListener('click', toggleDesktopMenu);
carritoIcon.addEventListener('click', toggleCarrito);
closeDetail.addEventListener('click', closeProductDetail);

function toggleDesktopMenu(){
    const isProductDetailClose = detailContainer.classList.contains('inactive');
    const isAsideMenuClosed = asideBuyList.classList.contains('inactive');//esto devuelve un booleano, ese booleano sera usado como condicion a continuación.
    if (!isAsideMenuClosed){
        asideBuyList.classList.add('inactive');
    }
    else if (!isProductDetailClose){
        detailContainer.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideMenuClosed = asideBuyList.classList.contains('inactive');
    const isProductDetailClose = detailContainer.classList.contains('inactive');
    if (!isAsideMenuClosed){
        asideBuyList.classList.add('inactive');
    }
    else if (!isProductDetailClose){
        detailContainer.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleCarrito(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isProductDetailClose = detailContainer.classList.contains('inactive');
    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
    else if (!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }
    else if (!isProductDetailClose){
        detailContainer.classList.add('inactive');
    }
    asideBuyList.classList.toggle('inactive');
}
function openProductDetail(){
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    asideBuyList.classList.add('inactive');
    
    detailContainer.classList.remove('inactive'); 
}
function closeProductDetail(){
    detailContainer.classList.add('inactive');
}
const productList =[];
productList.push({
    name: "Bike",
    price: 120,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productList.push({
    name: "Car",
    price: 2500,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productList.push({
    name: "Wheels",
    price: 95,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productList.push({
    name: "Wheels",
    price: 95,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productList.push({
    name: "Wheels",
    price: 95,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productList.push({
    name: "Wheels",
    price: 95,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
/*<div class="product-card">
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
      </div>*/


function renderProducts (arr){
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const imgProduct = document.createElement('img');
        imgProduct.setAttribute('src', product.imagen);
        imgProduct.addEventListener('click', openProductDetail);

        const infoProduct = document.createElement('div');
        infoProduct.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const parrafoPrice = document.createElement('p');
        parrafoPrice.innerText = '$'+ product.price;
        const parrafoName = document.createElement('p');
        parrafoName.innerText = product.name;

        const productFigure = document.createElement('figure');
        const imgCart = document.createElement('img');
        imgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
        
        productFigure.appendChild(imgCart);
        
        productInfoDiv.append(parrafoPrice, parrafoName);
        
        infoProduct.append(productInfoDiv, productFigure);
        
        productCard.append(imgProduct, infoProduct);

        cardsContainer.appendChild(productCard);

    }
}
renderProducts(productList);