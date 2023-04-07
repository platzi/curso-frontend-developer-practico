/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./code/index.js":
/*!***********************!*\
  !*** ./code/index.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _estilos_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @estilos/styles.css */ \"./estilos/styles.css\");\n/* harmony import */ var _icons_bt_add_to_cart_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @icons/bt_add_to_cart.svg */ \"./icons/bt_add_to_cart.svg\");\n/* harmony import */ var _icons_icon_close_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @icons/icon_close.png */ \"./icons/icon_close.png\");\n/* harmony import */ var _icons_icon_menu_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @icons/icon_menu.svg */ \"./icons/icon_menu.svg\");\n/* harmony import */ var _icons_icon_shopping_cart_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @icons/icon_shopping_cart.svg */ \"./icons/icon_shopping_cart.svg\");\n/* harmony import */ var _icons_flechita_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @icons/flechita.svg */ \"./icons/flechita.svg\");\n/* harmony import */ var _logos_logo_yard_sale_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @logos/logo_yard_sale.svg */ \"./logos/logo_yard_sale.svg\");\n\r\n\r\n// rm -rf dist && npm run build\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst imgMenu     = document.querySelector(\".menu\")\r\nconst imgLogo     = document.querySelector(\".logo\")\r\nconst imgCartshop = document.querySelector(\".cart-shop\")\r\nconst imgArrow    = document.querySelector(\".arrowImg\")\r\nconst imgClose    = document.querySelector(\".imgClose\")\r\nconst imgAddCart    = document.querySelector(\".imgAddCart\")\r\n\r\n\r\nimgMenu.src = `${_icons_icon_menu_svg__WEBPACK_IMPORTED_MODULE_3__}`;\r\nimgLogo.src = `${_logos_logo_yard_sale_svg__WEBPACK_IMPORTED_MODULE_6__}`;\r\nimgCartshop.src = `${_icons_icon_shopping_cart_svg__WEBPACK_IMPORTED_MODULE_4__}`;\r\nimgArrow.src = `${_icons_flechita_svg__WEBPACK_IMPORTED_MODULE_5__}`;\r\nimgClose.src = `${_icons_icon_close_png__WEBPACK_IMPORTED_MODULE_2__}`;\r\nimgAddCart.src = `${_icons_bt_add_to_cart_svg__WEBPACK_IMPORTED_MODULE_1__}`;\r\n\r\n\r\n\r\n\r\n\r\nconst menuEmail = document.querySelector(\".navbar-email\")\r\nconst DesktopMenu = document.querySelector(\".desktop-menu\")\r\n\r\nconst MenuBurger = document.querySelector(\".menuBurger\")\r\nconst mobileMenu = document.querySelector(\".mobile-menu\")\r\n\r\nconst menuCarrito = document.querySelector(\".navbar-shopping-cart\")\r\nconst menuMyorder = document.querySelector(\"#shoppingCartContainer\")\r\n\r\nconst cardsContainer = document.querySelector(\".cards-container\")\r\n\r\nconst detalles = document.querySelector(\"#productDetail\")\r\nconst detallesPicture = document.querySelector(\".cards-container\")\r\nconst cerrardetalles = document.querySelector(\".close\")\r\n\r\n\r\n\r\nconst imagenDetalle = document.querySelector(\"#imageDetalle\")\r\nconst precioDetalle = document.querySelector(\"#precio\")\r\nconst nameDetalle = document.querySelector(\"#nameProduct\")\r\nconst DetalleInfo = document.querySelector(\"#detalleInfo\")\r\n\r\nconst addCar = document.querySelector('#botonCarrito');\r\n\r\n\r\nconst pagarW = document.querySelector(\".primary-button\")\r\n\r\n\r\nmenuEmail.addEventListener('click', correoMenu)\r\nfunction correoMenu() {\r\n    DesktopMenu.classList.toggle('inactive')\r\n    detalles.classList.add('inactive')\r\n    menuMyorder.classList.add(\"inactive\")\r\n}\r\n\r\nMenuBurger.addEventListener(\"click\", toogleMobile)\r\nfunction toogleMobile() {\r\n    mobileMenu.classList.toggle(\"inactive\")\r\n    menuMyorder.classList.add(\"inactive\");\r\n    detalles.classList.add('inactive')\r\n}\r\n\r\nmenuCarrito.addEventListener('click', toogleMyOrder)\r\nfunction toogleMyOrder() {\r\n    menuMyorder.classList.toggle(\"inactive\")\r\n    mobileMenu.classList.add(\"inactive\")\r\n    detalles.classList.add('inactive')\r\n    DesktopMenu.classList.add('inactive')\r\n}\r\nconst productList = [];\r\n\r\n\r\nproductList.push({\r\n    name: \"pulsera con diseño minimalista\",\r\n    price: 40,\r\n    image: \"https://i.pinimg.com/564x/77/52/08/775208fd2388787d11bf9b1d489e5b0a.jpg\",\r\n    info: \"👉👉👉👉👉 CORRECCIÓN ✅✅ 🔅POR FAVOR LOS HILOS SON EL PRIMERO QUE ES DE LA MUÑECA DE 56 CM REEMPLAZARLO POR 112 CENTÍMETROSY PARA EL SEGUNDO QUE ES PARA EL\",\r\n    code: \"https://pin.it/1ekzFT8\"\r\n});\r\n\r\nproductList.push({\r\n    name: \"Red Decenario Knotted Rosary Stylish Pulseras Trendy Celebrity Bracelet \",\r\n    info: \"https://www.etsy.com/listing/594948397/red-decenario-knotted-rosary-stylish?epik=dj0yJnU9TDVHdGZUczZNSkpwTDhlVU9iVTZDcGxaZUFvaFRPQmYmcD0wJm49eEczNXBkUFlVdWdUSnNKNEt4TFREdyZ0PUFBQUFBR1F2UmJn \\n\\n Esta pulsera rosario está hecha de cordón y tiene una cruz de macramé. Las diez Avemarías también son un diseño de macramé. Como se trata de una pulsera ajustable, es perfecta para niños, adolescentes y adultos. Está muy bien hecho y es una manera fácil de tener un rosario contigo en todo momento.\",\r\n    price: 45,\r\n    image:\r\n        \"https://i.pinimg.com/564x/4a/f5/aa/4af5aaf23e653fcad8cb9dab212727ce.jpg\",\r\n    code: \"RDKRPTC\"\r\n\r\n});\r\n\r\nproductList.push({\r\n    info: \"Collar nuevo y estetico\",\r\n    name: \"Collar eco-Friendly\",\r\n    price: 30,\r\n    image:\r\n        \"https://i.pinimg.com/564x/11/11/1d/11111dbce6164b2735c2a3ddbd58bdca.jpg\",\r\n    code: \"https://pin.it/5aq5NHv\"\r\n\r\n});\r\n\r\nproductList.push({\r\n    info: \"Este hermoso collar en forma de corazón es una pieza única que seguramente llamará la atención de todos. El colgante en forma de corazón está hecho de un material de alta calidad, con un acabado suave y brillante que refleja la luz de manera espectacular.\",\r\n    name:\"Collar corazon for you\",\r\n    price: 40,\r\n    image:\r\n        \"https://i.pinimg.com/564x/94/6b/bc/946bbc13955bb8e294e86c8661a82781.jpg\",\r\n    code: \"CORA123\"\r\n\r\n});\r\n\r\nproductList.push({\r\n    info: \"Collar con tematica de los vengadores\",\r\n    name: \"Collar con tema de LOKI\",\r\n    price: 60,\r\n    image:\r\n        \"https://i.pinimg.com/564x/f0/d0/6e/f0d06ef71fb66bd3e54c79073060b5f0.jpg\",\r\n    code: \"LoKi12\"\r\n\r\n});\r\n\r\nproductList.push({\r\n    info: \"¡Estas pulseras serían el regalo más dulce para cualquier amante de los superhéroes! Este listado es para una pulsera. Cada pulsera está encordada dos veces a mano en un cordón elástico para garantizar la calidad y la durabilidad. ✨¿Necesitas ayuda con qué talla de pulsera elegir? Use una cinta métrica flexible o una tira de papel para envolver su muñeca. Debe quedar ajustado pero no demasiado apretado. Si usa una hoja de papel, marque el tamaño con un bolígrafo y use una regla para ver la medida. Recomiendo dimensionar hasta la media pulgada más cercana.\",\r\n    name: \"pulsera para niños\",\r\n    price: 35,\r\n    image:\r\n        \"https://i.pinimg.com/564x/4c/e4/dd/4ce4ddf1a40d2176168c6cbfeb1ea364.jpg\",\r\n    code: \"PSNI1\"\r\n});\r\n\r\n\r\n\r\n// renderProducts(productList);\r\nrenderizar(productList);\r\n\r\n//--------------------------------------\r\n\r\nlet productoAgregado = []\r\n\r\nfunction renderizar(productList) {\r\n\r\n    for (const product of productList) {\r\n        let divproductCard = document.createElement('div')\r\n        let imgproductcard = document.createElement('img')\r\n        let divproductinfo = document.createElement('div')\r\n        let divdivproductinfo = document.createElement('div')\r\n        let pprice = document.createElement('p')\r\n        let pname = document.createElement('p')\r\n        let figureproductinfo = document.createElement('figure')\r\n        let imgproductinfo = document.createElement('img')\r\n        divproductCard.classList.add('product-card')\r\n        imgproductcard.setAttribute('src', product.image)\r\n        divproductinfo.classList.add('product-info')\r\n        pprice.innerText = `$ ${product.price}`\r\n        pname.innerText = product.name\r\n        imgproductinfo.setAttribute('src', `${_icons_bt_add_to_cart_svg__WEBPACK_IMPORTED_MODULE_1__}`)\r\n\r\n        figureproductinfo.appendChild(imgproductinfo)\r\n        divdivproductinfo.appendChild(pprice)\r\n        console.log(pprice);\r\n        divdivproductinfo.appendChild(pname)\r\n\r\n        divproductinfo.appendChild(divdivproductinfo)\r\n        divproductinfo.appendChild(figureproductinfo)\r\n\r\n        divproductCard.appendChild(imgproductcard)\r\n        divproductCard.appendChild(divproductinfo)\r\n\r\n        cardsContainer.appendChild(divproductCard)\r\n\r\n        imgproductcard.addEventListener('click', function () {\r\n            mostrarInfoProduct(product.image, product.price, product.name, product.info)\r\n            openProductDetail()\r\n\r\n            console.log(\r\n                \"name es \", product.name,\r\n                \"\\n precio es \", product.price,\r\n                \"\\n info es \", product.info,\r\n                \"\\n imagen es \", product.image\r\n            );\r\n\r\n\r\n        });\r\n\r\n        imgproductinfo.addEventListener('click', function () {\r\n\r\n            let productoAgregado = []\r\n\r\n            productoAgregado.push({\r\n                name: product.name,\r\n                price: product.price,\r\n                descripcion: product.info,\r\n                image: product.image\r\n\r\n            })\r\n            // agregarCarrito(productoAgregado)\r\n            console.log(productoAgregado);\r\n            agregarCarrito(productoAgregado);\r\n\r\n\r\n        })\r\n\r\n\r\n\r\n    }\r\n\r\n}\r\n\r\n\r\nfunction imprimir(productoAgregado) {\r\n    // console.log(productoAgregado);\r\n}\r\n\r\nlet productoACarrito = []\r\n\r\nlet buttonInfo = document.querySelector('.add-to-cart-button')\r\n\r\nbuttonInfo.addEventListener('click', butonClick)\r\nfunction butonClick() {\r\n    agregarCarrito(productoACarrito)\r\n}\r\n\r\nfunction openProductDetail() {\r\n    cerrardetalles.addEventListener(\"click\", cerrar);\r\n    detalles.classList.remove('inactive')\r\n    menuMyorder.classList.add(\"inactive\");\r\n}\r\n\r\nfunction mostrarInfoProduct(imagen, precio, nombre, info) {\r\n\r\n    //cambia la imagen\r\n    imagenDetalle.src = imagen\r\n    precioDetalle.innerHTML = `$ ${precio}`\r\n    nameDetalle.innerHTML = nombre\r\n    DetalleInfo.innerHTML = info\r\n\r\n    productoACarrito = []\r\n\r\n    productoACarrito.push({\r\n        name: nombre,\r\n        price: precio,\r\n        image: imagen\r\n    })\r\n\r\n}\r\n\r\nlet iconShopping = document.querySelector('.navbar-shopping-cart');\r\nlet countCarrito = document.querySelector('.navbar-shopping-cart div')\r\nlet myordercontentContainer = document.querySelector('.my-order-content')\r\nlet totalCarrito = document.querySelector('.total')\r\n\r\nlet productosEnCarrito = []\r\n\r\nlet result = [];\r\n\r\nfunction verificarProducto(nameProduct) {\r\n    return productosEnCarrito.some(function (articulo) {\r\n        return articulo === nameProduct\r\n    })\r\n}\r\n\r\nfunction agregarCarrito(producto) {\r\n\r\n    /* Creacion de elemtentos HTML */\r\n    let divShoppingCart = document.createElement('div')\r\n    let figureShoppingCart = document.createElement('figure')\r\n    let imgfigureShoppingCart = document.createElement('img')\r\n    let pnameShoppingCart = document.createElement('p')\r\n    let ppriceShoppingCart = document.createElement('p')\r\n    let imgcloseShoppingCart = document.createElement('img')\r\n\r\n\r\n    /* Se agrega contenido a cada uno de los elementos */\r\n    divShoppingCart.classList.add('shopping-cart')\r\n    imgfigureShoppingCart.setAttribute('src', producto[0].image)\r\n    pnameShoppingCart.innerText = producto[0].name\r\n    ppriceShoppingCart.innerText = '$' + producto[0].price\r\n    imgcloseShoppingCart.setAttribute('src', `${_icons_icon_close_png__WEBPACK_IMPORTED_MODULE_2__}`)\r\n    imgcloseShoppingCart.classList.add('removeList')\r\n\r\n    /* Se insertan los documentos */\r\n    figureShoppingCart.appendChild(imgfigureShoppingCart)\r\n    divShoppingCart.appendChild(figureShoppingCart)\r\n    divShoppingCart.appendChild(pnameShoppingCart)\r\n    divShoppingCart.appendChild(ppriceShoppingCart)\r\n    divShoppingCart.appendChild(imgcloseShoppingCart)\r\n    myordercontentContainer.appendChild(divShoppingCart)\r\n\r\n\r\n    /* Se agregan la cantidad de productos ademas de la suma de precios */\r\n    countCarrito.innerText = document.querySelectorAll('.shopping-cart').length\r\n    totalCarrito.innerText = '$' + (Number(totalCarrito.innerText.substring(1)) + Number(producto[0].price))\r\n    productosEnCarrito.push(producto[0].name)\r\n    console.log(\"los productos en carro: \", productosEnCarrito);\r\n\r\n    // }\r\n\r\n\r\n    /* Funcion para quitar productos del carrito */\r\n    imgcloseShoppingCart.addEventListener('click', function () {\r\n        divShoppingCart.remove()\r\n        countCarrito.innerText = document.querySelectorAll('.shopping-cart').length\r\n        totalCarrito.innerText = '$' + (Number(totalCarrito.innerText.substring(1)) - Number(producto[0].price))\r\n        productosEnCarrito.splice(productosEnCarrito.indexOf(producto[0].name), 1)\r\n\r\n        console.log(\"los productos en carro: \", productosEnCarrito);\r\n\r\n    })\r\n\r\n\r\n    pagarW.addEventListener('click', function () {\r\n        const result = [];\r\n\r\n        productosEnCarrito.forEach((item) => {\r\n            const product = productList.find((p) => p.name === item);\r\n            if (product) {\r\n                result.push(product);\r\n            }\r\n        });\r\n\r\n        console.log(\"el resultado que va:  \\n\", result);\r\n\r\n        sendWhatsappMessage(result);\r\n\r\n    })\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\r\n// ------------------------------------------------------------------------------------\r\n// const cardsContainer = document.querySelector(\".cards-container\");\r\nfunction cerrar() {\r\n    detalles.classList.toggle('inactive')\r\n    // cerrardetalles.toggle('inactive')\r\n    menuMyorder.classList.add(\"inactive\");\r\n    // console.log(product.image);\r\n\r\n}\r\n\r\n\r\n\r\nfunction sendWhatsappMessage(productosEnCarr) {\r\n    // Número de teléfono y mensaje que se quiere enviar\r\n    const phoneNumber = '9622167188';\r\n    let url = '';\r\n\r\n    let name = \"\";\r\n    let info = \"\";\r\n    let price = 1;\r\n    let image = \"\";\r\n    let codigo = \"\";\r\n\r\n    let message = `Me interesaron estos artículos \\n ${name} con código: ${codigo}`;\r\n\r\n    for (let i = 0; i < productosEnCarr.length; i++) {\r\n        name = productosEnCarr[i].name;\r\n        info = productosEnCarr[i].info;\r\n        price = productosEnCarr[i].price;\r\n        image = productosEnCarr[i].image;\r\n        codigo = productosEnCarr[i].code;\r\n\r\n        console.log(\"Me interesó el artículo: \", name,\r\n            \"\\n precio\", price,\r\n            \"código tester \", codigo);\r\n\r\n        message += `Nombre: ${productosEnCarr[i].name}\\n`;\r\n        message += `Precio: ${productosEnCarr[i].price}\\n`;\r\n        message += `Código: ${productosEnCarr[i].code}\\n\\n`;\r\n    }\r\n\r\n    console.log(message);\r\n\r\n    const userAgent = navigator.userAgent.toLowerCase();\r\n\r\n    if (/mobile|iphone|ipod|ipad|android|blackberry|iemobile|wpdesktop/i.test(userAgent)) {\r\n        url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;\r\n        console.log(\"El usuario está navegando en un dispositivo móvil\");\r\n\r\n    } else {\r\n        console.log(\"El usuario está navegando en una computadora\");\r\n\r\n        url = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;\r\n    }\r\n\r\n    // Se abre la URL en una nueva ventana\r\n    window.open(url);\r\n}\r\n\n\n//# sourceURL=webpack://curso-frontend-developer/./code/index.js?");

