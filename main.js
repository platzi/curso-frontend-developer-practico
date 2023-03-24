const $ = (selector) => document.querySelector(selector);
const navbarEmail = $(".navbar-email");
const desktopMenu = $(".desktop-menu");

const menuIcon = $(".menu");
const mobileMenu = $(".mobile-menu");

const productDetail = $(".product-detail");
const navShopCart = $(".navbar-shopping-cart");


const productos = [
  { 
    nombre: "Camiseta",
    precio: 20.00,
    imagen: "https://example.com/camiseta.jpg",
    stock: 10 
  },
  { 
    nombre: "Pantalón",
    precio: 40.00,
    imagen: "https://example.com/pantalon.jpg",
    stock: 5 
  },
  { 
    nombre: "Zapatos",
    precio: 60.00,
    imagen: "https://example.com/zapatos.jpg",
    stock: 8 
  },
  { 
    nombre: "Gorra",
    precio: 15.00,
    imagen: "https://example.com/gorra.jpg",
    stock: 20 
  },
  { 
    nombre: "Chaqueta",
    precio: 80.00,
    imagen: "https://example.com/chaqueta.jpg",
    stock: 3 
  },
  { 
    nombre: "Bolso",
    precio: 50.00,
    imagen: "https://example.com/bolso.jpg",
    stock: 12 
  },
  { 
    nombre: "Reloj",
    precio: 100.00,
    imagen: "https://example.com/reloj.jpg",
    stock: 7 
  },
  { 
    nombre: "Pulsera",
    precio: 25.00,
    imagen: "https://example.com/pulsera.jpg",
    stock: 15 
  },
  { 
    nombre: "Zapatillas",
    precio: 90.00,
    imagen: "https://example.com/zapatillas.jpg",
    stock: 4 
  },
  { 
    nombre: "Vestido",
    precio: 70.00,
    imagen: "https://example.com/vestido.jpg",
    stock: 9 
  },
  { 
    nombre: "Pendientes",
    precio: 20.00,
    imagen: "https://example.com/pendientes.jpg",
    stock: 18 
  },
  { 
    nombre: "Botines",
    precio: 75.00,
    imagen: "https://example.com/botines.jpg",
    stock: 6 
  },
  { 
    nombre: "Mochila",
    precio: 45.00,
    imagen: "https://example.com/mochila.jpg",
    stock: 11 
  },
  { 
    nombre: "Sombrero",
    precio: 30.00,
    imagen: "https://example.com/sombrero.jpg",
    stock: 14 
  },
  { 
    nombre: "Collar",
    precio: 35.00,
    imagen: "https://example.com/collar.jpg",
    stock: 16 
  }
];





navbarEmail.addEventListener("click", toogleDesktopMenu);
menuIcon.addEventListener("click", toogleMenuMobile);
navShopCart.addEventListener("click", toogleShoppingCart);

function toogleDesktopMenu() {
  productDetail.classList.add("inactive");
  desktopMenu.classList.toggle("inactive");
}

function toogleMenuMobile() {
  mobileMenu.classList.toggle("inactive");
  productDetail.classList.add("inactive");
}

function toogleShoppingCart() {
  desktopMenu.classList.add("inactive");
  mobileMenu.classList.add("inactive");
  productDetail.classList.toggle("inactive");
}



function renderProducts(productos) {
  const productsContainer = $(".cards-container");
  productos.forEach((producto) => {
    const product = document.createElement("div");
    product.classList.add("product-card");
    product.innerHTML = `
      <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="${producto.nombre}">
      <div class="product-info">
        <div>
          <p>$ ${producto.precio}</p>
          <p>${producto.nombre}</p>
        </div>
        <figure>
          <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
      </div>
    `;
    productsContainer.appendChild(product);
  });
};

renderProducts(productos);

