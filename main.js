const varEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const varMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const navLeft = document.querySelector('.navbar-left')
const navCarrito = document.querySelector('.navbar-shopping-cart');
const shoppingCar = document.querySelector('.asaideShoppingCar');
const productDetail = document.querySelector('.product-detail');
const productDetailClose = document.querySelector('.product-detail-close');
const cardContainer = document.querySelector('.cards-container');
const myOrderContent = document.querySelector('.my-order-content');


const productsContent = [];
const sumOfPrice = []
  
varEmail.addEventListener('click',togleDesktopMenu);
varMenu.addEventListener('click',togleMobileMenu);
navCarrito.addEventListener('click',togleCarMenu);
// productDetailClose.addEventListener('click', closeProductDetail);

// togleMobileMenu
const isCarMenuClose = shoppingCar.classList.contains('inactive');
const isProductDetailClose = productDetail.classList.contains('inactive');

// togleDesktopMenu
const isMobileMenuClose = mobileMenu.classList.contains('inactive');
const isDesktopMenuClode = desktopMenu.classList.contains('inactive');

const isDesktopMenuClose = desktopMenu.classList.contains('inactive');

// show Product Detail
const productDetailCloseUp = document.createElement('div');
const buttonClose = document.createElement('img');
const showImg = document.createElement('img');
const productInfoDetail = document.createElement('div')
const showPrice  = document.createElement('p')
const showName = document.createElement('p');
const showDescription = document.createElement('p');
const primaryButton = document.createElement('button');
const addToCart = document.createElement('img');

// productList

// type:'clothes';
// type:'electronics',
// type:'furnitures',
// type:'toys',
// type:'others',

