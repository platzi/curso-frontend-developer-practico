// Vector con productos
const productList= [
  
  {
      id:1,
      name:"Bike",
      category: 'Others',
      price:120,
      image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      desc:` Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus est minima nostrum voluptatibus nisi quis.`   
  },
  {
      id:2,
      name:'Bicycle Helmet',
      category: 'Others',
      price: 1600,
      image: 'https://m.media-amazon.com/images/I/61eExL-rIAL._AC_SL1001_.jpg',
      desc:` Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus est minima nostrum voluptatibus nisi quis.`   

  },
  {
      id:3,
      name:'Seat',
      category: 'Others',
      price: 300,
      image: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg',
      desc:` Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus est minima nostrum voluptatibus nisi quis.`   
      
  },
  {
    id:4,
    name: 'Gildan Mens Crew T-Shirts',
    category: 'Clothes',
    price: 19.89,
    image: 'https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/710o0VupScL._AC_UL320_.jpg',
    desc:` Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus est minima nostrum voluptatibus nisi quis.`   
}

  ,
  {
      id:5,
      name: 'Rokid Air AR',
      category: 'Electronics',
      price: 399.99,
      image: 'https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/518WFzR2kGL._AC_UY218_.jpg',
      desc:` Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus est minima nostrum voluptatibus nisi quis.`   
  },
  {
      id:6,
      name: 'Bocina Sound Link',
      category: 'Electronics',
      price: 89.99,
      image: 'https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61v+-9dV4PL._AC_UY218_.jpg',
      desc:` Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus est minima nostrum voluptatibus nisi quis.`   
  },
  {
      id:7,
      name: 'Juego de mesa de cocina de 5 piezas',
      category: 'Furnitures',
      price: 256.99,
      image: 'https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/813BJiM5DrL._AC_UL320_.jpg',
      desc:` Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus est minima nostrum voluptatibus nisi quis.`   
  },
  {
      id:8,
      name: 'HOOBRO Mesa auxiliar',
      category: 'Furnitures',
      price: 59.99,
      image: 'https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71Axy7YHLNL._AC_UL320_.jpg',
      desc:` Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus est minima nostrum voluptatibus nisi quis.`   
  },
  {
      id:9,
      name: 'Serie RC con licencia oficial',
      category: 'Toys',
      price: 32.99,
      image: 'https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71tICZPyOPL._AC_UL320_.jpg',
      desc:` Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus est minima nostrum voluptatibus nisi quis.`   
  },
  {
      id:10,
      name: 'Elmo',
      category: 'Toys',
      price: 7.49,
      image: 'https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71qqqhUGH3L._AC_UL320_.jpg',
      desc:` Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus est minima nostrum voluptatibus nisi quis.`   
  }
];

// Variables
const cardsContainer = document.querySelector(".cards-container"),
      navbarLeft = document.querySelector(".navbar-left-ul"),
      mobilMenu = document.querySelector(".mobile-menu-ul"),
      productDetailContainer = document.querySelector('#product-detail'),
      productDetailAside = document.querySelector('.product-info'),
      productInfoBtn = document.querySelector('.product-detail-info'),
      background = document.querySelector('.product-detail-background'),
      shoppingCart = document.querySelector('.my-order-content'),
      darkenScreen = document.querySelector(".dark")
      orderTotal = document.querySelector('#order__total');
let countItems = document.querySelector('#countItems'),
    countItemsCart =0,
    lastValue=0,
    arrayTotalPrice =[];

//Desplegar pag
window.addEventListener("DOMContentLoaded",function(){
displayProductList(productList);
displayMenuButtons();
});

