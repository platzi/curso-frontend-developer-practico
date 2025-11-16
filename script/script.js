const nav_email = document.querySelector(`.navbar-email`);
const desktopMenu = document.querySelector(`.desktop-menu`);
const menuHamIcon = document.querySelector(`.menu`);
const menuCarIcon = document.querySelector(`.navbar-shopping-cart`);
const productDetailCloseIcon = document.querySelector(`.product-detail-close`);
const footerCart = document.querySelector('#footer-cart');
const mobileMenu = document.querySelector(`.mobile-menu`);
const shoppingCartContainer = document.querySelector(`#shoppingCartContainer`);
const montoTotal = document.querySelector('#total');
const cardsContainer = document.querySelector(`.cards-container`);
const productDetailContainer = document.querySelector(`#productDetail`);
const myOrderContent = document.querySelector(`.my-order-content`);
const contadorCarrito = document.querySelector('#cantidad-carrito');
const containPriCant = document.querySelector('.containCov');
const arrowBack = document.querySelector('.title-container img');
const mainContainer = document.querySelector('.main-container');
const containProductDetail = document.querySelector('#contain-product');

// Variable global para almacenar todos los productos disponibles (Se llena con getAll)
let productListStorage = []; // MODIFICACIÓN: Nueva variable para almacenar todos los productos.
let carrito = [];
let url = 'http://localhost:3000/productList';

const getAll = async () => {
  try {
    let res = await fetch(url),
      json = await res.json();

    if (!res.ok) throw { status: res.status, statusText: res.statusText };

    console.log(json);
    productListStorage = json; // MODIFICACIÓN: Guardar la lista completa de productos.
    json.forEach((el) => {
      productList(el);
    });
  } catch (error) {
    let message = error.statusText || 'Ocurrio un error';
    console.log(message, error.status);
    // mainContainer.insertAdjacentHTML(`<h2><b>Error ${error.status}: ${message}</b></h2>`);
  }
};

document.addEventListener('DOMContentLoaded', getAll);

document.addEventListener('DOMContentLoaded', () => {
  carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  // MODIFICACIÓN: Usar renderCart para pintar el carrito al cargar la página.
  renderCart();
});

// MODIFICACIÓN: Se ASUME que estas variables de DOM están definidas en otro lugar de tu código HTML
nav_email.addEventListener(`click`, toggleDesktopMenu);
menuHamIcon.addEventListener(`click`, toggleMobileMenu);
menuCarIcon.addEventListener(`click`, toggleCarAside);
containProductDetail.addEventListener(`click`, closeProductDetailAside);
// NUEVO LISTENER: Para cerrar el carrito cuando se hace clic en la flecha
arrowBack.addEventListener('click', toggleCarAside);

function toggleDesktopMenu() {
  const isAsideClose = shoppingCartContainer.classList.contains(`inactive`);

  if (!isAsideClose) {
    shoppingCartContainer.classList.add(`inactive`);
  }

  desktopMenu.classList.toggle(`inactive`);

  // const iscontainProductDetail =
  // 	containProductDetail.classList.add(`inactive`);
}

function toggleMobileMenu() {
  const isAsideClose = shoppingCartContainer.classList.contains(`inactive`);

  if (!isAsideClose) {
    shoppingCartContainer.classList.add(`inactive`);
  }

  closeProductDetailAside();

  mobileMenu.classList.toggle(`inactive`);
}

function toggleCarAside() {
  // MODIFICACIÓN: La función pintarFooter() ahora está integrada en renderCart().
  renderCart();
  const isMobileMenuClosed = mobileMenu.classList.contains(`inactive`);

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add(`inactive`);
  }

  const isProductDetailClosed =
    containProductDetail.classList.contains(`inactive`);

  if (!isProductDetailClosed) {
    containProductDetail.classList.add(`inactive`);
  }

  shoppingCartContainer.classList.toggle(`inactive`);
}

function openProductDetailAside() {
  shoppingCartContainer.classList.add(`inactive`);
  containProductDetail.classList.remove(`inactive`);

  desktopMenu.classList.add(`inactive`);
}

function closeProductDetailAside() {
  containProductDetail.classList.add(`inactive`);
}

function productList(el) {
  // MODIFICACIÓN: Agregar un atributo data-product-id al botón para mejorar la selección.
  cardsContainer.innerHTML += `
		<div class="product-card">
	<img src=${el.image} alt=${el.name} />
	<div class="product-info">
		<div>
			<p>$${el.price}</p>
			<p>${el.name}</p>
		</div>
		<figure>
			<img class="add-to-cart-btn" data-product-id=${el.id} src="./icons/bt_add_to_cart.svg" alt="Añadir al carrito">
		</figure>
	</div>
</div>
`;
}

cardsContainer.addEventListener('click', (e) => {
  e.stopPropagation();
  // MODIFICACIÓN: Usar e.target.dataset.productId que es más robusto.
  const id = e.target.dataset.productId;
  if (id) {
    addToCart(id);
  }
});

