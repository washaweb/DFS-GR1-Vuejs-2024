# 13 - Localisation des éléments DOM avec les sélecteurs

#Formation JS#
*Dernière mise à jour 04/01/2024*

`querySelector` et `querySelectorAll` sont deux méthodes du DOM (Document Object Model) en JavaScript qui permettent de sélectionner des éléments HTML en utilisant des sélecteurs CSS.

## querySelector

La méthode `querySelector` sélectionne le premier élément qui correspond à un sélecteur CSS spécifié.

Syntaxe :

```js
const element = document.querySelector(selecteur);
```

Exemple :

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>querySelector</title>
</head>
<body>
    <div id="monElement">Ceci est un élément.</div>
    <script>
        const element = document.querySelector('#monElement');
        console.log(element.innerHTML); // Affiche le contenu de l'élément
    </script>
</body>
</html>
```

## querySelectorAll

La méthode `querySelectorAll` sélectionne tous les éléments qui correspondent à un sélecteur CSS spécifié, et renvoie une liste NodeList des éléments sélectionnés.

Syntaxe :

```js
const elements = document.querySelectorAll(selecteur);
```

Exemple :

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>querySelectorAll</title>
</head>
<body>
    <ul>
        <li>Élément 1</li>
        <li>Élément 2</li>
        <li>Élément 3</li>
    </ul>
    <script>
        const elements = document.querySelectorAll('li');
        elements.forEach(element => {
            console.log(element.innerHTML); // Affiche le contenu de chaque élément li
        });
    </script>
</body>
</html>
```

### Comparaison

- `querySelector` : Sélectionne le premier élément qui correspond au sélecteur spécifié.
- `querySelectorAll` : Sélectionne tous les éléments qui correspondent au sélecteur spécifié et renvoie une liste NodeList.

Ces méthodes sont puissantes car elles permettent de sélectionner des éléments HTML de manière similaire à l'utilisation des sélecteurs CSS, ce qui facilite la manipulation du DOM dans le cadre du développement web.
