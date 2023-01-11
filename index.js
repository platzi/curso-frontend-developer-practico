const email=document.querySelector(".navbar-email");
const otracosa=document.querySelector(".desktop-menu");
const imagen=document.querySelector(".menu");
const movile=document.querySelector(".mobile-menu")
const carrito=document.querySelector(".navbar-shopping-cart")
const aside=document.querySelector("#shopping-cart-container")
const articulos=document.querySelector('.cards-container')

email.addEventListener('click',()=>{

aside.classList.add('inactive');
otracosa.classList.toggle('inactive');

})

imagen.addEventListener('click',()=>{


aside.classList.add('inactive');
movile.classList.toggle('inactive');

})


carrito.addEventListener('click',()=>{


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


for(elemento of product){

    articulos.innerHTML+=`<div class="product-card">
    <img src="${elemento.imagen}" alt="">
    <div class="product-info">
      <div>
        <p>$${elemento.precio}</p>
        <p>${elemento.name}</p>
      </div>
      <figure>
        <img src="./icons/bt_add_to_cart.svg" alt="">
      </figure>
    </div>
  </div>`
};
