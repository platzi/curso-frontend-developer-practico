let array = [
    {
        name: "jonatan",
        edad: 24
    },
    {
        name: "mayra",
        edad: 23
    }
]

console.log(array);

let encontrado = array.find(function(e){
    return e.name === "mayra"
})

console.log(encontrado);