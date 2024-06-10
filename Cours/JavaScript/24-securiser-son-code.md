# 24 - Sécuriser son code

#Formation JS#
*Dernière mise à jour 04/01/2024*

Sécuriser son code JavaScript est essentiel pour éviter les vulnérabilités et protéger les utilisateurs contre les attaques malveillantes. Voici quelques bonnes pratiques pour sécuriser votre code JavaScript :

1. **Validation des données côté serveur :** Ne jamais faire confiance aux données envoyées par l'utilisateur. Assurez-vous de toujours valider et filtrer les entrées utilisateur du côté serveur pour éviter les attaques XSS, CSRF et d'autres vulnérabilités.

2. **Échappement des caractères spéciaux :** Lorsque vous affichez des données dynamiques dans votre HTML, assurez-vous d'échapper les caractères spéciaux pour éviter les injections de code XSS. Utilisez des fonctions d'échappement comme `innerText` plutôt que `innerHTML` lorsque cela est possible.

3. **Utilisation de HTTPS :** Toujours utiliser HTTPS pour chiffrer les communications entre le navigateur et le serveur, ce qui protège les données sensibles des utilisateurs contre l'interception et la manipulation par des tiers.

4. **Limitation des autorisations :** Limitez les autorisations d'accès aux ressources sensibles en utilisant des cookies sécurisés avec l'attribut `SameSite`, des en-têtes de sécurité HTTP comme Content Security Policy (CSP), et en évitant les cookies avec l'attribut `HttpOnly`.

5. **Gestion sécurisée des mots de passe :** Ne stockez jamais les mots de passe en clair dans votre base de données. Utilisez des fonctions de hachage sécurisées comme bcrypt pour stocker les mots de passe de manière sécurisée et empêcher les attaquants d'accéder aux informations sensibles.

6. **Mises à jour régulières :** Assurez-vous de toujours maintenir votre code à jour en appliquant les correctifs de sécurité et en utilisant les dernières versions des bibliothèques et des frameworks que vous utilisez.

7. **Validation des types de données :** Assurez-vous que les données reçues de l'utilisateur sont du type attendu avant de les utiliser, pour éviter les attaques d'injection de code et les erreurs de conversion de type.

8. **Limitation des droits d'accès aux API :** Utilisez des clés d'API sécurisées et configurez des autorisations d'accès appropriées pour limiter l'accès aux fonctionnalités sensibles de votre application.

9. **Gestion des sessions et des cookies :** Utilisez des mécanismes de gestion des sessions sécurisés, comme les jetons JWT (JSON Web Tokens), et assurez-vous de toujours vérifier l'authenticité des cookies et des sessions côté serveur.

10. **Analyse de sécurité :** Effectuez régulièrement des analyses de sécurité de votre code JavaScript à l'aide d'outils d'analyse statique et dynamique pour détecter les vulnérabilités et les failles de sécurité potentielles.

En suivant ces bonnes pratiques de sécurité, vous pouvez renforcer la sécurité de votre code JavaScript et protéger vos utilisateurs contre les menaces potentielles en ligne. Il est également important de rester informé des dernières vulnérabilités et des meilleures pratiques de sécurité pour maintenir votre code sécurisé à long terme.

## XSS (Cross-Site Scripting)

La prévention des attaques XSS (Cross-Site Scripting) et CSRF (Cross-Site Request Forgery) est cruciale pour assurer la sécurité des applications web. Voici un aperçu de ces deux types d'attaques et des mesures de prévention associées :

L'attaque XSS implique l'injection de scripts malveillants dans des pages web consultées par d'autres utilisateurs. Ces scripts peuvent être exécutés dans le navigateur des victimes, ce qui permet à un attaquant de voler des informations sensibles, de voler des sessions utilisateur, ou même de prendre le contrôle du compte utilisateur.

### Prévention XXS

1. **Filtrage des entrées :** Toujours valider et filtrer les entrées utilisateur pour éviter l'injection de code malveillant. Cela inclut l'encodage ou l'échappement des caractères spéciaux.

2. **Utilisation de CSP (Content Security Policy) :** Mettre en place une CSP qui limite les sources autorisées pour les ressources chargées par la page. Cela peut aider à réduire l'impact des attaques XSS en limitant l'exécution de scripts non autorisés.

3. **Encodage des sorties :** Avant d'afficher les données sur une page web, s'assurer qu'elles sont correctement encodées pour éviter toute exécution de script indésirable.

4. **Utilisation de frameworks sécurisés :** Utiliser des frameworks et des bibliothèques sécurisés qui offrent des fonctionnalités intégrées pour la prévention XSS, comme React avec JSX, qui échappe automatiquement les données.

### Exemple de sécurisation du code contre XXS

Voici quelques exemples de code JavaScript pour prévenir les attaques XSS (Cross-Site Scripting) :

