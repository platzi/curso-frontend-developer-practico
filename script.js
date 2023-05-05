const $ = (selector) => document.querySelector(selector);
const inactive = $(".inactive")
//constantes para el menu del desktop

const navEmail = $(".navbar-email")
const desktopMenu = $(".desktop-menu")

//constantes para el menu del mobile

const burguerMenu = $(".menu")
const mobileMenu = $(".mobile-menu")
//Constante del carrito de compras
const carritoCompras = $(".navbar-shopping-cart")
const carritoComprasDesplegable = $("#shoppingCart")

//constantes de la seccion de productos 
const productDetail = $("#product-detail-2")
const productList = [];
const productDetailClose = $(".product-detail-2-close")


// //Evento de click con el menu desktop
navEmail.addEventListener("click", () => {toggleMenu(desktopMenu); carritoComprasDesplegable.classList.add("inactive"); productDetail.classList.add("inactive")});

// Evento de click con el menu mobile
burguerMenu.addEventListener("click", () => {toggleMenu(mobileMenu); carritoComprasDesplegable.classList.add("inactive"); productDetail.classList.add("inactive")});

//Evento de click al carrito de compras
carritoCompras.addEventListener("click", () => {toggleMenu(carritoComprasDesplegable); desktopMenu.classList.add("inactive"); mobileMenu.classList.add("inactive"); productDetail.classList.add("inactive")});
//Evento de click a cada producto


// //Funcion del menu de desktop

function toggleMenu(elemento){
	elemento.classList.toggle("inactive")
}

//Funcion para agregar facil los objetos al array de productos

function productListPush(name, precio, imagen,){ 
	productList.push(
		{
			name: name, 
			precio: precio,
			imagen: imagen
			
		}
	)
}

productListPush( "Bicycle helmet", 60,"https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto")
productListPush( "Bike", 120,"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
productListPush( "Tennis de montaña", 100,"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg")
productListPush( "Sunglasses", 50, "https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602"	)
productListPush( "Bicycle seat bag", 200, "https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg")

productListPush( "Bike", 120,"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
productListPush( "Bicycle helmet", 60,"https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto")
productListPush( "Tennis de montaña", 100,"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg")
productListPush( "Sunglasses", 50, "https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602"	)
productListPush( "Bicycle seat bag", 200, "https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg")

productListPush( "Bike", 120,"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
productListPush( "Bicycle helmet", 60,"https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto")
productListPush( "Tennis de montaña", 100,"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg")
productListPush( "Sunglasses", 50, "https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602"	)
productListPush( "Bicycle seat bag", 200, "https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg")


productListPush( "Bike", 120,"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
productListPush( "Bicycle helmet", 60,"https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto")
productListPush( "Tennis de montaña", 100,"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg")
productListPush( "Sunglasses", 50, "https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602"	)
productListPush( "Bicycle seat bag", 200, "https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg")

/*
podemos poner product of productList para que product sea cada uno de los objetos dentro del
array de productlist, este product actua como una variable y se le puede asignar el nombre que
se quiera

for(product of productList){
    console.log(product.name)
}

y este codigo de aca refleja es el indice de los objetos dentro del array

for(product in productList){
    console.log(product)
}
*/

function renderProduct(arr){
	for(product of arr){

	const productCards = `
		<div class="product-card">
	        <img src="${product.imagen}" alt="Articulo de bicicleta" class="productImg">
	        <div class="product-info">
	          <div>
	            <p>${product.precio} $</p>
	            <p>${product.name}</p>
	          </div>
	          <figure>
	            <img src="./icons/bt_add_to_cart.svg" alt="boton de comprar">
	          </figure>
	        </div>
	`
	const cardsContainer = $(".cards-container")
	cardsContainer.insertAdjacentHTML("beforeend",	productCards) 


		}
	}
	renderProduct(productList)
	

	let productCard = document.querySelectorAll(".product-card")
	productCard.forEach(product => {
		product.addEventListener("click", () => {
			productDetail.classList.remove("inactive")
			console.log(product.value)
		})
	});
	
	
productDetailClose.addEventListener("click", () => productDetail.classList.add("inactive") )