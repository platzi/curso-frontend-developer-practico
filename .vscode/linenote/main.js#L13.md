
# Reduccion de codigo con metodo bind
Si el usuario da clic para abrir alguno de los elementos(menu-desktop, mobile-menu y detail-product), los demás se cerrarán, sí están abiertos. Además, desarrollé una función que puedo reutilizar para los eventos, sustituyendo aquellas funciones que resultaban redundantes, las cuales solo contaban con la diferencia del elemento al que se le aplicaría el método toggle. Esto fue posible haciendo uso del método Bind para lograr pasarle argumentos al callback y de esta manera reutilizar la función.

// CODIGO REDUNDANTE

// menuEmail.addEventListener("click", ()=>{
//     desktopMenu.classList.toggle("inactive")
//     aside.classList.add("inactive")
// })

// burguerMenu.addEventListener("click", ()=>{
//     mobile_menu.classList.toggle("inactive")
//     aside.classList.add("inactive")
// })

// ShoppingCart.addEventListener("click", ()=>{
//     aside.classList.toggle("inactive")
//     mobile_menu.classList("inactive")
// })
