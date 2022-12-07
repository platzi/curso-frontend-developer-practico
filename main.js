const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const cardsContainer = document.querySelector(".cards-container");
const productDetailOnlyOne = document.querySelector(".product-detail-onlyone");
const closeProductDetailIcon = document.querySelector(".product-detail-close");
const myOrderContent = document.querySelector(".my-order-content-products");
const productInfoParrafos = document.getElementsByClassName("product-info-parrafos");
const productDetailOnlyoneImg = document.getElementById("product-detail-onlyone-img");
const order = document.querySelector(".order");
const buttonAgregarAlCarrito = document.getElementsByClassName("primary-button");
const pagoTotal = document.querySelector(".pagoTotal");
const countCarrito = document.querySelector(".countCarrito");


const burguerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector(".product-detail");
const imgProductDetails = document.querySelector("#product-detail-onlyone-img");


const imgProductoEnCarrito = document.querySelector("#imgProductoEnCarrito");
const iconAddCarrito = document.querySelector("#iconAddCarrito");


closeProductDetailIcon.addEventListener("click", closeDetails);
menuEmail.addEventListener("click", toggleDesktopMenu);
burguerMenu.addEventListener("click", toggleBurguerMenu);
menuCarritoIcon.addEventListener("click", toogleCarritoAside);
productDetailOnlyOne.addEventListener("click", open);



function closeDetails(){
    productDetailOnlyOne.classList.toggle("inactive")
}
function toggleDesktopMenu(){

    desktopMenu.classList.toggle("inactive");
    mobileMenu.classList.add("inactive");
    aside.classList.add("inactive");
    productDetailOnlyOne.classList.add("inactive");

}

function toggleBurguerMenu(){
    
    mobileMenu.classList.toggle("inactive");
    desktopMenu.classList.add("inactive");
    aside.classList.add("inactive");
    productDetailOnlyOne.classList.add("inactive");
}

function toogleCarritoAside(){

    aside.classList.toggle("inactive");
    mobileMenu.classList.add("inactive");
    desktopMenu.classList.add("inactive");
    productDetailOnlyOne.classList.add("inactive");
    
}

const productList = [];

productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    descripcion: "Bicicleta para montaña de aluminio con componentes de calidad y suspensión delantera Rodada 27.5 ideal para ciudad y veredas de montaña. Que nada te detenga con esta bicicleta Alubike la que sigue tu ritmo de vida. Cuenta con estilo de montaña para aportar la facilidad de movimiento en todo terreno, para que tu camino sea parte de ti. Está fabricada a base de aluminio, para darte la resistencia que requieres, así como el peso liviano que tu movimiento, para dar la terminación exacta que tu ejercicio ocupa."
});

productList.push({
    name: "Laptop",
    price: 400,
    image: "https://imgs.search.brave.com/RiHnkD5EKLF2pv9p5TwYISqxUy7ydmSQWahK2j94uko/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5x/ZkNCeXA5N0M1Zmw2/ZWJNVHZLZDNRSGFF/SyZwaWQ9QXBp",
    descripcion: "Presentamos el portátil ultradelgado Gateway de 15.6 El portátil ultradelgado de 15.6 de Gateway es el portátil definitivo que ofrece imágenes nítidas para todas sus tareas. Es la manera ideal de obtener el mejor audio para el entretenimiento en movimiento. El ordenador funciona con el procesador AMD Ryzen 7 3700U y tiene 8 GB de memoria RAM. Con un diseño elegante y metálico, este ordenador también cuenta con una unidad de estado sólido de 512 GB."
});

