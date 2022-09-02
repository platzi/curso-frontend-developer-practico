const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon=document.querySelector(".navbar-shopping-cart");
const  aside= document.querySelector("#shoppingCartContainer");
const cardsContainer = document.querySelector('.cards-container')



menuEmail.addEventListener("click", function(){toggleMenu(desktopMenu)});

menuHamIcon.addEventListener("click", function(){toggleMenu(mobileMenu)});

menuCarritoIcon.addEventListener("click",showMiOrder);

function toggleMenu(menuInactive){

    if (shoppingCartContainer.classList.contains("inactive")) {
        menuInactive.classList.toggle("inactive")
    }else{
        shoppingCartContainer.classList.add("inactive")
        menuInactive.classList.toggle("inactive")
    }

}

// function toggleMobileMenu() {
//     if (shoppingCartContainer.classList.contains("inactive")) {
//         mobileMenu.classList.toggle("inactive")
//     }else{
//         shoppingCartContainer.classList.add("inactive")
//         mobileMenu.classList.toggle("inactive")
//     }
    
// }

function showMiOrder() {
    if (screen.width > 640) {
        desktopMenu.classList.add("inactive");
        shoppingCartContainer.classList.toggle("inactive");
    }
    else{
        mobileMenu.classList.add("inactive");
        shoppingCartContainer.classList.toggle("inactive");
    }

    
}


const productList = []

productList.push({
    name: "Bike",
    price: 120,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
})

productList.push({
    name: "Pantalla",
    price: 1200,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
})

productList.push({
    name: "Computador",
    price: 13440,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
})

productList.push({
    name: "Computador",
    price: 13440,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
})

productList.push({
    name: "Computador",
    price: 13440,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
})

function renderProducts(arr) {
    
    for (product of arr) {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
    
        const productImg = document.createElement("img");
        productImg.setAttribute('src',product.imagen);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info')
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = "$" + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.append(productPrice,productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.append(productInfoDiv,productInfoFigure);
        
        productCard.append(productImg,productInfo);
    
        cardsContainer.appendChild(productCard);
    
    
    }

    
    {/* Esto fue lo que se maqueto con js arriba 
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
    </div> */}

}

renderProducts(productList)
