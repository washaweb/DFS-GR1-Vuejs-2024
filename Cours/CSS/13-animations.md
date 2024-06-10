# Animation CSS

## Propriété animation et @keyframes

### Définition d'une animation

En CSS, les animations permettent de créer des transitions fluides et dynamiques sur les propriétés des éléments HTML. Les animations CSS sont définies à l'aide de l'outil `@keyframes`.

Avant toute utilisation d'une animation, elle doit être définie par un nom et ses étapes.
On utilise pour cela la propriété @keyframes qui va permettre de définir le nom de votre animation et ses différentes étapes :

```css
    @keyframes monAnimation {
        …
    }
```

Pour définir ensuite les différentes étapes, il s'agit simplement d'indiquer à quel pourcentage d'avancement de l'animation vous souhaitez appliquer des propriétés à votre élément, puis indiquer les propriétés correspondantes.

```css
    /*
        Ici on va par exemple définir qu'au début de l'animation, le texte de notre élément est bleu, puis au milieu de l'animation il est rouge pour finir vert.
        0% étant le début, 50% le milieu et 100% la fin de l'animation.
    */

    @keyframes monAnimation {
        0% {
            color: #337AB7; // Bleu
        }
        50% {
            color: #D9534F; // Rouge
        }
        100% {
            color: #5CB85C; // Vert
        }
    }
```

Si on ne voulait que 2 étapes à la manière d'une transition, il existe également 2 mots clés plutôt que `0%/100%` : from et to.

C'est particulièrement utile dans le cas où vous souhaitez agir sur plusieurs propriétés en même temps. Vous avez alors une méthode plus structurée que la transition.

```css
    @keyframes monAnimation {
        from {
            color: #337AB7; // Bleu
        }
        to {
            color: #5CB85C; // Vert
        }
    }
```

### Appliquer l'animation

Une fois votre animation définie, il ne vous reste plus qu'à l'appliquer sur l'élément en question.
Pour cela, une propriété : animation-name, à laquelle il faut ajouter la durée via animation-duration.

```css
    .monLien {
        animation-name: monAnimation;
        animation-duration: 3s;
    }
```

### Configuration de l'animation

De la même façon que les transitions (et même plus encore), il est possible de configurer certaines options de l'animation :
  • `animation-delay` — pour démarrer l'animation après un certain temps
  • `animation-direction` — pour définir le sens de l'animation (du début à la fin, inversé, alterné, etc.)
  • `animation-iteration-count` — le nombre de fois que doit se jouer l'animation (de 1 à l'infini)
  • `animation-play-state` — pour mettre en pause et reprendre l'animation (au survol par exemple)
  • `animation-timing-function` — la fonction d'animation à utiliser pour calculer les valeurs des étapes de l'animation
  • `animation-fill-mode` — défini quelles valeurs doit conserver l'élément avant et après l'animation

```css
    .monLien {
        animation-name: monAnimation;
        animation-delay: 1s;
        animation-duration: 3s;
        animation-iteration-count: 3;
        animation-direction: alternate;
        animation-fill-mode: forwards;
    }
    /*
        Ici, notre animation va se jouer 
        + après 1 seconde d'attente,
        + pendant 3 secondes,
        + 3 fois de suite,
        + en alternant début-fin/fin-début,
        + et laissera appliquées les propriétés de la dernière étape de l'animation à la fin de celle-ci.
    */
```

### Les évènements JavaScript

De la même manière que pour les transitions, le navigateur déclenche des évènements sur l'élément au début, pendant et la fin de l'animation.

```js
    var lien = document.getElementById("monLien");
    lien.addEventListener("animationstart", listener, false);
    lien.addEventListener("animationend", listener, false);
    lien.addEventListener("animationiteration", listener, false);

    function listener(e) {
        console.log(
            e.type, // animationstart, animationend ou animationiteration
            e.animationName, // le nom de l'animation CSS exécutée
            e.elapsedTime // le temps écoulé
        );
    }
```

## La propriété transform

Les transformations CSS sont à la fois puissantes, variées et complexes. En effet, elles permettent d'appliquer un grand nombre d'effets divers et variés à vos éléments, mais compliquent parfois la mise en page.
Les transformations permettent aussi bien d'agir en 2D qu'en 3D sur votre élément.

Pour appliquer une transformation, le mot clé à utiliser est transform, auquel vous passez la fonction de transformation à appliquer avec sa valeur.
Si l'on veut par exemple appliquer un zoom 2x à un élément, on utilisera :

