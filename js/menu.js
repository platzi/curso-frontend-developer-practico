
export function togleDesktopMenu(){
    const isCarMenuClose = shoppingCar.classList.contains('inactive');
    const isProductDetailClose = productDetail.classList.contains('inactive');
  
    if(!isCarMenuClose){
        shoppingCar.classList.add('inactive');
    }
    if(!isProductDetailClose){
      productDetail.classList.add('inactive');
    }
  
    desktopMenu.classList.toggle('inactive');
  };
