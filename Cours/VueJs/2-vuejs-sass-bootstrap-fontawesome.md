# Intégrer sass et bootstrap dans votre app vuejs

Suite de l'étape 1, nous voulons utiliser sass, bootstrap et fontawesome

```sh
  npm install -D sass
  npm install bootstrap 
  npm install @fortawesome/fontawesome-free
```

Nous supprimons les composants créés pour exemple par vue js et remplaçons le `style.css`
par un `style.scss` dans lequel il faut ajouter l'import des css de bootstrap :

```diff
node_modules/
public/
src/
   |- assets
-  |  |- base.css
-  |  |- logo.svg
-  |  |- main.css
+  |  |- _variables.scss
+  |  |- style.scss
   |- components
-  |  |- Icons
-  |  |- HelloWorld.vue
-  |  |- TheWelcome.vue
+- |- App.vue
+- |- main.js
```

Dans le fichier `src/assets/main.scss` nous importons les scss de bootstrap et de fontawesome

```scss
  // import des css de fontawesome
  @import '@fortawesome/fontawesome-free/css/all.css';

  // import de mes propres variables pour bootstrap
  @import './_variables.scss';

  // import des scss de bootstrap
  @import 'bootstrap/scss/bootstrap';

```

Dans le fichier `src/assets/_variables.scss` nous pouvons personnaliser les variables de bootstrap pour créer nos propres styles :

```scss
  $primary: #47bfff;
  $secondary: #829dac;
```

Et mettons à jour le code de `scr/main.js`

```js
import './assets/main.scss'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
```

Ainsi que le code de `scr/App.vue`

```js
<template>
  <main>
    <div class="container">
      <h1 class="my-4">Bienvenue : Vue avec Bootstrap et fontawesome</h1>
      <p class="lead">
        Icône Fontawesome: <br />
        <i class="fa-regular fa-user"></i> <i class="fa-solid fa-lock"></i><br />
        <i class="fa-brands fa-youtube"></i> <i class="fa-brands fa-facebook"></i>
      </p>
      <p>
        <button class="btn btn-primary">I'm Good!</button>
      </p>
      <p>
        <button class="btn btn-secondary">Me too!</button>
      </p>
    </div>
  </main>
</template>

<style lang="scss" scoped>
/* ici les futurs styles du composant écrit avevc du scss */
</style>
```

Tester votre application :

```sh
  npm run dev
```

Le projet se lance alors à l'adresse : `http://localhost:5173/`