```css
    .myElement {
        transform: scale(2);
    }
```

### Les différentes fonctions

Il existe un grand nombre de fonctions de transformation applicables :

```css
    .myElement {
        transform: translate(12px, 50%);                 // Déplace l'élément en horizontalement et verticalement
        transform: translateX(2em);                      // Déplace l'élément horizontalement uniquement
        transform: translateY(3in);                      // Déplace l'élément verticalement uniquement
        transform: scale(2, 0.5);                        // Modifie le zoom horizontal et vertical de l'élément (ou des deux si une seule valeur)
        transform: scaleX(2);                            // Modifie le zoom horizontal uniquement
        transform: scaleY(0.5);                          // Modifie le zoom vertical uniquement
        transform: rotate(0.5turn);                      // Applique une rotation à 180° = 180deg
        transform: skew(30deg, 20deg);                   // Permet d'obliquer l'élément horizontalement et verticalement
        transform: skewX(30deg);                         // Permet d'obliquer l'élément horizontalement uniquement
        transform: skewY(1.07rad);                       // Permet d'obliquer l'élément verticalement uniquement
        transform: matrix(1.0, 2.0, 3.0, 4.0, 5.0, 6.0); // Déforme l'élément selon une matrice de données
        /*
        Toutes les autres propriétés sont équivalentes aux précédentes mais s'appliquent en 3D et non en 2D
         */
        transform: matrix3d(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0);
        transform: translate3d(12px, 50%, 3em);
        transform: translateZ(2px);
        transform: scale3d(2.5, 1.2, 0.3);
        transform: scaleZ(0.3);
        transform: rotate3d(1, 2.0, 3.0, 10deg);
        transform: rotateX(10deg);
        transform: rotateY(10deg);
        transform: rotateZ(10deg);
        transform: perspective(17px);
    }
```

### La configuration

Comme les transitions et animations, les transformations possèdent d'autres propriétés permettant d'ajuster la façon dont sont appliquées celles-ci :

- `transform-origin` — permet de modifier le point d'origine du repère utilisé par la transformation
- `transform-style` — dans le cas d'une transformation 3D, permet d'indiquer si les éléments enfants sont dans un plan 3D distinct ou aplatis dans le plan de l'élément sur lequel est appliqué la transformation
- `transform-box` — défini à quel type de box s'applique la transformation (similaire à box-sizing mais pour les transformations)
- `perspective` — permet d'ajuster la dimension de la perspective dans le cas d'une transformation dans un plan 3D
- `perspective-origin` — permet de définir le point d'origine de la perspective (par défaut il s'agit du centre de l'élément)
- `backface-visibility` — permet de définir si la vue arrière d'un élément doit être visible comme dans un miroir si le cas se présente (dans une rotation 3D par exemple, comme une carte)

#### Exemple

L'un des exemples les plus faciles d'utilisation poussée des transformations (couplée aux transitions) est le cas d'une carte qui se retourne.

```html
    <div class="card-container">
        <div class="card">
            <div class="card-front">
                face avant
            </div>
            <div class="card-back">
                face arrière
            </div>
        </div>
    </div>
```

```css
.card-container, .card-front, .card-back {
        width  : 320px;
        height : 427px;
    }
    .card-container {
        perspective     : 1000px;
        transform-style : preserve-3d;
        border          : 1px solid #ccc;
    }
    .card {    
        transition              : 0.6s;
        transform-style         : preserve-3d;
        position                : relative;
    }
    .card-front, .card-back {
        -webkit-backface-visibility : hidden;
        backface-visibility         : hidden;
        transition                  : 0.6s;
        transform-style             : preserve-3d;
        transform                   : rotateY(0deg);
        position                    : absolute;
        top                         : 0;
        left                        : 0;
    }
    .card-front {
        background : lightgreen;
        z-index    : 2;
        transform  : rotateY(0deg);
    }
    .card-back {
        background : lightblue;
        transform  : rotateY(-180deg);
    }
    .card-container:hover .card-front {
        transform : rotateY(180deg);
    }
    .card-container:hover .card-back {
        transform : rotateY(0deg);
    }
```




**Création d'Animations avec @keyframes :**

Les animations CSS sont définies en utilisant la règle `@keyframes`. Cette règle permet de spécifier comment une animation doit progresser à travers différentes étapes.

Voici un exemple simple de définition d'une animation pour faire bouger un élément d'un côté à l'autre :

```css
@keyframes deplacement {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(200px);
  }
  100% {
    transform: translateX(0);
  }
}
```