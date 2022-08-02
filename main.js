const navbarEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
//const inactive = document.querySelector('.inactive')
const menuHamIcon = document.querySelector('.menu')
const mobileMEnu = document.querySelector('.mobile-menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')

 navbarEmail.addEventListener('click',function(){
    desktopMenu.classList.toggle('inactive')
})
menuHamIcon.addEventListener('click',function(){

    let isAsideClose = aside.classList.contains('inactive')
    if(!isAsideClose) aside.classList.add('inactive')
    mobileMEnu.classList.toggle('inactive')
    
})

menuCarritoIcon.addEventListener('click',function(){

    let mobileMenuClose = mobileMEnu.classList.contains('inactive')
    if(!mobileMenuClose)mobileMEnu.classList.add('inactive') 
    aside.classList.toggle('inactive')

})
 

const productList =[{
    name:'skate',
    price:50,
    img:'https://bit.ly/3vVvQUD'
},
{
    name:'Bike',
    price:120,
    img:'https://bit.ly/3BzhJHW'
},
{
    name:'Roller',
    price:80,
    img:'https://bit.ly/3BAqLEH'
}
]

for(product of productList){

    const htmlCards = `
    <div class="product-card">
        <img src=${product.img} alt="">
        <div class="product-info">
          <div>
            <p>$${product.price}</p>
            <p>${product.name}</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div>
    `

    const cardContainer = document.querySelector('.cards-container')
    cardContainer.innerHTML += htmlCards
}
