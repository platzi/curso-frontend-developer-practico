//ACA ESTAMOS DECLARANDO UN ARRAY
const productList = [];
const cardsContainer = document.querySelector(".cards-container")
//ACA LO INICIALIZAMOS Y CON ESTE METODO LE PODEMOS METES INFORMACION AL ARRAY
productList.push({
    name: 'Bike',
    price: 120,
    Imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.'
})

productList.push({
    name: 'Tv',
    price: 220,
    Imagen: 'https://images.pexels.com/photos/6976094/pexels-photo-6976094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'With a vintage finish and a beautiful yellow color of the time, this TV is excellent for decorating small spaces.'
})

productList.push({
    name: 'Console',
    price: 320,
    Imagen: 'https://images.pexels.com/photos/2263816/pexels-photo-2263816.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Console GameBoy Color, without details and content three popular games like Super mario, The legend of Zelda and Heartbound.'
})

productList.push({
    name: 'Cellphone',
    price: 520,
    Imagen: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Iphone 8 with Earpods, This one has 98% battery life, without details.'
})

productList.push({
    name: 'Laptop',
    price: 820,
    Imagen: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Laptop lenovo Thinkpad e-8989, 8gb Ram, 1Tb Storage solid disk, Nvidia 1060ti. In Excelent condition'
})

productList.push({
    name: 'Caballito',
    price: 120,
    Imagen: 'https://images.pexels.com/photos/14840717/pexels-photo-14840717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Cute 100% wooden horse, excellent for bedroom decoration'
})

// productList.push({
//     name: prompt('Nombre de producto'),
//     price: prompt('Precio'),
//     Imagen:  prompt('Enlace de foto')
// })


//CON ESTE CICLO FOR ESTAMOS DICIENDO QUE POR CADA ELEMENTO EN UN ARRAY, HACE UNA EJECUCION, PARA ESTO TENEMOS QUE CREAR UNA VARIABLE EN LA PROPIA DECLARACION DEL FOR Y EL ARRAY QUE QUEREMOS QUE SE LE CIRCULE CADA UNO DE SUS ELEMENTOS

function renderProducts(arry){
for(product of arry){
   const productCard  = document.createElement('div')
   productCard.classList.add('product-card')

   const mainImg = document.createElement('img')
   mainImg.setAttribute('src', product.Imagen)
   mainImg.addEventListener('click', openProductDetailAside)

   const productInfo  = document.createElement('div')
   productInfo.classList.add('product-info')

   const productInfoDiv  = document.createElement('div')
   
   const productPrice  = document.createElement('p')
   productPrice.innerText = '$' + product.price
   const productName = document.createElement('p')
   productName.innerText = product.name
   const productDescription = document.createElement('p')
   productDescription.innerText = product.description
   productDescription.classList.add('inactive')
   productInfoDiv.appendChild(productPrice)
   productInfoDiv.appendChild(productName)
   productInfoDiv.appendChild(productDescription)

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
}

renderProducts(productList)

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

//------------------------------------------------------------Menus------------------------------------//

const menuEmail = document.querySelector('.navbar-email')
const menudropdown = document.querySelector('.desktop-menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const shoppingCardContainer = document.querySelector('#shoppingCartContainer')
const productDetails = document.querySelector('#productDetail')
const closeProductDetails = document.querySelector('.product-detail-close')
const shadowBackgraund = document.querySelector('.body-shadow')


menuEmail.addEventListener('click', toggleMenuEmail)
menuCarritoIcon.addEventListener('click', toggleMenuOrder)
closeProductDetails.addEventListener('click', closeDetails)


function toggleMenuEmail(){
    menudropdown.classList.toggle('inactive')
    shoppingCardContainer.classList.add('inactive')
    productDetails.classList.add('inactive')
}

function toggleMenuOrder(){
    shoppingCardContainer.classList.toggle('inactive')
    menudropdown.classList.add('inactive')
    mobilemenu.classList.add('inactive')
    productDetails.classList.add('inactive')
    
    {// const isMobileMenuClosed = mobilemenu.classList.contains('inactive')
    
    // if(!isMobileMenuClosed){
    //    mobilemenu.classList.add('inactive')
    // }
    // shoppingCardContainer.classList.toggle('inactive')
    }
}

function openProductDetailAside(event){
   
    shoppingCardContainer.classList.add('inactive')
    menudropdown.classList.add('inactive')
    mobilemenu.classList.add('inactive')
    productDetails.classList.remove('inactive')
    displayInfoInProductDetail(event)
}

function closeDetails(){
    productDetails.classList.add('inactive')
}
// Extraer informacion del producto

function displayInfoInProductDetail(event){
    const new_img_product_detail = event.path[0].src;

    const product_info = event.path[1].childNodes[1];

    const price = product_info.querySelector('div p:first-child');
    const name = product_info.querySelector('div p:nth-child(2)')
    const description = product_info.querySelector('div p:nth-child(3)')

    const product_detail_img = productDetails.querySelector('img:nth-child(2)')

    product_detail_img.setAttribute('src', new_img_product_detail)

    product_detail_img.setAttribute('alt', name.textContent);

    const product_Detail_Price = productDetails.querySelector('.product-info p:nth-child(1)')

    product_Detail_Price.innerText = price.textContent;

    const product_Detail_Name = productDetails.querySelector('.product-info p:nth-child(2)');

    product_Detail_Name.innerText = name.textContent

    const productDetailDescription = productDetails.querySelector('.product-info p:nth-child(3)');
    productDetailDescription.innerText = description.textContent;

    console.log(event)

     
}

// mobile /////////////////////////////////////////////////////////////////////////////////////////////////////////
const burgerMenuMobile = document.querySelector('.menu')
const mobilemenu = document.querySelector('.mobile-menu')

burgerMenuMobile.addEventListener('click', toggleMenuMobile)

function toggleMenuMobile(){
    mobilemenu.classList.toggle('inactive')
    shoppingCardContainer.classList.add('inactive')
    productDetails.classList.add('inactive')
}


//segunda forma de hacerlo
{// function toggleMenuMobile(){
//     //creamos una variable que revise que un elemento en el html tenga una clase especifica
//     const isshoppingCardContainerClosed = shoppingCardContainer.classList.contains('inactive')
    
//     //revisa si no tiene la clase, osea que esta activo, se ejecuta, si si tiene la clase, no se ejecuta
//     if(!isshoppingCardContainerClosed){
//        shoppingCardContainer.classList.add('inactive')
//     }

//     //Y al final se muestra el menu
//     mobilemenu.classList.toggle('inactive')
// }
}

//toggle hace que por cada ejecucion de la funcion quite o añada la misma. como si fuera un swicher de luz

//add añade una nueva clase al elemento, que puede ya estar definida en el css


//ESTA FUE MI SOLUCION
{// let menuSwitcher = 0
// function sacaElMenu(){
//     if(menuSwitcher == 0){
//         menuDesplegable.style.display = "block"
//         menuSwitcher++
//     }else if(menuSwitcher == 1){
//         menuDesplegable.style.display = "none"
//         menuSwitcher--
//     }
    
// }
}

{// window.addEventListener("load", (event) => {
    
//     console.log("page is fully loaded");
//     const fotoProducto = document.querySelector('.producto')
//     fotoProducto.addEventListener('click', prueba)
//     function prueba(){
//         console.log('funciona')
//     }
//   });
 }