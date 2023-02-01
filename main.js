/* Interacción de Menú desktop (componente 7)*/

const menuEmail = document.querySelector(".navbar-email");
console.log(menuEmail);

const menuDesktop = document.querySelector(".desktop-menu");
console.log(menuDesktop);


menuEmail.addEventListener("click",toggleDesktopMenu);

 //FORMA 1 - RAUL
/*
function toggleDesktopMenu(){
	if (menuDesktop.classList.length==2){
		menuDesktop.classList.remove("inactive");

		console.log(menuDesktop.classList);
		console.log(menuDesktop.classList.length);

	} else if (menuDesktop.classList.length==1){
		menuDesktop.classList.add("inactive")

		console.log(menuDesktop.classList);
		console.log(menuDesktop.classList.length);
	}
}
*/

 //FORMA 2 - PROFESOR

/*
function toggleDesktopMenu(){
	menuDesktop.classList.toggle("inactive");
	console.log("click")
}
*/

/* Interacción de Menú Mobile (componente 8)*/

const burguerMenu= document.querySelector(".menu");
console.log(burguerMenu);
const menuMobile= document.querySelector(".mobile-menu");
console.log(menuMobile);

burguerMenu.addEventListener("click",toggleMobileMenu);

 //FORMA 1 - RAUL
/*
function toggleMobileMenu(){
	if (menuMobile.classList.length==2){
		menuMobile.classList.remove("inactive");

		console.log(menuMobile.classList);
		console.log(menuMobile.classList.length);

	} else if (menuMobile.classList.length==1){
		menuMobile.classList.add("inactive")

		console.log(menuMobile.classList);
		console.log(menuMobile.classList.length);
}
}
*/
 //FORMA 2 - PROFESOR

 /*
 function toggleMobileMenu(){
	menuMobile.classList.toggle("inactive");
	console.log("click")
}*/



/* Interacción de Carrito de compra (componente 13)*/

const shoppingCartIcon= document.querySelector(".navbar-shopping-cart");
console.log(shoppingCartIcon);

const shoppingCartDetail=document.querySelector("#shoppingCartDetail");
console.log(shoppingCartDetail);

shoppingCartIcon.addEventListener("click", toggleCartDetail);

 //FORMA 1 - RAUL
/*
 function toggleCartDetail(){
	if(shoppingCartDetail.classList.length==2){
		shoppingCartDetail.classList.remove("inactive");
		console.log(shoppingCartDetail.classList)
		console.log(shoppingCartDetail.classList.length)
	}
		else if (shoppingCartDetail.classList.length==1){
			shoppingCartDetail.classList.add("inactive");
			console.log(shoppingCartDetail.classList)
			console.log(shoppingCartDetail.classList.length)
		}
	};*/

	 //FORMA 2 - PROFESOR
/*
	 function toggleCartDetail(){
		shoppingCartDetail.classList.toggle("inactive");
		console.log("click")
	}
	*/


	//SOLUCION INTERACCION ENTRE ELEMENTOS - RAUL

	/*
	function toggleCartDetail(){
		if (menuMobile.classList.length==1){
			menuMobile.classList.add("inactive")
		} else if (menuDesktop.classList.length==1){
			menuDesktop.classList.add("inactive")
		}
		shoppingCartDetail.classList.toggle("inactive");
	};

	function toggleMobileMenu(){
		if(shoppingCartDetail.classList.length==1){
			shoppingCartDetail.classList.add("inactive");
		}
		menuMobile.classList.toggle("inactive");
	};

	function toggleDesktopMenu(){
		if(shoppingCartDetail.classList.length==1){
			shoppingCartDetail.classList.add("inactive");
		}
		menuDesktop.classList.toggle("inactive");
	}
*/

/*
	//SOLUCION INTERACCION ENTRE ELEMENTOS - JUAN DC

	function toggleCartDetail(){
		const ismenuMobileClosed= menuMobile.classList.contains("inactive");
		console.log(ismenuMobileClosed)

		const ismenuDesktopClosed= menuDesktop.classList.contains("inactive");
		console.log(ismenuDesktopClosed)

		
		if(!ismenuMobileClosed){
			menuMobile.classList.add("inactive")
		} else if (!ismenuDesktopClosed){
			menuDesktop.classList.add("inactive")
		}
		shoppingCartDetail.classList.toggle("inactive");
	};



	function toggleMobileMenu(){
		const isCartDetailClosed= shoppingCartDetail.classList.contains("inactive")
		console.log(isCartDetailClosed)
		console.log(!isCartDetailClosed)

		if(!isCartDetailClosed){
			shoppingCartDetail.classList.add("inactive")
		}

		menuMobile.classList.toggle("inactive");
	};



	function toggleDesktopMenu(){
		const isCartDetailClosed= shoppingCartDetail.classList.contains("inactive")
		console.log(isCartDetailClosed)

		if(!isCartDetailClosed){
			shoppingCartDetail.classList.add("inactive")
		}

		menuDesktop.classList.toggle("inactive");
	}
*/

