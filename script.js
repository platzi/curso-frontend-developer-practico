/*una buena practica que hacen los programadores es colocar antes del nombre de la variable que tenga que ver con el dom un $ para poder diferenciar cuales elementos tienen que ver con la logica sel programa y cuales con el dom ejemplo: $email,$desktopmanu etc*/
/*existe tambien el classList.replace("nombre antigua clase", "nombre nueva clase") que remplaza una clase por otra
tambien con classList.add("clase1","clase2") puedes agregar varias clases al igual que con remove
El classList es para manejo de clases
*/
const email = document.querySelector(".navbar-email");
const desktopmenu = document.querySelector(".desktop-menu");
const burguerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCart = document.querySelector(".navbar-shopping-cart");
const productsInShoppingCart = document.querySelector(".product-detail");
/*productListContainer traigo el section del html para luego unirlo con el html que ingrese desde js*/
const productListContainer = document.querySelector("#product-list");
const productDetail = document.querySelector(".product-detail-secundary");
const closeProductDetail = document.querySelector(".product-detail-close");
const sombraMenu = document.querySelector("#sombraAbrirMenu");

email.addEventListener("click" , toggleDesktopmenu);
burguerMenu.addEventListener("click", toggleMobileMenu);
shoppingCart.addEventListener("click", toggleProductsInShoppingCart);
closeProductDetail.addEventListener("click", closeProduct);
sombraMenu.addEventListener("click", closedAllMenus);




/*esta es una forma de hacerla(como se me ocurrio a mi) el .matches sirve para comprobar si un elemento contiene una clase
function toogleDesktopmenu(){
    if(desktopmenu.matches(".inactive")){
        desktopmenu.classList.remove("inactive")
    }
    else{
        desktopmenu.classList.add("inactive")
    };
}*/

/*el .toggle devuelve true o false quita y agrega la clase inactive dependiendo si la ya tiene o no en ingles significa palanca es como un interruptos que alterna true y false*/

function toggleDesktopmenu(){
    
    const isProductsCartClosed = productsInShoppingCart.classList.contains("inactive");
    
    if(!isProductsCartClosed){/*si el carro de productos esta abierto*/
        productsInShoppingCart.classList.toggle("inactive");
    }
    desktopmenu.classList.toggle("inactive");
    productDetail.classList.add("inactive");

    shadowBox();
}

function toggleMobileMenu(){
    const isProductsCartClosed = productsInShoppingCart.classList.contains("inactive");

    if(!isProductsCartClosed){/*Si el carro de compras esta abierto*/
        productsInShoppingCart.classList.toggle("inactive");
    }

    mobileMenu.classList.toggle("inactive");
    productDetail.classList.add("inactive");
    shadowBox()
}
function toggleProductsInShoppingCart(){
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");/*devuelve un booleano si contiene o no esa clase*/
    const isDesktopMenuClosed = desktopmenu.classList.contains("inactive");


    if(!isMobileMenuClosed){/*Si el carro de compras esta abierto*/
        mobileMenu.classList.toggle("inactive");
    }
    else if(!isDesktopMenuClosed){/*si el menu de log out esta abierto*/
        desktopmenu.classList.toggle("inactive")
    }
    productsInShoppingCart.classList.toggle("inactive");
    productDetail.classList.add("inactive");
    shadowBox();
}
/*Se llama la funcion con el evento del click para que ese mismo evento se agregue al llamar a la funcion displayInfoInProductDetail*/
function clickInProduct(evento){
    productsInShoppingCart.classList.add("inactive");
    desktopmenu.classList.add("inactive");
    mobileMenu.classList.add("inactive");
    productDetail.classList.remove("inactive");

    /*Llamo la funcion para modificar los datos de cada elemento al abrir el detalle del producto*/
    displayInfoInProductDetail(evento);
    shadowBox()
}
function closeProduct(){
    productDetail.classList.add("inactive");
    sombraMenu.classList.add("inactive");/*Le agrego la clase inactive para que desaparezca la sombra cada vez que salga de un producto*/
}

/*Esta funcion es para cada vez que presione en la sombra se cierre cualqier menu abierto*/
function closedAllMenus(){
    productDetail.classList.add("inactive");
    mobileMenu.classList.add("inactive");
    sombraMenu.classList.add("inactive");
    desktopmenu.classList.add("inactive");
    productsInShoppingCart.classList.add("inactive");
}

/*Funcion para que cada producto detallado que seleccione aparezca*/

function displayInfoInProductDetail(evento){
    /*Seleccion de imagen*/
    const imgEventClick = evento.path[0];
    const productImgDetailSelection = document.querySelector(".product-detail-secundary > img")
    productImgDetailSelection.setAttribute("src", imgEventClick.src);
    console.log(imgEventClick)

    /*Seleccion de info precio y nombre*/
    /*busco el nodo del evento donde se encuentra el precio*/
    const priceProductSelection = evento.path[1].childNodes[1].childNodes[0].childNodes[0];
    /*luego de encontrarlo con .textcontent saco su contenido en texto*/
    const priceProductSelectionHTML = priceProductSelection.textContent;
    /*Selecciono el elemento a cambiar*/
    const priceProductDetailSelection = document.querySelector(".product-info-secundary p:first-child");
    priceProductDetailSelection.innerText = priceProductSelectionHTML;

    console.log(priceProductSelection);
    console.log(priceProductSelectionHTML);

    /*Seleccion de nombre del articulo, mismo procedimiento que en el precio*/
    console.log(evento);
    const nameProductSelection = evento.path[1].childNodes[1].childNodes[0].childNodes[1];
    const nameProductSelectionHTML = nameProductSelection.textContent;
    const nameProductDetailSelection = document.querySelector(".product-info-secundary p:nth-child(2)");
    nameProductDetailSelection.innerText = nameProductSelectionHTML;

    console.log(nameProductSelectionHTML);
}

