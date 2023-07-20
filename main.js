const menuEmail       = document.querySelector('.navbar-email');       // Seleccionamos elemento de html 
const desktopMenu     = document.querySelector('.desktop-menu');       // Seleccionamos elemento de html para desactivar la propiedad del css inactive 
const menuHamIcon     = document.querySelector('.menu'); 
const mobileMenu      = document.querySelector('.mobile-menu'); 
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const menuCarrito     = document.querySelector('#shoppingCartContainer');
const cardsContainer  = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDescktopMenu);         //Seleccionamos la propiedad addEventListener para escucha cuando demos un click sobre el elemento
menuHamIcon.addEventListener('click',toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleShoppingCart);

// Los menus de toda la tienda
function toggleDescktopMenu(){
     const isMenuShoppingCartClose = menuCarrito.classList.toggle('inactive');

     if(!isMenuShoppingCartClose){
        menuCarrito.classList.add('inactive');
     }

     desktopMenu.classList.toggle('inactive');                  //se utiliza en JavaScript para agregar o quitar una clase específica de un elemento del DOM. Si la clase especificada está presente en el elemento, se quitará; de lo contrario, se agregará
}

function toggleMobileMenu(){
     const isMenuShoppingCartClose = menuCarrito.classList.toggle('inactive');

     if(!isMenuShoppingCartClose){
        menuCarrito.classList.add('inactive');
     }
     mobileMenu.classList.toggle('inactive');
}

function toggleShoppingCart(){
     const ismobileMenuClose  = mobileMenu.classList.toggle('inactive');
     const isDescktoMenuClose = desktopMenu.classList.toggle('inactive');

     if(!ismobileMenuClose){
        mobileMenu.classList.add('inactive');
     }
     
     if(!isDescktoMenuClose){
        desktopMenu.classList.add('inactive');
     }

     menuCarrito.classList.toggle('inactive');
}

// Lista de Productos

const productList = [];

productList.push({
   name: 'Bike',
   Price: 120,
   image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
   name: 'Phone',
   Price: 1000,
   image: 'https://images.unsplash.com/photo-1611791484670-ce19b801d192?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
});

productList.push({
   name: 'Computer',
   Price: 860,
   image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxhcHRvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
});

productList.push({
   name: 'Tv',
   Price: 500,
   image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHZ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
});

productList.push({
   name: 'Teclado',
   Price: 80,
   image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVjbGFkb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
});

productList.push({
   name: 'Barra de sonido',
   Price: 350,
   image: 'https://images.unsplash.com/photo-1605648916319-cf082f7524a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGJhcnJhJTIwZGUlMjBzb25pZG98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
});

function renderProducts(vecProduct){
   for(product of vecProduct){

      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
   
      const img = document.createElement('img');
      img.setAttribute('src', product.image);
   
      const productInfo = document.createElement('div');
      productInfo.classList.add('product-info')
   
      const productInfoDiv = document.createElement('div');
   
      const productPrice = document.createElement('p');
      productPrice.innerText = '$' + product.Price;
      const productName = document.createElement('p');
      productName.innerText = product.name;
   
      productInfoDiv.appendChild(productPrice); //cierra
      productInfoDiv.appendChild(productName);  //cierra
   
      const productInfoFigure = document.createElement('figure');
      const productImgCart = document.createElement('img');
      productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
   
      productInfoFigure.appendChild(productImgCart); // cierra
   
      productInfo.appendChild(productInfoDiv);  // cierra
      productInfo.appendChild(productInfoFigure);  // cierra
   
      productCard.appendChild(img); // cierra
      productCard.appendChild(productInfo);  // cierra
       
      cardsContainer.appendChild(productCard);  // cierra
   }
}

renderProducts(productList);

//