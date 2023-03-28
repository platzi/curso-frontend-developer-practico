const navMenuEmali = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const menuHamIcon = document.querySelector(".menu");
const menuHamList = document.querySelector(".mobile-menu");

const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const menuCarritoList = document.querySelector("#shoppingCartContainer");

const cardsContainer = document.querySelector(".cards-container");

navMenuEmali.addEventListener("click" , toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleMenuCarritoList);


function toggleMobileMenu(){
    menuHamList.classList.toggle("inactive");
    
    if(!menuCarritoList.classList.contains("inactive")){
        menuCarritoList.classList.toggle("inactive");
    }
   
}

function toggleDesktopMenu(){
    desktopMenu.classList.toggle("inactive");

    if(!menuCarritoList.classList.contains("inactive")){
        menuCarritoList.classList.toggle("inactive");
    }
    
}

function toggleMenuCarritoList(){
    menuCarritoList.classList.toggle("inactive");

    if(!menuHamList.classList.contains("inactive")){
        menuHamList.classList.toggle("inactive");
    }

    if(!desktopMenu.classList.contains("inactive")){
        desktopMenu.classList.toggle("inactive");
    }

}

const productList =[];

productList.push({
    name: "bike",
    price: 120 ,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
    name: "computador",
    price: 320 ,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
    name: "pantalla",
    price: 230 ,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});



/* Funcion con el for de la creacion de los productos basandonos en el html comentado */
function renderProducts(productList){

    /*
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

    for(product of productList){

        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        
    
        const productImg = document.createElement("img");
        productImg.setAttribute("src" , product.image);
    
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info"); 
    
        const productInfoDiv =document.createElement("div");
       
    
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
        
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
        //product {name,price,image}
    
    }
}

renderProducts(productList);