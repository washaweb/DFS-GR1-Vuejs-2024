# Gestion des événements en VueJs

Dans Vue.js, les événements permettent de gérer les interactions de l'utilisateur avec l'interface utilisateur et d'effectuer des actions en réponse à ces interactions.

## Gestion des Événements dans les Templates

Dans les templates Vue.js, vous pouvez utiliser la directive `v-on` (ou son raccourci `@`) pour écouter les événements DOM et appeler des méthodes en réponse à ces événements.

Exemple :

```js
  <button @click="handleClick">Cliquez ici</button>
```

Dans cet exemple, nous utilisons `@click` pour écouter l'événement de clic sur le bouton et appeler la méthode `handleClick` lorsque cet événement se produit.

## Méthodes d'Événement

Les méthodes d'événement sont des fonctions définies dans l'option `methods` d'un composant Vue.js. Elles sont appelées en réponse à des événements déclenchés dans le template.

Exemple :

```js
  export default {
    methods: {
      handleClick() {
        console.log('Bouton cliqué!');
      }
    }
  };
```

Dans cet exemple, `handleClick` est une méthode du composant qui sera appelée lorsque l'événement de clic se produit sur le bouton.

### Passage d'Arguments aux Méthodes d'Événement

Vous pouvez également passer des arguments aux méthodes d'événement en utilisant la syntaxe `v-on` suivie d'une expression JavaScript.

Exemple :

```html
<button @click="handleClick('argument')">Cliquez ici</button>
```

```javascript
export default {
  methods: {
    handleClick(argument) {
      console.log('Bouton cliqué avec argument:', argument);
    }
  }
};
```

Dans cet exemple, lorsque le bouton est cliqué, la méthode `handleClick` est appelée avec l'argument `'argument'`.

## Modificateurs d'Événements

Vue.js fournit également des modificateurs d'événements pour faciliter la gestion des événements. Par exemple, vous pouvez utiliser `.prevent` pour appeler `event.preventDefault()` ou `.stop` pour appeler `event.stopPropagation()`.

Exemple :

```html
<form @submit.prevent="handleSubmit">
  <!-- Contenu du formulaire -->
</form>
```

Dans cet exemple, `@submit.prevent` écoute l'événement de soumission du formulaire et empêche le comportement par défaut du navigateur en appelant `event.preventDefault()`.

### différents modificateurs d'événements

Vue.js propose plusieurs modificateurs d'événements pour faciliter la gestion des événements dans les templates.

1. `.stop` : Appelle `event.stopPropagation()` pour arrêter la propagation de l'événement.
2. `.prevent` : Appelle `event.preventDefault()` pour annuler le comportement par défaut de l'événement.
3. `.capture` : Utilise la phase de capture de l'événement au lieu de la phase de propagation.
4. `.self` : Ne déclenche l'événement que si l'élément cible est l'élément sur lequel l'écouteur d'événement est attaché.
5. `.once` : Attache l'écouteur d'événement qui sera automatiquement retiré après sa première invocation.
6. `.passive` : Indique au navigateur que l'écouteur d'événement ne va pas appeler `event.preventDefault()`.
7. `.native` : Écoute un événement natif sur l'élément racine au lieu de l'élément virtuel généré par Vue.js.
8. `.left` : Écoute uniquement les clics de souris gauche.
9. `.right` : Écoute uniquement les clics de souris droit.
10. `.middle` : Écoute uniquement les clics de souris du bouton central.

Vous pouvez utiliser ces modificateurs en les ajoutant à la suite de l'écouteur d'événement dans un template Vue.js. Par exemple :

```html
<button @click.stop.prevent="handleClick">Cliquez ici</button>
```

Dans cet exemple, `@click.stop.prevent` utilise à la fois les modificateurs `.stop` et `.prevent` pour arrêter la propagation de l'événement et annuler son comportement par défaut.

## Évènements clavier

Dans Vue.js, vous pouvez écouter les événements clavier et utiliser des modificateurs pour faciliter leur gestion. Voici une explication des événements clavier couramment utilisés et des modificateurs disponibles :

### Écoute des Événements Clavier

Pour écouter les événements clavier dans Vue.js, vous pouvez utiliser les directives `v-on` ou `@` suivies du nom de l'événement clavier (par exemple, `keydown`, `keyup`, `keypress`). Vous pouvez également passer des modificateurs pour spécifier des touches spécifiques.

Exemple :

```html
<input @keydown="handleKeyDown">
```

Dans cet exemple, nous écoutons l'événement `keydown` sur un élément `input` et appelons la méthode `handleKeyDown` lorsque l'événement se produit.

### Modificateurs d'Événements Clavier

Vue.js propose plusieurs modificateurs pour faciliter la gestion des événements clavier :

1. `.enter` : Appelle la méthode lorsqu'une touche "Entrée" est enfoncée.
2. `.tab` : Appelle la méthode lorsqu'une touche "Tabulation" est enfoncée.
3. `.delete` : Appelle la méthode lorsqu'une touche "Supprimer" est enfoncée.
4. `.esc` : Appelle la méthode lorsqu'une touche "Échap" est enfoncée.
5. `.space` : Appelle la méthode lorsqu'une touche "Espace" est enfoncée.
6. `.up` : Appelle la méthode lorsqu'une touche de flèche "Haut" est enfoncée.
7. `.down` : Appelle la méthode lorsqu'une touche de flèche "Bas" est enfoncée.
8. `.left` : Appelle la méthode lorsqu'une touche de flèche "Gauche" est enfoncée.
9. `.right` : Appelle la méthode lorsqu'une touche de flèche "Droite" est enfoncée.

Vous pouvez combiner ces modificateurs avec d'autres touches en les ajoutant après l'événement clavier. Par exemple :

```html
<input @keydown.enter="handleSubmit">
```

Dans cet exemple, la méthode `handleSubmit` sera appelée lorsque la touche "Entrée" est enfoncée dans l'élément `input`.

### Gestion des Autres Touches

Pour écouter des événements clavier pour d'autres touches que celles fournies par les modificateurs, vous pouvez utiliser les codes de touche (keyCode) ou les touches de caractères (key). Vous pouvez accéder à ces informations via l'objet `event` passé à votre méthode d'événement.

Exemple :

```html
<input @keydown="handleKeyDown">
```

```javascript
methods: {
  handleKeyDown(event) {
    if (event.key === 'Escape') {
      // Gérer l'événement d'appui sur la touche "Échap"
    }
  }
}
```

Dans cet exemple, nous utilisons `event.key` pour vérifier si la touche appuyée est "Escape" (Échap), et nous gérons l'événement en conséquence.