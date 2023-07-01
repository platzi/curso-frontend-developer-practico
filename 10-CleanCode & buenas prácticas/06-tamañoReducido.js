// ORGANIZACION DE LAS CLASES
/*
Variables → Son conocidas como propiedades en el mundo POO → son todos esos 
elementos donde vamos a guardar información.

Constantes → Son todos esos elementos que no van a cambiar su valor, 
también son conocidas como propiedades

Variables estáticas → Son elementos que pueden o no estar en la clase.

Métodos → Tus métodos son tus funciones, solo que en POO se le reconoce así, 
no olvides que dentro de una clase los métodos deben ser ordenados de mayor 
a menor importancia. Lo ordenas de la siguiente manera, creas una clase 
y esta clase tiene un método funcional y los otros métodos que se crean 
es para apoyar el primer método.

Funciones estáticas → se le dicen estáticas, ya que estas no deben ser heredadas 
a otra clase, solo se usan en la clase principal.

Getters y setters → Estas permiten alterar y obtener alguna propiedad de tu clase. 
Recuerda esto se usa para no poder acceder directamente a la propiedad JS si lo permite, pero NO es buena práctica.
*/

class userAuth {
  constructor( user ) {
    this.user = user
  }

  verifyCredentials() {
    return false;
  }
}

class UserSetting extends userAuth {
  constructor( user, settings ) {
    super( user )
    this.settings = settings;
  }

  changeSettings( settings ) {
    if( this.verifyCredentials() ) {
      console.log( 'Puede modificar su modificacióon' );
    } else {
      console.log( 'No tiene accesso' );
    }
  }
}

const newAccess = new UserSetting( 'Alex', 'Dark Mode' );
newAccess.changeSettings()