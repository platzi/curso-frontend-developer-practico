const emailDesktop = document.querySelector(".navbar-email");
const menuDesktop = document.querySelector(".desktop-menu");
const menuHamburgerIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartIcon = document.querySelector(".navbar-shopping-cart");
const productDetail = document.querySelector(".product-detail");
const cardsContainer =document.querySelector(".cards-container");

emailDesktop.addEventListener("click", toggleMenuDesktop);
menuHamburgerIcon.addEventListener("click", toggleMenuMobile);
shoppingCartIcon.addEventListener("click", toggleShoppingCart);

function toggleMenuDesktop(){
    menuDesktop.classList.toggle("inactive");    
    productDetail.classList.add("inactive");
    mobileMenu.classList.add("inactive");
}

function toggleMenuMobile(){
    mobileMenu.classList.toggle("inactive");
    productDetail.classList.add("inactive");
    menuDesktop.classList.add("inactive");
}

function toggleShoppingCart(){
    productDetail.classList.toggle("inactive");
    menuDesktop.classList.add("inactive");
    mobileMenu.classList.add("inactive");
}

const productList = [];
productList.push({
        name: 'bike',
        price: 120,
        image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    });

productList.push({
        name: "Computadora",
        price: 1300,
        image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    });

productList.push({
        name: "Television",
        price: 11300,
        image: "https://images.pexels.com/photos/333984/pexels-photo-333984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    });
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
    
/*<div class="product-card">
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
</div>*/

function renderProducts(arr){
    for(product of arr){
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        const productImageCard = document.createElement("img");
        productImageCard.setAttribute("src", product.image);

        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");

        const divInfo = document.createElement("div");

        const productPrice = document.createElement("p");
        productPrice.innerHTML = "$"+product.price;
        const productName = document.createElement("p");
        productName.innerHTML = product.name;

        const productFigure = document.createElement("figure");

        const imageIconCart = document.createElement("img");
        imageIconCart.setAttribute("src","./icons/bt_add_to_cart.svg");

        productFigure.appendChild(imageIconCart);
        divInfo.appendChild(productName);
        divInfo.appendChild(productPrice);

        productInfo.appendChild(divInfo);
        productInfo.appendChild(productFigure);

        productCard.appendChild(productImageCard);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);