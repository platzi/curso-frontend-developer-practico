 const linkCorreo = document.querySelector(".navbar-email");
 const formMenu = document.querySelector(".desktop-menu");
 const burguerIcon = document.querySelector(".menu");
 const liMobileMenu = document.querySelector(".mobile-menu");
 const productoDetailCarrito = document.querySelector("#shoppingCartContainer");
 const carritoIcon = document.querySelector(".navbar-shopping-cart");
 const cardsContainer = document.querySelector(".cards-container");
 const detailProduct = document.querySelector("#productDetail");
 const closeImg = document.querySelector(".product-detail-close");
 const mainContainer = document.querySelector(".main-container");
 const contadorCarrito = document.querySelector(".countCarrito");


 linkCorreo.addEventListener("click",()=>{
   const isAsideClosed = productoDetailCarrito.classList.contains("inactive");
   const isProductDetailClosed = detailProduct.classList.contains("inactive");
   mainContainer.classList.add("luminosidad");

   if(!isAsideClosed){
      productoDetailCarrito.classList.add("inactive");
   };
  //  formMenu.classList.toggle("inactive");
   if(!isProductDetailClosed){
       detailProduct.classList.add("inactive");
   }
   formMenu.classList.toggle("inactive");
 
 });

 burguerIcon.addEventListener("click",()=>{
  const isProductDetailClosed = detailProduct.classList.contains("inactive");
   productoDetailCarrito.classList.add("inactive");
   liMobileMenu.classList.toggle("mobile-inactive");

   if(!isProductDetailClosed){
     detailProduct.classList.add("inactive");
   };
 });

 carritoIcon.addEventListener("click",()=>{
   const isFormClosed = formMenu.classList.contains("inactive");
   const isProductDetailClosed = detailProduct.classList.contains("inactive");
   mainContainer.classList.add("luminosidad");
 

    liMobileMenu.classList.add("mobile-inactive");
    productoDetailCarrito.classList.toggle("inactive");

    if(!isFormClosed){
      formMenu.classList.add("inactive");
    };
 

    if(!isProductDetailClosed){
      detailProduct.classList.add("inactive");
    };
    
 });




 const listProducts = [];
 let i =8;
 while(listProducts.length<i){
 listProducts.push({
    name:"bike",
    price:300,
    img:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
 });
 listProducts.push({
   name:"computador",
   price:600,
   img:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
 });
 listProducts.push({
   name:"camisa",
   price:40000,
   img:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
 });

 };
 listProducts.pop();
  /*
 <
 div class="product-card">
 <img
   src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
   alt="">
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
 
// closeImg.addEventListener("click",()=>{
//   detailProduct.classList.add("inactive");
// });
  
 let contador = 1;
  for(let products of listProducts){

   const productCard = document.createElement("div");
    productCard.classList.add("product-card");
   const imgProduct = document.createElement("img");
    imgProduct.setAttribute("src",products.img);

     imgProduct.addEventListener("click",()=>{
      const isCarritoClosed = productoDetailCarrito.classList.contains("inactive");
        detailProduct.classList.remove("inactive");
        mainContainer.classList.add("luminosidad");
        
        contadorCarrito.innerHTML = contador++;

        if(!isCarritoClosed){
          productoDetailCarrito.classList.toggle("inactive");
        };

     });
      
     closeImg.addEventListener("click",()=>{
      const isProductDetailClosed =  productoDetailCarrito.classList.contains("inactive");
      const isFormMenuClosed = formMenu.classList.contains("inactive");
      mainContainer.classList.remove("luminosidad");
        
       detailProduct.classList.add("inactive");

       if(!isProductDetailClosed){
          productoDetailCarrito.classList.add("inactive");
       };
       if(!isFormMenuClosed){
        formMenu.classList.add("inactive");
       };
     });

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const divDatos =document.createElement("div");
    const parrafoPrecio = document.createElement("p");
    parrafoPrecio.innerText = "$" + products.price;

    const parrafoName = document.createElement("p");
   parrafoName.innerText = products.name;

   const etiquetaFigure = document.createElement("figure");
   const imgIcon = document.createElement("img");
   imgIcon.setAttribute("src","./icons/bt_add_to_cart.svg");

   // insertar
   etiquetaFigure.appendChild(imgIcon);
   divDatos.append(parrafoPrecio,parrafoName);
   productInfo.append(etiquetaFigure,divDatos);
   productCard.append(imgProduct,productInfo);
   cardsContainer.appendChild(productCard);

  };
