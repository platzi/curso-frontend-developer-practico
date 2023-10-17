const navEmail = document.querySelector('.navbar-email') //Email clickeable 
const desktopMenu = document.querySelector('.desktop-menu')//Menu desplegabla
const burgerMenu = document.querySelector('.burgerMenu')//icono Burger
const sideMenuMovil = document.querySelector('.mobile-menu')//Menu desplegabla movile
const shoopingicon = document.querySelector('.navbar-shopping-cart') //shoopingcart icon
const productDetail = document.querySelector('.product-detail')//carrito de compras

//click es un evento de escucha, es una palabra reservada para este metodo

navEmail.addEventListener('click', toggleDesktopMenu)//evento del email clickeable llama a funcion
burgerMenu.addEventListener('click', toggleMovileMenu)
shoopingicon.addEventListener('click', toogleProductDetail)

//funcion para que detecte click y se inactive o active el menu
function toggleDesktopMenu() {

    //identificamos el componente a mostrar con desktopMenu
    //classlist nos trae todas las clases que contiene el elemento dsktopMenu
    //toggle es una sublase de classlist que permite alternar entre la clase 
    //inactive es la clase que se va a alternar al dar click en navEmail

    const isProductDetailOpen = !productDetail.classList.contains('inactive')

    if (isProductDetailOpen) {
        productDetail.classList.add('inactive')
    } else {

        desktopMenu.classList.toggle('inactive')
    }

}


function toggleMovileMenu() {
    const isProductDetailOpen = !productDetail.classList.contains('inactive')

    if (isProductDetailOpen) { //condicional que detecta si se muestra el componente
        productDetail.classList.add('inactive') //el otro menu se cierra
    } else {
        sideMenuMovil.classList.toggle('inactive')//de no ser asi, permanece abierto
    }
}

function toogleProductDetail() {
    const isSideMenuMovilOpen = !sideMenuMovil.classList.contains('inactive')
    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive')

    if (isSideMenuMovilOpen || isDesktopMenuOpen) {
        sideMenuMovil.classList.add('inactive')
        desktopMenu.classList.add('inactive')
    } else {
        productDetail.classList.toggle('inactive')
    }





}