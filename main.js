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

const shoppingCartDetail=document.querySelector(".product-detail");
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


	//SOLUCION DE ERRORES - RAUL

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

	//SOLUCION DE ERRORES - JUAN DC

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

/* Product List (componente 6)*/

const productList = [];

productList.push({
	name: "Bike",
	precio: 120, 
	imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
	name: "Keyboard",
	precio: 200, 
	imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvHMHgpVn5rWojE5bD_qJDhb_oF6MUIPOKdw&usqp=CAU",
});

productList.push({
	name: "Laptop",
	precio: 2500, 
	imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxfq-x6ilpy-sHAu_qm3-NXIYkLGcP_w9peg&usqp=CAU",
});

productList.push({
	name: "Speaker",
	precio: 300, 
	imagen: "https://media.pitchfork.com/photos/60ba7b0442b81a6a8412188a/4:3/w_1064,h_798,c_limit/indoor%20bluetooth%20header%20copy.png",
});

productList.push({
	name: "Desk",
	precio: 1300, 
	imagen: "https://www.whalenfurniture.com/wp-content/uploads/2021/07/SPLS-LTCGD-LEET-Onyx-Gaming-Desk-LS-Hero.jpg",
});

productList.push({
	name: "Headphones",
	precio: 800, 
	imagen: "https://www.travelandleisure.com/thmb/iYbb8D0du50s8ypCQmgxaXa1YZY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/the-best-kids-headphones-for-travel-tout-AMZN-HDPHN0722-133714e0e4b34ab2bd0c7a6a3d38687f.jpg",
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
		const img = document.createElement("img");
		//agregar atributo src
		img.setAttribute("src", product.imagen)
		// anexarlo a elemento HTML div (class="product-card")
		productCard.append(img);
	
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



	