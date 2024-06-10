# Utiliser vite

Pour initialiser une application vite :

```bash
  npm create vite@latest nom-du-projet
```

Puis valider les options pour configurer le projet, ici nous choisissons **vanilla**, puis **javascript**.
Vite va créer le projet `nom-du-projet` dans un dossier du même nom, à l'endoit ou vous avez lancé la commande.

L'assistant nous indique que l'on doit lancer les commandes suivantes:

```bash
  cd nom-du-projet
  npm install
  npm run dev
```

# Installer des dépendances

Une fois qu'on a un projet vite, il est facile d'installer des librairies dans les dépendances et de les utiliser dans notre projet.

## Exemple d'inclusion de la librairie dayjs

La librairie dayjs est très pratique pour manipuler et formater des dates en JavaScript :

https://day.js.org/

- Installer dayjs

  ```sh
    npm i dayjs
  ```

Dans le fichier main.js on inclue la dépendance à la librairie et on crée un exemple :

```js
import dayjs from 'dayjs'

// on stocke la date
let date = dayjs().format('DD/MM/YYYY HH:mm:ss')

document.querySelector('#app').innerHTML = `
  <p>Bonjour, nous sommes le ${date}.</p>
`

## Exemple 2, installer Bootstrap

En fait on suit le pas à pas de la doc de bootsrap :


- Installer bootstrap

  ```sh
    npm i bootstrap @popperjs/core
  ```

- Installer les dépendances de développement

  ```sh
    npm i -D sass 
  ```

- Déplacer les fichiers selon l'exemple de la documentation de bootstrap

Pour respecter la documentation de Bootstrap, nous déplaçons les fichiers selon cette structure :
https://getbootstrap.com/docs/5.3/getting-started/vite/

```
  my-project/
  ├── node_modules
  ├── public
  ├── src/
  │   ├── js/
  │   │   └── main.js
  │   └── scss/
  │   |   └── styles.scss
  |   └── index.html
  ├── package-lock.json
  ├── package.json
  └── vite.config.js
```

les fichiers qui n'existaient pas, sont créé pour l'occasion, comme le fichier `style.scss` ou le fichier `vite.config.js`

Dans le fichier `vite.config.js`on ajoute une configuration :

Fichier `vite.config.js`

```js
// const path = require('path')
import path from 'path'

export default {
  root: path.resolve(__dirname, 'src'),
  build: {
    outDir: '../dist'
  },
  server: {
    port: 8080
  }
}
```

On modifie le fichier HTML `src/index.html`

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap w/ Vite</title>
    <script type="module" src="./js/main.js"></script>
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
```

On modifier le fichier `styles.scss`


`src/scss/styles.scss`

```scss
// On importe les fichier .scss de bootstrap
@import "bootstrap/scss/bootstrap";
```

On modifie le fichier `main.js`

`src/js/main.js`

```js

  // Import des fichiers scss
  import '../scss/styles.scss'

  // Import des fichiers javascript de Bootstrap
  import * as bootstrap from 'bootstrap'

  // import de la librairie dayjs
  import dayjs from 'dayjs'

  let today = dayjs().format('DD/MM/YYYY HH:mm')

  //je vise le div id="app"
  const app = document.querySelector('#app')
  
  //je remplace le contenu du div par ce code
  app.innerHTML= `
    <div class="container py-4 px-3 mx-auto">
      <h1>Hello, Bootstrap and Vite!</h1>
      <p>${today}</p>
      <button class="btn btn-primary">Primary button</button>
    </div>
  `
  // on teste si les librairies sont bien là
  console.log(bootstrap, today)
```
