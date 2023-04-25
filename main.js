const menuEmail = document.querySelector(`.navbar-email`)
const desktopMenu = document.querySelector(`.desktop-menu`)
const menuCarritoIcon = document.querySelector(`.navbar-shopping-cart`)
const menuHamIcon = document.querySelector(`.menu`)
const mobileMenu = document.querySelector(`.mobile-menu`)
const aside = document.querySelector(`.product-detail`)
const cardsContainer = document.querySelector(`.cards-container`)


menuEmail.addEventListener(`click`, toggleDesktopMenu)
menuHamIcon.addEventListener(`click`, toggleMobileMenu)
menuCarritoIcon.addEventListener(`click`, toggleCarritoAside)

function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains(`inactive`);
    if (!isAsideClosed) {
        aside.classList.add(`inactive`);
    }
    desktopMenu.classList.toggle(`inactive`)
    
}

function toggleMobileMenu () {
    const isAsideClosed = aside.classList.contains(`inactive`);

    if (!isAsideClosed) {
        aside.classList.add(`inactive`);
    }
    mobileMenu.classList.toggle(`inactive`) 
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains(`inactive`);
    const isDesktopMenuClosed = desktopMenu.classList.contains(`inactive`);
    
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add(`inactive`);
    }
    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add(`inactive`);
    }
    
    aside.classList.toggle(`inactive`)
}

const productList = [];
productList.push({
    name: `Bike`,
    price: 120,
    image: `https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`
})

productList.push({
    name: `Pantalla`,
    price: 220,
    image: `https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`
})

productList.push({
    name: `Tv`,
    price: 650,
    image: `https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`
})

/* <div class="product-card">
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
      </div> */
      
function renderProducts(arr) {
    for(product of arr) {
        const productCard = document.createElement(`div`);
        productCard.classList.add(`product-card`);
    
        const productCardImage = document.createElement(`img`);
        productCardImage.setAttribute(`src`, product.image);
    
        const productCardInfo = document.createElement(`div`);
        productCardInfo.classList.add(`product-info`);
    
        const productCardDiv = document.createElement(`div`)
    
        const productCardPrice = document.createElement(`p`);
        productCardPrice.innerText = `$` + product.price;
    
        const productCardName = document.createElement(`p`);
        productCardName.innerText = product.name;
    
        productCardDiv.appendChild(productCardPrice);
        productCardDiv.appendChild(productCardName);
    
        const productFigure = document.createElement(`figure`);
        const productCardFigure = document.createElement(`img`);
        productCardFigure.setAttribute(`src`, `./icons/bt_add_to_cart.svg`);
    
        productFigure.appendChild(productCardFigure);
    
        productCardInfo.appendChild(productCardDiv);
        productCardInfo.appendChild(productFigure);
    
        productCard.appendChild(productCardImage);
        productCard.appendChild(productCardInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);


