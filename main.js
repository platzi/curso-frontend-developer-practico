let menuEmail = document.querySelector(".navbar-email")
let descktopMenu = document.querySelector(".desktop-menu");

const burguerButton = document.querySelector(".menu")

const mobileMenu = document.querySelector(".mobile-menu")
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart")
const aside = document.querySelector("#shopingCartContainer")
const asideDetail = document.querySelector("#productDetailContainer")
const detailClose = document.querySelector(".product-detail-close")
const infoProductDetail = document.querySelector(".product-info-detail")
const imgD = document.querySelector(".imgDetail")


const precioD = document.querySelector(".precio")
const nombreD = document.querySelector(".nombre")
const descripcionD = document.querySelector(".descripcion")



let cardContainer = document.querySelector(".cards-container");



menuEmail.addEventListener("click" , toogleDesktopMenu)

burguerButton.addEventListener("click", tooglemobileMenu);

menuCarritoIcon.addEventListener("click", toogleCarritoAside);

detailClose.addEventListener("click", cerrarDetalles)


let productList = []

productList.push ({
    name:'Bike',
    price: 12700,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum magnam accusantium sapiente corrupti obcaecati earum dolorum, qui harum necessitatibus, reiciendis libero labore iusto nemo dolorem expedita? Doloribus minima dolores dignissimos. ",
    id: 0
});
productList.push ({
    name:'Bicycle helmet',
    price: 1200,
    image: 'https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto',
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum magnam accusantium sapiente corrupti obcaecati earum dolorum, qui harum necessitatibus, reiciendis libero labore iusto nemo dolorem expedita? Doloribus minima dolores dignissimos. ",
    id: 1
});
productList.push ({
    name:'Bicycle helmet',
    price: 1600,
    image: 'https://m.media-amazon.com/images/I/61eExL-rIAL._AC_SL1001_.jpg',
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum magnam accusantium sapiente corrupti obcaecati earum dolorum, qui harum necessitatibus, reiciendis libero labore iusto nemo dolorem expedita? Doloribus minima dolores dignissimos. ",
    id: 2
});
productList.push ({
    name:'Bicycle helmet',
    price: 1500,
    image: 'https://assets.specialized.com/i/specialized/60822-140_HLMT_CHAMONIX-HLMT-MIPS-CE-MRN-M-L_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto',
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum magnam accusantium sapiente corrupti obcaecati earum dolorum, qui harum necessitatibus, reiciendis libero labore iusto nemo dolorem expedita? Doloribus minima dolores dignissimos. ",
    id: 3
});
productList.push ({
    name:'Seat',
    price: 300,
    image: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg',
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum magnam accusantium sapiente corrupti obcaecati earum dolorum, qui harum necessitatibus, reiciendis libero labore iusto nemo dolorem expedita? Doloribus minima dolores dignissimos. ",
    id: 4
});
productList.push ({
    name:'Tennis Montain Bike',
    price: 2200,
    image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg',
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum magnam accusantium sapiente corrupti obcaecati earum dolorum, qui harum necessitatibus, reiciendis libero labore iusto nemo dolorem expedita? Doloribus minima dolores dignissimos. ",
    id: 5
});
productList.push ({
    name:'Sunglasses',
    price: 800,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602',
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum magnam accusantium sapiente corrupti obcaecati earum dolorum, qui harum necessitatibus, reiciendis libero labore iusto nemo dolorem expedita? Doloribus minima dolores dignissimos. ",
    id: 6
});
productList.push ({
    name:'Sunglasses',
    price: 600,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/siroko-tech-k3s-clearfog-lente-antiniebla-frontal/1200x/crop_center.jpg?v=1635209603',
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum magnam accusantium sapiente corrupti obcaecati earum dolorum, qui harum necessitatibus, reiciendis libero labore iusto nemo dolorem expedita? Doloribus minima dolores dignissimos. ",
    id: 7
});
productList.push ({
    name:'Bicycle seat bag',
    price: 876,
    image: 'https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg',
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum magnam accusantium sapiente corrupti obcaecati earum dolorum, qui harum necessitatibus, reiciendis libero labore iusto nemo dolorem expedita? Doloribus minima dolores dignissimos. ",
    id: 8
}); 


let showAll = document.querySelector(".todos");

/* showAll.addEventListener("click", activarProductos) */


/* function activarProductos(){


    let activado = 0
    
    if (activado == 0) {
        showProduct(productList)
        activado = 1;
    
    }
    else{
        cardContainer.classList.toggle("inactive")
        activado = 1;
    }
} */


function showProduct(arr){
    for (product of arr) {

        let contador = 0;


        let producto = document.createElement("div");
        producto.classList.add("product-card")
        let imgProduct = document.createElement("img");
        imgProduct.setAttribute("src", product.image);
        imgProduct.classList.add(product.id)
        /* Funcion mostrar detalles */
        imgProduct.addEventListener("click", detectarArticulo)


    
        let infoProduct = document.createElement("div");
        infoProduct.classList.add("product-info");
    
        let div = document.createElement("div");
    
        let productPrice = document.createElement("p")
        productPrice.innerText = "$ " + product.price;
    
        let productName = document.createElement("p")
        productName.innerText = product.name;
    
        let figureCard = document.createElement("figure");
        let iconImg = document.createElement("img");
        iconImg.setAttribute("src", "./icons/bt_add_to_cart.svg")
    
        figureCard.appendChild(iconImg);
    
        div.appendChild(productPrice);
        div.appendChild(productName);
    
    
        infoProduct.appendChild(div);
        infoProduct.appendChild(figureCard);
    
        producto.appendChild(imgProduct);
        producto.appendChild(infoProduct);
    
    
        cardContainer.appendChild(producto)
    
    
    
        
    }
}



function detectarArticulo(e){

    for (let i = 0; i < productList.length; i++) {

        if (e.target.className == productList[i].id) {
            console.log("el id del articulo es " + e.target.className);
            idArticuloDetalles = e.target.className
        }
    }

    argegarDetalles(e.target.className)

    console.log("aqui funciona");




}

/* <div class="product-detail-close">
      <img src="./icons/icon_close.png" alt="close">
    </div>
    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike">
    <div class="product-info-detail">
      <p>$35,00</p>
      <p>Bike</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum magnam accusantium sapiente corrupti obcaecati earum dolorum, qui harum necessitatibus, reiciendis libero labore iusto nemo dolorem expedita? Doloribus minima dolores dignissimos.</p>
      <button class="primary-button add-to-cart-button">
        <img src="./icons/bt_add_to_cart.svg" alt="add to cart">
        Add to cart
      </button>
    </div> */

function argegarDetalles(list){



        precioD.innerText = "$ " + productList[list].price;

        nombreD.innerText = productList[list].name;

        descripcionD.innerText = productList[list].description;

        imgD.setAttribute("src", productList[list].image)


        mostrarDetalles()


        
    
}
function mostrarDetalles(){
    asideDetail.classList.remove("inactive")
}

function cerrarDetalles(){
    asideDetail.classList.add("inactive");
}

function toogleCarritoAside(){
    mobileMenu.classList.add("inactive")
    aside.classList.toggle("inactive")
    descktopMenu.classList.add("inactive")
}


function tooglemobileMenu(){
    mobileMenu.classList.toggle("inactive")
    aside.classList.add("inactive")
}

function toogleDesktopMenu(){
    /* el toogle permite quiar o poner el elemento, si esta lo quitara. y si no esta lo colocara */
    descktopMenu.classList.toggle("inactive")

    aside.classList.add("inactive")
}



showProduct(productList)

