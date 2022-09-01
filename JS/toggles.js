/* menu movil */
function toggleMovilMenu() {
  const isCarritoDetalleClosed = carritoDetalle.classList.contains("inactivo");
  const isCloseProductDetailaside =
    productDetailContainer.classList.contains("inactivo");
  if (!isCarritoDetalleClosed || !isCloseProductDetailaside) {
    carritoDetalle.classList.add("inactivo");
    productDetailContainer.classList.add("inactivo");
  }
  menuMovil.classList.toggle("inactivo");
}

function toggleCarrito() {
  const isMenuMovilclosed = menuMovil.classList.contains("inactivo");
  const isMenuDesktopClosed = desktopMenu.classList.contains("inactivo");
  const isCloseProductDetailaside =
    productDetailContainer.classList.contains("inactivo");
  if (
    !isMenuMovilclosed ||
    !isMenuDesktopClosed ||
    !isCloseProductDetailaside
  ) {
    menuMovil.classList.add("inactivo");
    desktopMenu.classList.add("inactivo");
    productDetailContainer.classList.add("inactivo");
  }
  carritoDetalle.classList.toggle("inactivo");
}
