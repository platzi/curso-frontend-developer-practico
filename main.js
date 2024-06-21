const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')

const menuHam = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')

const carritoDeCompras = document.querySelector('.navbar-shopping-cart')
const productos =document.querySelector('.product-detail')
const cardConteiner =document.querySelector('.cards-container')


menuEmail.addEventListener('click',toggleDesktopMenu);
menuHam.addEventListener('click',toggleHamMenu);                                
carritoDeCompras.addEventListener('click',toggleProductos)


 function toggleDesktopMenu(){
   mobileMenu.classList.add('inactive')
   productos.classList.add('inactive')

  desktopMenu.classList.toggle('inactive')
 }

 function toggleHamMenu(){
   productos.classList.add('inactive')

    mobileMenu.classList.toggle('inactive')
 }

 function toggleProductos(){
   
   desktopMenu.classList.add('inactive')
   mobileMenu.classList.add('inactive')

   productos.classList.toggle('inactive')

 }


 const productList=[];
 productList.push({
   name:"bike",
   price:"120",
   imagen:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
   name:"TV",
   price:"1200",
   imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReA0tdkmidVQs-wXvFnrFQGjHJMOrodhMcz5WKZvX-Cg&s"
});
 productList.push({
   name:"NOTEBOOK",
   price:"12000",
   imagen:"https://www.jvs-informatica.com/blog/wp-content/uploads/2022/07/Las-pantallas-LCD-para-laptop.jpg"
});

function renderProducts(arr){
for(const product of arr){
   const productCard=document.createElement('div');
   productCard.classList.add('product-card');

   const productImg = document.createElement('img');
   productImg.setAttribute('src',product.imagen);

   
   const productInfo=document.createElement('div');
   productInfo.classList.add('product-info');

   const productInfoDiv = document.createElement('div');

   const productPreci = document.createElement('p');
   productPreci.innerText='$'+ product.price;
   const productName = document.createElement('p');
   productName.innerText = product.name;
   
   productInfoDiv.appendChild(productPreci);
   productInfoDiv.appendChild(productName);


   const productInfoFigure = document.createElement('figure');
   const productInfoImg = document.createElement('img');
   productInfoImg.setAttribute('src','./icons/bt_add_to_cart.svg');

   productInfoFigure.appendChild(productInfoImg);
   
   productInfo.appendChild(productInfoFigure);
   productInfo.appendChild(productInfoDiv);
   
   productCard.appendChild(productImg);
   productCard.appendChild(productInfo);

   cardConteiner.appendChild(productCard);

}
}
renderProducts(productList)