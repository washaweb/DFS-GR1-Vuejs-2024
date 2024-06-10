# Boutons et liens

## Boutons

Bootstrap propose un composant de bouton avec différentes classes pour personnaliser son apparence. Voici quelques exemples de code pour différents types de boutons et leurs variations :

### Bouton de Base

```html
<button type="button" class="btn btn-primary">Bouton Primaire</button>
```

### Boutons de Couleurs

Bootstrap propose différentes classes de couleur pour les boutons. Voici quelques exemples :

```html
<button type="button" class="btn btn-secondary">Bouton Secondaire</button>
<button type="button" class="btn btn-success">Bouton Succès</button>
<button type="button" class="btn btn-danger">Bouton Danger</button>
<button type="button" class="btn btn-warning">Bouton Avertissement</button>
<button type="button" class="btn btn-info">Bouton Information</button>
<button type="button" class="btn btn-light">Bouton Léger</button>
<button type="button" class="btn btn-dark">Bouton Sombre</button>
<button type="button" class="btn btn-link">Bouton Lien</button>
```

### Boutons de Tailles Différentes

Utilisez les classes `btn-lg`, `btn-sm`, ou `btn-block` pour définir différentes tailles de boutons.

```html
<button type="button" class="btn btn-primary btn-lg">Bouton Large</button>
<button type="button" class="btn btn-secondary">Bouton Normal</button>
<button type="button" class="btn btn-success btn-sm">Bouton Petit</button>
<button type="button" class="btn btn-danger btn-block">Bouton Pleine Largeur</button>
```

### Bouton avec Icône

Utilisez la balise `<i>` ou `<span>` avec la classe d'icône Bootstrap `bi` pour ajouter une icône à un bouton.

```html
<button type="button" class="btn btn-primary">
  <i class="bi bi-heart"></i> J'aime
</button>
```

### Bouton avec Contour

Ajoutez la classe `btn-outline` pour obtenir un bouton avec un contour.

```html
<button type="button" class="btn btn-outline-primary">Bouton Primaire</button>
<button type="button" class="btn btn-outline-secondary">Bouton Secondaire</button>
<button type="button" class="btn btn-outline-success">Bouton Succès</button>
```

### Bouton Désactivé

Utilisez l'attribut `disabled` pour rendre un bouton inactif.

```html
<button type="button" class="btn btn-primary" disabled>Bouton Désactivé</button>
```

### Bouton avec Action Réactive

Utilisez la classe `btn` avec `data-bs-toggle` et `data-bs-target` pour activer des actions réactives telles que des modales.

```html
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Ouvrir la Modale
</button>
```

## Liens

Bootstrap propose également des classes pour styliser les liens sous forme de boutons. Voici comment vous pouvez utiliser ces classes pour créer des liens stylisés en Bootstrap :

### Lien de Base

```html
<a href="#" class="btn btn-primary">Lien Primaire</a>
```

### Liens de Couleurs

Utilisez différentes classes de couleur pour définir la couleur du lien.

```html
<a href="#" class="btn btn-secondary">Lien Secondaire</a>
<a href="#" class="btn btn-success">Lien Succès</a>
<a href="#" class="btn btn-danger">Lien Danger</a>
<a href="#" class="btn btn-warning">Lien Avertissement</a>
<a href="#" class="btn btn-info">Lien Information</a>
<a href="#" class="btn btn-light">Lien Léger</a>
<a href="#" class="btn btn-dark">Lien Sombre</a>
<a href="#" class="btn btn-link">Lien Lien</a>
```

### Liens de Tailles Différentes

Utilisez les classes `btn-lg`, `btn-sm`, ou `btn-block` pour définir différentes tailles de liens.

```html
<a href="#" class="btn btn-primary btn-lg">Lien Large</a>
<a href="#" class="btn btn-secondary">Lien Normal</a>
<a href="#" class="btn btn-success btn-sm">Lien Petit</a>
<a href="#" class="btn btn-danger btn-block">Lien Pleine Largeur</a>
```

### Lien avec Icône

Ajoutez la balise `<i>` ou `<span>` avec la classe d'icône Bootstrap `bi` pour ajouter une icône à un lien.

```html
<a href="#" class="btn btn-primary">
  <i class="bi bi-heart"></i> J'aime
</a>
```

### Lien avec Contour

Ajoutez la classe `btn-outline` pour obtenir un lien avec un contour.

```html
<a href="#" class="btn btn-outline-primary">Lien Primaire</a>
<a href="#" class="btn btn-outline-secondary">Lien Secondaire</a>
<a href="#" class="btn btn-outline-success">Lien Succès</a>
```

### Lien Désactivé

Utilisez l'attribut `disabled` pour rendre un lien inactif.

```html
<a href="#" class="btn btn-primary disabled" tabindex="-1" aria-disabled="true">Lien Désactivé</a>
```

### Lien avec Action Réactive

Utilisez la classe `btn` avec `data-bs-toggle` et `data-bs-target` pour activer des actions réactives telles que des modales.

```html
<a href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Ouvrir la Modale
</a>
```
