const menuEmail = document.querySelector (".navbar-email");
const desktopMenu = document.querySelector (".desktop-menu");
const ShopCart = document.querySelector (".navbar-shopping-cart");
const productDetail = document.querySelector (".product-detail");
const menuHamburguer = document.querySelector (".menu");
const menuMobile = document.querySelector (".mobile-menu ");
const productList = [];
const cardsContainer = document.querySelector(".cards-container")

menuEmail.addEventListener("click",()=>{
    desktopMenu.classList.toggle ('inactive');  
    productDetail.classList.add('inactive');
    menuMobile.classList.add('inactive');
});

ShopCart.addEventListener ("click", ()=>{
    productDetail.classList.toggle('inactive');
    menuMobile.classList.add('inactive');

});

menuHamburguer.addEventListener ("click",()=>{
    menuMobile.classList.toggle ('inactive');
    productDetail.classList.add('inactive');
});

productList.push({
    name:'Bike',
    price: '800',
    Image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    
});

productList.push({
    name:'Cycle-omputater',
    price: '200',
    Image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
    name:'Helmet',
    price: '100',
    Image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

});
productList.push({
    name:'Bike',
    price: '800',
    Image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    
});

productList.push({
    name:'Cycle-omputater',
    price: '200',
    Image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
    name:'Helmet',
    price: '100',
    Image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

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
for (product of productList){

    const productCard = document.createElement ('div'); // Se crea un div con nombre productCard
    productCard.classList.add ("product-card"); // Al div llamado productCard se le agrega una clase con nombre product-card

    const productImg = document.createElement ('img');
    productImg.setAttribute ('src',product.Image);

    const productInfo = document.createElement ('div');
    productInfo.classList.add ("product-info");
    

    const productInfoDiv = document.createElement ('div');

    const productPrice = document.createElement ('p');
    productPrice.innerText = "$" + product.price;
    const productName = document.createElement ('p');
    productName.innerText = product.name;
    productInfoDiv.append (productPrice,productName);

    const productInfoFigure = document.createElement ('figure');

    const productImgCart = document.createElement ('img');
    productImgCart.setAttribute ("src" , "./icons/bt_add_to_cart.svg" );
    productInfoFigure.appendChild(productImgCart);

    productInfo.append(productInfoDiv,productInfoFigure);

    productCard.append(productImg,productInfo);

    cardsContainer.appendChild(productCard);

}
