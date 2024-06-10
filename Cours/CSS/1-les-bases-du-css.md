# Les bases du CSS

HTML n'a pas été conçu pour faire du graphisme et ne devait JAMAIS contenir de balises pour la mise en forme d'une page web !
HTML a été créé pour décrire le contenu d'une page web, on appelle cela la sémentique d'une page.
Les balises sont là pour entourer le contenu et lui donner un sens, comme par exemple :

```html
  <h1>Ceci est un titre</h1>
  <p>Il s'agit d'un paragraphe.</p>
```

Quand les balises comme `<font>`, et les attributs de couleur ont été ajoutés à la spécification HTML 3.2, cela a commencé à être un cauchemar pour les développeurs de sites web. Le développement de grands sites web, où les polices de caractères et les informations sur les couleurs étaient ajoutées à chaque page, est devenu un processus long et coûteux.

Pour résoudre ce problème, le World Wide Web Consortium (W3C) a créé CSS.

- Le CSS (Cascading Style Sheets) est un language pour styliser et mettre en forme vos pages web.
- Le CSS permet de contrôler l'apparence des éléments HTML, tels que la couleur, la police, la taille, la mise en page, etc.

**La syntaxe de base d'un sélecteur CSS est la suivante :**

```css
  element {
    propriété : valeur; 
  }
```

On peut ajouter plusieurs propriétés (une par ligne) à un même sélecteur.

```css
  element {
    propriété1 : valeur; 
    propriété2 : valeur;
  }
```

On "vise" un ou plusieurs élément(s) d'une page HTML à laquelle la CSS est attachée, et on décrit ses propriété de style.


## 1. Sélection des éléments HTML

Pour appliquer des styles à des éléments HTML spécifiques, vous devez d'abord sélectionner ces éléments en utilisant des sélecteurs CSS. Voici quelques exemples de sélecteurs courants :

- Sélectionner un élément par son nom de balise :

```css
  p {
      /* Styles à appliquer aux balises <p> */
  }
```

- Sélectionner un élément par sa classe :

  ```css
  .ma-classe {
      /* Styles à appliquer aux éléments avec la classe "ma-classe" */
  }
  ```

- Sélectionner un élément par son identifiant (id) :

  ```css
  #mon-id {
      /* Styles à appliquer à l'élément avec l'id "mon-id" */
  }
  ```

## 2. commentaires

Les commentaires sont utilisés pour expliquer le code et peuvent être utiles lorsque vous modifiez le code source ultérieurement. Les commentaires sont ignorés par les navigateurs.
Un commentaire CSS est placé à l'intérieur de l'élément `<style>` et commence par `/*` et se termine par `*/` :

```css
/* 
Ceci est un commentaire
sur plusieurs lignes 
*/
p {
  color: red; /* un autre commentaire */
}
```

Utilisez les commentaires est important pour bien séparer les parties de votre CSS, donner du sens à votre code pour vous-même et pour les autres développeurs avec qui vous êtes succeptible de collaborer.

### 3. Propriétés CSS courantes

Voici quelques propriétés CSS couramment utilisées pour styliser les éléments HTML :

- `color`: Définit la couleur du texte.
- `font-size`: Définit la taille de la police.
- `font-family`: Définit la famille de police (par exemple, Arial, Times New Roman).
- `background-color`: Définit la couleur de l'arrière-plan.
- `margin` et `padding`: Contrôlent les marges et les espacements autour des éléments.
- `border`: Définit la bordure autour d'un élément.
- `text-align`: Aligne le texte à gauche, à droite, au centre, etc.

### 4. Exemple CSS simple

Voici un exemple simple d'utilisation du CSS pour styliser un paragraphe HTML :

HTML :

```html
  <!DOCTYPE html>
  <html>
  <head>
      <link rel="stylesheet" type="text/css" href="styles.css">
  </head>
  <body>
      <p class="mon-paragraphe">Ceci est un paragraphe stylisé.</p>
  </body>
  </html>
```

CSS (dans un fichier externe appelé "styles.css") :

```css
  .mon-paragraphe {
      color: blue;
      font-size: 16px;
      font-family: Arial, sans-serif;
      background-color: #f0f0f0;
      padding: 10px;
      border: 1px solid #ccc;
      text-align: center;
  }
```

### 5. Incorporation de CSS

Vous pouvez incorporer des styles CSS de quatre manières principales :

