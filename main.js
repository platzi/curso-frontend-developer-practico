// ------------------------Variables-----------------------------
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const mobileMenu = document.querySelector('.mobile-menu');
const menuHamIcon = document.querySelector('.menu');

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside=document.querySelector('.aside-order');

const cardContainer=document.querySelector('.cards-container');



// -------------------Llamando Eventos-------------------------------
menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toggleCarritoAside);


// -----------------------Funciones----------------------------------
function toggleDesktopMenu() {
  const isAsideClosed=aside.classList.contains('inactive');
  
  if(!isAsideClosed){
    aside.classList.add('inactive');
  }
  desktopMenu.classList.toggle('inactive'); //el .toggle hace que suceda el intercambio de la clase
  console.log("Click menu desktop");
}

function toggleMobileMenu() {
 
  const isAsideClosed=aside.classList.contains('inactive');
  
  if(!isAsideClosed){
    aside.classList.add('inactive');
  }
  mobileMenu.classList.toggle('inactive');
  console.log("Click menu mobile");


}

function toggleCarritoAside(){
  const isMobileMenuClosed=mobileMenu.classList.contains('inactive');
  const isDesktopMenuClosed=desktopMenu.classList.contains('inactive');
  if (!isMobileMenuClosed){
    mobileMenu.classList.add('inactive');
    
  }
  else if(!isDesktopMenuClosed){
    desktopMenu.classList.toggle('inactive')
  }
  
  aside.classList.toggle('inactive');}


  const productlist=[];
  productlist.push({
    name:'Bike',
    price: 120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  })
  productlist.push({
    name:'telefono',
    price: 200,
    image:'https://www.cnet.com/a/img/resize/38181a69f6abf713714f1822f058f1927c11a8cc/hub/2022/11/14/e8f49cf2-c234-4cbb-a2c9-0e156ecc73a9/2.jpg?auto=webp&fit=crop&height=675&width=1200'
  })
  productlist.push({
    name:'Pantalla',
    price: 220,
    image:'https://i.blogs.es/3c8306/lgoledc2-ap/1366_2000.jpg'
  })
  productlist.push({
    name:'Lampara pokemon',
    price: 25,
    image:'https://cf.shopee.com.co/file/e18eb8842992240852232db6ada0aa1f'
  })
  productlist.push({
    name:'Viaje en Barco',
    price: 130,
    image:'https://phantom-elmundo.unidadeditorial.es/bf2ec08738eb2013152a812b582823e9/crop/0x0/699x466/resize/828/f/jpg/assets/multimedia/imagenes/2022/05/04/16516741859149.jpg'
  })
  productlist.push({
    name:'Anillo',
    price: 150,
    image:'https://www.mercuriojoyeros.com/wp-content/uploads/2021/09/Anillo-1-1024x1024.jpeg'
  })
  productlist.push({
    name:'Casa',
    price: 5000,
    image:'https://definicion.de/wp-content/uploads/2011/01/casa-1.jpg'
  })
  productlist.push({
    name:'Carro',
    price: 2500,
    image:'https://assets.bridgestonetire.com/content/dam/consumer/bst/la/co/tips/2022/tecnologia-de-llantas/deportivo.jpg'
  })
  productlist.push({
    name:'Casa',
    price: 5000,
    image:'https://definicion.de/wp-content/uploads/2011/01/casa-1.jpg'
  })
  productlist.push({
    name:'Carro',
    price: 2500,
    image:'https://assets.bridgestonetire.com/content/dam/consumer/bst/la/co/tips/2022/tecnologia-de-llantas/deportivo.jpg'
  })
  for ( product of productlist){
    
    

    const productcard=document.createElement('div');
    productcard.classList.add('product-card'); 
    
    

    const productimg=document.createElement('img');
    productimg.setAttribute('src',product.image);

    const productinfo=document.createElement('div');
    productinfo.classList.add('product-info');
    

    const productInfoDiv=document.createElement('div');
    const productPrice=document.createElement('p');
    productPrice.classList.add('price');
    productPrice.innerText='$'+product.price;
    const productName=document.createElement('p');
    productName.classList.add('name');
    productName.innerText=product.name;
    

    const productInfoFigure=document.createElement('figure');
    const productIconcard=document.createElement('img');
    productIconcard.setAttribute('src','./icons/bt_add_to_cart.svg');
    
    productInfoFigure.append(productIconcard);

    productInfoDiv.append(productPrice,productName);
   
    productinfo.append(productInfoDiv,productInfoFigure);
   
    productcard.append(productimg,productinfo);
    
    cardContainer.append(productcard);
  
    
  

  }