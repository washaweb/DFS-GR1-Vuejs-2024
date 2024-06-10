# Exercice 14 : slide blast

reproduire l'image ci-jointe en code HTML:

![Mise en page à reproduire](../ressources/13-exercice-slide-blast/exercice-todo.png)

Les images et typos sont disponibles dans le dossier [`Cours/ressources/13-exercice-slide-blast`](../ressources/13-exercice-slide-blast/) du dépôt GIT.

Voici quelques indications de style :

- Image d'arrière-plan: `img/carousel_hero_576w_x2.webp`
- Images des flèches: `img/arrow-left.svg`, `img/arrow-right.svg`
- Les polices à inclure sont disponibles dans le dossier `fonts/` :
  - Police du titre : Graphik-Bold 36px, hauteur de ligne : 43px
  - Police des métas (actualité + date) : Graphik-Regular 14px, hauteur de ligne : 24px
- inter-lettrage des titres de .5px
- arrière-plan date + catégorie (jaune): #ffed3b


## Aide et astuces

Indication pour le souligné du titre h2 :

afin d'obtenir l'effet de souligné mot-à-mot du titre,
voici le code CSS que vous devez utiliser, 
en plus des décoration d'arrière-plan et de padding..

```css
.slide h2 {
  display: inline; /* rend le titre comme un span */
  background: #fff; /* affecte la couleur d'arrière plan */
  padding-left: 0.5rem; /* espace le titre à gauche */
  padding-right: 0.5rem; /* espace le titre à droit e*/
  -webkit-box-decoration-break: clone; /* répartit le débordement sur chaque ligne (safari et chrome) */
  -moz-box-decoration-break: clone; /* répartit le débordement sur chaque ligne (firefox) */
  box-decoration-break: clone; /* répartit le débordement sur chaque ligne (css3 standard pas encore implémenté) */
}
```
