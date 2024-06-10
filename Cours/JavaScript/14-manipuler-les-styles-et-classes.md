# 14 - Manipuler les styles et les classes avec JavaScript

#Formation JS#
*Dernière mise à jour 04/01/2024*

Lors du développement d'un site web interactif, il est souvent utile de modifier une classe ou un style pour afficher, masquer, animer un élément de la page.

## Manipulation des styles

1. **Modification d'un style existant** :

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Manipulation des styles</title>
      <style>
          #monElement {
              color: blue;
              font-size: 16px;
          }
      </style>
  </head>
  <body>
      <div id="monElement">Ceci est un élément avec un style initial.</div>
      <button onclick="changerStyle()">Changer le style</button>
      <script>
          function changerStyle() {
              const element = document.getElementById('monElement');
              element.style.color = 'red'; // Modification de la couleur
              element.style.fontSize = '20px'; // Modification de la taille de police
          }
      </script>
  </body>
  </html>
  ```
  
  > **Note importante:** Les styles composés comme `background-image` ou `font-size`, sont remplacés en JavaScript par leur équivalent en KamelCase, `backgroundImage`, `fontSize`.

2. **Ajout de styles dynamiquement** :

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Ajout de styles dynamiquement</title>
  </head>
  <body>
      <div id="monElement">Ceci est un élément sans style.</div>
      <button onclick="ajouterStyle()">Ajouter le style</button>
      <script>
          function ajouterStyle() {
              const element = document.getElementById('monElement');
              element.style.cssText = 'color: green; font-size: 24px;'; // Ajout de styles via cssText
          }
      </script>
  </body>
  </html>
  ```

## Manipulation des classes

La manipulation des classes peut se faire de deux manières, à l'aide de la propriété className, qui est une string des classes appliquées à un élément, ou bien l'objet classList, qui est une collection de classes appliquées à un élément.


### className 

1. **Ajout de classe avec className** :
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Ajout de classe</title>
      <style>
          .rouge {
              color: red;
          }
      </style>
  </head>
  <body>
      <div id="monElement">Ceci est un élément.</div>
      <button onclick="ajouterClasse()">Ajouter la classe</button>
      <script>
          function ajouterClasse() {
              const element = document.getElementById('monElement');
              element.className = 'rouge'; // Ajout de la classe "rouge"
          }
      </script>
  </body>
  </html>
  ```

2. **Suppression de classe avec className** :

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Suppression de classe</title>
      <style>
          .rouge {
              color: red;
          }
      </style>
  </head>
  <body>
      <div id="monElement" class="rouge">Ceci est un élément rouge.</div>
      <button onclick="supprimerClasses()">Supprimer la classe</button>
      <script>
          function supprimerClasses() {
              const element = document.getElementById('monElement');
              element.className = ''; // Suppression des classes
          }
      </script>
  </body>
  </html>
  ```

### classList

La propriété `classList` en JavaScript est utilisée pour accéder à la liste des classes d'un élément HTML et pour effectuer des opérations sur cette liste, telles que l'ajout, la suppression ou la vérification de classes.

#### Méthodes de la propriété classList

1. **`add(nomClasse)`** : Ajoute une classe à l'élément.

2. **`remove(nomClasse)`** : Supprime une classe de l'élément.

3. **`toggle(nomClasse)`** : Ajoute la classe si elle n'est pas présente, la supprime si elle est déjà présente.

4. **`contains(nomClasse)`** : Vérifie si l'élément contient une classe spécifiée, renvoie `true` ou `false`.

#### Exemples d'utilisation :

##### Ajout d'une classe :

```js
const element = document.getElementById('monElement');
element.classList.add('maClasse');
```

##### Suppression d'une classe

```js
const element = document.getElementById('monElement');
element.classList.remove('maClasse');
```

##### Toggle d'une classe

```js
const element = document.getElementById('monElement');
element.classList.toggle('maClasse');
```

##### Vérification de la présence d'une classe

```js
const element = document.getElementById('monElement');
const aLaClasse = element.classList.contains('maClasse');
console.log(aLaClasse); // Affiche true ou false
```

### Avantages de l'utilisation de classList

- **Syntaxe plus propre** : La syntaxe est plus concise et plus lisible que les méthodes alternatives telles que `element.className`.
  
- **Facilité d'utilisation** : Les méthodes `add`, `remove`, `toggle` et `contains` offrent des fonctionnalités claires et simples pour la manipulation des classes.

- **Compatibilité** : La propriété `classList` est prise en charge dans les navigateurs modernes, offrant ainsi une solution plus robuste et plus compatible que certaines méthodes plus anciennes.

La propriété `classList` est largement utilisée dans le développement web moderne pour la gestion dynamique des classes CSS sur les éléments HTML. Elle facilite la manipulation et la gestion des styles d'une manière plus élégante et plus efficace.
