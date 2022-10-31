const menuEmail = document.querySelector('.navbar-email')
const desktopMenu= document.querySelector('.desktop-menu')
const mobileMenu= document.querySelector('.mobile-menu')
const menuHamb = document.querySelector('.menu')
const orderList = document.querySelector('.product-detail')
const shoppingCartImg = document.querySelector('.shopping-cart-img')
const cardContainer=document.querySelector('.cards-container')
const productList=[]

menuEmail.addEventListener('click', toggleDesktopMenu)
menuHamb.addEventListener('click', toggleHambMenu)
shoppingCartImg.addEventListener('click', toggleOrderList)

function toggleOrderList(){
    orderList.classList.toggle('inactive')
    desktopMenu.classList.add('inactive')
    mobileMenu.classList.add('inactive')
   
}

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive')
    orderList.classList.add('inactive')
    
}
function toggleHambMenu(){
    mobileMenu.classList.toggle('inactive')
    orderList.classList.add('inactive')
}

productList.push({
    name: 'Bike', price:120 ,
    image:"https://images.pexels.com/photos/2130611/pexels-photo-2130611.jpeg?cs=srgb&dl=pexels-timea-kadar-2130611.jpg&fm=jpg&_gl=1*w4hmwp*_ga*MTYzMDc5MzAzNy4xNjY2NjI4MDIy*_ga_8JE65Q40S6*MTY2NjYyODAyNC4xLjEuMTY2NjYyODA1Ni4wLjAuMA.."
})
productList.push({
    name: 'Laptop', price:400 ,
    image:"https://images.pexels.com/photos/669228/pexels-photo-669228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
})
productList.push({
    name: 'Monitor', price:150 ,
    image:"https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
})
function fillCardContainer(arr){
    for(product of arr){
        const productCard=document.createElement('div')
        productCard.setAttribute('class',"product-card")
        const productImg=document.createElement('img')
        productImg.setAttribute('src', `${product.image}`)
        const productInfo=document.createElement('div')
        productInfo.setAttribute('class',"product-info")
        const div1=document.createElement('div')
        const p1=document.createElement('p')
        const p2=document.createElement('p')
        const figure=document.createElement('figure')
        const img1=document.createElement('img')
        p1.innerHTML='$'+(product.price).toFixed(2)
        p2.innerHTML=product.name
        img1.setAttribute('src', "./icons/bt_add_to_cart.svg")

        figure.appendChild(img1)
        productInfo.append(div1,figure)
        div1.append(p1,p2)
        productCard.append(productImg,productInfo)
        
        cardContainer.appendChild(productCard)
    }
}

fillCardContainer(productList)
