const fs = require('fs');

const data = fs.readFileSync('README.md', 'utf-8');

const angularData = data.replace(/React/ig, 'Angular')

fs.writeFileSync('ANGULAR.md', angularData)

// console.log(angularData);