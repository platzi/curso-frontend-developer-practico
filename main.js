const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerIcon = document.querySelector('.burguerIcon');
const movileMenu = document.querySelector('.mobile-menu');
const carritoIcon = document.querySelector('.navbar-shopping-cart')
const carritoMenu = document.querySelector('.product-detail')

navEmail.addEventListener('click', toggleMenu)
burguerIcon.addEventListener('click', toggleMovile);
carritoIcon.addEventListener('click', toggleCarrito);


function toggleCarrito() {

    const MenuMovileClose = movileMenu.classList.contains('inactive')
    const MenuCarritoClose = carritoMenu.classList.contains('inactive')
    const MenuDesktopClose = desktopMenu.classList.contains('inactive')

    if(MenuMovileClose){
        carritoMenu.classList.toggle('inactive')
    }else{
        movileMenu.classList.add('inactive')
        carritoMenu.classList.toggle('inactive')
    }

    if(MenuDesktopClose){
        carritoMenu.classList.remove('inactive')
    }


}


function toggleMovile() {

    const MenuMovileClose = movileMenu.classList.contains('inactive')
    const MenuCarritoClose = carritoMenu.classList.contains('inactive')

    if(MenuCarritoClose){
        movileMenu.classList.toggle('inactive')
    }else{
        carritoMenu.classList.add('inactive')
        movileMenu.classList.toggle('inactive')
    }


    
}


function toggleMenu() {
    //desktopMenu.classList.toggle('inactive')

    const MenuDesktopClose = desktopMenu.classList.contains('inactive')
    const MenuCarritoClose = carritoMenu.classList.contains('inactive')

    if(MenuCarritoClose){
        desktopMenu.classList.toggle('inactive')
    }else{
        carritoMenu.classList.add('inactive')
        desktopMenu.classList.toggle('inactive')
    }



}

var productList = [];
productList.push({
    name:'bicicleta',
    price:120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
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
 // Maquetacion de carta del producto (elemento html)
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImage = document.createElement("img");
    productImage.setAttribute("src", product.image);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");
    
    const productInfoDiv = document.createElement("div");
    
    const productName = document.createElement("p");
    productName.innerText(product.name);

    const productPrice = document.createElement("p");
    productPrice.innerText(product.price);

    const productFigure = document.createElement("figure");
    
    const productFigureImage = document.createElement("img");
    productFigureImage.setAttribute("src", "./icons/bt_add_to_cart.svg")


    //Colocacion dentro de sus clases

    productFigure.appendChild(productFigureImage);
    productInfoDiv.appendChild(productName);
    productInfoDiv.appendChild(productPrice);
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productFigure);

    



}