productList.push({
    name: "Monitor",
    price: 250,
    image: "https://imgs.search.brave.com/SbAgLHsD5zAGMYVIQ2A61zvv-5cEXfG6zw2fMq2qejg/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/YnJhbmRpbWlhLmNv/bS9wcm9kdWN0b3Mv/NjFGN01BUjFBUi0y/LmpwZw",
    descripcion: "Descubre una experiencia de visualización verdaderamente envolvente con el monitor curvo de Samsung. Disfruta de un campo de visión como la pantalla de un cine iMax, la pantalla 1800R —con su radio de arco de 1,800 mm para una mayor curvatura— crea un campo de visión más amplio, mejora la percepción de la profundidad y minimiza las distracciones periféricas para concentrarte más profundamente en tu contenido. Así que, ya sea una película en línea, tu programa de televisión favorito o un juego emocionante, la curvatura más profunda de la pantalla Samsung te sumergirá por completo en todo tu contenido multimedia."
});

productList.push({
    name: "Audifonos",
    price: 90,
    image: "https://imgs.search.brave.com/LBOAS-g2PtLF1KhUvk-SPwpmufygSBvK3VlnrBJXl0I/rs:fit:940:1200:1/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vYXVkaWZvbm9z/LWF1cmljdWxhcmVz/LWRqLXRpcG8tZGlh/ZGVtYS1wbGF0YS1w/aW9uZWVyLWhkai14/NS1zLURfTlFfTlBf/Nzc4NjA1LU1MTTI5/NDk3Nzc3NDM3XzAy/MjAxOS1GLmpwZw",
    descripcion: "Infurture H1 Auriculares activos con cancelación de ruido. Bloquea hasta el 90% del ruido ambiental. Los auriculares inalámbricos Infurture H1 te permiten centrarte en tu música favorita. Ya sea que estés en movimiento, en la oficina o en cualquier otro lugar, solo tienes que encender el interruptor ANC para quitar todas las interferencias y ofrecerte una paz y tranquilidad perfectas"
});

productList.push({
    name: "Moto",
    price: 1200,
    image: "https://imgs.search.brave.com/lzPL5bNz8azJ0REoAYVlIMTPfVoJ8vbt7CLpjdFYWIU/rs:fit:933:598:1/g:ce/aHR0cHM6Ly9pbWFn/ZW5lcy5tb250ZXZp/ZGVvLmNvbS51eS9p/bWdub3RpY2lhcy8y/MDIwMDgvX1c5MzNf/ODAvNzM2NDM1Lmpw/Zw",
    descripcion: "Vigencia del 01 al 31 de diciembre de 2022 o hasta agotar existencias lo que suceda primero. Mensualidades desde $3,469.74. Tasa base desde 13.49%. Aplica en la compra de Honda POWERHOUSE® CBR1000RR 2022. Para un plazo de 48 (cuarenta y ocho) y un enganche de 60% (sesenta), con un CAT de 59.8% sin IVA promedio informativo que considera el costo del seguro de vida, seguro de daños y comisión por apertura de crédito. No incluye accesorios. Crédito exclusivo con Honda Finance. Sujeto a aprobación de Crédito. Aplican restricciones."
});


   function renderProducts(array){
    let i = 0;
    for(product of array){
       
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        
        const productImg = document.createElement("img");
        productImg.setAttribute("src", product.image);
        productImg.setAttribute("id", i);
        productImg.classList.add("imgProduct");
        
        
    
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
    
        const productInfoDiv = document.createElement("div");
    
        const productPrice = document.createElement("p")
        productPrice.setAttribute("class", "precioDelProducto")
        productPrice.innerText = "$"+product.price
        productPrice.setAttribute("id", i);
        
        const productDescription = document.createElement("p")
        
        productDescription.innerText = product.descripcion
        productDescription.setAttribute("class", "descripcionDelProducto")
        productDescription.setAttribute("id", i);
        productDescription.classList.add("inactive");

        const productName = document.createElement("p")
        productName.innerText = product.name
        productName.setAttribute("class", "nombreDelProducto")
        productName.setAttribute("id", i);
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        productInfoDiv.appendChild(productDescription);
    
        const productInfoFigure = document.createElement("figure");
        const productCartImg = document.createElement("img");
    
        productCartImg.setAttribute("src", "./icons/bt_add_to_cart.svg");
        productCartImg.setAttribute("id", i);
        productCartImg.setAttribute("aidi", "iconCarrito");
        productCartImg.classList.add("add-to-cart-button");
        
    
        productInfoFigure.appendChild(productCartImg);
    
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
        i++;
    }
   
   }
   let conteoDelCarrito = 0;
   renderProducts(productList);

   function removeProductOfCar(e){

       if(e.target && e.target.getAttribute("src")==="./icons/icon_close.png") {
            
            let logDescuento = e.target.parentElement.childNodes[2].outerText.length;
            console.log(logDescuento);
            let longTotal = pagoTotal.outerText.length;
            console.log(longTotal+ "y");
            let Total = pagoTotal.outerText.substring(1, longTotal.length);
            let descuento = parseInt(e.target.parentElement.childNodes[2].outerText.substring(1, logDescuento));
            console.log(descuento);
            costoTotal = Total - descuento;
            pagoTotal.innerText = "$" + costoTotal;
            myOrderContent.removeChild(e.target.parentElement);

            conteoDelCarrito--;
            countCarrito.innerText = conteoDelCarrito;
       }
   }
   let idproductocarrito = 1;
   
   function renderCarrito(src,precio,nombre){
        const divShoppingCart = document.createElement("div");
        divShoppingCart.setAttribute("class", "shopping-cart");
        divShoppingCart.setAttribute("idProductoCarrito", idproductocarrito);
        divShoppingCart.addEventListener("click", removeProductOfCar);

        const figure = document.createElement("figure");
        const imgProduct = document.createElement("img");
        
        /*imgProduct.setAttribute("id", "imgProductoEnCarrito")*/
        imgProduct.setAttribute("src", src)

        figure.appendChild(imgProduct);

        const pName = document.createElement("p");
        pName.innerHTML = nombre;
        const pPrice = document.createElement("p");
        pPrice.innerText = "$"+precio;

        const imgClose = document.createElement("img");
        imgClose.setAttribute("src", "./icons/icon_close.png");
        
        imgClose.setAttribute("idProductoCarrito", idproductocarrito);
        

        divShoppingCart.appendChild(figure);
        divShoppingCart.appendChild(pName);
        divShoppingCart.appendChild(pPrice);
        divShoppingCart.appendChild(imgClose);

        myOrderContent.appendChild(divShoppingCart);
    idproductocarrito++;

   }

