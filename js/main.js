
menuEmail.addEventListener('click', toggleDesktopMenu);

burguerMenu.addEventListener('click', toggleMobileMenu);

shoppingCartNavbar.addEventListener('click', toggleProductDetail);

productClose.addEventListener('click', closeProductInfo);


function toggleDesktopMenu() {
  const isAsideDetailClosed = asideProductDetail.classList.contains('inactive');

  if( !isAsideDetailClosed ) {
    asideProductDetail.classList.add('inactive');
  }

  const isProductInfoClosed = asideProductInfo.classList.contains('inactive');

  if( !isProductInfoClosed ) {
    asideProductInfo.classList.add('inactive');
  }

  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  const isAsideDetailClosed = asideProductDetail.classList.contains('inactive')

  if( !isAsideDetailClosed ) {
    asideProductDetail.classList.add('inactive');
  }

  const isProductInfoClosed = asideProductInfo.classList.contains('inactive');

  if( !isProductInfoClosed ) {
    asideProductInfo.classList.add('inactive');
  }
  
  mobileMenu.classList.toggle('inactive');
}

function toggleProductDetail() {
  const isMobileClosed = mobileMenu.classList.contains('inactive');
  const isDesktopClosed = desktopMenu.classList.contains('inactive');
  const isProductInfoClosed = asideProductInfo.classList.contains('inactive');

  if( !isMobileClosed ) {
    mobileMenu.classList.add('inactive')
  }

  if( !isDesktopClosed ) {
    desktopMenu.classList.add('inactive')
  }

  if( !isProductInfoClosed ) {
    asideProductInfo.classList.add('inactive');
  }

  asideProductDetail.classList.toggle('inactive')
}


function openProductInfo() {
  asideProductDetail.classList.add('inactive');
  mobileMenu.classList.add('inactive');
  desktopMenu.classList.add('inactive')

  asideProductInfo.classList.remove('inactive');
}

function closeProductInfo() {
  asideProductInfo.classList.add('inactive');
}

