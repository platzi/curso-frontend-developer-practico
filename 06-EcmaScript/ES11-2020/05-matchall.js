const regex = /\b(Apple)+\b/g;
const fruit = 'Apple, Banana, Kiwi, orange, Apple';

for( match of fruit.matchAll(regex) ) {
  console.log(match);
}