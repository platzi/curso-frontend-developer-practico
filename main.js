const menuEmail = document.querySelector('.navbar-email'); //donde debo dar click
const deskopMenu = document.querySelector('.desktop-menu'); // donde quiero que cambie con el click
const menuMobile = document.querySelector('.menu');
const movileMenu = document.querySelector('.mobile-menu');
const menuDeskopCar = document.querySelector('.navbar-shopping-cart');
const carMenu = document.querySelector('.product-detail');//recordar que tiene que llevar el punto por que son clases si fuera ID seria numeral y si fuera etiquete nada
const cardsContainer = document.querySelector('.cards-container')


// selecionamos nuestro main container. 
const mainContainer = document.querySelector(".main-container");


/* de esta forma se convierte un objeto en un array
const menu2 = {...[deskopMenu,movileMenu,menuDeskopCar]}
console.log(menu2)
const menu3 = array from ([deskopMenu,movileMenu,menuDeskopCar])
console.log(menu3) */







/* //otra forma 1
menuEmail.addEventListener("click", () => toggleElement(deskopMenu));
menuMobile.addEventListener("click", () => toggleElement(movileMenu));
menuDeskopCar.addEventListener("click", () => toggleElement(carMenu));



const toggleElement = (e) => {

    e.classList.toggle("inactive");
    
    if (e==deskopMenu || e==movileMenu) {
      carMenu.classList.add('inactive');
    }

};*/
/* 
otra forma de capturar datos
atajo en bloque shit + alt  + a
*/

/* 
//otra forma 2 
// creamos una funcion que va a validar si alguno de los 2 menus o el carrito de compras este abierto y va a cerrarlo si esta abierto. 

function colseMenusClick() {

  const isMobileMenuClosed = movileMenu.classList.contains('inactive');
  const isDesktopMenuClosed = deskopMenu.classList.contains('inactive')
  const isCarritoComprasClosed = carMenu.classList.contains('inactive');
  
  if (!isMobileMenuClosed || !isDesktopMenuClosed || !isCarritoComprasClosed )  {

      movileMenu.classList.add("inactive");
      deskopMenu.classList.add("inactive");   
      carMenu.classList.add("inactive");
 
  }

}
// añadimos un evento de escucha y llamamos a la funcion antes creada  
mainContainer.addEventListener('click', colseMenusClick);
 */


menuEmail.addEventListener ('click',toggleDeskotMenu);
menuMobile.addEventListener ('click',toggleMobileMenu);
menuDeskopCar.addEventListener ('click',toggleDeskopCar);


function toggleDeskotMenu () {
    pestaña = deskopMenu.classList.value;  
    deskopMenu.classList.toggle('inactive');
    carMenu.classList.add('inactive');
};


function toggleMobileMenu () {
  pestaña = movileMenu.classList.value;
  

  movileMenu.classList.toggle('inactive');
  carMenu.classList.add('inactive');
  };

function toggleDeskopCar () {
  pestaña = carMenu.classList.value;

  carMenu.classList.toggle('inactive');
  movileMenu.classList.add('inactive');
  deskopMenu.classList.add('inactive');
}


/* function cleanScreen (valor) {
    let menuLista = [...menu];
    console.log(menuLista);
    let posicion = menuLista.indexOf(valor);
    console.log(posicion)

    

   
    
    console.log(menuLista.length)
    menuLista = menuLista.filter((item ) => item  !== valor)
    console.log(menuLista)
    for (let i=0; i<menuLista.length; i++){
      console.log(menuLista[i])
      menuLista[i].classList.add('inactive')
  } 
} */

const productlist = [];
productlist.push ({
  name: 'bike',
  price: 120,
  Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productlist.push ({
  name: 'motorbike',
  price: 1200,
  Image: 'https://images.pexels.com/photos/5803142/pexels-photo-5803142.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productlist.push ({
  name: 'car',
  price: 6000,
  Image: 'https://images.pexels.com/photos/3686770/pexels-photo-3686770.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

/* atajo para f0r

for (product of productlist)*/

/* estructura base
<div class="product-card">
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
</div> 
 */



  function renderProductos(arr) {
    for (product of productlist) {
      //crear el div
      const productCard = document.createElement('div')
      // asignarle la clase
      productCard.classList.add('product-card')
      
      
      //product contiene {name, price, img} product.img
      const productImg =document.createElement('img')
      //agregar el link de la imagen
      productImg.setAttribute('src', product.Image)
      
      const productInfo = document.createElement('div');
      productInfo.classList.add('product-info');
    
      const productInfoDiv = document.createElement('div');
    
      const productPrice = document.createElement('p');
      productPrice.innerText = '$' + product.price;
    
      const productName = document.createElement('p');
      productName.innerText = product.name;
    
      //meter los datos de precios y nombre en el div
      productInfoDiv.appendChild(productPrice);
      productInfoDiv.appendChild(productName);
/** 
 * ! mejora para el appen productInfoDiv.append(productPrice, productName)
 
*/       
    
      const productInfoFigure = document.createElement('figure');
      const productImgCard = document.createElement('img');
      productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg')
      //meter la imagen dentro del figure
      productInfoFigure.appendChild(productImgCard);
    
      
      //meter productinfodiv y productinfofigure en el productinfo
      productInfo.appendChild(productInfoDiv)
      productInfo.appendChild(productInfoFigure)
    
    
      productCard.appendChild(productImg)
      productCard.appendChild(productInfo)
      
      //meter productCards en el container
      cardsContainer.appendChild(productCard);
    
    
      /** 
       * ! me sirve para mas adelante ya que tien clases y metodos
      como se va a tener que trabajar con la class container se agrega la costante en query selecto
    }

   /*  Pueden crear una clase y crear un metodo deploy(), lo que hara este metodo es es que cada vez que creen un producto y le apliquen el metodo deploy(), este mismo producto se añadira a nuestro contenedor de las cards en html.

class product {
    constructor({
        name,
        id,
        price,
        img
    }){
        this.name = name,
        this.id= id,
        this.price= price,
        this.img= img
    }
 ///metodo deploy()
    deploy(){
        let cardHtml=`
        <img src="${this.img}" alt="">
            <div class="product-info">
            <div>
                <p>$${this.price}</p>
                <p>${this.name}</p>
            </div>
            <figure>
                <img src="./icons/bt_add_to_cart.svg"   alt="">
            </figure>
            </div>
        `
        const parentChildsCards= document.querySelector('.cards-container');
        let cardInfoProduct= document.createElement('div');
        cardInfoProduct.classList.add('product-card');
        cardInfoProduct.innerHTML= cardHtml;
        parentChildsCards.insertAdjacentElement('beforeend',cardInfoProduct);
    }
}
crean cualquier producto con la clase y una vez creado se le aplica el metodo.

// creamos un nuevo producto de la instancia product
const portatil= new product({
        name:'Portatil Hp Pavilion',
        id: 6841563,
        price: 1200,
        img: 'https://th.bing.com/th/id/R.64e3e17f84c592313289c38103125892?rik=F26je4v5XKOAPA&pid=ImgRaw&r=0'
    });

  portatil.deploy();
///producto subido a nuestra pagina */
  }

  renderProductos(productlist)