/***/ }),

/***/ "./estilos/styles.css":
/*!****************************!*\
  !*** ./estilos/styles.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://curso-frontend-developer/./estilos/styles.css?");

/***/ }),

/***/ "./icons/bt_add_to_cart.svg":
/*!**********************************!*\
  !*** ./icons/bt_add_to_cart.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"static/images/d6e969538a58d48c9495.svg\";\n\n//# sourceURL=webpack://curso-frontend-developer/./icons/bt_add_to_cart.svg?");

/***/ }),

/***/ "./icons/flechita.svg":
/*!****************************!*\
  !*** ./icons/flechita.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"static/images/5634ade2a3a788cac60b.svg\";\n\n//# sourceURL=webpack://curso-frontend-developer/./icons/flechita.svg?");

/***/ }),

/***/ "./icons/icon_close.png":
/*!******************************!*\
  !*** ./icons/icon_close.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"static/images/89e14351a9bf76ce26de.png\";\n\n//# sourceURL=webpack://curso-frontend-developer/./icons/icon_close.png?");

/***/ }),

/***/ "./icons/icon_menu.svg":
/*!*****************************!*\
  !*** ./icons/icon_menu.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"static/images/3ebff34167c36968ae6f.svg\";\n\n//# sourceURL=webpack://curso-frontend-developer/./icons/icon_menu.svg?");

/***/ }),

/***/ "./icons/icon_shopping_cart.svg":
/*!**************************************!*\
  !*** ./icons/icon_shopping_cart.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"static/images/995748b73b8792b4b60f.svg\";\n\n//# sourceURL=webpack://curso-frontend-developer/./icons/icon_shopping_cart.svg?");

/***/ }),

/***/ "./logos/logo_yard_sale.svg":
/*!**********************************!*\
  !*** ./logos/logo_yard_sale.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"static/images/6d98da71f7a1ec368eab.svg\";\n\n//# sourceURL=webpack://curso-frontend-developer/./logos/logo_yard_sale.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./code/index.js");
/******/ 	
/******/ })()
;