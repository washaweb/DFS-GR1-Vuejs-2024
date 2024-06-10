# La grille de mise en page

La grille Bootstrap est un système de mise en page flexible qui permet de créer des mises en page réactives et adaptatives. Elle utilise un système de colonnes et de rangées basé sur un modèle de grille à 12 colonnes.

## Exemple de Grille Simple

La grille Bootstrap utilise des classes telles que `container`, `row`, et `col` pour structurer la mise en page. Voici un exemple de grille simple avec deux colonnes de largeur égale.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-r2T8IZIhIDTQLnU8lDkS5hJ1ys9th1X4K1aaq3P96LJcZl23UkG6FhLo0x5etN/j" crossorigin="anonymous">
  <title>Bootstrap Grid Example</title>
</head>
<body>

  <div class="container">
    <div class="row">
      <div class="col">
        <p>Colonne 1</p>
      </div>
      <div class="col">
        <p>Colonne 2</p>
      </div>
    </div>
  </div>

  <!-- Intégration du Bootstrap JavaScript (optionnel, mais recommandé) -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-yQw7G6dOEM8IwW5GD0EFnhGo9aT0pJvh2zy6Z5JtCcdCgpSAnsv7RQdp9EHI1Ax3" crossorigin="anonymous"></script>

</body>
</html>
```

Dans cet exemple, la classe `container` englobe la grille, la classe `row` crée une rangée, et la classe `col` crée deux colonnes de largeur égale.

### Exemple de Grille Réactive

La grille Bootstrap facilite la création de mises en page réactives en utilisant des classes de taille d'écran telles que `col-sm`, `col-md`, `col-lg`, et `col-xl`. Voici un exemple de grille réactive avec des colonnes qui changent de taille en fonction de la largeur de l'écran.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-r2T8IZIhIDTQLnU8lDkS5hJ1ys9th1X4K1aaq3P96LJcZl23UkG6FhLo0x5etN/j" crossorigin="anonymous">
  <title>Responsive Bootstrap Grid Example</title>
</head>
<body>

  <div class="container">
    <div class="row">
      <div class="col-md-6 col-lg-4">
        <p>Colonne 1</p>
      </div>
      <div class="col-md-6 col-lg-4">
        <p>Colonne 2</p>
      </div>
      <div class="col-md-12 col-lg-4">
        <p>Colonne 3</p>
      </div>
    </div>
  </div>

  <!-- Intégration du Bootstrap JavaScript (optionnel, mais recommandé) -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-yQw7G6dOEM8IwW5GD0EFnhGo9aT0pJvh2zy6Z5JtCcdCgpSAnsv7RQdp9EHI1Ax3" crossorigin="anonymous"></script>

</body>
</html>
```

Dans cet exemple, les classes `col-md-6`, `col-lg-4`, et `col-md-12` définissent différentes tailles de colonnes en fonction de la largeur de l'écran.

Bien sûr ! La grille Bootstrap permet d'utiliser des offsets et des classes d'alignement pour personnaliser davantage la mise en page. Voici des exemples avancés d'utilisation de la grille avec des offsets et des alignements de colonnes :

## Offset

L'utilisation d'offset permet de créer un espace vide à gauche d'une colonne. Dans l'exemple suivant, la deuxième colonne est décalée de deux colonnes vers la droite.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-r2T8IZIhIDTQLnU8lDkS5hJ1ys9th1X4K1aaq3P96LJcZl23UkG6FhLo0x5etN/j" crossorigin="anonymous">
  <title>Bootstrap Grid with Offset Example</title>
</head>
<body>

  <div class="container">
    <div class="row">
      <div class="col-md-4">Colonne 1</div>
      <div class="col-md-4 offset-md-2">Colonne 2 (Décalée de 2)</div>
    </div>
  </div>

  <!-- Intégration du Bootstrap JavaScript (optionnel, mais recommandé) -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-yQw7G6dOEM8IwW5GD0EFnhGo9aT0pJvh2zy6Z5JtCcdCgpSAnsv7RQdp9EHI1Ax3" crossorigin="anonymous"></script>

</body>
</html>
```

### Alignement Vertical

Les classes d'alignement vertical telles que `align-items-start`, `align-items-center`, et `align-items-end` permettent de contrôler l'alignement vertical des colonnes dans une rangée.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-r2T8IZIhIDTQLnU8lDkS5hJ1ys9th1X4K1aaq3P96LJcZl23UkG6FhLo0x5etN/j" crossorigin="anonymous">
  <title>Bootstrap Grid with Vertical Alignment Example</title>
</head>
<body>

  <div class="container">
    <div class="row align-items-start" style="height: 33vh">
      <div class="col">Colonne 1</div>
      <div class="col">Colonne 2</div>
      <div class="col">Colonne 3</div>
    </div>

    <div class="row align-items-center" style="height: 33vh">
      <div class="col">Colonne 1</div>
      <div class="col">Colonne 2</div>
      <div class="col">Colonne 3</div>
    </div>

    <div class="row align-items-end" style="height: 33vh">
      <div class="col">Colonne 1</div>
      <div class="col">Colonne 2</div>
      <div class="col">Colonne 3</div>
    </div>
  </div>

  <!-- Intégration du Bootstrap JavaScript (optionnel, mais recommandé) -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-yQw7G6dOEM8IwW5GD0EFnhGo9aT0pJvh2zy6Z5JtCcdCgpSAnsv7RQdp9EHI1Ax3" crossorigin="anonymous"></script>

</body>
</html>
```

Dans cet exemple, les trois rangées sont alignées en haut, au centre et en bas de la page, respectivement.

Il existe de nombreux autres cas de figure et les possibilités sont illimités, pour aller plus loin, référez-vous à la [documentation de la grille ici](https://getbootstrap.com/docs/5.3/layout/grid/).
