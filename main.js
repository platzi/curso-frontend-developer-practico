const menuEmail=document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamburger = document.querySelector('.menu');
const movilMenu=document.querySelector('.mobile-menu')
const movilCarritoIcon=document.querySelector('.navbar-shopping-cart')
const asideProductsCarrito=document.querySelector('.product-detail')
const container_cards=document.querySelector('.cards-container')

menuHamburger.addEventListener('click',toggleMobileMenu)
menuEmail.addEventListener('click',toggleshowdesktop)
movilCarritoIcon.addEventListener('click',toggleCarritoAside)
//se hace click en EMAIL, se ejecuta la función y esta ejecuta 
//la funcion .classList.toggle, que quita o agrega la class .INACTIVE

function toggleshowdesktop(){
    desktopMenu.classList.toggle('inactive')//TOGGLE es metodo de CLASSLIST
//si la clase .INACTIVE no existe la AÑADE (TRUE), si existe la ELIMINA (FALSE) en .DESKTOP-MENU
//POR DEFECTO LA CLASE .INACTIVE ESTÁ PUESTA EN .DESKTOP-MENU
    asideProductsCarrito.classList.add('inactive')

}
function toggleMobileMenu(){
//POR DEFECTO TRUE, SI CONTAINS
    const isProductsCarritoClosed= asideProductsCarrito.classList.contains('inactive')

    if (!isProductsCarritoClosed) {//SI ESTA ABIERTO,se ve (FALSE: si NO contiene, se le agrega .INACTIVE)
        asideProductsCarrito.classList.add('inactive')//se agrega y se OCULTA(display: none)
    }
    movilMenu.classList.toggle('inactive')

/* OTRA FORMA
function toggleMobileMenu() {
  asideProductsCarrito.classList.add("inactive"); //si la CLASE ya existe en HTML, no ocurre nada
  movilMenu.classList.toggle("inactive");
}
*/    
}
function toggleCarritoAside(){//POR DEFECTO TRU CONTAINS
    const isMovilMenuClosed= movilMenu.classList.contains('inactive')//TRUE, ESTA OCULTO(display none)

//TOGGLE alterna ante un CLICK, si esta cerrado MENU MOVIL, en CARRITO alterna TOGGLE normalmente
//si esta ABIERTO MENU MOVIL, se agrega .INACTIVE en MENU MOVIL, ante el CLICK en CARRITO(se recarga)
//se recarga y la class .INACTIVE(ya agregada) hace efecto en el MENU MOVIL
    if (!isMovilMenuClosed) {//SI ESTA ABIERTO,se ve (FALSE: si NO contiene, se le agrega .INACTIVE)
        movilMenu.classList.add('inactive')//se agrega y se OCULTA(display: none)
    }
    asideProductsCarrito.classList.toggle('inactive')//SI EXISTE se elimina, NO EXISTE se agrega

    desktopMenu.classList.add('inactive')
/* OTRA FORMA
function toggleCarritoAside() {
  movilMenu.classList.add("inactive");
  asideProductsCarrito.classList.toggle("inactive");
}
*/

}


//SE AGREGARÁ MANUALMENTE
const productList=[]
productList.push({
    name:'Bike',
    price:120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name:'Bike',
    price:120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

})
productList.push({
    name:'Bike',
    price:120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

})
productList.push({
    name:'Bike',
    price:120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name:'Bike',
    price:120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

})
productList.push({
    name:'Bike',
    price:120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

})

//for of: imprimer los objetos con informacion
//for in: imprime su numero de posicion
//PARA ORGANIZACION(ORDEN) SE CREARA UNA FUNCION, QUE PERMITIRA ENVIAR UN ARRAY CUALQUIERA
function renderProducts(arr) {
    for (const product of productList) {
        const card_product=document.createElement('div')
        card_product.className='product-card'
    
        //cada producto tiene su imagen
        //setAttribute: cambia la propiedad SRC,
        //haciendo que cada PRODUCT tenga su imagen establecida en el ARRAY DE OBJETOS
        const image_product=document.createElement('img')
        image_product.setAttribute('src',product.image)
    
        const product_info=document.createElement('div')
        product_info.className='product-info'
    
        const price_and_name=document.createElement('div')
    
        const product_price=document.createElement('p')
        product_price.innerHTML='$'+product.price
    
        const product_name=document.createElement('p')
        product_name.innerHTML=product.name
        
        const product_icon_cart=document.createElement('img')
        product_icon_cart.setAttribute('src','./icons/bt_add_to_cart.svg')
    
        const product_figure_icon=document.createElement('figure')
    
        product_figure_icon.appendChild(product_icon_cart)
        price_and_name.append(product_price,product_name)
        product_info.append(price_and_name,product_figure_icon)
        card_product.append(image_product,product_info)
    
        container_cards.appendChild(card_product)
    }
}

renderProducts(productList)