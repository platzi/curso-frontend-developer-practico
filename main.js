const menu_email = document.querySelector('.navbar-email')
const desktopmenu = document.querySelector('.desktop-menu')
const menu_hamburguesa = document.querySelector('.menu-hamburguesa')
const menu_mobile = document.querySelector('.mobile-menu')
const navbar_shoping_cart = document.querySelector('.navbar-shopping-cart')
const shopping_cart_container = document.querySelector('#shopping-cart-container')
const cards_container = document.querySelector('.cards-container')
const product_detail_container = document.querySelector('#productDetail')
const x_de_product_detail = document.querySelector('.product-detail-close')

navbar_shoping_cart.addEventListener('click',toggleshopingcart)
menu_hamburguesa.addEventListener('click', toggleMenuMobile)
menu_email.addEventListener('click', togglemenu)
x_de_product_detail.addEventListener('click', cerrarProductDetail)

function toggleshopingcart() {
    const is_mobile_closed = menu_mobile.classList.contains('inactive')
    const is_menu_desktop_closed = desktopmenu.classList.contains('inactive')
    const is_product_detail = product_detail_container.contains('inactive')
    
   if (!is_mobile_closed){
        menu_mobile.classList.add('inactive')
   }

   if (!is_menu_desktop_closed){
        desktopmenu.classList.add('inactive')
   }

   if (!is_product_detail){
        product_detail_container.classList.add('inactive')
   }

   shopping_cart_container.classList.toggle('inactive')
}

function toggleMenuMobile(){
    const is_shopping_cart_container_closed = shopping_cart_container.classList.contains('inactive')

    if (!is_shopping_cart_container_closed){
        shopping_cart_container.classList.add('inactive')
    }
    menu_mobile.classList.toggle('inactive')
}

function togglemenu(){

    const is_shopping_cart_container_closed = shopping_cart_container.classList.contains('inactive')

    if (!is_shopping_cart_container_closed){
        shopping_cart_container.classList.add('inactive')
    }

    desktopmenu.classList.toggle('inactive')
}

function openDetailAside(){
    
    product_detail_container.classList.remove('inactive')
}

function cerrarProductDetail(){

    product_detail_container.classList.add('inactive')
}


const product_array = []
product_array.push({
    nombre: 'bike',
    precio: 120,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
product_array.push({
    nombre: 'teclado',
    precio: 50,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
product_array.push({
    nombre: 'pantalla',
    precio: 500,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
product_array.push({
    nombre: 'bike',
    precio: 120,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
product_array.push({
    nombre: 'teclado',
    precio: 50,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
product_array.push({
    nombre: 'pantalla',
    precio: 500,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})



function renderProducts(arr){
    for (x of arr){
        const product_cart = document.createElement('div')
        product_cart.classList.add('product-card')
        
        const img_producto = document.createElement('img')
        img_producto.setAttribute('src', x.imagen)
        img_producto.addEventListener('click', openDetailAside)
    
        const product_info = document.createElement('div')
        product_info.classList.add('product-info')
        
    
        const product_info_div = document.createElement('div')
        
        const product_precio = document.createElement('p')
        product_precio.innerText = '$' + x.precio
    
        const product_nombre = document.createElement('p')
        product_nombre.innerText = x.nombre
    
        const figure_product_info = document.createElement('figure')
        const product_img_figure = document.createElement('img')
        product_img_figure.setAttribute('src', './icons/bt_add_to_cart.svg')
    
        figure_product_info.appendChild(product_img_figure)
    
    
        product_cart.appendChild(img_producto)
        product_cart.appendChild(product_info)
        product_info.appendChild(product_info_div)
        product_info.appendChild(figure_product_info)
        product_info_div.appendChild(product_precio)
        product_info_div.appendChild(product_nombre)
        product_info_div.appendChild(product_precio)
        product_info_div.appendChild(product_nombre)
    
    
        cards_container.appendChild(product_cart)
    }
}


renderProducts(product_array)

