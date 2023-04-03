
const menuEmail = document.querySelector(".navbar-email")
const DesktopMenu = document.querySelector(".desktop-menu")

const MenuBurger = document.querySelector(".menuBurger")
const mobileMenu = document.querySelector(".mobile-menu")

const menuCarrito = document.querySelector(".navbar-shopping-cart")
const menuMyorder = document.querySelector("#shoppingCartContainer")

const cardsContainer = document.querySelector(".cards-container")

const detalles = document.querySelector("#productDetail")
const detallesPicture = document.querySelector(".cards-container")
const cerrardetalles = document.querySelector(".close")


// detallesPicture.addEventListener("click", detallesproduct)
// cerrardetalles.addEventListener("click", detallesproduct)

// function detallesproduct() {
//     detalles.classList.toggle('inactive')
//     // cerrardetalles.toggle('inactive')

//     menuMyorder.classList.add("inactive");

// }




menuEmail.addEventListener('click', correoMenu)
function correoMenu() {
    DesktopMenu.classList.toggle('inactive')

    detalles.classList.add('inactive')
    menuMyorder.classList.add("inactive")

}

MenuBurger.addEventListener("click", toogleMobile)
function toogleMobile() {

    mobileMenu.classList.toggle("inactive")

    menuMyorder.classList.add("inactive");
    detalles.classList.add('inactive')


}

menuCarrito.addEventListener('click', toogleMyOrder)
function toogleMyOrder() {
    menuMyorder.classList.toggle("inactive")

    mobileMenu.classList.add("inactive")
    detalles.classList.add('inactive')
    DesktopMenu.classList.add('inactive')


}


const productList = [];

productList.push({
  name: "higado",
  price: 120,
  image: "https://images.pexels.com/photos/8272928/pexels-photo-8272928.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  info: "higado ayuda",
});

productList.push({
  name: "Pulmones",
  info: "pulmon respira",
  price: 100000,
  image:
    "https://imgs.search.brave.com/dh_Mjj5R_AIHMtR5BhT3_FsN5DdckfpmwqInba19GQU/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/bHVuZ3NhbmR5b3Uu/Y29tL3N0YXRpYy9p/bWFnZXMvcHJvZ3Jl/c3Npb24vbm9ybWFs/LWx1bmdzLmpwZw",
});

productList.push({
    info: "riñon bueno",

  name: "Riñones",
  price: 120,
  image:
    "https://e7.pngegg.com/pngimages/779/986/png-clipart-kidney-kidney-failure-membranoproliferative-glomerulonephritis-minimal-change-disease-membranous-glomerulonephritis-kidney-miscellaneous-hand.png",
});

// const cardsContainer = document.querySelector(".cards-container");
 function cerrar() {
    detalles.classList.toggle('inactive')
    // cerrardetalles.toggle('inactive')
    menuMyorder.classList.add("inactive");
    // console.log(product.image);

 }


function renderProducts(arr) {

    for (product of productList) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        productCard.innerHTML = `
        <img class="imagenDetalle" src="${product.image}" alt="" data-name="${product.name}" data-price="${product.price}" data-image="${product.image}" data-info="${product.info}" ">
        <div class="product-info">
            <div>
                <p>$ ${product.price}</p>
                <p>${product.name}</p>
            </div>
            <figure>
                <img src="./icons/bt_add_to_cart.svg" alt="">
            </figure>
        </div>
    `;

        productCard.querySelector('.imagenDetalle').addEventListener('click', () => {
            const name = productCard.querySelector('.imagenDetalle').getAttribute('data-name');
            const price = productCard.querySelector('.imagenDetalle').getAttribute('data-price');
            const image = productCard.querySelector('.imagenDetalle').getAttribute('data-image');
            const info = productCard.querySelector('.imagenDetalle').getAttribute('data-info');
            
              cerrardetalles.addEventListener("click", cerrar);

        });

        cardsContainer.appendChild(productCard);
        productCard.addEventListener('click', mostrarDetallesProducto);
    }
}


function mostrarDetallesProducto() {

    detalles.classList.toggle('inactive')
    // cerrardetalles.toggle('inactive')
    menuMyorder.classList.add("inactive");
  
  console.log(
      `Product image: ${this.querySelector(".imagenDetalle").dataset.image}`

  );
  
    console.log(
      `Product name: ${this.querySelector(".imagenDetalle").dataset.name},
       Product price: $${this.querySelector(".imagenDetalle").dataset.price},
       Product info: ${this.querySelector(".imagenDetalle").dataset.info}
       ` 
       );
  }
  
renderProducts(productList);





