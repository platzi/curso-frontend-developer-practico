const menuEmail = document.querySelector(".navbar-email");
const menuHamIcon = document.querySelector(".menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");

const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");

const cardsConteiner = document.querySelector(".cards-container");  

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click",toggleMobileMenu);
menuCarritoIcon.addEventListener("click",toggleCarritoAside);

function toggleDesktopMenu(){
const isAsideClosed = shoppingCartContainer.classList.contains("inactive")

        if(!isAsideClosed){
            shoppingCartContainer.classList.add("inactive")
        }

        desktopMenu.classList.toggle("inactive");
};


function toggleMobileMenu(){
const isAsideClosed = shoppingCartContainer.classList.contains("inactive");
    
        if(!isAsideClosed){
            shoppingCartContainer.classList.add("inactive")
        }

        mobileMenu.classList.toggle("inactive");
};

function toggleCarritoAside(){
const isMobileMenuClosed = mobileMenu.classList.contains("inactive")

        if(!isMobileMenuClosed){
            mobileMenu.classList.add("inactive")
        }

        if(!desktopMenu.classList.contains("inative")){
            desktopMenu.classList.add("inactive")
        }
    
        shoppingCartContainer.classList.toggle("inactive") 
};
    
const productList = [];

productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    });

productList.push({
    name: "BenelliTnt",
    price: 12000,
    image: "https://4.bp.blogspot.com/-shY9XV-sMNQ/V81lpWeD68I/AAAAAAAAAUk/9zjVXHWgelQlVAXO4tgFRmHIdvqaUMVJQCLcB/s1600/Benelli%2BTNT%2B300.jpg"
    });

productList.push({
     name: "Mac",
     price: 550,
     image: "https://tweakers.net/i/rrfMaW1jBGNlrOg6rgB4v0f6o6U=/full-fit-in/4920x3264/filters:max_bytes(3145728):no_upscale():strip_icc():fill(white):strip_exif()/f/image/cgJEBUD5pyFbMjDhpAqa4AAn.jpg?f=user_large"
     });

     function renderProducts(arr){
     for (product of productList) {
       const productCard = document.createElement("div");
       productCard.classList.add("product-card");

        // produc = {name, price ,image} -> produc.image
       const productImag = document.createElement("img");
       productImag.setAttribute("src", product.image);  //agregamos un src//

       const productInfo = document.createElement("div");
       productInfo.classList.add("product-info");

       const productInfoDiv = document.createElement("div");

       const productPrice = document.createElement("p");
       productPrice.innerText = "$" + product.price;

       const productName = document.createElement("p");
       productName.innerText =  product.name;

       productInfoDiv.appendChild(productPrice);
       productInfoDiv.appendChild(productName);

       const productInfoFigure = document.createElement("figure");
       const productImgCart= document.createElement("img");
       productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");
       productInfoFigure.appendChild(productImgCart); 


       productInfo.appendChild(productInfoDiv);
       productInfo.appendChild(productInfoFigure);

       productCard.appendChild(productImag);
       productCard.appendChild(productInfo);

       cardsConteiner.appendChild(productCard);
    }
};
    renderProducts(productList);