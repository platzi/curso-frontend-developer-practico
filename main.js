//para egregar un addEvenListener:
//1.crear las variables de las etiquetas html que vamos a estar trabajando
//2. agregar la propiedad .addEventListener a la variable contendeora de la etiqueta que corresponda y alli le agregamos  el evento que queremos hacer y la función que se llamara una vez este evento se cumpla
//creamos la función que queremos que se ejecute

const navMenu = document.querySelector(`.navbar-email`);
const desktopMenu = document.querySelector(`.desktop-menu`);

const menuHamIcon = document.querySelector(`.menu`);
const mobileMenu = document.querySelector(`.mobile-menu`);

const menuCarritoIcon = document.querySelector(`.navbar-shopping-cart`);
const shoppingCartContainer = document.querySelector(`#shoppingCartContainer`);

const cardsContainer = document.querySelector(`.cards-container`);

const productDetailContainer = document.querySelector(`#productDetail`);

const productDetailCloseIcon = document.querySelector(`.product-detail-close`);
//Cuando queremos ejecutar un evento necesitamos traer la etiqueta de quien recibe el "addEventListener" y quien se ejecunta dentro de la función 
//en este caso los elementos del menú que presionamos son el menu hamburguesa y el correo electronico y aparecen dos menus diferentes uno para desktop y otro para mobile.



navMenu.addEventListener(`click` , toggleDesktopMenu);
function toggleDesktopMenu(){

    const isAsideClosed = shoppingCartContainer.classList.contains(`inactive`);

    if (!isAsideClosed){
        shoppingCartContainer.classList.add(`inactive`);
    }

    const isProductDetailContainerClosed = productDetailContainer.classList.contains(`inactive`);

    if (!isProductDetailContainerClosed) {
        productDetailContainer.classList.add(`inactive`);

    }

    desktopMenu.classList.toggle(`inactive`);
    //toggle nos permite activas y desactivar algo en este caso usamos classlist.toggle esto quiere decir que se activara y desactivara la clase `inactive`.
};

menuHamIcon.addEventListener(`click`, toggleMobileMenu);
function toggleMobileMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains(`inactive`);

    if(!isAsideClosed){
        shoppingCartContainer.classList.add(`inactive`);
    }

    const isProductDetailContainerClosed = productDetailContainer.classList.contains(`inactive`);

    if(!isProductDetailContainerClosed){
        productDetailContainer.classList.add(`inactive`)

    }


    mobileMenu.classList.toggle(`inactive`)


};




 menuCarritoIcon.addEventListener(`click`, toggleCarritoAside);
 //para permitir que al abrir un menú si en ese momento tenemos abierto otro y no queremos que los dos esten abiertos al tiempo
 //a la función que abre un menu le agregamos una variable  que contenga y valide que el menú que queremos que se cierre este activo
 //una vez tenemos la variable agregamos un condicional if que nos diga que  si a variable que dice que el menú que queremos desactivar no se encuentra inactivo le agregue la clase que lo desactive.

 function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains(`inactive`);//variable que valida el menu que queremos cerrar contiene la clase que lo inactiva

    const isDesktopMenuClosed = desktopMenu.classList.contains(`inactive`);

    if(!isDesktopMenuClosed) {
        desktopMenu.classList.add(`inactive`);
    }

    if(!isMobileMenuClosed){
        mobileMenu.classList.add(`inactive`);//condicional que valida si el menu que queremos cerrar no lo esta y lo cierra agregando la clase que lo i
    }

    const isProductDetailContainerClosed = productDetailContainer.classList.contains(`inactive`);

    if(!isProductDetailContainerClosed){
        productDetailContainer.classList.add(`inactive`);
    }

    shoppingCartContainer.classList.toggle(`inactive`);//agrega un switch que "quita y pone" la clase que le indicamos.

 }


 productDetailCloseIcon.addEventListener(`click` , closeProductDetailAside);

 function closeProductDetailAside (){ 

    const isMobileMenuClosed = mobileMenu.classList.contains(`inactive`);

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add(`inactive`);
    }

    const isAsideClosed = shoppingCartContainer.classList.contains(`inactive`);

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add(`inactive`);
    }

    const  isDesktopMenuClosed = desktopMenu.classList.contains(`inactive`);

    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add(`inactive`);
    }
  
    productDetailContainer.classList.add(`inactive`);
    
 }


