const numeroCarrito = document.querySelector(".carrito")
numeroCarrito.innerText= 0 
var sumaPrecios = 0
const botonesCompra = document.querySelectorAll("img.botonCompra")

const orderContent = document.querySelector(".my-order-content")

const ordenProducts = document.createElement("div")
ordenProducts.setAttribute("class", "products")


orderContent.appendChild(ordenProducts)

for (const boton of botonesCompra) {
    boton.addEventListener("click", agregarAlCarrito)
    function agregarAlCarrito(boton) {
            const divShoppingCard = document.createElement("div")
            const figureShoppingCard = document.createElement("figure")
            const img1ShoppingCard = document.createElement("img")
            const p1ShoppingCard = document.createElement("p")
            const p2ShoppingCard = document.createElement("p")
            const img2ShoppingCard = document.createElement("img")
            
            let productEncontrado = productList.find(function (e) {
                return boton.target.id === e.name
            })
            numeroCarrito.innerText++
            divShoppingCard.setAttribute("class", "shopping-cart")
            img2ShoppingCard.setAttribute("src", "./icons/icon_close.png")
            img2ShoppingCard.setAttribute("alt", "close")
            img2ShoppingCard.setAttribute("class", "borrar")
            img2ShoppingCard.addEventListener("click", borrarProducto)
            p2ShoppingCard.innerText = "$" + productEncontrado.precio
            p1ShoppingCard.innerText = productEncontrado.name
            img1ShoppingCard.setAttribute("src", productEncontrado.img)
            img1ShoppingCard.setAttribute("alt", productEncontrado.name)
            
            divShoppingCard.appendChild(figureShoppingCard)
            figureShoppingCard.appendChild(img1ShoppingCard)
            divShoppingCard.appendChild(p1ShoppingCard)
            divShoppingCard.appendChild(p2ShoppingCard)
            divShoppingCard.appendChild(img2ShoppingCard)
            ordenProducts.appendChild(divShoppingCard)
            
            
            function borrarProducto() {
                ordenProducts.removeChild(divShoppingCard)
                const precioProducto = productEncontrado.precio
                sumaPrecios -= precioProducto
                p2Order.innerText = "$" + sumaPrecios
                numeroCarrito.innerText--
                
            }
   
            sumaPrecios += productEncontrado.precio

            
            const existenProductos = document.getElementsByClassName("products")
            if (existenProductos.length < 0) {

            } else {
             
                p2Order.innerText = "$" + sumaPrecios
            }

            }
    
    }
const classOrder = document.createElement("div")
const p1Order = document.createElement("p")
const spanOrder = document.createElement("span")
const p2Order = document.createElement("p")

classOrder.setAttribute("class", "order")
spanOrder.innerText = "Total"

orderContent.appendChild(classOrder)
classOrder.appendChild(p1Order)
p1Order.appendChild(spanOrder)
classOrder.appendChild(p2Order)


