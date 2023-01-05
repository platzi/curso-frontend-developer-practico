const menuEmail= document.querySelector(".navbar-email");
const desktopMenu=document.querySelector(".desktop-menu");
const mobileMenu=document.querySelector(".mobile-menu")
const menuHamburgesa=document.querySelector(".menu")
const carritoCompra=document.querySelector(".navbar-shopping-cart")
const shoppingCartContainer=document.querySelector("#shoppingCartContainer ")
cardsContainer=document.querySelector(".cards-container")



menuEmail.addEventListener("click",toggleDesktopMenu);
menuHamburgesa.addEventListener("click",toggleMobileMenu)
carritoCompra.addEventListener("click",toggleCarritoIcon) //aside

function toggleDesktopMenu() {
    const isAsideclosed = shoppingCartContainer.classList.contains("inactive")
    if (!isAsideclosed){
        aside.classList.add("inactive")
    }
     
    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu(){
    const isAsideclosed = shoppingCartContainer.classList.contains("inactive")
    if (!isAsideclosed){
        aside.classList.add("inactive")
    }
    
    mobileMenu.classList.toggle("inactive");
}

function toggleCarritoIcon(){
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive")
    const isDesktopMenuClosed = desktopMenu.classList.contains("inactive")

    if (!isMobileMenuClosed){
        mobileMenu.classList.add("inactive")
    }else if(!isDesktopMenuClosed){
        desktopMenu.classList.add("inactive")
    }

    shoppingCartContainer.classList.toggle("inactive");
}

const productList=[];
productList.push({
    name: "bike",
    price:120,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

productList.push({
    name: "pantalla",
    price:300,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNA2SH5mtSTJ7AYgVWjOvw3-gBYv2CbrUuXw&usqp=CAU"

})

productList.push({
    name: "reloj-pared",
    price:30,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCUOr7suliYUxLDtn6ZJJTowm61HN3Z80eLA&usqp=CAU"

})

productList.push({
    name: "cama",
    price:200,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIaqG_xBhT_GfmWssFNb5JuBwpSXje0P4kQw&usqp=CAU"

})

productList.push({
    name: "mueble",
    price:150,
    image:"https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=600"

})

productList.push({
    name: "radio",
    price:100,
    image:"https://images.pexels.com/photos/5211673/pexels-photo-5211673.jpeg?auto=compress&cs=tinysrgb&w=600"

})

productList.push({
    name: "mesa-comedor",
    price:440,
    image:"https://images.pexels.com/photos/1457841/pexels-photo-1457841.jpeg?auto=compress&cs=tinysrgb&w=600"

})

productList.push({
    name: "lavadora",
    price:280,
    image:"https://media.istockphoto.com/id/153593643/es/foto/m%C3%A1quina-de-lavado-aislado-en-blanco.jpg?s=1024x1024&w=is&k=20&c=XMC4xsx5lgI78JNL2aH2Lnjig8s7O-lWXX3QLzE3Piw="

})

function renderProducts(arr) {
    for (product of arr) {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
    
      // product= {name, price, image} -> product.image
      const productImg = document.createElement('img');
      productImg.setAttribute('src', product.image);
    
      const productInfo = document.createElement('div');
      productInfo.classList.add('product-info');
    
      const productInfoDiv = document.createElement('div');
    
      const productPrice = document.createElement('p');
      productPrice.innerText = '$' + product.price;
      const productName = document.createElement('p');
      productName.innerText = product.name;
    
      productInfoDiv.appendChild(productPrice);
      productInfoDiv.appendChild(productName);
    
      const productInfoFigure = document.createElement('figure');
      const productImgCart = document.createElement('img');
      productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
      productInfoFigure.appendChild(productImgCart);
    
      productInfo.appendChild(productInfoDiv);
      productInfo.appendChild(productInfoFigure);
    
      productCard.appendChild(productImg);
      productCard.appendChild(productInfo);
    
      cardsContainer.appendChild(productCard);
    }
  }
  
  renderProducts(productList);