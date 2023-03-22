const btnemail= document.querySelector(".navbar-email");
const menuOrden = document.querySelector(".desktop-menu");
const btnmobileMenu = document.querySelector('.menu');
const mobileMenu =document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const btncarrito = document.querySelector('.navbar-shopping-cart');
const cardContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');
const btnAsideProductDetailClose = document.querySelector('.product-detail-close');



btnemail.addEventListener('click',toggleDesktopMenu);
btnAsideProductDetailClose.addEventListener('click',closeProductDetailAside);


function toggleDesktopMenu()
{
    productDetailContainer.classList.add('inactive')  ;
    menuOrden.classList.toggle('inactive');
   
}

btnmobileMenu.addEventListener('click',toggleMobileMenu);

function toggleMobileMenu(){
  productDetailContainer.classList.add('inactive')  ;
  const isProductDetailOpen=!shoppingCartContainer.classList.contains('inactive');


    if (isProductDetailOpen)
    {
        shoppingCartContainer.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

btncarrito.addEventListener('click',toggleMenuCarrito);

function toggleMenuCarrito(){
    //productDetail.classList.toggle('inactive');

    productDetailContainer.classList.add('inactive');

    const isMobileMenuOpen=!mobileMenu.classList.contains('inactive');
    if (isMobileMenuOpen){
        
        mobileMenu.classList.add('inactive');

    }
    
    shoppingCartContainer.classList.toggle('inactive');
    
}

function openProductDetailAside(){

  menuOrden.classList.add('inactive');
  mobileMenu.classList.add('inactive');
  shoppingCartContainer.classList.add('inactive')
  productDetailContainer.classList.remove('inactive');

}

function closeProductDetailAside(){
  productDetailContainer.classList.add('inactive');
}

const productList=[];

productList.push({
    name: "bike",
    price:120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})

productList.push({
    name: "Laptop",
    price:200.00,
    image: "https://images.pexels.com/photos/3992776/pexels-photo-3992776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
})

productList.push({
    name: "Desktop",
    price:200.00,
    image: "https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
})

function renderProducts(arr){
for (product of arr){
   const ProductCard =  document.createElement('div');
   ProductCard.classList.add('product-card');
   const img = document.createElement('img');
   img.setAttribute('src', product.image);

   img.addEventListener('click',openProductDetailAside);

   
   const productInfo =  document.createElement('div');
   productInfo.classList.add('product-info');
   const productInfoDiv = document.createElement('div');
   const productPrice = document.createElement('p');
   productPrice.innerText = "$ "+product.price;
   const productName = document.createElement('p');
   productName.innerText = product.name ;
   const productInfoFigure = document.createElement('figure');
   const productInfoImg = document.createElement('img');
   productInfoImg.setAttribute('src',"./icons/bt_add_to_cart.svg");

   productInfoDiv.appendChild(productPrice);
   productInfoDiv.appendChild(productName);


   productInfoFigure.appendChild(productInfoImg);
   productInfo.appendChild(productInfoDiv);
   
   productInfo.appendChild(productInfoFigure);
   ProductCard.appendChild(img);
   ProductCard.appendChild(productInfo);
   cardContainer.appendChild(ProductCard);

}
}

renderProducts(productList);



{/* <div class="product-card">
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

    </div> */}