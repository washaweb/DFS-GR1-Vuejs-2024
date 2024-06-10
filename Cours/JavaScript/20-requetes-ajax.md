# 20 - Requêtes AJAX en JavaScript

#Formation JS#
*Dernière mise à jour 04/01/2024*

Les requêtes AJAX (Asynchronous JavaScript and XML) permettent de communiquer avec un serveur Web en arrière-plan sans recharger la page. Elles sont largement utilisées pour récupérer des données à partir d'une URL spécifique (généralement au format JSON, XML ou texte brut) et les afficher dynamiquement sur une page web. Voici une explication étape par étape du processus de requête AJAX en JavaScript :

## 1. Création de l'objet XMLHttpRequest

```js
var xhr = new XMLHttpRequest();
```

## 2. Définition de la fonction de rappel (callback)

```js
xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
            // Le serveur a répondu avec succès (status 200)
            console.log(xhr.responseText); // Affiche la réponse du serveur
        } else {
            // Il y a eu une erreur lors de la requête
            console.error('Erreur de requête : ' + xhr.status);
        }
    }
};
```

## 3. Ouverture de la requête

```js
xhr.open('GET', 'https://exemple.com/api/data', true);
```

La méthode `open()` prend trois paramètres :

- Le type de requête HTTP (GET, POST, etc.)
- L'URL de la ressource à laquelle vous souhaitez accéder
- Un booléen indiquant si la requête doit être asynchrone (true) ou non (false)

## 4. Envoi de la requête

```js
xhr.send();
```

## Exemple complet

```js
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
            console.log(xhr.responseText);
        } else {
            console.error('Erreur de requête : ' + xhr.status);
        }
    }
};
xhr.open('GET', 'https://exemple.com/api/data', true);
xhr.send();
```

Dans cet exemple, une requête GET est envoyée à l'URL spécifiée. Lorsque la réponse est reçue, la fonction de rappel est déclenchée. Si la requête est réussie (status 200), la réponse du serveur est affichée dans la console. Sinon, une erreur est affichée.

## Méthode fetch()

La méthode `fetch()` est une fonction intégrée récente de JavaScript qui permet d'effectuer des requêtes HTTP asynchrones vers des ressources sur le réseau (comme des API Web) et de récupérer des données. `fetch()` est plus récente que `XMLHttpRequest`, elle offre une syntaxe plus moderne et est basée sur les promesses, ce qui la rend plus facile à utiliser et plus flexible.

Voici un exemple d'utilisation de `fetch()` pour récupérer des données JSON depuis une API :

```javascript
fetch('https://api.exemple.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Erreur de réseau : ' + response.status);
    }
    return response.json(); // Convertit la réponse en JSON
  })
  .then(data => {
    console.log(data); // Affiche les données récupérées depuis l'API
  })
  .catch(error => {
    console.error('Erreur lors de la récupération des données :', error);
  });
```

Explications :

1. La fonction `fetch()` prend en paramètre l'URL de la ressource à récupérer.
2. Elle renvoie une promesse qui résoudra en un objet `Response` représentant la réponse HTTP.
3. La première fonction de rappel de la promesse vérifie si la réponse est ok (statut 200-299). Si ce n'est pas le cas, une erreur est levée.
4. La méthode `json()` de l'objet `Response` est appelée pour convertir la réponse en JSON, renvoyant une nouvelle promesse.
5. La deuxième fonction de rappel de la promesse traite les données JSON récupérées.
6. La méthode `catch()` est utilisée pour intercepter toute erreur survenue lors de la récupération des données.

`fetch()` est flexible et peut être utilisée avec différentes méthodes HTTP (GET, POST, etc.) en spécifiant une deuxième option. Par exemple :

```javascript
fetch('https://api.exemple.com/data', {
  method: 'POST',
  body: JSON.stringify({ key: 'value' }), // Corps de la requête
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Erreur lors de la récupération des données :', error));
```

Il est important de noter que `fetch()` suit les règles de la politique de même origine (same-origin policy) par défaut, ce qui signifie qu'elle ne peut pas être utilisée pour effectuer des requêtes cross-origin à moins que le serveur ne fournisse des en-têtes CORS appropriés.

## Try...catch

La syntaxe `try...catch` en JavaScript est utilisée pour gérer les erreurs dans le code. Elle permet d'essayer (try) d'exécuter un bloc de code et de gérer toute erreur éventuelle (catch) qui pourrait se produire pendant l'exécution de ce bloc.

