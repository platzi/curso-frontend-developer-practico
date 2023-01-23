// function moneyBox(coins) {
//   let saveCoins = 0;
//   saveCoins += coins;
//   console.log(`MoneyBox: $${saveCoins}`);
// }

// moneyBox(5);
// moneyBox(5);

////////////////////////////////////////

function moneyBox() {
  let saveCoins = 0;

  function countCoins(coins) {
    saveCoins += coins;
    console.log(`MoneyBox: ${saveCoins}`);
  }

  return countCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);

const moneyBoxAna = moneyBox();
moneyBoxAna(10);
moneyBoxAna(2);
moneyBoxAna(5);

////////////////////////////////////////

function salarioEmpleado() {
  let mesCobro;
  let sueldoMes;
  let empNombre;
  let salarioBase = 12500;

  function salarioMes(mes, sueldoMes, nombre, sueldo) {
    mesCobro = mes;
    sueldoMes = sueldoMes;
    empNombre = nombre;
    salarioBase += sueldo;
    console.log(`${empNombre} => Tu sueldo del mes de ${mesCobro} es de ${sueldoMes}. Tu sueldo acumulado es de: $${salarioBase}`);
  }

  return salarioMes;
}

const empEmi = salarioEmpleado();
empEmi('Enero', 3500, 'Emiliano', 3500);
empEmi('Febrero', 1500, 'Emiliano', 1500);

const empCris = salarioEmpleado();
empCris('Enero', 2500, 'Cristian', 2500);
empCris('Febrero', 22450, 'Cristian', 22450);