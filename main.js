const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burguerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCart = document.querySelector(".navbar-shopping-cart");
const sCartContainer = document.querySelector(".shopping-cart-container");
const cardsContainer = document.querySelector(".cards-container");
const productDetail = document.querySelector(".product-detail");
const productInfo = document.querySelector(".product-info");
const productDetailClose = document.querySelector(".product-detail-close");
let productDetailStatus = false;


navEmail.addEventListener('click',toggleMenuDesktop);
burguerMenu.addEventListener('click',toggleMobileDesktop);
shoppingCart.addEventListener('click',toggleShoppingCart);
productDetailClose.addEventListener('click',closeProductDetailAside);

function toggleMenuDesktop(){
    desktopMenu.classList.toggle('inactive');
    sCartContainer.classList.add('inactive');
}

function toggleMobileDesktop(){
    mobileMenu.classList.toggle('inactive');
    closeProductDetailAside();
    sCartContainer.classList.add('inactive');
}

function toggleShoppingCart(){
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    if(productDetailStatus) closeProductDetailAside();
    sCartContainer.classList.toggle('inactive');

}

const productList = [];
productList.push({
    name:'Bike',
    price:120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name:'Car',
    price:620,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name:'Smartphone',
    price:420,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name:'Smartphone',
    price:420,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

function openProductDetailAside(img,name,price){
    productDetail.childNodes[3].src = img;
    productInfo.childNodes[1].textContent = "$" + price;
    productInfo.childNodes[3].textContent = name;
    productDetailStatus = true;


    if(sCartContainer.classList.contains('inactive') == false) toggleShoppingCart();
    productDetail.classList.remove('inactive');
}

function closeProductDetailAside(){
    productDetail.classList.add('inactive');

    productDetailStatus = false;
}



function renderProducts(arr){
    for (product of arr){
        //containers
        const productCard = document.createElement('DIV');
        productCard.classList.add('product-card');
    
        const productInfo = document.createElement('DIV');
        productInfo.classList.add('product-info');
    
        const divPar = document.createElement('DIV');
        const figure = document.createElement('FIGURE');
    
        /*imgs*/
        const img = document.createElement('IMG');
        img.src = product.image;
        img.addEventListener('click', ()=>{
          openProductDetailAside(product.image,product.name,product.price);  
        })
    
        const imgAddToCart = document.createElement('IMG');
        imgAddToCart.src = "./icons/bt_add_to_cart.svg";
    
        /*paragraphs*/
        const price = document.createElement('P');
        price.textContent = `$${product.price}`;
        const name = document.createElement('P');
        name.textContent = product.name;
    
        //adding childs to parents
        figure.appendChild(imgAddToCart);
        divPar.append(price,name);
        productInfo.append(divPar,figure);
        productCard.append(img,productInfo);
        cardsContainer.appendChild(productCard);

    }
}

renderProducts(productList);

