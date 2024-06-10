# 21 - Nouvelles syntaxe ES6

#Formation JS#
*Dernière mise à jour 04/01/2024*

## Spread Operator

Le spread operator (ou opérateur de propagation) en JavaScript est représenté par trois points de suspension (`...`). Cette syntaxe est utilisée dans plusieurs contextes pour étendre ou déployer des éléments d'un tableau, d'un objet ou d'autres structures de données. Voici quelques utilisations courantes du spread operator :

### Pour étendre un tableau

```js
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// Créer un nouveau tableau en combinant les éléments des deux tableaux
const combinedArray = [...array1, ...array2];
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]
```

### Pour copier un tableau

```js
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
console.log(copiedArray); // Output: [1, 2, 3]
```

### Pour passer des arguments à une fonction

```js
function myFunction(x, y, z) {
  console.log(x, y, z);
}

const args = [1, 2, 3];

// Passer les éléments du tableau comme arguments à la fonction
myFunction(...args); // Output: 1 2 3
```

### Pour étendre un objet

```js
const object1 = { x: 1, y: 2 };
const object2 = { z: 3 };

// Créer un nouvel objet en combinant les propriétés des deux objets
const combinedObject = { ...object1, ...object2 };
console.log(combinedObject); // Output: { x: 1, y: 2, z: 3 }
```

### Pour créer un nouvel objet en modifiant certaines propriétés

```js
const originalObject = { x: 1, y: 2, z: 3 };

// Créer un nouvel objet en modifiant la propriété 'y'
const modifiedObject = { ...originalObject, y: 5 };
console.log(modifiedObject); // Output: { x: 1, y: 5, z: 3 }
```

Le spread operator permet de rendre le code plus lisible et plus concis, en évitant d'avoir à écrire des boucles ou des fonctions pour réaliser des opérations simples de manipulation de tableaux ou d'objets.

## Rest Operator

En JavaScript, l'opérateur rest (`...`) est utilisé pour collecter un nombre indéfini d'arguments en tant qu'array. Il permet de manipuler des arguments dans une fonction de manière flexible, notamment lorsque le nombre d'arguments est inconnu à l'avance. Voici comment l'opérateur rest fonctionne :

### Syntaxe de l'opérateur rest

```js
function myFunction(...rest) {
  // rest est un tableau contenant tous les arguments passés à la fonction
  console.log(rest);
}

myFunction(1, 2, 3, 4, 5);
// Output: [1, 2, 3, 4, 5]
```

Dans cet exemple, `rest` est un paramètre de type rest qui collecte tous les arguments passés à `myFunction` sous forme d'un tableau.

### Utilisation de l'opérateur rest avec des paramètres réguliers

L'opérateur rest peut être utilisé en combinaison avec d'autres paramètres de fonction réguliers. L'opérateur rest doit toujours être le dernier paramètre d'une fonction et ne peut être utilisé qu'une seule fois dans la liste des paramètres.

```js
function myFunction(firstArg, ...rest) {
  console.log("Premier argument:", firstArg);
  console.log("Reste des arguments:", rest);
}

myFunction(1, 2, 3, 4, 5);
// Output:
// Premier argument: 1
// Reste des arguments: [2, 3, 4, 5]
```

Dans cet exemple, `firstArg` est un paramètre régulier qui reçoit le premier argument, tandis que `rest` collecte tous les arguments restants sous forme de tableau.

L'opérateur rest est extrêmement utile lors de la définition de fonctions qui peuvent accepter un nombre variable d'arguments, ce qui les rend très flexibles et polyvalentes dans divers scénarios de programmation.

## Fonctions fléchée (arrow)

En JavaScript, la syntaxe arrow (ou fonction fléchée) permet de définir des fonctions de manière concise. Elle est souvent utilisée pour des fonctions anonymes ou des fonctions fléchées dans des expressions de fonction. Voici la syntaxe de base de la fonction fléchée :

