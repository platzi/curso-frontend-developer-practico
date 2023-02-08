const menuEmail= document.querySelector(".navbar-email");
const desktopMenu= document.querySelector(".desktop-menu");
const menuHumIcon= document.querySelector(".menu");
const mobileMenu= document.querySelector(".mobile-menu");
const menuCarritoIcon= document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer= document.querySelector("#shoppingCartContainer");
const cardsContainer= document.querySelector(".cards-container");
const productDetailContainer=document.querySelector("#productDetail");
const productDetailCloseIcon=document.querySelector(".product-detail-close");

menuEmail.addEventListener("click",toggleDesktopMenu);
menuHumIcon.addEventListener("click",toggleMobileMenu);
menuCarritoIcon.addEventListener("click",toggleCarritoshoppingCartContainer);
productDetailCloseIcon.addEventListener("click",closeProductDetailAside)
function toggleDesktopMenu(){

    const isDesktopMenuOpen=!desktopMenu.classList.contains("inactive");
    const isshoppingCartContainerOpen=!shoppingCartContainer.classList.contains("inactive");
    const isProductDetalAsideOpen=!productDetailContainer.classList.contains("inactive");
    //esta abierto el menu desktop?
       if(isDesktopMenuOpen){
        desktopMenu.classList.add("inactive");
    
       }else{
        //abrir el menu desktop
    
        if(isshoppingCartContainerOpen){
            shoppingCartContainer.classList.add("inactive");
        }else if(isProductDetalAsideOpen){
          productDetailContainer.classList.add("inactive");
          }
            desktopMenu.classList.toggle("inactive")
       }
}

function toggleMobileMenu(){
    const isMobileMenuOpen=!mobileMenu.classList.contains("inactive");
    const isshoppingCartContainerOpen=!shoppingCartContainer.classList.contains("inactive");
    const isProductDetalAsideOpen=!productDetailContainer.classList.contains("inactive");
    //esta abierto el carrito?
       if(isMobileMenuOpen){
        mobileMenu.classList.add("inactive");
    
       }else{
        //abrir el carrito
    
        if(isshoppingCartContainerOpen){
            shoppingCartContainer.classList.add("inactive");
        }else if(isProductDetalAsideOpen){
          productDetailContainer.classList.add("inactive");
          }
            mobileMenu.classList.toggle("inactive")
       }
    
}

function toggleCarritoshoppingCartContainer(){

const isDesktopMenuOpen=!desktopMenu.classList.contains("inactive");
const isMobileMenuOpen=!mobileMenu.classList.contains("inactive");
const isshoppingCartContainerOpen=!shoppingCartContainer.classList.contains("inactive");
const isProductDetalAsideOpen=!productDetailContainer.classList.contains("inactive");
//esta abierto el carrito?
   if(isshoppingCartContainerOpen){
    shoppingCartContainer.classList.add("inactive");

   }else{
    //abrir el carrito

    if(isMobileMenuOpen){
        mobileMenu.classList.add("inactive");
        
    }else if(isDesktopMenuOpen){
    desktopMenu.classList.add("inactive");
   
    }else if(isProductDetalAsideOpen){
    productDetailContainer.classList.add("inactive");
    }
    shoppingCartContainer.classList.toggle("inactive")
   }
  
 
}

function openProductDetailAside(){

  const isDesktopMenuOpen=!desktopMenu.classList.contains("inactive");
const isMobileMenuOpen=!mobileMenu.classList.contains("inactive");
const isshoppingCartContainerOpen=!shoppingCartContainer.classList.contains("inactive");
const isProductDetalAsideOpen=!productDetailContainer.classList.contains("inactive");
  if(isshoppingCartContainerOpen){
    shoppingCartContainer.classList.add("inactive");
  }else if(isDesktopMenuOpen){
    desktopMenu.classList.add("inactive");
  }else if(isMobileMenuOpen){
    mobileMenu.classList.add("inactive");
  }
  productDetailContainer.classList.remove("inactive");

  
}
function closeProductDetailAside(){
  productDetailContainer.classList.add("inactive");
}

const productList = [];
productList.push({

name:"bike",
price: 120,
image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"


});

productList.push({

    name:"pantalla",
    price: 220,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    
    
    });

    productList.push({

        name:"computador",
        price: 720,
        image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        
        
        });


/*
        <section class="main-container">
        <div class="cards-container">
    
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
       function renderProducts(arr){
        for(product of arr){

           const productCard= document.createElement("div");
           productCard.classList.add("product-card");
           const productImg=document.createElement("img");
           productImg.setAttribute("src",product.image);
           productImg.addEventListener("click",openProductDetailAside)
           const productInfo= document.createElement("div");
           productInfo.classList.add("product-info");

           const productInfoDiv=document.createElement("div");
           const productPrice=document.createElement("p");
           productPrice.innerText="$"+product.price;
           const productName=document.createElement("div");
           productName.innerText=product.name;

           productInfoDiv.appendChild(productPrice);
           productInfoDiv.appendChild(productName);

           const productInfoFigure=document.createElement("figure");
           const productImgCart=document.createElement("img");
           productImgCart.setAttribute("src","./icons/bt_add_to_cart.svg");

           productInfoFigure.appendChild(productImgCart);

           productInfo.appendChild(productInfoDiv);
           productInfo.appendChild(productInfoFigure);

           productCard.appendChild(productImg);
           productCard.appendChild(productInfo);

           cardsContainer.appendChild(productCard);

        }

        }

        renderProducts(productList);