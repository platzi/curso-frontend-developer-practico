const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const barMenu = document.querySelector('.menu');
const mobileMenuL = document.querySelector('.mobile-menu');
const car = document.querySelector('.navbar-shopping-cart');
const ProductDetail = document.querySelector('.product-detail');
const productDetailSecondary = document.querySelector('.product-detail-secondary');
const productDetailClose = document.querySelector('.product-detail-close');

barMenu.addEventListener('click', showMenu);
navEmail.addEventListener('click', toogleDesktopMenu);
car.addEventListener('click', toogleAddCar);
productDetailClose.addEventListener('click', closeDetail);

function showMenu(){
  const isCarClosed = ProductDetail.classList.contains('inactive');
  if(!isCarClosed){
      ProductDetail.classList.add('inactive')
  }
  closeDetail();
   mobileMenuL.classList.toggle('menu-right');
}
function toogleAddCar(){
    const isIconBarClosed = mobileMenuL.classList.contains('menu-right');    
     if(isIconBarClosed){
      mobileMenuL.classList.remove('menu-right')
    }
    ProductDetail.classList.toggle('inactive'); 
    productDetailSecondary.classList.add('inactive');

  }
function toogleDesktopMenu(){  
    const isCarClosed = ProductDetail.classList.contains('inactive');
    if(!isCarClosed){
        ProductDetail.classList.add('inactive')
    }
    
    desktopMenu.classList.toggle('inactive');
    
}
function viewDetail(){    
    productDetailSecondary.classList.remove('inactive');
    ProductDetail.classList.add('inactive');   
}
function closeDetail(){
    productDetailSecondary.classList.add('inactive');
}
const productList = [];
productList.push({
    name:'Bike',
    price: 600,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name:'TV',
    price: 800,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name:'PC',
    price: 1000,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

function listProducts(arr){
    for(product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.addEventListener('click', viewDetail);

       
        const imgProduct = document.createElement('img');
        imgProduct.setAttribute('src', product.image);
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const details = document.createElement('div');
        const price = document.createElement('p');
        price.innerText = '$' + product.price;
        const name = document.createElement('p');
        name.innerText = product.name;
         details.append(price, name);
         const btnAdd = document.createElement('figure');
         btnAdd.style.cursor='pointer';
         const imgAdd = document.createElement('img');
         imgAdd.setAttribute('src', './icons/bt_add_to_cart.svg');
         btnAdd.appendChild(imgAdd);
    
         details.append(price, name);
         productInfo.append(details, btnAdd);
         productCard.append(imgProduct, productInfo);
    
         const cardContainer = document.querySelector('.cards-container');    
         cardContainer.append(productCard);
    
    }
}

listProducts(productList);


