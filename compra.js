// const productList1 = []
// productList.push({
//     name: "Bike",
//     precio: 120,
//     img:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
// })
// productList.push({
//     name: "Pantalla",
//     precio: 220,
//     img:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
// })
// productList.push({
//     name: "Computadora",
//     precio: 420,
//     img:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
// })
console.log(productList);
const botonesCompra = document.querySelectorAll("img.botonCompra")
console.log(botonesCompra);

for (const boton of botonesCompra) {
    boton.addEventListener("click",
        function agregarAlCarrito(boton) {
            console.log(boton.target.id);
            const divShoppingCard = document.createElement("div")
            const figureShoppingCard = document.createElement("figure")
            const img1ShoppingCard = document.createElement("img")
            const p1ShoppingCard = document.createElement("p")
            const p2ShoppingCard = document.createElement("p")
            const img2ShoppingCard = document.createElement("img")
            const orderContent = document.querySelector(".my-order-content")

            let productEncontrado = productList.find(function (e) {
                return boton.target.id === e.name
            })
            divShoppingCard.setAttribute("class", "shopping-cart")
            img2ShoppingCard.setAttribute("src","./icons/icon_close.png" )
            img2ShoppingCard.setAttribute("alt","close" )
            p2ShoppingCard.innerText = "$" + productEncontrado.precio
            p1ShoppingCard.innerText = productEncontrado.name
            img1ShoppingCard.setAttribute("src", productEncontrado.img)
            img1ShoppingCard.setAttribute("alt",productEncontrado.name )

            console.log(productEncontrado);
            divShoppingCard.appendChild(figureShoppingCard)
            figureShoppingCard.appendChild(img1ShoppingCard)
            divShoppingCard.appendChild(p1ShoppingCard)
            divShoppingCard.appendChild(p2ShoppingCard)
            divShoppingCard.appendChild(img2ShoppingCard)
            orderContent.appendChild(divShoppingCard)


        }
    )
}

