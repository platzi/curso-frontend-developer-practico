const menuEmail = document.querySelector(".navbar-email")
const menuHamIcon=document.querySelector(".menu")
const menuCarritoIcon=document.querySelector(".navbar-shopping-cart")
const desktopMenu=document.querySelector(".desktop-menu")
const mobileMenu=document.querySelector(".mobile-menu")
const shoppingCartContainer=document.querySelector("#shoppingCartContainer")
const cardsContainer=document.querySelector(".cards-container")

menuEmail.addEventListener("click",toggleDesktopMenu)
menuHamIcon.addEventListener("click",toggleMobileMenu)
menuCarritoIcon.addEventListener("click",toggleCarritoAside)

function toggleDesktopMenu(){

    const isAsideClosed = shoppingCartContainer.classList.contains("inactive")

    if( !isAsideClosed){
        shoppingCartContainer.classList.add("inactive")
    }

    desktopMenu.classList.toggle("inactive")

}

function toggleMobileMenu(){

    const isAsideClosed = shoppingCartContainer.classList.contains("inactive")

    if( !isAsideClosed){
        shoppingCartContainer.classList.add("inactive")
    }

    mobileMenu.classList.toggle("inactive")
}

function toggleCarritoAside(){

    const isMobileMenuClosed = mobileMenu.classList.contains("inactive")
    const isDesktopMenuClose = desktopMenu.classList.contains("inactive")

    if( !isMobileMenuClosed){
        mobileMenu.classList.add("inactive")
    }

    if( !isDesktopMenuClose){
        desktopMenu.classList.add("inactive")
    }

    shoppingCartContainer.classList.toggle("inactive")
}

const productList=[]

productList.push({
    name:"Bike",
    price: 120,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    name:"Phone",
    price: 100,
    image:"https://images.pexels.com/photos/1042143/pexels-photo-1042143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});

productList.push({
    name:"CPU",
    price: 220,
    image:"https://images.pexels.com/photos/7238759/pexels-photo-7238759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});

/*
<div class="product-card">
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

function renderProducts(arr){

    for (produc of arr){

        const productCard =document.createElement("div")
        productCard.classList.add("product-card")
    
        const productImg =document.createElement("img")
        productImg.setAttribute("src",produc.image)
    
        const productInfo =document.createElement("div")
        productInfo.classList.add("product-info")
    
        const productInfoDiv =document.createElement("div")
    
        const productPrice =document.createElement("p")
        productPrice.innerText="$" + produc.price
        const productName =document.createElement("p")
        productName.innerText= produc.name
    
        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productName)
        
    
        const productInfoFigure =document.createElement("figure")
        const productImgCart =document.createElement("img")
    
        productImgCart.setAttribute("src","./icons/bt_add_to_cart.svg")
    
    
        productInfoFigure.appendChild(productImgCart)
    
        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productInfoFigure)
    
    
        productCard.appendChild(productImg)
        productCard.appendChild(productInfo)
        
        cardsContainer.appendChild(productCard)
    
    }


}

renderProducts(productList)



