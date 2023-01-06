function solution(testResults) {
  

let puntuacionMaxima = 0;


for (let i = 0; i < testResults.length; i++) {

let puntuacionTotal = 0;
for (let j = 0; j < testResults[i].length; j++) {
puntuacionTotal += testResults[i][j];
}

if (puntuacionTotal > puntuacionMaxima) {
puntuacionMaxima = puntuacionTotal;
}
}

return puntuacionMaxima;
}

//Segundo

Implement the solution method. When passed two arrays of names, it will return an array containing the names that appear in either or both arrays. The returned array should have no duplicates.

For example, calling MergeNames.solution(new string[]{'Ava', 'Emma', 'Olivia'}, new string[]{'Olivia', 'Sophia', 'Emma'}) should return an array containing Ava, Emma, Olivia, and Sophia in any order.

string[] names1 = new string[] {"Ava", "Emma", "Olivia"};
string[] names2 = new string[] {"Olivia", "Sophia", "Emma"};
Console.WriteLine(string.Join(", ", MergeNames.solution(names1, names2))); // should print Ava, Emma, Olivia, Sophia