```js
// Syntaxe de base d'une fonction fléchée avec un seul paramètre
const myFunction = (param) => {
  // Corps de la fonction
};

// Syntaxe de base d'une fonction fléchée sans paramètre
const myFunction = () => {
  // Corps de la fonction
};

// Syntaxe de base d'une fonction fléchée avec plusieurs paramètres
const myFunction = (param1, param2) => {
  // Corps de la fonction
};
```

Les caractéristiques importantes de la syntaxe arrow sont les suivantes :

1. Utilisation de `=>` pour définir une fonction fléchée.
2. Si la fonction n'a qu'un seul paramètre, les parenthèses autour du paramètre peuvent être omises.
3. Si le corps de la fonction ne contient qu'une seule instruction, les accolades `{}` peuvent être omises et la valeur de retour sera implicite.
4. Si le corps de la fonction contient plusieurs instructions, les accolades `{}` sont nécessaires et la valeur de retour doit être explicite.

Voici quelques exemples d'utilisation de la syntaxe arrow :

```js
// Exemple 1: Fonction fléchée avec un seul paramètre
const square = (x) => x * x;

// Exemple 2: Fonction fléchée sans paramètre
const greeting = () => console.log('Bonjour!');

// Exemple 3: Fonction fléchée avec plusieurs paramètres et plusieurs instructions
const sum = (a, b) => {
  const result = a + b;
  return result;
};

// Exemple 4: Utilisation des fonctions fléchées dans les méthodes de tableau
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((num) => num * 2);

console.log(square(5)); // Output: 25
greeting(); // Output: Bonjour!
console.log(sum(3, 7)); // Output: 10
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
```

La syntaxe arrow offre une manière concise et élégante de définir des fonctions en JavaScript, ce qui rend le code plus lisible et plus expressif. Elle est largement utilisée dans le développement moderne JavaScript.

## Affectation par décomposition

L'affectation par décomposition, également connue sous le nom de destructuring en anglais, est une fonctionnalité puissante de JavaScript qui permet d'extraire des valeurs d'objets ou de tableaux et de les affecter à des variables individuelles de manière concise. Cela permet d'écrire un code plus expressif et plus lisible. Voici comment fonctionne l'affectation par décomposition :

### Décomposition d'un tableau

```javascript
const numbers = [1, 2, 3, 4, 5];

// Extraction des valeurs du tableau dans des variables individuelles
const [a, b, ...rest] = numbers;

console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(rest); // Output: [3, 4, 5]
```

Dans cet exemple, les deux premières valeurs du tableau `numbers` sont extraites dans les variables `a` et `b`, tandis que le reste des valeurs est collecté dans la variable `rest`.

### Décomposition d'un objet

```javascript
const person = { firstName: 'John', lastName: 'Doe', age: 30 };

// Extraction des valeurs de l'objet dans des variables individuelles
const { firstName, lastName, age } = person;

console.log(firstName); // Output: John
console.log(lastName); // Output: Doe
console.log(age); // Output: 30
```

Dans cet exemple, les propriétés de l'objet `person` sont extraites dans des variables individuelles portant le même nom que les propriétés.

### Décomposition d'un objet avec des noms de variables différents

L’affectation par décomposition est un outil très puissant pour manipuler des variables objets et tableaux, et est aussi utilisable pour manipuler les paramètres d’une fonction. On parle alors de matching, car cela revient à faire le lien entre le contenu de l’objet et de nouvelles variables.

```javascript
const person = { firstName: 'John', lastName: 'Doe', age: 30 };

// Extraction des valeurs de l'objet avec des noms de variables différents
const { firstName: fName, lastName: lName, age: personAge } = person;

console.log(fName); // Output: John
console.log(lName); // Output: Doe
console.log(personAge); // Output: 30
```

Dans cet exemple, les valeurs de l'objet `person` sont extraites dans des variables avec des noms différents (`fName`, `lName` et `personAge`).
