/* Productos del carrito */
function toggleDesktopMenu() {
  const isCloseProductDetailaside =
    productDetailContainer.classList.contains("inactivo");
  const isCarritoDetalle = carritoDetalle.classList.contains("inactivo");
  if (!isCarritoDetalle || !isCloseProductDetailaside) {
    carritoDetalle.classList.add("inactivo");
    productDetailContainer.classList.add("inactivo");
  }

  console.log("Click");
  desktopMenu.classList.toggle("inactivo");
}
