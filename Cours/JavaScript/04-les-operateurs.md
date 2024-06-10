# 04 - Les opérateurs en Javascript

#Formation JS#
*Dernière mise à jour 04/01/2024*

## Opérateurs d'attribution

Les opérateurs d'attribution servent à assigner une valeur à une variable.

- `=` : Assignation simple
- `+=` : Addition et assignation
- `-=` : Soustraction et assignation
- `*=` : Multiplication et assignation
- `/=` : Division et assignation

Exemples :

```js
let x = 5; // Assignation simple
let y = 10;
y += x; // Addition et assignation : y devient 15
y -= x; // Addition et assignation : y devient 10 (15 - 10)
y /= x; // Division et assignation : y devient 2
y *= x; // Multiplication et assignation : y devient 10 (2 * 5)
```

## Opérateurs arithmétiques

Les opérateurs arithmétiques sont utilisés pour effectuer des opérations mathématiques sur les valeurs.

- `+` : Addition
- `-` : Soustraction
- `*` : Multiplication
- `/` : Division
- `%` : Modulo (reste de la division)

Exemples :

```js
let a = 10;
let b = 5;
let addition = a + b; // addition vaut 15
let multiplication = a * b; // multiplication vaut 50
let division = a / b; // division vaut 2
let division = a / b; // division vaut 2
```

## Opérateurs d'incrémentation

Les opérateurs d'incrémentation permettent d'ajouter 1 à une variable.

- `++` : Incrémentation
- `--` : Décrémentation

Exemples :

```js
let count = 0;
count++; // Incrémentation : count vaut maintenant 1
let total = 10;
total--; // Décrémentation : total vaut maintenant 9
```

## Opérateurs logiques

Les opérateurs logiques sont utilisés pour effectuer des opérations logiques sur des valeurs booléennes (vrai ou faux).

- `&&` : ET logique
- `||` : OU logique
- `!` : NON logique (inverser la valeur)

Exemples :

```js
let age = 25;
let isAdult = (age >= 18) && (age <= 65); // ET logique : isAdult vaut true
let hasLicense = true;
let canDrive = isAdult || hasLicense; // OU logique : canDrive vaut true
let isStudent = false;
let canGetDiscount = !isStudent; // NON logique : canGetDiscount vaut true
```

## Opérateurs de comparaison

Les opérateurs de comparaison permettent de comparer deux valeurs et de déterminer si elles sont égales, différentes, ou si l'une est plus grande ou plus petite que l'autre.

- `==` : Égal à
- `===` : Égal à (strict)
- `!=` : Différent de
- `!==` : Différent de (strict)
- `>` : Supérieur à
- `<` : Inférieur à
- `>=` : Supérieur ou égal à
- `<=` : Inférieur ou égal à

Exemples :

```js
let s = "5";
let x = 5;
let y = 10;
let z = 5;

console.log(x == y); // false : x n'est pas égal à y
console.log(x === z); // true : x est strictement égal à z en valeur et en type
console.log(x === s); // false : x est égal à z en valeur et mais pas en type, on dit qu'il n'est pas stricement égal
console.log(x != y); // true : x est différent de y
console.log(x !== z); // false : x n'est pas strictement différent de z en valeur et en type
console.log(x > y); // false : x n'est pas supérieur à y
console.log(x < y); // true : x est inférieur à y
console.log(x >= z); // true : x est supérieur ou égal à z
console.log(x <= z); // true : x est inférieur ou égal à z
```

L'utilisation des opérateurs de comparaison est essentielle pour évaluer des conditions dans les instructions de contrôle, telles que les instructions conditionnelles (if, else, switch) et les boucles (for, while). Ces opérateurs permettent de comparer des valeurs et de prendre des décisions en fonction du résultat de la comparaison.
