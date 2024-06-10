# 11 - le DOM

#Formation JS#
*Dernière mise à jour 04/01/2024*

Le DOM (Document Object Model) en JavaScript est une représentation hiérarchique et structurée d'une page HTML, sous forme d'un arbre d'objets. Chaque élément HTML, tel que `<div>`, `<p>`, `<span>`, etc., est représenté par un objet dans le DOM, appelé nœud (ou node). Ces nœuds sont organisés de manière hiérarchique, où chaque nœud peut avoir des nœuds enfants, des nœuds parents et des nœuds frères.

Le DOM fournit une interface de programmation (API) qui permet de manipuler dynamiquement les éléments et le contenu d'une page web. On peut ajouter, supprimer, modifier et déplacer des éléments HTML à l'aide de JavaScript.

Voici un exemple simple pour illustrer le DOM, supposons que nous avons le code HTML suivant :

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemple de DOM</title>
</head>
<body>
    <div id="container">
        <h1>Bienvenue sur notre site web</h1>
        <p>Voici un paragraphe de démonstration.</p>
        <button id="bouton">Cliquez ici</button>
    </div>
</body>
</html>
```

En JavaScript, nous pouvons accéder à ces éléments et les manipuler de la manière suivante :

```js
// Sélectionner un élément par son ID
const container = document.getElementById('container');

// Modifier le contenu de l'élément
container.innerHTML = '<h1>Nouveau titre</h1>';

// Créer un nouvel élément
const nouveauParagraphe = document.createElement('p');
nouveauParagraphe.textContent = 'Ceci est un nouveau paragraphe ajouté dynamiquement.';
container.appendChild(nouveauParagraphe);

// Ajouter un gestionnaire d'événements à un bouton
const bouton = document.getElementById('bouton');
bouton.addEventListener('click', function() {
    alert('Le bouton a été cliqué !');
});
```

Dans cet exemple, nous avons utilisé différentes méthodes et propriétés du DOM pour accéder aux éléments HTML, les modifier et ajouter de nouveaux éléments. Cela démontre la puissance du DOM en JavaScript pour dynamiquement manipuler le contenu et le comportement d'une page web.

## Inspecter le DOM

Il existe plusieurs méthodes pour inspecter le DOM en JavaScript, ce qui permet de récupérer des informations sur les éléments de la page, leurs attributs, leurs styles et leurs relations. Voici quelques-unes des méthodes couramment utilisées :

1. **getElementById(id)** : Cette méthode permet de récupérer un élément du DOM en fonction de son ID.

   ```js
   const element = document.getElementById('monElement');
   ```

    Exemple fonctionnel :

   ```html
   <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Exemple de getElementById</title>
    </head>
    <body>
        <div id="monElement">Ceci est un élément avec l'ID "monElement".</div>
        <script>
            const element = document.getElementById('monElement');
            console.log(element.textContent); // Affiche le texte de l'élément
        </script>
    </body>
    </html>
    ```

2. **getElementsByClassName(className)** : Cette méthode récupère une liste d'éléments du DOM qui ont la classe spécifiée.

   ```js
   const elements = document.getElementsByClassName('maClasse');
   ```

   Exemple fonctionnel :

   ```html
   <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Exemple de getElementsByClassName</title>
    </head>
    <body>
        <div class="maClasse">Premier élément avec la classe "maClasse".</div>
        <div class="maClasse">Deuxième élément avec la classe "maClasse".</div>
        <script>
            const elements = document.getElementsByClassName('maClasse');
            // retourne un tableau d'éléments HTML
            // nous devons donc boucler sur les résultats
            for (let i = 0; i < elements.length; i++) {
                console.log(elements[i].textContent); // Affiche le texte de chaque élément
            }
        </script>
    </body>
    </html>

   ```

3. **getElementsByTagName(tagName)** : Cette méthode récupère une liste d'éléments du DOM qui ont le nom de balise spécifié.

   ```js
   const elements = document.getElementsByTagName('div');
   ```

   Exemple fonctionnel :

   ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Exemple de getElementsByTagName</title>
    </head>
    <body>
        <div>Premier élément div.</div>
        <p>Paragraphe.</p>
        <script>
            const elements = document.getElementsByTagName('div');
            // retourne un tableau d'éléments HTML
            // nous devons donc boucler sur les résultats
            for (let i = 0; i < elements.length; i++) {
                console.log(elements[i].textContent); // Affiche le texte de chaque élément div
            }
        </script>
    </body>
    </html>
   ```

