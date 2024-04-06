
const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu")//MENU EMAIL
const menuMobileIcon = document.querySelector('.menuMobileIcon');
const menuMobile = document.querySelector('.mobile-menu')
const cartShopping = document.querySelector(".navbar-shopping-cart")
const shoppingCartContainer = document.querySelector("#shoppingCartContainer")//MENU CARRITO
const cardsContainer = document.querySelector(".cards-container")
const productDetail = document.querySelector('#productDetail')
const productDetailClose = document.querySelector('.product-detail-close')

menuEmail.addEventListener("click",toggleDesktopMenu);
menuMobileIcon.addEventListener("click",toggleMenuMobile);
cartShopping.addEventListener('click',toggleProducDetail);
productDetailClose.addEventListener('click',closeProductDetail)




function toggleDesktopMenu () {
    if (shoppingCartContainer.classList.contains("active")){
        shoppingCartContainer.classList.add('inactive')
    }
    closeProductDetail ()
    desktopMenu.classList.toggle("inactive");
}

function toggleMenuMobile (){
    if (shoppingCartContainer.classList.contains("active")){
        shoppingCartContainer.classList.add('inactive')
    }
    closeProductDetail ()
    menuMobile.classList.toggle('inactive');
}

function toggleProducDetail (){
    if (desktopMenu.classList.contains("desktop-menu")){
        desktopMenu.classList.add('inactive')
    }
    if (menuMobile.classList.contains("mobile-menu")){
        menuMobile.classList.add("inactive")
    }
    closeProductDetail ()
        shoppingCartContainer.classList.toggle('inactive')
    
}

function openProductDetail (){

    if (desktopMenu.classList.contains("desktop-menu")){
        desktopMenu.classList.add('inactive')
    }
    if (shoppingCartContainer.classList.contains("active")){
        shoppingCartContainer.classList.add('inactive')
    }
    productDetail.classList.remove('inactive')
} 

function closeProductDetail (){
    productDetail.classList.add('inactive')
}



const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: 'car',
    price: 1200,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: 'Pantalla',
    price: 500,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: 'Celu',
    price: 325,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: 'Pelota',
    price: 12,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});


function renderProductList (arr){
    for (product of productList){
        /*CREAMOS LOS ELEMENTOS*/
        const divProductCard = document.createElement('div')
        divProductCard.classList.add('product-card')

        const imgCard = document.createElement('img')
        imgCard.setAttribute('src',product.image)
        imgCard.addEventListener('click',openProductDetail)

        const divProductInfo = document.createElement('div')
        divProductInfo.classList.add('product-info')

        const divDetail = document.createElement('div')

        const productPrice = document.createElement('p')
        productPrice.innerText = '$' + product.price

        const productName = document.createElement('p')
        productName.innerText = product.name

        const productInfoFigure = document.createElement('figure')

        const imgIcon = document.createElement('img')
        imgIcon.setAttribute('src','./icons/bt_add_to_cart.svg')
        

        /*IMGICON EN FIGURE*/
        productInfoFigure.appendChild(imgIcon)
        /*PRODUCTNAME Y PRODUCTPRICE EN EL DIV DETAILS*/
        divDetail.append(productPrice,productName)/*CON "APPEND" PUEDO AGREGAR VARIOS NODOS A LA VEZ*/
        /*divDetail.appendChild(productName)*/
        /*DIVDETAIL Y PRODUCTINFOFIGURE  A EL DIVPRODUCTINFO*/
        divProductInfo.append(divDetail,productInfoFigure)
        /*divProductInfo.appendChild(productInfoFigure)*/
        /*IMGCARD A DIVPRODUCTCARD*/
        divProductCard.appendChild(imgCard)
        /*DIVPRODUCTINFO A DIVPRODUCTCARD*/
        divProductCard.appendChild(divProductInfo)

        /*TODO ESTO A CARDSCONTAINER QUE ESTA EN HTML*/
        cardsContainer.appendChild(divProductCard)
    }
}
renderProductList (productList)
