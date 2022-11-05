// constantes traidas de HTML
const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamburguer = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')
const cardsContainer = document.querySelector('.cards-container');
//Eventos
navEmail.addEventListener('click', toggleDesktopMenu);
menuHamburguer.addEventListener('click',toggleMobileMenu )
menuCarritoIcon.addEventListener('click',toggleCarritoAside)
//funciones
function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive')
    
    if (!isAsideClosed){
        aside.classList.add('inactive')
    }
    if (desktopMenu.classList.contains('inactive')){
        desktopMenu.classList.remove('inactive')
    }else{
        desktopMenu.classList.add('inactive')
    }
}

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive')
    
    if (!isAsideClosed){
        aside.classList.add('inactive')
    }

    mobileMenu.classList.toggle('inactive')
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive')
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')
    
    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive')
    }
    if (!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive')
    }
    aside.classList.toggle('inactive')
}


const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Burger',
    price: 20,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Motorcycle',
    price: 300,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Computer',
    price: 200,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
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
      </div
*/ 
function renderProducts(arr) {
    for (product of arr){
        /**creacion y asignacion */
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')
    
        const imag = document.createElement('img');
        imag.setAttribute('src', product.img);
        
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')
    
        const info = document.createElement('div');
    
        const precio =  document.createElement('p');
        precio.innerText = '$' + product.price;
    
        const name =  document.createElement('p');
        name.innerText = product.name;
    
        const figure1 =  document.createElement('figure');
        
        const icon =  document.createElement('img');
        icon.setAttribute('src', './icons/bt_add_to_cart.svg' )
    
        /*posicionamiento*/
        cardsContainer.appendChild(productCard)
        productCard.appendChild(imag);
        productCard.appendChild(productInfo)
        productInfo.appendChild(info);
        productInfo.appendChild(figure1)
        info.appendChild(precio);
        info.appendChild(name);
        figure1.appendChild(icon);
    
    }
}

renderProducts(productList)