- Dans un fichier CSS externe lié à votre page HTML à l'aide de la balise `<link>`.
- En utilisant des balises `<style>` dans la section `<head>` de votre page HTML.
- En ajoutant des styles directement aux éléments HTML à l'aide de l'attribut `style`.
- Vous pouvez également importer un fichier css dans un autre, avec la règle `@import`

Voici des exemples d'utilisation :

#### Utilisation de `<link>` (Feuille de Style Externe)

La méthode la plus courante pour incorporer des styles CSS consiste à utiliser une feuille de style externe. Vous créez un fichier CSS distinct et l'incluez dans votre document HTML à l'aide de la balise `<link>` dans la section `<head>` du document.

Exemple de feuille de style externe (styles.css) :

```css
/* styles.css */
body {
    background-color: #f0f0f0;
    font-family: Arial, sans-serif;
}
```

HTML :

```html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
    <h1>Ceci est un titre</h1>
    <p>Ceci est un paragraphe.</p>
</body>
</html>
```

#### Utilisation de `<style>` (Feuille de Style Interne)

Vous pouvez également incorporer des styles CSS directement dans la balise `<style>` dans la section `<head>` de votre document HTML. Cela est utile lorsque vous avez besoin de styles spécifiques pour une seule page.

HTML :

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            background-color: #f0f0f0;
            font-family: Arial, sans-serif;
        }
    </style>
</head>
<body>
    <h1>Ceci est un titre</h1>
    <p>Ceci est un paragraphe.</p>
</body>
</html>
```

#### Utilisation de l'Attribut `style` (Style en Ligne)

Vous pouvez également définir des styles CSS en ligne en utilisant l'attribut `style` directement dans une balise HTML. Cela permet d'appliquer des styles spécifiques à un élément particulier.

HTML :

```html
<!DOCTYPE html>
<html>
<head>
</head>
<body>
    <h1 style="color: blue;">Ceci est un titre bleu</h1>
    <p style="font-size: 16px;">Ceci est un paragraphe avec une police de 16 pixels.</p>
</body>
</html>
```

#### Utilisation de `@import`

Dans cet exemple, nous avons défini les styles directement dans les balises `<h1>` et `<p>` à l'aide de l'attribut `style`.

Chacune de ces méthodes a ses avantages et ses cas d'utilisation appropriés. Les feuilles de style externes sont recommandées pour la gestion globale des styles, tandis que les styles internes et en ligne sont utiles pour des styles spécifiques à une page ou à un élément.

L'instruction `@import` est utilisée pour importer des feuilles de style CSS externes dans une autre feuille de style CSS. Elle est généralement utilisée lorsque vous avez besoin d'organiser vos styles en plusieurs fichiers CSS tout en les combinant en un seul fichier pour être inclus dans votre page HTML. Voici un exemple d'utilisation de `@import` :

Supposons que vous avez deux fichiers CSS distincts, "styles1.css" et "styles2.css", et que vous souhaitez les combiner en un seul fichier "styles.css" à inclure dans votre page HTML.

**styles1.css** :

```css
/* styles1.css */
body {
    background-color: #f0f0f0;
    font-family: Arial, sans-serif;
}
```

**styles2.css** :

```css
/* styles2.css */
h1 {
    color: blue;
}
p {
    font-size: 16px;
}
```

**styles.css** (qui importe les deux fichiers) :

```css
/* styles.css */
@import "styles1.css";
@import "styles2.css";
```

Dans votre page HTML, vous pouvez inclure le fichier "styles.css" comme suit :

**HTML** :

```html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
    <h1>Ceci est un titre</h1>
    <p>Ceci est un paragraphe.</p>
</body>
</html>
```

Lorsque vous incluez "styles.css" dans votre page HTML, il importera automatiquement les styles définis dans "styles1.css" et "styles2.css". Cette méthode vous permet de mieux organiser vos styles en les séparant en fichiers logiques tout en les combinant en un seul fichier pour l'inclusion dans votre page web.

### 6. Priorité des Styles

Lorsque plusieurs styles sont appliqués à un élément, le CSS suit une hiérarchie de priorité. Les styles inline (attribut `style`), les styles internes (balises `<style>` dans le `<head>`), et les styles externes (fichier CSS externe) ont des priorités croissantes. Les styles définis plus bas dans le document HTML/CSS ont également une priorité plus élevée que ceux définis plus haut. On parle alors de styles en cascade, ou d'héritage des CSS.

Nous en parlerons plus en détail dans le prochain chapitre.