function addToCart(id) {
  // 1. Buscar si el producto ya existe en el carrito
  const existingProduct = carrito.find((prod) => prod.id == id); // Se compara con == ya que id puede ser string y prod.id number.

  if (existingProduct) {
    // Si existe, aumenta la cantidad
    existingProduct.cantidad++;
  } else {
    // Si NO existe, lo agregamos.
    // MODIFICACIÓN: Se busca el producto completo en productListStorage
    const productToAdd = productListStorage.find((prod) => prod.id == id);

    if (productToAdd) {
      // Se agrega al carrito con la propiedad 'cantidad'
      carrito.push({ ...productToAdd, cantidad: 1 });
    }
  }

  // 2. Volver a renderizar el carrito
  renderCart();
}

// MODIFICACIÓN: Renombre de 'productoEnCarrito' a 'renderCart' para reflejar su función de pintado.
function renderCart() {
  // Se crea la estructura HTML dinámica
  const myOrderContent = document.querySelector('.my-order-content'); // MODIFICACIÓN: Se obtiene la referencia del DOM (si no está globalmente).
  const totalElement = document.getElementById('total'); // MODIFICACIÓN: Se obtiene la referencia del DOM (si no está globalmente).
  const footerCart = document.getElementById('footer-cart'); // MODIFICACIÓN: Se obtiene la referencia del DOM (si no está globalmente).

  myOrderContent.innerHTML = '';
  // Eliminar el nodo orderContainer redundante. La estructura está en el HTML inicial.
  // const orderContainer = document.createElement(`div`);
  // orderContainer.classList.add(`my-order-content`);
  // myOrderContent.innerHTML = '';

  pintarFooter(footerCart); // MODIFICACIÓN: Se le pasa la referencia del footer.

  carrito.forEach((product) => {
    // MODIFICACIÓN: Se crea el HTML del producto de forma más simple, usando el template del ejemplo anterior.
    const productItemHTML = `
      <div class="shopping-cart m-0 py-2 justify-content-between">
        <figure>
          <img src="${product.image}" alt="${product.name}">
        </figure>
        <p class="my-0">${product.name}</p>
        <p class="cantidad-product m-0">Qty: ${product.cantidad}</p>
        <p class="m-0 fw-bold price-total">$${(
          product.price * product.cantidad
        ).toFixed(2)}</p>
        <img src="./icons/icon_close.png" alt="close" class="remove-from-cart-btn" data-id="${
          product.id
        }">
      </div>
    `;
    myOrderContent.innerHTML += productItemHTML;
  });

  // 1. Calcular el monto total
  const total = carrito.reduce(
    (acc, product) => acc + product.price * product.cantidad, // MODIFICACIÓN: Multiplicar precio por cantidad.
    0,
  );
  // 2. Pintar el total y el contador
  if (totalElement) {
    // MODIFICACIÓN: Asegurar que el elemento exista antes de modificarlo.
    totalElement.innerText = total.toFixed(2);
  }
  // MODIFICACIÓN: La etiqueta del contador de elementos debe ser seleccionada si existe.

  contadorCarrito.textContent = carrito.reduce(
    (acc, prod) => acc + prod.cantidad,
    0,
  );

  // 3. Agregar listeners a los nuevos botones de eliminar
  addRemoveListeners(myOrderContent);

  // 4. Guardar en localStorage
  guardarStorage();
}

// MODIFICACIÓN: Función para agregar listeners de eliminar al renderizar.
function addRemoveListeners(container) {
  const removeButtons = container.querySelectorAll('.remove-from-cart-btn');
  removeButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      // Usar data-id del botón de cerrar
      const productId = event.currentTarget.dataset.id;
      eliminarProducto(productId);
    });
  });
}

// MODIFICACIÓN: Se ajusta la función para recibir el elemento footer.
const pintarFooter = (footerCart) => {
  if (footerCart) {
    footerCart.innerHTML = '';
    if (carrito.length === 0) {
      footerCart.innerHTML = `
      <p class="my-4" >Vacio, agrega productos a tu carrito.</p>`;
      return;
    }
  }
};

function eliminarProducto(id) {
  const prodId = id;

  // MODIFICACIÓN: Filtrar el carrito. Si la cantidad es > 1, decrementarla. Si es 1, eliminar el producto.
  const existingProductIndex = carrito.findIndex(
    (product) => product.id == prodId,
  );

  if (existingProductIndex !== -1) {
    if (carrito[existingProductIndex].cantidad > 1) {
      carrito[existingProductIndex].cantidad--;
    } else {
      // Si la cantidad es 1, lo elimina del array
      carrito.splice(existingProductIndex, 1);
    }
  }

  renderCart(); // Vuelve a renderizar después de la eliminación/decremento.
}

// MODIFICACIÓN: Nueva función para guardar en LocalStorage (llamada desde renderCart)
function guardarStorage() {
  localStorage.setItem('carrito', JSON.stringify(carrito));
}
