# 05 - Tableaux (Array) en JS

#Formation JS#
*Dernière mise à jour 04/01/2024*

Les tableaux en JavaScript sont des structures de données qui permettent de stocker plusieurs valeurs dans une seule variable. Voici une explication détaillée des tableaux en JavaScript :

## Déclaration d'un tableau

Un tableau en JavaScript est déclaré à l'aide de crochets `[]`. Il peut contenir n'importe quel type de données, y compris des nombres, des chaînes de caractères, des objets, des fonctions, etc.

Exemple :

```js
let fruits = ["Pomme", "Banane", "Orange", "Fraise"];
```

## Accès aux éléments d'un tableau

Les éléments d'un tableau sont indexés à partir de zéro. Pour accéder à un élément spécifique, on utilise son indice entre crochets.

Exemple :

```js
console.log(fruits[0]); // Affiche "Pomme"
console.log(fruits[2]); // Affiche "Orange"
```

## Modification d'un élément d'un tableau

On peut modifier un élément d'un tableau en utilisant son indice et en lui affectant une nouvelle valeur.

Exemple :

```js
fruits[1] = "Kiwi";
console.log(fruits); // Affiche ["Pomme", "Kiwi", "Orange", "Fraise"]
```

## Ajout d'éléments à un tableau

On peut ajouter de nouveaux éléments à un tableau en utilisant la méthode `push()` pour les ajouter à la fin du tableau, ou en utilisant l'indice pour les insérer à un emplacement spécifique.

Exemple :

```js
fruits.push("Ananas"); // Ajoute "Ananas" à la fin du tableau
console.log(fruits); // Affiche ["Pomme", "Kiwi", "Orange", "Fraise", "Ananas"]

fruits[0] = "Mangue"; // Remplace "Pomme" par "Mangue"
console.log(fruits); // Affiche ["Mangue", "Kiwi", "Orange", "Fraise", "Ananas"]
```

## Longueur d'un tableau

La propriété `length` permet de connaître le nombre d'éléments d'un tableau.

Exemple :

```js
console.log(fruits.length); // Affiche 5
```

## Parcours d'un tableau

On peut parcourir un tableau en utilisant une boucle `for` ou une méthode telle que `forEach()`.

Exemple avec une boucle `for` :

```js
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
```

Exemple avec la méthode `forEach()` :

```js
fruits.forEach(function(fruit) {
    console.log(fruit);
});
```

Les tableaux sont des structures de données très utiles en JavaScript pour stocker et manipuler des collections d'éléments. Ils sont largement utilisés dans le développement web pour gérer les listes d'éléments, les données de formulaire, les résultats de requêtes AJAX, etc.