//Para este ejercicio que no llamamos los productos desde una base de datos
//creamos una variable de array vacia en este caso productList =[];

const productList = [];
//despues usamos el metodo push para agregar los elemetnos dentro de un objeto (para este caso se agregan una lista manual pero no deberia ser asi, estos tienen que venir de una base de datos) 
productList.push({
    name: `Bike`,
    price: `120,00`,
    image: `https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`
});

productList.push({
    name: `Helmet`,
    price: `30`,
    image: 'https://images.pexels.com/photos/1323201/pexels-photo-1323201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productList.push({
    name: `Bike Helmet`,
    price: `40`,
    image: `https://images.pexels.com/photos/1396642/pexels-photo-1396642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`
});

productList.push({
    name: `Seat`,
    price: `35`,
    image: `https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg`

});

productList.push({
    name: `Sunglasses`,
    price: `100`,
    image: `https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602`
})

productList.push({
    name: `Glasses`,
    price: `90`,
    image: `https://cdn.siroko.com/s/files/1/1220/6874/products/siroko-tech-k3s-clearfog-lente-antiniebla-frontal/1200x/crop_center.jpg?v=1635209603`
})

productList.push({
    name: `Bicycle seat bag`,
    price: `110`,
    image: 'https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg'
})

//podemos cuardar esta iteración por ciclo for dentro de una función
//agregandole un parametro de esta forma podemos crear una iteración de diferentes arrays y reutilizar el codigo
function renderProducts(arr){

    //PARA MOSTRAR EL ARRAY DENTRO DEL HTML TENEMOS QUE RECORRERLO Y PARA ESTO PODEMOS USAR EL CICLO FOR (variable que daremos al recorrido por lo general es elsingular de del array que declaramos antes o un termino relacionado) for(product of productList){}
    for (product of arr){

        //NOTA ESTE HTML SOLO ESTA DE REFERENCIA PARA NO TENER QUE IR Y REGRESAR ENTRE ARCHIVOS
        /* <div class="product-card">
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
      </div> */
    
      //En este caso cada vez que se ejecute un ciclo pondremos a que se cree y se anexe el html al tiempo
        const productCard = document.createElement(`div`);
        productCard.classList.add(`product-card`);
        
    
        const productCardImg = document.createElement(`img`);
        productCardImg.setAttribute(`src`, product.image);
        productCardImg.addEventListener(`click` , openProductDetailAside);

        function openProductDetailAside (){

            const isMobileMenuClosed = mobileMenu.classList.contains(`inactive`);
            if (!isMobileMenuClosed) {
                mobileMenu.classList.add(`inactive`);
            }


            const isAsideClosed = shoppingCartContainer.classList.contains(`inactive`);
            if (!isAsideClosed){
                shoppingCartContainer.classList.add(`inactive`);
            }
            
            
            productDetailContainer.classList.remove(`inactive`);

            
        }
    
    
    
    
        const productInfo = document.createElement(`div`);
        productInfo.classList.add(`product-info`);
      
        
        const productInfoDiv = document.createElement(`div`);
        const productPrice = document.createElement(`p`);
        productPrice.innerText =`$ ${product.price}`;
        const productName = document.createElement(`p`);
    
        productName.innerText=`${product.name}`;
        productInfoDiv.append(productPrice, productName);
    
        
    
        const productInfoFigure = document.createElement(`figure`);
        const productImgCart =document.createElement(`img`);
        productImgCart.setAttribute(`src`, `./icons/bt_add_to_cart.svg`)
    
        //append o appendChild para agregar una etiqueta dentro de otra
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.append(productInfoDiv, productInfoFigure);
    
        productCard.append(productCardImg, productInfo);
    
    
        cardsContainer.appendChild(productCard);
    
       
    
    
    }
}

//llamamos la función que nos permitecambiar entre diferentes arrays solo agregandole un argumento del nombre del array que quermos iterar en este caso "productList"
renderProducts(productList);