4. **querySelector(selector)** : Cette méthode récupère le premier élément du DOM qui correspond au sélecteur CSS spécifié.

   ```js
   const element = document.querySelector('#monId .maClasse');
   ```

   Exemple fonctionnel :

   ```html
   <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Exemple de querySelector</title>
    </head>
    <body>
        <div id="monDiv" class="maClasse">Contenu de monDiv.</div>
        <script>
            const element = document.querySelector('#monDiv.maClasse');
            console.log(element.textContent); // Affiche le texte de l'élément
        </script>
    </body>
    </html>

   ```

5. **querySelectorAll(selector)** : Cette méthode récupère tous les éléments du DOM qui correspondent au sélecteur CSS spécifié.

   ```js
   const elements = document.querySelectorAll('.maClasse');
   ```

   Exemple fonctionnel :

   ```html
    <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Exemple de querySelectorAll</title>
      </head>
      <body>
          <div class="maClasse">Premier élément avec la classe "maClasse".</div>
          <div class="maClasse">Deuxième élément avec la classe "maClasse".</div>
          <script>
              const elements = document.querySelectorAll('.maClasse');
              // retourne un tableau d'éléments HTML
              // nous devons donc boucler sur les résultats
              elements.forEach(element => {
                  console.log(element.textContent); // Affiche le texte de chaque élément
              });
          </script>
      </body>
      </html>

   ```

6. **parentNode** : Cette propriété permet d'accéder à l'élément parent d'un élément donné.

   ```js
   const parent = element.parentNode;
   ```

   Exemple fonctionnel :

   ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Exemple de parentNode</title>
    </head>
    <body>
        <div id="parent">
            <div id="enfant">Contenu de l'enfant.</div>
        </div>
        <script>
            const enfant = document.getElementById('enfant');
            const parent = enfant.parentNode;
            console.log(parent.id); // Affiche l'ID de l'élément parent
        </script>
    </body>
    </html>

   ```

7. **children** : Cette propriété renvoie une liste des éléments enfants d'un élément donné.

   ```js
   const children = parent.children;
   ```

   Exemple fonctionnel :

   ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Exemple de children</title>
    </head>
    <body>
        <div id="parent">
            <div>Enfant 1</div>
            <div>Enfant 2</div>
        </div>
        <script>
            const parent = document.getElementById('parent');
            const children = parent.children;
            // retourne un tableau d'éléments HTML
            // nous devons donc boucler sur les résultats
            for (let i = 0; i < children.length; i++) {
                console.log(children[i].textContent); // Affiche le texte de chaque enfant
            }
        </script>
    </body>
    </html>

   ```

8. **getAttribute(name)** : Cette méthode renvoie la valeur de l'attribut spécifié d'un élément.

   ```js
   const value = element.getAttribute('id');
   ```

   Exemple fonctionnel :

   ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Exemple de getAttribute</title>
    </head>
    <body>
        <a id="lien" href="https://www.example.com">Cliquez ici</a>
        <script>
            const lien = document.getElementById('lien');
            const href = lien.getAttribute('href');
            console.log(href); // Affiche la valeur de l'attribut href
        </script>
    </body>
    </html>
   ```

9. **style** : Cette propriété permet d'accéder aux styles CSS d'un élément.

   ```js
   const couleur = element.style.color;
   ```

   Exemple fonctionnel :

   ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Exemple de style</title>
        <style>
            #monElement {
                color: red;
                font-size: 20px;
            }
        </style>
    </head>
    <body>
        <div id="monElement">Ceci est un texte avec un style.</div>
        <script>
            const element = document.getElementById('monElement');
            const couleur = element.style.color;
            const taillePolice = element.style.fontSize;
            console.log(couleur, taillePolice); // Affiche les valeurs de couleur et de taille de police
        </script>
    </body>
    </html>
   ```

Ces méthodes et propriétés offrent des moyens puissants d'inspecter et de manipuler le DOM en JavaScript, ce qui permet de créer des applications web dynamiques et interactives.
