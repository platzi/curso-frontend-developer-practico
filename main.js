
const mail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

mail.addEventListener("click", toggleDesktoMenu);

function toggleDesktoMenu(){
    desktopMenu.classList.toggle("inactive");
    menuBurger.classList.add("inactive");
    carrito.classList.add("inactive");
    itemDetail.classList.add("inactive");
}

const iconBurger = document.querySelector(".menu");
const menuBurger = document.querySelector(".mobile-menu");

iconBurger.addEventListener("click", ocultar);

function ocultar(){
    menuBurger.classList.toggle("inactive");
    carrito.classList.add("inactive");
    desktopMenu.classList.add("inactive");
    itemDetail.classList.add("inactive");
}

const navBarShopCar = document.querySelector(".navbar-shopping-cart");
const carrito = document.querySelector(".product-detail");


navBarShopCar.addEventListener("click", ocultarCarrito);

function ocultarCarrito(){
    carrito.classList.toggle("inactive");
    menuBurger.classList.add("inactive");
    desktopMenu.classList.add("inactive");
    itemDetail.classList.add("inactive");
}




const productList = [];

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
    name:'Sleeves',
    price: 1200,
    image: 'https://i5.walmartimages.com/asr/12f82db1-493a-42bf-ae5a-e8ceaf16708d_1.73028198a02b2c4c7e6dea2287c72190.jpeg'
});
productList.push ({
    name:'Bike Lights',
    price: 1400,
    image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQKTvAm4SSn4qIBRB95xlsvjgm3GpwUMaHBLy5lN0ZT47_g-MPhnt4TQ_9cY34UQCf37UX1k3uriquIUfcwxXtTWIlKOT4xEwWr3dVKbbsBI_R-SgKvVmek&usqp=CAE'
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

productList.push ({
    name:'Bike',
    price: 12700,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push ({
    name:'Sleeves',
    price: 1200,
    image: 'https://i5.walmartimages.com/asr/12f82db1-493a-42bf-ae5a-e8ceaf16708d_1.73028198a02b2c4c7e6dea2287c72190.jpeg'
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
var i = 0;
for (product of productList){

    const cardsContainer = document.querySelector(".cards-container");

    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.classList.add("imgBig");

//con este ID identifico el indice del producto.
    productCard.setAttribute("id", i++);
    cardsContainer.appendChild(productCard);

    const imgProduct = document.createElement("img");
    imgProduct.setAttribute("src", product.image);
    productCard.appendChild(imgProduct);
    imgProduct.setAttribute("class", "imgBig");

    /*------------------*/

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");
    productCard.appendChild(productInfo);

    /*----------------------*/

    const productInfoDiv = document.createElement("div");
    productInfo.appendChild(productInfoDiv);

    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;
    productInfoDiv.appendChild(productPrice);

    const productName = document.createElement("p");
    productName.innerText = product.name;

    productInfoDiv.appendChild(productName);

    /*----------------------*/
    const productInfoFigure = document.createElement("figure");
    productInfo.appendChild(productInfoFigure);

    const productInfoImg = document.createElement("img");
    productInfoImg.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productInfoFigure.appendChild(productInfoImg);

}

const productImg = document.querySelectorAll(".product-card .imgBig");
const itemDetail = document.querySelector(".item-detail");

function selectObject(event){
    const indexItem = event.target.parentNode.id;
    const imgChange = document.querySelector(".imgItem");
    imgChange.setAttribute("src", productList[indexItem]["image"]);

    const priceChange = document.querySelector(".item-info p:nth-child(1)");
    priceChange.innerText = productList[indexItem]["price"];

    const nameChange = document.querySelector(".item-info p:nth-child(2)");
    nameChange.innerText = productList[indexItem]["name"];
}
productImg.forEach(function(elemento){
    elemento.addEventListener("click", selectObject);
});

function ocultarItemDetail(){

    itemDetail.classList.remove("inactive");
    carrito.classList.add("inactive");
    menuBurger.classList.add("inactive");
    desktopMenu.classList.add("inactive");

}

function cerrarItemDetail(){

    itemDetail.classList.add("inactive");
    carrito.classList.add("inactive");
    menuBurger.classList.add("inactive");
    desktopMenu.classList.add("inactive");

}

productImg.forEach(function(elemento){
    elemento.addEventListener("click", ocultarItemDetail);
});

const xButton = document.querySelector(".item-detail-close");

xButton.addEventListener("click", cerrarItemDetail);



