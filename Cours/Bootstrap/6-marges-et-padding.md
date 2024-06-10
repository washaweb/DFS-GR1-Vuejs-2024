# Espacements

Bootstrap offre des classes utilitaires pour gérer l'espacement, que ce soit pour la marge (margin) ou le rembourrage (padding). Ces classes permettent d'ajuster l'espacement de manière rapide et simple. Voici comment utiliser ces classes avec des exemples de code :

## Marge (Margin)

Utilisez les classes de marge en combinant `m` (pour "margin") avec une abréviation de direction (`t` pour top, `b` pour bottom, `s` pour start (left), `e` pour end(right), `x` pour horizontal, `y` pour vertical) et une valeur de 0 à 5 (0 pour aucune marge, 5 pour une grande marge). Par exemple, `m-2` appliquera une marge de taille 2 sur tous les côtés.

Ces classes utilisent le format `{property}{sides}-{size}` pour xs et `{property}{sides}-{breakpoint}-{size}` pour les breakpoints sm, md, lg, xl, et xxl.

```html
  <div class="container">
    <div class="m-2">Marge 2 sur tous les côtés</div>
    <div class="mt-3">Marge top 3</div>
    <div class="mx-4">Marge horizontale 4</div>
    <div class="ms-4">Marge en début (à gauche) de 4</div>
    <div class="me-3">Marge en fin (à droit) de 3</div>
  </div>
```

## Rembourrage (Padding)

Le principe est similaire pour les marges intérieures. Utilisez `p` (pour "padding") avec une abréviation de direction (`t`, `b`, `s`, `e`, `x`, `y`) et une valeur de 0 à 5.

```html
  <div class="container">
    <div class="p-2">Rembourrage 2 sur tous les côtés</div>
    <div class="pt-3">Rembourrage top 3</div>
    <div class="px-4">Rembourrage horizontale 4</div>
    <div class="ps-4">Rembourrage en début (à gauche) de 4</div>
    <div class="pe-3">Rembourrage en fin (à droit) de 3</div>
  </div>
```

Il existe de nombreuses autres classes utilitaires très pratiques dans Boostrap, n'hésitez pas à les utiliser et les apprendre à partir de [la documentation](https://getbootstrap.com/docs/5.3/utilities/).
