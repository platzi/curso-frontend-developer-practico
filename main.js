const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu") //menu mail
const menu = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')   //menu telefono
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const productDetail = document.querySelector('.product-detail') // carrito

menuEmail.addEventListener('click', toggleDesktopMenu);

menu.addEventListener('click', toggleMenu)

menuCarritoIcon.addEventListener('click', toggleCarritoDeCompras)


function toggleDesktopMenu(){
   //const si carrito de compras = carritodos de compra inactivo
    const isProductDetailClose = productDetail.classList.contains('inactive')
//si carrito de compra no esta inactivo osea activo
    if (!isProductDetailClose) {
        productDetail.classList.add("inactiv") // inacticvar carrito de compra
    }
        desktopMenu.classList.toggle("inactiv")

}

function toggleMenu(){
   
    const isProductDetailClose = productDetail.classList.contains('inactive')

    if (!isProductDetailClose) {
        productDetail.classList.add("inactiv")
    }

    mobileMenu.classList.toggle("inactiv")

}
function toggleCarritoDeCompras(){

    const isMovileMenuclose = mobileMenu.classList.contains('inactive')

    if (!isMovileMenuclose) {
        mobileMenu.classList.add("inactiv")
    }

    const isdesktopMenClose = desktopMenu.classList.contains('inactive')

    if (!isdesktopMenClose) {
        desktopMenu.classList.add("inactiv")
    }

    productDetail.classList.toggle("inactiv")


}
