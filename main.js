const menuEmail = document.querySelector('.navbar-email');
const desktop = document.querySelector('.desktop-menu');
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");
const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cardsContainer = document.querySelector('.cards-container');

//toggleDesktopMenu
menuEmail.addEventListener('click',()=>{
    const isAsideClosed = aside.classList.contains('inactive');

    // si queremos abir el desktop y el aside esta abierto, cerramos el aside
    if(!isAsideClosed){
       aside.classList.add('inactive') 
    }

    desktop.classList.toggle('inactive');
});


//toggleMenuMobile
burguerMenu.addEventListener('click',()=>{
    const isAsideClosed = aside.classList.contains('inactive');

    // si queremos abir el menu mobile y el aside esta abierto, cerramos el aside
    if(!isAsideClosed){
       aside.classList.add('inactive') 
    }


    mobileMenu.classList.toggle('inactive');
});


//togleAside-carrito
menuCarritoIcon.addEventListener('click',()=>{
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopClosed = desktop.classList.contains('inactive');
    
    // si queremos abrir el carrito/aside y el menu mobile esta abierto, cerramos el menu mobile
        if(!isMobileMenuClosed){
            mobileMenu.classList.add('inactive') 
        }

    // si queremos abrir el carrito/aside y el desktop esta abierto, cerramos el desktop
    if(!isDesktopClosed){
        desktop.classList.add('inactive') 
    }
   
        aside.classList.toggle('inactive')

    
});

const productList = [];
// metodo push, agrega al array
productList.push({
  name: "Bike",
  price: 120,
  img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Monitor",
  price: 200,
  img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Placa de video",
  price: 500,
  img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
}); 
productList.push({
  name: "Bike",
  price: 120,
  img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Monitor",
  price: 200,
  img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Placa de video",
  price: 500,
  img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
}); 

function renderProducts(arr){
    for (product of arr){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.img);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');
    const productPrice = document.createElement('p');
    const productName = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    productName.innerText = product.name;
    productInfoDiv.append(productPrice, productName);
    

    const productInfoFigure = document.createElement('figure');
    const productFigureImg = document.createElement('img');
    productFigureImg.setAttribute('src', './icons/bt_add_to_cart.svg');
    productInfoFigure.appendChild(productFigureImg);

    
    
    
    productInfo.append(productInfoDiv,productInfoFigure);

    
    productCard.append(productImg,productInfo);

    cardsContainer.appendChild(productCard);
  };
}
  
renderProducts(productList);