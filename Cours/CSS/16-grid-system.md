# Grid system

Le modèle de grille en CSS, activé avec la propriété `display: grid;`, est une technique de mise en page moderne, qui permet de créer des mises en page à deux dimensions (lignes et colonnes) de manière efficace, on parle de disposition en trame.

![Grid system](../ressources/15-grid/grid.png)

**1. Création d'une Grille :**

Pour créer une grille en CSS, vous devez d'abord déclarer un conteneur comme un conteneur de grille en lui appliquant la propriété `display: grid;`. Les éléments enfants de ce conteneur deviendront automatiquement des éléments de la grille.

Exemple de base :

```css
.container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr; /* Crée 3 colonnes égales */
    grid-template-rows: 100px 200px; /* Crée 2 lignes de hauteurs différentes */
    gap: 10px; /* Espacement entre les cellules de la grille */
}
```

**2. Définition de la Structure de la Grille :**

Vous pouvez définir la structure de la grille en spécifiant le nombre de colonnes, de lignes et leurs tailles à l'aide des propriétés `grid-template-columns` et `grid-template-rows`.

- `grid-template-columns` définit le nombre et la taille des colonnes.
- `grid-template-rows` définit le nombre et la taille des lignes.

Dans l'exemple ci-dessus, nous créons une grille avec 3 colonnes égales (`1fr` signifie une fraction de l'espace disponible) et 2 lignes de hauteurs différentes (100 pixels et 200 pixels).

**3. Placement des Éléments dans la Grille :**

Vous pouvez placer les éléments à l'intérieur de la grille en utilisant les propriétés `grid-column` et `grid-row`. Par exemple, pour placer un élément dans la deuxième colonne et la première ligne :

```css
.item {
    grid-column: 2; /* Place l'élément dans la deuxième colonne */
    grid-row: 1;    /* Place l'élément dans la première ligne */
}
```

**4. Espacement entre les Cellules de la Grille :**

La propriété `gap` (ou `grid-gap`) définit l'espacement entre les cellules de la grille (colonnes et lignes).

Exemple :

```css
.container {
    gap: 10px; /* Espacement de 10 pixels entre les cellules */
}
```

**5. Alignement des Éléments dans la Grille :**

Vous pouvez aligner les éléments dans la grille à l'aide des propriétés `justify-items` et `align-items` pour l'alignement horizontal et vertical respectivement.

Exemple :

```css
.container {
    justify-items: center; /* Centre horizontalement les éléments */
    align-items: center;   /* Centre verticalement les éléments */
}
```

**6. Création de Zones Nomées :**

Vous pouvez nommer des zones spécifiques de la grille à l'aide de la propriété `grid-template-areas` et placer des éléments dans ces zones en utilisant la propriété `grid-area`. Cela simplifie la mise en page en donnant des noms aux zones plutôt qu'en utilisant des nombres pour les positions.


Exemple :

```css
.container {
    grid-template-areas:
        "header header header"
        "sidebar main main"
        "footer footer footer";
}

.header {
    grid-area: header;
}

.sidebar {
    grid-area: sidebar;
}

.main {
    grid-area: main;
}

.footer {
    grid-area: footer;
}
```

Dans cet exemple, nous avons nommé des zones pour les différentes parties de la mise en page (header, sidebar, main, footer) et placé les éléments dans ces zones à l'aide de `grid-area`.

La mise en page en grille en CSS offre une flexibilité exceptionnelle pour créer des mises en page complexes et réactives. Vous pouvez ajuster la structure de la grille, le placement des éléments et l'espacement selon vos besoins. Elle est devenue l'une des méthodes de mise en page les plus puissantes et recommandées pour les mises en page web modernes.

## Exemple complet

```html
<div class="container">
  <header>Voici mon joli blog</header>
  <article>
    <h1>Mon article</h1>
    <p>
      Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor
      imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus
      massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra
      egestas ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada
      et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse ac
      imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis
      ornare egestas augue ut luctus. Proin blandit quam nec lacus varius
      commodo et a urna. Ut id ornare felis, eget fermentum sapien.
    </p>

    <p>
      Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
      ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
      est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus
      tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies
      lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra
      quis vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis
      natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    </p>
  </article>
  <aside>
    <h2>Autres sujets</h2>
    <p>
      Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
      ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
      est.
    </p>
  </aside>
  <footer>Contactez moi@monsite.com</footer>
</div>

```

```css
body {
  width: 90%;
  max-width: 900px;
  margin: 2em auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}

.container {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-gap: 20px;
}

header {
  grid-column: 1 / 13;
  grid-row: 1;
}

article {
  grid-column: 4 / 13;
  grid-row: 2;
}

aside {
  grid-column: 1 / 4;
  grid-row: 2;
}

footer {
  grid-column: 1 / 13;
  grid-row: 3;
}

header,
footer {
  border-radius: 5px;
  padding: 10px;
  background-color: rgb(207, 232, 220);
  border: 2px solid rgb(79, 185, 227);
}

aside {
  border-right: 1px solid #999;
}
```

![Rendu de l'exemple](../ressources/15-grid/grid-example.png)


> Pour aller plus loin avec le grid system

- [Online Grid generator](https://grid.layoutit.com/)
- [jeu grid garden](https://cssgridgarden.com/#fr)
- [MDN Grilles](https://developer.mozilla.org/fr/docs/Learn/CSS/CSS_layout/Grids)
- [MDN Guide des Grilles](https://developer.mozilla.org/fr/docs/Web/CSS/CSS_grid_layout#guides)