const correo = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const iconoMenuTelefono = document.querySelector('.menu')
const menuTelefono = document.querySelector('.mobile-menu')
const shoppingCarIcon = document.querySelector('.navbar-shopping-cart')
const productDetail = document.querySelector('.product-detail')
const cardsContainer = document.querySelector('.cards-container')
const iconImageClose = document.querySelector('.product-detail-close')
const productDetailBar = document.querySelector('.product-detail-barra')

const listaObjetos = [
    {   id: 0,
        nombre : 'Bici', 
        precio: 120, 
        imagen:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    
    {   
        id: 1,
        nombre: 'balon', 
        precio: 40, 
        imagen:'https://http2.mlstatic.com/balon-de-futbol-adidas-performance-brazuca-D_NQ_NP_742411-MLM20538146455_012016-F.jpg'
    },
    {   
        id: 2,
        nombre: 'celular', 
        precio: 200, 
        imagen: 'https://th.bing.com/th/id/R.6c73dc25188b651396b3dcdabd245fb4?rik=8He4MWYDF7BUjA&riu=http%3a%2f%2fqubytes.mx%2fwp-content%2fuploads%2f2010%2f02%2fFront-angle_rgb.jpeg&ehk=CAfMZEsFHU0YVSe%2bs674zB8l8huXSj0vUIL1jOxtARU%3d&risl=&pid=ImgRaw&r=0'
    },
    {   
        id: 3,
        nombre: 'celular', 
        precio: 200, 
        imagen: 'https://th.bing.com/th/id/R.6c73dc25188b651396b3dcdabd245fb4?rik=8He4MWYDF7BUjA&riu=http%3a%2f%2fqubytes.mx%2fwp-content%2fuploads%2f2010%2f02%2fFront-angle_rgb.jpeg&ehk=CAfMZEsFHU0YVSe%2bs674zB8l8huXSj0vUIL1jOxtARU%3d&risl=&pid=ImgRaw&r=0'
    },
    {   
        id: 4,
        nombre: 'celular', 
        precio: 200, 
        imagen: 'https://th.bing.com/th/id/R.6c73dc25188b651396b3dcdabd245fb4?rik=8He4MWYDF7BUjA&riu=http%3a%2f%2fqubytes.mx%2fwp-content%2fuploads%2f2010%2f02%2fFront-angle_rgb.jpeg&ehk=CAfMZEsFHU0YVSe%2bs674zB8l8huXSj0vUIL1jOxtARU%3d&risl=&pid=ImgRaw&r=0'
    },
    {   
        id: 5,
        nombre: 'celular', 
        precio: 200, 
        imagen: 'https://th.bing.com/th/id/R.6c73dc25188b651396b3dcdabd245fb4?rik=8He4MWYDF7BUjA&riu=http%3a%2f%2fqubytes.mx%2fwp-content%2fuploads%2f2010%2f02%2fFront-angle_rgb.jpeg&ehk=CAfMZEsFHU0YVSe%2bs674zB8l8huXSj0vUIL1jOxtARU%3d&risl=&pid=ImgRaw&r=0'
    }

]

function contenidoLista (arr){
    for (const objeto of listaObjetos){
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')
    
        
        const imagen = document.createElement('img')
        imagen.setAttribute('src', objeto.imagen)
    
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')
    
        const divDatos = document.createElement('div')
        
        const parrafoObjeto = document.createElement('p')
        parrafoObjeto.innerText = objeto.nombre
    
        
        const precio = document.createElement('p')
        precio.innerText = objeto.precio
       
    
        const figure = document.createElement('figure')
        const imagenIcon = document.createElement('img')
        imagenIcon.setAttribute('src', "./icons/bt_add_to_cart.svg")
    
        figure.appendChild(imagenIcon)
        divDatos.appendChild(parrafoObjeto)
        divDatos.appendChild(precio)
        productInfo.appendChild(divDatos)
        productInfo.appendChild(figure)
        productCard.appendChild(imagen)
        productCard.appendChild(productInfo)
        cardsContainer.appendChild(productCard)
        
        productCard.addEventListener('click',()=>{
            productDetailBar.classList.toggle('showProduct')
            cardsContainer.classList.toggle('alinearCards')

           if(desktopMenu.classList.contains('mostrarMenu') || productDetail.classList.contains('mostrarDetallesProducto')){
                desktopMenu.classList.remove('mostrarMenu')
                productDetail.classList.remove('mostrarDetallesProducto')
           }
           if (menuTelefono.classList.contains('mostrarMenuTelefono')){
                menuTelefono.classList.remove('mostrarMenuTelefono')
           }
        })
    }
    }    
contenidoLista(listaObjetos)

iconImageClose.addEventListener('click', ()=>{
    productDetailBar.classList.remove('showProduct')
    if(cardsContainer.classList.contains('alinearCards')){
        cardsContainer.classList.remove('alinearCards')
    }
})
correo.addEventListener('click', ()=>{
desktopMenu.classList.toggle('mostrarMenu')
    if (productDetail.classList.contains('mostrarDetallesProducto')){
        productDetail.classList.remove('mostrarDetallesProducto') 
}
    if (productDetailBar.classList.contains('showProduct')){
        productDetailBar.classList.remove('showProduct')
    }
})
iconoMenuTelefono.addEventListener('click', ()=>{
menuTelefono.classList.toggle('mostrarMenuTelefono')
    if (productDetail.classList.contains('mostrarDetallesProducto')){
        productDetail.classList.remove('mostrarDetallesProducto')
}
    if (productDetailBar.classList.contains('showProduct'))
        productDetailBar.classList.remove('showProduct')
})
shoppingCarIcon.addEventListener('click', ()=>{
    productDetail.classList.toggle('mostrarDetallesProducto')
    if (desktopMenu.classList.contains('mostrarMenu') || menuTelefono.classList.contains('mostrarMenuTelefono')){
        desktopMenu.classList.remove('mostrarMenu')
        menuTelefono.classList.remove('mostrarMenuTelefono')
}
    if (productDetailBar.classList.contains('showProduct')){
        productDetailBar.classList.remove('showProduct')
    }
})





