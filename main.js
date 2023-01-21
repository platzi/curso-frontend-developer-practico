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

	
	