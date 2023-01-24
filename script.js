const menuEmail=document.querySelector('.navbar-email')
const desktopMenu= document.querySelector('.desktop-menu')
const burgerMenu= document.querySelector('.menu')
const mobileMenu= document.querySelector('.mobile-menu')
const carritoMenu= document.querySelector('.navbar-shopping-cart')
const carrito= document.querySelector('#carrito')
const cardsContainer= document.querySelector('.cards-container')
const carritoCompras= document.getElementById('carrito')
const detallesProductos= document.getElementById('detallesProducto')
const cerrarDetalles= document.querySelector('.product-detail-close')


menuEmail.addEventListener('click',toggleDesktopMenu)
burgerMenu.addEventListener('click',toggleMobileMenu)
carritoMenu.addEventListener('click',togglecarritoMenu)
cerrarDetalles.addEventListener('click',closeDetalles)

function toggleDesktopMenu()
{
    const carritoOpen= !carritoCompras.classList.contains('inactive')
    const detallesProductosOpen= !detallesProductos.classList.contains('inactive')

    if(detallesProductosOpen)
    {
    detallesProductos.classList.add('inactive')
    }

    if(carritoOpen)
    {
        carritoCompras.classList.add('inactive')
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu () {

    const carritoOpen= !carritoCompras.classList.contains('inactive')
    const detallesProductosOpen= !detallesProductos.classList.contains('inactive')

    if(detallesProductosOpen)
    {
    detallesProductos.classList.add('inactive')
    }

    if(carritoOpen)
    {
    carritoCompras.classList.add('inactive')
    }

    mobileMenu.classList.toggle('inactive')

}

function togglecarritoMenu () {

    const mobileMenuOpen= !mobileMenu.classList.contains('inactive')
    const desktopMenuOpen= !desktopMenu.classList.contains('inactive')
    const detallesProductosOpen= !detallesProductos.classList.contains('inactive')

    if(detallesProductosOpen)
    {
    detallesProductos.classList.add('inactive')
    }

    if(desktopMenuOpen)
    {
    desktopMenu.classList.add('inactive')
    }

    if(mobileMenuOpen)
    {
    carritoCompras.classList.add('inactive')
    }

    carritoCompras.classList.toggle('inactive')
 }

const productArray=[];
productArray.push({
    imagen: 'https://bikestore.com.mx/blog/wp-content/uploads/2021/02/CuEIl0HWcAATXt0-1024x683.jpg',
    precio: 1000,
    nombre: 'Bici'
});
productArray.push({
    imagen:'https://i1.wp.com/tiempomotor.com/wp-content/uploads/2022/10/Audi_R8_GT_V10_1.jpg?fit=1200%2C800&ssl=1',
    precio: 3000,
    nombre: 'Audi R8 Coupe'
});
productArray.push({
    imagen:'https://http2.mlstatic.com/D_NQ_NP_993409-MLA42848505907_072020-O.jpg',
    precio: 180,
    nombre: 'Creatina'
});
productArray.push({
    imagen:'https://cdn.batitienda.com/baticloud/images/product_picture_eef3a35b214a486392255b45100332bb_637994452194733378_0_l.webp',
    precio: 200,
    nombre: 'Proteina'
});
productArray.push({
    imagen:'https://ramenparados.com/wp-content/uploads/2016/09/app3_sobrecubierta_DB_COLOR_BU_1_esp-300x482.jpg',
    precio:500,
    nombre:'Manga Dragon Ball Z'
})

function renderProducts(productArray) {
    for (product of productArray) {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
    
      // product= {name, price, image} -> product.image
      const productImg = document.createElement('img');
      productImg.setAttribute('src', product.imagen);
      productImg.addEventListener('click',openDetalles)
    
      const productInfo = document.createElement('div');
      productInfo.classList.add('product-info');
    
      const productInfoDiv = document.createElement('div');
    
      const productPrice = document.createElement('p');
      productPrice.innerText = '$' + product.precio;
      const productName = document.createElement('p');
      productName.innerText = product.nombre;
    
      productInfoDiv.appendChild(productPrice);
      productInfoDiv.appendChild(productName);
    
      const productInfoFigure = document.createElement('figure');
      const productImgCart = document.createElement('img');
      productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
      productInfoFigure.appendChild(productImgCart);
    
      productInfo.appendChild(productInfoDiv);
      productInfo.appendChild(productInfoFigure);
    
      productCard.appendChild(productImg);
      productCard.appendChild(productInfo);
    
      cardsContainer.appendChild(productCard);
    }
  }
  function openDetalles(){

    const carritoOpen= !carritoCompras.classList.contains('inactive')
    const mobileMenuOpen= !mobileMenu.classList.contains('inactive')
    const desktopMenuOpen= !desktopMenu.classList.contains('inactive')
    if(desktopMenuOpen)
    {
        desktopMenu.classList.add('inactive')
    }
    if(mobileMenuOpen)
    {
        mobileMenu.classList.add('inactive')
    }

    if(carritoOpen)
    {
        carritoCompras.classList.add('inactive')
    }

    detallesProductos.classList.remove('inactive')

  }

  function closeDetalles(){

    detallesProductos.classList.add('inactive')

  }

  renderProducts(productArray);
