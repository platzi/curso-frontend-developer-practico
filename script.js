const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer")

const cardsContainer=document.querySelector(".cards-container")
const productDetailContainer= document.querySelector("#productDetail")
const productDetailCloseIcon= document.querySelector(".product-detail-close")

navEmail.addEventListener('click', function () {
    let carritoOpen = !shoppingCartContainer.classList.contains("inactive");
    let productDetailOpen= !productDetailContainer.classList.contains("inactive")
    if (carritoOpen) {
        shoppingCartContainer.classList.add("inactive")
    }
    if (productDetailOpen) {
        productDetailContainer.classList.add("inactive")
    }
    toggleDisplay(desktopMenu);
});

menuHamIcon.addEventListener('click', function () {
    // toggleDisplay(mobileMenu);
    let carritoOpen = !shoppingCartContainer.classList.contains("inactive");
    let productDetailOpen= !productDetailContainer.classList.contains("inactive")
    
    if (carritoOpen) {
        shoppingCartContainer.classList.add("inactive")
    }
    if (productDetailOpen) {
        productDetailContainer.classList.add("inactive")
    }
    mobileMenu.classList.toggle("inactive")
});
menuCarritoIcon.addEventListener('click', function () {
    let mobileMenuOpen = !mobileMenu.classList.contains("inactive");
    let productDetailOpen= !productDetailContainer.classList.contains("inactive")

    if (mobileMenuOpen) {
        mobileMenu.classList.add("inactive")
    }
    if (productDetailOpen) {
        productDetailContainer.classList.add("inactive")
    }


    shoppingCartContainer.classList.toggle("inactive")
    desktopMenu.classList.add("inactive")
});
productDetailCloseIcon.addEventListener('click',function(){
    productDetailContainer.classList.add("inactive")
})

// desactivar o activar el display de un contenedor
function toggleDisplay(contenedor) {
    contenedor.classList.toggle("inactive");
};


const productList = [];
productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
    name: "Clock",
    price: 500,
    image: "https://images.pexels.com/photos/3766113/pexels-photo-3766113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
})
productList.push({
    name: "Guitar",
    price: 440,
    image: "https://images.pexels.com/photos/3428498/pexels-photo-3428498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
})
productList.push({
    name: "Ukulele",
    price: 100,
    image: "https://images.pexels.com/photos/4216321/pexels-photo-4216321.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
})
productList.push({
    name: "Kid Sport",
    price: 300,
    image: "https://images.pexels.com/photos/5580068/pexels-photo-5580068.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
})
productList.push({
    name: "Paint",
    price: 200,
    image: "https://images.pexels.com/photos/13787663/pexels-photo-13787663.jpeg?auto=compress&cs=tinysrgb&w=600"
})

function renderProducts(arr){
    arr.forEach((producto) => {
        const productCard=document.createElement("div")
        productCard.classList.add('product-card')
    
        const img= document.createElement("img")
        img.setAttribute('src',producto.image)
        img.addEventListener('click',function(){
            let carritoOpen = !shoppingCartContainer.classList.contains("inactive");
            let desktopMenuOpen= !desktopMenu.classList.contains("inactive")
            let mobileMenuOpen = !mobileMenu.classList.contains("inactive");

            if (carritoOpen) {
                shoppingCartContainer.classList.add("inactive")
            }
            if (desktopMenuOpen) {
                desktopMenu.classList.add("inactive")
            }
            if (mobileMenuOpen) {
                mobileMenu.classList.add("inactive")
            }

            productDetailContainer.classList.remove("inactive")
        })
    
        const productInfo=document.createElement("div")
        productInfo.classList.add('product-info')
    
        const productInfoDiv=document.createElement("div")
    
        const productPrice=document.createElement("p")
        productPrice.innerText="$"+producto.price
        const productName=document.createElement("p")
        productName.innerText=producto.name
    
        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productName)
    
        const productInfoFigure=document.createElement("figure")
        const productImgCart=document.createElement("img")
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg')
    
        productInfoFigure.appendChild(productImgCart)
    
        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productInfoFigure)
    
        productCard.appendChild(img)
        productCard.appendChild(productInfo)
    
        cardsContainer.appendChild(productCard)
    
    })
}
renderProducts(productList)