/*otra forma de hacer la funcion displayInfoInProductDetail seria :

function displayInfoInProductDetail(event){
    
    const new_img_product_detail = event.path[0].src;

    const product_info = event.path[1].childNodes[1];

    const price = product_info.querySelector('div p:first-child');
    const name = product_info.querySelector('div p:nth-child(2)');

    const product_detail_img = productDetailContainer.querySelector('img:nth-child(2)');
    product_detail_img.setAttribute('src', new_img_product_detail);
    product_detail_img.setAttribute('alt', name.textContent);

    const product_detail_price = productDetailContainer.querySelector('.product-info p:nth-child(1)');
    product_detail_price.innerText = price.textContent;

    const product_detail_name = productDetailContainer.querySelector('.product-info p:nth-child(2)');
    product_detail_name.innerText = name.textContent;
    
}*/

/*Otra forma podria ser ejemplo:

function toggleProductsInShoppingCart(){
    mobileMenu.classList.add("inactive");
    productsInShoppingCart.classList.toggle("inactive");

   -------- o si no asi: 

    function toggleDesktopMenu() 
{
    mobileMenu.classList.add('inactive');
    aside.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu()
{
    desktopMenu.classList.add('inactive');
    aside.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
}

function toggleCartAside()
{
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    aside.classList.toggle('inactive');
}Basicamente primero garantizo que el resto de menus esten ocultos para luego
 mostrar el menu que debe salir.
    */

 /*Creo una funcion de efecto sombra solo cuando cualquier menu este abierto aparezca y desaparezca cuando ningun menu estee abierto y llamo esta funcion en cada evento de click que ocurre al presionar cada menu*/

 function shadowBox(){
    const isProductsCartClosed = productsInShoppingCart.classList.contains("inactive");
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
    const isDesktopMenuClosed = desktopmenu.classList.contains("inactive");
    const isProductDetailClosed = productDetail.classList.contains("inactive");

    if(!isProductsCartClosed || !isDesktopMenuClosed || !isMobileMenuClosed || !isProductDetailClosed){
        sombraMenu.classList.remove("inactive");
    }
    else if(isDesktopMenuClosed && isProductsCartClosed && isMobileMenuClosed && isProductDetailClosed){
        sombraMenu.classList.add("inactive");
    }

 }

 /*Ingresando html desde el js (lista de productos)*/

 const productList = [];
 productList.push ({
    name:'Bike',
    price: 12700,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1200,
    image: 'https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1600,
    image: 'https://m.media-amazon.com/images/I/61eExL-rIAL._AC_SL1001_.jpg'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1500,
    image: 'https://assets.specialized.com/i/specialized/60822-140_HLMT_CHAMONIX-HLMT-MIPS-CE-MRN-M-L_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});
productList.push ({
    name:'Seat',
    price: 300,
    image: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg'
});
productList.push ({
    name:'Tennis Montain Bike',
    price: 2200,
    image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg'
});
productList.push ({
    name:'Sunglasses',
    price: 800,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602'
});
productList.push ({
    name:'Sunglasses',
    price: 600,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/siroko-tech-k3s-clearfog-lente-antiniebla-frontal/1200x/crop_center.jpg?v=1635209603'
});
productList.push ({
    name:'Bicycle seat bag',
    price: 876,
    image: 'https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg'
}); 

 function productListGenerador(arr){

    for(const product of arr){

        /*Se crean todas las etiquetas html*/
       const cardContainer = document.createElement("div");
       const productCard = document.createElement("div");
       const imgProduct = document.createElement("img");
       const productInfo = document.createElement("div");
       const textInfoProduct = document.createElement("div");
       const primerParrafo = document.createElement("p");
       const segundoParrafo = document.createElement("p");
       const figureCartShop = document.createElement("figure");
       const imgShoppingCart = document.createElement("img");
     
       /*Luego se le agrega las clases y atributos a los elementos html*/
       cardContainer.classList.add("cards-container");
       productCard.classList.add("product-card");
       imgProduct.setAttribute("src", product.image);
       productInfo.classList.add("product-info");
       primerParrafo.innerText = "$" + product.price;
       segundoParrafo.innerText = product.name;
       imgShoppingCart.setAttribute ("src", "./icons/bt_add_to_cart.svg");

       /*Se comienzan a unir los elementos html(appendChild agrega solo un elemento pero append puedes agregar varios hijos a la vez*/
       figureCartShop.appendChild(imgShoppingCart);
         textInfoProduct.append(primerParrafo,segundoParrafo);
         productInfo.append(textInfoProduct, figureCartShop);
         productCard.append(imgProduct, productInfo);
         cardContainer.appendChild(productCard);
         productListContainer.appendChild(cardContainer);

         imgProduct.addEventListener("click", clickInProduct);
        }
      }   

    /*Se llama a la funcion junto con el array que queramos*/
        productListGenerador(productList);



  







