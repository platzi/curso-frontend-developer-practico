const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu") //menu mail
const menu = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')   //menu telefono
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const shoppingCartContainer = document.querySelector('#shoppingCartContainer') // carrito
const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu);

menu.addEventListener('click', toggleMenu)

menuCarritoIcon.addEventListener('click', toggleCarritoDeCompras)


function toggleDesktopMenu(){
   //const si carrito de compras = carritodos de compra inactivo
    const isshoppingCartContainerClose = shoppingCartContainer.classList.contains('inactive')
//si carrito de compra no esta inactivo osea activo
    if (!isshoppingCartContainerClose) {
        shoppingCartContainer.classList.add("inactiv") // inacticvar carrito de compra
    }
        desktopMenu.classList.toggle("inactiv")

}

function toggleMenu(){
   
    const isshoppingCartContainerClose = shoppingCartContainer.classList.contains('inactive')

    if (!isshoppingCartContainerClose) {
        shoppingCartContainer.classList.add("inactiv")
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

    shoppingCartContainer.classList.toggle("inactiv")


}

const productList = []; //creo un arreglo para listado de productos
productList.push({ //creo un objeto dentro del arreglo para el producto.
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

})
productList.push({ //creo un objeto dentro del arreglo para el producto.
    name: 'tele',
    price: 180,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

})
productList.push({ //creo un objeto dentro del arreglo para el producto.
    name: 'compu',
    price: 230,
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
          </div>*/

function renderProducts(arr) {// funcion de renderizar los productos.
    for (product of productList) {//por cada producto de la lista de producto
   
    const productCard = document.createElement('div') //creo el div principal
    productCard.classList.add ('product-card') // le agrego la clase al div
   
    const productImg = document.createElement('img') // creo la imagen.
    productImg.setAttribute('src', product.image) //modifico el atributo scr de la img y defino q utilice la imagen del producto

    const productInfo = document.createElement('div') //creo el div de product-info
    productInfo.classList.add ('product-info') // le agrego la clase al div product-info
   
    const productInfoDiv = document.createElement('div') //creo el div donde se encuentra el precio y el nombre
   
    const productPrice = document.createElement('p') //creo el parerafo donde va el precio
    productPrice.innerText = '$' + product.price // inserto y concadeno $ y valor del producto

    const productName = document.createElement('p') //creo el parerafo donde va el precio
    productName.innerText = product.name //inserto nombre del producto

    const productInfofigure = document.createElement('figure')//creo etiqueta figure
    productInfoFigureImage = document.createElement('img') //creo etiqueta de imagen
    productInfoFigureImage.setAttribute ('scr', './icons/bt_add_to_cart.svg') // modifico atributo scr agregando imagen.

    productInfofigure.appendChild(productInfoFigureImage) // inserto la imagen dentro del figure

    productInfoDiv.appendChild(productName) //inserto nombre dentro del div
    productInfoDiv.appendChild(productPrice) //inserto precio dentro del div

    productInfo.appendChild(productInfoDiv)
    productInfo.appendChild(productInfofigure)

    productCard.appendChild(productImg)
    productCard.appendChild(productInfo)   

     cardsContainer.appendChild(productCard)
}}

renderProducts(productList)//llamo a la funcion dandole la lista de productos
