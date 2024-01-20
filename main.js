const MenuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu'); 
const MenuCarritoIcon = document.querySelector('.navbar-shopping-cart'); 

const ProductDetailClose  = document.querySelector('.product-detail-close'); 


const shoppingCartContainer = document.querySelector('#shoppingCartContainer'); 

const productDetailContainer = document.querySelector('#productDetail'); 

const cardsContainer = document.querySelector('.cards-container'); 




MenuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobilrMenu);
MenuCarritoIcon.addEventListener('click', toggleMenuCarritoIcon);
ProductDetailClose.addEventListener('click', closeProductDetailAside);


function toggleDesktopMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');


    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');  
    }


    desktopMenu.classList.toggle('inactive');
}

function toggleMobilrMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');


    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');  
    }

    closeProductDetailAside();

    mobileMenu.classList.toggle('inactive');
}

function toggleMenuCarritoIcon() {
    const ismobileMenuClosed = mobileMenu.classList.contains('inactive');


    if (!ismobileMenuClosed) {
     mobileMenu.classList.add('inactive');  
    }

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');


    if (!isProductDetailClosed) {
     productDetailContainer.classList.add('inactive');  
    }

    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside() {
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
} 

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
    // shoppingCartContainer.classList.remove('inactive');
}

const productList = [];
productList.push({
    name: "Bike",
    price: 120,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi ratione numquam laboriosam asperiores quod fugit nesciunt quidem? Alias officiis sapiente vel",
});

productList.push({
    name: "Pantalla",
    price: 220,
    imagen: "https://static.eldiario.es/clip/24114d9f-d1d1-4732-a66a-9af43fccb9b8_16-9-aspect-ratio_default_0.jpg",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi ratione numquam laboriosam asperiores quod fugit nesciunt quidem? Alias officiis sapiente vel",
});

productList.push({
    name: "Portatiles Acer",
    price: 1500,
    imagen: "https://http2.mlstatic.com/D_NQ_NP_914344-MLA48914576234_012022-O.webp",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi ratione numquam laboriosam asperiores quod fugit nesciunt quidem? Alias officiis sapiente vel",

})

function openModal(product) {

    console.log(product);
  
    const modalImg = document.getElementById('modal-img');
    modalImg.src = product.imagen;

    const productImgeDetail = document.querySelector("#modal-img")
    const productPrice = document.querySelector(".product-info .product-price-detail");
    const productName = document.querySelector(".product-info .product-name-detail");
    const productDescription = document.querySelector(".product-description-detail");
    productPrice.innerHTML = "$ " + product.price;
    productName.innerHTML = product.name;
    productImgeDetail.setAttribute('src', product.imagen);
    productDescription.innerHTML = product.description;
  
  }

  function renderProducts(arr) {
    // const productImg = document.createElement("img");
    for (const product of arr) {

        const productImg = document.createElement('img');  
        productImg.src = product.imagen;

      const productCard = document.createElement("div");
      productCard.classList.add("product-card");
      productImg.setAttribute("src", product.imagen);

      productImg.addEventListener("click", openProductDetailAside);
      productImg.addEventListener("click", () => openModal(product));

      const productInfo = document.createElement("div");
      productInfo.classList.add("product-info");
      const productInfoDiv = document.createElement("div");

      const productPrince = document.createElement("p");
      productPrince.innerText = "$" + product.price;
      const productName = document.createElement("p");
      productName.innerText = product.name;
      productInfoDiv.append(productPrince, productName)
      
      const productInfoFigure = document.createElement("figure");
      const productImgCart = document.createElement("img");
      productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");
      
      productInfoFigure.appendChild(productImgCart);
      productInfo.appendChild(productInfoDiv);
      productInfo.appendChild(productInfoFigure);
      productCard.appendChild(productImg);
      productCard.appendChild(productInfo);
      cardsContainer.appendChild(productCard);
    }
  }
  renderProducts(productList);