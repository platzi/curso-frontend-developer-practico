//ACA ESTAMOS DECLARANDO UN ARRAY
const productList = [];
const cardsContainer = document.querySelector(".cards-container")
const logoProductos = document.getElementById("jsLogoId")
//ACA LO INICIALIZAMOS Y CON ESTE METODO LE PODEMOS METES INFORMACION AL ARRAY
productList.push({
    name: 'Bike',
    price: 120,
    Imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name: 'Tv',
    price: 220,
    Imagen: 'https://images.pexels.com/photos/6976094/pexels-photo-6976094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})

productList.push({
    name: 'Console',
    price: 320,
    Imagen: 'https://images.pexels.com/photos/2263816/pexels-photo-2263816.jpeg?auto=compress&cs=tinysrgb&w=600'
})

productList.push({
    name: 'Cellphone',
    price: 520,
    Imagen: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})

productList.push({
    name: 'Laptop',
    price: 820,
    Imagen: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})

productList.push({
    name: 'Caballito',
    price: 120,
    Imagen: 'https://images.pexels.com/photos/14840717/pexels-photo-14840717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})

// productList.push({
//     name: prompt('Nombre de producto'),
//     price: prompt('Precio'),
//     Imagen:  prompt('Enlace de foto')
// })


//CON ESTE CICLO FOR ESTAMOS DICIENDO QUE POR CADA ELEMENTO EN UN ARRAY, HACE UNA EJECUCION, PARA ESTO TENEMOS QUE CREAR UNA VARIABLE EN LA PROPIA DECLARACION DEL FOR Y EL ARRAY QUE QUEREMOS QUE SE LE CIRCULE CADA UNO DE SUS ELEMENTOS


for(product of productList){
   const productCard  = document.createElement('div')
   productCard.classList.add('product-card')

   const mainImg = document.createElement('img')
   mainImg.setAttribute('src', product.Imagen)

   const productInfo  = document.createElement('div')
   productInfo.classList.add('product-info')

   const productInfoDiv  = document.createElement('div')
   
   const productPrice  = document.createElement('p')
   productPrice.innerText = '$' + product.price
   const productName = document.createElement('p')
   productName.innerText = product.name
   productInfoDiv.appendChild(productPrice)
   productInfoDiv.appendChild(productName)

   const productInfoFigure = document.createElement('figure')
   const productImgCart = document.createElement('img')
   productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')

   productInfoFigure.appendChild(productImgCart)
   

   productInfo.appendChild(productInfoDiv)
   productInfo.appendChild(productInfoFigure)

   productCard.appendChild(mainImg)
   productCard.appendChild(productInfo)

   cardsContainer.appendChild(productCard)
}


//SI USAMOS EN VES DE UN "OF" USAMOS UN "IN", PODEMOS HACER QUE NOS REGRESE EL INDICE

// for(product in productList){
//     console.log(product)
// }

{/* <div class="product-card">
 <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
 <div class="product-info">
 <div>
 <p>$120,00</p>
 <p>Bike</p>
 </div>
 <figure>
 <img src="./icons/bt_add_to_cart.svg" alt="">
 </figure>
 </div>
</div> */}

