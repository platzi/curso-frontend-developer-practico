
console.log('prueba de el archivo ');

const emailMenu = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuhamicon = document.querySelector('.menu');
const mobilMenu = document.querySelector('.mobile-menu');
const navbarShoppingCart = document.querySelector('.navbar-shopping-cart');
const productDeTail = document.querySelector('.product-detail')
const cardsContaine = document.querySelector('.cards-container');



emailMenu.addEventListener('click', toggleDesktopMenu);

menuhamicon.addEventListener('click', togglemobilMenu);
navbarShoppingCart.addEventListener('click', toggleCarritoAside);


function toggleDesktopMenu() {
    const isproductDeTailcloed = productDeTail.classList.contains('inactive');
    if(!isproductDeTailcloed){
        productDeTail.classList.add('inactive');
    }
    
    desktopMenu.classList.toggle('inactive');

}
function togglemobilMenu() {
    const isproductDeTailcloed = productDeTail.classList.contains('inactive');
    if(!isproductDeTailcloed){
        productDeTail.classList.add('inactive');
    }
    mobilMenu.classList.toggle('inactive');
}
function toggleCarritoAside() {
    const ismobilMenuclosed = mobilMenu.classList.contains('inactive');
    const isdesktopMenuCloses= desktopMenu.classList.contains('inactive');

    if (!ismobilMenuclosed || !isdesktopMenuCloses ) {
        mobilMenu.classList.add('inactive');
        desktopMenu.classList.add('inactive');
    }
    productDeTail.classList.toggle('inactive');
}

const products=[];

products.push({
    nombre: 'bike',
    price: 120,
    imga: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
products.push({
    nombre: 'pantalla',
    price: 300 ,
    imga: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
products.push({
    nombre: 'computador',
    price: 600,
    imga: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
products.push({
    nombre: 'bike',
    price: 120,
    imga: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
products.push({
    nombre: 'bike',
    price: 120,
    imga: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
products.push({
    nombre: 'pantalla',
    price: 300 ,
    imga: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
products.push({
    nombre: 'computador',
    price: 600,
    imga: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
products.push({
    nombre: 'bike',
    price: 120,
    imga: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
 for(product of products ){


    /* <div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="'product-info'>
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div> */

      const producrCard= document.createElement('div');
      producrCard.classList.add('product-card');
      const productimg= document.createElement('img');
      productimg.setAttribute('src', product.imga);

      

      const  productInfo= document.createElement('div');
      productInfo.classList.add('product-info');

      const  productInfoDiv= document.createElement('div');
      const productPrice=document.createElement('p');
      productPrice.innerText='$' + product.price;   

      const productname=document.createElement('p');
      productname.innerText=product.nombre;

      

      productInfoDiv.appendChild(productPrice);
      productInfoDiv.appendChild(productname);


      const  productInfofigure= document.createElement('figure');
      const producrImgCard=document.createElement('img');
      producrImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');
    
      productInfofigure.appendChild(producrImgCard);

      productInfo.appendChild(productInfofigure);
      productInfo.appendChild(productInfoDiv);
      

      producrCard.appendChild(productimg);
      producrCard.appendChild(productInfo); 

      
      cardsContaine.appendChild(producrCard);
      
      






 }



