const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const BurguerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const Carrito_icon = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const cards_container = document.querySelector(".cards-container");
const ProductDetail = document.querySelector("#ProductDetail");
const product_close = document.querySelector(".product-detail-close")

menuEmail.addEventListener("click", toggleDesktopMenu);
BurguerMenu.addEventListener("click", toggleMobileMenu);
Carrito_icon.addEventListener("click", toggleCar);
product_close.addEventListener("click",CloseProduct);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
  console.log("prueba");
  const IsCarritoClosed = shoppingCartContainer.classList.contains("inactive");

  if (!IsCarritoClosed) {
    shoppingCartContainer.classList.add("inactive");
  }
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");

  const IsCarritoClosed = shoppingCartContainer.classList.contains("inactive");
  if (!IsCarritoClosed) {
    shoppingCartContainer.classList.add("inactive");
  }
  CloseProduct();
}

function toggleCar() {
  shoppingCartContainer.classList.toggle("inactive");
  const IsMobileClosed = mobileMenu.classList.contains("inactive");

  if (!IsMobileClosed) {
    mobileMenu.classList.add("inactive");
  }

  const IsProductDetailClosed = ProductDetail.classList.contains("inactive");
  if (!IsProductDetailClosed) {
    ProductDetail.classList.add("inactive");
  }
}

function openProductDetailAside() {
  shoppingCartContainer.classList.add("inactive");

  ProductDetail.classList.remove("inactive")
  
}

function CloseProduct () {
  ProductDetail.classList.add("inactive")
}

const productList = [];
productList.push({
  name: "Bike",
  price: 120,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
  name: "Pantalla",
  price: 520,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
  name: "Bike",
  price: 120,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push ({
  name:'Bike',
  price: 12700,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push ({
  name:'Bicycle helmet',
  price: 1200,
  image: 'https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});
productList.push ({
  name:'Bicycle helmet',
  price: 1600,
  image: 'https://m.media-amazon.com/images/I/61eExL-rIAL._AC_SL1001_.jpg'
});
productList.push ({
  name:'Bicycle helmet',
  price: 1500,
  image: 'https://assets.specialized.com/i/specialized/60822-140_HLMT_CHAMONIX-HLMT-MIPS-CE-MRN-M-L_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});
productList.push ({
  name:'Seat',
  price: 300,
  image: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg'
});
productList.push ({
  name:'Tennis Montain Bike',
  price: 2200,
  image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg'
});
productList.push ({
  name:'Sunglasses',
  price: 800,
  image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602'
});
productList.push ({
  name:'Sunglasses',
  price: 600,
  image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/siroko-tech-k3s-clearfog-lente-antiniebla-frontal/1200x/crop_center.jpg?v=1635209603'
});
productList.push ({
  name:'Bicycle seat bag',
  price: 876,
  image: 'https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg'
}); 



function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    const img = document.createElement('img')
    img.setAttribute('src',product.image)
    img.addEventListener("click", openProductDetailAside)
    
    const productInfo = document.createElement("div")
    productInfo.classList.add("product-info")
  
    const productInfoDiv = document.createElement("div")
  
    const p1 = document.createElement("p");
    p1.innerText="$" + product.price;
  
    const p2 = document.createElement("p");
    p2.innerText = product.name;
  
    const figure = document.createElement("figure");
  
    const imgcarrito = document.createElement("img")
    imgcarrito.setAttribute("src","./icons/bt_add_to_cart.svg")
  
  
    productCard.append(img,productInfo);
    productInfo.append(productInfoDiv,figure)
    productInfoDiv.append(p1,p2);
    figure.append(imgcarrito);
  
    cards_container.appendChild(productCard);
    
  }
}

renderProducts(productList);