const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarIcon = document.querySelector('.navbar-shopping-cart');
const menuHambungerIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');

navEmail.addEventListener('click', toggleDesktopMenu);
menuHambungerIcon.addEventListener('click', toggleMobileMenu);
menuCarIcon.addEventListener('click', toggleCarshoppingCartContainer);
menuHambungerIcon.addEventListener('click', toggleMobileMenu);



function toggleDesktopMenu() {
    const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isshoppingCartContainerClosed) {
        shoppingCartContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');
    
    if(!isshoppingCartContainerClosed) {
        shoppingCartContainer.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCarshoppingCartContainer() {
    const ismobileMenuclosed = mobileMenu.classList.contains('inactive');
    const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');
    
    if(!ismobileMenuclosed) {
        mobileMenu.classList.add('inactive');
    } else if (!isshoppingCartContainerClosed) {
        desktopMenu.classList.add('inactive')
    }
    
    shoppingCartContainer.classList.toggle('inactive');
   
}

const productList = [];
productList.push({ 
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({ 
    name: 'iPhones',
    price: 800,
    image: 'https://images.pexels.com/photos/9555099/pexels-photo-9555099.jpeg?auto=compress&cs=tinysrgb&w=600',
})
productList.push({ 
    name: 'MacBookPro',
    price: 2000,
    image: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
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
      
        const productInfoFigure = document.createElement("figure")
        
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