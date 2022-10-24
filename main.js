const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container')
// toggle: nombre intercambiar

menuEmail.addEventListener('click', toggleDesktopMenu);//cuando le demos click, queremos que muestres
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');//aside EstaCerrado si tiene la clase inactive
  
    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
  }
  
function toggleMobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');//aside Esta cerrado
  
    if (!isAsideClosed) {//si no esta cerrado
        shoppingCartContainer.classList.add('inactive'); //cierralo
    }
    mobileMenu.classList.toggle('inactive');//sino cambialo a inactive
  }
  
function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');//isMobileMenuClosed esta cerrado
    
    if (!isMobileMenuClosed) {
      mobileMenu.classList.add('inactive'); 
    }
    shoppingCartContainer.classList.toggle('inactive');
  }

const productList = [];
productList.push({
    name:'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name:'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name:'Compu',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',  
})




function renderProducts(arr){
    for(product of productList){ //de productlist osea el array
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        //product = {name,price,image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        //productInfo
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        //DivInfo
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');//p
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');//p
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);//p
        productInfoDiv.appendChild(productName);//p
        
        //Figure 
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
        
        productInfoFigure.appendChild(productImgCart);//imgCart
        //
        productInfo.appendChild(productInfoDiv);//Div Info
        productInfo.appendChild(productInfoFigure);//Figure
        //
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);