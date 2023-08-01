// EN ESTE EJEMPLO RELIZAMOS UNA FUNCION COMO OCULTAR Y APARECER UN MENU UTILIZANDO UN NUEVO ELEMENTO (toggle) COMO VEMOS EN EL EJEMPLO TAMBIEN UTILIZAMOS (addEventListener)

const menuEmail = document.querySelector(`.navbar-email`);
const menuHamIcon = document.querySelector(`.menu`);
const menuCarrito = document.querySelector(`.navbar-shopping-cart`);
const desktopMenu = document.querySelector(`.desktop-menu`);
const mobileMenu = document.querySelector(`.mobile-menu`);
const shoppingCardContainer = document.querySelector(`#shoppingCardContainer`);
const cardsContainer = document.querySelector(`.cards-container`)


menuEmail.addEventListener(`click`, toggleDesktopMenu);
menuHamIcon.addEventListener(`click`, toggleMobileMenu);
menuCarrito.addEventListener(`click`, togglecarritoAside);

function toggleDesktopMenu() {
  const isAsaideMenuClosed = shoppingCardContainer.classList.contains(`inactive`);
  if (!isAsaideMenuClosed) {
    shoppingCardContainer.classList.add(`inactive`);
  }

  desktopMenu.classList.toggle(`inactive`);
}

function toggleMobileMenu() {
  const isAsaideMenuClosed = shoppingCardContainer.classList.contains(`inactive`);
  if (!isAsaideMenuClosed) {
    shoppingCardContainer.classList.add(`inactive`);
  }

  mobileMenu.classList.toggle(`inactive`);
}

function togglecarritoAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains(`inactive`);
  if (!isMobileMenuClosed) {
    mobileMenu.classList.add(`inactive`);
  }

  shoppingCardContainer.classList.toggle(`inactive`);
}


const productList = [];
    productList.push({
        name: `Bike`,
        price: 120,
        image: `https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
    });

    productList.push({
        name: `Patines`,
        price: 20,
        image: `https://images.pexels.com/photos/2005992/pexels-photo-2005992.jpeg?auto=compress&cs=tinysrgb&w=300`,
    });

    productList.push({
        name: `Patineta`,
        price: 85,
        image: `https://images.pexels.com/photos/16019615/pexels-photo-16019615/free-photo-of-patinaje.jpeg?auto=compress&cs=tinysrgb&w=300`,
    });

    function renderProdructs(arr){
        for (product of productList) {
            const productCard = document.createElement(`div`);
            productCard.classList.add(`product-card`);
    
            const productImg = document.createElement(`img`);
            productImg.setAttribute(`src`, product.image);
    
            const productInfo = document.createElement(`div`);
            productInfo.classList.add(`product-info`);
    
            const productInfoDiv = document.createElement(`div`);
    
            const productPrice = document.createElement(`p`);
            productPrice.innerText = `$` + product.price;
    
            const productName = document.createElement(`p`);
            productName.innerText = product.name;
    
            productInfoDiv.appendChild(productPrice);
            productInfoDiv.appendChild(productName);
    
            const productInfoFigure = document.createElement(`figure`);
            const productImgCart = document.createElement(`img`);
            productImgCart.setAttribute(`src`, `./icons/bt_add_to_cart.svg`);
    
            productInfoFigure.appendChild(productImgCart);
    
            productInfo.appendChild(productInfoDiv);
            productInfo.appendChild(productInfoFigure);
    
            productCard.appendChild(productImg);
            productCard.appendChild(productInfo);
    
            cardsContainer.appendChild(productCard);
          
            
        }
    }
   
    renderProdructs(productList);