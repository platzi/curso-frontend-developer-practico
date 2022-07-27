// Menu hambuergesa
const burguerMenuButton = document.querySelector('.burguer-menu');
const mobileMenu = document.querySelector('.mobile-menu');

// Menú de cuenta
const menuAccountButton = document.querySelector('.navbar-email');
const menuEmail = document.querySelector('.account-menu');

// Carrito de compras
const shoppingCarButton = document.querySelector('.navbar-shopping-cart');
const shoppingCarMenu = document.querySelector('.product-detail');


// Funciones menus
function toggleMobileMenu() {
  const isShoppingMenuClosed = shoppingCarMenu.classList.contains('inactive');
  
  if( !isShoppingMenuClosed) {
    shoppingCarMenu.classList.toggle('inactive');
  }
  mobileMenu.classList.toggle('inactive');
}

function toggleAccountMenu() {
  const isShoppingMenuClosed = shoppingCarMenu.classList.contains('inactive')
  
  if (!isShoppingMenuClosed) {
    shoppingCarMenu.classList.toggle('inactive')
  }
  menuEmail.classList.toggle('inactive');
}

function toggleAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  const isAccountMenuClosed = menuEmail.classList.contains('.inactive');
  
  if ( !isMobileMenuClosed) {
    mobileMenu.classList.toggle('inactive');
  }
  if ( !isAccountMenuClosed ) {
    menuEmail.classList.add('inactive')
  }

  shoppingCarMenu.classList.toggle('inactive');
}


burguerMenuButton.addEventListener('click', toggleMobileMenu);
menuAccountButton.addEventListener('click', toggleAccountMenu);
shoppingCarButton.addEventListener('click', toggleAside);


// Lista de productos
const productList = [
  {
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  },
  {
    name: 'Earphones',
    price: 85,
    image: 'https://images.unsplash.com/photo-1599669454699-248893623440?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    name: 'Keyboard',
    price: 50,
    image: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
  },
  {
    name: 'Micro',
    price: 55,
    image: 'https://images.unsplash.com/photo-1521424159246-e4a66f267e4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Camera',
    price: 92,
    image: 'https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  }
]

const mainContainer = document.querySelector('.main-container');
const cardsContainer = document.createElement('div');
cardsContainer.classList.add('cards-container')



const renderProducts = (list)=> {

  list.forEach((product)=> {

    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    
    const productImage = document.createElement('img');
    productImage.src = product.image;
    
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
    
    const infoText = document.createElement('div');
    
    const infoPrice = document.createElement('p');
    infoPrice.textContent = `$${product.price}`;
    const infoTitle = document.createElement('p');
    infoTitle.textContent = product.name;
    
    const icon = document.createElement('figure');
    const iconImg = document.createElement('img');
    iconImg.src = './icons/bt_add_to_cart.svg';
    
    productCard.appendChild(productImage);
    productCard.appendChild(productInfo);
    
    productInfo.appendChild(infoText);
    infoText.appendChild(infoPrice);
    infoText.appendChild(infoTitle);
    
    productInfo.appendChild(icon);
    icon.appendChild(iconImg);
    
    cardsContainer.appendChild(productCard);
    
    })

    mainContainer.appendChild(cardsContainer)
}

renderProducts(productList)