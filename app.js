 const navEmail = document.querySelector('.navbar-email')
 const desktopMenu = document.querySelector('.desktop-menu')
 const menuIcon = document.querySelector('.menu')
 const mobilemenu = document.querySelector('.mobile-menu')
 const menuCarritoIcon = document.querySelector('.iconocarrito')
 const aside = document.querySelector('.product-detail')
 const cardsContainer = document.querySelector('.cards-container');
 

navEmail.addEventListener('click', toggledesktopmenu);
function toggledesktopmenu(){
    desktopMenu.classList.toggle('inactive')
}

menuIcon.addEventListener('click', togglemobiledesktop);
function togglemobiledesktop(){
   const isAsideClosed = aside.classList.contains('inactive');

  if (!isAsideClosed) {
    aside.classList.add('inactive');
  }
    mobilemenu.classList.toggle('inactive')
 }

menuCarritoIcon.addEventListener('click', tagglecarritomenu);
function tagglecarritomenu(){
   const isMenuclosed = mobilemenu.classList.contains('inactive');

   if(!isMenuclosed){
      mobilemenu.classList.add('inactive')
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
   productInfoDiv.append(productName, productPrice)
   productInfo.append(productInfoDiv, productInfoFigure)
   productCard.append(img, productInfo)

   cardsContainer.appendChild(productCard)
 }

 
