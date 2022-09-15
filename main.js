const email = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartMenu = document.querySelector(".navbar-shopping-cart");
const productDetailMenu = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");

email.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
shoppingCartMenu.addEventListener("click", toggleShoppingMenu)

function toggleDesktopMenu(){
    // la palabra toggle es algo asi como intercambiar. Se pone la parte de la palabra que se quiere adicionar
    // o quitar en el nombre de la clase
    const isproductDetailMenuClosed = productDetailMenu.classList.contains("inactive");
    
    if(!isproductDetailMenuClosed){
        productDetailMenu.classList.toggle("inactive");
    }

    desktopMenu.classList.toggle("inactive");
        
}

/* Otra manera de hacer la funcion de arriba
function toggleDesktopMenu(){
    if (desktopMenu.className == "desktop-menu inactive"){
        desktopMenu.className = "desktop-menu"; 
    } 
    else
    {
        desktopMenu.className += " inactive";
    }
}*/

function toggleMobileMenu(){
    // la palabra toggle es algo asi como intercambiar. Se pone la parte de la palabra que se quiere adicionar
    // o quitar en el nombre de la clase
    const isproductDetailMenuClosed = productDetailMenu.classList.contains("inactive");

    if(!isproductDetailMenuClosed){
        productDetailMenu.classList.add("inactive");
    }

    mobileMenu.classList.toggle("inactive");
}

function toggleShoppingMenu(){
    // la palabra toggle es algo asi como intercambiar. Se pone la parte de la palabra que se quiere adicionar
    // o quitar en el nombre de la clase
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
    const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");

    if(!isMobileMenuClosed){
        mobileMenu.classList.add("inactive");
    }

    if(!isDesktopMenuClosed){
        desktopMenu.classList.add("inactive");
    }

    productDetailMenu.classList.toggle("inactive");
}

const productList = [];
productList.push({
    name: "bike",
    price: 120,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: "bike2",
    price: 240,
    img: "https://img.welt.de/img/wirtschaft/webwelt/mobile238799647/5941624067-ci23x11-w1136/Reduziert-aber-komplett-Ein-Urban-Bike-mit-allem-dran.jpg"
});
productList.push({
    name: "bike3",
    price: 360,
    img: "https://bikepacking.com/wp-content/uploads/2022/02/state-4130-all-road-review_1-2000x1334.jpg"
});

/* estructura que vamos a hacer dentro del for each loop dentro de la funcion
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
function renderProducts(arrProducts){
    for (product of arrProducts){
        
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        // este appendchild mete adentro de otra etiqueta el objeto que se ponga dentro de ella. Tambien se puede usar solo append. La diferencia es
        // este appendchild mete adentro de otra etiqueta el objeto que se ponga dentro de ella. Tambien se puede usar solo append. La diferencia es
        // que appendChild solo agrega uno el append puede ser varios. Siempre se debe hacer despues de haber creado el elemento con CreateElement
        cardsContainer.appendChild(productCard);
        
        const productImg = document.createElement("img");
        productImg.setAttribute("src", product.img);
        
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
        // que appendChild solo agrega uno el append puede ser varios. Siempre se debe hacer despues de haber creado el elemento con CreateElement
        /*
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        */
        productCard.append(productImg, productInfo);
        
        const productInfoDiv = document.createElement("div");
        
        const productPrice = document.createElement("p");
        productPrice.innerHTML = "$" + product.price;
        
        const productName = document.createElement("p");
        productName.innerHTML = product.name;
        // este appendchild mete adentro de otra etiqueta el objeto que se ponga dentro de ella. Tambien se puede usar solo append. La diferencia es
        // que appendChild solo agrega uno el append puede ser varios. Siempre se debe hacer despues de haber creado el elemento con CreateElement
        /*
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        */
    productInfoDiv.append(productPrice, productName);
    
    const productInfoFigure = document.createElement("figure");
    
    
    const productImgCart = document.createElement("img");
    productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");
    
    // este appendchild mete adentro de otra etiqueta el objeto que se ponga dentro de ella. Tambien se puede usar solo append. La diferencia es
    // que appendChild solo agrega uno el append puede ser varios. Siempre se debe hacer despues de haber creado el elemento con CreateElement
    productInfoFigure.appendChild(productImgCart);
    // este appendchild mete adentro de otra etiqueta el objeto que se ponga dentro de ella. Tambien se puede usar solo append. La diferencia es
    // que appendChild solo agrega uno el append puede ser varios. Siempre se debe hacer despues de haber creado el elemento con CreateElement
    /*
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
    */
    productInfo.append(productInfoDiv, productInfoFigure);
    }
}

renderProducts(productList);