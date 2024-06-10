# Le Box-Model

Le modèle de boîte (box model) est un concept fondamental en CSS qui définit comment les éléments HTML sont rendus et occupent de l'espace dans le document. Le modèle de boîte divise chaque élément en plusieurs parties essentielles : la marge (margin), la bordure (border), le rembourrage (padding), et le contenu (content).

## propriétés liées au box-model

Les principales propriétés CSS liées au modèle de boîte sont :

1. **`width` et `height`** :
   - `width` définit la largeur de la boîte, y compris le contenu, le rembourrage et la bordure.
   - `height` définit la hauteur de la boîte, y compris le contenu, le rembourrage et la bordure.

2. **`padding`** :
   - `padding` détermine la distance entre le contenu de la boîte et sa bordure.
   - Vous pouvez spécifier les valeurs de `padding` de manière individuelle pour chaque côté (haut, droit, bas, gauche) ou utiliser `padding-top`, `padding-right`, `padding-bottom`, et `padding-left` pour définir des valeurs spécifiques.
   
   Exemple:

   ```css
   .maclasse {
      padding: 20px; /* toutes les marges intérieurs à 20px */
      padding: 20px 10px; /* Les marges intérieurs haut/bas à 20px gauche/droite à 10px */
      padding: 20px 10px 15px; /* La marge intérieurs haut à 20px gauche/droite à 10px et bas à 15px */
      /* on aurait pu aussi écrire : */
      padding-top: 20px;
      padding-left: 10px;
      padding-bottom: 15px;
      padding-right: 10px;
   }
   ```

3. **`border`** :
   - `border` définit la bordure autour du contenu et du rembourrage.
   - Vous pouvez spécifier la largeur, le style et la couleur de la bordure. Par exemple : `border: 1px solid #000;`.
   - vous pouvez spécifier les valeurs de `border` individuellement ou utiliser `border` qui est un raccourci pour toutes le valeurs de bordure.
   
   Exemple :

   ```css
   .maclasse {
      
      border-width: 1px; /* épaisseur de la bordure */
      border-style: solid; /* le style de bordure (solid, dashed, dotted, double...) */
      border-color: #ffdd00; /* le style de bordure (solid, dashed, dotted, double...) */
      /* on aurait pu aussi écrire : */
      border: 1px solid #ffdd00; /* raccourci */
   }
   ```
   - on peut également définir chaque bordure indépendamment:
   
   Exemple :

   ```css
   .maclasse {
      border-left-width: 1px; /* épaisseur de la bordure */
      border-left-style: solid; /* le style de bordure (solid, dashed, dotted, double...) */
      border-left-color: #ffdd00; /* le style de bordure (solid, dashed, dotted, double...) */
      /* on aurait pu aussi écrire : */
      border-left: 1px solid #ffdd00; /* raccourci */
   }
   ```
   - on peut définir les coins arrondis grâce à `border-radius`
   Exemple :

   ```css
      .maclasse {
         border-radius: 50%; /* en pourcent ou pixels */
         /* 
         border-top-left-radius: 50px; 
         border-top-right-radius: 100px; 
         border-bottom-left-radius: 50%; 
         border-bottom-right-radius: 10px; 
         */
         border-radius: 50px 100px 50% 10px;
      }
   ```

4. **`margin`** :
   - `margin` définit l'espace entre la bordure de la boîte et les éléments voisins.
   - Comme avec `padding`, vous pouvez spécifier les valeurs de `margin` individuellement ou utiliser `margin-top`, `margin-right`, `margin-bottom`, et `margin-left`.
   
   Exemple:

   ```css
   .maclasse {
      margin: 20px; /* toutes les marges extérieures à 20px */
      margin: 20px 10px; /* Les marges extérieures haut/bas à 20px gauche/droite à 10px */
      margin: 20px 10px 15px; /* La marge extérieures haut à 20px gauche/droite à 10px et bas à 15px */
      /* on aurait pu aussi écrire : */
      margin-top: 20px;
      margin-left: 10px;
      margin-bottom: 15px;
      margin-right: 10px;
   }
   ```

