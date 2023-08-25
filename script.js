const clickEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const clickMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const clickCarrito = document.querySelector(".navbar-shopping-cart");
const productDetail = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");
const productDetailCard = document.querySelector(".product-detail--card");
const clickProductCard = document.querySelector(".product-card");
const productDetailClose = document.querySelector(".product-detail-close")


clickEmail.addEventListener("click", mostrarMenu);

function mostrarMenu(){
    if(!desktopMenu.classList.toggle("inactive")){
        productDetail.classList.add("inactive");
        productDetailCard.classList.add("inactive")
    }
}


clickMenu.addEventListener("click", mostrarMenuMobile);

function mostrarMenuMobile(){
    if(!mobileMenu.classList.toggle("inactive")){
        productDetail.classList.add("inactive");
        productDetailCard.classList.add("inactive")
    }   
}


clickCarrito.addEventListener("click", mostrarMenuCarrito);

function mostrarMenuCarrito(){
    if(!productDetail.classList.toggle("inactive")){
        desktopMenu.classList.add("inactive");
        mobileMenu.classList.add("inactive");
        productDetailCard.classList.add("inactive")
    }
}


 function mostrarDetailProduct(){
     if(!productDetailCard.classList.remove("inactive")){
        desktopMenu.classList.add("inactive");
        productDetail.classList.add("inactive");
        mobileMenu.classList.add("inactive");
     }
 }

 productDetailClose.addEventListener("click", closeAside);

function closeAside(){
    productDetailCard.classList.add("inactive");
}

const productList = [];

productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
    name: "Laptop",
    price: 1120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
    name: "Secadora",
    price: 220,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
    name: "Laptop",
    price: 1120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
    name: "Secadora",
    price: 220,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
    name: "Laptop",
    price: 1120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
    name: "Secadora",
    price: 220,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
    name: "Laptop",
    price: 1120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
    name: "Secadora",
    price: 220,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});


function renderProducts(arr){
    arr.forEach((element) => {

        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.addEventListener("click", mostrarDetailProduct)
        
        const productImg = document.createElement("img");
        productImg.setAttribute("src", element.image);
        
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
        
        const productInfoDiv = document.createElement("div");
        const productPrice = document.createElement("p");
        productPrice.innerHTML = "$" + element.price + ".00";
        const productName = document.createElement("p");
        productName.innerHTML = element.name;
    
        const figure = document.createElement("figure");
        const imgFigure = document.createElement("img");
        imgFigure.setAttribute("src", "./icons/bt_add_to_cart.svg");
    
        figure.appendChild(imgFigure);
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(figure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
        
    });
}

renderProducts(productList);

