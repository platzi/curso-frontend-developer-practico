
const API_URL = 'https://api.escuelajs.co/api/v1'

const createProductDiv = (options) => {
  const divCard = document.createElement('div');
  const divProductInfo = document.createElement('div');
  const divInfo = document.createElement('div');
  const productPrice = document.createElement('p');
  const productName = document.createElement('p');
  const figure = document.createElement('figure');
  const imgProduct = document.createElement('img');
  const imgIcon = document.createElement('img');

  divCard.classList.add('product-card');
  divProductInfo.classList.add('product-info');
  
  productPrice.textContent = `$${options.price},00`
  productName.textContent = options.name
  
  imgProduct.setAttribute('src', `${options.src}`)
  imgProduct.setAttribute('alt', `${options.name}`)
  imgProduct.addEventListener('click', openProductInfo)

  imgIcon.setAttribute('src', './icons/bt_add_to_cart.svg')
  imgIcon.setAttribute('alt', `Add to cart ${options.name}`)
  
  figure.append(imgIcon);
  divInfo.append(productPrice, productName);
  divProductInfo.append(divInfo, figure); 
  divCard.append(imgProduct, divProductInfo);

  return divCard;
}

const getProducts = async() => {
  const res = await fetch(`${ API_URL }/products?offset=20&limit=15`);
  const data = await res.json();

  const fragment = new DocumentFragment;

  data.forEach( item => {
    const productDiv = createProductDiv({
      id: item.id,
      src: item.category.image,
      name: item.title,
      price: item.price
    })
    fragment.append(productDiv);
  })
  cardsContainer.append(fragment);
}

getProducts();