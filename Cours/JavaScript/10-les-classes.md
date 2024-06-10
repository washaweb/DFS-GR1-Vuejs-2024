# 10 - Les classes

#Formation JS#
*Dernière mise à jour 04/01/2024*

En JavaScript, les classes sont des "syntactic sugar" (sucre syntaxique) pour définir des objets et leurs comportements. Elles permettent de définir des modèles d'objets avec des propriétés et des méthodes associées.

Voici comment définir une classe en JavaScript :

```js
class Personne {
    constructor(nom, age) {
        this.nom = nom;
        this.age = age;
    }

    saluer() {
        console.log(`Bonjour, je m'appelle ${this.nom} et j'ai ${this.age} ans.`);
    }
}
```

Dans cet exemple :

- La classe `Personne` est définie à l'aide du mot-clé `class`.
- Le constructeur `constructor` est une méthode spéciale appelée lors de la création d'une nouvelle instance de la classe. Il est utilisé pour initialiser les propriétés de l'objet.
- Les propriétés `nom` et `age` sont définies à l'aide du mot-clé `this`, ce qui signifie qu'elles appartiennent à l'objet créé à partir de la classe.
- La méthode `saluer()` est une méthode de l'objet `Personne` qui affiche un message de salutation avec le nom et l'âge de la personne.

Pour créer une instance de la classe `Personne` et appeler ses méthodes, on utilise le mot-clé `new` suivi du nom de la classe et des arguments du constructeur :

```js
let personne1 = new Personne('Alice', 30);
personne1.saluer(); // Affiche "Bonjour, je m'appelle Alice et j'ai 30 ans."
```

Les classes en JavaScript permettent de créer des objets avec une structure et un comportement cohérents, ce qui facilite la création et la manipulation d'objets dans votre code. Elles sont largement utilisées dans la programmation orientée objet en JavaScript.

## Mot-clé this

Le mot-clé `this` en JavaScript est utilisé pour faire référence à l'objet/la classe actuel(le) sur lequel(laquelle) une méthode est appelée ou à l'objet /la classe auquel une fonction est liée. La valeur de `this` dépend de la manière dont une fonction est appelée.

Dans les fonctions traditionnelles, la valeur de `this` est déterminée par la manière dont la fonction est appelée. Elle peut varier en fonction du contexte d'appel de la fonction. Par exemple, lorsqu'une méthode d'objet est appelée, `this` fait référence à l'objet sur lequel la méthode est appelée.

Exemple :

```js
const objet = {
    propriete: 'valeur',
    methode: function() {
        console.log(this.propriete);
    }
};

objet.methode(); // Affiche 'valeur', car 'this' fait référence à 'objet'
```

**Attention :** dans les fonctions fléchées (arrow functions), la valeur de `this` est déterminée par le contexte lexical dans lequel la fonction est définie. Cela signifie que `this` dans une fonction fléchée fait référence au `this` de l'environnement parent au moment de la définition de la fonction, et non pas au moment de son appel.

Exemple :

```js
const objet = {
    propriete: 'valeur',
    methode: function() {
        const fonctionInterne = () => {
            console.log(this.propriete);
        };
        fonctionInterne();
    }
};

objet.methode(); // Affiche 'valeur', car 'this' fait référence à 'objet' même dans la fonction fléchée
```

Dans cet exemple, la fonction fléchée `fonctionInterne` fait référence au `this` de l'objet `objet`, même si elle est appelée à l'intérieur d'une méthode de cet objet. Cela est dû à la nature des fonctions fléchées qui n'ont pas leur propre contexte `this` et qui capturent plutôt le `this` de leur environnement parent au moment de leur définition.

En résumé, la valeur de `this` dépend du contexte d'exécution dans les fonctions traditionnelles, tandis que dans les fonctions fléchées, elle est déterminée par le contexte lexical au moment de la définition de la fonction.

## Utilisation de `this` dans une classe

Dans le contexte d'une méthode de classe, `this` fait référence à l'instance de la classe sur laquelle la méthode est appelée. Il est utilisé pour accéder aux propriétés et méthodes de cette instance.

Exemple :

```js
class Compteur {
    #valeur = 0;

    incrementer() {
        this.#valeur++;
    }

    getValeur() {
        return this.#valeur;
    }
}

let compteur1 = new Compteur();
compteur1.incrementer();
console.log(compteur1.getValeur()); // Affiche 1
```

## Déclaration `static`

Les méthodes et les propriétés `static` sont attachées à la classe elle-même plutôt qu'aux instances individuelles de la classe. Cela signifie qu'elles sont accessibles directement à partir de la classe et non à partir d'instances spécifiques de la classe.

Exemple :

```js
class MathUtil {
    static ajouter(x, y) {
        return x + y;
    }
}

console.log(MathUtil.ajouter(3, 5)); // Appel d'une méthode statique
```

## Déclaration `private`

Les membres `private` (ou privés) sont des membres de classe qui ne peuvent être accessibles que de l'intérieur de la classe elle-même. Ils ne peuvent pas être accessibles en dehors de la classe ou par ses instances.

Exemple :

```js
class Personne {
    #age; // Propriété privée

    constructor(age) {
        this.#age = age;
    }

    getAge() {
        return this.#age;
    }
}

let personne1 = new Personne(30);
console.log(personne1.getAge()); // Accès à la propriété privée via une méthode publique
```

## Getters et Setters

Les getters sont des méthodes qui permettent de récupérer la valeur d'une propriété privée, tandis que les setters permettent de modifier cette valeur. Ils offrent un moyen de contrôler l'accès aux propriétés d'une classe.

Exemple :

```js
class Car {
    #vitesse = 0;

    get vitesse() {
        return this.#vitesse;
    }

    set vitesse(value) {
        if (value >= 0 && value <= 200) {
            this.#vitesse = value;
        } else {
            console.error("La vitesse doit être comprise entre 0 et 200 km/h.");
        }
    }
}

let maVoiture = new Car();
maVoiture.vitesse = 120; // Appel du setter
console.log(maVoiture.vitesse); // Appel du getter
```

En utilisant ces fonctionnalités avancées, vous pouvez créer des classes plus robustes et modulaires en JavaScript, avec un meilleur contrôle sur l'accès aux membres de classe et une meilleure organisation du code.
