# 09 - Les fonctions

#Formation JS#
*Dernière mise à jour 04/01/2024*

Les fonctions sont l'un des éléments fondamentaux de JavaScript, permettant d'encapsuler des blocs de code pour les réutiliser et les exécuter à volonté. Voici une explication des fonctions en JavaScript, des bonnes pratiques d'écriture, ainsi que des exemples d'utilisation :

## Déclaration de fonctions

En JavaScript, les fonctions peuvent être déclarées de plusieurs manières : en utilisant l'instruction `function`, en utilisant une expression de fonction, ou en utilisant les fonctions fléchées (disponibles à partir d'ECMAScript 6).

### Déclaration de fonction classique

```js
function maFonction(parametre1, parametre2) {
    // Bloc de code à exécuter
}
```

### Expression de fonction

```js
const maFonction = function(parametre1, parametre2) {
    // Bloc de code à exécuter
};
```

### Fonction fléchée

```js
const maFonction = (parametre1, parametre2) => {
    // Bloc de code à exécuter
};
```

## Appel de fonctions

Une fois qu'une fonction est déclarée, elle peut être appelée ou invoquée en utilisant son nom suivi de parenthèses contenant les arguments requis.

Exemple :

```js
function saluer(nom) {
    console.log("Bonjour, " + nom + " !");
}

saluer("Alice"); // Affiche "Bonjour, Alice !"
```

## Portée des variables

La portée des variables en JavaScript détermine où une variable est accessible dans le code. Les variables peuvent être déclarées avec différents niveaux de portée :

- Variables globales : déclarées en dehors de toute fonction, elles sont accessibles partout dans le code.
- Variables locales : déclarées à l'intérieur d'une fonction, elles ne sont accessibles qu'à l'intérieur de cette fonction.

Exemple :

```js
let variableGlobale = "Je suis globale";

function maFonction() {
    let variableLocale = "Je suis locale";
    console.log(variableGlobale); // Accessible
    console.log(variableLocale); // Accessible
}

console.log(variableGlobale); // Accessible
console.log(variableLocale); // Non accessible (erreur)
```

## Bonnes pratiques d'écriture de fonctions

- Utiliser des noms de fonctions descriptifs.
- Décomposer les fonctions en unités logiques et réutilisables.
- Limiter la portée des variables en les déclarant dans la portée la plus petite possible.
- Éviter les effets de bord en manipulant les variables locales plutôt que les variables globales.

Exemple de bonnes pratiques :

```js
// Nom de fonction descriptif
function calculerMoyenne(notes) {
    // Décomposition de la logique en sous-fonctions
    const somme = calculerSomme(notes);
    const moyenne = somme / notes.length;
    return moyenne;
}

// Sous-fonction pour calculer la somme des notes
function calculerSomme(notes) {
    let somme = 0;
    for (let note of notes) {
        somme += note;
    }
    return somme;
}
```

Les fonctions sont des éléments essentiels en JavaScript, permettant d'organiser le code de manière modulaire et réutilisable. En suivant les bonnes pratiques d'écriture et en comprenant la portée des variables, vous pouvez créer des fonctions efficaces et faciles à maintenir dans vos projets JavaScript.

## Valeur de retour d'une fonction

La valeur de retour d'une fonction en JavaScript est la valeur renvoyée par la fonction lorsqu'elle est invoquée ou appelée. Une fonction peut renvoyer une seule valeur, mais cette valeur peut être de n'importe quel type de données : un nombre, une chaîne de caractères, un objet, un tableau, etc.

Pour spécifier la valeur de retour d'une fonction, on utilise le mot-clé `return`, suivi de la valeur que l'on souhaite renvoyer.

Exemple :

```js
function addition(a, b) {
    return a + b; // Cette fonction renvoie la somme de a et b
}

let resultat = addition(3, 5); // La fonction est appelée avec les arguments 3 et 5, et le résultat est stocké dans la variable "resultat"
console.log(resultat); // Affiche 8, car 3 + 5 = 8
```

Dans cet exemple, la fonction `addition` prend deux paramètres `a` et `b`, et renvoie la somme de ces deux paramètres à l'aide de l'instruction `return`. Lorsque la fonction est appelée avec les arguments `3` et `5`, elle calcule la somme et la renvoie. Le résultat de l'appel de fonction est ensuite stocké dans la variable `resultat`, qui est ensuite affichée dans la console.

Il est important de noter que l'instruction `return` met fin à l'exécution de la fonction et renvoie immédiatement la valeur spécifiée. Cela signifie que tout code après une instruction `return` dans une fonction ne sera pas exécuté.

Exemple :

```js
function fonctionAvecReturn() {
    console.log("Ce message sera affiché.");
    return 42;
    console.log("Ce message ne sera pas affiché.");
}

let resultat = fonctionAvecReturn();
console.log(resultat); // Affiche 42
```

Dans cet exemple, bien que la fonction affiche un message avant l'instruction `return`, le message suivant l'instruction `return` ne sera jamais affiché car l'exécution de la fonction se termine à ce stade. Seule la valeur `42` est renvoyée par la fonction.