/* Product List (componente 6)*/

const productList = [];

productList.push({
	name: "Bike",
	precio: 120, 
	imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
	description: "With its practical position, this bike also fulfills a decorative function, add your hall or workspace."
});

productList.push({
	name: "Keyboard",
	precio: 200, 
	imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvHMHgpVn5rWojE5bD_qJDhb_oF6MUIPOKdw&usqp=CAU",
	description: "This keyoboard allows you to work in the best mood and avoid using artifical lights at night."
});

productList.push({
	name: "Laptop",
	precio: 2500, 
	imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxfq-x6ilpy-sHAu_qm3-NXIYkLGcP_w9peg&usqp=CAU",
	description: "You will not suffer anymore with the speed of your laptop."
});

productList.push({
	name: "Speaker",
	precio: 300, 
	imagen: "https://media.pitchfork.com/photos/60ba7b0442b81a6a8412188a/4:3/w_1064,h_798,c_limit/indoor%20bluetooth%20header%20copy.png",
	description: "Available in many color like red, blue, purple and of course white."
});

productList.push({
	name: "Desk",
	precio: 1300, 
	imagen: "https://www.whalenfurniture.com/wp-content/uploads/2021/07/SPLS-LTCGD-LEET-Onyx-Gaming-Desk-LS-Hero.jpg",
	description: "Ideal for set your work area in an ergonomical way."
});

productList.push({
	name: "Headphones",
	precio: 800, 
	imagen: "https://www.travelandleisure.com/thmb/iYbb8D0du50s8ypCQmgxaXa1YZY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/the-best-kids-headphones-for-travel-tout-AMZN-HDPHN0722-133714e0e4b34ab2bd0c7a6a3d38687f.jpg",
	description: "Get the best sound and combine your headphones with your clothes style."
});

function crearListProducts(array){
	for (product of array){
		//crear elemento html y almacena en variable (el contenedor del producto)
		const productCard = document.createElement("div");
		//agregar atributo a ese elemento html (en este caso, una clase)
		productCard.setAttribute("class", "product-card");
		// anexarlo a un elemento HTML nativo
		const cardsContainer = document.querySelector(".cards-container")
		cardsContainer.append(productCard);
	
		//crear elemento html (la imagen del producto)
		const imgProduct = document.createElement("img");
		//agregar atributo src
		imgProduct.setAttribute("src", product.imagen)
		// anexarlo a elemento HTML div (class="product-card")
		productCard.append(imgProduct);
	
		//crear el contenedor de la información del producto
		const productInfo = document.createElement("div");
		productInfo.setAttribute("class","product-info");
		productCard.append(productInfo);
	
		//crear contenedor <div> dentro de contenedor de la información del producto
		const freeDiv= document.createElement("div");
		productInfo.append(freeDiv);
	
		// crear elemento <p> (precio del producto)
		const priceProduct = document.createElement("p");
		// agregar contenido al elemento <p>
		freeDiv.append(priceProduct)
		priceProduct.innerHTML="$" + product.precio
	
		// crear elemento <p> (nombre del producto)
		const nameProduct = document.createElement("p");
		// agregar contenido al elemento <p>
		freeDiv.append(nameProduct)
		nameProduct.innerHTML=product.name
		
		// crear elemento <figure> (nombre del producto)
		const Figure= document.createElement("figure");
		productInfo.append(Figure);
	
		// crear elemento <img> para el ícono de carrito
		const iconAddCar= document.createElement("img");
		iconAddCar.setAttribute("src","./icons/bt_add_to_cart.svg");
		Figure.append(iconAddCar);
	}
}

crearListProducts(productList);


/* Interacción del detalle de producto (componente 12)*/

