const email=document.querySelector(".navbar-email");
const otracosa=document.querySelector(".desktop-menu");
const imagen=document.querySelector(".menu");
const movile=document.querySelector(".mobile-menu")
const carrito=document.querySelector(".navbar-shopping-cart")
const aside=document.querySelector("#shopping-cart-container")
const articulos=document.querySelector('.cards-container')
const productContainer=document.querySelector('#productDetail')
const icono=document.querySelector('.product-detail-close')

email.addEventListener('click',()=>{

aside.classList.add('inactive');
productContainer.classList.add('inactive');
otracosa.classList.toggle('inactive');

})

imagen.addEventListener('click',()=>{


aside.classList.add('inactive');
productContainer.classList.add('inactive');
movile.classList.toggle('inactive');

})


carrito.addEventListener('click',()=>{

    productContainer.classList.add('inactive');
    otracosa.classList.add('inactive');
    movile.classList.add('inactive');
    aside.classList.toggle('inactive');
   
})

const product=[];

product.push({


    name:"bike",
    precio:120,
    imagen:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

product.push({


    name:"pantalla",
    precio:120,
    imagen:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})


product.push({


    name:"compu",
    precio:120,
    imagen:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

icono.addEventListener('click',()=>{

productContainer.classList.add('inactive')


})

function renderProducts(arr) {
    for (Elemento of arr) {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
    
      // product= {name, price, image} -> product.image
      const productImg = document.createElement('img');
      productImg.setAttribute('src', Elemento.imagen);
      productImg.addEventListener("click",()=>{

        otracosa.classList.add('inactive');
       
        aside.classList.add('inactive');

        productContainer.classList.remove('inactive')

      })
    
    
      const productInfo = document.createElement('div');
      productInfo.classList.add('product-info');
    
      const productInfoDiv = document.createElement('div');
    
      const productPrice = document.createElement('p');
      productPrice.innerText = '$' + Elemento.precio;
      const productName = document.createElement('p');
      productName.innerText = Elemento.name;
    
      productInfoDiv.appendChild(productPrice);
      productInfoDiv.appendChild(productName);
    
      const productInfoFigure = document.createElement('figure');
      const productImgCart = document.createElement('img');
      productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
      productInfoFigure.appendChild(productImgCart);
    
      productInfo.appendChild(productInfoDiv);
      productInfo.appendChild(productInfoFigure);
    
      productCard.appendChild(productImg);
      productCard.appendChild(productInfo);
    
      articulos.appendChild(productCard);
    }
  }
  
  renderProducts(product);
