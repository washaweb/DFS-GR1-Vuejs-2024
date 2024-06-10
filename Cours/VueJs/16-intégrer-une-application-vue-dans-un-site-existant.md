# Build d'application

Vue permet de builder son application avec des lignes de commandes :

```sh
  npm run build
```

Le builder crée alors un dossier `dist` dans lequel tous les fichiers nécessaire au fonctionnement de l'application sont ajoutés et versionnés.
Il suffit alors de publier ce dossier sur un serveur et votre site est en ligne.

## Intégration dans un site existant

Il arrive aussi que vous souhaitiez intégrer votre code dans un site existant qui n'est pas intégralement fait en vuejs.
Intégrer une application Vue.js dans un site web existant peut se faire de plusieurs manières, en fonction de vos besoins et de la structure de votre site. Voici quelques méthodes courantes pour intégrer une application Vue.js dans un site existant :

### Méthode 1 : Intégration via un fichier JavaScript externe

1. **Compiler votre application Vue.js**: Compilez votre application Vue.js en un seul fichier JavaScript à l'aide de Webpack ou Vite ou un autre outil de build. `npm run build`.
2. **Inclure le fichier JavaScript dans votre site**: Ajoutez une balise `<script>` dans votre site existant pour inclure le fichier JavaScript de votre application Vue.js.
  Exemple :

  ```html
    <script src="path/to/your/vue-app.js"></script>
  ```

3. **Définir un point d'ancrage pour votre application**: Ajoutez un élément HTML (par exemple une div) dans votre site où vous souhaitez que votre application Vue.js soit rendue.

Exemple :
```html
  <div id="vue-app"></div>
```

4. **Initialiser votre application Vue.js**: Utilisez le point d'ancrage que vous avez défini pour monter votre application Vue.js.

  Exemple :
  ```javascript
  import { createApp } from 'vue';
  import App from './App.vue';

  const app = createApp(App);
  app.mount('#vue-app'); //<-- ici bien indiquer le point d'ancrage choisi
  ```

### Méthode 2 : Intégration via un iframe

1. **Compiler votre application Vue.js**: Compilez votre application Vue.js en un seul fichier JavaScript à l'aide de Webpack, Vue CLI ou un autre outil de build.
2. **Déployer votre application sur un serveur**: Mettez votre application Vue.js déployée sur un serveur accessible en ligne.
3. **Utiliser un iframe dans votre site existant**: Intégrez votre application Vue.js dans votre site existant en utilisant un élément `<iframe>`.
  Exemple :

  ```html
  <iframe src="http://url-de-votre-application-vue" width="600" height="400" frameborder="0"></iframe>
  ```

### Méthode 3 : Intégration via les composants Vue.js

1. **Isoler les composants Vue.js**: Identifiez les parties de votre site web existant qui pourraient bénéficier de l'utilisation de composants Vue.js.
2. **Créer des composants Vue.js**: Créez des composants Vue.js pour ces parties de votre site et compilez-les en fichiers JavaScript individuels.
3. **Inclure les composants Vue.js dans votre site**: Incluez les fichiers JavaScript de vos composants Vue.js dans votre site existant et utilisez-les comme des éléments HTML normaux.

  Exemple :

  ```html
    <script src="path/to/your/vue-component.js"></script>
    <vue-component></vue-component>
  ```

### Méthode 4 : Intégration via un CDN

1. **Utiliser un CDN pour Vue.js**: Utilisez un CDN (Content Delivery Network) pour charger Vue.js directement dans votre site existant.
2. **Définir un point d'ancrage pour votre application**: Ajoutez un élément HTML (par exemple une div) dans votre site où vous souhaitez que votre application Vue.js soit rendue.
  Exemple :

  ```html
    <div id="vue-app"></div>
  ```

3. **Initialiser votre application Vue.js**: Utilisez le point d'ancrage que vous avez défini pour monter votre application Vue.js.
  Exemple :

  ```javascript
  import { createApp } from 'vue';
  import App from './App.vue';

  const app = createApp(App);
  app.mount('#vue-app');
  ```