cardsContainer.addEventListener("click", open)
cardsContainer.addEventListener("click", agregarAlCarrito)
productDetailOnlyOne.addEventListener("click", agregarAlCarrito)


let costoTotal = 0;
function agregarAlCarrito(e){
    
    if(e.target && e.target.classList.contains("add-to-cart-button")){
        console.log(e.target.getAttribute("id"))
        
        let id = e.target.getAttribute("id");
        let longitudCosto =  precioDelProducto[id].outerText.length;
        let src = imgDelProducto[id].src
        let precio = precioDelProducto[id].outerText.substring(1, longitudCosto);
        let nombre = nombreDelProducto[id].outerText;
        
        renderCarrito(src, precio, nombre);

        parseInt(costoTotal);
        console.log(typeof(parseInt(precio)));
        costoTotal = parseInt(precio) + parseInt(costoTotal)
        console.log(costoTotal)
        pagoTotal.innerText = costoTotal;
        order.childNodes[3].innerText = "$" + costoTotal;
        conteoDelCarrito++;
        countCarrito.innerText = conteoDelCarrito;
    }
}   
function open(e) {
    console.log("entradfa")
   if(e.target &&  e.target.classList.contains("imgProduct")){  
        console.log(e.target.getAttribute("id"));
        let id = e.target.getAttribute("id");
        productDetailOnlyoneImg.src = imgDelProducto[id].src;
        productInfoParrafos[0].innerText = precioDelProducto[id].outerText;
        productInfoParrafos[1].innerText = nombreDelProducto[id].outerText;
        productInfoParrafos[2].innerText = descripcionDelProducto[id].outerText;
        productDetailOnlyOne.classList.remove("inactive");
        mobileMenu.classList.add("inactive");
        aside.classList.add("inactive");
        desktopMenu.classList.add("inactive");

        productDetailOnlyoneImg.setAttribute("id", id);
        //productDetailOnlyoneImg.classList.add("class", "imgProduct");

        productInfoParrafos[0].setAttribute("id", id);
        productInfoParrafos[1].setAttribute("id", id);
        productInfoParrafos[2].setAttribute("id", id);
        buttonAgregarAlCarrito[1].setAttribute("id", id);
        console.log("llega")
         }
        else{
            // if(e.target &&  e.target.getAttribute("aidi")==="iconCarrito"){    
            //         let divDatos = document.getElementsByClassName(e.target.getAttribute("class")) 
            //         console.log(divDatos)
            //         renderCarrito(divDatos[0].getAttribute("src"),divDatos[1].outerText,divDatos[2].outerText);
            //     }
            
            // if(e.target && e.target.getAttribute("aidi")==="iconCarrito"){
            //     let long = e.target.parentElement.parentElement.childNodes[0].childNodes[0].outerText;
            //     let pago = e.target.parentElement.parentElement.childNodes[0].childNodes[0].outerText.substring(1, long.length);
            //     let precio = e.target.parentElement.parentElement.childNodes[0].childNodes[0].outerText;
            //     let nombre = e.target.parentElement.parentElement.childNodes[0].childNodes[1].outerText;
            //     pagoTotal = pagoTotal + parseInt(pago);
            //     let src = e.target.parentElement.parentElement.parentElement.childNodes[0].src;
            //     renderCarrito(src, precio, nombre);
            //    order.childNodes[3].innerText = "$" + pagoTotal;
               
            // }
        }
   
    }
   
           
    

