const productDetail = document.querySelector('.product-detail')
const productDetailCloseIcon = document.querySelector('.product-detail-close')

const productDetailClose = () => {
  productDetailCloseIcon.addEventListener('click', closeProductDetail)
  
  function closeProductDetail() {
    productDetail.classList.add('inactive')
  }
}

export {productDetailClose}