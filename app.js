 const navEmail = document.querySelector('.navbar-email')
 const desktopMenu = document.querySelector('.desktop-menu')
 const menuIcon = document.querySelector('.menu')
 const mobilemenu = document.querySelector('.mobile-menu')
 const menuCarritoIcon = document.querySelector('.iconocarrito')
 const aside = document.querySelector('.product-detail')
 const cardsContainer = document.querySelector('.cards-container');
 const productoDetail = document.querySelector('.product-detail2')
 

navEmail.addEventListener('click', toggledesktopmenu);
function toggledesktopmenu(){
    
    const isAsideClosed = aside.classList.contains('inactive');

  if (!isAsideClosed) {
    aside.classList.add('inactive');
  }
  const isProductDetailClose = productoDetail.classList.contains('inactive');

   if(!isProductDetailClose){
      productoDetail.classList.add('inactive')
   }
   desktopMenu.classList.toggle('inactive')
}

menuIcon.addEventListener('click', togglemobiledesktop);
function togglemobiledesktop(){
   const isAsideClosed = aside.classList.contains('inactive');

  if (!isAsideClosed) {
    aside.classList.add('inactive');
  }
  const isProductDetailClose = productoDetail.classList.contains('inactive');

   if(!isProductDetailClose){
      productoDetail.classList.add('inactive')
   }

    mobilemenu.classList.toggle('inactive')
 }

menuCarritoIcon.addEventListener('click', tagglecarritomenu);
function tagglecarritomenu(){
   const isMenuclosed = mobilemenu.classList.contains('inactive');

   if(!isMenuclosed){
      mobilemenu.classList.add('inactive')
   }
   const isProductDetailClose = productoDetail.classList.contains('inactive');

   if(!isProductDetailClose){
      productoDetail.classList.add('inactive')
   }
    aside.classList.toggle('inactive')
 }

const productList = [];
 productList.push({
   name: "Bike",
   price: 200,
   imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
 })
 productList.push({
   name: "Tv",
   price: 500,
   imagen: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/N3DJIK3Y75BBJL6KVGJYRQVTJQ.webp",
 })
 productList.push({
   name: "Tablet",
   price: 400,
   imagen: "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2020/09/samsung-galaxy-tab-s7-analisis-opinion-2058415.jpg",
 })
 productList.push({
  name: "Tablet",
  price: 400,
  imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productList.push({
  name: "Tablet",
  price: 400,
  imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productList.push({
  name: "Tablet",
  price: 400,
  imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productList.push({
  name: "Tablet",
  price: 400,
  imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productList.push({
  name: "Tablet",
  price: 400,
  imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productList.push({
  name: "Tablet",
  price: 400,
  imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productList.push({
  name: "Tablet",
  price: 400,
  imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productList.push({
  name: "Tablet",
  price: 400,
  imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productList.push({
  name: "Tablet",
  price: 400,
  imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})

for (product of productList){
    const productCard = document.createElement('div');
   productCard.classList.add('product-card');

   const img = document.createElement('img');
   img.setAttribute('src', product.imagen)
   img.addEventListener('click', openproductdetail)
   function openproductdetail(){
    productoDetail.classList.toggle('inactive')
   }
   const closeProductDetail = document.querySelector('.product-detail-close')
   closeProductDetail.addEventListener('click', cerrarproducto)
   function cerrarproducto(){
    productoDetail.classList.add('inactive')
   }

   const productPrice = document.createElement('p');
   productPrice.innerText = '$' + product.price;

   const productName = document.createElement('p');
   productName.innerText = product.name;

   const productInfo = document.createElement('div');
   productInfo.classList.add('product-info');

   const productInfoDiv = document.createElement('div');

  const productInfoFigure = document.createElement('figure');

   const productImgCard = document.createElement('img')
   productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg')

   productInfoFigure.appendChild(productImgCard);
   productInfoDiv.append(productPrice, productName)
   productInfo.append(productInfoDiv, productInfoFigure)
   productCard.append(img, productInfo)

   cardsContainer.appendChild(productCard)
 }

 