Le modèle de boîte par défaut de CSS est le modèle de boîte de contenu (`content-box`), où la largeur et la hauteur définies s'appliquent uniquement au contenu, et les paddings, bordures et marges sont ajoutés à ces dimensions. Cependant, il existe un autre modèle appelé le modèle de boîte de bordure (`border-box`) où les dimensions définies incluent les paddings et les bordures, et la marge est en dehors de ces dimensions.

Pour utiliser le modèle de boîte de bordure (`border-box`) au lieu du modèle de boîte de contenu (`content-box`), vous pouvez définir la propriété `box-sizing` sur l'élément concerné :

```css
box-sizing: border-box;
```

> voir ces exemples pour mieux comprendre l'importance du box-sizing:
> https://fr.learnlayout.com/box-model
> https://fr.learnlayout.com/box-sizing

## propriété display

Le modèle de boite (box-model) ne s'applique pas de manière identique à tous les éléments d'une page. Certaines balises ont un rendu par défaut de type `inline`.
La propriété `display` en CSS détermine comment un élément HTML est affiché dans le flux de la page. Les valeurs courantes pour `display` sont :

1. `block` : L'élément est affiché comme un bloc, ce qui signifie qu'il occupe toute la largeur disponible et commence sur une nouvelle ligne. Les éléments `<div>` et `<p>` sont des exemples d'éléments en bloc.
2. `inline` : L'élément est affiché en ligne, ce qui signifie qu'il ne commence pas sur une nouvelle ligne et n'occupe que la largeur nécessaire. Les éléments `<span>` et `<a>` sont des exemples d'éléments en ligne.
3. `inline-block` : L'élément est affiché en ligne, mais il conserve les propriétés de bloc telles que la possibilité de définir des dimensions et d'ajouter des marges et des paddings.
4. `none` : L'élément est complètement masqué et ne sera pas affiché sur la page.
5. `flex` et `grid` : Ces valeurs permettent de créer des conteneurs flexibles et de grille pour organiser les éléments de manière complexe.
6. `table` et ses dérivés (`table-row`, `table-cell`, etc.) : Ces valeurs sont utilisées pour créer des mises en page semblables à des tableaux.
7. `inline-table` : Combinaison d'éléments en ligne et de table.
8. `list-item` : Utilisé pour les éléments de liste (`<li>`).

Ces propriétés CSS liées au modèle de boîte et à l'affichage (`display`) sont essentielles pour la mise en page et la conception de pages web. En comprenant comment fonctionne le modèle de boîte et en choisissant judicieusement les valeurs de `display`, vous pouvez contrôler l'apparence et le comportement des éléments HTML sur votre site.

Il est donc possible de modifier et de contrôler l'apparence d'un élément pour changer son display et lui attribuer des valeurs appliquées du box-model

**Exemple :**

```html
<!-- cette balise est par défaut de type inline, elle n'est pas de type block. -->
<span>mon texte</span>
```

```css
span {
  display: block; /* en changeant le display, j'obtient un comportement similaire à un div, de type block. */
  /* je peux ensuite lui appliquer des propriétés de block */
  padding: 20px; /* losque les valeurs sont identiques, on peut raccourcir à une seule valeur, deux ou trois valeurs */
  margin: 20px 10px 30px 24px; /* ici toutes les valeurs sont différents (haut droit bas gauche) dans le sens des aiguilles d'une montre en partant du haut. */
  width: 200px;
  height: 100px;
  background-color: red;
}
```

## Dessiner avec des CSS

Vous pouvez trouver de nombreuses ressources sur internet pour apprendre à dessiner avec des CSS en utilisant des bords arrondis, des ombres portées, des tailles et des positions... voici quelques exemples pour aller plus loin :

- https://css-tricks.com/the-shapes-of-css/
- https://dev.to/poulamic/intro-to-creating-css-art-1ep5
- https://www.youtube.com/watch?v=dq2hlbacOaM
- https://redstapler.co/css-drawing-tutorial-for-beginners/