/*
   var arrayImagenes = document.getElementsByClassName("clase-imagenes");
   arrayImagenes[0].addEventListener("click", MostrarDetallesDelProducto1);
   arrayImagenes[1].addEventListener("click", MostrarDetallesDelProducto2);
   arrayImagenes[2].addEventListener("click", MostrarDetallesDelProducto3);
   arrayImagenes[3].addEventListener("click", MostrarDetallesDelProducto4);
   arrayImagenes[4].addEventListener("click", MostrarDetallesDelProducto5);

function MostrarDetallesDelProducto(){
        imgProductDetails.setAttribute("src" , arrayImagenes[0].getAttribute("src"));
        productDetailOnlyOne.classList.toggle("inactive");
   }

function MostrarDetallesDelProducto2(){
    imgProductDetails.setAttribute("src" , arrayImagenes[1].getAttribute("src"));
    productDetailOnlyOne.classList.toggle("inactive");
}
function MostrarDetallesDelProducto3(){
    imgProductDetails.setAttribute("src" , arrayImagenes[2].getAttribute("src"));
    productDetailOnlyOne.classList.toggle("inactive");
}
function MostrarDetallesDelProducto4(){
    imgProductDetails.setAttribute("src" , arrayImagenes[3].getAttribute("src"));
    productDetailOnlyOne.classList.toggle("inactive");
}
function MostrarDetallesDelProducto5(){
    imgProductDetails.setAttribute("src" , arrayImagenes[4].getAttribute("src"));
    productDetailOnlyOne.classList.toggle("inactive");
}*/



/*
<div class="shopping-cart">
        <figure>
          <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike">
        </figure>
        <p>Bike</p>
        <p>$30,00</p>
        <img src="./icons/icon_close.png" alt="close">
      </div>


       <div class="order">
        <p>
          <span>Total</span>
        </p>
        <p>$560.00</p>
      </div>
       <button class="primary-button">
        Checkout
      </button>
 */

    const imgDelProducto = document.getElementsByClassName("imgProduct");
    const precioDelProducto = document.getElementsByClassName("precioDelProducto");
    const nombreDelProducto = document.getElementsByClassName("nombreDelProducto");
    const descripcionDelProducto = document.getElementsByClassName("descripcionDelProducto");