function crearProductDetail(array){
	for(card of array){
		//crear elemento html <aside> como contenedor global
		const productDetail = document.createElement("aside");
		productDetail.setAttribute("id", "productDetail")
		productDetail.setAttribute("class", "product-detail inactive")
		const detailContainer = document.querySelector(".productDetail-container");
		detailContainer.append(productDetail);

		//crear elemento html <div> para contener X
		const closeCard = document.createElement("div");
		closeCard.setAttribute("class","product-detail-close")
		productDetail.append(closeCard);

		// crear elemento <img> para el ícono de X
		const iconX = document.createElement("img");
		iconX.setAttribute("src","./icons/icon_close.png")
		closeCard.append(iconX);

		// crear elemento <img> - imagen del producto
		const imgDetailProduct = document.createElement("img");
		imgDetailProduct.setAttribute("src",card.imagen);
		productDetail.append(imgDetailProduct);

		// crear elemento <div> - contenedor de info de producto
		const producInfoDetail = document.createElement("div");
		producInfoDetail.setAttribute("class","product-info");
		productDetail.append(producInfoDetail);

		// crear elemento <p> (precio del producto)
		const priceProductInfo = document.createElement("p");
		producInfoDetail.append(priceProductInfo);
		priceProductInfo.innerHTML="$"+card.precio;

		// crear elemento <p> (nombre del producto)
		const nameProductInfo = document.createElement("p");
		producInfoDetail.append(nameProductInfo);
		nameProductInfo.innerHTML=card.name;

		// crear elemento <p> (descripción del producto)
		const descripProductInfo = document.createElement("p");
		producInfoDetail.append(descripProductInfo);
		descripProductInfo.innerHTML=card.description;

		// crear elemento <button> (botón para agregar al carrito)
		const buttonDetail = document.createElement("button");
		buttonDetail.setAttribute("class", "primary-button add-to-cart-button");
		producInfoDetail.append(buttonDetail);
		buttonDetail.innerHTML="Add to cart"
		// crear elemento <img> para el ícono de X
		const iconAddCarInfo = document.createElement("img");
		iconAddCarInfo.setAttribute("src","./icons/bt_add_to_cart.svg")
		buttonDetail.append(iconAddCarInfo);
	
	}
};

crearProductDetail(productList)



//Elemento que aparece y desaparece (aside)

const productDetail1 = document.querySelector(".productDetail-container aside:nth-child(1)");
console.log(productDetail1); 
const productDetail2 = document.querySelector(".productDetail-container aside:nth-child(2)");
console.log(productDetail2); 
const productDetail3 = document.querySelector(".productDetail-container aside:nth-child(3)");
console.log(productDetail3); 
const productDetail4 = document.querySelector(".productDetail-container aside:nth-child(4)");
console.log(productDetail4); 
const productDetail5 = document.querySelector(".productDetail-container aside:nth-child(5)");
console.log(productDetail5); 
const productDetail6 = document.querySelector(".productDetail-container aside:nth-child(6)");
console.log(productDetail6); 



//variables para los escuchadores de evento (una por cada imagen)

const imgProduct1 = document.querySelector(".product-card:nth-child(1) img") 
console.log(imgProduct1);
const imgProduct2 = document.querySelector(".product-card:nth-child(2) img") 
console.log(imgProduct2);
const imgProduct3 = document.querySelector(".product-card:nth-child(3) img") 
console.log(imgProduct3);
const imgProduct4 = document.querySelector(".product-card:nth-child(4) img") 
console.log(imgProduct4);
const imgProduct5 = document.querySelector(".product-card:nth-child(5) img") 
console.log(imgProduct5);
const imgProduct6 = document.querySelector(".product-card:nth-child(6) img") 
console.log(imgProduct6);


// Creando addeventlistener para cada imagen de la lista de producto

imgProduct1.addEventListener("click",toggleProductDetail1);
imgProduct2.addEventListener("click",toggleProductDetail2);
imgProduct3.addEventListener("click",toggleProductDetail3);
imgProduct4.addEventListener("click",toggleProductDetail4);
imgProduct5.addEventListener("click",toggleProductDetail5);
imgProduct6.addEventListener("click",toggleProductDetail6);

// Creando funciones para que ejecute cada ADDEVENTLISTENER al hacer click

