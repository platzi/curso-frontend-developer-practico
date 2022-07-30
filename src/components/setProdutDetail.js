const productDetail = document.querySelector('.product-detail')


function setProductDetail(detail) {

  const src = detail.childNodes[0].src
  const price = detail.childNodes[1].firstChild.childNodes[0].innerText
  const title = detail.childNodes[1].firstChild.childNodes[1].innerText

  productDetail.childNodes[3].src = src
  productDetail.childNodes[5].children[0].innerText = price
  productDetail.childNodes[5].children[1].innerText = title
}

export {setProductDetail}