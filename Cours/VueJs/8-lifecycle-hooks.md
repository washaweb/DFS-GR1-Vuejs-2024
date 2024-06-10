# "Crochets" de cycles de vie ou Lifecycle hooks

Chaque instance de composant Vue passe par une série d'étapes d'initialisation lorsqu'elle est créée.
Par exemple, elle doit mettre en place l'observation des données, compiler le modèle, monter l'instance dans le DOM et mettre à jour le DOM lorsque les données changent.

En cours de route, Vuejs exécute également des fonctions appelées crochets (`Hooks`) de cycle de vie, qui permettent aux utilisateurs d'ajouter leur propre code à des étapes spécifiques.

![Illustration du livecycle de vue](./links/lifecycle.png)

## `created`

Le hook `created` est appelé une fois que l'instance du composant est créée. À ce stade, les données du composant sont initialisées, mais le DOM n'est pas encore créé.

Exemple :

```javascript
export default {
  created() {
    console.log('Le composant est créé.');
  }
};
```

## `mounted`

Le hook `mounted` est appelé une fois que le composant est attaché au DOM. À ce stade, le composant a accès au DOM et vous pouvez interagir avec les éléments de l'interface utilisateur.

Exemple :

```javascript
export default {
  mounted() {
    console.log('Le composant est attaché au DOM.');
  }
};
```

## `updated`

Le hook `updated` est appelé chaque fois que les données du composant sont mises à jour et que le DOM est re-rendu pour refléter ces changements.

Exemple :

```javascript
export default {
  updated() {
    console.log('Les données du composant sont mises à jour.');
  }
};
```

## `beforeDestroy`

Le hook `beforeDestroy` est appelé juste avant que le composant soit détruit. À ce stade, le composant est toujours pleinement fonctionnel.

Exemple :

```javascript
export default {
  beforeDestroy() {
    console.log('Le composant est sur le point d\'être détruit.');
  }
};
```

## `destroyed`

Le hook `destroyed` est appelé une fois que le composant a été complètement détruit. À ce stade, le composant n'est plus disponible et toutes ses instances ont été supprimées.

Exemple :

```javascript
export default {
  destroyed() {
    console.log('Le composant est complètement détruit.');
  }
};
```

## Utilisation des Lifecycle Hooks dans un Composant

Voici un exemple complet montrant l'utilisation de tous les hooks de cycle de vie dans un composant Vue :

```javascript
export default {
  data() {
    return {
      message: 'Hello, Vue!'
    };
  },
  created() {
    console.log('Le composant est créé.');
  },
  mounted() {
    console.log('Le composant est attaché au DOM.');
  },
  updated() {
    console.log('Les données du composant sont mises à jour.');
  },
  beforeDestroy() {
    console.log('Le composant est sur le point d\'être détruit.');
  },
  destroyed() {
    console.log('Le composant est complètement détruit.');
  }
};
```

Dans cet exemple, nous avons un composant avec des méthodes pour chaque hook de cycle de vie, et chaque méthode imprime un message dans la console à l'étape correspondante du cycle de vie du composant. Cela peut être utile pour déboguer et comprendre le comportement de votre composant à différentes étapes de son cycle de vie.
