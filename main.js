const email= document.querySelector('.navbar-email')
const desktop= document.querySelector('.desktop-menu')
const hamb = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const shcar = document.querySelector('.navbar-shopping-cart')
const productDetail = document.querySelector('.product-detail')

email.addEventListener('click', toggleFunction)

function toggleFunction(){
    const isProductDetail= productDetail.classList.contains('inactive')
    desktop.classList.toggle('inactive')
    if(!isProductDetail){
        productDetail.classList.toggle('inactive')
    }
}

hamb.addEventListener('click', toggleHam)

function toggleHam(){
    
    mobileMenu.classList.toggle('inactive')
}

shcar.addEventListener('click',toggleShcar)

function toggleShcar(){
    productDetail.classList.toggle('inactive')
    const isDesktopOpen = desktop.classList.contains('inactive')
    if(!isDesktopOpen){
        desktop.classList.toggle('inactive')
    }
    if(isProductDetail){
        desktop.classList.toggle('inactive')
    }
}
