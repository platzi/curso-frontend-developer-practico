const menuEmail =document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")

const menuCarritoIcon =document.querySelector(".navbar-shopping-cart")
const shopingCartContainer = document.querySelector("#shopingCartContainer")

const menuHamIcon = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")

const cardsContainer=document.querySelector(".cards-container")

const productDetailContainer=document.querySelector("#productDetail")
const productDetailCloseIcon=document.querySelector(".product-detail-close")

menuEmail.addEventListener("click", toggleDesktopMenu)
menuHamIcon.addEventListener("click",toggleMobileMenu)
menuCarritoIcon.addEventListener("click",toggleCarritoAside)
productDetailCloseIcon.addEventListener("click",closeProductDetailAside)

function toggleDesktopMenu(){
  const isAsideOpen = !shopingCartContainer.classList.contains("inactive")
  if (isAsideOpen){
    shopingCartContainer.classList.add("inactive")
  }
  closeProductDetailAside();
    desktopMenu.classList.toggle("inactive")
}                                                        // toggle. Añade o quita la clase que indiques (en este caso la clase inactive) dependiendo de si tu elemento ya la tenía o no. Si la tenía, la quita. SI no, tons la pone.


function toggleMobileMenu (){
  const isAsideOpen = !shopingCartContainer.classList.contains("inactive")
  if (isAsideOpen){
    shopingCartContainer.classList.add("inactive")
  }
  closeProductDetailAside();
  mobileMenu.classList.toggle("inactive")
}
   
function toggleCarritoAside(){
  const isMobileMenuOpen = !mobileMenu.classList.contains("inactive")
  const isDesktopMenuOpen= !desktopMenu.classList.contains("inactive")
  const isProductDetailOpen = !productDetailContainer.classList.contains("inactive")

  if (isMobileMenuOpen){
    mobileMenu.classList.add("inactive");
  }
   else if(isProductDetailOpen){
    productDetailContainer.classList.add("inactive")
  } 
  else if(isDesktopMenuOpen){
    desktopMenu.classList.add("inactive")
  }

  shopingCartContainer.classList.toggle("inactive")

  
}

function openProductDetailAside(){
  desktopMenu.classList.add("inactive")
  mobileMenu.classList.add("inactive")
  shopingCartContainer.classList.add("inactive")
  productDetailContainer.classList.remove("inactive")
}
function closeProductDetailAside(){
  productDetailContainer.classList.add("inactive")
}


//objeto y creacion de ejemplos.

const productList = [
];
productList.push({
  name:"bike",
  price:120,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

})
productList.push({
  name:"pantalla",
  price:560,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

})
productList.push({
  name:"celular",
  price:40000,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

})
productList.push({
  name:"CACA",
  price:120,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

})

//Funcion para crear HTML para agregar cualquier producto que desee el usuario.

/* lo que pasa aca es que tengo que crear este html con js para que lo cree con valores no hardcodeados. 
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

    </div> */
function renderProducts (arr){                                  //se encapsula en una funsion para quede mas ordenado y se pueda utilizar con el nombre de la misma para otras cuestiones, como usarla para distintos arrays o agregarle eventos.
for(product of arr){                                           //este ciclo resume el (i=0,condicional,i++,).Product pasa a ser cada uno de los objetos que tenemos en el array
 const productCard= document.createElement("div");            //se crea el elemtno
 productCard.classList.add("product-card");                    //se le añade la clase

 
//product ={name,price, image}--> product.image
 const img =document.createElement("img");
 img.setAttribute("src", product.image);                  //se le añade el atributo con la imagen variable
 img.addEventListener("click",openProductDetailAside);

const productInfo=document.createElement("div");
productInfo.classList.add("product-info");

const productInfoDiv=document.createElement("div");
const productPrice =document.createElement("p");
productPrice.innerText= "$" + product.price;
const productName =document.createElement("p");
productName.innerText= product.name;

productInfoDiv.appendChild(productPrice);                   //Este metodo hace hijo al elemento que pongamos entre parentesis 
productInfoDiv.appendChild(productName);


const productInfoFigure=document.createElement("figure");
const productInfoIcon= document.createElement("img");
productInfoIcon.setAttribute("src", "./icons/bt_add_to_cart.svg");

productInfoFigure.appendChild(productInfoIcon);


productInfo.appendChild(productInfoDiv);
productInfo.appendChild(productInfoFigure);

productCard.appendChild(img);
productCard.appendChild(productInfo);

cardsContainer.appendChild(productCard);                    //Aca se manda a llamar a una constante que esta por fuera de esta funcion para agregar todo esto al html(la constante esta arriba de todo)
  }
}
renderProducts(productList)


//Con Element.append() podemos agregar varios nodos y texto mientras que con Element.appendChild() solo podemos agregar un nodo.