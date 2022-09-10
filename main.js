const navbar_right=document.querySelector('.navbar-email');
const desktop_menu=document.querySelector('.desktop-menu');
const mobile_menu=document.querySelector('.menu')
const despliegue_mobile_menu=document.querySelector('.mobile-menu')
const shopping_car=document.querySelector('.navbar-shopping-cart')
const product_detail=document.querySelector('aside')
const cards_container=document.querySelector('.cards-container')
const product_detail_particular=document.querySelector('.product-detail-particular')
const closeButton=document.querySelector('.product-detail-close')

function product_particular(){
    product_detail_particular.classList.remove('inactive') 
    desktop_menu.classList.add('inactive')
    despliegue_mobile_menu.classList.add('inactive')
    product_detail.classList.add('inactive')
}

navbar_right.addEventListener('click',()=>{
    desktop_menu.classList.contains('inactive') ?desktop_menu.classList.remove('inactive') :desktop_menu.classList.add('inactive')
    product_detail.classList.add('inactive')
    product_detail_particular.classList.add('inactive')
} )

mobile_menu.addEventListener('click',()=>{
    despliegue_mobile_menu.classList.contains('inactive') ?despliegue_mobile_menu.classList.remove('inactive') :despliegue_mobile_menu.classList.add('inactive')
    product_detail.classList.add('inactive')
    product_detail_particular.classList.add('inactive')
} )

shopping_car.addEventListener('click',()=>{
    product_detail.classList.contains('inactive') ?product_detail.classList.remove('inactive') :product_detail.classList.add('inactive')
    desktop_menu.classList.add('inactive')
    despliegue_mobile_menu.classList.add('inactive')
    product_detail_particular.classList.add('inactive')
} )

closeButton.addEventListener('click',()=>{
    product_detail_particular.classList.add('inactive')
})

let productlist=[]

productlist.push({
    name:'Bike',
    price:120,
    img:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productlist.push({
    name:'Computer',
    price:450,
    img:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productlist.push({
    name:'Celular',
    price:300,
    img:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

let view=productlist.map(i=>
    
    `<div class="product-card">
        <img onclick='product_particular()' src=${i.img} alt="">
        <div class="product-info">
        <div>
            <p>$${i.price} </p>
            <p>${i.name} </p>
        </div>
        <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
        </div>
    </div>
`).join("");

cards_container.innerHTML=view;

