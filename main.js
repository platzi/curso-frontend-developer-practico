const menuEmail =document.querySelector('.navbar-email');
const desktopMenu =document.querySelector('.desktop-menu');
const menuHamIcon =document.querySelector('.menu');
const mobileMenu =document.querySelector('.mobile-menu');
const menuCarritoIcon= document.querySelector('.navbar-shopping-cart');

const productDetailCloseIcon =document.querySelector('.product-detail-close');

const shoppingCartContainer= document.querySelector('#shoppingCartContainer');
const cardsContainer=document.querySelector('.cards-container')

const productDetailContainer=document.querySelector('#productDetail');


menuEmail.addEventListener('click',toggleDesktopMenu)

menuHamIcon.addEventListener('click',toggleMobileMenu)

menuCarritoIcon.addEventListener('click',toggleCarritoAside)


/*escucho cuando aprieta la x del detalle de producto*/
productDetailCloseIcon.addEventListener('click',closeProductDetailAside);

/*hago aparecer el menu de detalle de producto sacandole la clase inactive*/
function openProductDetailAside(){
/*siempre que tengamos el detalle de producto abierto cerramos todo lo otro*/

    
    shoppingCartContainer.classList.add('inactive');


    productDetailContainer.classList.remove('inactive');

    




};


function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');

}





function toggleMobileMenu(){
    const isAsideCLosed=shoppingCartContainer.classList.contains('inactive');

    //desktopMenu.append(inactive);
    //obileMenu.classList.toggle('inactive');



    if (!isAsideCLosed) {
        shoppingCartContainer.classList.add('inactive');
    }

    closeProductDetailAside();

    mobileMenu.classList.toggle('inactive');

    }



function toggleDesktopMenu(){

//desktopMenu.append(inactive);
desktopMenu.classList.toggle('inactive');

}




function toggleCarritoAside(){
//Cuando abrimos el carrito cerramos el menu movile siempre con la primera expresion
    const isMobileMenuCLosed=mobileMenu.classList.contains('inactive');
//si el menu movile esta abierto se mantiene cerrado
    if (!isMobileMenuCLosed) {
        mobileMenu.classList.add('inactive');
    }
//Cuando abrimos el product carrito de compras cerramos el product detail :me fijo si esta inactivo 
const isproductDetailAsideClosed=productDetailContainer.classList.contains('inactive');
//si esta inactivo 
    if (!isproductDetailAsideClosed) {
        productDetailContainer.classList.add('inactive');
    }





    shoppingCartContainer.classList.toggle('inactive');
    }



//We are going to create an array with the products and not write
//them in the HTML

/*
<div class="product-card">
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
      </div>

       */



const productList=[];
productList.push({
    name: 'Bike',
    price: 120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'zapatos',
    price: 50,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'pepas rancias',
    price: 30,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

//creo una funcion para encapsular toda la funcionalidad

function renderProducts(arr) {
for (product of arr){
   const productCard= document.createElement('div');
   productCard.classList.add('product-card');
  
  //product={name,price,img}-->product.image
   const productImg = document.createElement('img');
   //seteo la propiedad src (source) con el atributo imagen del
   //objeto producto que cree anteriormente
   productImg.setAttribute('src',product.image)

   /* Agrego el eventListener porque es un elemento htm credo desde javascript y tiene los mismos atributos que cualquier otro. Le agrego la capacidad de abrirse cuando apreto el boton*/

   productImg.addEventListener('click',openProductDetailAside);


   const productInfo = document.createElement('div');
   //Le agrego la clase product info que fue creada en el html
   //original 
   //Agrego el div vacio

    const productInfoDiv=document.createElement('div');

    const productPrice =document.createElement('p');
    productPrice.innerText= '$ '+ product.price;
    const productName =document.createElement('p');
    productName.innerText= '$ '+ product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);


    const productInfoFigure=document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv,productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
    
    cardsContainer.appendChild(productCard);
}
}

renderProducts(productList);

//comentar esto en el gitubbbbbb