//document.querySelector(".navbar-email");
const navEmail = document.getElementsByClassName("navbar-email")[0]; 
const divDesktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.getElementsByClassName("menu")[0];
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

navEmail.addEventListener("click", ()=> {
  const isAsideClosed = aside.classList.contains("inactive");

  if(!isAsideClosed) {
    aside.classList.add("inactive");
  }

  divDesktopMenu.classList.toggle("inactive");
});

menuHamIcon.addEventListener("click", ()=> {
  const isAsideClosed = aside.classList.contains("inactive");

  if(!isAsideClosed) {
    aside.classList.add("inactive");
  }

  mobileMenu.classList.toggle('inactive');
});

menuCarritoIcon.addEventListener("click", ()=> {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
  const isDesktopMenuClosed = divDesktopMenu.classList.contains("inactive");

  if(!isDesktopMenuClosed) {
    divDesktopMenu.classList.add("inactive");
  }
  
  if(!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }

  aside.classList.toggle("inactive");
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
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
},
{
  name: 'Pantalla',
  price: 320,
  image: "https://www.coppel.com/images/catalog/pm/2989683-1.jpg"
},
{
  name: 'Computadora',
  price: 650,
  image: "https://i.dell.com/is/image/DellContent/content/dam/ss2/products/desktops-and-all-in-ones/optiplex/7400-aio/spi/ng/desktop-aio-optiplex-24-7400-campaign-hero-504x350-ng.psd?fmt=jpg&wid=504&hei=350"
},
{
  name: 'Camara',
  price: 350,
  image: "https://mxsonyb2c.vtexassets.com/arquivos/ids/201008/ILCE-6400L_1.jpg?v=636864171453130000"
},
{
  name: 'Automovil',
  price: 4250,
  image: "https://acnews.blob.core.windows.net/imgnews/paragraph/NPAZ_9325f8bd5d644f93b5aab46c23a59c15.jpg"
},
{
  name: 'Bike',
  price: 120,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
},
{
  name: 'Pantalla',
  price: 320,
  image: "https://www.coppel.com/images/catalog/pm/2989683-1.jpg"
},
{
  name: 'Computadora',
  price: 650,
  image: "https://i.dell.com/is/image/DellContent/content/dam/ss2/products/desktops-and-all-in-ones/optiplex/7400-aio/spi/ng/desktop-aio-optiplex-24-7400-campaign-hero-504x350-ng.psd?fmt=jpg&wid=504&hei=350"
},
{
  name: 'Camara',
  price: 350,
  image: "https://mxsonyb2c.vtexassets.com/arquivos/ids/201008/ILCE-6400L_1.jpg?v=636864171453130000"
},
{
  name: 'Automovil',
  price: 4250,
  image: "https://acnews.blob.core.windows.net/imgnews/paragraph/NPAZ_9325f8bd5d644f93b5aab46c23a59c15.jpg"
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