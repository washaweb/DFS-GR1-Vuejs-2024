# Les composants

Les composants sont des éléments essentiels de l'architecture de Vue.js. Ils permettent de découper une application en morceaux réutilisables et modulaires, ce qui facilite la gestion et la maintenance du code. Un composant Vue est une instance réutilisable qui encapsule à la fois le HTML, le CSS et le JavaScript nécessaires pour rendre une partie spécifique de l'interface utilisateur. 

En Applicant ainsi le principe DRY (Don't Repeat Yourself), nous pouvons alors répartir la logique de notre application dans plusieurs fichiers indépentants capable de communiquer entre eux et bénéficiant chacun de leur propre logique isolée du reste.

Un composant Vue doit être importé et déclaré afin que Vue sache où localiser son cpde lorsqu'il est rencontré dans un template. Il existe deux façons d'enregistrer les composants : globale et locale.

## Inclure des Composants

- import au niveau d'une vue ou d'un autre composant

  ```js
    // exemple d'import d'un composant
    <script>
      import ComponentA from './ComponentA.vue'

      export default {
        components: {
          ComponentA
        }
      }
    </script>

    <template>
      <ComponentA />
    </template>
  ```

- import global à l'application: `src/main.js`

  ```js
    import MyComponent from './App.vue'
    //doit être placé après `const app = createApp(App)`
    app.component('MyComponent', MyComponent)
  ```

Voir la doc officielle ici :

> https://vuejs.org/guide/components/registration.html

## Créer de Nouveaux Composants

Pour créer un nouveau composant, vous devez créer un fichier `.vue` qui contient le code HTML, CSS et JavaScript du composant. Un fichier `.vue` est composé de trois sections : `<template>` pour le HTML, `<script>` pour le JavaScript, et `<style>` pour le CSS.

Exemple de structure d'un fichier `.vue` :

```js
<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ content }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Mon Premier Composant',
      content: 'Bienvenue dans le monde des composants Vue!'
    };
  }
};
</script>

<style scoped>
h1 {
  color: blue;
}
</style>
```

Dans cet exemple, nous avons créé un composant simple avec un titre et un contenu. Nous utilisons la syntaxe de liaison (`{{ }}`) pour afficher les données du composant dans le HTML. Le JavaScript du composant est défini dans la section `<script>`, où nous avons défini les données initiales du composant. Le CSS du composant est défini dans la section `<style>`, et l'attribut `scoped` garantit que les styles ne s'appliquent qu'au composant actuel.

### Utilisation des Composants

Une fois que vous avez créé un nouveau composant, vous pouvez l'utiliser dans d'autres composants en l'incluant à l'aide de sa balise personnalisée, comme décrit précédemment.
