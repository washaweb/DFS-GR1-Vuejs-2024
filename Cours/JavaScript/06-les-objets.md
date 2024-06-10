# 06 - Object

#Formation JS#
*Dernière mise à jour 04/01/2024*

En JavaScript, les objets sont des structures de données qui permettent de stocker des collections de paires clé-valeur, où chaque clé est une chaîne de caractères (ou un symbole) et chaque valeur peut être de n'importe quel type de données, y compris d'autres objets, des tableaux, des fonctions, etc. Les objets JavaScript sont fondamentaux dans la programmation JavaScript et sont largement utilisés pour organiser et manipuler des données de manière structurée. Voici une explication détaillée des objets en JavaScript :

## Déclaration d'un objet

En JavaScript, les objets sont définis à l'aide des accolades `{}`. À l'intérieur des accolades, on spécifie les paires clé-valeur séparées par des virgules.

Exemple :

```js
let personne = {
    nom: "Jean",
    age: 30,
    ville: "Paris"
};
```

## Accès aux propriétés d'un objet

On peut accéder aux propriétés d'un objet en utilisant la notation pointée (`.`) ou la notation entre crochets (`[]`).

Exemples :

```js
console.log(personne.nom); // Affiche "Jean"
console.log(personne["age"]); // Affiche 30
```

## Modification des propriétés d'un objet

On peut modifier les propriétés d'un objet en leur assignant de nouvelles valeurs.

Exemple :

```js
personne.age = 35;
console.log(personne.age); // Affiche 35
```

## Ajout de nouvelles propriétés à un objet

On peut ajouter de nouvelles propriétés à un objet en leur assignant de nouvelles valeurs.

Exemple :

```js
personne.profession = "Développeur";
console.log(personne.profession); // Affiche "Développeur"
```

## Suppression de propriétés d'un objet

On peut supprimer des propriétés d'un objet à l'aide de l'opérateur `delete`.

Exemple :

```js
delete personne.ville;
console.log(personne.ville); // Affiche undefined
```

## Parcours des propriétés d'un objet

On peut parcourir les propriétés d'un objet à l'aide de boucles telles que `for...in`.

Exemple :

```js
for (let cle in personne) {
    console.log(cle + ": " + personne[cle]);
}
```

## Méthodes d'objet

Les objets JavaScript peuvent également contenir des méthodes, qui sont des fonctions stockées en tant que propriétés de l'objet.

Exemple :

```js
let voiture = {
    marque: "Toyota",
    modele: "Corolla",
    annee: 2020,
    afficherDetails: function() {
        return this.marque + " " + this.modele + ", Année " + this.annee;
    }
};

console.log(voiture.afficherDetails()); // Affiche "Toyota Corolla, Année 2020"
```

Les objets JavaScript sont extrêmement flexibles et polyvalents, ce qui les rend indispensables pour organiser et manipuler des données de manière dynamique dans les applications JavaScript. Ils sont largement utilisés dans le développement web pour représenter des entités telles que des utilisateurs, des produits, des articles de blog, etc.

## Copie et références d'Objets

La référence des objets et le clonage d'objets sont des concepts importants en programmation, notamment en JavaScript, où les objets sont manipulés de manière particulière.

### Référence des objets

En JavaScript, les objets sont généralement manipulés par référence. Cela signifie que lorsque vous affectez un objet à une variable, la variable ne contient pas réellement l'objet lui-même, mais plutôt une référence (ou un pointeur) vers l'emplacement mémoire où l'objet est stocké.

```javascript
const obj1 = { a: 1 };
const obj2 = obj1; // obj2 pointe vers le même objet que obj1

obj2.a = 2;
console.log(obj1.a); // Output: 2
```

Dans cet exemple, lorsque nous modifions `obj2`, cela modifie également `obj1` car les deux variables pointent vers le même objet en mémoire.

### Clonage d'objets

Le clonage d'objets est le processus de création d'une copie d'un objet existant. En JavaScript, il existe plusieurs méthodes pour cloner des objets :

1. **Clonage superficiel (shallow clone)** :
   Cela crée une copie superficielle de l'objet, ce qui signifie que les propriétés de niveau supérieur sont copiées, mais les propriétés imbriquées (objets ou tableaux) sont toujours partagées entre l'objet original et le clone.

   ```javascript
   const obj1 = { a: 1, b: { c: 2 } };
   const obj2 = { ...obj1 }; // Clonage superficiel

   obj2.b.c = 3;
   console.log(obj1.b.c); // Output: 3
   ```

2. **Clonage en profondeur (deep clone)** :
   Cela crée une copie complète de l'objet, y compris toutes les propriétés imbriquées. C'est un processus plus complexe, mais cela garantit que l'objet clone est complètement indépendant de l'objet original.

   ```javascript
   const obj1 = { a: 1, b: { c: 2 } };
   const obj2 = JSON.parse(JSON.stringify(obj1)); // Clonage en profondeur

   obj2.b.c = 3;
   console.log(obj1.b.c); // Output: 2
   ```

Dans le deuxième exemple, le clonage en profondeur est effectué en convertissant d'abord l'objet en une chaîne JSON à l'aide de `JSON.stringify()`, puis en le convertissant à nouveau en objet à l'aide de `JSON.parse()`. Cela crée une copie complète de l'objet sans partager de références avec l'original.

Le choix entre le clonage superficiel et le clonage en profondeur dépend de la structure de l'objet et des besoins spécifiques de votre application. Le clonage en profondeur est généralement préférable lorsque vous avez des objets complexes avec des propriétés imbriquées.

## structuredClone

la nouvelle API `structuredClone`, qui est une méthode d'opération de clonage d'objets plus avancée et plus sûre que `JSON.stringify()` et `JSON.parse()`. Cette méthode permet de cloner des objets JavaScript complexes, y compris des objets contenant des fonctions, des références circulaires, des instances de classes, etc.

Voici comment utiliser `structuredClone` :

```javascript
const obj1 = { a: 1, b: { c: 2 } };
const obj2 = structuredClone(obj1);

obj2.b.c = 3;
console.log(obj1.b.c); // Output: 2
```

La méthode `structuredClone` crée une copie profonde de l'objet `obj1`, y compris toutes les propriétés et sous-objets. Contrairement à `JSON.stringify()` et `JSON.parse()`, elle peut gérer des cas plus complexes tels que les références circulaires ou les fonctions.

Il convient de noter que l'API `structuredClone` est disponible dans les environnements compatibles avec les travailleurs de service (service workers), les modules, ou dans un contexte de navigateur. Elle n'est pas directement disponible dans **Node.js**.

En résumé, si vous avez besoin de cloner des objets JavaScript complexes tout en conservant leur structure et leurs fonctionnalités, l'utilisation de `structuredClone` est une bonne option.
