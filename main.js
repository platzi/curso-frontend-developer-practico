const getSelectProduct = [];


const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const iconMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
 

const menuShoppingCar = document.querySelector('.navbar-shopping-cart');
const shoppinCartContainer = document.querySelector('#shoppinCartContainer');

const productDetailContainer = document.querySelector('#product-detail');
const productDetailClose = document.querySelector('.product-detail-close');
const orderContent = document.querySelector('.my-order-content');


const addToCart = document.querySelector('.add-to-cart-button');
addToCart.addEventListener('click', createProductsCart);


const cardsContainer = document.querySelector('.cards-container');



menuEmail.addEventListener('click', toggleDesktopMenu);
function toggleDesktopMenu(){

    desktopMenu.classList.toggle('inactive');

    shoppinCartContainer.classList.add('inactive');
    productDetailContainer.classList.add('inactive');

}
iconMenu.addEventListener('click',  toggleMobileMenu);

function toggleMobileMenu(){   
    
    
    mobileMenu.classList.toggle('inactive');
    shoppinCartContainer.classList.add('inactive')
    productDetailContainer.classList.add('inactive');

/*const isAsideClosed = aside.classList.contains('inactive');

   if (!isAsideClosed){
        aside.classList.add('inactive');
    }
     mobileMenu.classList.toggle('inactive');

     La misma funcion con condicionales para vericar si esta abierto o cerrado.
    */
    

}

menuShoppingCar.addEventListener('click',  toggleAside);

