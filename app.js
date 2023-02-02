 const navEmail = document.querySelector('.navbar-email')
 const nav = document.querySelector('.desktop-menu')
 const menu = document.querySelector('.menu')
 const mobilemenu = document.querySelector('.mobile-menu')
 const menuCarritoIcon = document.querySelector('.iconocarrito')
 const productDetail = document.querySelector('.product-detail')
 

 navEmail.addEventListener('click', taggledesktopmenu);

 function taggledesktopmenu(){
    nav.classList.toggle('inactive')
 }

menu.addEventListener('click', togglemobiledesktop);
function togglemobiledesktop(){
   const isAsideClosed = productDetail.classList.contains('inactive');

  if (!isAsideClosed) {
    productDetail.classList.add('inactive');
  }
    mobilemenu.classList.toggle('inactive')
 }

 menuCarritoIcon.addEventListener('click', tagglecarritomenu);
 function tagglecarritomenu(){
   const isMenuclosed = mobilemenu.classList.contains('inactive');

   if(!isMenuclosed){
      mobilemenu.classList.add('inactive')
   }
    productDetail.classList.toggle('inactive')
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
   name: "tablet",
   price: 400,
   imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
 })

 for (product of productList){
   const productCard = document.createElement('div');
   productCard.classList('product-card');

   const img = document.createElement('img')
   img.setAttribute('src', product.imagen)

   const productInfo = document.createElement('div');
   productInfo.classList('product-info');
 }