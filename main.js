const menuEmail = document.querySelector(".navbar-email");
const desktopmenu= document.querySelector(".desktop-menu")
const hamburgIcon = document.querySelector(".menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail")
const mobileMenu= document.querySelector(".mobile-menu")
const cardsContainer = document.querySelector(".cards-container")

menuEmail.addEventListener("click", toggleDesktopmenu);
hamburgIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);

function toggleDesktopmenu(){
    const isAsideClosed = aside.classList.contains('inactive')
    if(!isAsideClosed){ 
   
        aside.classList.add('inactive')
    }
desktopmenu.classList.toggle('inactive')
}

function toggleMobileMenu (){
const isAsideClosed = aside.classList.contains('inactive')

if(!isAsideClosed){ //tiene la misma que aside 
   
    aside.classList.add('inactive')
}
mobileMenu.classList.toggle('inactive')

}
function toggleCarritoAside (){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive')
    //const isAsideClosed = aside.classList.contains('inactive')* se quita esta variable tmbn

if(!isMobileMenuClosed){
    //si mobile menu esta open hay que cerrarlo
    mobileMenu.classList.add('inactive')
}
aside.classList.toggle('inactive')

// ya no hacemos nada de este y agregamosn el toogle con un else 
// if (!isAsideClosed){
//     //abrir el aside
// }else{
//     aside.classList.add('inactive')
// }
// if (mobileMenu.classList.contains('inactive'))

  }

const productList = [];
productList.push({
    name:"bike",
    price:120,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name:"pantalla",
    price:220,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
 });
productList.push({
     name:"reloj",
     price:80,
     image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
 });

 for (product of productList){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info')

    const productInfDiv  = document.createElement('div');

    const productPrice  = document.createElement('p');
    productPrice.innerText = '$' + product.price
    const productName  = document.createElement('p');
    productName.innerText = product.name

    productInfDiv.appendChild(productPrice);
    productInfDiv.appendChild(productName);

    const productInfoFigure  = document.createElement('figure');
    const productImgCart  = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImgCart)

    productInfo.appendChild(productInfDiv);
    productInfDiv.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);

 }