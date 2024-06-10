# Vue la syntaxe des templates

Vue.js est un framework JavaScript populaire qui facilite le développement d'interfaces utilisateur interactives et réactives. Il existe des librairies JavaScript populaires qui vous permettent de créer des interfaces utilisateur interactives, mais ces librairies sont souvent limitées et ne prennent pas en charge les fonctionnalités avancées de Vue.js telles que les composants, les directives et les transitions.

Voici un résumé des principaux atous de vue :

## La Réactivité dans Vue.js

1. **Propriétés Réactives**:
   - Dans Vue.js, les données qui doivent être réactives sont encapsulées dans des objets spéciaux appelés instances de Vue.
   - Lorsque les données changent, l'interface utilisateur est automatiquement mise à jour pour refléter ces changements.

2. **Détection des Changements**:
   - Vue.js utilise une méthode efficace appelée "réactivité basée sur les dépendances" pour détecter quand les données changent.
   - Lorsqu'une propriété réactive est modifiée, Vue.js sait quelles parties de l'interface utilisateur doivent être mises à jour en fonction des dépendances établies.

3. **Mise à Jour Réactive de l'Interface Utilisateur**:
   - Lorsque les données changent, Vue.js met à jour l'interface utilisateur de manière efficace et automatique, sans nécessiter de manipulation manuelle du DOM.

## Syntaxe des Templates Vue.js

Les templates sont des fichiers HTML qui contiennent des balises et des expressions JavaScript. Dans un fichier .vue on incorpore à la fois le code du template, des script et des css du composant. Un composant est appelé 'one file component', car il contient tout ce qui sert à son fonctionnement dans un seul fichier. Il est ainsi plus facile d'organiser la logique séparée dans chaque composant.

### Syntaxe de base d'un fichier .vue

```js
<template>
  <div>
    ici le code html du composant
  </div>
</template>

<script>
/* ici le controleur, çad la logique */
export default {

}
</script>

<style>
  /* ici le style css*/
</style>
```

## Syntaxe du language de template

1. **Directives**:
   - Les directives sont des attributs spéciaux préfixés par `v-` qui indiquent à Vue.js de faire quelque chose avec l'élément DOM auquel ils sont attachés.
   - Exemples de directives : `v-bind`, `v-if`, `v-for`, `v-on`, etc.

2. **Expressions et Interpolation**:
   - Les expressions Vue.js sont des morceaux de code JavaScript qui sont évalués et affichés dans le template.
   - L'interpolation est une syntaxe de Vue.js qui permet d'insérer des expressions dans le HTML en les entourant de doubles accolades `{{ }}`.

   Exemple :

   ```js
   <p>{{ message }}</p>
   ```

3. **Boucles et Conditions**:
   - Vue.js permet l'utilisation de structures de contrôle telles que `v-for` pour répéter des éléments et `v-if` pour afficher des éléments conditionnellement.

   Exemple :

   ```js
    <ul>
      <li v-for="item in items">{{ item }}</li>
    </ul>

    <p v-if="isVisible">Ceci est visible (rendu dans le code) si isVisible est vrai</p>
    <p v-show="isHidden">Ceci est masqué (rendu avec display: none) si isHidden est vrai</p>
   ```

4. **Événements**:
   - Les événements Vue.js sont gérés à l'aide de la directive `v-on` ou `@`.
   - Vous pouvez écouter des événements DOM intégrés ou créer des événements personnalisés.

   Exemple :

   ```js
    <button v-on:click="handleClick">Cliquez ici</button>
   ```

   On peut aussi écrire :

   ```js
    <button @click="handleClick">Cliquez ici</button>
   ```
   