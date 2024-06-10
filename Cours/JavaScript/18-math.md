# 18 - L'objet Math

#Formation JS#
*Dernière mise à jour 04/01/2024*

L'objet `Math` en JavaScript est un objet intégré qui fournit des fonctions et des constantes pour effectuer des opérations mathématiques. Cet objet ne peut pas être instancié avec l'opérateur `new`, car toutes ses propriétés et méthodes sont statiques.

Voici quelques-unes des méthodes et propriétés les plus couramment utilisées de l'objet `Math` :

## Propriétés

1. **`Math.PI`** : La valeur de π (3.141592653589793).
2. **`Math.E`** : La valeur de la constante d'Euler (2.718281828459045).
3. **`Math.LN2`** : Le logarithme naturel de 2 (0.6931471805599453).
4. **`Math.LN10`** : Le logarithme naturel de 10 (2.302585092994046).
5. **`Math.LOG2E`** : Le logarithme en base 2 d'E (1.4426950408889634).
6. **`Math.LOG10E`** : Le logarithme en base 10 d'E (0.4342944819032518).
7. **`Math.SQRT2`** : La racine carrée de 2 (1.4142135623730951).
8. **`Math.SQRT1_2`** : La racine carrée de 1/2 (0.7071067811865476).

## Méthodes

1. **`Math.abs(x)`** : Renvoie la valeur absolue d'un nombre `x`.
2. **`Math.ceil(x)`** : Renvoie le plus petit entier supérieur ou égal à un nombre `x`.
3. **`Math.floor(x)`** : Renvoie le plus grand entier inférieur ou égal à un nombre `x`.
4. **`Math.round(x)`** : Renvoie la valeur arrondie d'un nombre `x` à l'entier le plus proche.
5. **`Math.max(x, y, ...)`** : Renvoie le plus grand nombre parmi les arguments fournis.
6. **`Math.min(x, y, ...)`** : Renvoie le plus petit nombre parmi les arguments fournis.
7. **`Math.pow(x, y)`** : Renvoie `x` élevé à la puissance `y`.
8. **`Math.sqrt(x)`** : Renvoie la racine carrée d'un nombre `x`.
9. **`Math.random()`** : Renvoie un nombre pseudo-aléatoire compris entre 0 (inclus) et 1 (exclus).

Et bien d'autres encore.

## Exemple d'utilisation

```javascript
console.log(Math.PI); // Affiche la valeur de π
console.log(Math.pow(2, 3)); // Affiche 8 (2 élevé à la puissance 3)
console.log(Math.floor(Math.random() * 10)); // Affiche un nombre entier aléatoire entre 0 et 9
```

L'objet `Math` est extrêmement utile pour effectuer une grande variété d'opérations mathématiques en JavaScript.

Voici un exemple de fonction qui utilise `Math.random()` pour renvoyer des nombres aléatoires entre deux limites spécifiées :

```javascript
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Exemple d'utilisation :
const minLimit = 5;
const maxLimit = 10;
const randomNumber = getRandomNumber(minLimit, maxLimit);
console.log(randomNumber); // Affiche un nombre aléatoire entre 5 et 10 inclus
```

Dans cette fonction `getRandomNumber`, `Math.random()` génère un nombre décimal pseudo-aléatoire compris entre 0 (inclus) et 1 (exclus). En multipliant ce nombre par la différence entre les limites `max` et `min`, nous obtenons un nombre décimal dans la plage spécifiée. En utilisant `Math.floor`, nous arrondissons ce nombre vers le bas pour obtenir un nombre entier dans la plage spécifiée. L'ajout de `min` assure que le nombre généré sera dans la plage entre `min` et `max`.