En écriture moderne (ES7) On utilise souvent `try...catch` conjointement aux mots-clés `async/await` pour capturer d'éventuelles erreurs lors d'un appel réseau avec `fetch` :

```js
async function fetchData(url) {
  try {
    const response = await fetch(url); // Essayer d'effectuer une requête
    if (!response.ok) {
      throw new Error('Erreur HTTP: ' + response.status); // Lever une erreur si la réponse n'est pas OK
    }
    const data = await response.json(); // Convertir la réponse en format JSON
    console.log('Données récupérées avec succès:', data);
  } catch (error) {
    console.error('Une erreur s\'est produite lors de la récupération des données:', error.message); // Capturer et gérer l'erreur
  }
}

// Exemple d'utilisation de la fonction fetchData
fetchData('https://api.example.com/data'); // Appel de la fonction avec une URL d'API
```

Dans cet exemple :

- Nous utilisons `try` pour essayer d'effectuer une requête à l'URL spécifiée en utilisant `fetch`.
- Si la requête échoue (par exemple, en raison d'une erreur réseau ou d'une erreur HTTP), une erreur sera levée et capturée par le bloc `catch`.
- Dans le bloc `catch`, nous affichons un message d'erreur avec `console.error`.

Utiliser `try...catch` avec `fetch` est une bonne pratique pour capturer les erreurs réseau ou les erreurs HTTP qui pourraient survenir pendant une requête, et ainsi éviter que ces erreurs ne provoquent des exceptions non gérées dans votre application JavaScript. Cela permet également d'assurer une meilleure gestion des erreurs et une meilleure expérience utilisateur.

## Les CORS

Les CORS (Cross-Origin Resource Sharing) sont une politique de sécurité mise en place par les navigateurs web pour protéger les utilisateurs en limitant les requêtes HTTP entre différents origines (ou domaines). L'objectif est d'empêcher un site malveillant (ou un script malveillant) de récupérer des données sensibles depuis un autre site sans autorisation.

Voici comment fonctionnent les CORS :

1. **Origine (Origin)** : Une origine est définie par le protocole (http/https), le nom de domaine et le numéro de port d'un site web. Par exemple, l'origine `https://www.example.com` représente un site web sécurisé (`https://`) hébergé sur le domaine `www.example.com`.

2. **Requêtes cross-origin** : Par défaut, les navigateurs web n'autorisent pas les requêtes cross-origin (c'est-à-dire les requêtes entre des origines différentes). Si une page web hébergée sur un domaine A tente de faire une requête vers un domaine B, le navigateur bloque la requête pour des raisons de sécurité, conformément à la politique de même origine (same-origin policy).

3. **Contrôle d'accès HTTP (CORS)** : Pour autoriser les requêtes cross-origin de manière contrôlée, les serveurs peuvent inclure des en-têtes CORS dans leurs réponses HTTP. Ces en-têtes spécifient quelles origines sont autorisées à accéder aux ressources du serveur, quels en-têtes HTTP personnalisés peuvent être utilisés dans les requêtes, et quels méthodes HTTP sont autorisées.

Voici un exemple d'en-têtes CORS dans une réponse HTTP :

```txt
Access-Control-Allow-Origin: https://www.example.com
Access-Control-Allow-Methods: GET, POST, OPTIONS
Access-Control-Allow-Headers: Content-Type, Authorization
```

Dans cet exemple, le serveur autorise les requêtes cross-origin depuis `https://www.example.com`, autorise les méthodes HTTP `GET`, `POST` et `OPTIONS`, et autorise les en-têtes HTTP `Content-Type` et `Authorization`.

Lorsqu'un navigateur reçoit une réponse avec des en-têtes CORS appropriés, il vérifie si l'origine de la page web correspond à une origine autorisée par le serveur. Si c'est le cas, il autorise la requête cross-origin et renvoie la réponse au code JavaScript sur la page web. Sinon, il bloque la requête et déclenche une erreur CORS.

En résumé, les CORS sont un mécanisme de sécurité utilisé par les navigateurs web pour contrôler les requêtes cross-origin et protéger les utilisateurs contre les attaques de type cross-site request forgery (CSRF) et d'autres vulnérabilités. Ils permettent aux serveurs de définir des politiques d'accès granulaires pour leurs ressources, ce qui renforce la sécurité des applications web.