// Desplegar products
function displayProductList(listItems) {
let displayProducts = listItems.map(function (item) {
  
  return `

  <div class="info-cards">
  <div class="product-card" >
  <img src=${item.image}  alt=${item.name} >
  <div class="product-info" >
    <div class= "info">
      <p class="price">$${item.price}</p>
      <p class="name">${item.name}</p>
    </div>
    <figure class = "btnAddToCart">
      <img src="./icons/bt_add_to_cart.svg" alt="add to cart" class= "product-add-to-cart" data-id=${item.id}>
    </figure>
  </div>
  </div>
  </div>`;

  });

  
  displayProducts = displayProducts.join("");
  cardsContainer.innerHTML = displayProducts;

  /*Mostrar aside e info al momento de dar click*/
  const productImg = cardsContainer.querySelectorAll('.info-cards');
  productImg.forEach(product=>{
    product.addEventListener("click",event=>{
      const url = event.target.src;
      listItems.filter(function (productItem){
        if(productItem.image === url){
          let aside = `
          <img src=${productItem.image} alt="${productItem.name}" class="image-detail">
          
            <div class="product-info">
              <p>$${productItem.price}</p>
              <p>${productItem.name}</p>
              <p>${productItem.desc}</p>
            </div> 
            <button class="primary-button add-to-cart-button btn-aside" data-id=${productItem.id}>
            <img src="./icons/bt_add_to_cart.svg" alt="add to cart" class="product-add-to-cart">
            Add to cart
          </button>
          
          `;
          productDetailAside.innerHTML=aside;
          // Activar el dark screen
          const active = productDetailContainer.classList.contains('inactive');
            if(active){
              darkenScreen.classList.remove('inactive')
            } else{
              darkenScreen.classList.add('inactive')
            }
            
          productDetailContainer.classList.remove("inactive");

          /* Agregar poriducto al carrito desde el aside*/

          const btnAddToCartAside =productDetailContainer.querySelector('.btn-aside');
          btnAddToCartAside.addEventListener('click',function(e){
            let idBtn=(e.target.dataset.id);
            productOrder (listItems, idBtn);
            countItemsCart++;
            countItems.innerText = countItemsCart;
          });
        } 
      });
    }); 
  });

  /*agregar producto desde la pagina principal */
  const btnAddToCart = cardsContainer.querySelectorAll('.btnAddToCart');
  btnAddToCart.forEach(btn=>{
    btn.addEventListener('click',event=>{
      const idBtn = event.target.dataset.id;
      productOrder(listItems,idBtn);
      countItemsCart++;
      countItems.innerText = countItemsCart;
      
    });
  });


} 

// desplegar las diferentes categorias
function displayMenuButtons() {
const categories = productList.reduce(
  function (values, item) {
    if (!values.includes(item.category)) {
      values.push(item.category);
    }
    return values;
  },
  ["All"]
);
const categoryBtns = categories
  .map(function (category) {
    return ` <li>
    <li>
    <a href="#" class="filter-btn" data-id="${category}">${category}</a>
  </li>`
  })
  .join("");

  navbarLeft.innerHTML = categoryBtns;
  mobilMenu.innerHTML = categoryBtns;

  /*Filtrar por categoría*/
const filterBtns = navbarLeft.querySelectorAll(".filter-btn");
const filterBtnsMb = mobilMenu.querySelectorAll(".filter-btn");
//console.log(filterBtns);

filterProducts(filterBtns);
filterProducts(filterBtnsMb);

function filterProducts(filter){
  filter.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      //console.log(e.currentTarget.dataset.id);
      
      //Guardar id de la categoria
      const category = e.currentTarget.dataset.id;
      const productCategory = productList.filter(function (productItem) {
       //console.log(productItem.category);
    
        if (productItem.category === category ) {
          aside.classList.add('inactive');
          productDetailContainer.classList.add("inactive");
          darkenScreen.classList.add("inactive");
          mobileMenu.classList.add('inactive');
          
          
          return productItem;
        }
      });
      if (category === "All") {
        mobileMenu.classList.add('inactive');
        displayProductList(productList);
      } else {
        displayProductList(productCategory);
      }
    });
  });
}
}



/*Email desktop*/
const desktopMenu = document.querySelector(".desktop-menu");
const navEmail = document.querySelector('.navbar-email');

