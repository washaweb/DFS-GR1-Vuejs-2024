# Evenenemts de formulaires

Les "input bindings" (ou liaisons d'entrée) dans Vue.js permettent de lier dynamiquement les valeurs des éléments de formulaire à des données dans votre application Vue. Cela permet de créer des interfaces utilisateur réactives où les changements dans les champs de formulaire sont automatiquement reflétés dans les données et vice versa.

## Liaison de Valeur avec `v-model`

La manière la plus courante de mettre en œuvre les input bindings est d'utiliser la directive `v-model`. Cette directive crée un lien bidirectionnel entre la valeur de l'élément de formulaire et les données dans votre composant Vue.

Exemple :

```html
<input type="text" v-model="message"><br>
Voici votre message: {{ message }}

```

Dans cet exemple, `message` est une propriété de données dans votre composant Vue. Lorsque l'utilisateur saisit du texte dans l'input, la valeur de `message` est automatiquement mise à jour en conséquence. De même, si vous modifiez la valeur de `message` dans votre composant, l'input sera automatiquement mis à jour pour refléter cette modification.

## Liaison de Valeur avec des Attributs Dynamiques

En plus de `v-model`, vous pouvez également utiliser la syntaxe de liaison d'attribut (`v-bind`) pour lier dynamiquement la valeur d'un élément de formulaire à une propriété de données.

Exemple :

```html
<input type="text" :value="message">
```

Dans cet exemple, `:value` lie la valeur de l'input à la propriété `message` de votre composant Vue. Cependant, contrairement à `v-model`, cela ne crée pas de liaison bidirectionnelle automatique. Vous devrez gérer manuellement les événements de changement pour mettre à jour la propriété `message` en cas de modification de l'input.

## Liaison de Valeur avec des Événements

Pour mettre à jour les données en réponse à des événements de changement sur les éléments de formulaire, vous pouvez écouter les événements correspondants et appeler des méthodes pour mettre à jour les données en conséquence.

Exemple :

```html
<input type="text" :value="message" @input="updateMessage">
```

```javascript
export default {
  data() {
    return {
      message: ''
    };
  },
  methods: {
    updateMessage(event) {
      this.message = event.target.value;
    }
  }
};
```

Dans cet exemple, nous écoutons l'événement `input` sur l'input et appelons la méthode `updateMessage` pour mettre à jour la propriété `message` en conséquence.