const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHam = document.querySelector('.mobile-menu');
const menuHamIcon = document.querySelector('.menu');
const carIcon = document.querySelector('.navbar-shopping-cart');
const menuCar = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');
const asideContainer = document.querySelector('.product-detail1');
const asideXIcon = document.querySelector('.product-detail-close');


//menuEmail.addEventListener('click',toggleDesktopMenu);

// function toggleDesktopMenu(){ 
//     var toggle = desktopMenu.classList.contains("inactive");
//    if (toggle){
//     desktopMenu.classList.remove("inactive");
//    }else if(!toggle){
//     desktopMenu.classList.add("inactive");
//    }  
// }

//Solucion profesor

menuEmail.addEventListener('click',toggleProfesor);

function toggleProfesor() {
    const menuCarcheck = menuCar.classList.contains('inactive');
    const asideContainery = asideContainer.classList.contains('inactive');

    if(!asideContainery){
        asideContainer.classList.add('inactive');
    }
    if(!menuCarcheck){        
        menuCar.classList.add('inactive');
    }


    desktopMenu.classList.toggle('inactive');

}


menuHamIcon.addEventListener('click',inactiveHamMenu);

function inactiveHamMenu() {   
    const menuCarcheck = menuCar.classList.contains('inactive');
    const asideContainery = asideContainer.classList.contains('inactive');

    if(!asideContainery){
        asideContainer.classList.add('inactive');   
    }
     

    if(!menuCarcheck){

        menuCar.classList.add('inactive');

    }   
    
    menuHam.classList.toggle('inactive');
}

carIcon.addEventListener('click', carMenuActive);

function carMenuActive(){
    const menuHamcheck = menuHam.classList.contains('inactive'); 
    const isdesktopMenuOpend = desktopMenu.classList.contains('inactive');
    const asideContainery = asideContainer.classList.contains('inactive');

    if(!asideContainery){
        asideContainer.classList.add('inactive');   
    }
    if(!menuHamcheck){
        menuHam.classList.add('inactive');
    }
    if(!isdesktopMenuOpend){
        console.log('Que verga');
        desktopMenu.classList.add('inactive');
    }  

    menuCar.classList.toggle('inactive');        
}



const producList = [];

producList.push({
    name: 'Bicke',
    price: '120',
    img : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

});
producList.push({
    name: 'Cucush',
    price: '500',
    img : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

});
producList.push({
    name: 'Santamarta Haze',
    price: '200',
    img : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

});

//ESTO ES MUY IMPORTANTE CUCHO !!!!
//Recorre el array completo e imprime cada una de las categorias en esta caso name

// for (product of producList){ 
//     console.log(product.name) ;
// }
// //Imprime el numero de indice uno x 1

// for (product in producList){ 
//     console.log(product);
// }
//////////////////////////////////////////////////////////////////////////////////
// Escribiendo html desde js 

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
</section> */

/*
--Primero se crean las variables y la estructura del html 
--Segundo Se llenan los contenidos de las etiqueras creadas haciendo uso de innerhtml / Inner Text usando product of prodructKing
--Tercero Se organizan las herarquias que cada uno de los padres y todo este proceso se Inicia en efecto espejo de abajo para arriba pero teniendo en cuenta el orden de lectura. 
--Crear en las variables globales la parte de html al cual queremos insertarle el js creado 
*/

/*for (product of producList){

  const productCard = document.createElement('div');
  productCard.classList.add('product-card');
*/
//Product es = {name,price,img};
//   const imgCard = document.createElement('img');
//   imgCard.setAttribute('src',product.img);  

//   const prodctInfo = document.createElement('div');
//   prodctInfo.classList.add('product-info');

//   const divContainerInfo = document.createElement('div');  

//   const pPrice = document.createElement('p');
//   pPrice.innerText = '$' + product.price;
//   const pName = document.createElement('p');
//   pName.innerText = product.name;
//   divContainerInfo.appendChild(pPrice);
//   divContainerInfo.appendChild(pName);  

//   const figure = document.createElement('figure');
//   const imgBottonCard = document.createElement('img');
//   imgBottonCard.setAttribute('src', './icons/bt_add_to_cart.svg');

//   figure.appendChild(imgBottonCard);
//   prodctInfo.appendChild(divContainerInfo);
//   prodctInfo.appendChild(figure);


//   productCard.appendChild(imgCard);
//   productCard.appendChild(prodctInfo);  

//   cardsContainer.appendChild(productCard);
// }

 // Modo funcion

 function renderProducts(arr) {
    
    for (product of arr){

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
      
      //Product es = {name,price,img};
        const imgCard = document.createElement('img');
        imgCard.setAttribute('src',product.img);   
        imgCard.addEventListener('click', openProductAside);  //No requiere de () el console porque esta dentro del addEvenetlisener.   
      
      
        const prodctInfo = document.createElement('div');
        prodctInfo.classList.add('product-info');
      
        const divContainerInfo = document.createElement('div');  
      
        const pPrice = document.createElement('p');
        pPrice.innerText = '$' + product.price;
        const pName = document.createElement('p');
        pName.innerText = product.name;
        divContainerInfo.appendChild(pPrice);
        divContainerInfo.appendChild(pName);  
      
        const figure = document.createElement('figure');
        const imgBottonCard = document.createElement('img');
        imgBottonCard.setAttribute('src', './icons/bt_add_to_cart.svg');
        
      
        figure.appendChild(imgBottonCard);
        prodctInfo.appendChild(divContainerInfo);
        prodctInfo.appendChild(figure);
      
      
        productCard.appendChild(imgCard);
        productCard.appendChild(prodctInfo);  
      
        cardsContainer.appendChild(productCard);
    }

 }

 renderProducts(producList); 
 

 //Asaid de Product detail 1 
 

 asideXIcon.addEventListener('click', asaidMenuActive); 

function asaidMenuActive(){
   
    const asideContainery = asideContainer.classList.contains('inactive');      
    
    // if(asideContainery){
    //     asideContainer.classList.add('inactive');
    // }  

    asideContainer.classList.toggle('inactive');        
}

function openProductAside (){
    const desktopMenuCheker = desktopMenu.classList.contains('inactive');
    const isCarOpened = menuCar.classList.contains('inactive');

    if(!desktopMenuCheker){
        desktopMenu.classList.add('inactive');

    }
    if(!isCarOpened){
        menuCar.classList.add('inactive');
    }
    asideContainer.classList.remove('inactive');
    
}