navEmail.addEventListener('click',()=>{
      //console.log('navEmail clicked'); 
      if(!aside.classList.contains('inactive')|| !productDetailContainer.classList.contains('inactive')){
        aside.classList.add('inactive');
        productDetailContainer.classList.add('inactive');
        
      }
      const active = desktopMenu.classList.contains('inactive');
      darkScreen(active);
      desktopMenu.classList.toggle('inactive');
});

/*Desplegar menu mobil*/
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
menuHamIcon.addEventListener('click',()=>{
if(!aside.classList.contains('inactive')||!productDetailContainer.classList.contains('inactive')){
  aside.classList.add('inactive');
  productDetailContainer.classList.add('inactive');
}

  mobileMenu.classList.toggle('inactive');  
});

/*my order*/
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('#shopping-cart-container');
const orderProduct = document.querySelector('#order__product');

menuCarritoIcon.addEventListener('click',()=>{
if(!mobileMenu.classList.contains('inactive') ||!desktopMenu.classList.contains('inactive') ||!productDetailContainer.classList.contains('inactive') ){
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');  
}
  const active = aside.classList.contains('inactive');
  darkScreen(active);
  aside.classList.toggle('inactive');
  emptyCar();
});

/*Close Icon*/
const closeIcon = productDetailContainer.querySelector('.product-detail-close');

closeIcon.addEventListener('click',()=>{
  const active = productDetailContainer.classList.contains('inactive');
  darkScreen(active);

productDetailContainer.classList.add('inactive');
});

// al momento de dawr click en cualquier parte, cerrar lo que este activo en el momento: bien sea dark screen, o alguna de las otras funciones
darkenScreen.addEventListener('click',()=>{
  if(!aside.classList.contains('inactive') || !desktopMenu.classList.contains('inactive') ||  !mobileMenu.classList.contains('inactive') || !productDetailContainer.classList.contains('inactive')){
    aside.classList.add('inactive')
    desktopMenu.classList.add('inactive')
    mobilMenu.classList.add('inactive')
    productDetailContainer.classList.add('inactive')
  }
  darkenScreen.classList.add('inactive')
});

//function order product
function productOrder (listItems, id){
  let orderProduct=listItems.map(function (productItem){
    if(productItem.id == id){
     
      //console.log(productItem.id);
      return `
      <div class="shopping-cart" id="shopping-cart">
      <figure>
      <img src=${productItem.image} alt=${productItem.name}>
    </figure>
    <p class="product-name-order">${productItem.name}</p>
    <p class="price-order">${productItem.price}</p>
    <img src="./icons/icon_close.png" alt="close" class="close-button" id="close-button">
    </div> 
      `; 
    }
    
  });

  orderProduct = orderProduct.join("");
  shoppingCart.innerHTML+=orderProduct;

  // sumar productos
  const priceOrder = shoppingCart.querySelectorAll('.price-order');
  let suma=0;
  
  priceOrder.forEach(price=>{
    suma=(Number(price.innerHTML));
  })
  arrayTotalPrice.push(suma);
  orderTotal.innerHTML="$ "+sumProducts(arrayTotalPrice);

  //Eliminar Elementos del caritto
  const divCart=shoppingCart.querySelectorAll('.shopping-cart');
 
      divCart.forEach(div=>{
        div.addEventListener("click",()=>{
          div.remove();
          countItemsCart--;
          emptyCar();
          countItems.innerText = countItemsCart;
          arrayTotalPrice.splice(-1,1)
          orderTotal.innerHTML= "$ "+sumProducts(arrayTotalPrice);
        });
       
  });  
}

// Empty car
function emptyCar(){
  if(countItemsCart==0){
    orderProduct.innerHTML =`<span id="order__product">Your cart is empty</span>`
  } else{
    orderProduct.innerHTML =`<span id="order__product">Total</span>`

  }
}

// productos
function sumProducts(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
  }
  return sum;
}

//activate darkscreen
function darkScreen(active){
  if(active){
    darkenScreen.classList.remove('inactive')
  } else{
    darkenScreen.classList.add('inactive')
  }
}