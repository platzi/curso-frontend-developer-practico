const form = document.querySelector('#form');
const cartelWarning = document.querySelector('#cartelWarning')
const inputIngresos = document.querySelector('#ingresos');
const inputDias = document.querySelector('#diasInversion');
const btnEnviar = document.querySelector('#btnEnviar');
const btnBorrar = document.querySelector('#btnBorrar');

const formInValid = {
  inputIngresos: false,
  inputDias: false
};

inputIngresos.addEventListener('change', (e) => {
 if( e.target.value < 1500 ) {
   cartelWarning.classList.remove('d-none');
   cartelWarning.textContent = 'Tu inversion debe superar los $500(dólares)'
  } else if( e.target.value > 10000 ) {
    cartelWarning.classList.remove('d-none');
    cartelWarning.textContent = 'Tu inversion debe no debe superar los $10.000(dólares)'
  } else {
   cartelWarning.classList.add('d-none');
  }
})

inputDias.addEventListener('change', (e) => {
  if( e.target.value < 30 ) {
    cartelWarning.classList.remove('d-none');
    cartelWarning.textContent = 'La cantidad de días mínima debe ser de 30 días'
  } else if( e.target.value > 365 ) {
    cartelWarning.classList.remove('d-none');
    cartelWarning.textContent = 'La cantidad de días máxima debe ser de 365 días'
  } else {
    cartelWarning.classList.add('d-none');
  }
})

form.addEventListener('submit', (e) => {
  e.preventDefault();
})

btnBorrar.addEventListener('click', () => {
  form.reset();
  cartelWarning.classList.add('d-none');
})


