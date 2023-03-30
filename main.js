const menuEmail = document.querySelector(".navbar-email");
const menuDesktop = document.querySelector(".desktop-menu");
const menuHamburguer = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const carrito = document.querySelector(".navbar-shopping-cart");
const compra = document.querySelector(".product-detail");
const cardContainer = document.querySelector(".cards-container")
const productDetail = document.querySelector(".product-detail-main")

const productList = []

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamburguer.addEventListener("click", toggleMobileMenu);
carrito.addEventListener("click", toggleCompraMenu);


function toggleDesktopMenu(){
    // if (menuDesktop.classList[1] == "inactive") {
    //     menuDesktop.classList.remove("inactive")
    // } else {
    //     menuDesktop.classList.add("inactive")
    // }
    menuDesktop.classList.toggle("inactive");
    compra.classList.add("inactive");
};

function toggleMobileMenu(){
    mobileMenu.classList.toggle("inactive");
    compra.classList.add("inactive");
};

function toggleCompraMenu (){
    compra.classList.toggle("inactive");
    mobileMenu.classList.add("inactive");
    menuDesktop.classList.toggle("inactive");
}

productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description: "bicicleta clasica muy comoda para recorridos recreativos comodos al aire libre, como plus en tu casa puede servir de decoracion debido a su estilo vintage"
})
productList.push({
    name: "Laptop",
    price: 2000,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    description: "Laptop de altas prestaciones escelente para el uso de hogar y oficina, 16gb de ram, i7 1150U, alamcenamiento m.2 NVME de 1 TeraByte"
})
productList.push({
    name: "Desktop Computer",
    price: 3000,
    image: "https://images.unsplash.com/photo-1619597455322-4fbbd820250a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    description: "PC especial si quieres adentrarte en el mundo GAMER o de diseño 32gb de ram, i9-12900k, alamcenamiento m.2 NVME de 1 TeraByte, grafica nvidia GTX3080"
})

/* <div class="product-card">
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
</div> */

function renderProducts(array) {
    for (product of array) {
        const productCard = document.createElement("div")
        productCard.classList.add("product-card")
    
        const img = document.createElement("img")
        img.setAttribute("src",product.image)
    
        const productInfo = document.createElement("div")
        productInfo.classList.add("product-info")
    
        const productData = document.createElement("div")
    
        const productPrice = document.createElement("p")
        productPrice.innerText = product.price + "$"
    
        const productName = document.createElement("p")
        productName.innerText = product.name
    
        productData.appendChild(productPrice)
        productData.appendChild(productName)
    
        const productInfoFigure = document.createElement("figure")
        const productInfoLogo = document.createElement("img")
        productInfoLogo.setAttribute("src","./icons/bt_add_to_cart.svg")
    
        productInfoFigure.appendChild(productInfoLogo)
    
        productInfo.appendChild(productData)
        productInfo.appendChild(productInfoFigure)
    
        productCard.appendChild(img)
        productCard.appendChild(productInfo)
    
        cardContainer.appendChild(productCard)
    }
}

renderProducts(productList)

const cardsCreated = document.getElementsByClassName ("product-card") //aqui creo una variable con los bloques html creados por la anterior funcion
const imgDetail = document.querySelector(".imageDetail")
const priceDetail = document.querySelector(".price-detail")
const nameDetail = document.querySelector(".name-detail")
const especDetail = document.querySelector(".espec-detail")
const detailClose = document.querySelector(".product-detail-main-close")

detailClose.addEventListener("click", closeDetailWindow) // funcion de cerrado de la ventana

function closeDetailWindow () {
    productDetail.classList.add("inactive")
}

//aqui creo un for que me crea un evenListener de click para cada tarjeta creada en la anterior funcion y le asigno dinamicamente los valores correspondientes con el array productList para que los datos de las caracteristicas coincidan con la tarjeta a la que se le da click
for (let index = 0; index < cardsCreated.length; index++){
    cardsCreated[index].addEventListener("click", showDetails)
    function showDetails() {
        productDetail.classList.remove("inactive")
        imgDetail.setAttribute("src" ,productList[index].image)
        priceDetail.innerText = productList[index].price
        nameDetail.innerText = productList[index].name
        especDetail.innerText = productList[index].description
    }
}
