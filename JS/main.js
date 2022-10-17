const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarIcon = document.querySelector('.navbar-shopping-cart');
const menuHambungerIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

navEmail.addEventListener('click', toggleDesktopMenu);
menuHambungerIcon.addEventListener('click', toggleMobileMenu);
menuCarIcon.addEventListener('click', toggleCarAside);
menuHambungerIcon.addEventListener('click', toggleMobileMenu);



function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if(!isAsideClosed) {
        aside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');
    
    if(!isAsideClosed) {
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCarAside() {
    const ismobileMenuclosed = mobileMenu.classList.contains('inactive');
    const isAsideClosed = aside.classList.contains('inactive');
    
    if(!ismobileMenuclosed) {
        mobileMenu.classList.add('inactive');
    } else if (!isAsideClosed) {
        desktopMenu.classList.add('inactive')
    }
    
    aside.classList.toggle('inactive');
   
}

const productList = [];
productList.push({ 
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({ 
    name: 'iPhone',
    price: 800,
    image: 'https://www.citypng.com/public/uploads/preview/iphone-14-pro-and-max-deep-purple-png-11662587434zacaxkb4sd.png',
})
productList.push({ 
    name: 'MacBookPro',
    price: 2000,
    image: 'https://e7.pngegg.com/pngimages/918/793/png-clipart-macbook-pro-13-inch-macbook-air-laptop-macbook-gadget-electronics.png',
})



function renderProducts(arry) {
    for (const product of arry) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        const productImg = document.createElement("img")
        productImg.setAttribute('src', product.image);
      
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
      
        const productInfoDiv = document.createElement("div")
      
        const productPrice = document.createElement('p')
        productPrice.innerText = "$" + product.price;
        
        const productName = document.createElement('p')
        productName.innerText = product.name;
      
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
      
        const productInfoFigure = document.createElement("figuere")
        
        const productImgCard = document.createElement("img");
          productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');
          
      
          productInfoFigure.appendChild(productImgCard);
      
          productInfo.appendChild(productInfoDiv);
          productInfo.appendChild(productInfoFigure);
      
          productCard.appendChild(productImg);
          productCard.appendChild(productInfo);
      
          cardsContainer.appendChild(productCard);
      }
      
}

renderProducts(productList);