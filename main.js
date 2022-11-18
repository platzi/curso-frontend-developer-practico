const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuBurgerIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const prouctDetail = document.querySelector('.product-detail'); 
const shopCart = document.querySelector('.navbar-shopping-cart'); 
const mainContainer = document.querySelector('.main-container'); 
const cardsContainer = document.querySelector('.cards-container'); 



menuEmail.addEventListener('click', toggleDesktopMenu);
menuBurgerIcon.addEventListener('click', toggleMobileMenu);
shopCart.addEventListener('click', toggleProductDetail);


function toggleDesktopMenu() {

            
   prouctDetail.classList.add('inactive');
   desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {

   prouctDetail.classList.add('inactive');
   mobileMenu.classList.toggle('inactive');
}


function toggleProductDetail() {

  
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');

    prouctDetail.classList.toggle('inactive');  
    
}

const productList = [];
productList.push({
   name: 'Fridge',
   price: 1200.00,
   image: 'https://images.pexels.com/photos/6996088/pexels-photo-6996088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

}); 

productList.push({
   name: 'Bike',
   price: 120.00,
   image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

}); 

productList.push({
   name: 'Camera',
   price: 200.00,
   image: 'https://images.pexels.com/photos/249597/pexels-photo-249597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

}); 

productList.push({
   name: 'Pot',
   price: 58.00,
   image: 'https://images.pexels.com/photos/3075352/pexels-photo-3075352.jpeg?auto=compress&cs=tinysrgb&w=600'

}); 

productList.push({
   name: 'Couch',
   price: 540.00,
   image: 'https://images.pexels.com/photos/276746/pexels-photo-276746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

}); 

productList.push({
   name: 'Desktop',
   price: 80.00,
   image: 'https://images.pexels.com/photos/276746/pexels-photo-276746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

}); 

productList.push({
   name: 'Table',
   price: 50.00,
   image: 'https://images.pexels.com/photos/280471/pexels-photo-280471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

}); 

productList.push({
   name: 'Pillows',
   price: 75.00,
   image: 'https://images.pexels.com/photos/776120/pexels-photo-776120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

}); 

productList.push({
   name: 'Chair',
   price: 80.00,
   image: 'https://images.pexels.com/photos/2762247/pexels-photo-2762247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

}); 


productList.push({
   name: 'Bookshlef',
   price: 180.00,
   image: 'https://images.pexels.com/photos/1125130/pexels-photo-1125130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

}); 



function showProducts(array) {


   for (product of array) {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
   
      const img = document.createElement('img');
      img.setAttribute('src', product.image);
   
      const productInfo = document.createElement('div');
      productInfo.classList.add('product-info');
   
      ////////////////////////////////////////////////////
      
      const divNoName = document.createElement('div');
   
      const productPrice = document.createElement('p');
      productPrice.innerText = '$' + product.price;
      const productName = document.createElement('p');
      productName.innerText = product.name 
   
      divNoName.appendChild(productPrice);
      divNoName.appendChild(productName);
   
   //////////////////////////////////////////////////////////
   
      const figure = document.createElement('figure');
      const productCart = document.createElement('img');
      productCart.setAttribute('src', './icons/bt_add_to_cart.svg');
   
      figure.appendChild(productCart);
   
      productInfo.appendChild(divNoName);
      productInfo.appendChild(figure);
   
      /////////////////////////////////////////////////////////////
   
      productCard.appendChild(img);
      productCard.appendChild(productInfo);
   
      cardsContainer.appendChild(productCard);
   
   
      
   }
   
}

showProducts(productList);



