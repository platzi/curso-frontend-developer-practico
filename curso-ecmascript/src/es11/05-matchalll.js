const regex = /\b(Apple)+\b/g;
const fruit = ' apple, banana, Kiwi, Apple, orange etc. etc. etc.';

for (const match of fruit.matchAll(regex)) {
    console.log(match);
}