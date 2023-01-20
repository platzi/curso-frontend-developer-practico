console.log("Hello, world!");

var navbar_email = document.querySelector(".navbar-email");
var desktop_menu = document.querySelector(".desktop-menu");
var menu_icon = document.querySelector(".menu");
var mobile_menu = document.querySelector(".mobile-menu");
var shopping_cart_icon = document.querySelector(".navbar-shopping-cart");
var shopping_detail = document.querySelector(".order-detail");
var cards_container = document.querySelector(".cards-container");
var product_detail = document.querySelector(".product-detail");
var product_detail_close_icon = document.querySelector(".product-detail-close");

var trigger_menus = {
    "navbar-email": desktop_menu,
    "menu": mobile_menu,
    "navbar-shopping-cart": shopping_detail,
    "product-card": product_detail
}

function click_menu(e) {
    toggle_menu(e.target);
}

function toggle_menu(element) {
    const srcElement = element.className;
    for (const trigger in trigger_menus) {
        (trigger != srcElement)? trigger_menus[trigger].classList.add("inactive"):trigger_menus[trigger].classList.toggle("inactive");
    }
}
navbar_email.addEventListener("click", click_menu);
menu_icon.addEventListener("click", click_menu);
shopping_cart_icon.addEventListener("click", click_menu);

function product_object (id, name, price, image, description) {
    this.id=id;
    this.name = name;
    this.price = price;
    this.image = image;
    this.description = description;
}

var product_list = [];

product_list.push(new product_object(1,"Bike", 250.00, "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"));
product_list.push(new product_object(2,"Computer", 1000.00, "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"));
product_list.push(new product_object(3,"Monitor", 150.00, "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"));

function renderProductCards (productList){
    for (product of productList) {
        let productCard = document.createElement("div");
        productCard.className = "product-card";
        productCard.setAttribute("data-id", product.id);

        let productImg = document.createElement("img");
        productImg.setAttribute('src', product.image);
        productImg.addEventListener("click", productClickHandler);
        productCard.appendChild(productImg);


        let productInfo = document.createElement("div");
        productInfo.className = "product-info";
        productCard.appendChild(productInfo);

        let productAttributes = document.createElement("div");
        productAttributes.className = "product-attributes";
        productInfo.appendChild(productAttributes);

        let productName = document.createElement("p");
        productName.innerText = product.name;
        productAttributes.appendChild(productName);

        let productPrice = document.createElement("p");
        productPrice.innerText = `$ ${product.price.toFixed(1)}`;
        productAttributes.appendChild(productPrice);

        let cartIconContainer = document.createElement("figure");
        let cartIconImg = document.createElement("img");
        cartIconImg.setAttribute('src', "./icons/bt_add_to_cart.svg");
        cartIconContainer.appendChild(cartIconImg);
        productInfo.appendChild(cartIconContainer);

        
        cards_container.appendChild(productCard);
    }
}    


renderProductCards(product_list);


function renderProductDetail(product_id) {
    let product = product_list.filter(product => product.id == product_id)[0];
    let product_image = document.querySelector('.product-detail #product-image');
    let product_price= document.querySelector('.product-detail #product-price');
    let product_name = document.querySelector('.product-detail #product-name');
    let product_description = document.querySelector('.product-detail #product-description');

    product_image.setAttribute('src', product.image)
    product_price.innerText = `$ ${product.price}`;
    product_name.innerText = product.name;
    product_description.innerText = 'babaabsdsakdjl kdjsa df';

}

function productClickHandler(e) {
    renderProductDetail(e.target.parentElement.getAttribute("data-id"));
    if (product_detail.classList.contains('inactive')) {
        toggle_menu(e.target.parentElement);
    }
}


product_detail_close_icon.addEventListener("click", closeProductDetail);
function closeProductDetail(e) {
    product_detail.classList.add('inactive');
}