function toggleAside(){

    shoppinCartContainer.classList.toggle('inactive')

    mobileMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
    

   /* const isMobileClosed = mobileMenu.classList.contains('inactive');

    if (!isMobileClosed){
        mobileMenu.classList.add('inactive');
    }
    aside.classList.toggle('inactive')*/
}






           const productList = [];
           productList.push({
            name: 'Chairs',
            price: 180,
            image: "https://i.pinimg.com/564x/bf/ae/9a/bfae9a2e4187cf3f300c21a34d12bdaf.jpg",
           });
           productList.push({
            name: 'Chairs',
            price: 120,
            image: "https://i.pinimg.com/564x/95/a5/3a/95a53a5c70aad9f995a23fdada566f6a.jpg",
           });
           productList.push({
            name: 'Puff',
            price: 210,
            image: "https://i.pinimg.com/564x/eb/68/83/eb6883a68c44c0d545e756f867d637c1.jpg",
           });
           productList.push({
            name: 'Armchairs',
            price: 235,
            image: "https://i.pinimg.com/564x/4b/35/0c/4b350cb1224ae82254ed18eb58c97fdd.jpg",
           });
           productList.push({
            name: 'chairs',
            price: 210,
            image: "https://i.pinimg.com/564x/e9/ea/cf/e9eacf10f14f7d27497e0997727aeae3.jpg",
           });
           productList.push({
            name: 'Chairs',
            price: 190,
            image: "https://i.pinimg.com/564x/5d/6e/08/5d6e08f25de84e765382f06347a0272e.jpg",
           });
           productList.push({
            name: 'puff',
            price: 225,
            image: "https://i.pinimg.com/564x/58/77/1d/58771dab6153d2eef17bfc2df952260c.jpg",
           });
           productList.push({
            name: 'Puff',
            price: 315,
            image: "https://i.pinimg.com/564x/55/96/7d/55967d84fb8c36c59c47ad84bbd22fca.jpg",
           });
           productList.push({
            name: 'Armchairs',
            price: 350,
            image: "https://i.pinimg.com/564x/54/f5/fd/54f5fde12b16e516bba4b6445303b547.jpg",
           });
           productList.push({
            name: 'Armchairs',
            price: 405,
            image: "https://i.pinimg.com/564x/fa/ef/fc/faeffc3de4722b2cfd47ecbf19a7ee40.jpg",
           });
           productList.push({
            name: 'Armchairs',
            price: 448,
            image: "https://i.pinimg.com/564x/71/66/d6/7166d632ede817c62dce8d22786d3682.jpg",
           });
           productList.push({
            name: 'Armchairs',
            price: 280,
            image: "https://i.pinimg.com/564x/62/69/26/6269263294b3a80190a0321c3b1e378a.jpg",
           });
           productList.push({
            name: 'Armchairs',
            price: 235,
            image: "https://i.pinimg.com/564x/f9/25/d9/f925d9163d15af37ce0965d68da1d923.jpg",
           });
           productList.push({
            name: 'Chairs',
            price: 237,
            image: "https://i.pinimg.com/564x/20/b1/5e/20b15e9a4c4cac7151f62f2bd6beae97.jpg",
           });
           productList.push({
            name: 'Chairs',
            price: 150,
            image: "https://i.pinimg.com/564x/4f/aa/19/4faa193bd1040d7de92f01080ac35b31.jpg",
           });



  
        function renderProducts(arr){ 
      for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card')

        //product = {name, price, image} --> product.image
        const productImg = document.createElement('img'); 
        productImg.setAttribute('src', product.image);//modificar su propiedad src, por el objeto 

        productImg.addEventListener('click', activeImg); 
        productImg.addEventListener('click', openProductDetail);     
      
       
        function activeImg(){
        productCard.setAttribute('id', 'activeCard');
      console.log(productCard);
     
       }
        
      

         
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        productPrice.setAttribute('id', 'price');

        const productName = document.createElement('p');
        productName.innerText = product.name;
        productName.setAttribute('id', 'name');

        

       

        const productFigure = document.createElement('figure');

        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg' );
        productImgCart.classList.add('icon-cart');

        
      
        productFigure.appendChild(productImgCart);

        productDiv.appendChild(productPrice);
        productDiv.appendChild(productName);
        productInfo.appendChild(productDiv);
        productInfo.appendChild(productFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);

       

      }
    };
  
    renderProducts(productList);

    
    
                         //PRODUCTS DETAILS
    

         function getProductsDetail(){  

            const activeCard = document.querySelector('#activeCard');
            const imgCardDetail =  activeCard.firstElementChild;
            const imgDetailUrl = imgCardDetail.getAttribute('src');
            const newImgDetail =  document.getElementById('img-product-detail');
            newImgDetail.setAttribute('src', imgDetailUrl);
             console.log( newImgDetail);
      

             const nextSiblingNodo =  imgCardDetail.nextElementSibling;
             const productDetailInfo =  nextSiblingNodo.querySelector('div');

             const productPrice = productDetailInfo.querySelector('#price').textContent;
             const productName = productDetailInfo.querySelector('#name').textContent;

               getSelectProduct.unshift(productPrice);
               getSelectProduct.unshift(productName);
               getSelectProduct.unshift(imgDetailUrl);

               console.log(getSelectProduct);

             const getPrice = document.querySelector('.productPrice');
              const getName = document.querySelector('.productName')
           
               getPrice.innerText = productPrice;
               getName.innerText = productName;
            
         }

       

        function openProductDetail(){
            productDetailContainer.classList.remove('inactive');

            getProductsDetail()

        }
        
        
        productDetailClose.addEventListener('click', closeProductDetailIside);
        
        function closeProductDetailIside(){
            productDetailContainer.classList.add('inactive');
            mobileMenu.classList.add('inactive');
            shoppinCartContainer.classList.add('inactive');
            desktopMenu.classList.add('inactive');

            const activeCard = document.querySelector('#activeCard');

            activeCard.removeAttribute('id');  
            
        }
        /* <div class="my-order-content">
        <div class="shopping-cart">
          <figure>
            <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike">
          </figure>
          <p>Bike</p>
          <p>$30,00</p>
          <img src="./icons/icon_close.png" alt="close">
        </div>*/
       

        //productos en carrito de compras 

           function createProductsCart (){

              const shoppingCard = document.createElement('div');
              shoppingCard.classList.add('shopping-cart');

              const figureElement = document.createElement('figure');
              const productCardImg = document.createElement('img');
              productCardImg.setAttribute('src', getSelectProduct[0]); 
              console.log(productCardImg);
              const productNameSelec = document.createElement('p');
               productNameSelec.innerText = getSelectProduct[1];
              const productPriceSelec = document.createElement('p');
              productPriceSelec.innerText = getSelectProduct[2];
              const imgIcon = document.createElement('img');
              imgIcon.setAttribute('src', './icons/icon_close.png'); 


              
             // shoppingCard.appendChild(imgIcon);
            //  shoppingCard.appendChild(productPriceSelec);
             // shoppingCard.appendChild(productNameSelec);
              figureElement.appendChild(productCardImg);
              shoppingCard.append( figureElement, productNameSelec, productPriceSelec, imgIcon, );
              orderContent.appendChild(shoppingCard);

           };









        


        

    

 




