# 12 - Manipuler le DOM

#Formation JS#
*Dernière mise à jour 04/01/2024*

La manipulation du DOM (Document Object Model) en JavaScript est une opération courante lors du développement web. Cela permet de modifier la structure, le style et le contenu des pages web de manière dynamique.

Voici quelques exemples de manipulation du DOM :

## 1. Sélection d'éléments HTML

```javascript
// Sélection par ID
const elementById = document.getElementById('monElement');

// Sélection par classe
const elementsByClass = document.getElementsByClassName('maClasse');

// Sélection par balise
const elementsByTag = document.getElementsByTagName('div');

// Sélection par sélecteur CSS
const elementBySelector = document.querySelector('.maClasse');
const elementsBySelectorAll = document.querySelectorAll('.maClasse');
```

## 2. Modification du contenu HTML

```javascript
const element = document.getElementById('monElement');

// Modification du contenu HTML
element.innerHTML = 'Nouveau contenu';

// Ajout de contenu HTML
element.innerHTML += '<p>Paragraphe ajouté</p>';

// Suppression du contenu HTML
element.innerHTML = '';
```

## 3. Modification des attributs HTML

```javascript
const element = document.getElementById('monElement');

// Modification d'un attribut
element.setAttribute('attribut', 'valeur');

// Suppression d'un attribut
element.removeAttribute('attribut');
```

## 4. Modification des styles CSS

```javascript
const element = document.getElementById('monElement');

// Modification d'un style CSS
element.style.color = 'red';

// Ajout de plusieurs styles CSS
element.style.cssText = 'color: red; font-size: 16px;';
```

## 5. Création et ajout d'éléments

```javascript
// Création d'un nouvel élément
const newElement = document.createElement('div');

// Ajout de l'élément à un autre élément parent
const parentElement = document.getElementById('parentElement');
parentElement.appendChild(newElement);
```

## 6. Suppression d'éléments

```javascript
const element = document.getElementById('monElement');

// Suppression de l'élément
element.parentNode.removeChild(element);
```

## Exemple complet de manipulation du DOM

Voici un exemple d'utilisation des fonctions de manipulation du DOM en JavaScript, manipuler le DOM permet de créer, accéder, contrôler et supprimer dynamiquement des éléments HTML. Les méthodes DOM décrites ne sont pas spécifiques au HTML et s'appliquent également au XML.

Considéront le code HTML suivant, un bouton appelle une fonction JavaScript :

```html
<input type="button" value="Generate a table." onclick="generate_table()" />
```

```js
function generate_table() {
  // get the reference for the body
  var body = document.getElementsByTagName("body")[0];

  // creates a <table> element and a <tbody> element
  var tbl = document.createElement("table");
  var tblBody = document.createElement("tbody");

  // creating all cells
  for (var i = 0; i < 2; i++) {
    // creates a table row
    var row = document.createElement("tr");

    for (var j = 0; j < 2; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      var cell = document.createElement("td");
      var cellText = document.createTextNode(
        "cell in row " + i + ", column " + j,
      );
      cell.appendChild(cellText);
      row.appendChild(cell);
    }

    // add the row to the end of the table body
    tblBody.appendChild(row);
  }

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  body.appendChild(tbl);
  // sets the border attribute of tbl to 2;
  tbl.setAttribute("border", "2");
}
```

Lorsque l'utilisateur déclenchera le clic sur le bouton, le code suivant sera ajouté à l'intérieur de la balise BODY :

```html
<table border="2">
  <tr>
    <td>cell in row 0, column 0</td>
    <td>cell in row 0, column 1</td>
  </tr>
  <tr>
    <td>cell in row 1, column 0</td>
    <td>cell in row 1, column 1</td>
  </tr>
</table>
```

Remarquez l'ordre dans lequel les éléments et le nœud texte sont créés :

1. On crée d'abord l'élément `<table>`.
2. Ensuite, l'élément `<tbody>` qui est un enfant de l'élément `<table>`.
3. Puis, grâce à une boucle, on crée les éléments `<tr>`, qui sont des enfants de l'élément `<tbody>`.
4. Pour chaque élément `<tr>`, on emploie une boucle pour créer les éléments enfants `<td>`.
5. Enfin pour chaque élément `<td>`, on crée le nœud texte contenant le texte de la cellule du tableau.

Après avoir créé les éléments `<table>`, `<tbody>`, `<tr>`, `<td>` et le nœud texte, on ajoute chaque objet à son parent dans l'ordre inverse :

1. On attache d'abord chaque nœud texte à son élément parent `<td>` en utilisant

   ```js
    cell.appendChild(texte);
   ```

2. Ensuite, on lie chaque élément `<td>` à son élément `<tr>` parent avec

   ```js
    row.appendChild(cell);
   ```

3. Puis chaque `<tr>` à son parent `<tbody>` avec

  ```js
   tablebody.appendChild(row);
  ```

4. Puis l'élément `<tbody>` est attaché à son élément parent `<table>` grace à

   ```js
    table.appendChild(tablebody);
   ```

5. Enfin, `<table>` est rattaché à `<body>` avec

   ```js
   body.appendChild(table);
   ```

Souvenez-vous de cette technique, vous l'utiliserez souvent en programmant pour le DOM W3C. On crée d'abord les éléments du haut vers le bas, puis on attache les enfants aux parents dans l'ordre inverse.

Vous pouvez construire ce tableau ainsi que ses éléments enfants internes en utilisant juste quelques méthodes DOM. Conservez à l'esprit le modèle en arbre des structures que vous comptez créer, cela rendra plus facile l'écriture du code nécessaire. Dans l'arbre `<table>` de la figure 1, l'élément `<table>` a un enfant, l'élément `<tbody>`, qui lui-même a deux enfants `<tr>`, qui à leur tour ont chacun un enfant `<td>`. Enfin, chacun de ces éléments `<td>` a un enfant, un nœud texte.
