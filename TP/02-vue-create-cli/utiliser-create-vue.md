# Utiliser create-vue (cli)

On fait référence à ce guide: https://vuejs.org/guide/quick-start.html

En prérequis, vous devez avoir installé nodejs (v18^) sur votre ordinateur.
Le projet créé utilisera une configuration de construction basée sur Vite et nous permettra d'utiliser les composants Vue Single-File (SFC).

> https://nodejs.org
> https://vitejs.dev/guide/

Create Vue est un système complet en ligne de commande pour le développement rapide de `Vue.js`, fournissant :

- Un échafaudage de projet interactif via `create vue`.
- Une dépendance d'exécution qui est :
  - Évolutive ;
  - Construit au-dessus de vite, avec des valeurs par défaut raisonnables ;
  - Configurable via un fichier de configuration dans le projet ;
  - Extensible via des plugins
- Une riche collection de plugins officiels intégrant les meilleurs outils de l'écosystème frontend.
- Une interface graphique complète pour créer et gérer les projets Vue.js.

```bash
  npm create vue@latest
```

Voir la doc de vue-cli ici: https://vuejs.org/guide/quick-start.html#creating-a-vue-application

## Créer notre propre projet

```bash

# lancer l'assistant et choisir les options
# remplacer `my-project` par le nom de votre choix
npm create vue@latest my-project


# > Project name: … my-project
# > Add TypeScript? … No / Yes
# > Add JSX Support? … No / Yes
# > Add Vue Router for Single Page Application development? … No / Yes
# > Add Pinia for state management? … No / Yes
# > Add Vitest for Unit testing? … No / Yes
# > Add an End-to-End Testing Solution? … No / Cypress / Nightwatch / Playwright
# > Add ESLint for code quality? … No / Yes
# > Add Prettier for code formatting? … No / Yes
# > Add Vue DevTools 7 extension for debugging? (experimental) … No / Yes

# Scaffolding project in ./<your-project-name>...
# Done.

# aller dans le dossier du projet et exétuter l'application
cd my-project
npm install
npm run serve
```
