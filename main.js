const menuEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const menuHamIcon = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart")
const aside = document.querySelector(".product-detail")
const cardsContainer = document.querySelector(".cards-container")

menuEmail.addEventListener("click", toggleDesktopMenu)
menuHamIcon.addEventListener("click", toggleMobileMenu)
menuCarritoIcon.addEventListener("click", toggleCarritoAside)

// Menus
function toggleDesktopMenu() {
    aside.classList.add("inactive")
    desktopMenu.classList.toggle("inactive")
}
function toggleMobileMenu() {
    aside.classList.add("inactive")
    mobileMenu.classList.toggle("inactive")
}
function toggleCarritoAside() {
    mobileMenu.classList.add("inactive")
    desktopMenu.classList.add("inactive")
    aside.classList.toggle("inactive")
} 

// Products
const productList = []
    // Bike
    productList.push({
        name: "Street Bike",
        price: 120,
        image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    })
    // TV
    productList.push({
        name: "OLED TV",
        price: 1.000,
        image: "https://images.bast-i-test.se/tv-bast-i-test-header.webp"
    })
    // Laptop
    productList.push({
        name: "MacBook",
        price: 650,
        image: "https://economipedia.com/wp-content/uploads/ordenador.jpg"
    })
    // Nike AirForce
    productList.push({
        name: "Nike Air Force 1",
        price: 100,
        image: "https://cdn.def-shop.com/original/nike-sneaker-weiss-890359.jpg"
    })
    // Deep Work Book
    productList.push({
        name: "Deep Work Book",
        price: 15,
        image: "https://i0.wp.com/www.patrickmayfield.com/wp-content/uploads/2017/12/Deep-Work-540x405.jpg?fit=540%2C405&ssl=1"
    })
    // Tesla
    productList.push({
        name: "Tesla Model S",
        price: 97000,
        image: "https://hips.hearstapps.com/hmg-prod/images/2020-porsche-taycan-4s-vs-2020-tesla-model-s-long-range-202-1621386342.jpg?crop=0.774xw:0.870xh;0.0456xw,0.0880xh&resize=640:*"
    })
    // Pringles
    productList.push({
        name: "Pringles Original",
        price: 2,
        image: "https://www.65ymas.com/uploads/s1/38/80/14/bigstock-minsk-belarus-december-343064713.jpeg"
    })
    // Real Madrid Kit
    productList.push({
        name: "Real Madrid Shirt",
        price: 85,
        image: "https://i8.amplience.net/i/jpl/jd_533555_a?qlt=92&w=600&h=765&v=1&fmt=auto"
    })
    // Poster
    productList.push({
        name: "Breaking Bad Poster",
        price: 13,
        image: "https://i.etsystatic.com/19142902/r/il/fdc5a3/3888538634/il_570xN.3888538634_cm3d.jpg"
    })   
    // iPhone
    productList.push({
        name: "iPhone 14 Pro",
        price: 1280,
        image: "https://i.blogs.es/ded4a9/1366_2000/500_500.jpeg"
    })
    // Chair
    productList.push({
        name: "Padded Chair",
        price: 27,
        image: "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202307/0012/lorraine-tufted-chair-c.jpg"
    })      
    // Led Lamp
    productList.push({
        name: "Led Lamp",
        price: 30,
        image: "https://m.media-amazon.com/images/I/61lt2NpHIYL._AC_SX425_.jpg"
    })   
    // Bonsai
    productList.push({
        name: "Bonsai",
        price: 25,
        image: "https://www.clara.es/medio/2021/07/15/cuidar-un-bonsai_2677d2c5_1280x853.jpg"
    })
    // Trapstar
    productList.push({
        name: "Trapstar Tracksuit",
        price: 220,
        image: "https://cdn.shopify.com/s/files/1/0649/5771/0582/products/iceflavourstrck.jpg?v=1656666912&width=1445"
    })     

// Product List
function renderProducts(arr) {
    for (product of productList) {
        const productCard = document.createElement("div")
        productCard.classList.add("product-card")
    
            const productImg = document.createElement("img")
            productImg.setAttribute("src", product.image)
    
            const productInfo = document.createElement("div")
            productInfo.classList.add("product-info")
    
                const productInfoDiv = document.createElement("div")
    
                    const productPrice = document.createElement("p")
                    productPrice.innerText = "$" + product.price
                    
                    const productName = document.createElement("p")
                    productName.innerText = product.name
    
                    /* Insert */ productInfoDiv.appendChild(productPrice)
                    /* Insert */ productInfoDiv.appendChild(productName)
                
                const productInfoFigure = document.createElement("figure")
    
                    const productImgCart = document.createElement("img")
                    productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg")
    
                    /* Insert */ productInfoFigure.appendChild(productImgCart)
    
                /* Insert */ productInfo.appendChild(productInfoDiv)
                /* Insert */ productInfo.appendChild(productInfoFigure)
    
        /* Insert */ productCard.appendChild(productImg)
        /* Insert */ productCard.appendChild(productInfo)
    
        /* Final Insert */ cardsContainer.appendChild(productCard)
    
    }
}

// Main
renderProducts(productList)
