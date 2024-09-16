// flat
const array = [1,1,2,3,4, [1,3,5,6,[1,2,4]]];
console.log(array.flat(3));

// flatmap
const array2 = [1,2,2];
console.log(array2.flatMap(v => [v, v *2]));

var transporte = ["avión", "auto", "barco"];
var tipoTransporte = ["aéreo", "terrestre", "marítimo"];

var transportesMapeados = transporte.map(
        (transporte, indice) => [transporte, tipoTransporte[indice]]);

var transportesMapeadosYAplanados = transporte.flatMap(
        (transporte, indice) => [transporte, tipoTransporte[indice]]
    );