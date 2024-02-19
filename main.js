const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu-Icon');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

/*******Escuchando eventos con JS****** */
menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toggleCarritoAside);


/*******Funciones de los eventos Listener con JS****** */
function toggleDesktopMenu(){
  /*Aquí se implementa la función para que aparezca o no
  el menú a la derecha */
  //console.log('click');
  desktopMenu.classList.toggle('inactive'); //como se llamó la clase en el archivo javascript y se adicionó en el HTML
  /*classList es una forma práctica de acceder a la lista de CLASES de un elemento element.classList */
}

function toggleMobileMenu(){
  //console.log('click');
  const isAsideClosed =  aside.classList.contains('inactive');
  if (!isAsideClosed) {
    aside.classList.add('inactive');  
  } 
  mobileMenu.classList.toggle('inactive'); //como se llamó la clase en el archivo javascript y se adicionó en el HTML
   /*classList es una forma práctica de acceder a la lista de CLASES de un elemento element.classList */
}

function toggleCarritoAside(){
  //console.log('click');
  const isMobileMenuClosed =  mobileMenu.classList.contains('inactive');
  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive');  
  }  
  aside.classList.toggle('inactive'); //como se llamó la clase en el archivo javascript y se adicionó en el HTML
   /*classList es una forma práctica de acceder a la lista de CLASES de un elemento element.classList */
}

/*<!-- <div class="product-card">
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
      </div> -->
*/


/*******Manipulación del DOM con JS****** */
/*crea un vector de objetos */
const productList = [];
productList.push({
  name : 'Bike',
  price : 120,
  image : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name : 'Bike',
  price : 120,
  image : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name : 'Bike',
  price : 120,
  image : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name : 'Bike',
  price : 120,
  image : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name : 'Bike',
  price : 120,
  image : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name : 'Bike',
  price : 120,
  image : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

/*recorre el vector */
function renderProducts(arr){
  for (product of productList){
    /*crea un nodo o elemento HTML y agrega una clase*/
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    
    /*crea un nodo o elemento HTML y asigna su atributo*/
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);

    /*crea un nodo o elemento HTML y agrega una clase*/
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    /*crea un nodo o elemento HTML y agrega texto*/
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' +  product.price;

    /*crea un nodo o elemento HTML y agrega texto*/
    const productName = document.createElement('p');
    productName.innerText = product.name;

    /*agrega un nodo o elemento como último hijo de un elemento. */
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    /*crea un nodo o elemento HTML y asigna su atributo*/
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

    /*agrega un nodo o elemento como último hijo de un elemento. */
    productInfoFigure.appendChild(productImgCart);

    /*agrega un nodo o elemento como último hijo de un elemento. */
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
  }
}

/*Llama la función y pasa como parámetro el array */
renderProducts(productList);

console.log('funcionando');
