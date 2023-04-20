const menuEmail = document.querySelector('.navbar-email'); //donde debo dar click
const deskopMenu = document.querySelector('.desktop-menu'); // donde quiero que cambie con el click
const menuMobile = document.querySelector('.menu');
const movileMenu = document.querySelector('.mobile-menu');
const menuDeskopCar = document.querySelector('.navbar-shopping-cart');
const carMenu = document.querySelector('.product-detail');//recordar que tiene que llevar el punto por que son clases si fuera ID seria numeral y si fuera etiquete nada
const menu = [deskopMenu.classList.value,movileMenu.classList.value,menuDeskopCar.classList.value]
let pestaña;


/* console.log(menu)
console.log(deskopMenu) */
/* de esta forma se convierte un objeto en un array*/
const menu2 = {...[deskopMenu,movileMenu,menuDeskopCar]}
console.log(menu2) 
/* const menu3 = array from ([deskopMenu,movileMenu,menuDeskopCar])
console.log(menu3) */






/* 
otra forma
menuEmail.addEventListener("click", () => toggleElement(deskopMenu));
menuMobile.addEventListener("click", () => toggleElement(movileMenu));
menuDeskopCar.addEventListener("click", () => toggleElement(carMenu));



const toggleElement = (e) => {

    e.classList.toggle("inactive");
    
    if (e==deskopMenu || e==movileMenu) {

    }



};

otra forma de capturar datos
atajo en bloque shit + alt  + a
*/



menuEmail.addEventListener ('click',toggleDeskotMenu);
menuMobile.addEventListener ('click',toggleMobileMenu);
menuDeskopCar.addEventListener ('click',toggleDeskopCar);


function toggleDeskotMenu () {
    pestaña = deskopMenu.classList.value;
    

    deskopMenu.classList.toggle('inactive');
    carMenu.classList.add('inactive');
    /* cleanScreen (pestaña); */
};


function toggleMobileMenu () {
  pestaña = movileMenu.classList.value;
  

  movileMenu.classList.toggle('inactive');
  carMenu.classList.add('inactive');
/*     cleanScreen (pestaña);
 */};
function toggleDeskopCar () {
  pestaña = carMenu.classList.value;
  

  carMenu.classList.toggle('inactive');
/*   cleanScreen (pestaña);
 */  movileMenu.classList.add('inactive');
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
      menuLista[i].classList.toggle('inactive')
  } 
}  */