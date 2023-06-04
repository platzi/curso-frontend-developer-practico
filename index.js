let NavEmail=document.querySelector(`.navbar-email`);
let DesktopMenu=document.querySelector(`.desktop-menu`);

let mobileMenu=document.querySelector(`.menu`);
let menuMobile=document.querySelector(`.mobile-menu`);

let shopincar=document.querySelector(`.navbar-shopping-cart`)
let menuShopinCar=document.querySelector(`.product-detail`)

let cardsContainer=document.querySelector(`.cards-container`)

NavEmail.addEventListener(`click`,toggleMenus);
mobileMenu.addEventListener(`click`,toggleMobile);
shopincar.addEventListener(`click`,toggleShopincar)

function toggleMenus(){
    let carshopinopen=menuShopinCar.classList.contains(`inactive`)
    if(!carshopinopen){
        menuShopinCar.classList.add(`inactive`)
    }
    DesktopMenu.classList.toggle(`inactive`) 
}
function toggleMobile(){
    let carshopinopen=menuShopinCar.classList.contains(`inactive`)
    if(!carshopinopen){
        menuShopinCar.classList.add(`inactive`)
    }
    menuMobile.classList.toggle(`inactive`);  

}
function toggleShopincar (){
 let desktopopen=DesktopMenu.classList.contains(`inactive`)
 let menuopen= menuMobile.classList.contains(`inactive`)
 if(!menuopen){
    menuMobile.classList.add(`inactive`)
 }else if(!desktopopen){
    DesktopMenu.classList.add(`inactive`)

 }
 menuShopinCar.classList.toggle(`inactive`)

}
let productlist=[]; 
productlist.push({
    name:`Bike`,
    price:120,
    image:"https:images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productlist.push({
    name:`Bike`,
    price:120,
    image:"https:images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productlist.push({
    name:`Bike`,
    price:120,
    image:"https:images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productlist.push({
    name:`Bike`,
    price:120,
    image:"https:images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productlist.push({
    name:`Bike`,
    price:120,
    image:"https:images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productlist.push({
    name:`Bike`,
    price:120,
    image:"https:images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productlist.push({
    name:`Bike`,
    price:120,
    image:"https:images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productlist.push({
    name:`Bike`,
    price:120,
    image:"https:images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

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
  */
 function renderProduct(arr){
    for(product of arr){
      const productCard=document.createElement(`div`);
      productCard.classList.add(`product-card`);

      const productImage=document.createElement(`img`);
      productImage.setAttribute(`src`,product.image);

      const productInfo=document.createElement(`div`);
      productInfo.classList.add(`product-info`);

      const divsolito=document.createElement(`div`);
      
      const pPrice=document.createElement(`p`);
      pPrice.innerHTML=`$` + product.price;

      const pName=document.createElement(`p`);
      pName.innerHTML=product.name;

      divsolito.appendChild(pPrice);
      divsolito.appendChild(pName);

      const figurecont=document.createElement(`figure`);
      const productshopinCart=document.createElement(`img`);
      productshopinCart.setAttribute(`src`,`./icons/bt_add_to_cart.svg`);

      figurecont.appendChild(productshopinCart);

      productInfo.appendChild(divsolito);
      productInfo.appendChild(figurecont);
      productCard.appendChild(productImage)
      productCard.appendChild(productInfo)
      cardsContainer.appendChild(productCard)

    }

 }
 renderProduct(productlist)
