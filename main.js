//Aparecer menu de inicio de seccion
const navEmail = document.querySelector(".navbar-email");//llama al elemento email.
const desktopMenu = document.querySelector(".desktop-menu");//variable que representa al menu del email.

navEmail.addEventListener("click", toggleDesktopMenu);//agregar evento click al email.

function toggleDesktopMenu()//funcion aparecer menu del email.
{
    const isAsideClosed = aside.classList.contains("inactive")//Almacena el estado del aside, que si esta cerrado o abierto.
    
    if(!isAsideClosed)//si esta abierto
    {
        aside.classList.add("inactive");//le agrega la clase incative para que se cierre.
    }

    desktopMenu.classList.toggle('inactive');//Agrega o le quita la clase incative para que se cierre o se abra.
}

//Aparecer menu lateral en mobile
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

menuHamIcon.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu()
{
    const isAsideClosed = aside.classList.contains("inactive");//Almacena el estado del menu lateral mobile, que si esta cerrado o abierto.
    
    if(!isAsideClosed)//Si esta abierto
    {
        aside.classList.add("inactive");//le agrega la clase incative para que se cierre.
    }

    mobileMenu.classList.toggle("inactive");//Agrega o le quita la clase incative para que se cierre o se abra.
}

//Aparecer menu de compras (icon)
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");

menuCarritoIcon.addEventListener("click", toggleCarritoAside)

function toggleCarritoAside()
{
    const ismobileMenuClosed = mobileMenu.classList.contains("inactive")//Almacena el estado del menu mobile, que si esta abierto o cerrado.
    
    if(!ismobileMenuClosed)//Si esta abierto.
    {
        mobileMenu.classList.add("inactive");//Le agrega la clase inactive para se cierre. 
    }

    const isDestopMenuClosed = desktopMenu.classList.contains("inactive")//Almacena el estado del menu del email, que si esta abierto o cerrado.
    
    if(!isDestopMenuClosed)//si esta abierto
    {
        desktopMenu.classList.add("inactive");//le agrega para la clase inactive para que se cierre.
    }
    
    aside.classList.toggle("inactive");//Agrega o le quita la clase incative para que se cierre o se abra.
}

// 

const productList = [];//Array vacio que almacenara todo los productos.

//Agregar elementos al array mediante el .push
productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
}); 

productList.push({
    name: "Motocycle",
    price: 500,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
}); 

productList.push({
    name: "Patines",
    price: 70 ,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
}); 

productList.push({
    name: "Casco",
    price: 20,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
}); 

{/* <div class="product-card">
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
      </div> */}

const cardContainer = document.querySelector(".cards-container");//Se hace llamada al elemento padre que contiene toda la lista de productos

for (product of productList)//Ciclo for para mostrar todos los elementos del array.
{
    const productCard = document.createElement("div");//se crea el div principal
    productCard.classList.add("product-card");//se la agrega una clase "product-card".

    const productImg = document.createElement("img");//se crea el elemento img
    productImg.setAttribute("src", product.image);//se le modifica la propiedad 'src' la cual agregara la del array.

    const productInfo = document.createElement("div");//se crea el div donde se almacena el nombre y precio.
    productInfo.classList.add("product-info");//Se la agrega la clase product-info.

    const productInfoDiv = document.createElement("div");//se crea el elemento div que almacena las etiquetas <p>.

    const productPrice = document.createElement("p");//Se crea la etiqueta <p> que almacena el precio.
    productPrice.innerText = "$" + product.price;//se inserta el precio del producto dependiendo del array.

    const productName = document.createElement("p");//Se crea la etiqueta <p> que almacena el nombre.
    productName.innerText = product.name;//se inserta el nombre del producto dependiendo del array.

    productInfoDiv.appendChild(productPrice);//Se inserta la etiqueta <p> dentro del div vacio.
    productInfoDiv.appendChild(productName);//Se inserta la etiqueta <p> dentro del div vacio.

    const productInfoFigure = document.createElement("figure");//se crea la etiqueta figure.
    const productImgCart = document.createElement("img");//se crea la etiqueta img
    productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");//Se inserta el 'src' en la etiqueta img.

    productInfoFigure.appendChild(productImgCart);//Se inserta la etiqueta <img> dentro de la etiqueta <figure> 

    productInfo.appendChild(productInfoDiv);//se inserta el div sin clase en el "product-info".
    productInfo.appendChild(productInfoFigure);//Se inserta la etiqueta figure dentro del "product-info".

    productCard.appendChild(productImg);//Se inserta la img dentro "product-card".
    productCard.appendChild(productInfo);//se inserta "product-info" dentro de "product-card".

    cardContainer.appendChild(productCard);//se inserta el "product-card" dentro del div padre "card-container".
}