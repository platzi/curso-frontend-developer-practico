const menuEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")

const menuHambugerIcon = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")

const menuCartIcon = document.querySelector(".navbar-shopping-cart")
const shoppingCartContainer = document.querySelector("#shopping-cart-container")

const productList = []

menuEmail.addEventListener(
    "click",
    //toggle desktop menu
    ()=>{
        desktopMenu.classList.toggle("inactive")
        shoppingCartContainer.classList.add("inactive")
    }
)


menuHambugerIcon.addEventListener(
    "click",
     //toggle mobile menu
    ()=>{
        mobileMenu.classList.toggle("inactive")
        shoppingCartContainer.classList.add("inactive")
    }
)

menuCartIcon.addEventListener(
    "click",
    //toggle aside cart
    ()=>{
        shoppingCartContainer.classList.toggle("inactive")
        desktopMenu.classList.add("inactive")
        mobileMenu.classList.add("inactive")
    }
)

for(let i = 0; i<5; i++){
    productList.push(
        {
            name:'Bike',
            price:120,
            img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        }
    )
    
    productList.push(
        {
            name:'Mono Mayordomo',
            price:50465,
            img: 'https://img.europapress.es/fotoweb/fotonoticia_20200728125511_1200.jpg'
        }
    )
    
    productList.push(
        {
            name:'Screen',
            price:5000,
            img: 'https://i0.wp.com/allhomecinema.com/wp-content/uploads/2022/01/1642326753_What-is-a-smart-TV-and-what-can-you-do.jpg?fit=2160%2C1215&ssl=1'
        }
    )
}

function renderProducts(productList){
    for(let item of productList){
        const productCard = document.createElement("div");
        productCard.classList.add("product-card")
    
        const itemImg = document.createElement('img')
        itemImg.setAttribute("src", item.img)
        itemImg.setAttribute("alt", item.name)
    
        const productInfo = document.createElement("div")
        productInfo.classList.add("product-info")
        const div = document.createElement("div")
    
        const itemPrecio = document.createElement("p")
        const itemName = document.createElement("p")
    
        itemPrecio.innerText = "$"+item.price
        itemName.innerText = item.name
    
        const cartFigure = document.createElement('figure')
        const cartImg = document.createElement('img')
    
        cartImg.setAttribute('src', "./icons/bt_add_to_cart.svg")
        cartImg.setAttribute('alt', item.name)
    
        const cardsContainer = document.querySelector(".cards-container")
        
        cardsContainer.append(productCard)
        productCard.append(itemImg)
        productCard.append(productInfo)
        productInfo.append(div)
        div.append(itemPrecio)
        div.append(itemName)
        productInfo.append(cartFigure)
        cartFigure.append(cartImg)
    }
}


renderProducts(productList)