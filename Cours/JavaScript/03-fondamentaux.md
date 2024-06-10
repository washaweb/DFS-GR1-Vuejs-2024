# 03 - Fondamentaux de JavaScript

#Formation JS#
*Dernière mise à jour 04/01/2024*

## Commentaires

En JavaScript, vous pouvez écrire des commentaires en utilisant deux types de commentaires à une ligne ou multi-lignes :

1. **Commentaires à une ligne :** Commencez le commentaire par deux barres obliques `//`. Tout ce qui suit les // sur cette même ligne est considéré comme un commentaire. Par

exemple :

```javascript
// C'est un commentaire à une ligne
let x = 5;
```

2. **Commentaires multi-lignes :** Utilisez un trait d'union et une étoile `/*` pour le début, suivi par une étoile et un trait d'union `*/` pour la fin. Par exemple :

```javascript
/*
C'est un commentaire multi-lignes
Vous pouvez écrire plusieurs lignes de texte ici
*/
let x = 5;
let y = 10;
let sum = x + y;
```

Sachez que les commentaires sont ignores par le moteur JavaScript, donc ils n'affectent en rien la manière dont votre code fonctionne. Ils sont surtout utilisés pour rendre
votre code plus lisible et compréhensible pour d'autres développeurs ou pour vous-même lorsque vous revisitez d'anciens projets.

## La console de débuggage

## Variables

Les **variables** sont des contenants pour stocker des informations utilisées dans vos programmes JavaScript. Les variables peuvent être déclarées et affectées à l'aide de différentes syntaxes.

### Déclaration d'une variable avec la var, let ou const

JavaScript offre trois manières de déclarer des variables : `var`, `let` et `const`. La méthode `var` est considérée comme obsolète dans les nouveaux développements, alors qu'il est recommandé d'utiliser `let` ou `const` pour déclarer des variables.

```javascript
// Déclaration d'une variable avec let
let myVariable = 5;
console.log(myVariable); // Affiche : 5

// Déclaration d'une variable avec const (immutable)
const pi = 3.14159265358979323846;
console.log(pi); // Affiche : 3.14159265358979323846
```

### Assignation d'une valeur à une variable existante

Vous pouvez également affecter des valeurs à des variables déjà déclarées en utilisant l'opérateur d'assignation `=`.

```javascript
let myVariable = 5; // Déclaration et affectation d'une variable avec let
console.log(myVariable); // Affiche : 5

myVariable = "Ceci est une chaîne de caractères."; // Reaffectation de la variable
console.log(myVariable); // Affiche : Ceci est une chaîne de caractères.
```

## Types de données et opérateurs

JavaScript offre différents types de données, qui peuvent être utilisés pour stocker des informations de manière différente. Les principaux types de données sont :

* **Nombre** : entier ou réel, tel que `5`, `10.23` ou `-1`.
* **Chaîne de caractères** : une séquence de caractères, telle que `"Ceci est une chaîne de caractères."` ou `"Bonjour Monde"`.
* **Booléen** : un des deux valeurs booléennes `true` ou `false`.
* **Tableau** : une collection d'éléments hétérogènes ou homogènes, tels que `[1, 2, "Apple", true]` ou `["Ceci est un tableau de chaînes", ["Nidus", "Fauna"]]`.
* **Objet** : une collection associative de paires clé-valeur.

### Opérateurs arithmétiques

JavaScript offre plusieurs opérateurs arithmétiques pour effectuer des calculs et manipuler des nombres, tels que l'addition `+`, la soustraction `-`, la multiplication `*`, la division `/` et le modulo `%`.

```javascript

// = est un opérateur d'assignation, on donne la valeur de la variable (nom = valeur)
let a = 5;
let b = 2;

// Addition
console.log(a + b); // Affiche : 7

// Soustraction
console.log(a - b); // Affiche : 3

// Multiplication
console.log(a * b); // Affiche : 10

// Division
console.log(a / b); // Affiche : 2.5

// Modulo
console.log(a % b); // Affiche : 1 (le reste entier de la divition de 5 par 2 => 5%2 = 1 )
```

### Opérateurs de comparaison et logique

JavaScript offre plusieurs opérateurs de comparaison pour tester les relations entre des valeurs, telles que l'égalité `==`, la non-égalité `!=`, l'égalité parfaite `===` (test le type et la valeur), la non-égalité parfaite `!===` (test le type et la valeur), le supérieur `>`, le supérieur ou égal `>=`, le inférieur `<` et le inférieur ou égal `<=`.

Il existe également des opérateurs logiques, tels que `!` (inversion), `!!` (double inversion, force le type boolean), `&&` (et) et `||` (ou), pour combiner des tests de comparaisons.

```javascript
let a = 5;
let b = 10;

// Égalité
console.log(a == b); // Affiche : false

// Non-égalité
console.log(a != b); // Affiche : true

// Supérieur
console.log(a > b); // Affiche : false

// Supérieur ou égal
console.log(a >= b); // Affiche : false

// Inférieur
console.log(a < b); // Affiche : true

// Inférieur ou égal
console.log(a <= b); // Affiche : false

// Opérateur et (et)
console.log(a > 3 && a < 10); // Affiche : false

// Opérateur ou (ou)
console.log(a > 3 || a < 5); // Affiche : true

// Test la valeur et le type
let c = "5";
let d = 5;
console.log(c === d); // Affiche : false
console.log(c !== d); // Affiche : true

```