/*
	function toggleProductDetail1(){
		productDetail1.classList.toggle("inactive");
	}
	function toggleProductDetail2(){
		productDetail2.classList.toggle("inactive");
	}
	function toggleProductDetail3(){
		productDetail3.classList.toggle("inactive");
	}
	function toggleProductDetail4(){
		productDetail4.classList.toggle("inactive");
	}
	function toggleProductDetail5(){
		productDetail5.classList.toggle("inactive");
	}
	function toggleProductDetail6(){
		productDetail6.classList.toggle("inactive");
	}

	*/

//Hacer que al presionar "X" del aside, también se cierre

 const iconXaside1 = document.querySelector(".productDetail-container aside:nth-child(1) .product-detail-close");
 const iconXaside2 = document.querySelector(".productDetail-container aside:nth-child(2) .product-detail-close");
 const iconXaside3 = document.querySelector(".productDetail-container aside:nth-child(3) .product-detail-close");
 const iconXaside4 = document.querySelector(".productDetail-container aside:nth-child(4) .product-detail-close");
 const iconXaside5 = document.querySelector(".productDetail-container aside:nth-child(5) .product-detail-close");
 const iconXaside6 = document.querySelector(".productDetail-container aside:nth-child(6) .product-detail-close");

 iconXaside1.addEventListener("click", closeProductDetail1);
 iconXaside2.addEventListener("click", closeProductDetail2);
 iconXaside3.addEventListener("click", closeProductDetail3);
 iconXaside4.addEventListener("click", closeProductDetail4);
 iconXaside5.addEventListener("click", closeProductDetail5);
 iconXaside6.addEventListener("click", closeProductDetail6);

 function closeProductDetail1(){
	productDetail1.classList.add("inactive")
 }
 function closeProductDetail2(){
	productDetail2.classList.add("inactive")
 }
 function closeProductDetail3(){
	productDetail3.classList.add("inactive")
 }
 function closeProductDetail4(){
	productDetail4.classList.add("inactive")
 }
 function closeProductDetail5(){
	productDetail5.classList.add("inactive")
 }
 function closeProductDetail6(){
	productDetail6.classList.add("inactive")
 }


