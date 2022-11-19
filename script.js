const navEmail = document.querySelector('.navbar-email');
const deskMenu = document.querySelector('.desktop-menu');

const navMobileMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const shoppinCart = document.querySelector('.navbar-shopping-cart');
const asideMenu = document.querySelector('.product-detailcard');

const productEspecification =document.querySelector('.cards-container');
const productdetail =document.querySelector('.product-detail');
const productDetailIcon = document.querySelector('.product-detail-close');



navEmail.addEventListener('click', appearDesktopMenu);

navMobileMenu.addEventListener('click', appearMobileMenu);

shoppinCart.addEventListener('click', appearShoppincart);

productDetailIcon.addEventListener('click', closeProductDetail);




function appearDesktopMenu(){
    const asideMenuOn = asideMenu.classList.contains('inactive')

    if (!asideMenuOn){
        asideMenu.classList.add('inactive')
    }
    
 deskMenu.classList.toggle('inactive');
 productdetail.classList.add('inactive');
}

function appearMobileMenu(){
    const asideMenuOn = asideMenu.classList.contains('inactive')

    if (!asideMenuOn){
        asideMenu.classList.add('inactive')
    }

 productdetail.classList.add('inactive');   
 mobileMenu.classList.toggle('inactive');
}

function appearShoppincart (){
    // const mobileMenuOn = mobileMenu.classList.contains('inactive');
    // const deskMenuOn = deskMenu.classList.contains('inactive');

    // if (!mobileMenuOn){
    //     mobileMenu.classList.add('inactive')
      
    // }
    // if(!deskMenuOn){
    //     deskMenu.classList.add('inactive')
    
    //}

    deskMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    productdetail.classList.add('inactive');
    asideMenu.classList.toggle('inactive');
}

function productCardOpen (){
  productdetail.classList.remove('inactive');
  asideMenu.classList.add('inactive')
  deskMenu.classList.add('inactive')
}

function closeProductDetail(){
  productdetail.classList.add('inactive');

}

/*<div class="product-card">
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
      </div>*/

      const productList = [];
      
      productList.push({
        name:'Bike',
        price:'120',
        image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      }
     );
     productList.push({
        name:'Rueda',
        price:'50',
        image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      }
     );
     productList.push({
        name:'Manubrio',
        price:'40',
        image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      }
     );

     function productsRender(arr){
      for (product of arr ){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.addEventListener('click', productCardOpen);

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productEspecifications = document.createElement('div');

        const producPrice = document.createElement('p');
        producPrice.innerText = '$' + product.price;
        const producName = document.createElement('p');
        producName.innerText = product.name;

        const productFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

        productFigure.appendChild(productImgCart);
        productEspecifications.append(producPrice, producName);
        productInfo.append(productEspecifications, productFigure);
        productCard.append(productImg, productInfo);

        productEspecification.appendChild(productCard);
           
     }
     };

    productsRender(productList);