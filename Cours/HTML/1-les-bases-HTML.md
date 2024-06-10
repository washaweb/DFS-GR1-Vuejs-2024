# Cours sur les Bases de l'HTML

## Introduction à HTML

HTML (HyperText Markup Language) est le langage de balisage utilisé pour créer la structure de base d'une page web.

### Balises et éléments

- Les balises HTML sont entourées de chevrons ("<" et ">") et sont utilisées pour marquer différents éléments sur une page web.
- Un élément HTML consiste en une balise ouverte, le contenu, et une balise de fermeture. Par exemple : `<h1>Titre</h1>`.

### Structure de base d'une page HTML

- Une page HTML commence généralement par la balise `<!DOCTYPE html>`, qui indique la version HTML.
- Ensuite, vous avez la balise `<html>`, à l'intérieur de laquelle se trouvent les balises `<head>` (pour les métadonnées) et `<body>` (pour le contenu visible).

## Principaux éléments HTML

### Titres et paragraphes

- Utilisez les balises `<h1>` à `<h6>` pour créer des titres de différentes tailles.
- Les paragraphes sont créés avec la balise `<p>`.

### Liens

- Pour créer un lien hypertexte, utilisez la balise `<a>`. Par exemple : `<a href="https://www.example.com">Visitez Example.com</a>`.

### Images

- Affichez des images en utilisant la balise `<img>`. Par exemple : `<img src="image.jpg" alt="Description de l'image" />`.

### Listes

- Créez des listes à puces avec la balise `<ul>` et des listes numérotées avec la balise `<ol>`.
- Utilisez la balise `<li>` pour chaque élément de la liste.

### Commentaires

- Vous pouvez ajouter des commentaires HTML en utilisant `<!-- Commentaire ici -->`.

## Exemple de Code HTML

```html
<!DOCTYPE html>
<html>
<head>
    <title>Ma Page Web</title>
</head>
<body>
    <h1>Mon Premier Titre</h1>
    <p>Ceci est un paragraphe.</p>
    <ul>
        <li>Élément 1</li>
        <li>Élément 2</li>
    </ul>
    <a href="https://www.example.com">Visitez Example.com</a>
</body>
</html>
```