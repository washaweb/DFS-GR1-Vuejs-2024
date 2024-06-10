# Composants

Bootstrap est un framework CSS populaire qui propose une multitude de composants prêts à l'emploi pour la création d'interfaces utilisateur responsives et esthétiques.
Le principe est d'avoir une documentation fournie avec des exemples d'utilisation réutilisables et personnalisables qui seront réutilisables en fonction de vos besoins sur toute sorte de site internet. Le code HTML des composants est éprouvé par des années d'utilisations et standardisé pour observer les meilleurs pratiques d'accessiblité. Bien-entendu, le propos de ce chapitre n'est pas de dresser une liste exaustive de tous les composants, pour cela il y a le site dédié de la [documentation de Boostrap ici](https://getbootstrap.com/).

Liste non exaustive des composants :

- Composants de formulaires
- Accordion
- Alerts
- Badge
- Breadcrumb
- Buttons
- Button group
- Card
- Carousel
- Close button
- Collapse
- Dropdowns
- List group
- Modal
- Navbar
- Navs & tabs
- Offcanvas
- Pagination
- Placeholders
- Popovers
- Progress
- Scrollspy
- Spinners
- Toasts
- Tooltips


### Composants interactifs (avec JavaScript)

Certains composants proposent une API JavaScript, ce qui permet de contrôler leur comportement.
Par exemple ouvrir / fermer un menu déroulant, contrôler les sliders, ou bien ouvrir / fermer une modale.
Bootstrap propose deux approches, utiliser des directives javascript dans les balises HMTL à l'aide d'instructions `data-bs-*` ou bien utiliser du code JavaScript.

Exemple :

```html
<div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
```

Dans cet exemple de carousel, l'attribut `data-bs-ride="carousel"` donne la directive à JavaScript de lancer le carousel en mode automatique et de défiler en boucle.
Si l'on change pour `data-bs-ride="true"` le comportement du carousel sera automatique mais non bouclé et il démarrera uniquement après l'intéraction d'un utilisateur.
Vous pouvez également ajouter des commandes comme `data-bs-interval=""`  à un élément `.carousel` pour modifier le délai d'attente entre le passage automatique à l'élément suivant.

Il est également possible de contrôler le carousel à l'aide de fonctions et d'événements JavaScript :

```js
const myCarousel = document.getElementById('myCarousel')

myCarousel.addEventListener('slide.bs.carousel', event => {
  // faire quelque chose au moment du défilement d'une slide...
})
```

Ce ne sont ici que quelques exemples, il faudra lire la documentation de chaque composants pour en apprendre d'avantage.

- https://getbootstrap.com/docs/5.3/components/
- https://getbootstrap.com/docs/5.3/components/carousel/
