const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuHamIcon= document.querySelector(".menu")
const mobileMenu= document.querySelector(".mobile-menu")
const menuCarritoIcon= document.querySelector(".navbar-shopping-cart")
const shoppingCardAside = document.querySelector("#shoppingCardAside")
const cardsContainer = document.querySelector(".cards-container")


menuEmail.addEventListener('click', toggleDesktopMenu)
menuHamIcon.addEventListener('click', toggleMobileMenu)
menuCarritoIcon.addEventListener('click', toggleCarritoAside)

function toggleDesktopMenu() {
    const isShoppingCardAsideClosed =shoppingCardAside.classList.contains('inactive');

  if (!isShoppingCardAsideClosed) {
    shoppingCardAside.classList.add('inactive'); 
  }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isShoppingCardAsideClosed = shoppingCardAside.classList.contains('inactive');

  if (!isShoppingCardAsideClosed) {
    shoppingCardAside.classList.add('inactive'); 
  }
  
  mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
    const isMobileMenuClose = mobileMenu.classList.contains('inactive');
    
    if (!isMobileMenuClose){
        mobileMenu.classList.add('inactive')
    }

    shoppingCardAside.classList.toggle('inactive')

}
   
const productList= [];

productList.push({
    name: 'Bike',
    price: 120,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"    
})
productList.push({
    name: 'pantalla',
    price: 200,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    })
productList.push({
    name: 'Celphone',
    price: 400,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"    
})
productList.push({
    name: 'laptop',
    price: 300,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"    
})
productList.push({
    name: 'Tv',
    price: 800,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"    
})
productList.push({
    name: 'bed',
    price: 1000,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"    
})

function renderProducts(arr){
        for(product of arr){

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.img);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p')
        productName.innerText = product.name;
    
        const productInfoFigure = document.createElement('figure');
        const productCartImg = document.createElement('img');
        productCartImg.setAttribute('src', './icons/bt_add_to_cart.svg')
    
        productInfoFigure.appendChild(productCartImg);
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard)
    
    
    }

}
// encapsulando el for en la función puedo decirle que reciba un parametro, con esto podemos reutilizar esta función  y llamarla con el array que me den

renderProducts(productList);

