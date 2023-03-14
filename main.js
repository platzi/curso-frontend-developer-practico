const menu_email = document.querySelector('.navbar-email')
const desktopmenu = document.querySelector('.desktop-menu')
const menu_hamburguesa = document.querySelector('.menu-hamburguesa')
const menu_mobile = document.querySelector('.mobile-menu')
const navbar_shoping_cart = document.querySelector('.navbar-shopping-cart')
const product_detail = document.querySelector('.product-detail')

navbar_shoping_cart.addEventListener('click',toggleshopingcart)
menu_hamburguesa.addEventListener('click', toggleMenuMobile)
menu_email.addEventListener('click', togglemenu)

function toggleshopingcart() {
    const is_mobile_closed = menu_mobile.classList.contains('inactive')
    const is_menu_desktop_closed = desktopmenu.classList.contains('inactive')
    
   if (!is_mobile_closed){
        menu_mobile.classList.add('inactive')
   }

   if (!is_menu_desktop_closed){
        desktopmenu.classList.add('inactive')
   }

   product_detail.classList.toggle('inactive')
}

function toggleMenuMobile(){
    const is_product_detail_closed = product_detail.classList.contains('inactive')

    if (!is_product_detail_closed){
        product_detail.classList.add('inactive')
    }
    menu_mobile.classList.toggle('inactive')
}

function togglemenu(){

    const is_product_detail_closed = product_detail.classList.contains('inactive')

    if (!is_product_detail_closed){
        product_detail.classList.add('inactive')
    }

    desktopmenu.classList.toggle('inactive')
}