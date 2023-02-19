const mobileMenu = document.querySelector('.mobile-menu');
const menuHamIcon = document.querySelector('.menu');


const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu')

const menuCartIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');


const toggleMobileMenu = () => {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    
    if (!isAsideClosed) {
        shoppingCartContainer.classList.toggle('inactive');
    }
    
    mobileMenu.classList.toggle('inactive');
   
}

const toggleDesktopMenu = () => {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    if (!isAsideClosed) {
        shoppingCartContainer.classList.toggle('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

const toggleCartAside = () => {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
    
    shoppingCartContainer.classList.toggle('inactive');
}

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCartIcon.addEventListener('click', toggleCartAside);

const productList = [];

productList.push(
    { 
        // id: 1,
        name: 'SuperBike 1',
        price: 13000,
        // image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        image: "./media/superbike-01.jpg"
    },
    { 
        // id: 2,
        name: 'SuperBike 2',
        price: 12000,
        image: "./media/superbike-01.jpg"
    },
    { 
        // id: 3,
        name: 'SuperBike 3',
        price: 14000,
        image: "./media/superbike-01.jpg"
    },
);

const renderProducts= (productList) =>{
    for(let product of productList) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
        
    
    
        const productPrice = document.createElement('p');
        productPrice.innerText = `$ ${product.price}`;
        const productName = document.createElement('p');
        productName.innerText = product.name;
        
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList)

{/* <div class="product-card">
    <img
    src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    alt="">
    <div class="product-info">
    <div>
        <p>$120,00</p>
        <p>Bike</p>
    </div>
    <figure>
        <img src="./icons/bt_add_to_cart.svg" alt="">
    </figure>
    </div>
</div> */}
        
// const navbaremail = document.querySelector('.navbar-email')
// const deskmenu = document.querySelector('.desktop-menu')

// const emailClick = () => {
//     deskmenu.style.display = 'block';
// }
// navbaremail.addEventListener('click', emailClick);
