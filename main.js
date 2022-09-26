/*
    toggle - Quita y añade una clase al toque


*/

const menuEmail = document.querySelector(".navbar-email"); //btn-email 
const menuDesktop = document.querySelector(".desktop-menu"); //btn-email desplegado

const barMenu = document.querySelector(".menu");//bnt-menu
const barMenuResult = document.querySelector(".mobile-menu");//bnt-menu desplegado

const shopCart = document.querySelector(".navbar-shopping-cart");//btn-shopCart
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");//btn-shopCart deplegado

const cardsContainer = document.querySelector(".cards-container");// Big Daddy de las tarjetas de produto



menuEmail.addEventListener("click", toggleDesktopMenu);//btn-email 
barMenu.addEventListener("click", toggleBarMenu);//bnt-menu
shopCart.addEventListener("click", toggleshoppingCartContainer);

function toggleDesktopMenu() {
    //Si el btn-shopCart esta desplegado, entonces lo cerraremos
    //Definamos que es "cerrado"
    const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains("inactive")
    //Si no esta cerrado pues, lo cerramos
    if(!isshoppingCartContainerClosed){
        shoppingCartContainer.classList.add("inactive")
    }
    //btn-email desplegado
    menuDesktop.classList.toggle("inactive");
}

function toggleBarMenu() {
    //Si el btn-shopCart esta desplegado, entonces lo cerraremos
    //Definamos que es "cerrado"
    const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains("inactive")
    //Si no esta cerrado pues, lo cerramos
    if(!isshoppingCartContainerClosed){
        shoppingCartContainer.classList.add("inactive")
    }
    //bnt-menu desplegado
    barMenuResult.classList.toggle("inactive");
    return false;// indica que la acción no avance hacia el servidor(evitando recargar la página cada vez que se ejecute la función)
}

function toggleshoppingCartContainer(){
    //Si el bnt-menu esta desplegado, entonces lo cerraremos
    //Definamos que es "cerrado"
    const isbarMenuResultClosed = barMenuResult.classList.contains("inactive")
    //Si no esta cerrado pues, lo cerramos
    if(!isbarMenuResultClosed){
        barMenuResult.classList.add("inactive")
    }
    //btn-shopCart deplegado
    shoppingCartContainer.classList.toggle("inactive")
}

const productList = [];
productList.push({
    name:"Monitor",
    price:100,
    img:"https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=400"
})
productList.push({
    name:"Keyboard",
    price:20,
    img:"https://images.pexels.com/photos/220357/pexels-photo-220357.jpeg?auto=compress&cs=tinysrgb&w=400"
})
productList.push({
    name:"Mouse",
    price:10,
    img:"https://images.pexels.com/photos/392018/pexels-photo-392018.jpeg?auto=compress&cs=tinysrgb&w=400"
})
productList.push({
    name:"Monitor",
    price:100,
    img:"https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=400"
})
productList.push({
    name:"Keyboard",
    price:20,
    img:"https://images.pexels.com/photos/220357/pexels-photo-220357.jpeg?auto=compress&cs=tinysrgb&w=400"
})
productList.push({
    name:"Mouse",
    price:10,
    img:"https://images.pexels.com/photos/392018/pexels-photo-392018.jpeg?auto=compress&cs=tinysrgb&w=400"
})
productList.push({
    name:"Monitor",
    price:100,
    img:"https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=400"
})
productList.push({
    name:"Keyboard",
    price:20,
    img:"https://images.pexels.com/photos/220357/pexels-photo-220357.jpeg?auto=compress&cs=tinysrgb&w=400"
})
productList.push({
    name:"Mouse",
    price:10,
    img:"https://images.pexels.com/photos/392018/pexels-photo-392018.jpeg?auto=compress&cs=tinysrgb&w=400"
})

/*
MAQUETAREMOS ESTA ESTRUCTURA DE HTML CON JS!!!

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
</div>
*/
function renderProducts(arr) {
    for(product of productList){

        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
    
        const productImg = document.createElement("img");
        productImg.setAttribute("src", product.img);
    
        const productInfo= document.createElement("div");
        productInfo.classList.add("product-info");
    
        const productInfoDetails = document.createElement("div");
    
        const productInfoName = document.createElement("p");
        productInfoName.innerText = product.name;
        const productInfoPrice = document.createElement("p");
        productInfoPrice.innerText = "$ " + product.price + ",00";
    
        productInfoDetails.appendChild(productInfoName);
        productInfoDetails.appendChild(productInfoPrice);
    
        const productInfoFigure= document.createElement("figure");
        
        const productInfoFigureImg = document.createElement("img");
        productInfoFigureImg.setAttribute("src", "./icons/bt_add_to_cart.svg")
    
        productInfoFigure.appendChild(productInfoFigureImg);
    
        //Dos formas, mismo resultado (append - appendChild)
    
        productInfo.appendChild(productInfoDetails);
        productInfo.appendChild(productInfoFigure);
    
        productCard.append(productImg, productInfo);
    
        cardsContainer.appendChild(productCard);
    
    }
}

renderProducts(productList);
