# Composants avec slots

Les slots sont une fonctionnalité puissante de Vue.js qui permettent de créer des composants plus flexibles et réutilisables en passant du contenu dynamique à l'intérieur d'un composant. Les slots permettent d'injecter du contenu dans un composant enfant depuis son composant parent, ce qui offre une grande flexibilité dans la manière dont le contenu est structuré et affiché.

## Utilisation des Slots

Les slots sont définis dans le template d'un composant en utilisant la balise `<slot>`. Dans le composant parent, vous pouvez placer du contenu à l'intérieur du slot en utilisant la syntaxe `<template v-slot:nomDuSlot>` ou simplement en utilisant la syntaxe raccourcie `#nomDuSlot`.

Exemple de définition de slots dans un composant enfant (`ChildComponent.vue`) :

```vue
<template>
  <div>
    <h2>Titre du Composant</h2>
    <slot></slot>
  </div>
</template>
```

Dans cet exemple, nous avons défini un slot sans nom à l'intérieur du composant enfant. Ce slot peut contenir n'importe quel contenu que le composant parent souhaite injecter.

## Utilisation des Slots dans le Composant Parent

Dans le composant parent, vous pouvez placer du contenu à l'intérieur du slot en utilisant la syntaxe `<template v-slot:nomDuSlot>` ou `#nomDuSlot`.

Exemple d'utilisation des slots dans le composant parent :

```vue
<template>
  <div>
    <ChildComponent>
      <template #default>
        <p>Contenu du slot dans le composant parent</p>
      </template>
    </ChildComponent>
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue';

export default {
  components: {
    ChildComponent
  }
};
</script>
```

Dans cet exemple, nous avons utilisé le slot par défaut du composant enfant (`<template #default>`) pour placer du contenu à l'intérieur du composant enfant à l'endroit où le slot est défini.

## Slots Nommés

Vous pouvez également définir des slots nommés dans un composant en utilisant la syntaxe `<slot name="nomDuSlot">` dans le template du composant enfant, et en utilisant la syntaxe `<template v-slot:nomDuSlot>` ou `#nomDuSlot` dans le composant parent pour placer du contenu dans le slot nommé.

Exemple de slots nommés dans un composant enfant :

```vue
<template>
  <div>
    <h2>Composant avec Slots Nommés</h2>
    <slot name="header"></slot>
    <slot name="content"></slot>
  </div>
</template>
```

Exemple d'utilisation des slots nommés dans le composant parent :

```vue
<template>
  <div>
    <ChildComponent>
      <template v-slot:header>
        <h3>Titre du Slot Nommé</h3>
      </template>
      <template v-slot:content>
        <p>Contenu du Slot Nommé</p>
      </template>
    </ChildComponent>
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue';

export default {
  components: {
    ChildComponent
  }
};
</script>
```

> On peut aussi utiliser les sortnames en raccourcis : `<template #header></template>` `<template #content></template>`.

```vue
<template>
  <div>
    <ChildComponent>
      <template #header>
        <h3>Titre du Slot Nommé</h3>
      </template>
      <template #content>
        <p>Contenu du Slot Nommé</p>
      </template>
    </ChildComponent>
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue';

export default {
  components: {
    ChildComponent
  }
};
</script>
```

## Utilisation Avancée des Slots

Vous pouvez également utiliser des slots avec des propriétés dynamiques et des données calculées, ce qui les rend très flexibles et puissants pour créer des composants réutilisables et modulaires.

## Conclusion

Les slots sont une fonctionnalité puissante de Vue.js qui permettent de créer des composants flexibles et réutilisables en passant du contenu dynamique à l'intérieur d'un composant. En utilisant des slots, vous pouvez créer des composants qui peuvent être personnalisés et configurés de manière flexible par leurs utilisateurs, ce qui améliore la réutilisabilité et la maintenabilité de votre code.