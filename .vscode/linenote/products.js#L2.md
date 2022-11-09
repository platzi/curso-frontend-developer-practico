# RECORRER ARRAY CON FOR IN VS  FOR OF 👊

Para poder ver los elementos que tienen nuestro array productLit lo tenemos que recorrer.

Para hacerlo lo que podemos hacer es utilizar el ciclo for.

Lo diferente aqui es que hay dos formas de mejorar la iteracion de nustro array sin poner toda la sintaxis del for: estas son el for in y el for of

---
EJEMPLO CON FOR IN...
```js
    for (product of productList){
        console.log(product)
    }
```
Salida:
    Bike
    Pantalla
    Compu

----

EJEMPLO CON FOR OF...
```js
    for (product in productList){
        console.log(product)
    }
```

Salida:
    0
    1
    2

Lo que podemos ver es que el for of es como si estuvieramos imprimiendo el indice, mientras que el for in el valor como tal.