productsContent.push({
  name:'Computer',
  price:'22000',
  image:'https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  type:'electronics',
});
  productsContent.push({
  name:'Silla',
  price:'600',
 type:'furnitures',
  image:'https://images.pexels.com/photos/2180883/pexels-photo-2180883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  });
  productsContent.push({
  name:'Bike',
  price:'3000',
  type:'others',
  image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  });
  productsContent.push({
    name:'T-shirt',
    price:'300',
    type:'clothe',
    image:'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80',
  })
  productsContent.push({
  name:'Book',
  price:'300',
  type:'others',
  image:'https://images.pexels.com/photos/415071/pexels-photo-415071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  });
  productsContent.push({
    name:'hoodie',
    price:'300',
    image:'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1905&q=80',
    type:'clothe'  
  })
  productsContent.push({
  name:'dinning',
  price:'19999',
  type:'furnitures',
  image:'https://www.liderempresarial.com/wp-content/uploads/2020/11/furniture-964584_960_720-960x570.jpg',
  });
  productsContent.push({
  name:'Wardrobe',
  price:'11000',
  type:'furnitures',
  image:'https://res.cloudinary.com/walmart-labs/image/upload/d_default.jpg/w_960,dpr_auto,f_auto,q_auto:best/mg/gm/3pp/asr/a2765ae1-381d-43c9-9330-434ab8acc95c.65d3e7d64320cbac7ee44486abd852f7.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
  });
  productsContent.push({
  name:'Small Table',
  price:'4000',
  type:'electronics',
  image:'https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
  type:'clothe'    
  });

  productsContent.push({
    name:'Tv',
    price:'12000',
    type:'electronics',
    image:'https://www.sony.com.mx/image/de1537232b3c8d6aca5aa94c10801f7a?fmt=pjpeg&wid=1014&hei=396&bgcolor=F1F5F9&bgc=F1F5F9',
    type:'clothe'  
  })
  productsContent.push({
    name:'Cell phone',
    price:'3000',
    type:'electronics',
    image:'https://images.unsplash.com/photo-1596558450268-9c27524ba856?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=725&q=80',
  })

  productsContent.push({
    name:'coffee furniture',
    price:'1500',
    type:'furnitures',
    image:'https://www.remodex.com.mx/REMODEX/public/ImagenesRemodex/mueble-de-tv-a22a-9200-Img_Uno-1630450639.jpeg',
    });
    
    productsContent.push({
    name:'red chair',
    price:'5200',
    type:'furnitures',
    image:'https://irp.cdn-website.com/66f87d96/MOBILE/png/236.png',
    });



function togleMobileMenu(){
// isCarMenuClose 
// isProductDetailClose 

  if(!isCarMenuClose){
      shoppingCar.classList.add('inactive');
  }
  if(!isProductDetailClose){
    productDetail.classList.add('inactive');
  }

  mobileMenu.classList.add('inactive')

};
function togleDesktopMenu(){
  isCarMenuClose 
  isProductDetailClose 

  if(!isCarMenuClose){
      shoppingCar.classList.add('inactive');
  }
  if(!isProductDetailClose){
    productDetail.classList.add('inactive');
  }

  desktopMenu.classList.toggle('inactive');
};
function togleCarMenu(){
  isMobileMenuClose
  isDesktopMenuClode
  isProductDetailClose

  if(!isMobileMenuClose){
      mobileMenu.classList.add('inactive');
  }
  if(!isDesktopMenuClode){
      desktopMenu.classList.add('inactive');
  }
  if(!isProductDetailClose){
    productDetail.classList.add('inactive');
  }
  productDetail.classList.add('inactive');
  shoppingCar.classList.toggle('inactive');
};
function showProductDetail([imgInfo, price, name, description = `Are you interested in a ${name} add it to cart .`]){
   productDetailCloseUp.classList.add('product-detail-close');
   productDetailCloseUp.addEventListener('click', closeProductDetail)
   buttonClose.setAttribute('src','./icons/icon_close.png')

   showImg.setAttribute('alt', 'bike')
   showImg.setAttribute('src', imgInfo)
   productInfoDetail.classList.add('product-info__detail')

   showPrice
   showPrice.innerHTML = `$ ${price}`;
   showName
   showName.innerHTML = name; 
   showDescription
   showDescription.innerText = description;
  primaryButton.classList.add('primary-button', 'add-to-cart-button');
  primaryButton.addEventListener('click',() => {
    orderContent([imgInfo, price, name])
  })
  addToCart.setAttribute('src', './icons/bt_add_to_cart.svg');
  productDetailCloseUp.appendChild(buttonClose);

  primaryButton.appendChild(addToCart);
  productInfoDetail.appendChild(showPrice);
  productInfoDetail.appendChild(showName);
  productInfoDetail.appendChild(showDescription);
  productInfoDetail.appendChild(primaryButton);

  productDetail.appendChild(productDetailCloseUp);
  productDetail.appendChild(showImg);
  productDetail.appendChild(productInfoDetail);
  
}
function openProductDetail(){
  if(!isMobileMenuClose){
    mobileMenu.classList.add('inactive');
  }
  if(!isCarMenuClose){
          shoppingCar.classList.add('inactive');
  }
  if(!isDesktopMenuClose){
    desktopMenu.classList.add('inactive');
  }
  productDetail.classList.toggle('inactive'); 
};
function closeProductDetail(){
  productDetail.classList.add('inactive');
};
function productList(arr){
  for (product of arr){
    const imagen = product.image;
    const price = product.price;
    const name = product.name;
    const description = product.description;

    const productCard = document.createElement('div');
    productCard.classList.add('product-card');    
  
    const img = document.createElement('img');
    img.setAttribute('src', imagen);
    img.addEventListener('click', (event)=> {
      openProductDetail()
      let imgInfo = event.target.src;
      showProductDetail([imgInfo,price,name, description]);
    });

  // -------------------
    const productInfo = document.createElement('div')
    productInfo.classList.add('product-info');
         // ---------------------
    const productInfoDiv = document.createElement('div');
  
    const productPrice = document.createElement('p');
    productPrice.innerHTML = `$ ${price}`;
    const productName = document.createElement('p');
    productName.innerText = name;
  
    productInfoDiv.appendChild(productPrice)
    productInfoDiv.appendChild(productName)
  
         // -----------------------
    const productFigure = document.createElement('figure');
    const productImg = document.createElement('img');
    productImg.setAttribute('src', './icons/bt_add_to_cart.svg');
    productImg.addEventListener('click', ()=>{
      orderContent([imagen, price, name])
    })
    
    productFigure.appendChild(productImg);
        // -----------------------
  // ------------------------
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productFigure);
    
    productCard.append(img, productInfo);
  
    cardContainer.appendChild(productCard);

  }
  
};
function orderContent([imagen, price, name]){
  const shoppingCart = document.createElement('div');
  const figure = document.createElement('figure');
  const img = document.createElement('img');
  const checkName = document.createElement('p')
  const checkPrice = document.createElement('p')
  const deleteButon = document.createElement('img');
  
  shoppingCart.classList.add('shopping-cart');
  img.setAttribute ('src', imagen);
  img.setAttribute ('alt', 'bike');
  checkName.innerText = name;
  checkPrice.innerText = `$ ${price}`;
  deleteButon.setAttribute('src','./icons/icon_close.png')
  deleteButon.setAttribute('alt','close');
  deleteButon.addEventListener('click', () => {
    shoppingCart.classList.add('inactive')
  })

  primaryButton.classList.add('primary-button')
  primaryButton.innerText = 'checkout';
  primaryButton.addEventListener('click', () => {
    priceTotal(price)
  })
  
  figure.appendChild(img);
  shoppingCart.appendChild(figure) ;
  shoppingCart.appendChild(checkName) ;
  shoppingCart.appendChild(checkPrice) ;
  shoppingCart.appendChild(deleteButon);


  myOrderContent.appendChild(shoppingCart);
  myOrderContent.appendChild(primaryButton) ;


}
function priceTotal (price){

  const pTotal = document.createElement('p');
  const order = document.createElement('div');
  const spanTotal = document.createElement('span');
  const totalPrice = document.createElement('p');

  var i;
  for (i = 0; i < 1; i++) {
      const suma = i + (+price);
      console.log(suma);
    return suma
  }
  order.classList.add('order');
  spanTotal.innerText = 'Total';
  totalPrice.innerText = `$ ${suma}`;
  pTotal.appendChild(spanTotal);
  order.appendChild(pTotal);
  order.appendChild(totalPrice);

  myOrderContent.appendChild(order);
}
function categories (){
  const listCategories = document.createElement('ul')
  const listCategories1 = document.createElement('ul')
  const listCategories2 = document.createElement('ul')

  const categorie = document.createElement('li')
  const categorie1 = document.createElement('li')
  const categorie2 = document.createElement('li')
  const categorie3 = document.createElement('li')
  const categorie4= document.createElement('li')
  const categorie5= document.createElement('li')
  const categorie6= document.createElement('li')

  const categorie7= document.createElement('li')
  const categorie8= document.createElement('li')
  const categorie9= document.createElement('li')
  const categorie10= document.createElement('li')

  const anclaCategories = document.createElement('a')
  const anclaAll = document.createElement('a')
  const anclaClothes = document.createElement('a')
  const anclaElectronics = document.createElement('a')
  const anclaFurnitures = document.createElement('a')
  const anclaToys = document.createElement('a')
  const anclaOther = document.createElement('a')

  const anclaMyOrder = document.createElement('a')
  const anclaMyAcount = document.createElement('a')
  const anclaGmail = document.createElement('a')
  const anclaSingOut = document.createElement('a')

  anclaCategories.innerText = 'CATEGORIES';
  anclaCategories.setAttribute('href','/')
  
  anclaAll.innerText = 'All';
  anclaAll.setAttribute('href','/')
  
  anclaClothes.innerText = 'Clothes';
  anclaClothes.setAttribute('href','/')

  anclaElectronics.innerText = 'Electronics';
  anclaElectronics.setAttribute('href','/')
  
  anclaFurnitures.innerText = 'Furnitures';
  anclaFurnitures.setAttribute('href','/')
  
  anclaToys.innerText = 'Toys';
  anclaToys.setAttribute('href','/')
  
  anclaOther.innerText = 'Other';
  anclaOther.setAttribute('href','/')

  
  anclaMyOrder.setAttribute('href','/')
  anclaMyOrder.innerText = 'My orders';

  anclaMyAcount.setAttribute('href','/')
  anclaMyAcount.innerText = 'My account';

  anclaGmail.setAttribute('href','/')
  anclaGmail.classList.add('email')
  anclaGmail.innerText = 'jesusvite@example.com';

  anclaSingOut.setAttribute('href','/')
  anclaSingOut.classList.add('sing-out')
  anclaSingOut.innerText = 'Sign out';

  
  categorie7.append(anclaMyOrder)
  categorie8.append(anclaMyAcount)
  categorie9.append(anclaGmail)
  categorie10.append(anclaSingOut)
  
  categorie.append(anclaCategories)
  categorie1.append(anclaAll)
  categorie2.append(anclaClothes)
  categorie3.append(anclaElectronics)
  categorie4.append(anclaFurnitures)
  categorie5.append(anclaToys)
  categorie6.append(anclaOther)

  listCategories.appendChild(categorie)
  listCategories.appendChild(categorie1)
  listCategories.appendChild(categorie2)
  listCategories.appendChild(categorie3)
  listCategories.appendChild(categorie4)
  listCategories.appendChild(categorie5)
  listCategories.appendChild(categorie6)

  listCategories1.appendChild(categorie7)
  listCategories1.appendChild(categorie8)

  listCategories2.appendChild(categorie9)
  listCategories2.appendChild(categorie10)
  mobileMenu.appendChild(listCategories)
  mobileMenu.appendChild(listCategories1)
  mobileMenu.appendChild(listCategories2)

  // navLeft.appendChild(listCategories)
}
function categoriesDesktop(){
  const listCategories = document.createElement('ul')

  const categorie1 = document.createElement('li')
  const categorie2 = document.createElement('li')
  const categorie3 = document.createElement('li')
  const categorie4= document.createElement('li')
  const categorie5= document.createElement('li')
  const categorie6= document.createElement('li')

  const anclaAll = document.createElement('a')
  const anclaClothes = document.createElement('a')
  const anclaElectronics = document.createElement('a')
  const anclaFurnitures = document.createElement('a')
  const anclaToys = document.createElement('a')
  const anclaOther = document.createElement('a')

  
  anclaAll.setAttribute('href','/')
  anclaAll.innerText = 'All';
 
  anclaClothes.setAttribute('href','/')
  anclaClothes.innerText = 'Clothes';


  anclaElectronics.setAttribute('href','/')
  anclaElectronics.innerText = 'Electronics';
  
  anclaFurnitures.setAttribute('href','/')
  anclaFurnitures.innerText = 'Furnitures';
  
  anclaToys.setAttribute('href','/')
  anclaToys.innerText = 'Toys';
  
  anclaOther.setAttribute('href','/')
  anclaOther.innerText = 'Other';

  categorie1.appendChild(anclaAll)
  categorie2.appendChild(anclaClothes)
  categorie3.appendChild(anclaElectronics)
  categorie4.appendChild(anclaFurnitures)
  categorie5.appendChild(anclaToys)
  categorie6.appendChild(anclaOther)

  listCategories.appendChild(categorie1)
  listCategories.appendChild(categorie2)
  listCategories.appendChild(categorie3)
  listCategories.appendChild(categorie4)
  listCategories.appendChild(categorie5)
  listCategories.appendChild(categorie6)


  navLeft.appendChild(listCategories)
  }

productList(productsContent);
categories()
categoriesDesktop()