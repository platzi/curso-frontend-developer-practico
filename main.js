const menuEmail = document.querySelector('.navbar-email'); //donde debo dar click
const deskopMenu = document.querySelector('.desktop-menu'); // donde quiero que cambie con el click
const menuMobile = document.querySelector('.menu');
const movileMenu = document.querySelector('.mobile-menu');
const menuDeskopCart = document.querySelector('.navbar-shopping-cart');
const cartMenu = document.querySelector('.cart');//recordar que tiene que llevar el punto por que son clases si fuera ID seria numeral y si fuera etiquete nada
const cardsContainer = document.querySelector('.cards-container');
const cardDetail = document.querySelector('.card');//cambiar si se muestra o no la ventana
const closeCardDetail = document.querySelector('.product-detail-close');//escuchar el clik en la X
//const cardClickDetail = document.querySelector('.card')


// selecionamos nuestro main container. 
const mainContainer = document.querySelector(".cards-container");

menuEmail.addEventListener ('click',toggleDeskotMenu);
menuMobile.addEventListener ('click',toggleMobileMenu);
menuDeskopCart.addEventListener ('click',toggleDeskopCar);
//closeCardDetail.addEventListener ('click',closeDetailCard);


function toggleDeskotMenu () {
  deskopMenu.classList.toggle('inactive');
  cartMenu.classList.add('inactive');
  cardDetail.classList.add('inactive');
};


function toggleMobileMenu () {
  movileMenu.classList.toggle('inactive');
  cartMenu.classList.add('inactive');
  cardDetail.classList.add('inactive');
  };

function toggleDeskopCar () {

  cartMenu.classList.toggle('inactive');
  movileMenu.classList.add('inactive');
  deskopMenu.classList.add('inactive');
  cardDetail.classList.add('inactive');
}

function openDetailCard () {
  cardDetail.classList.remove('inactive');
  movileMenu.classList.add('inactive');
  deskopMenu.classList.add('inactive');
  cartMenu.classList.add('inactive');
  
}

function closeDetailCard () {
  cardDetail.classList.add('inactive');
  
}



const productList = [];
productList.push ({
  name: 'bike',
  price: 120,
  description: "bicycle, also called bike, two-wheeled steerable machine that is pedaled by the rider's feet",
  Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push ({
  name: 'motorbike',
  price: 1200,
  description: "A motorcycle is a two-wheeled vehicle with an engine. Motorcycles are bigger, heavier, and much faster than bicycles",
  Image: 'https://images.pexels.com/photos/5803142/pexels-photo-5803142.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push ({
  name: 'car',
  price: 6000,
  description: "A car is a vehicle that has wheels, carries a small number of passengers, and is moved by an engine or a motor",
  Image: 'https://images.pexels.com/photos/3686770/pexels-photo-3686770.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

  function renderProductos(arr) {
  
    for (product of productList) {
      //crear el div con el metodo create
      const productCard = document.createElement('div')
      // asignarle la clase
      productCard.classList.add('product-card')
      
      
      //product contiene {name, price, img} product.img
      const productImg =document.createElement('img')
      //agregar el link de la imagen
      productImg.setAttribute('src', product.Image)
      //escuchar el click de la imagen
      productImg.addEventListener('click',openDetailCard);
      

      
      //productImg.addEventListener('click',detailCard); se pretendia escuchar el click y que funcionara la funcion detailCard


      const productInfo = document.createElement('div');
      productInfo.classList.add('product-info');
    
      const productInfoDiv = document.createElement('div');
    
      const productPrice = document.createElement('p');
      productPrice.innerText = '$' + product.price;
    
     
      const productName = document.createElement('p');
      productName.innerText = product.name;

      //meter los datos de precios y nombre en el div
      productInfoDiv.appendChild(productPrice);
      productInfoDiv.appendChild(productName);  
    
      const productInfoFigure = document.createElement('figure');
      const productImgCard = document.createElement('img');
      productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg')
      //meter la imagen dentro del figure
      productInfoFigure.appendChild(productImgCard);
    
      
      //meter productinfodiv y productinfofigure en el productinfo
      productInfo.appendChild(productInfoDiv)
      productInfo.appendChild(productInfoFigure)
    
    
      productCard.appendChild(productImg)
      productCard.appendChild(productInfo)
      
      //meter productCards en el container
      cardsContainer.appendChild(productCard);

      
     
    }
  }

  renderProductos(productList);

  function detailCard () {
    
    /** 
   * ! descripcion card
   * 
   * 
   * 
   * */
    for (product of productList) {
      console.log("entro detail")
      
      /* const aside = document.createElement('aside');
      aside.classList.add("product-detail", "inactive");
      const containerDetail = document.querySelector("product-detail");
      containerDetail.append(aside);
      
      const asideProduct = document.createElement('aside');
      asideProduct.classList.add("product-detail", "aside", "card", "inactive");
      containerDetail = document.querySelector("product-detail")
      cardClickDetail.append(asideProduct);

      */
      

      
      const asideProduct = document.createElement('aside');
      asideProduct.classList.add("product-detail", "aside", "card");
      const cardClickDetail = document.querySelector(".card")
      

      const productDetail = document.createElement('div')
      productDetail.classList.add('product-detail-close')

      const closeDetailImg =document.createElement('img')
      closeDetailImg.setAttribute('src', "./icons/icon_close.png")
      productDetail.addEventListener('click',closeDetailCard)
       
      //meter closeDetailImg en el productDetail
      productDetail.appendChild(closeDetailImg);
    
      const productDetailInfo = document.createElement('div')
      productDetailInfo.classList.add('product-info')

      const productDetailImg = document.createElement('img');
      productDetailImg.setAttribute('src',product.Image);
      productDetailImg.addEventListener('click',openDetailCard);
      
      /* function() {
        
        console.log("escuucho click imagen")
      }); */

      const productDetailPrice = document.createElement('p');
      productDetailPrice.innerText = '$' + product.price;
  
      const productDetailName = document.createElement('p');
      productDetailName.innerText = product.name;

      const productDetailDescription = document.createElement('p');
      productDetailDescription.innerText = product.description;

    
    
      const productDetailButton = document.createElement('button');
      productDetailButton.classList.add('primary-button', 'add-to-cart-button')
      productDetailButton.append ("Add to cart");

      const buttonDetailImg =document.createElement('img')
      buttonDetailImg.setAttribute('src', "./icons/bt_add_to_cart.svg")

      productDetailButton.append(buttonDetailImg)

      productDetailInfo.append(productDetailPrice, productDetailName, productDetailDescription, productDetailButton);
      
      asideProduct.append(productDetail,productDetailImg ,productDetailInfo);
      cardClickDetail.append(asideProduct);
      
      productDetail.addEventListener('click', () => {
        console.log("entro arrow inactive")
        asideProduct.classList.add("inactive")
      });

      productDetailImg.addEventListener('click', () => {
        console.log("entro arrow active")
        asideProduct.classList.remove("inactive")
      });


    }
    
  
  }
  detailCard(productList)