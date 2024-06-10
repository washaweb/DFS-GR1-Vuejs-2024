# Les couleurs

Dans Bootstrap, les **classes de couleur** sont un ensemble de classes prédéfinies qui permettent de définir rapidement et facilement les couleurs des textes, des bordures et des arrière-plans dans vos projets web. Ces classes sont conçues pour simplifier le processus de stylisation en offrant une palette de couleurs cohérente et esthétique. 

## 1. Classes de couleur pour les textes

Bootstrap offre plusieurs classes pour définir la couleur du texte. Les classes commencent généralement par `text-`, suivies de la couleur spécifique que vous souhaitez utiliser. Voici quelques exemples :

- `.text-primary` : Texte de couleur primaire.
- `.text-secondary` : Texte de couleur secondaire.
- `.text-success` : Texte de couleur verte pour indiquer le succès.
- `.text-danger` : Texte de couleur rouge pour indiquer un danger.
- `.text-warning` : Texte de couleur jaune pour indiquer un avertissement.
- `.text-info` : Texte de couleur bleue pour fournir des informations.
- `.text-light` : Texte de couleur claire.
- `.text-dark` : Texte de couleur foncée.
- `.text-body` : Texte de couleur du body.
- `.text-body-secondary` : Texte de couleur du body secondaire.
- `.text-body-tertiary` : Texte de couleur du body tertiaire.
- `.text-black` : Texte de couleur noire.
- `.text-white` : Texte de couleur blanche.

Il existe aussi des variantes avec le mot clé `emphasis`

- `.text-primary-emphasis` : Texte de couleur primaire avec emphase.
- `.text-secondary-emphasis` : Texte de couleur secondaire avec emphase.
- `.text-success-emphasis` : Texte de couleur verte avec emphase.
- `.text-danger-emphasis` : Texte de couleur rouge avec emphase.
- `.text-warning-emphasis` : Texte de couleur jaune avec emphase.
- `.text-info-emphasis` : Texte de couleur bleue avec emphase.
- `.text-light-emphasis` : Texte de couleur claire avec emphase.
- `.text-dark-emphasis` : Texte de couleur foncée avec emphase.

**Exemple :**

```html
<p class="text-primary">Texte de couleur primaire</p>
<p class="text-danger">Texte de couleur rouge pour indiquer un danger</p>
```

## 2. Classes de couleur pour les bordures

Pour définir la couleur des bordures, vous pouvez utiliser les classes de couleur suivantes :

- `.border-primary` : Bordure de couleur primaire.
- `.border-secondary` : Bordure de couleur secondaire.
- `.border-success` : Bordure de couleur verte.
- `.border-danger` : Bordure de couleur rouge.
- `.border-warning` : Bordure de couleur jaune.
- `.border-info` : Bordure de couleur bleue.
- `.border-light` : Bordure de couleur claire.
- `.border-dark` : Bordure de couleur foncée.

Pour définir l'épaisseur d'une bordure, vous pouvez utiliser des classes additives ou soustractives :

```html
<!--bordures aditives --> 
<span class="border"></span>
<span class="border-top"></span>
<span class="border-end"></span>
<span class="border-bottom"></span>
<span class="border-start"></span>

<!--bordures soustractives --> 
<span class="border border-0"></span>
<span class="border border-top-0"></span>
<span class="border border-end-0"></span>
<span class="border border-bottom-0"></span>
<span class="border border-start-0"></span>
```
Au final, il faudra utiliser une combinaisons de classes pour obtenir des bourdures avec des couleurs différentes.

**Exemple :**

```html
<div class="border border-primary">Bordure de couleur primaire</div>
<div class="border-top border-danger">Bordure de couleur rouge (seulement la bordure haute)</div>
```

## 3. Classes de couleur pour les arrière-plans

Pour définir la couleur de fond d'un élément, vous pouvez utiliser les classes de couleur suivantes :

- `.bg-primary` : Arrière-plan de couleur primaire.
- `.bg-secondary` : Arrière-plan de couleur secondaire.
- `.bg-success` : Arrière-plan de couleur verte.
- `.bg-danger` : Arrière-plan de couleur rouge.
- `.bg-warning` : Arrière-plan de couleur jaune.
- `.bg-info` : Arrière-plan de couleur bleue.
- `.bg-light` : Arrière-plan de couleur claire.
- `.bg-dark` : Arrière-plan de couleur foncée.
- `.bg-body-secondary` : Arrière-plan de couleur du body secondaire.
- `.bg-body-tertiary` : Arrière-plan de couleur du body tertiaire.
- `.bg-body` : Arrière-plan de couleur du body.
- `.bg-black` : Arrière-plan noir.
- `.bg-white` : Arrière-plan blanc.
- `.bg-transparent` : Arrière-plan transparent.

Il existe aussi des variantes avec `subtle` pour des couleurs plus pasteles :

- `.bg-primary-subtle` : Arrière-plan de couleur primaire subtile.
- `.bg-secondary-subtle` : Arrière-plan de couleur secondaire subtile.
- `.bg-success-subtle` : Arrière-plan de couleur verte subtile.
- `.bg-danger-subtle` : Arrière-plan de couleur rouge subtile.
- `.bg-warning-subtle` : Arrière-plan de couleur jaune subtile.
- `.bg-info-subtle` : Arrière-plan de couleur bleue subtile.
- `.bg-light-subtle` : Arrière-plan de couleur claire subtile.
- `.bg-dark-subtle` : Arrière-plan de couleur foncée subtile.


**Exemple :**

```html
<div class="bg-primary text-light">Arrière-plan de couleur primaire</div>
<div class="bg-danger text-light">Arrière-plan de couleur rouge</div>
```

En utilisant ces classes de couleur, vous pouvez rapidement styliser vos textes, bordures et arrière-plans dans vos projets Bootstrap, en garantissant une cohérence visuelle et une esthétique agréable.

- - https://getbootstrap.com/docs/5.3/utilities/colors/

Toutes ces couleurs peuvent bien-sûr être personnalisées en utilisant les variables CSS / SASS de bootstrap, ou des sites de personnalisation dédiés, voir la documentation ici :

- https://getbootstrap.com/docs/5.3/customize/overview/
- https://getbootstrap.com/docs/5.3/customize/color/
- https://bootstrap.build/app
