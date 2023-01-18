//proyecto ESTE
//donde las personas colocan sus propias preguntas y respuestas en un perfil
const nombreUsuario="jorman";
const Comida=["pollo","carne","pescado"];//prompt("indique su nombre de usuario")
const preguntasAna=[{
    id:1,
    name:"deporte",
    pregunta:`cual el deporte favorito de ${nombreUsuario}`,
    opcion:"1:basketball\r2:futbol\r3:baseball",
},{
    id:2,
    name:"comida",
    pregunta:`cual es la comida favorita de ${nombreUsuario}`
},{
    id:3,
    name:"clima",
    pregunta:`cual es el clima donde mas disfruta esta ${nombreUsuario}`
},
]
function elegir(){
   // for(let i=0;i >preguntasAna.length;i++){
    alert(`empieza, ${preguntasAna[1].pregunta}`)
    let eleccion=prompt(`elige, pollo,carne o pescado`);//luego las opciones las eligira el usuario
    if(eleccion="pollo"){//falta el igual despues de eleccion
        alert("exaaatoooo")
    }else{
        alert("como no vas a saber")
        elegir()
    }
}
elegir()
