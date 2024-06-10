# 19 - Les promesse en JavaScript

#Formation JS#
*Dernière mise à jour 04/01/2024*

Les promesses et `async/await` sont des fonctionnalités de JavaScript qui permettent de gérer de manière asynchrone le traitement des opérations, comme les requêtes réseau, les lectures/écritures de fichiers, etc. Elles simplifient la gestion des opérations asynchrones en rendant le code plus lisible et en évitant les enchevêtrements de fonctions de rappel (callback hell). Voici une explication de chacune de ces fonctionnalités :

## Promesses (Promises)

Une promesse représente une valeur qui peut être disponible maintenant, dans le futur ou jamais. Elle peut être dans l'un des trois états suivants :

- **Pendante (pending)** : L'état initial d'une promesse, avant que la valeur ne soit résolue ou rejetée.
- **Résolue (fulfilled)** : La promesse a été résolue avec une valeur.
- **Rejetée (rejected)** : La promesse a été rejetée avec une raison d'échec.

Voici un exemple d'utilisation de promesse :

```javascript
const myPromise = new Promise((resolve, reject) => {
  // Simule une opération asynchrone
  setTimeout(() => {
    const randomValue = Math.random();
    if (randomValue > 0.5) {
      resolve(randomValue); // La promesse est résolue avec une valeur
    } else {
      reject('La valeur est inférieure à 0.5'); // La promesse est rejetée avec une raison
    }
  }, 1000);
});

myPromise.then(value => {
  console.log('La promesse a été résolue avec la valeur :', value);
}).catch(error => {
  console.error('La promesse a été rejetée avec l\'erreur :', error);
});
```

## Async/Await

`async` et `await` sont des mots-clés introduits dans ES2017 (ES8) pour simplifier l'utilisation des promesses. `async` est placé devant une fonction pour indiquer que cette fonction retourne une promesse. `await` est utilisé à l'intérieur d'une fonction asynchrone pour attendre que la promesse soit résolue ou rejetée avant de continuer l'exécution du code. Cela permet d'écrire du code asynchrone de manière synchrone, ce qui le rend plus lisible et plus facile à comprendre.

Voici un exemple d'utilisation d'async/await :

```javascript
async function myAsyncFunction() {
  try {
    const value = await myPromise; // Attend que la promesse soit résolue ou rejetée
    console.log('La promesse a été résolue avec la valeur :', value);
  } catch (error) {
    console.error('La promesse a été rejetée avec l\'erreur :', error);
  }
}

myAsyncFunction();
```

`await` permet d'attendre la résolution de la promesse `myPromise`, puis de continuer l'exécution du code. Cela rend le code asynchrone plus similaire à du code synchrone, ce qui facilite sa compréhension.
