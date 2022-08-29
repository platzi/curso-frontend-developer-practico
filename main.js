const navEmail = document.querySelector(".navbar-email");
const menuHamIcon = document.querySelector(".menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const productDetailCloseIcon = document.querySelector(".product-detail-close");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const productDetailContainer = document.querySelector("#productDetail");
const cardsContainer = document.querySelector(".cards-container");
const imagen = document.querySelector("#infoImages");
const priceProduct = document.querySelector("#price");
const numberProducts = document.querySelector(".shopping-cart-number");
let contador = 0;


//const mediaQuery = window.matchMedia("(max-width: 640px)");

navEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click",  toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside);

function toggleDesktopMenu() {
    const isAsideClose = shoppingCartContainer.classList.contains("inactive");
    const isproductDetailContainer = productDetailContainer.classList.contains("inactive");

    desktopMenu.classList.toggle("inactive");

    if(!isAsideClose){
        shoppingCartContainer.classList.add("inactive");
    }

    if(!isproductDetailContainer){
        productDetailContainer.classList.add("inactive");
    }
// //     // if(!desktopMenu.classList.toggle("inactive")){
// //     //     desktopMenu.classList.remove("inactive");
// //     //  }else{
// //     //     desktopMenu.classList.add("inactive");
// //     //  }
    
}

function toggleMobileMenu() {
    const isAsideClose = shoppingCartContainer.classList.contains("inactive");

    mobileMenu.classList.toggle("inactive"); //Si esta lo elimina, si no esta lo activa 
    if(!isAsideClose){
        shoppingCartContainer.classList.add("inactive");
    }
    closeProductDetailAside();
}

function toggleCarritoAside(){    
    const isMobileMenuClose =  mobileMenu.classList.contains("inactive");
    const isDesktopMenuClose = desktopMenu.classList.contains("inactive"); // El elemento contiene la clase inactive = true (cerrado)
                                                                           // El elemento no contiene la clase inactive = falso (abierto)
    const isProductDetailClose = productDetailContainer.classList.contains("inactive");

    shoppingCartContainer.classList.toggle("inactive");
    if(!isMobileMenuClose){ // si esta abierto 
        mobileMenu.classList.add("inactive");
    }

    if(!isDesktopMenuClose){
        desktopMenu.classList.add("inactive")
    }   

    if(!isProductDetailClose){
        productDetailContainer.classList.add("inactive");
    }
}

function openProductDetailAside(event){
    shoppingCartContainer.classList.add("inactive");
    mobileMenu.classList.add("inactive");
    productDetailContainer.classList.remove("inactive");
    desktopMenu.classList.add("inactive");
    imagen.setAttribute("src", event.target.src);
    priceProduct.innerText = event.target.nextElementSibling.innerText;
    numberProducts.innerText = contador += 1;
    
}

function closeProductDetailAside(){
    productDetailContainer.classList.add("inactive");
}


//Utilizando solo una función para mostrar los menus
//  function toggleMenus (){
//      if(mediaQuery.matches){
//          mobileMenu.classList.toggle("inactive");

//      } else {
//          desktopMenu.classList.toggle("inactive");
//      }
    
//  }

const productList = [];
productList.push({
    name: "Acelerómetro ADXL345",
    price: 11600,
    image: "https://moviltronics.com/wp-content/uploads/2015/10/1538-thickbox_default-Modulo-Acelerometro-3-ejes-ADXL345-600x600.jpg",
});
productList.push({
    name: "Arduino Nano CH340",
    price: 48200,
    image: "https://moviltronics.com/wp-content/uploads/2018/06/M10009-600x450.png",
});
productList.push({
    name: "Paquete Resistencias surtidas",
    price: 2500,
    image: "https://moviltronics.com/wp-content/uploads/2020/05/Resistencias-600x600.jpg",
})
productList.push({
    name: "Bluetooth CC2541",
    price: 23000,
    image: "https://moviltronics.com/wp-content/uploads/2018/07/2083-thickbox_default-Modulo-Bluetooth-CC2541-600x600.jpg",
})
productList.push({
    name: "Potenciómetro Sencillo",
    price: 900,
    image: "https://moviltronics.com/wp-content/uploads/2019/10/56-1-600x585.jpg",
})
productList.push({
    name: "Brazo Robotico Dobot Magician Basic",
    price: 9200,
    image: "https://moviltronics.com/wp-content/uploads/2018/07/2471-thickbox_default-Brazo-Robotico-Dobot-Magician-Basic-600x600.jpg",
})
productList.push({
    name: "Chasis Mini Sumo",
    price: 199000,
    image: "https://moviltronics.com/wp-content/uploads/2019/07/Chasis-Mini-Sumo_0000_DSC00342-600x600.jpg",
})
productList.push({
    name: "Cargador B3 Li-poly 2-3s (Bateria)",
    price: 35000,
    image: "https://moviltronics.com/wp-content/uploads/2015/12/723-thickbox_default-Cargador-B3-Li-poly-2-3s-600x600.jpg",
}) 
productList.push({
    name: "Kit Arduino Starter",
    price: 264600,
    image: "https://moviltronics.com/wp-content/uploads/2018/07/Kit-Arduino-Starter-600x600.jpg",
}) 
productList.push({
    name: "Brazo Robotico OWI-535",
    price: 311000,
    image: "https://moviltronics.com/wp-content/uploads/2018/07/Brazo-Robotico-OWI-535_0000_Capa-57-600x600.jpg",
}) 
productList.push({
    name: "Chasis de Minisumo (Pololu 1418)",
    price: 85000,
    image: "https://moviltronics.com/wp-content/uploads/2016/02/927-thickbox_default-Chasis-para-Mini-Sumo-Pololu-600x600.jpg",
}) 
productList.push({
    name: "Kit de llantas robótica",
    price: 8000,
    image: "https://moviltronics.com/wp-content/uploads/2021/05/Kit-Llantas-5x_0005_M20035-4-600x600.jpg",
}) 
productList.push({
    name: "Llantas para robot sumo profesional 65mm",
    price: 86200,
    image: "https://moviltronics.com/wp-content/uploads/2021/06/Llantas-Sumo-neopreno-65mm_0000_Capa-1-copia-600x600.jpg",
}) 
productList.push({
    name: "Llantas velocista aluminio",
    price: 28800,
    image: "https://moviltronics.com/wp-content/uploads/2019/10/Llantas-mini-velocista-20mm_0001_DSC00445-copia-600x600.jpg",
}) 
productList.push({
    name: "Soporte motorreductor N20 N30 12GA con tornillos",
    price: 2000,
    image: "https://moviltronics.com/wp-content/uploads/2019/11/Soporte-Micromotor_0000_Capa-1-600x600.jpg",
}) 
productList.push({
    name: "Rueda Omnidireccional 40mm",
    price: 52800,
    image: "https://moviltronics.com/wp-content/uploads/2016/02/1001-thickbox_default-Rueda-Omnidireccional-40mm-600x600.jpg",
}) 
productList.push({
    name: "Acelerómetro MMA7455 3 Ejes Digital",
    price: 22600,
    image: "https://moviltronics.com/wp-content/uploads/2015/10/1401-thickbox_default-Modulo-Acelerometro-MMA7455-600x600.jpg",
}) 
productList.push({
    name: "Fotocelda 12mm",
    price: 1500,
    image: "https://moviltronics.com/wp-content/uploads/2018/06/1510-thickbox_default-Fotocelda-12mm-600x600.jpg",
}) 
productList.push({
    name: "Sensor de Flama KY026",
    price: 8000,
    image: "https://moviltronics.com/wp-content/uploads/2019/10/001-600x594.jpg",
}) 

function renderProducts(arr){
    for(product of arr){
        const productCard = document.createElement("div");
            productCard.classList.add("product-card");
    
        //product = {name, price, image} -> product.image
        const productImg = document.createElement("img");
            productImg.setAttribute("src", product.image);
            productImg.setAttribute("id", "imagen");
            productImg.addEventListener("click", openProductDetailAside);

        const productInfo = document.createElement("div");
            productInfo.classList.add("product-info");
    
        const productInfoDiv = document.createElement("div");
    
        const productInfoPrice = document.createElement("p");
            productInfoPrice.innerText = "$ " + product.price;
    
        const productInfoName = document.createElement("p");
            productInfoName.innerText = product.name;
    
            productInfoDiv.appendChild(productInfoPrice);
            productInfoDiv.appendChild(productInfoName);
    
        const productInfofigure = document.createElement("figure");
    
        const productImgCart = document.createElement("img");
            productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");
    
        productInfofigure.appendChild(productImgCart);
        
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfofigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}
renderProducts(productList);