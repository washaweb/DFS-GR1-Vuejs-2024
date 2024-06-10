# 22 - Array : fonctions prototypes

#Formation JS#
*Dernière mise à jour 04/01/2024*

Les méthodes `slice`, `splice`, `pop`, `shift`, `join`, `forEach`, `find`, `findIndex`, `filter`, `map`, `includes`, `indexOf`, `of`, `at` sont les méthodes courantes de manipulation de tableau en JavaScript, elles permettent de manipuler et de transformer des tableaux sans avoir à créer de boucles. Il en existe d'autres, ce ne sont ici que les plus courantes.

Ces méthodes sont couramment utilisées pour manipuler des tableaux en JavaScript. Voici un aperçu de chaque méthode :

## 1. `slice()`

La méthode `slice()` permet de copier une partie d'un tableau existant dans un nouveau tableau, sans modifier le tableau d'origine.

```javascript
const array = [1, 2, 3, 4, 5];
const slicedArray = array.slice(1, 3);

console.log(slicedArray); // Output: [2, 3]
```

## 2. `splice()`

La méthode `splice()` est utilisée pour ajouter ou supprimer des éléments à partir d'un tableau à une position spécifique. Elle modifie le tableau d'origine.

```javascript
const array = [1, 2, 3, 4, 5];
array.splice(2, 0, 6, 7); // Ajoute les éléments 6 et 7 à l'index 2

console.log(array); // Output: [1, 2, 6, 7, 3, 4, 5]
```

## 3. `pop()`

La méthode `pop()` supprime le dernier élément d'un tableau et renvoie cet élément.

```javascript
const array = [1, 2, 3, 4, 5];
const poppedElement = array.pop();

console.log(poppedElement); // Output: 5
console.log(array); // Output: [1, 2, 3, 4]
```

## 4. `shift()`

La méthode `shift()` supprime le premier élément d'un tableau et renvoie cet élément.

```javascript
const array = [1, 2, 3, 4, 5];
const shiftedElement = array.shift();

console.log(shiftedElement); // Output: 1
console.log(array); // Output: [2, 3, 4, 5]
```

## 5. `join()`

La méthode `join()` combine tous les éléments d'un tableau dans une seule chaîne de caractères. Vous pouvez spécifier un séparateur pour séparer les éléments.

```javascript
const array = ['apple', 'banana', 'orange'];
const joinedString = array.join(', ');

console.log(joinedString); // Output: "apple, banana, orange"
```

## 6. `forEach()`

La méthode `forEach()` exécute une fonction pour chaque élément d'un tableau.

```javascript
const array = [1, 2, 3, 4, 5];
array.forEach(item => {
  console.log(item);
});
// Output:
// 1
// 2
// 3
// 4
// 5
```

## 7. `find`

La méthode `find` est utilisée pour trouver le premier élément dans un tableau qui satisfait une condition spécifique. Elle renvoie la première valeur trouvée ou `undefined` si aucune valeur ne satisfait la condition.

```js
const numbers = [1, 2, 3, 4, 5];

// Trouver le premier nombre pair dans le tableau
const firstEvenNumber = numbers.find(num => num % 2 === 0);
console.log(firstEvenNumber); // Output: 2
```

## 8. `findIndex`

La méthode `findIndex` est similaire à `find`, mais elle renvoie l'index de la première valeur trouvée au lieu de la valeur elle-même. Si aucune valeur ne satisfait la condition, elle renvoie `-1`.

```js
const numbers = [1, 2, 3, 4, 5];

// Trouver l'index du premier nombre pair dans le tableau
const indexFirstEvenNumber = numbers.findIndex(num => num % 2 === 0);
console.log(indexFirstEvenNumber); // Output: 1 (index du nombre 2)
```

## 9. `filter`

La méthode `filter` est utilisée pour créer un nouveau tableau contenant uniquement les éléments qui satisfont une condition spécifique.

```js
const numbers = [1, 2, 3, 4, 5];

// Filtrer les nombres pairs dans le tableau
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]
```

## 10. `map`

La méthode `map` est utilisée pour créer un nouveau tableau en appliquant une fonction à chaque élément du tableau d'origine. La fonction spécifiée est appelée pour chaque élément et le résultat est stocké dans le nouveau tableau.

```js
const numbers = [1, 2, 3, 4, 5];

// Doubler chaque nombre dans le tableau
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
```

Ces méthodes sont très utiles pour manipuler et transformer des tableaux en JavaScript de manière efficace et expressive. Elles sont largement utilisées dans le développement web pour effectuer des opérations sur les données.

## 11. `includes`

La méthode includes() permet de déterminer si un tableau contient une valeur et renvoie true si c'est le cas, false sinon.

```js
const array1 = [1, 2, 3];

console.log(array1.includes(2));
// Expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// Expected output: true

console.log(pets.includes('at'));
// Expected output: false
```

## 12. `indexOf`

La méthode indexOf() renvoie le premier indice pour lequel on trouve un élément donné dans un tableau. Si l'élément cherché n'est pas présent dans le tableau, la méthode renverra -1.

```js
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// Expected output: 1

// Start from index 2
console.log(beasts.indexOf('bison', 2));
// Expected output: 4

console.log(beasts.indexOf('giraffe'));
// Expected output: -1
```

## 13. `of`

La methode `Array.of()` permet de créer une nouvelle instance d'objet Array à partir d'un nombre variable d'arguments, quels que soient leur nombre ou leur type.

La différence entre `Array.of()` et le constructeur `Array` se situe dans la gestion de d'arguments entiers : `Array.of(7)` crée un tableau avec un seul élément, `7`, tandis que `Array(7)` produit un tableau avec `7` éléments vides (à ne pas confondre avec des éléments qui auraient explicitement la valeur `undefined`).

```js
Array.of(7); // [7]
Array.of(1, 2, 3); // [1, 2, 3]

Array(7); // un tableau avec 7 emplacements vides
Array(1, 2, 3); // [1, 2, 3]
```

## 14. `at`

La méthode `at()` prend un entier en argument et renvoie l'élément du tableau situé à cet indice. Des valeurs entières positives ou négatives peuvent être utilisées en argument. Dans ce dernier cas, la recherche est effectuée depuis la fin du tableau.

L'accès aux éléments d'un tableau en utilisant les crochets ne permet que d'utiliser des indices positifs : `array[0]` renverra le premier élément, `array[array.length-1]` renverra le dernier. 
Avec `array.at(-1)`, on peut avoir une écriture plus concise pour accéder au dernier élément. 

```js
const array1 = [5, 12, 8, 130, 44];

let index = 2;

console.log(`An index of ${index} returns ${array1.at(index)}`);
// Expected output: "An index of 2 returns 8"

index = -2;

console.log(`An index of ${index} returns ${array1.at(index)}`);
// Expected output: "An index of -2 returns 130"
```

