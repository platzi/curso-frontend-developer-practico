//document.querySelector(".navbar-email");
const navEmail = document.getElementsByClassName("navbar-email")[0]; 
const divDesktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.getElementsByClassName("menu")[0];
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const productDetailCloseIcon = document.getElementsByClassName("product-detail-close")[0];
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector("#productDetail");
const cardsContainer = document.querySelector('.cards-container');
const imgProductDetailContainer = document.getElementById("imgProductDetailContainer");

navEmail.addEventListener("click", ()=> {
  const isShoppingCartContainerClosed = shoppingCartContainer.classList.contains("inactive");

  productDetailContainer.classList.add("inactive");

  if(!isShoppingCartContainerClosed) {
    shoppingCartContainer.classList.add("inactive");
  }

  divDesktopMenu.classList.toggle("inactive");
});

menuHamIcon.addEventListener("click", ()=> {
  const isShoppingCartContainerClosed = shoppingCartContainer.classList.contains("inactive");

  productDetailContainer.classList.add("inactive");

  if(!isShoppingCartContainerClosed) {
    shoppingCartContainer.classList.add("inactive");
  }

  mobileMenu.classList.toggle('inactive');
});

menuCarritoIcon.addEventListener("click", ()=> {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
  const isDesktopMenuClosed = divDesktopMenu.classList.contains("inactive");
  const isProductDetailClosed = productDetailContainer.classList.contains("inactive");

  if(!isDesktopMenuClosed) {
    divDesktopMenu.classList.add("inactive");
  }
  
  if(!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }

  if(!isProductDetailClosed) {
    productDetailContainer.classList.add("inactive");
  }

  shoppingCartContainer.classList.toggle("inactive");
});

productDetailCloseIcon.addEventListener("click", ()=> {
  productDetailContainer.classList.add("inactive");
});

/*<div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div> */
const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  description: "With its practical position, this bike also fulfills a decorative function, add your hall or workspace."
},
{
  name: 'Pantalla',
  price: 320,
  image: "https://www.coppel.com/images/catalog/pm/2989683-1.jpg",
  description: "With its practical position, this TV also fulfills a decorative function, add your hall or workspace."
},
{
  name: 'Computadora',
  price: 650,
  image: "https://i.dell.com/is/image/DellContent/content/dam/ss2/products/desktops-and-all-in-ones/optiplex/7400-aio/spi/ng/desktop-aio-optiplex-24-7400-campaign-hero-504x350-ng.psd?fmt=jpg&wid=504&hei=350",
  description: "A modern PC, 16 Memory RAM, core i7, hard drive 1TB."
},
{
  name: 'Camara',
  price: 350,
  image: "https://mxsonyb2c.vtexassets.com/arquivos/ids/201008/ILCE-6400L_1.jpg?v=636864171453130000",
  description: "With its practical use, this camara also fulfills a decorative function, add your hall or workspace."
},
{
  name: 'Automovil',
  price: 4250,
  image: "https://acnews.blob.core.windows.net/imgnews/paragraph/NPAZ_9325f8bd5d644f93b5aab46c23a59c15.jpg",
  description: "1-touch down/up windows, Automatic temperature control, Passenger vanity mirror and much more."
},
{
  name: 'Bike',
  price: 120,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  description: "With its practical position, this bike also fulfills a decorative function, add your hall or workspace."
},
{
  name: 'Pantalla',
  price: 320,
  image: "https://www.coppel.com/images/catalog/pm/2989683-1.jpg",
  description: "With its practical position, this TV also fulfills a decorative function, add your hall or workspace."
},
{
  name: 'Computadora',
  price: 650,
  image: "https://i.dell.com/is/image/DellContent/content/dam/ss2/products/desktops-and-all-in-ones/optiplex/7400-aio/spi/ng/desktop-aio-optiplex-24-7400-campaign-hero-504x350-ng.psd?fmt=jpg&wid=504&hei=350",
  description: "A modern PC, 16 Memory RAM, core i7, hard drive 1TB."
},
{
  name: 'Camara',
  price: 350,
  image: "https://mxsonyb2c.vtexassets.com/arquivos/ids/201008/ILCE-6400L_1.jpg?v=636864171453130000",
  description: "With its practical use, this camara also fulfills a decorative function, add your hall or workspace."
},
{
  name: 'Automovil',
  price: 4250,
  image: "https://acnews.blob.core.windows.net/imgnews/paragraph/NPAZ_9325f8bd5d644f93b5aab46c23a59c15.jpg",
  description: "1-touch down/up windows, Automatic temperature control, Passenger vanity mirror and much more."
}
);

function renderProducts(products) {
  for(let product of products) {
    //Creamos todos los elementos por separado y después los anidamos según corresponda.
    //Checar el div comentado en este mismo documento, arriba, para una mayor referencia.
    const productCard = document.createElement('div');
    productCard.classList.add("product-card");
  
    const productImg = document.createElement('img');
    productImg.setAttribute("src", product.image);
    productImg.setAttribute("style","cursor:pointer;");
    productImg.addEventListener("click", ()=> {
      imgProductDetailContainer.src = product.image;
      productDetailContainer.children[2].children[0].innerText = `$${product.price.toFixed(2)}`;
      productDetailContainer.children[2].children[1].innerText = product.name;
      productDetailContainer.children[2].children[2].innerText = product.description;
      shoppingCartContainer.classList.add("inactive");
      productDetailContainer.classList.remove("inactive");
      divDesktopMenu.classList.add("inactive");
    });
  
    const productInfo = document.createElement('div');
    productInfo.classList.add("product-info");
  
    const productInfoDiv = document.createElement('div');
    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;
    const productName = document.createElement("p");
    productName.innerText = product.name;
    //Anidamos...
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
  
    const productInfoFigure = document.createElement('figure');
    const productFigureImg = document.createElement('img');
    productFigureImg.src="./icons/bt_add_to_cart.svg";
    //Anidamos...
    productInfoFigure.appendChild(productFigureImg);
  
    //Ahora anidamos productInfoDiv y productInfoFigure a productInfo.
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
  
    //Ahora anidamos a productImg y a productInfo en productCard 
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
  
    //Finalmente anidamos a productCard en su contenedor-div principal
    cardsContainer.appendChild(productCard);
  }
}
renderProducts(productList);