1. **Échappement des caractères spéciaux :**

  ```js
  function escapeHtml(unsafe) {
      return unsafe
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#039;");
  }

  // Exemple d'utilisation
  let userInput = "<script>alert('XSS attack!');</script>";
  let safeHtml = escapeHtml(userInput);
  document.getElementById("output").innerHTML = safeHtml;
  ```

2. **Utilisation de `innerText` au lieu de `innerHTML` :**

  ```js
  // Utilisation de innerText pour éviter l'exécution de scripts
  document.getElementById("element").innerText = userInput;
  ```

3. **Utilisation de `document.createElement` pour créer des éléments HTML :**

```js
// Création d'un élément de façon sécurisée
let userInput = "<script>alert('XSS attack!');</script>";
let textNode = document.createTextNode(userInput);
let divElement = document.createElement("div");
divElement.appendChild(textNode);
document.body.appendChild(divElement);
```

4. **Utilisation de CSP (Content Security Policy) :**

```html
<!-- Définition d'une CSP dans l'en-tête de la page -->
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' https://apis.google.com">
```

Ces exemples illustrent quelques-unes des techniques courantes pour prévenir les attaques XSS en échappant les caractères spéciaux, en utilisant les bonnes propriétés du DOM et en définissant une CSP pour restreindre les sources de scripts autorisées. Il est important de mettre en œuvre ces mesures de précaution dans vos applications web pour garantir la sécurité des utilisateurs.

## CSRF (Cross-Site Request Forgery)

L'attaque CSRF implique la manipulation de requêtes HTTP légitimes pour effectuer des actions non autorisées au nom de l'utilisateur connecté. Cela se produit souvent en incitant un utilisateur à cliquer sur un lien ou à soumettre un formulaire contenant une requête falsifiée.

### Prévention CSRF

1. **Token CSRF :** Inclure un jeton CSRF unique dans chaque formulaire ou requête HTTP, et vérifier ce jeton côté serveur pour valider l'authenticité de la demande.

2. **Cookies sécurisés :** Utiliser des cookies sécurisés avec l'attribut `SameSite` pour limiter les requêtes CSRF provenant d'autres sites. 

3. **Validation de l'en-tête Referer :** Vérifier l'en-tête Referer de la requête pour s'assurer que la requête provient du même site web.

4. **Actions sécurisées :** Éviter d'effectuer des actions sensibles (comme la suppression de données) via des méthodes HTTP qui peuvent être déclenchées involontairement, telles que les requêtes GET.

En mettant en œuvre ces pratiques de prévention, vous pouvez réduire considérablement le risque d'attaques XSS et CSRF dans vos applications web, et renforcer leur sécurité globale. Il est également important de rester informé des nouvelles vulnérabilités et des meilleures pratiques de sécurité pour garantir une protection continue contre les menaces.

### Exemple de protection contre CSRF

Voici quelques exemples de code pour prévenir les attaques CSRF (Cross-Site Request Forgery) :

1. **Utilisation de jetons CSRF dans les formulaires :**

  ```html
  <!-- Formulaire avec un jeton CSRF -->
  <form action="/process-form" method="post">
      <input type="hidden" name="csrf_token" value="{$csrfToken}">
      <!-- Autres champs du formulaire -->
      <button type="submit">Soumettre</button>
  </form>
  ```

Dans ce cas, `$csrfToken` est un jeton CSRF généré côté serveur et inclus dans le formulaire. Lorsque le formulaire est soumis, le jeton est envoyé avec la requête et vérifié côté serveur pour valider l'authenticité de la demande.

2. **Utilisation de jetons CSRF dans les requêtes AJAX :**

  ```js
  // Ajout d'un jeton CSRF à une requête AJAX
  function sendAjaxRequest() {
      let xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
          if (xhr.readyState === XMLHttpRequest.DONE) {
              // Traitement de la réponse
          }
      };
      xhr.open("POST", "/process-ajax-request", true);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.setRequestHeader("X-CSRF-Token", csrfToken); // Envoi du jeton CSRF
      xhr.send(JSON.stringify({/* Données de la requête */}));
  }
  ```

Dans cet exemple, `csrfToken` est un jeton CSRF généré côté serveur et inclus dans les en-têtes de la requête AJAX. Côté serveur, le jeton est vérifié pour valider l'authenticité de la requête.

3. **Validation de l'en-tête Referer :**

  ```php
    // Validation de l'en-tête Referer côté serveur
    $referer = $_SERVER['HTTP_REFERER'];
    $allowedDomain = 'https://monsite.com';
    if (strpos($referer, $allowedDomain) !== 0) {
        // L'en-tête Referer ne correspond pas au domaine autorisé
        // Gérer l'erreur ou rejeter la requête
    }
  ```

