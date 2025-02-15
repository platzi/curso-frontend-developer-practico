let array1D = [1, 2, 3] // Unidimensional
let array2D = [[1, 2, 3], [4, 5, 6], [7, 8, 9]] // Bidimensional

console.log(array1D)
console.log(array2D)

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

matrix[1][2] = 10
console.log(matrix);

let value = matrix[0][1]
console.log(value);

// Operations
for (let i = 0; i < matrix.length; i++) {
  for (let z = 0; z < matrix[i].length; z++) {
    console.log(matrix[i][z])
  }
}

function findElement(matrix, element) {
  for (let i = 0; i < matrix.length; i++) {
    for (let z = 0; z < matrix.length; z++) {
      if (matrix[i][z] === element) {
        return true
      }
    }
  }
  return false
}

console.log(findElement(matrix, 5))

function duplicateMatrix(matrix) {
  let newMatrix = []

  for (let i = 0; i < matrix.length; i++) {
    newMatrix[i] = [...matrix[i]]
  }
  return newMatrix
}

console.log(duplicateMatrix(matrix))