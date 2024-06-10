# Utiliser vuejs

Pour initialiser un projet vuejs, tout comme vite, nous allons utiliser npm :

```sh
  npm create vue@latest
```

S'en suit un assistant qui vous demande de configurer votre projet:

```sh
   Nom du projet : … 2-vuejs-app
  ✔ Ajouter TypeScript ? … Non / Oui
  ✔ Ajouter le support de JSX ? … Non / Oui
  ✔ Ajouter Vue Router pour le développement d'applications _single page_ ? … Non / Oui
  ✔ Ajouter Pinia pour la gestion de l'état ? … Non / Oui
  ✔ Ajouter Vitest pour les tests unitaires ? … Non / Oui
  ✔ Ajouter une solution de test de bout en bout (e2e) ? › Non
  ✔ Ajouter ESLint pour la qualité du code ? … Non / Oui
  ✔ Ajouter Prettier pour le formatage du code ? … Non / Oui
```

Enfin l'assistant nous dit que nous devons exécuter ces commandes:


```sh
  cd 2-vuejs-app
  npm install
  npm run format
  npm run dev
```

Le projet se lance alors à l'adresse : `http://localhost:5173/`
