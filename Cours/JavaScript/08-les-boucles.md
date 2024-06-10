# 08 - Les boucles : lister les élements

#Formation JS#
*Dernière mise à jour 04/01/2024*

En JavaScript, il existe plusieurs types de boucles qui permettent d'itérer sur (parcourir et lister) des structures de données ou d'exécuter un bloc de code de manière répétée tant qu'une condition est vraie. Voici une explication des principales boucles en JavaScript :

## Boucle `for`

La boucle `for` est utilisée pour exécuter un bloc de code un nombre spécifié de fois. Elle se compose de trois parties : l'initialisation, la condition de continuation et l'expression d'incrémentation.

Syntaxe :

```js
for (initialisation; condition; incrémentation) {
    // Bloc de code à exécuter
}
```

Exemple :

```js
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

## Boucle `while`

La boucle `while` est utilisée pour exécuter un bloc de code tant qu'une condition spécifiée est vraie.

Syntaxe :

```js
while (condition) {
    // Bloc de code à exécuter
}
```

Exemple :

```js
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
```

## Boucle `do...while`

La boucle `do...while` est similaire à la boucle `while`, mais elle exécute le bloc de code au moins une fois, même si la condition est fausse.

Syntaxe :

```js
do {
    // Bloc de code à exécuter
} while (condition);
```

Exemple :

```js
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);
```

## Boucle `for...in`

La boucle `for...in` est utilisée pour parcourir les propriétés d'un objet.

Syntaxe :

```js
for (let propriete in objet) {
    // Bloc de code à exécuter
}
```

Exemple :

```js
let personne = {
    nom: "Jean",
    age: 30,
    ville: "Paris"
};
for (let prop in personne) {
    console.log(prop + ": " + personne[prop]);
}
```

## Boucle `for...of`

La boucle `for...of` est utilisée pour parcourir les éléments d'une structure itérable (comme un tableau ou une chaîne de caractères).

Syntaxe :

```js
for (let element of iterable) {
    // Bloc de code à exécuter
}
```

Exemple

```js
let fruits = ["Pomme", "Banane", "Orange"];
for (let fruit of fruits) {
    console.log(fruit);
}
```

Chaque type de boucle a ses propres cas d'utilisation, et le choix de la boucle dépend souvent de la structure de données que vous parcourez ou de la logique que vous souhaitez implémenter dans votre code.
