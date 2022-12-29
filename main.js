const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCardContainer = document.querySelector("#shoppingCardContainer");
const productDetailContainer = document.querySelector("#productDetail");
const productDetailClose = document.querySelector('.product-detail-close');
const cardsContainer = document.querySelector('.cards-container');
let numProduct = 20;

menuEmail.addEventListener("click", () => {
  const isshoppingCardContainerClosed = shoppingCardContainer.classList.contains("inactive");
  if (!isshoppingCardContainerClosed) {
    //si mobileMenu esta open, hay que cerrarlo
    shoppingCardContainer.classList.add("inactive");
  }
  const isProductDetailClosed = productDetailContainer.classList.contains("inactive");

  if (!isProductDetailClosed) {
    productDetailContainer.classList.add("inactive");
  }
  desktopMenu.classList.toggle("inactive");
});

menuHamIcon.addEventListener("click", () => {
  const isshoppingCardContainerClosed = shoppingCardContainer.classList.contains("inactive");
  if (!isshoppingCardContainerClosed) {
    //si mobileMenu esta open, hay que cerrarlo
    shoppingCardContainer.classList.add("inactive");
  }
  const isProductDetailClosed = productDetailContainer.classList.contains("inactive");

  if (!isProductDetailClosed) {
    productDetailContainer.classList.add("inactive");
  }
  mobileMenu.classList.toggle("inactive");
});

menuCarritoIcon.addEventListener("click", () => {
  const ismobileMenuClosed = mobileMenu.classList.contains("inactive");

  if (!ismobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }
  const isProductDetailClosed = productDetailContainer.classList.contains("inactive");

  if (!isProductDetailClosed) {
    productDetailContainer.classList.add("inactive");
  }
  shoppingCardContainer.classList.toggle("inactive");
});

productDetailClose.addEventListener('click', ()=>{
    productDetailContainer.classList.add('inactive');
})
const productList = [];

for (let i = 0; i < numProduct; i++) {
  productList.push({
    name: "Bike",
    price: "120",
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  });
}

const renderProducts = (arr)=>{
    for (product of arr){
        const productCard = document.createElement('div')
        productCard.classList.add('product-card');
    
        const img = document.createElement('img');
        img.setAttribute('src', product.image)
        productCard.appendChild(img)
        img.addEventListener('click', ()=>{
         shoppingCardContainer.classList.add('inactive')
         productDetailContainer.classList.remove('inactive');
        })

        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
        
        const productPrice = document.createElement('p');
        productPrice.innerText = '$'+ product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        const figure = document.createElement('figure');
        const imgIcon = document.createElement('img');
        imgIcon.setAttribute('src', './icons/bt_add_to_cart.svg');
        figure.appendChild(imgIcon)
        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productName)
        productInfoDiv.appendChild(productPrice)
        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(figure)
        productCard.appendChild(productInfo)
        cardsContainer.appendChild(productCard)
        
       
    }
}

renderProducts(productList);