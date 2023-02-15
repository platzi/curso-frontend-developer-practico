const menuEmail = document.querySelector(".navbar-email");
const menuHamIcon = document.querySelector(".menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const cardsContainer = document.querySelector(".cards-container");


menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);

function toggleDesktopMenu () { 
    desktopMenu.classList.toggle("inactive");
    shoppingCartContainer.classList.add("inactive");
}

function toggleMobileMenu () {
    mobileMenu.classList.toggle("inactive");
    shoppingCartContainer.classList.add("inactive");
}

function toggleCarritoAside () {
    shoppingCartContainer.classList.toggle("inactive");
    desktopMenu.classList.add("inactive");
    mobileMenu.classList.add("inactive");
}

const productList = [];
productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productList.push({
    name: "Pantalla",
    price: 220,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productList.push({
    name: "Computador",
    price: 620,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
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

function renderProducts(arr) { //al recibir el parametro arr logramos utilizar cualquier array no solo productList, esto se hace en el mundo real para traer informacion del backend
    for (product of arr) { //aca vamos a crear el mismo producto de arriba que esta comentado pero en JS este codigo nos permitira meter cuantos productos queramos en el array
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
     
        // product = {name, price, image} -> product.image
        const productImg = document.createElement("img");
        productImg.setAttribute("src", product.image); 
     
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
     
        const productInfoDiv = document.createElement("div");
     
        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + product.price;
        const productName = document.createElement("p");
        productName.innerText = product.name;
     
        productInfoDiv.append(productPrice, productName); //metemos hijos dentro de padres 
     
     
        const productInfoFigure = document.createElement("figure");
        const productImgCart = document.createElement("img");
        productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");
     
        productInfoFigure.appendChild(productImgCart);//metemos hijos dentro de padres 
     
        productInfo.append(productInfoDiv, productInfoFigure);//metemos hijos dentro de padres 
     
        productCard.append(productImg, productInfo);
     
        cardsContainer.appendChild(productCard);
     }
}

renderProducts(productList);