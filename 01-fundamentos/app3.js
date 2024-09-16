const fs = require("fs");

const data = fs.readFileSync("README.md", "utf-8");

const words = data.split(" ");

// const matchs1 = words.filter( (word) => {
//         return word.toLowerCase() == 'react'
//     }
// )

const matchs2 = data.match(/React/ig)

console.log(`Conteo de palabra "React": ${matchs2.length}`);