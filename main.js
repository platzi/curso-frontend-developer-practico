//ACTIVAR O DESACTIVAR MENU DESKTOP CADA QUE SE PRESIONE CLICK***
//1.Creamos las variables de los elementos que vamos a seleccionar***
const menuEmail = document.querySelector(".navbar-email");
const menuHamIcon = document.querySelector(".menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const productDetailCloseIcon = document.querySelector(".product-detail-close");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const productDetailContainer = document.querySelector("#productDetail");
const cardsContainer = document.querySelector(".cards-container")

//2.Utilizamos la propiedada o evento al darle click***
menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside);

//3.Creamos las funciones**
function toggleDesktopMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains("inactive");
    if (!isAsideClosed) {
        shoppingCartContainer.classList.add("inactive");
    }
    desktopMenu.classList.toggle("inactive")//llamamos a la variable del elemento y le indicamos que debe hacer***  
}
function toggleMobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains("inactive");
    if (!isAsideClosed) {
        shoppingCartContainer.classList.add("inactive");
    }

    closeProductDetailAside();//AL DARLE CLICK AL MENU MOBILE SE CERRARA TODO LO QUE ESTE ABIERTO PARA DARLE PASO***
    mobileMenu.classList.toggle("inactive");

}

function toggleCarritoAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add("inactive");
    }

  const isProductDetailClosed = productDetailContainer.classList.contains("inactive");
    if (!isProductDetailClosed) {
        productDetailContainer.classList.add("inactive");
    }

    shoppingCartContainer.classList.toggle("inactive");

}

function openProductDetailAside() {
    shoppingCartContainer.classList.add("inactive")
    productDetailContainer.classList.remove("inactive");

}

function closeProductDetailAside() {
    productDetailContainer.classList.add("inactive");
}

// INTRODUCCION LISTA DE PRODUCTOS AL HTML  ****
const productList = [];
 productList.push({
    name: "Bike",
    price: 180,
    image: "https://images.squarespace-cdn.com/content/v1/57d61144e58c62ac0e3179cf/80774963-24ad-43d5-b35e-d1c0527cf39f/7S+Isometric_grey+background.jpeg",
});
productList.push({
    name: "Monitor",
    price: 420,
    image: "https://xanxogaming.com/wp-content/uploads/2023/01/Monitor-Guia-Banner-800x445.jpg",
});
productList.push({
    name: "Mouse",
    price: 100,
    image: "https://img.ibxk.com.br/2021/11/11/11231807139015.jpg?ims=328x",
});
productList.push({
    name: "Keyboard",
    price: 200,
    image: "https://www.zdnet.com/a/img/resize/7938fe6b4bbbd187066ac8107d02d18df17485ec/2021/10/29/ea969203-382b-409e-9990-4c922d987169/razer-huntsman-v2.jpg?auto=webp&fit=crop&height=900&width=1200",
});

//INSERCION DE OBJETOS CON LAS PROPIEDADES AL HTML CON LOOP for (of) ****
function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
     
        //product = {name, price, image} -> product.image
        const productImg = document.createElement("img");
        productImg.setAttribute("src", product.image);
        productImg.addEventListener("click", openProductDetailAside)
     
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
     
        const productInfoDiv = document.createElement("div");
     
        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + product.price;
        const productName = document.createElement("p");
        productName.innerText = product.name;
     
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
     
        const productInfoFigure = document.createElement("figure");
        const productImgCart = document.createElement("img");
        productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg")
     
        productInfoFigure.appendChild(productImgCart);
     
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure)
        
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        
        cardsContainer.appendChild(productCard);
     }
}
renderProducts(productList);