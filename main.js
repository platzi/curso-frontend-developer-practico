const menuPrincipalDesktop = document.querySelector (".navbar-right")
const menuDesplegableDesktop = document.querySelector(".desktop-menu")
const iconMenuPrincipalMobile = document.querySelector(".menu")
const iconProductDetail = document.querySelector(".product-detail-close")
const menuDesplegableMobile = document.querySelector(".mobile-menu")
const shoppingCart = document.querySelector (".navbar-shopping-cart")
const asideShoppingCart = document.querySelector ("#shoppingCartContainer")
const asideProductDetail = document.querySelector ("#product-detail")
const cardsContainer = document.querySelector(".cards-container")




//EVENTO DE MENU DESPLEGABLE 

menuPrincipalDesktop.addEventListener("click", toggleMenuDesplegable)

function toggleMenuDesplegable (){

        menuDesplegableDesktop.classList.toggle ("inactive") 

        
}



//EVENTO DE MENU DESPLEGABLE MOBILE

iconMenuPrincipalMobile.addEventListener("click", toggleMenuDesplegableMobile)

function toggleMenuDesplegableMobile (){

    if (asideShoppingCart.classList.contains("shoppingCart") ){
        menuDesplegableMobile.classList.toggle("inactive")  
        asideShoppingCart.classList.add("inactive")
        asideProductDetail.classList.add ('inactive')
    }  


}


//EVENTO DE ASIDE DESPLEGABLE -- SHOPPING CART

shoppingCart.addEventListener("click", desplegarAsideShoppingCart)

function desplegarAsideShoppingCart (){

    if (menuDesplegableMobile.classList.contains("mobile-menu")){
    
    
        asideProductDetail.classList.add("inactive")
        asideShoppingCart.classList.toggle("inactive")
        menuDesplegableMobile.classList.add('inactive')
      
        
    }

   // else if(menuDesplegableDesktop.classList.contains('desktop-menu')){
    //    menuDesplegableDesktop.classList.add('inactive')

    //}
    
}


//function de detalles de produtcos ProductDetail con eventos

function openAsideProductDetail(){
    asideProductDetail.classList.remove('inactive')
    asideShoppingCart.classList.add('inactive')
    menuDesplegableMobile.classList.add('inactive')



}

//evento de cerrar detalles de producto

iconProductDetail.addEventListener('click', closeAsideProductDetail)

function closeAsideProductDetail(){
    asideProductDetail.classList.add('inactive')

}




//LISTA DE PRODUCTOS



const productsList = []  // array para trabajar en JS con la informacion que se puede extraer de una API   - por el momento es manual

productsList.push ({
    name: "Celular XIAOMI Redmi Note 11S Gris",
    price: 1.399 ,
    picture: "https://www.alkosto.com/medias/6934177769320-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wxMjY1MjF8aW1hZ2UvanBlZ3xpbWFnZXMvaDcyL2g0Yi8xMjQxNjAwOTkyODczNC5qcGd8YjJlZGExZmQ0M2ViMDkzNDk3MDNiMThlN2FhZDVhODY2MzA3ODFmYTNlMzVlNzBmZGFkZDU0MzI3NmM5YzJhNw"
})

productsList.push ({
    name: 'Portátil Gamer LENOVO 15,6" Pulgadas Negro',
    price: 4.899 ,
    picture: 'https://www.alkosto.com/medias/196118637624-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wxMzU0MDN8aW1hZ2UvanBlZ3xpbWFnZXMvaDE3L2hiOS8xMTYxNTEwMzA5MDcxOC5qcGd8OWUwM2U3YTRkNDMzZjE3NDM5YzgxMDA5ZDNiOTY2MDhhZTllODIxNGMzODZmNDE2NDU0ZDYzMjExMTVjNzg4YQ'
})

