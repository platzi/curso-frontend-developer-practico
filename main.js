const menuEmail = document.querySelector(".navbar-email"); //toma el elemento email del archivo html
const desktopMenu = document.querySelector(".desktop-menu"); //toma el elemento de menu del archivo html
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");
const  cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu); //agrega un eventListener al elemento email, cuando se haga click va a ocurrir algo

function toggleDesktopMenu() { //es lo que ocurre cuandose hace click. la funcion toggle
    const isAsideClosed = aside.classList.contains("inactive");

    if (!isAsideClosed) {
        aside.classList.add("inactive");
    }

    mobileMenu.classList.toggle("inactive");desktopMenu.classList.toggle("inactive"); 
}

menuHamIcon.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu() {
    const isAsideClosedAgain = aside.classList.contains("inactive");

    if (!isAsideClosedAgain) {
        aside.classList.add("inactive");
    }

    mobileMenu.classList.toggle("inactive"); 
}

menuCarritoIcon.addEventListener("click", toggleCarritoAside);

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
    const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add("inactive");
    }

    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add("inactive");
    }
    
    aside.classList.toggle("inactive");
}

//Lista de productos

const productList = [];
productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
    name: "Pantalla",
    price: 220,
    image: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

productList.push({
    name: "Compu",
    price: 920,
    image: "https://images.pexels.com/photos/459653/pexels-photo-459653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});


/* La generacion de los product cards se da asi:
    el for toma los datos del array, va formndo cada elemento y luego los anida de la forma correcta con appendchild para que se muestren correctamente.
*/

function renderProducts(arr) { //para obedecer a la utilidad de las funciones, encapsulamos todo en una funcion para quea reutilizable.
    for (product of arr) { //creando los productos a partir de los datos dentro del array, recorriendolo con for
        const productCard = document.createElement("div"); //crea elemento div en html
        productCard.classList.add("product-card"); //le da clase al div creado
    
        const ProductImg = document.createElement("img"); //crea imagen dentro del product-card
        ProductImg.setAttribute("src", product.image); //configura el source de la imagen como el link en el atributo image dentro del elemento recorrido en el array.
        
        const productInfo = document.createElement("div"); //crea elemento div en html
        productInfo.classList.add("product-info"); //le da clase al div creado
        
        const productInfoDiv = document.createElement("div");
    
        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + product.price;
    
        const productName = document.createElement("p");
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement("figure");
        const productImgCart = document.createElement("img");
        productImgCart.setAttribute("src","./icons/bt_add_to_cart.svg");
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(ProductImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList)
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