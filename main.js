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
//se crea arreglo para poder almacenar los productos 
const productList = []
productList.push({
    name: 'Kitty',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

for (product of productList) {
    const productCard = document.createElement('div')
    productCard, classList.add('product-card')

    const img = document.createElement('img')
    img.setAttribute('src', product.image)

    const productInfo = document.createElement('div')
    productInfo, classList.add('product-info') 

    const productInfoDiv = document.createAttribute('div')

    const productPrice = document.createAttribute('p')
    productPrice.innerText = '$' + product.price
    const productName = document.createAttribute('p')
    productName.innerText =  product.name

    const productInfoFigure = document.createElement('figure')
    const productImgCart = document.createElement('img')
    img.setAttribute('src','./icons/bt_add_to_cart.svg')
}