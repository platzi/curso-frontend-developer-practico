
const screen_blackground_productDetails=document.querySelector('.background-show-product')

const menuEmail=document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamburger = document.querySelector('.menu');
const movilMenu=document.querySelector('.mobile-menu')
const movilCarritoIcon=document.querySelector('.navbar-shopping-cart')
const asideProductsCarrito=document.querySelector('#shooping_cart_container')
const container_cards=document.querySelector('.cards-container')
const product_details_info=document.querySelector('#productDetail')
const buttonClosed_product_details=document.querySelector('.product-detail-close')

menuHamburger.addEventListener('click',toggleMobileMenu)
menuEmail.addEventListener('click',toggleshowdesktop)
movilCarritoIcon.addEventListener('click',toggleCarritoAside)
buttonClosed_product_details.addEventListener('click',closed_product_detail)
//se hace click en EMAIL, se ejecuta la función y esta ejecuta 
//la funcion .classList.toggle, que quita o agrega la class .INACTIVE

const image_product_detail=document.querySelector('#img_product_detail')
const price_product_detail=document.querySelector('#price_product_detail')
const name_product_detail=document.querySelector('#name_product_detail')

function toggleshowdesktop(){
    desktopMenu.classList.toggle('inactive')//TOGGLE es metodo de CLASSLIST
//si la clase .INACTIVE no existe la AÑADE (TRUE), si existe la ELIMINA (FALSE) en .DESKTOP-MENU
//POR DEFECTO LA CLASE .INACTIVE ESTÁ PUESTA EN .DESKTOP-MENU
    asideProductsCarrito.classList.add('inactive')
    product_details_info.classList.add('inactive')

}
function toggleMobileMenu(){
//POR DEFECTO TRUE, SI CONTAINS
    const isProductsCarritoClosed= asideProductsCarrito.classList.contains('inactive')

    if (!isProductsCarritoClosed) {//SI ESTA ABIERTO,se ve (FALSE: si NO contiene, se le agrega .INACTIVE)
        asideProductsCarrito.classList.add('inactive')//se agrega y se OCULTA(display: none)
    }
    movilMenu.classList.toggle('inactive')
    closed_product_detail()

/* OTRA FORMA
function toggleMobileMenu() {
  asideProductsCarrito.classList.add("inactive"); //si la CLASE ya existe en HTML, no ocurre nada
  movilMenu.classList.toggle("inactive");
}
*/    
}
//INTERCAMBIO ENTRE MENU HAMBURGER Y CARRITO_CART
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
    closed_product_detail()
/* OTRA FORMA
function toggleCarritoAside() {
  movilMenu.classList.add("inactive");
  asideProductsCarrito.classList.toggle("inactive");
}
*/
}
function show_product_detail(event) {
    console.log(event.target)
    product_details_info.classList.remove('inactive')
    screen_blackground_productDetails.classList.remove('inactive')
    asideProductsCarrito.classList.add('inactive')
    desktopMenu.classList.add('inactive')
    image_product_detail.setAttribute('src',event.target.src)//obtiene src de cada item de array
    price_product_detail.innerText=event.target.nextSibling.innerText
    //(setAttribute():Establece un nuevo valor para un atributo, si no existe SE CREA.
    //event.target: Obtiene el elemento que origino el evento (IMG), y cambiar valor  
    //nextElementSibling: devuelve en el siguiente ELEMENTO HTML, EL TEXTO
}
function closed_product_detail() {
    product_details_info.classList.add('inactive')
    screen_blackground_productDetails.classList.add('inactive')

}

function counter_products_cart() {
}

const productList=[]
productList.push({
    name:'Smart Watch',
    price:100,
    image:'./images/image1.jpg'
})
productList.push({
    name:'Mobile',
    price:320,
    image:'./images/image2.jpg'

})
productList.push({
    name:'TV',
    price:400,
    image:'./images/image3.jpg'

})
productList.push({
    name:'Laptop',
    price:500,
    image:'./images/image4.jpg'
})
productList.push({
    name:'Car',
    price:900,
    image:'./images/image5.jpg'

})
productList.push({
    name:'Motorcycle',
    price:850,
    image:'./images/image6.jpg'

})

//for of: imprimer los objetos con informacion
//for in: imprime su numero de posicion
//PARA ORGANIZACION(ORDEN) SE CREARA UNA FUNCION, QUE PERMITIRA ENVIAR UN ARRAY CUALQUIERA
function renderProducts(arr) {
    for (const product of arr) {
        const card_product=document.createElement('div')
        card_product.className='product-card'
    
        //cada producto tiene su imagen
        //setAttribute: cambia la propiedad SRC,
        //haciendo que cada PRODUCT tenga su imagen establecida en el ARRAY DE OBJETOS
        const image_product=document.createElement('img')
        image_product.setAttribute('src',product.image)
        image_product.addEventListener('click',show_product_detail)
        image_product.style.cursor='pointer'
    
        const product_info=document.createElement('div')
        product_info.className='product-info'
    
        const price_and_name=document.createElement('div')
    
        const product_price=document.createElement('p')
        product_price.innerHTML='$'+product.price
    
        const product_name=document.createElement('p')
        product_name.innerHTML=product.name
        
        const product_icon_cart=document.createElement('img')
        product_icon_cart.setAttribute('src','./icons/bt_add_to_cart.svg')
        product_icon_cart.style.cursor='pointer'
    
        const product_figure_icon=document.createElement('figure')
    
        product_figure_icon.appendChild(product_icon_cart)
        price_and_name.append(product_price,product_name)
        product_info.append(price_and_name,product_figure_icon)
        card_product.append(image_product,product_info)
    
        container_cards.appendChild(card_product)
    }
}

renderProducts(productList)



