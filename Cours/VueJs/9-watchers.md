# Watchers

Les "watchers" sont une fonctionnalité de Vue.js qui vous permet de surveiller les changements sur une propriété de données spécifique dans un composant Vue et d'exécuter des actions en réponse à ces changements. Les watchers sont utiles lorsque vous avez besoin de réagir à des changements spécifiques dans les données de votre application et d'effectuer des opérations telles que des requêtes AJAX, des calculs complexes ou des modifications de l'interface utilisateur.

Voici comment utiliser les watchers dans un composant Vue :

## Définition d'un Watcher

Vous pouvez définir un watcher dans l'option `watch` de votre composant. Chaque entrée de l'objet `watch` est associée à une propriété de données que vous souhaitez surveiller, et la valeur est une fonction qui sera exécutée chaque fois que la valeur de la propriété change.

Exemple :

```javascript
export default {
  data() {
    return {
      message: '',
      messageLength: 0
    };
  },
  watch: {
    message(newValue, oldValue) {
      this.messageLength = newValue.length;
    }
  }
};
```

Dans cet exemple, nous avons défini un watcher pour la propriété `message`. Chaque fois que la valeur de `message` change, la fonction associée au watcher est appelée avec la nouvelle valeur (`newValue`) et l'ancienne valeur (`oldValue`). Dans ce cas, nous mettons à jour la propriété `messageLength` pour refléter la longueur de la nouvelle valeur de `message`.

## Options de Watcher

Vous pouvez également définir un watcher en utilisant une syntaxe plus avancée en passant un objet à la place d'une fonction. Cela vous permet de définir des options supplémentaires pour le watcher, telles que `immediate` pour exécuter la fonction de watcher immédiatement lors de la création du composant, ou `deep` pour surveiller les changements dans les propriétés imbriquées d'un objet.

Exemple :

```javascript
export default {
  data() {
    return {
      user: {
        name: '',
        age: 0
      }
    };
  },
  watch: {
    'user.name': {
      handler(newValue, oldValue) {
        console.log('Nom de l\'utilisateur changé:', newValue);
      },
      immediate: true,
      deep: true
    }
  }
};
```

Dans cet exemple, nous avons défini un watcher pour la propriété `user.name`, en spécifiant les options `immediate` et `deep`. Le watcher sera appelé immédiatement lors de la création du composant et surveillera les changements dans les propriétés imbriquées de `user.name`.

## Utilisation des Watchers

Les watchers sont utiles lorsque vous avez besoin de réagir à des changements spécifiques dans les données de votre application et d'effectuer des opérations en réponse à ces changements. Vous pouvez utiliser les watchers pour mettre à jour d'autres données, déclencher des actions, ou même communiquer avec des composants externes ou des services API.
Attention toutefois, l'utilisation systématique de watchers alourdi l'exécution du code, il est souvent préférable d'utiliser des computed propetries à la place.
