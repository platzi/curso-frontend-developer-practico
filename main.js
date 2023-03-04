const menuEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const menuHamIcon = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart")
const shoppingCartContainer = document.querySelector("#shoppingCartContainer")
const productDetailContainer = document.querySelector("#productDetail")
const cardsContainer = document.querySelector(".cards-container")
const productDetailCloseIcon = document.querySelector(".product-detail-close")



menuEmail.addEventListener("click", toggleDesktopMenu)
menuHamIcon.addEventListener("click", toggleMobileMenu)
menuCarritoIcon.addEventListener("click", toggleCarritoAside)
productDetailCloseIcon.addEventListener("click", closeProductDetailAside)

// Menus
function toggleDesktopMenu() {
    shoppingCartContainer.classList.add("inactive")
    productDetailContainer.classList.add("inactive")
    desktopMenu.classList.toggle("inactive")

}
function toggleMobileMenu() {
    shoppingCartContainer.classList.add("inactive")
    productDetailContainer.classList.add("inactive")

    mobileMenu.classList.toggle("inactive")
}
function toggleCarritoAside() {
    mobileMenu.classList.add("inactive")
    desktopMenu.classList.add("inactive")
    productDetailContainer.classList.add("inactive")

    shoppingCartContainer.classList.toggle("inactive")
} 
function openProductDetailAside() {
    shoppingCartContainer.classList.add("inactive")
    desktopMenu.classList.add("inactive")
    mobileMenu.classList.add("inactive")
    productDetailContainer.classList.remove("inactive")
}
function closeProductDetailAside() {
    productDetailContainer.classList.add("inactive")
}


// Products
const productList = []
    // Bike
    productList.push({
        name: "Street Bike",
        price: 120,
        image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        description: "With its practical position, this bike also fulfills a decorative function, add your hall or workspace."
    })
    // TV
    productList.push({
        name: "OLED TV",
        price: 1000,
        image: "https://images.bast-i-test.se/tv-bast-i-test-header.webp",
        description: "One of the best OLED TV in the market right now. Ultra 4k and 120FPS."
    })
    // Laptop
    productList.push({
        name: "MacBook",
        price: 650,
        image: "https://economipedia.com/wp-content/uploads/ordenador.jpg",
        description: "The best laptop for coding in 2023. Apple M1 on it."
    })
    // Nike AirForce
    productList.push({
        name: "Nike Air Force 1",
        price: 100,
        image: "https://cdn.def-shop.com/original/nike-sneaker-weiss-890359.jpg",
        description: "Nike Air Force 1 2021. 44 EU Size. Black and white."
    })
    // Deep Work Book
    productList.push({
        name: "Deep Work Book",
        price: 15,
        image: "https://i0.wp.com/www.patrickmayfield.com/wp-content/uploads/2017/12/Deep-Work-540x405.jpg?fit=540%2C405&ssl=1",
        description: "Deep Work. Cal Newport. How to focus while working hard."
    })
    // Tesla
    productList.push({
        name: "Tesla Model S",
        price: 97000,
        image: "https://hips.hearstapps.com/hmg-prod/images/2020-porsche-taycan-4s-vs-2020-tesla-model-s-long-range-202-1621386342.jpg?crop=0.774xw:0.870xh;0.0456xw,0.0880xh&resize=640:*",
        description: "The best Tesla car now on Yard Sale. Silver Grey."
    })
    // Pringles
    productList.push({
        name: "Pringles Original",
        price: 2,
        image: "https://www.65ymas.com/uploads/s1/38/80/14/bigstock-minsk-belarus-december-343064713.jpeg",
        description: "Give yourself a pleasure moment by eating Pringles Original."
    })
    // Real Madrid Kit
    productList.push({
        name: "Real Madrid Shirt",
        price: 85,
        image: "https://i8.amplience.net/i/jpl/jd_533555_a?qlt=92&w=600&h=765&v=1&fmt=auto",
        description: "Europe Best Team Season 2022/23 Second Kit for kids. Large Size. 16 years."
    })
    // Poster
    productList.push({
        name: "Breaking Bad Poster",
        price: 13,
        image: "https://i.etsystatic.com/19142902/r/il/fdc5a3/3888538634/il_570xN.3888538634_cm3d.jpg",
        description: "One of the most-viewed series on Netflix offers you this nice poster for only $13."
    })   
    // iPhone
    productList.push({
        name: "iPhone 14 Pro",
        price: 1280,
        image: "https://i.blogs.es/ded4a9/1366_2000/500_500.jpeg",
        description: "The newest Apple Phone with a banch of new varieties."
    })
    // Chair
    productList.push({
        name: "Padded Chair",
        price: 27,
        image: "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202307/0012/lorraine-tufted-chair-c.jpg",
        description: "Relax on this comfortable chair for a bit. Only $27."
    })      
    // Led Lamp
    productList.push({
        name: "Led Lamp",
        price: 30,
        image: "https://m.media-amazon.com/images/I/61lt2NpHIYL._AC_SX425_.jpg",
        description: "Give your room a nicer place by adding this Flamengo LED Lamp."
    })   
    // Bonsai
    productList.push({
        name: "Bonsai",
        price: 25,
        image: "https://www.clara.es/medio/2021/07/15/cuidar-un-bonsai_2677d2c5_1280x853.jpg",
        description: "Take care of the typical chinese small Bonsai with a lucky amulet on it."
    })
    // Trapstar
    productList.push({
        name: "Trapstar Tracksuit",
        price: 220,
        image: "https://cdn.shopify.com/s/files/1/0649/5771/0582/products/iceflavourstrck.jpg?v=1656666912&width=1445",
        description: "Do you want to look like Central Cee? Buy one of this Tracksuit and you will impress your friends with this brand new trend-trakcsuit. Black and Grey available"
    })     

// Product List
function renderProducts(arr, number) {
    productList.forEach(product => {
        const productCard = document.createElement("div")
        productCard.classList.add("product-card")
        productCard.addEventListener("click", ()=>{openProductInfo(product)})
    
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
    
    })
}
const openProductInfo = (product)=>{ 
    const aside = document.querySelector('#productDetail');
    const productDetailDescription = document.querySelector(".productDetailDescription")
    const productDetailPrice = document.querySelector(".productDetailPrice")
    const productDetailName = document.querySelector(".productDetailName")
    const productDetailImg = document.querySelector(".productDetailImg")
        aside.classList.remove('inactive');
        productDetailImg.setAttribute('src', product.image);
        productDetailPrice.textContent= "$" + product.price;
        productDetailName.textContent= product.name;
        productDetailDescription.textContent= product.description;
}


// Main
renderProducts(productList)
