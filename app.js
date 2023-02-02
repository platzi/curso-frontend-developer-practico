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