productsList.push ({
    name: 'Tablet HUAWEI 10.1" Pulgadas T10S Azul',
    price: 719 ,
    picture: 'https://www.alkosto.com/medias/6901443444953-001-750Wx750H?context=bWFzdGVyfGltYWdlc3w4NDI3MnxpbWFnZS9qcGVnfGltYWdlcy9oODUvaGRmLzExNDgwMzI5ODQ2ODE0LmpwZ3wyZjQzZTA2YjRhMTc4MDhkZWU0NGE2MTFjNDdhNjA3N2IyMzQwNWZmNTZlYjJkODU0MjM0YmI4ZDAwYzc4NmRk'
})

productsList.push ({
    name: "Celular XIAOMI Redmi Note 11S Gris",
    price: 1.399 ,
    picture: "https://www.alkosto.com/medias/6934177769320-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wxMjY1MjF8aW1hZ2UvanBlZ3xpbWFnZXMvaDcyL2g0Yi8xMjQxNjAwOTkyODczNC5qcGd8YjJlZGExZmQ0M2ViMDkzNDk3MDNiMThlN2FhZDVhODY2MzA3ODFmYTNlMzVlNzBmZGFkZDU0MzI3NmM5YzJhNw"
})

productsList.push ({
    name: 'Portátil Gamer LENOVO 15,6" Pulgadas Negro',
    price: 4.899 ,
    picture: 'https://www.alkosto.com/medias/196118637624-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wxMzU0MDN8aW1hZ2UvanBlZ3xpbWFnZXMvaDE3L2hiOS8xMTYxNTEwMzA5MDcxOC5qcGd8OWUwM2U3YTRkNDMzZjE3NDM5YzgxMDA5ZDNiOTY2MDhhZTllODIxNGMzODZmNDE2NDU0ZDYzMjExMTVjNzg4YQ'
})

productsList.push ({
    name: 'Tablet HUAWEI 10.1" Pulgadas T10S Azul',
    price: 719 ,
    picture: 'https://www.alkosto.com/medias/8806091636539-001-1400Wx1400H?context=bWFzdGVyfGltYWdlc3w1NjkwMDN8aW1hZ2UvanBlZ3xpbWFnZXMvaGE5L2hlZS8xMjcyODY1MDc2MDIyMi5qcGd8ZjY2NmUxMDBmZGFlN2M1M2VmZjY3YzQ4MDMxNzhkNzA5YzYwZGI0MTU4ZmRiOWEyODg4MTIyZGEzYWQ2NzFiNw'
})



function technologicalProductsStore (arrayProductList){   // funcion para reutilar codigo y mantenerlo organizado

for(product of arrayProductList){

// --------------div principal-------------------

    const productCard = document.createElement ('div')
    productCard.classList.add('product-card')


//----------------img src -----------------------------
//----------------imagenes-----------------------------

    // product = {name, price, picture}  ---> product.picture
    const productImg = document.createElement ('img')
    productImg.setAttribute('src', product.picture)
    productImg.addEventListener('click', openAsideProductDetail)






//MAQUETACION DE HTML EN JAVASCRIPT PARA CREAR NODOS Y ETIQUETAS
// ------------- div product-info -----------

const productInfo = document.createElement('div')
productInfo.classList.add('product-info')


const productInfoDetail = document.createElement('div')
//productInfoDetail.classList.add('product-info2')


// parrafos dentro del div product-info

const productPrice = document.createElement('p')
productPrice.innerHTML= '$' + product.price


const  productName= document.createElement('p')
productName.innerHTML=  product.name


productInfoDetail.append(productPrice, productName)  // agregar precio - agregar Nombre del producto --> "Con Element.append() podemos agregar varios nodos y texto mientras que con Element.appendChild() solo podemos agregar un nodo"







// -------------figure----------------------

//const iconContainer = document.createElement ( 'div')
//iconContainer.classList.add('figura')


const imgContainer = document.createElement ( 'figure')

const img2 = document.createElement ( 'img')
img2.setAttribute('src', './icons/bt_add_to_cart.svg')

imgContainer.appendChild(img2)  // agregar la imagen a la etiqueta figure





productInfo.appendChild(productInfoDetail)  
productInfo.appendChild(imgContainer) 

productCard.appendChild(productImg) 
productCard.appendChild(productInfo) 

cardsContainer.appendChild(productCard)


}

}

technologicalProductsStore (productsList)






