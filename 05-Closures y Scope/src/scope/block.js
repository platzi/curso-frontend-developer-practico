function fruits() {
  if(true) {
    var fruit1 = 'Apple'; // function scope
    let fruit2 = 'Kiwi'; // block scope
    const fruit3 = 'Banana'; // block scope 
    console.log(fruit2);
    console.log(fruit3);
  }
  console.log(fruit1);
}

fruits();