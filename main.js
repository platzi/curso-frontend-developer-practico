/* Elementos Generales */

const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const BurgerMenu = document.querySelector(".BurgerMenu")
const mobileMenu = document.querySelector(".mobile-menu")
const menuCarroIcono = document.querySelector(".navbar-shopping-cart")
const aside = document.querySelector(".product-detail")
const CardsContainer = document.querySelector(".cards-container")


/* Eventos */

navEmail.addEventListener("click", toggleDesktopMenu);
BurgerMenu.addEventListener("click", toggleMobileMenu)
menuCarroIcono.addEventListener("click", toggleCarroAside)

/* Funciones*/

// Estas 3 funciones hacen que aparezcan y desaparezcan los menús
function toggleDesktopMenu () {

    const IsAsideClosed = aside.classList.contains("inactivo");


    if(!IsAsideClosed) {
        //Si no esta cerrado lo cerramos con inactivo
        aside.classList.add("inactivo");     
    }

    desktopMenu.classList.toggle("inactivo"); //El classList accede a la clase inactivo y le otorga la propiedad toggle que la hace aparecer y desaparecer cuando demos click
};

function toggleMobileMenu () {

    const IsAsideClosed = aside.classList.contains("inactivo");

    if(!IsAsideClosed) {
        //Si no esta cerrado lo cerramos con inactivo
        aside.classList.add("inactivo");     
    }

    mobileMenu.classList.toggle("inactivo");
};

function toggleCarroAside () {

    const IsMobileMenuClosed = mobileMenu.classList.contains("inactivo");
    
    if(!IsMobileMenuClosed) {
        //Si no esta cerrado lo cerramos con inactivo
        mobileMenu.classList.add("inactivo");  
        return;   
    }

    aside.classList.toggle("inactivo");
}

//Mostrar el array de productos que desee
function mostrarProductos (array) {

    for (product of array) {

        const productCard = document.createElement("div")
        productCard.classList.add("product-card");
    
        const Productimg = document.createElement("img");
        Productimg.setAttribute("src", product.image);
    
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
    
        const DivVacio = document.createElement("div");
    
        const ProductPrice = document.createElement("p");
        ProductPrice.innerText = "$" + product.price;
    
        const ProductName = document.createElement("p");
        ProductName.innerText = product.name;
    
        DivVacio.appendChild(ProductPrice);
        DivVacio.appendChild(ProductName);
    
        const ProductFigure = document.createElement("figure"); 
        const FigureImg = document.createElement("img"); 
        FigureImg.setAttribute("src", "./icons/bt_add_to_cart.svg");
    
        ProductFigure.appendChild(FigureImg);
    
        productInfo.appendChild(DivVacio);
        productInfo.appendChild(ProductFigure);
    
    
        productCard.appendChild(Productimg);
        productCard.appendChild(productInfo);
    
        CardsContainer.appendChild(productCard);

        //Creamos todo este HTML con JS

   /*  <div class="product-card">
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
    }
}

/* Lista de Productos */

const ProductList = [];

ProductList.push({

        name: "Bike",
        price: 120,
        image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

    });

ProductList.push({

        name: "Pantalla",
        price: 220,
        image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

    });

ProductList.push({

        name: "Compu",
        price: 620,
        image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    
    });

mostrarProductos(ProductList);