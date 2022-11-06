// constantes traidas de HTML
const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamburguer = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const closeIcon = document.querySelector('.product-detail-close')
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#product-detail')
//Eventos
navEmail.addEventListener('click', toggleDesktopMenu);
menuHamburguer.addEventListener('click',toggleMobileMenu )
menuCarritoIcon.addEventListener('click',toggleCarritoAside)
closeIcon.addEventListener('click',closeToggleDetailAside)
//funciones
function toggleDesktopMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive')
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive')
    if (!isAsideClosed){
        shoppingCartContainer.classList.add('inactive')
    }
    if (!isProductDetailClosed){
        productDetailContainer.classList.add('inactive')
    }
    if (desktopMenu.classList.contains('inactive')){
        desktopMenu.classList.remove('inactive')
    }else{
        desktopMenu.classList.add('inactive')
    }
}

function toggleMobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive')
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive')
    if (!isAsideClosed){
        shoppingCartContainer.classList.add('inactive')
    }
    if(!isProductDetailClosed){
        productDetailContainer.classList.add('inactive')
    }

    mobileMenu.classList.toggle('inactive')
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive')
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive')
    
    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive')
    }

    if (!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive')
    }
    if (!isProductDetailClosed){
        productDetailContainer.classList.add('inactive')
    }
    shoppingCartContainer.classList.toggle('inactive')


}
function closeToggleDetailAside(){
    productDetailContainer.classList.add('inactive')
}

function openProductDetailAside(){
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
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
    img: 'https://storage.contextoganadero.com/s3fs-public/styles/noticias_one/public/cronica_de_la_semana/field_image/2022-03/cronica-origen-hamburguesas.jpg?itok=-_epTg53'
})
productList.push({
    name: 'Motorcycle',
    price: 300,
    img: 'https://media.autecomobility.com/recursos/marcas/benellibike/BICICLETA-CONVENCIONAL-BENELLI-M22-1-0-ADV-CARB-27-5/benellibikes-M22-1-0-ADV-CARB-27-5-imagen-ppal.png'
})
productList.push({
    name: 'Computer',
    price: 200,
    img: 'https://www.sincable.mx/wp-content/uploads/2020/01/patrick-ward-z_dLXnQg0JY-unsplash-1024x664.jpg'
})
productList.push({
    name: 'Iphone 12 pro Max',
    price: 600,
    img: 'https://i.blogs.es/35ef0d/iphone-12-pro-max-00-01/1366_2000.jpg'
})

function renderProducts(arr) {
    for (product of arr){
        /**creacion y asignacion */
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')
    
        const imag = document.createElement('img');
        imag.setAttribute('src', product.img);
        imag.addEventListener('click', openProductDetailAside)
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