const navEmail = document.querySelector("#nav-email");
const desktopMenu = document.querySelector(".desktop-menu");
const logoMenu = document.querySelector(".logo-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const logoCart = document.querySelector(".logo-cart");
const cartMenu = document.querySelector(".detail-product")
const mediaqueryListMobile = window.matchMedia("(max-width: 621px)");
const mediaqueryListDesktop = window.matchMedia("(max-width: 620px)");
const productList = [];
const cardsContainer = document.querySelector(".cards-container");
const detailproductAside = document.querySelector(".detail-droduct-aside");
const closedetailproduct = document.querySelector(".close-product");

mediaqueryListMobile.addListener(()=>{    
    desktopMenu.classList.add("inactive");
    mobileMenu.classList.add("inactive");
    cartMenu.classList.add("inactive");;
    detailproductAside.classList.add("inactive");
});
mediaqueryListDesktop.addListener(()=>{    
    desktopMenu.classList.add("inactive");
    mobileMenu.classList.add("inactive");
    cartMenu.classList.add("inactive");;
    detailproductAside.classList.add("inactive");
});
closedetailproduct.style.cursor = "pointer";

navEmail.addEventListener("click", showDesktopMenu);
logoMenu.addEventListener("click", showMobileMenu);
logoCart.addEventListener("click", showCartMenu);
closedetailproduct.addEventListener("click", closeDetailCard);

function showDesktopMenu() {
    desktopMenu.classList.toggle("inactive");
    cartMenu.classList.add("inactive");
    mobileMenu.classList.add("inactive");
    detailproductAside.classList.add("inactive");
}
function showMobileMenu() {
    mobileMenu.classList.toggle("inactive");
    desktopMenu.classList.add("inactive");
    cartMenu.classList.add("inactive");
    detailproductAside.classList.add("inactive");
}
function showCartMenu() {
    cartMenu.classList.toggle("inactive");
    desktopMenu.classList.add("inactive");
    mobileMenu.classList.add("inactive");
    detailproductAside.classList.add("inactive");
}

function openDetailCard() {
    detailproductAside.classList.remove("inactive");
    desktopMenu.classList.add("inactive");
    cartMenu.classList.add("inactive");
    mobileMenu.classList.add("inactive");
}
function closeDetailCard() {
    detailproductAside.classList.add("inactive");
}

productList.push(
    {name: 'bike', 
    price: '120', 
    image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},

    {name: 'cumputer', 
    price: '210', 
    image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},

    {name: 'display', 
    price: '400', 
    image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'});

    function renderProduct(arr) {
        
        for (product of arr){
            
            const productCardDiv = document.createElement("div");
            productCardDiv.classList.add("product-card");
            
            const imageCardDiv = document.createElement("div");
            imageCardDiv.classList.add("image-card");
            
            const imageCardImg = document.createElement("img");
            imageCardImg.setAttribute("src", product.image);
            imageCardImg.addEventListener("click", openDetailCard)
            
            const productInfDiv = document.createElement("div");
            productInfDiv.classList.add("product-info");
            
            const divInf = document.createElement("div");
            
            const priceInfP = document.createElement("p");
            priceInfP.innerText = "$" + product.price;
            const nameInfP = document.createElement("p");
            nameInfP.innerText = product.name;
        
            divInf.appendChild(priceInfP);
            divInf.appendChild(nameInfP);
            
            
            const figure = document.createElement("figure");
            
            const imageFigure = document.createElement("img")
            imageFigure.setAttribute("src", '/icons/bt_add_to_cart.svg')
            
            figure.appendChild(imageFigure);
        
            productInfDiv.appendChild(divInf);
            productInfDiv.appendChild(figure);
            imageCardDiv.appendChild(imageCardImg);
            productCardDiv.appendChild(imageCardDiv);
            productCardDiv.appendChild(productInfDiv);
            cardsContainer.appendChild(productCardDiv);
        
            
        }
    }

renderProduct(productList);
    