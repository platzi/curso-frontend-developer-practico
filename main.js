const menuEmail = document.querySelector('.navbar-email'); //al darle click al email aparece el menu desktop
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const carsContainer = document.querySelector('.cards-container')

menuHamIcon.addEventListener('click',toggleMobileMenu)

menuEmail.addEventListener('click',toggleDesktopMenu)

menuCarritoIcon.addEventListener('click',toggleCarritoAside);


function toggleDesktopMenu(){
    const isAsideClosed = aside.classList.contains('inactive');
    if (!isAsideClosed){
          aside.classList.add('inactive');
        }
    desktopMenu.classList.toggle('inactive');
    /*e agrega o quita la clase inactive de desktop-menu para mostrar o cerrar el menu desktop al dar click en el correo */ 
}

function toggleMobileMenu(){
   
   const isAsideClosed = aside.classList.contains('inactive');
if (!isAsideClosed){
      aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isMenudesktopClosed = desktopMenu.classList.contains('inactive');
    if (!isMobileMenuClosed){
      mobileMenu.classList.add('inactive');
    }
    //si el menu mobile esta abierto se cierra
    if (!isMenudesktopClosed){
        desktopMenu.classList.add('inactive');
      }
    aside.classList.toggle('inactive');

}

//para agregar los prodcutos de manera dinamica 
const productList = [];
productList.push({
  name:'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
  name:'Pc',
  price: 500,
  image: 'https://megaobzor.com/uploads/stories/169455/inf1.jpg'
})

productList.push({
  name:'Print',
  price: 250,
  image: 'https://www.provesersa.com/wp-content/uploads/2021/12/precio-regular-PIXMAG2160-BK_xl-6-min.jpg'
})


/*este codigo agrega automaticamente todos los productos que esten en una lista no importa la cantidad sean 1 o 10*/


function renderProducts(arr){
  for (product of arr ){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    const productImg = document.createElement('img');
    productImg.setAttribute('src',product.image);
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
  
    const productInfoDiv = document.createElement('div');
    const productPrice = document.createElement('p');
    productPrice.innerText = '$'+ product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;
  
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
  
  
    const productInfoFigure  = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
  
    productInfoFigure.appendChild(productImgCart);
  
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
  
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
    
    carsContainer.appendChild(productCard);
  }
}


renderProducts(productList);