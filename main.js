const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");//carrito de compra
const aside = document.querySelector(".product-detail");//carrito de compra

const cardsContainer = document.querySelector(`.cards-container`);


menuEmail.addEventListener("click", toggleDesktopMenu);

menuHamIcon.addEventListener("click", toggleMobileMenu);

menuCarritoIcon.addEventListener("click", toggleCarritoAside);



function toggleDesktopMenu() {
  const carritoClosod = aside.classList.contains('inactive');
  if(!carritoClosod){
    aside.classList.add('inactive');
  }
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  const isAsideClosed = aside.classList.contains('inactive');
  
  if(!isAsideClosed){
    aside.classList.add('inactive');
  } 
  
  mobileMenu.classList.toggle("inactive");
}

function toggleCarritoAside(){
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');//si no tiene la classe inactive

  const compuClosed = desktopMenu.classList.contains('inactive');

  if(!isMobileMenuClosed){
    mobileMenu.classList.add('inactive');
    return;
  }
  if (!compuClosed){
    desktopMenu.classList.add('inactive');
  }


  aside.classList.toggle('inactive');//agrega la clase
  
}

/* img-productos-------------- */
const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
  name: 'laptop',
  price: 220,
  image: 'https://images.unsplash.com/photo-1577375729152-4c8b5fcda381?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
})

productList.push({
  name:'mochila',
  price: 150,
  image:'https://images.unsplash.com/photo-1546938576-6e6a64f317cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
})
productList.push({
  name:'PlayStation',
  price: 80,
  image:'https://images.unsplash.com/photo-1632803227975-b6a5688c9c46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
})
productList.push({
  name:'Reloj',
  price: 300,
  image:'https://images.unsplash.com/photo-1549972574-8e3e1ed6a347?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
})
productList.push({
  name:'Pelota',
  price: 50,
  image:'https://images.unsplash.com/photo-1625187538367-6a8483a79cc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=893&q=80'
})
productList.push({
  name:'Bufanda',
  price: 90,
  image:'https://images.unsplash.com/photo-1623832101624-ecd47c803527?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
})
productList.push({
  name:'Sapatillas',
  price: 450,
  image:'https://images.unsplash.com/photo-1518894781321-630e638d0742?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
})

/*  <div class="product-card">
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
      </div>  */

function renderProducts(arr){
  for(product of arr){ 
    /* crear los elementos */
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
  
    const productInfoFigure = document.createElement('figure');
  
    const productImgCard = document.createElement('img');
    productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');
    
    /*agregar los elementos, agregar una etiqueta dentro de otra etiqueta*/
    productInfoFigure.appendChild(productImgCard);
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
  
    productInfo.appendChild(productInfoFigure);
    productInfo.appendChild(productInfoDiv);
  
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
  
    cardsContainer.appendChild(productCard);
  
  }
}
renderProducts(productList);