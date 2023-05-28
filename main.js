const navEmail= document.querySelector('.navbar-email');
const desktopMenu= document.querySelector('.desktop-menu');
const menuCarritoIcon= document.querySelector('.navbar-shopping-cart');
const MenuHamIcon= document.querySelector('.menu');
const mobileMenu= document.querySelector('.mobile-menu');
const shoppinCartContainer= document.querySelector('#shoppinCartContainer');
const cardsContainer= document.querySelector('.cards-container');



navEmail.addEventListener('click', toggleDesktopMenu);
MenuHamIcon.addEventListener('click',toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toggleCarritoAside);

function toggleDesktopMenu(){
    const isAsideClosed= shoppinCartContainer.classList.contains('inactive');
    if(!isAsideClosed){
       shoppinCartContainer.classList.add('inactive');
    }  


    console.log('Clik')
    desktopMenu.classList.toggle('inactive');

}

function toggleMobileMenu() {
    const isAsideClosed= aside.classList.contains('inactive');
    if(!isAsideClosed){
        aside.classList.add('inactive');
    }  
    mobileMenu.classList.toggle('inactive')
}
function toggleCarritoAside(){
    const isMobileMenuClosed=mobileMenu.classList.contains('inactive');
            
    if(!isMobileMenuClosed){
            mobileMenu.classList.add('inactive');   
        }
      
    shoppinCartContainer.classList.toggle('inactive');
   

}
 const productList = [];
 productList.push({
    name:'bike',
    price:120,
    image:'https:images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
     });
          productList.push({
        name:'Pantalla',
        price:220,
        image:'https:images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
         });
         productList.push({
            name:'Compu',
            price:620,
            image:'https:images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
             });
            
        // <div class="product-card">
        //    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        //      <div class="product-info">
        //        <div>
        //          <p>$120,00</p>
        //          <p>Bike</p>
        //        </div>
        //        <figure>
        //          <img src="./icons/bt_add_to_cart.svg" alt="">
        //        </figure>
        //      </div>
        //  </div>       
  

for(product of productList){
const productCard= document.createElement('div');
productCard.classList.add('product-card');
// product={name.price,image} product.image
const productImg =document.createElement('img');
productImg.setAttribute('src',product.image);


const productInfo= document.createElement('div');
productInfo.classList.add('product-info');

   const productInfoDiv= document.createElement('div');
   const productPrice= document.createElement('p');
   productPrice.innerText='$'+ product.price;
    
   const productName= document.createElement('p');
   productName.innerText=product.name; 

   productInfoDiv.appendChild(productPrice);
   productInfoDiv.appendChild(productName);

const productInfoFigure= document.createElement('figure');
const productImgCart= document.createElement('img');
productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');


productInfoFigure.appendChild(productImgCart);
productInfo.appendChild(productInfoDiv);
productInfo.appendChild(productInfoFigure);

productCard.appendChild(productImg);
productCard.appendChild(productInfo);



    cardsContainer.appendChild(productCard);


}
