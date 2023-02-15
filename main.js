let menuEmail = document.querySelector(".navbar-email")
let descktopMenu = document.querySelector(".desktop-menu");

const burguerButton = document.querySelector(".menu")

const mobileMenu = document.querySelector(".mobile-menu")
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart")
const aside = document.querySelector("#shopingCartContainer")

let cardContainer = document.querySelector(".cards-container");


menuEmail.addEventListener("click" , toogleDesktopMenu)

burguerButton.addEventListener("click", tooglemobileMenu);

menuCarritoIcon.addEventListener("click", toogleCarritoAside);


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
    /* el toogle permite quitar o poner el elemento, si esta lo quitara. y si no esta lo colocara */
    descktopMenu.classList.toggle("inactive")

    aside.classList.add("inactive")
}






let productList = []

productList.push ({
    name:'Bike',
    price: 12700,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1200,
    image: 'https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1600,
    image: 'https://m.media-amazon.com/images/I/61eExL-rIAL._AC_SL1001_.jpg'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1500,
    image: 'https://assets.specialized.com/i/specialized/60822-140_HLMT_CHAMONIX-HLMT-MIPS-CE-MRN-M-L_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});
productList.push ({
    name:'Seat',
    price: 300,
    image: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg'
});
productList.push ({
    name:'Tennis Montain Bike',
    price: 2200,
    image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg'
});
productList.push ({
    name:'Sunglasses',
    price: 800,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602'
});
productList.push ({
    name:'Sunglasses',
    price: 600,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/siroko-tech-k3s-clearfog-lente-antiniebla-frontal/1200x/crop_center.jpg?v=1635209603'
});
productList.push ({
    name:'Bicycle seat bag',
    price: 876,
    image: 'https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg'
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
        console.log("producto");
        let producto = document.createElement("div");
        producto.classList.add("product-card")
    
        let imgProduct = document.createElement("img");
        imgProduct.setAttribute("src", product.image);
        imgProduct.addEventListener("click", console.log )
    
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


showProduct(productList)

