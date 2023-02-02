const navEmail = document.querySelector('.navbar-email');
const deskMenu = document.querySelector('.desktop-menu');
const iconHambur = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const CarritoMenu = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');


navEmail.addEventListener('click', toggleDestopMenu); //para mostrar el munisito XD
iconHambur.addEventListener('click', toggleMobileMenu);
CarritoMenu.addEventListener('click', toggleCarritoAside)


//1eraFunction
function toggleDestopMenu(){
  //lo siguiente permite quitar o mostrar la clase inactive 
  
  deskMenu.classList.toggle('inactive');
  //En esta funcion si el aside esta abierto, mientras se ejecuta esya fucntion, hay que cerrarlo(el mobile me menu)
  const isAsideClosed = aside.classList.contains('inactive');
  mobileMenu.classList.toggle('inactive');

 if(!isAsideClosed){
    aside.classList.add('inactive');  
  }


}

//2daFunction
function toggleMobileMenu(){
  //En esta funcion si el aside esta abierto, mientras se ejecuta esya fucntion, hay que cerrarlo(el mobile me menu)
  const isAsideClosed = aside.classList.contains('inactive');
  mobileMenu.classList.toggle('inactive');

 if(!isAsideClosed){
    aside.classList.add('inactive');  
  }



}

//3eraFunction
function toggleCarritoAside(){
   //En esta funcion si el mobileMenu esta abierto, mientras se ejecuta esya fucntion, hay que cerrarlo(el mobileMenu menu)
  const isMobileClosed = mobileMenu.classList.contains('inactive');
   aside.classList.toggle('inactive');

    if(!isMobileClosed){
    mobileMenu.classList.add('inactive');  
    //Ademas si esta abierto el menu deskMenu se cerrara al iniciarce etsa function
    const desktopMenuClosed = deskMenu.classList.contains('inactive');

    if(!desktopMenuClosed){
      deskMenu.classList.add('inactive');
    }
    
  }
}

const productList = [];
productList.push({
  name:'Cerveza',
  price: 120,
  img: './icons/PtoFlash-1eraImg.png'
});
productList.push({
  name:'Coffee',
  price: 120,
  img: './icons/PtoFlash-1eraImg.png'
});
productList.push({
  name:'Cocteles',
  price: 120,
  img: './icons/PtoFlash-1eraImg.png'
});
productList.push({
  name:'Comida',
  price: 120,
  img: './icons/PtoFlash-1eraImg.png'
})

function renderFunction (abc){
  
for(product of productList){

  const productCard = document.createElement('div');
  productCard.classList.add('product-card');

  const productImg = document.createElement('img');
  //product = {name, price y image}
  productImg.setAttribute('src',product.img);
  const productInfo = document.createElement('div');
  productInfo.classList.add('product-info');



  const productInfoDiv = document.createElement('div');

  const productPrice = document.createElement('p');
  productPrice.innerText = '$' + product.price;
  const productName = document.createElement('p');
  productName.innerText = product.name;

  productInfoDiv.appendChild(productPrice);
  productInfoDiv.appendChild(productName);


  const productInfoFigure = document.createElement('Figure');
  const productImgCart = document.createElement('img');
  productImgCart.src ='./icons/bt_add_to_cart.svg';

 productInfoFigure.appendChild(productImgCart);

 productInfo.appendChild(productInfoDiv);
 productInfo.appendChild(productInfoFigure);

 productCard.appendChild(productImg);
 productCard.appendChild(productInfo);

 cardsContainer.appendChild(productCard);
 

}
}
renderFunction(productList);