//Solucion a la interaccion entre elementos

 //Cuando quiero activar C13: Detalle de carrito de compras (vista mobile)

	function toggleCartDetail(){
		const ismenuMobileClosed= menuMobile.classList.contains("inactive");		//Componente 8: menú mobile
		console.log(ismenuMobileClosed)		

		const ismenuDesktopClosed= menuDesktop.classList.contains("inactive");	//Componente 7: menú desktop
		console.log(ismenuDesktopClosed)

		const isProductDetailClosed1=productDetail1.classList.contains("inactive"); //Componente 12: detalle producto 1
		console.log(isProductDetailClosed1)
		const isProductDetailClosed2=productDetail2.classList.contains("inactive"); //Componente 12: detalle producto 2
		console.log(isProductDetailClosed2)
		const isProductDetailClosed3=productDetail3.classList.contains("inactive"); //Componente 12: detalle producto 3
		console.log(isProductDetailClosed3)
		const isProductDetailClosed4=productDetail4.classList.contains("inactive"); //Componente 12: detalle producto 4
		console.log(isProductDetailClosed4)
		const isProductDetailClosed5=productDetail5.classList.contains("inactive"); //Componente 12: detalle producto 5
		console.log(isProductDetailClosed5)
		const isProductDetailClosed6=productDetail6.classList.contains("inactive"); //Componente 12: detalle producto 6
		console.log(isProductDetailClosed6)
		
		if(!ismenuMobileClosed){							// ¿Está abierto el menú mobile?
			menuMobile.classList.add("inactive")	
		} else if (!ismenuDesktopClosed){			// ¿Está abierto el menú desktop?
			menuDesktop.classList.add("inactive")

		} else if (!isProductDetailClosed1){  // ¿Está abierto del detalle de producto del producto 1?
			productDetail1.classList.add("inactive")

		} else if (!isProductDetailClosed2){  // ¿Está abierto del detalle de producto del producto 2?
			productDetail2.classList.add("inactive")

		} else if (!isProductDetailClosed3){  // ¿Está abierto del detalle de producto del producto 3?
			productDetail3.classList.add("inactive")

		} else if (!isProductDetailClosed4){  // ¿Está abierto del detalle de producto del producto 4?
			productDetail4.classList.add("inactive")

		} else if (!isProductDetailClosed5){  // ¿Está abierto del detalle de producto del producto 5?
			productDetail5.classList.add("inactive")

		} else if (!isProductDetailClosed6){  // ¿Está abierto del detalle de producto del producto 6?
			productDetail6.classList.add("inactive")
			
		}
		
		shoppingCartDetail.classList.toggle("inactive");
	};
	

 //Cuando quiero activar C8: Menú Mobile (vista mobile)


	function toggleMobileMenu(){
		const isCartDetailClosed= shoppingCartDetail.classList.contains("inactive")
		console.log(isCartDetailClosed)

		const isProductDetailClosed1=productDetail1.classList.contains("inactive"); //Componente 12: detalle producto 1
		console.log(isProductDetailClosed1)
		const isProductDetailClosed2=productDetail2.classList.contains("inactive"); //Componente 12: detalle producto 2
		console.log(isProductDetailClosed2)
		const isProductDetailClosed3=productDetail3.classList.contains("inactive"); //Componente 12: detalle producto 3
		console.log(isProductDetailClosed3)
		const isProductDetailClosed4=productDetail4.classList.contains("inactive"); //Componente 12: detalle producto 4
		console.log(isProductDetailClosed4)
		const isProductDetailClosed5=productDetail5.classList.contains("inactive"); //Componente 12: detalle producto 5
		console.log(isProductDetailClosed5)
		const isProductDetailClosed6=productDetail6.classList.contains("inactive"); //Componente 12: detalle producto 6
		console.log(isProductDetailClosed6)


		if(!isCartDetailClosed){														//¿Está abierto el carrito de compra?
			shoppingCartDetail.classList.add("inactive")
		}
		if(!isProductDetailClosed1){                        //¿Está abierto del detalle de producto del producto 1?
			productDetail1.classList.add("inactive")
		}
		if(!isProductDetailClosed2){                        //¿Está abierto del detalle de producto del producto 2?
			productDetail2.classList.add("inactive")
		}
		if(!isProductDetailClosed3){                        //¿Está abierto del detalle de producto del producto 3?
			productDetail3.classList.add("inactive")
		}
		if(!isProductDetailClosed4){                        //¿Está abierto del detalle de producto del producto 4?
			productDetail4.classList.add("inactive")
		}
		if(!isProductDetailClosed5){                        //¿Está abierto del detalle de producto del producto 5?
			productDetail5.classList.add("inactive")
		}
		if(!isProductDetailClosed6){                        //¿Está abierto del detalle de producto del producto 6?
			productDetail6.classList.add("inactive")
		}

		menuMobile.classList.toggle("inactive");
	};


 //Cuando quiero activar C7: Menú Desktop (vista desktop)

	function toggleDesktopMenu(){
		const isCartDetailClosed= shoppingCartDetail.classList.contains("inactive")
		console.log(isCartDetailClosed)

		const isProductDetailClosed1=productDetail1.classList.contains("inactive"); //Componente 12: detalle producto 1
		console.log(isProductDetailClosed1)
		const isProductDetailClosed2=productDetail2.classList.contains("inactive"); //Componente 12: detalle producto 2
		console.log(isProductDetailClosed2)
		const isProductDetailClosed3=productDetail3.classList.contains("inactive"); //Componente 12: detalle producto 3
		console.log(isProductDetailClosed3)
		const isProductDetailClosed4=productDetail4.classList.contains("inactive"); //Componente 12: detalle producto 4
		console.log(isProductDetailClosed4)
		const isProductDetailClosed5=productDetail5.classList.contains("inactive"); //Componente 12: detalle producto 5
		console.log(isProductDetailClosed5)
		const isProductDetailClosed6=productDetail6.classList.contains("inactive"); //Componente 12: detalle producto 6
		console.log(isProductDetailClosed6)

		if(!isCartDetailClosed){													//¿Está abierto el carrito de compra?
			shoppingCartDetail.classList.add("inactive"); 
		} else if (!isProductDetailClosed1){							//¿Está abierto del detalle de producto del producto 1?
			productDetail1.classList.add("inactive"); 
		}	else if (!isProductDetailClosed2){							//¿Está abierto del detalle de producto del producto 2?
			productDetail2.classList.add("inactive"); 
		}	else if (!isProductDetailClosed3){							//¿Está abierto del detalle de producto del producto 3?
			productDetail3.classList.add("inactive"); 
		}	else if (!isProductDetailClosed4){							//¿Está abierto del detalle de producto del producto 4?
			productDetail4.classList.add("inactive"); 
		}	else if (!isProductDetailClosed5){							//¿Está abierto del detalle de producto del producto 5?					
			productDetail5.classList.add("inactive"); 
		}	else if (!isProductDetailClosed6){							//¿Está abierto del detalle de producto del producto 6?
			productDetail6.classList.add("inactive"); 
		};

		menuDesktop.classList.toggle("inactive");
	}

	//Cuando quiero activar C12: detalle de productos

	function toggleProductDetail1(){
		const isCartDetailClosed= shoppingCartDetail.classList.contains("inactive"); //Componente 13:carrito de compra OFF
		const ismenuDesktopClosed= menuDesktop.classList.contains("inactive");	//Componente 7: menú desktop OFF
		const isProductDetailClosed2=productDetail2.classList.contains("inactive"); //Componente 12:detalle producto 2 OFF
		const isProductDetailClosed3=productDetail3.classList.contains("inactive"); //Componente 12:detalle producto 3 OFF
		const isProductDetailClosed4=productDetail4.classList.contains("inactive"); //Componente 12:detalle producto 4 OFF
		const isProductDetailClosed5=productDetail5.classList.contains("inactive"); //Componente 12:detalle producto 5 OFF
		const isProductDetailClosed6=productDetail6.classList.contains("inactive"); //Componente 12:detalle producto 6 OFF

		if(!isCartDetailClosed){												//¿Está abierto el carrito de compra?
			shoppingCartDetail.classList.add("inactive"); // Cerrar
		} else if (!ismenuDesktopClosed){								//¿Está abierto el menú desktop?
			menuDesktop.classList.add("inactive"); 				// Cerrar
		} else if(!isProductDetailClosed2){							//¿Está activado el detalle del producto N°02?
			productDetail2.classList.add("inactive");
		} else if(!isProductDetailClosed3){							//¿Está activado el detalle del producto N°03?
			productDetail3.classList.add("inactive");
		} else if(!isProductDetailClosed4){							//¿Está activado el detalle del producto N°04?
			productDetail4.classList.add("inactive");
		} else if(!isProductDetailClosed5){							//¿Está activado el detalle del producto N°05?
			productDetail5.classList.add("inactive");
		} else if(!isProductDetailClosed6){							//¿Está activado el detalle del producto N°06?
			productDetail6.classList.add("inactive");
		};

		productDetail1.classList.toggle("inactive");
	}

	function toggleProductDetail2(){
		const isCartDetailClosed= shoppingCartDetail.classList.contains("inactive"); //Componente 13:carrito de compra OFF
		const ismenuDesktopClosed= menuDesktop.classList.contains("inactive");			//Componente 7: menú desktop OFF
		const isProductDetailClosed1=productDetail1.classList.contains("inactive"); //Componente 12:detalle producto 1 OFF
		const isProductDetailClosed3=productDetail3.classList.contains("inactive"); //Componente 12:detalle producto 3 OFF
		const isProductDetailClosed4=productDetail4.classList.contains("inactive"); //Componente 12:detalle producto 4 OFF
		const isProductDetailClosed5=productDetail5.classList.contains("inactive"); //Componente 12:detalle producto 5 OFF
		const isProductDetailClosed6=productDetail6.classList.contains("inactive"); //Componente 12:detalle producto 6 OFF

		if(!isCartDetailClosed){												//¿Está abierto el carrito de compra?
			shoppingCartDetail.classList.add("inactive"); // Cerrar
		} else if (!ismenuDesktopClosed){								//¿Está abierto el menú desktop?
			menuDesktop.classList.add("inactive"); // Cerrar
		} else if(!isProductDetailClosed1){						//¿Está abierto el detalle de producto 1?
			productDetail1.classList.add("inactive");   // Cerrar detalle de producto 1
		} else if(!isProductDetailClosed3){						//¿Está abierto el detalle de producto 3?
			productDetail3.classList.add("inactive");		// Cerrar detalle de producto 3
		} else if(!isProductDetailClosed4){						//¿Está abierto el detalle de producto 4?
			productDetail4.classList.add("inactive");		// Cerrar detalle de producto 4
		} else if(!isProductDetailClosed5){						//¿Está abierto el detalle de producto 5?
			productDetail5.classList.add("inactive");		// Cerrar detalle de producto 5
		} else if(!isProductDetailClosed6){						//¿Está abierto el detalle de producto 6?
			productDetail6.classList.add("inactive");		// Cerrar detalle de producto 6
		};

		productDetail2.classList.toggle("inactive");
	}

	function toggleProductDetail3(){
		const isCartDetailClosed= shoppingCartDetail.classList.contains("inactive"); //Componente 13:carrito de compra OFF
		const ismenuDesktopClosed= menuDesktop.classList.contains("inactive");			//Componente 7: menú desktop OFF
		const isProductDetailClosed1=productDetail1.classList.contains("inactive"); //Componente 12:detalle producto 1 OFF
		const isProductDetailClosed2=productDetail2.classList.contains("inactive"); //Componente 12:detalle producto 2 OFF
		const isProductDetailClosed4=productDetail4.classList.contains("inactive"); //Componente 12:detalle producto 4 OFF
		const isProductDetailClosed5=productDetail5.classList.contains("inactive"); //Componente 12:detalle producto 5 OFF
		const isProductDetailClosed6=productDetail6.classList.contains("inactive"); //Componente 12:detalle producto 6 OFF

		if(!isCartDetailClosed){												//¿Está abierto el carrito de compra?
			shoppingCartDetail.classList.add("inactive"); // Cerrar
		} else if (!ismenuDesktopClosed){								//¿Está abierto el menú desktop?
			menuDesktop.classList.add("inactive");        // Cerrar
		} else if(!isProductDetailClosed1){							//¿Está abierto el detalle de producto 1?
			productDetail1.classList.add("inactive");    // Cerrar detalle de producto 1
		} else if(!isProductDetailClosed2){						 //¿Está abierto el detalle de producto 2?
			productDetail2.classList.add("inactive");		 // Cerrar detalle de producto 2
		} else if(!isProductDetailClosed4){						 //¿Está abierto el detalle de producto 4?
			productDetail4.classList.add("inactive");		 // Cerrar detalle de producto 4
		} else if(!isProductDetailClosed5){						 //¿Está abierto el detalle de producto 5?
			productDetail5.classList.add("inactive");		 // Cerrar detalle de producto 5
		} else if(!isProductDetailClosed6){						 //¿Está abierto el detalle de producto 6?
			productDetail6.classList.add("inactive");		 // Cerrar detalle de producto 6
		};

		productDetail3.classList.toggle("inactive");
	}

	function toggleProductDetail4(){
		const isCartDetailClosed= shoppingCartDetail.classList.contains("inactive"); //Componente 13:carrito de compra OFF
		const ismenuDesktopClosed= menuDesktop.classList.contains("inactive");			//Componente 7: menú desktop OFF
		const isProductDetailClosed1=productDetail1.classList.contains("inactive"); //Componente 12:detalle producto 1 OFF
		const isProductDetailClosed2=productDetail2.classList.contains("inactive"); //Componente 12:detalle producto 2 OFF
		const isProductDetailClosed3=productDetail3.classList.contains("inactive"); //Componente 12:detalle producto 3 OFF
		const isProductDetailClosed5=productDetail5.classList.contains("inactive"); //Componente 12:detalle producto 5 OFF
		const isProductDetailClosed6=productDetail6.classList.contains("inactive"); //Componente 12:detalle producto 6 OFF

		if(!isCartDetailClosed){												//¿Está abierto el carrito de compra?
			shoppingCartDetail.classList.add("inactive"); // Cerrar
		} else if (!ismenuDesktopClosed){								//¿Está abierto el menú desktop?
			menuDesktop.classList.add("inactive"); 				// Cerrar
		} else if(!isProductDetailClosed1){						//¿Está abierto el detalle de producto 1?
			productDetail1.classList.add("inactive");   // Cerrar detalle de producto 1
		} else if(!isProductDetailClosed2){						//¿Está abierto el detalle de producto 2?
			productDetail2.classList.add("inactive");		// Cerrar detalle de producto 2
		} else if(!isProductDetailClosed3){						//¿Está abierto el detalle de producto 3?
			productDetail3.classList.add("inactive");		// Cerrar detalle de producto 3
		} else if(!isProductDetailClosed5){						//¿Está abierto el detalle de producto 5?
			productDetail5.classList.add("inactive");		// Cerrar detalle de producto 5
		} else if(!isProductDetailClosed6){						//¿Está abierto el detalle de producto 6?
			productDetail6.classList.add("inactive");		// Cerrar detalle de producto 6
		};

		productDetail4.classList.toggle("inactive");
	}

	function toggleProductDetail5(){
		const isCartDetailClosed= shoppingCartDetail.classList.contains("inactive"); //Componente 13:carrito de compra OFF
		const ismenuDesktopClosed= menuDesktop.classList.contains("inactive");			//Componente 7: menú desktop OFF
		const isProductDetailClosed1=productDetail1.classList.contains("inactive"); //Componente 12:detalle producto 1 OFF
		const isProductDetailClosed2=productDetail2.classList.contains("inactive"); //Componente 12:detalle producto 2 OFF
		const isProductDetailClosed3=productDetail3.classList.contains("inactive"); //Componente 12:detalle producto 3 OFF
		const isProductDetailClosed4=productDetail4.classList.contains("inactive"); //Componente 12:detalle producto 4 OFF
		const isProductDetailClosed6=productDetail6.classList.contains("inactive"); //Componente 12:detalle producto 6 OFF

		if(!isCartDetailClosed){												//¿Está abierto el carrito de compra?
			shoppingCartDetail.classList.add("inactive"); // Cerrar
		} else if (!ismenuDesktopClosed){								//¿Está abierto el menú desktop?
			menuDesktop.classList.add("inactive"); 				// Cerrar
		} else if(!isProductDetailClosed1){							//¿Está abierto el detalle de producto 1?
			productDetail1.classList.add("inactive");   	// Cerrar detalle de producto 1
		} else if(!isProductDetailClosed2){							//¿Está abierto el detalle de producto 2?
			productDetail2.classList.add("inactive");			// Cerrar detalle de producto 2
		} else if(!isProductDetailClosed3){							//¿Está abierto el detalle de producto 3?
			productDetail3.classList.add("inactive");			// Cerrar detalle de producto 3
		} else if(!isProductDetailClosed4){							//¿Está abierto el detalle de producto 4?
			productDetail4.classList.add("inactive");			// Cerrar detalle de producto 4
		} else if(!isProductDetailClosed6){							//¿Está abierto el detalle de producto 6?
			productDetail6.classList.add("inactive");			// Cerrar detalle de producto 6
		};	
		
		productDetail5.classList.toggle("inactive");
	}

	function toggleProductDetail6(){
		const isCartDetailClosed= shoppingCartDetail.classList.contains("inactive"); 	//Componente 13:carrito de compra OFF
		const ismenuDesktopClosed= menuDesktop.classList.contains("inactive");				//Componente 7: menú desktop OFF
		const isProductDetailClosed1=productDetail1.classList.contains("inactive"); //Componente 12:detalle producto 1 OFF
		const isProductDetailClosed2=productDetail2.classList.contains("inactive"); //Componente 12:detalle producto 2 OFF
		const isProductDetailClosed3=productDetail3.classList.contains("inactive"); //Componente 12:detalle producto 3 OFF
		const isProductDetailClosed4=productDetail4.classList.contains("inactive"); //Componente 12:detalle producto 4 OFF
		const isProductDetailClosed5=productDetail5.classList.contains("inactive"); //Componente 12:detalle producto 5 OFF

		if(!isCartDetailClosed){												//¿Está abierto el carrito de compra?
			shoppingCartDetail.classList.add("inactive"); // Cerrar
		} else if (!ismenuDesktopClosed){								//¿Está abierto el menú desktop?
			menuDesktop.classList.add("inactive"); 				// Cerrar
		} else if(!isProductDetailClosed1){						//¿Está abierto el detalle de producto 1?
			productDetail1.classList.add("inactive");   // Cerrar detalle de producto 1
		} else if(!isProductDetailClosed2){						//¿Está abierto el detalle de producto 2?
			productDetail2.classList.add("inactive");		// Cerrar detalle de producto 2
		} else if(!isProductDetailClosed3){						//¿Está abierto el detalle de producto 3?
			productDetail3.classList.add("inactive");		// Cerrar detalle de producto 3
		} else if(!isProductDetailClosed4){						//¿Está abierto el detalle de producto 4?
			productDetail4.classList.add("inactive");		// Cerrar detalle de producto 4
		} else if(!isProductDetailClosed5){						//¿Está abierto el detalle de producto 5?
			productDetail5.classList.add("inactive");		// Cerrar detalle de producto 5
		};

		productDetail6.classList.toggle("inactive");
	}
