# Vue Router les bases

## Server-Side vs Client-Side Routing

Dans un site web classique, nous connections les pages avec des liens. Les liens font des appels au serveur et le serveur nous renvoie la page suivante. Puis nous recommençons en cliquant sur un nouveau lien, vers une autre page.

![server-side routing](./links/server-side-routing.jpg)

Une application de page unique (SPA -> Single Page Application) est définie comme une application Web qui se charge à partir d'une seule page et met à jour dynamiquement cette page lorsque l'utilisateur interagit avec l'application. Cependant, si nous utilisons une application d'une seule page, nous avons besoin d'un moyen de naviguer entre les contenus (routage côté client).

Avec VueJs, et plus généralement dans une SPA, cela qui signifie que le routage se produit dans le navigateur lui-même à l'aide de JavaScript. Notre page Web est chargée à partir d'une seule page `index.html` et nous pouvons utiliser le routage côté client pour présenter dynamiquement différentes vues, selon le lien sur lequel vous cliquez. Souvent, la vue que nous devons afficher a déjà été chargée dans le navigateur, nous n'avons donc pas besoin de contacter le serveur pour cela.

![client-side routing](./links/client-side-routing.jpg)

Vue Router est un router officiellement supporté par Vue.js. Il permet de gérer la navigation dans les applications Vue.js en utilisant une approche basée sur les composants.

## Installation de Vue Router

Pour utiliser Vue Router dans votre projet Vue.js, vous devez d'abord l'installer via npm ou yarn :

```bash
npm install vue-router
```

## Configuration de Vue Router

Une fois installé, vous devez configurer Vue Router dans votre application. Habituellement, cela se fait dans le fichier principal `main.js` de votre projet Vue.js.

Exemple de configuration de Vue Router :

```js
import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

// ici la liste de vos différentes pages sous la forme de composants
import Home from './components/Home.vue';
import About from './components/About.vue';
import Contact from './components/Contact.vue';

// ici on indique la route pour atteindre chaque pages
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');
```

Dans cet exemple, nous avons défini trois routes (`/`, `/about` et `/contact`) avec leur composant correspondant. Ensuite, nous avons créé une instance de router en utilisant `createRouter()` et en lui passant les options de configuration et les routes définies. Enfin, nous avons utilisé `app.use(router)` pour installer le router dans l'application Vue.

## Utilisation de Vue Router dans les Composants

Une fois configuré, vous pouvez utiliser Vue Router dans vos composants en utilisant les composants `router-link` et `router-view`.

Exemple d'utilisation de `router-link` :

```vue
<template>
  <div>
    <router-link to="/">Accueil</router-link>
    <router-link to="/about">À Propos</router-link>
    <router-link to="/contact">Contact</router-link>
    <router-view></router-view>
  </div>
</template>
```

Dans cet exemple, nous utilisons `router-link` pour définir des liens vers différentes routes de l'application. Lorsque l'utilisateur clique sur un lien, Vue Router gère la navigation vers la route correspondante et affiche le composant correspondant dans `router-view`.

## Routage Dynamique

Vue Router prend également en charge le routage dynamique, les paramètres de route, les paramètres de requête, les redirections, les guards de navigation, et bien plus encore. Vous pouvez personnaliser le comportement de la navigation en fonction des besoins spécifiques de votre application.

### Navigation Programmée et Déclarative

Vue Router permet de naviguer dans l'application de manière programmée en utilisant des méthodes comme `push` et `replace`, ainsi que de manière déclarative en utilisant des balises `<router-link>`.

Exemple de navigation programmée :

```js
// Naviguer vers la page d'accueil
  router.push('/');
```

Exemple de navigation déclarative :

```vue
<router-link to="/">Accueil</router-link>
```

#### Gestion des Paramètres

Vue Router permet de passer des paramètres dans les routes, ce qui permet de créer des routes dynamiques.

Exemple de définition de route avec paramètre :

```js
const routes = [
  {
    path: '/user/:id',
    component: User
  }
];
```

Exemple d'utilisation du paramètre dans le composant :

```js
<template>
  <div>
    <p>ID de l'utilisateur : {{ $route.params.id }}</p>
  </div>
</template>
```

#### Navigation Protégée

Vue Router permet de protéger certaines routes en ajoutant une fonction de navigation (`beforeEach`) pour vérifier l'authentification de l'utilisateur avant de lui permettre d'accéder à une route protégée.

Exemple de navigation protégée :

```js
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !auth.isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});
```

## Conclusion

Vue Router est une bibliothèque puissante qui permet de gérer la navigation dans les applications Vue.js de manière simple et flexible. En utilisant Vue Router, vous pouvez créer des applications avec une navigation fluide et une expérience utilisateur optimale.
