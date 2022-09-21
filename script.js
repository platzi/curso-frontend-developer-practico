const email = document.querySelector(".navbar-email");
const desktopmenu = document.querySelector(".desktop-menu");

email.addEventListener("click" , toogleDesktopmenu);



/*esta es una forma de hacerla(como se me ocurrio a mi) el .matches sirve para comprobar si un elemento contiene una clase
function toogleDesktopmenu(){
    if(desktopmenu.matches(".inactive")){
        desktopmenu.classList.remove("inactive")
    }
    else{
        desktopmenu.classList.add("inactive")
    };
}*/

/*el .toggle devuelve true o false quita y agrega la clase inactive dependiendo si la ya tiene o no*/
function toogleDesktopmenu(){
    desktopmenu.classList.toggle("inactive");
}