Dans ce cas, le serveur vérifie si l'en-tête Referer de la requête correspond au domaine autorisé. Si ce n'est pas le cas, la requête est rejetée ou une erreur est renvoyée.

4. **Utilisation de cookies sécurisés avec SameSite :**

  ```javascript
  // Définition d'un cookie avec SameSite strict
  document.cookie = "session_cookie=token_value; SameSite=Strict";
  ```

En définissant des cookies avec l'attribut `SameSite=Strict`, vous pouvez limiter les requêtes CSRF provenant d'autres sites.

En combinant ces techniques, vous pouvez renforcer la sécurité de votre application web contre les attaques CSRF et protéger les utilisateurs contre les actions non autorisées. Il est important de mettre en œuvre ces mesures de sécurité dans toutes les interactions sensibles avec le serveur pour assurer une protection efficace contre les attaques CSRF.

## Réglage des CORS

Les CORS (Cross-Origin Resource Sharing) sont une politique de sécurité implémentée par les navigateurs web pour contrôler les interactions entre différents domaines lors de l'accès aux ressources web, telles que les fichiers JavaScript, les fonts, les images, etc.

Lorsqu'une page web fait une requête vers un serveur dans un domaine différent (une origine différente), les CORS permettent au serveur de spécifier quels domaines sont autorisés à accéder à ces ressources et dans quelles conditions. Cela aide à prévenir les attaques telles que les attaques XSS (Cross-Site Scripting) et les attaques CSRF (Cross-Site Request Forgery).

Les politiques CORS sont implémentées via des en-têtes HTTP spécifiques envoyés par le serveur vers le navigateur. Les en-têtes CORS couramment utilisés sont :

- `Access-Control-Allow-Origin` : spécifie quels domaines sont autorisés à accéder à la ressource. Il peut avoir la valeur `"*"` pour permettre à tous les domaines d'accéder à la ressource.
- `Access-Control-Allow-Methods` : spécifie les méthodes HTTP autorisées pour accéder à la ressource (par exemple, GET, POST, PUT, DELETE).
- `Access-Control-Allow-Headers` : spécifie les en-têtes HTTP autorisés lors de la requête.

Les CORS sont essentiels pour permettre le développement d'applications web modernes qui communiquent avec des services situés sur différents domaines. Cependant, ils doivent être configurés avec soin pour éviter les failles de sécurité.

Pour régler les CORS (Cross-Origin Resource Sharing) sur votre serveur, vous devez configurer votre serveur pour inclure les en-têtes CORS appropriés dans les réponses HTTP. Voici quelques étapes générales pour configurer les CORS sur différents types de serveurs :

### Apache (avec le module mod_headers)

Si vous utilisez Apache comme serveur web, vous pouvez configurer les en-têtes CORS en ajoutant les directives suivantes à votre fichier de configuration ou à votre fichier `.htaccess` :

```apache
<IfModule mod_headers.c>
    Header set Access-Control-Allow-Origin "*"
    Header set Access-Control-Allow-Methods "GET, POST, PUT, DELETE, OPTIONS"
    Header set Access-Control-Allow-Headers "Content-Type, Authorization"
</IfModule>
```

Cela permettra d'accepter les requêtes CORS de n'importe quelle origine (`*`), ainsi que les méthodes HTTP spécifiées et les en-têtes autorisés.

### Nginx

Si vous utilisez Nginx comme serveur web, vous pouvez configurer les en-têtes CORS en ajoutant les directives suivantes à votre fichier de configuration :

```nginx
server {
    # Autres directives de configuration
    location / {
        add_header Access-Control-Allow-Origin "*";
        add_header Access-Control-Allow-Methods "GET, POST, PUT, DELETE, OPTIONS";
        add_header Access-Control-Allow-Headers "Content-Type, Authorization";
    }
}
```

### Node.js (Express)

Si vous utilisez Node.js avec Express, vous pouvez configurer les en-têtes CORS en utilisant le middleware `cors`. Vous pouvez l'installer via npm :

```bash
npm install cors
```

Ensuite, vous pouvez l'utiliser dans votre application Express comme ceci :

```javascript
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
```

Cela ajoutera automatiquement les en-têtes CORS appropriés à toutes les réponses de votre application Express.

### Autres serveurs

Pour d'autres serveurs, vous devrez consulter la documentation spécifique à votre serveur pour savoir comment configurer les en-têtes CORS. L'objectif est d'inclure les en-têtes `Access-Control-Allow-Origin`, `Access-Control-Allow-Methods` et `Access-Control-Allow-Headers` dans les réponses HTTP pour autoriser les requêtes CORS.

Il est important de noter que la configuration des CORS dépend de votre cas d'utilisation spécifique et des exigences de sécurité de votre application. Assurez-vous de comprendre les implications de sécurité avant de configurer les CORS sur votre serveur.
