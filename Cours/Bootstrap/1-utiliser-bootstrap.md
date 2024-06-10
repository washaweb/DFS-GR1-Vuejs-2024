# Bootstrap

[Bootstrap](https://getbootstrap.com/) est l'un des frameworks CSS les plus populaires et largement utilisés. Il offre une grille réactive, une typographie pré-stylée, des composants (boutons, formulaires, modales, etc.), et des utilitaires CSS. Bootstrap est très personnalisable, ce qui signifie que vous pouvez l'adapter à vos besoins spécifiques en sélectionnant les composants et les styles que vous souhaitez utiliser.

## Les versions de Bootstrap

Pour intégrer Bootstrap, il est important de repérer la version que vous souhaitez utilser dans votre projet. Certains composants que vous pourrez trouver sur le web sont encore réalisés avec des versions antérieurs de Bootstrap, comme la version 4 qui était très populaire. Au moment ou ce cours est réalisé, c'est la **version 5.3** de Bootstrap qui est la version courante, c'est celle que nous utiliserons dans notre cours.

En cas de besoin, le site de documentation du framework permet de basculer sur des versions antérieures de la documentations.

## Intégrer la v5.3

Pour utiliser Bootstrap, il suffit d'inclure la CSS et le fichier JS de Boostrap, vous pouvez commencer avec ce simple document de référence :

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
  </head>
  <body>
    <h1>Hello, world!</h1>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
  </body>
</html>
```

Lorsqu'on souhaitera personnaliser les classes et styles de Bootstrap, il sera préférable de [télécharger les sources](https://github.com/twbs/bootstrap/releases/download/v5.3.2/bootstrap-5.3.2-dist.zip) et l'ajouter à son site web directement avec une version locale.

```
  bootstrap/
  ├── dist/
  │   ├── css/
  │   └── js/
  ├── site/
  │   └──content/
  │      └── docs/
  │          └── 5.3/
  │              └── examples/
  ├── js/
  └── scss/

  index.html      // <<--- ici votre document
```

Bootstrap est réalisé en `SCSS`, les fichiers sources sont également disponible dans la version téléchargée, il est donc plus facile de personnaliser les classes en utilisant cette méthode d'inclusion. [Voir plus d'infos dans la doc](https://getbootstrap.com/docs/5.3/customize/sass/).

Pour inclure la version téléchargée en CSS, il faut inclure les fichiers disponibles dans le dossier `dist` de bootstrap :

```html
  <!doctype html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Bootstrap demo</title>
      <link href="bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
    </head>
    <body>
      <h1>Hello, world!</h1>
      <script src="bootstrap/dist/js/bootstrap.bundle.min.js"></script>
    </body>
  </html>
```

## utiliser npm

L'utilisation d'un package manager simplifie l'installation, par exemple avec `npm` de  (il faut avoir installé `node.js` au préalable).

```sh
  npm init  # suivre les étapes pour initialiser son projet
```

Pour installer bootstrap avec npm:

```sh
  npm install bootstrap@5.3.2
```

Les fichiers de bootstrap sont ensuite téléchargés dans un dossier `node_modules`
