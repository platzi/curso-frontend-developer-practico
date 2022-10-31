const menuEmail = document.querySelector('.navbar-email')
const desktopMenu= document.querySelector('.desktop-menu')
const mobileMenu= document.querySelector('.mobile-menu')
const menuHamb = document.querySelector('.menu')
const orderList = document.querySelector('.shoppingcart-detail')
const shoppingCartImg = document.querySelector('.navbar-shopping-cart')
const cardContainer=document.querySelector('.cards-container')
const productDetail=document.querySelector('.product-detail')
const productDetailClose=document.querySelector('.product-detail-close')
const productImageDetail=document.querySelector('#product-detail-img')
const productPriceDetail=document.querySelector('#product-price-detail')
const productNameDetail=document.querySelector('#product-name-detail')
const productInfoDetail=document.querySelector('#product-info-detail')


const productList=[]

menuEmail.addEventListener('click', toggleDesktopMenu)
menuHamb.addEventListener('click', toggleHambMenu)
shoppingCartImg.addEventListener('click', toggleOrderList)


productDetailClose.addEventListener('click', function(e){
    e.target.parentElement.parentElement.classList.add('inactive')
})
function toggleOrderList(){
    orderList.classList.toggle('inactive')
    desktopMenu.classList.add('inactive')
    mobileMenu.classList.add('inactive')
    productDetail.classList.add('inactive')
   
}

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive')
    orderList.classList.add('inactive')
    
}
function toggleHambMenu(){
    mobileMenu.classList.toggle('inactive')
    orderList.classList.add('inactive')
    productDetail.classList.add('inactive')
}

productList.push({
    name: 'Bike', price:120 ,
    image:"https://images.pexels.com/photos/2130611/pexels-photo-2130611.jpeg?cs=srgb&dl=pexels-timea-kadar-2130611.jpg&fm=jpg&_gl=1*w4hmwp*_ga*MTYzMDc5MzAzNy4xNjY2NjI4MDIy*_ga_8JE65Q40S6*MTY2NjYyODAyNC4xLjEuMTY2NjYyODA1Ni4wLjAuMA..",
    info: "In friendship diminution instrument so. Son sure paid door with say them. Two among sir sorry men court. Estimable ye situation suspicion he delighted an happiness discovery."
})
productList.push({
    name: 'Laptop', price:400 ,
    image:"https://images.pexels.com/photos/669228/pexels-photo-669228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    info: "In friendship diminution instrument so. Son sure paid door with say them. Two among sir sorry men court. Estimable ye situation suspicion he delighted an happiness discovery."
})
productList.push({
    name: 'Monitor', price:150 ,
    image:"https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    info: "In friendship diminution instrument so. Son sure paid door with say them. Two among sir sorry men court. Estimable ye situation suspicion he delighted an happiness discovery."
})
function fillCardContainer(arr){
    for(product of arr){
        const productCard=document.createElement('div')
        productCard.setAttribute('class',"product-card")
        const productImg=document.createElement('img')
        productImg.setAttribute('src', `${product.image}`)
        productImg.setAttribute('id', 'product-image')
        productImg.addEventListener('click', function(e){
            toggleProductDetail(e.target)
        })
        const shoppingcartInfo=document.createElement('div')
        shoppingcartInfo.setAttribute('class',"shoppingcart-info")
        const div1=document.createElement('div')
        const p1=document.createElement('p')
        const p2=document.createElement('p')
        const figure=document.createElement('figure')
        const img1=document.createElement('img')
        p1.innerHTML='$'+(product.price).toFixed(2)
        p2.innerHTML=product.name
        img1.setAttribute('src', "./icons/bt_add_to_cart.svg")

        figure.appendChild(img1)
        shoppingcartInfo.append(div1,figure)
        div1.append(p1,p2)
        productCard.append(productImg,shoppingcartInfo)
        cardContainer.appendChild(productCard)
        
       
    }
}
fillCardContainer(productList)

function toggleProductDetail(arg){
    let findDetails= productList.find(function(product){
        return product.image===arg.src
    })
    productImageDetail.setAttribute('src', findDetails.image)
    productPriceDetail.innerHTML='$'+findDetails.price.toFixed(2)
    productNameDetail.innerHTML=findDetails.name
    productInfoDetail.innerHTML=findDetails.info
    desktopMenu.classList.add('inactive')
    orderList.classList.add('inactive')
    mobileMenu.classList.add('inactive')
    productDetail.classList.toggle('inactive')
}


