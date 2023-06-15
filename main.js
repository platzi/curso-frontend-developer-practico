const menuEmail = document.querySelector(".navbar-email");
const menuHamIcon = document.querySelector(".menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector(".product-detail");
const cardscontainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);


function toggleDesktopMenu(){ //esta función hará que la clase inactive aparezca o desaparezca (lo cual hará que así mismo el menú aparezca o no)
    const isAsideClosed = aside.classList.contains("inactive");
    if (!isAsideClosed){
        aside.classList.add("inactive")
    } 
    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu(){
    const isAsideClosed = aside.classList.contains("inactive");
    if (!isAsideClosed){
        aside.classList.add("inactive")
    } 
    
    mobileMenu.classList.toggle("inactive");
}

function toggleCarritoAside(){
    //Lógica: primero cerramos el menú mobile siempre:
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
   
    //Lógica: si el menú no estaba cerrado, entonces lo cerramos.
    if (!isMobileMenuClosed){
                mobileMenu.classList.add("inactive")
            } 
        aside.classList.toggle("inactive");
}



//Vamos a crear un array con los objetos a recibir para simular que estamos haciendo las peticiones al backend.

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

function renderProducts(arr){
    for (product of arr){
    //primero creamos el div
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    
    //Luego creamos el img y además le agregamos el atributo src donde el link va a venir dentro del objeto en su propiedad image
    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);

    //Luego agregamos el contenedor de product info
    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    //Luego agregamos un div vacío ya que no tiene clases ni nada.
    const productInfoDiv = document.createElement("div");

    //Luego debemos crear los dos párrafos
    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;
    const productName = document.createElement("p");
    productPrice.innerText = product.name;

    //Luego creamos el figure
    const productInfoFigure = document.createElement("figure");
    const productImgCart = document.createElement("img");
    productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

    //Ya creamos todas las etiquetas, lo que sigue es meterlas dentro de sus correspondientes padres.

    //Primero metemos la img dentro de la figure:
    productInfoFigure.appendChild(productImgCart);

    //Luego metemos el price y name dentro del div correspondiente
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    //Luego tenemos que meter el div grande y el figure grande dentro del div que es más grande:
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    //Después, vamos a meter ese div y la img dentro del product-card que es el papá de ellos:
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    //Finalmente vamos a meter ese div grandote dentro del div papá de todos:

    cardscontainer.appendChild(productCard);
    
}
}

renderProducts(productList);

