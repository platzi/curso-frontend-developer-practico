function encontrarPersona(personaEnBusqueda) {
  return salarios.find( (persona) => persona.name == personaEnBusqueda )
};

function medianaPorPersona( nombrePersona ) {
  const trabajos = encontrarPersona(nombrePersona).trabajos;

  console.log(trabajos);

  const salarios = trabajos.map((elemento) => {
    return elemento.salario;
  });

  const medianaSalarios = PlatziMath.calcularMediana( salarios );
  console.log(salarios);
  return medianaSalarios;
}

//  Análisis Personal
function proyeccionPorPersona( nombrePersona ) {
  const trabajos = encontrarPersona(nombrePersona).trabajos;

  let porcentajesCrecimiento = [];

  for( let i = 1; i < trabajos.length; i++ ) {
    const salarioActual = trabajos[i].salario;
    const salarioPasado = trabajos[i - 1].salario;
    const crecimiento = salarioActual - salarioPasado;
    const porcentajeCrecimiento = crecimiento / salarioPasado;
    porcentajesCrecimiento.push(porcentajeCrecimiento);
  }

  const medianaPorcentajeCrecimiento = PlatziMath.calcularMediana( porcentajesCrecimiento );

  console.log({porcentajesCrecimiento, medianaPorcentajeCrecimiento});

  const ultimoSalario = trabajos[trabajos.length - 1].salario;
  const aumento = ultimoSalario * medianaPorcentajeCrecimiento;
  const nuevoSalario = ultimoSalario + aumento;

  return nuevoSalario;

}

//  Análisis Empresarial

/* {
  Industrias Mokepon: {
    2018: [salario, salario, salario]
    2019:
    2023:
    2025:
  }
  Industrias Mokepon: {}
  Industrias Mokepon: {}
  Industrias Mokepon: {}
}*/

/*  Hacemos un recorrido por todos los objetos de salarios. 
Después un recorrido por los trabajos de cada persona.
Si no existe un objeto de empresa que lo cree.
Si no existe un array de año por empresa que lo cree.
Una vez obtenida la info vamos agregando a traves del método push.  */

const empresas = {};

for( persona of salarios ) {
  for( trabajo of persona.trabajos ) {
    if(!empresas[trabajo.empresa]) {
      empresas[trabajo.empresa] = {};
    }

    if( !empresas[trabajo.empresa][trabajo.year] ) {
      empresas[trabajo.empresa][trabajo.year] = [];
    }

    empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
  }
}

console.log({ empresas });

//  MEDIANA POR EMPRESA

function medianaEmpresaYear( nombre, year ) {
  if( !empresas[nombre] ) {
    console.warn('La empresa no existe');
  } else if( !empresas[nombre][year] ) {
    console.warn('La empresa no dio salarios ese año');
  } else {
    return PlatziMath.calcularMediana(empresas[nombre][year])
  }
}

//  PROYECCION POR EMPRESA

function proyeccionPorEmpresa( nombre ) {
  if( !empresas[nombre] ) {
    console.warn('La empresa no existe');
  } else {
    const empresaYears = Object.keys(empresas[nombre]);
    const listaMedianaYears = empresaYears.map(( year ) => {
      return medianaEmpresaYear(nombre, year);
    })

    let porcentajesCrecimiento = [];
  
    for( let i = 1; i < listaMedianaYears.length; i++ ) {
      const salarioActual = listaMedianaYears[i];
      const salarioPasado = listaMedianaYears[i - 1];
      const crecimiento = salarioActual - salarioPasado;
      const porcentajeCrecimiento = crecimiento / salarioPasado;
      porcentajesCrecimiento.push(porcentajeCrecimiento);
    }
  
    const medianaPorcentajeCrecimiento = PlatziMath.calcularMediana( porcentajesCrecimiento );

    console.log({porcentajesCrecimiento, medianaPorcentajeCrecimiento});

    const ultimaMediana = listaMedianaYears[listaMedianaYears.length - 1];
    const aumento = ultimaMediana * medianaPorcentajeCrecimiento;
    const nuevaMediana = ultimaMediana + aumento;

    return nuevaMediana;
  }

}

// Análisis General

function medianaGeneral() {
  // const nombres = salarios.map((persona) => persona.name);
  // const medianaPorNombre = nombres.map((nombre) => medianaPorPersona(nombre));

  // Esto 👆🏼 puede simplificarse por esto 👇🏼
  const listaMedianas = salarios.map((persona) => medianaPorPersona(persona.name));

  const mediana = PlatziMath.calcularMediana(listaMedianas)

  return mediana;
}

function medianaTop10() {
  const listaMedianas = salarios.map((persona) => medianaPorPersona(persona.name));

  const medianasOrdenadas = PlatziMath.ordenarLista(listaMedianas);

  const cantidad = listaMedianas.length / 10;
  const limite = listaMedianas.length - cantidad;

  const top10 = medianasOrdenadas.slice(limite, medianasOrdenadas.length);

  const medianaTop10 = PlatziMath.calcularMediana(top10);
  return medianaTop10;

}