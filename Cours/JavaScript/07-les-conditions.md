# 07 - Conditions

#Formation JS#
*Dernière mise à jour 04/01/2024*

En JavaScript, les structures de contrôle de flux conditionnelles permettent d'exécuter un bloc de code en fonction de l'évaluation d'une condition. Voici une explication des principales structures de contrôle conditionnelles en JavaScript :

## L'instruction `if...else`

L'instruction `if` permet d'exécuter un bloc de code si une condition est vraie. L'instruction `else` permet d'exécuter un bloc de code alternatif si la condition est fausse.

Syntaxe :

```js
if (condition) {
    // Bloc de code à exécuter si la condition est vraie
} else {
    // Bloc de code à exécuter si la condition est fausse
}
```

Vous avez raison, je vais ajouter une explication sur l'utilisation de `else if` pour compléter les structures de contrôle conditionnelles en JavaScript :

### L'instruction `else if`

L'instruction `else if` permet d'ajouter une condition supplémentaire à évaluer si la condition précédente est fausse. Cela permet de gérer plusieurs cas différents de manière séquentielle.

Syntaxe :

```js
if (condition1) {
    // Bloc de code à exécuter si condition1 est vraie
} else if (condition2) {
    // Bloc de code à exécuter si condition2 est vraie
} else {
    // Bloc de code à exécuter si aucune des conditions précédentes n'est vraie
}
```

Exemple :

```js
let note = 75;
if (note >= 90) {
    console.log("Excellent !");
} else if (note >= 80) {
    console.log("Très bien !");
} else if (note >= 70) {
    console.log("Bien !");
} else if (note >= 60) {
    console.log("Assez bien !");
} else {
    console.log("À améliorer...");
}
```

Dans cet exemple, chaque condition est évaluée séquentiellement. Si la première condition n'est pas vraie, alors la deuxième condition est évaluée, et ainsi de suite. Si aucune des conditions n'est vraie, le bloc de code associé à `else` est exécuté.

L'instruction `else if` est très utile pour gérer plusieurs cas différents dans une structure de contrôle conditionnelle. Elle permet une évaluation séquentielle des conditions jusqu'à ce qu'une condition soit vraie, ou jusqu'à ce que toutes les conditions aient été évaluées sans succès.

Exemple :

```js
let age = 18;
if (age >= 18) {
    console.log("Vous êtes majeur.");
} else {
    console.log("Vous êtes mineur.");
}
```

## Imbriquer les conditions

Il est parfois nécessaire d'imbriquer les conditions pour obtenir la logique que l'on souhaite.
Voici un exemple d'imbrication de conditions `if` :


```js
let age = 20;
let estEtudiant = false;

if (age >= 18) {
    console.log("Vous êtes majeur.");
    if (estEtudiant) {
        console.log("Etudiant majeur.");
    } else {
        console.log("Non étudiant majeur.");
    }
} else {
    console.log("Vous êtes mineur.");
}
```

Dans cet exemple, nous avons deux conditions imbriquées :

1. La première condition vérifie si l'âge est supérieur ou égal à 18.
2. Si la première condition est vraie, une deuxième condition est vérifiée pour vérifier si la personne est étudiante ou non.

Selon les valeurs des variables `age` et `estEtudiant`, différentes parties du code seront exécutées. Cette imbrication permet une logique plus complexe dans le traitement des conditions.

## L'instruction `switch`

L'instruction `switch` permet de comparer une expression à une liste de cas et d'exécuter le bloc de code correspondant au premier cas qui correspond.

Syntaxe :

```js
switch (expression) {
    case valeur1:
        // Bloc de code à exécuter si expression équivaut à valeur1
        break;
    case valeur2:
        // Bloc de code à exécuter si expression équivaut à valeur2
        break;
    default:
        // Bloc de code à exécuter si aucune des valeurs précédentes n'est correspondante
}
```

Exemple :

```js
let jour = "Lundi";
switch (jour) {
    case "Lundi":
    case "Mardi":
    case "Mercredi":
    case "Jeudi":
    case "Vendredi":
        console.log("C'est un jour de semaine.");
        break;
    case "Samedi":
    case "Dimanche":
        console.log("C'est le week-end.");
        break;
    default:
        console.log("Ce n'est pas un jour valide.");
}
```

## Opérateur ternaire

L'opérateur ternaire est une manière concise d'écrire une condition en JavaScript. Il prend la forme `condition ? valeurSiVraie : valeurSiFausse`. Si la condition est vraie, il renvoie la valeur de `valeurSiVraie`, sinon il renvoie la valeur de `valeurSiFausse`.

Exemple :

```js
let estMajeur = (age >= 18) ? "Majeur" : "Mineur";
console.log(estMajeur);
```

## Conditions et opérateurs logiques

Les opérateurs sont très utilisés dans les conditions, ils retourne TRUE ou FALSE en fonction du résultat d'une opération de comparaison.

- Les opérateurs logiques tels que `&&` (ET), `||` (OU), et `!` (NON) permettent de combiner ou d'inverser des conditions.
- Les comparaisons (`<`, `>`, `<=`, `>=`, `===`, `!==`, etc.) permettent de comparer des valeurs.

Exemple :

```js
if (age >= 18 && estEtudiant) {
    console.log("Majeur et étudiant");
}
```

## Opérateur de nullish coalescing (??)

L'opérateur de nullish coalescing `??` fournit une valeur par défaut lorsqu'une variable est null ou undefined.

Exemple :

```js
let nomUtilisateur = utilisateurNom ?? "Utilisateur inconnu";
console.log(nomUtilisateur);
```

## Opérateur de l'assignation conditionnelle (||=) :

L'opérateur d'assignation conditionnelle `||=` assigne une valeur à une variable seulement si celle-ci est null ou undefined.

Exemple :

```js
let couleur;
couleur ||= "Rouge";
console.log(couleur); // Affiche "Rouge" si couleur est null ou undefined
```

Ces différentes techniques permettent de manipuler les conditions de manière plus concise et expressive en JavaScript, en fonction des besoins spécifiques de votre code.
