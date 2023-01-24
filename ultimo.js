const productDetailCloseIcon=document.querySelector('.product-detail-close')
const shoppingCartContainer=document.querySelector('#shoppingCartContainer');
const productDetailContainer=document.querySelector('#productDetail');
productDetailCloseIcon.addEventListener('click',closeProductDetailAside);

function toggleMobileMenu(){
    const isAsideClosed=shoppingCartContainer.classList.contains('inactive');
    if(!isAsideClosed){
      shoppingCartContainer.classList.add('inactive');
    }
  closeProductDetailAside();mobileMenu.classList.toggle('inactive');
  }
  function toggleCarritoAside(){
    const isMobileMenuClosed=mobileMenu.classList.contains('inactive');
    if(!isMobileMenuClosed){
      mobileMenu.classList.add('inactive');
    }
  const isProductDetailClosed=productDetailContainer.classList.contains('inactive');
  if(!isProductDetailClosed){
    productDetailContainer.classList.add('inactive');
  }
  shoppingCartContainer.classList.toggle('inactive');
  }
  function openProductDetailAside(){
    shoppingCartContainer.classList.add('inactive');productDetailContainer.classList.remove('inactive');
  }
  function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
  }

  