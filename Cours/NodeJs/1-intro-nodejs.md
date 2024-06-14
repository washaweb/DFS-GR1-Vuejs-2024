
# Introduction à node JS

**Node.js** une plateforme basé (en partie) sur le moteur JavaScript V8 de Chrome qui permet de développer des applications côté serveur, en utilisant du JavaScript. Il se distingue des autres plateformes gràce à une approche non bloquante permettant d'effectuer des entrées/sorties (I/O) de manière asynchrone.

* **Utilise le V8 JavaScript engine**, le moteur JS de Google Chrome, en dehors du navigateur (très performant)

* **Utilise l'event-driven model** : Basé sur un système d'évènement, chaque événement à son cycle de vie. Il est donc possible de souscrire et d'écouter ces évènements afin d'effectuer des opérations spécifiques lorsqu'ils sont émits. très semblable à la méthode `addEventListener` du navigateur.

* **non-blocking I/O model** : Lors du déroulement d'un script il y a souvent des phases "d'attente" ou le script bloque en ettendant une entrée ou une sortie. Pendant ce temps d'attente, le script ne fais rien et ne peut traiter de nouvelles tâches. Au sein de NodeJS la plupart de ces entrée/sorties vont se dérouler de manière asynchrone. Ceci permet de gérer plus de concurrences en évitant les phases d'attentes.

* **Node.js package ecosystem** : NodeJS dispose de son gestionnaire de paquet officiel NPM (très bonne communauté JS) qui permetttra de télécharger et de partager des librairies. 

* **ECMAScript** dernière génération sans avoir besoin de se soucier de la compatibilité des navigateurs car le code est exécuté côté serveur. 

## Exemple de code d'une application Node JS

L'exemple le plus commun d'application node JS est l'exécution d'un serveur web :

```js
    const http = require('http')

    const hostname = '127.0.0.1'
    const port = process.env.PORT

    const server = http.createServer((req, res) => {
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/plain')
      res.end('Hello World!\n')
    })

    server.listen(port, hostname, () => {
      console.log(`Server running at http://${hostname}:${port}/`)
    })
```

Pour exécuter l'application, il suffit d'exécuter cette ligne dans le terminal:

```bash

  node app.js  # app.js contient ici le code de votre application

```

Ce code inclue le module Node `http`.
La méthode http `createServer()` crée un nouveau serveur HTTP et l'exécute.
Le serveur est configuré pour écouter sur le port et le nom d'hôte spécifiés.
Lorsque le serveur est prêt, la fonction de rappel est appelée, dans ce cas nous informant que le serveur est en cours d'exécution.
Chaque fois qu'une nouvelle demande est reçue, l'événement request est appelé, fournissant deux objets: 

* une `request` ( => demande, un objet `http.IncomingMessage`) 
* une `response` (=> réponse, un objet `http.ServerResponse`).

Ces 2 objets sont essentiels pour gérer l'appel HTTP.

Le premier fournit les détails de la demande. Dans cet exemple simple, cela n'est pas utilisé, mais vous pouvez accéder aux en-têtes de demande et demander des données.

Le second est utilisé pour renvoyer les données à l'appelant.

```js
  //Dans notre cas, avec:
  res.statusCode = 200
  // nous définissons la propriété statusCode sur 200, pour indiquer une réponse réussie.
  // Nous définissons ensuite l'en-tête Content-Type
  res.setHeader('Content-Type', 'text/plain')
  // et nous fermons la réponse, en ajoutant le contenu comme argument à end ()
  res.end('Hello World\n')
```

## Les libraries et frameworks associés à Node.js

**Node.js** n'est pas un framework. Ce n'est pas un outil qui vous permettra de mettre en place une application web rapidement avec peu de code. 

C'est un outil plus bas niveau qui vous permettra de communiquer avec le système à travers différentes librairies C++ et avec un langage familier. 

Cependant, il exite des frameworks très populaire basés sur Node JS qui vous permettront de développer très rapidement toute sorte de projets :


* **AdonisJs:** Un framework full-stack fortement axé sur l'ergonomie, la stabilité et la confiance des développeurs. Adonis est l'un des frameworks Web Node.js les plus rapides.
* **Egg.js:** Un framework pour créer de meilleurs frameworks et applications d'entreprise avec Node.js & Koa.
* **Express:** il fournit l'un des moyens les plus simples mais les plus puissants de créer un serveur Web. Son approche minimaliste, sans opinion, centrée sur les fonctionnalités de base d'un serveur, est la clé de son succès.
* **Fastify:** Un framework Web hautement axé sur la fourniture de la meilleure expérience de développeur avec le moins de prise de tête et une architecture puissante de plugins. Fastify est l'un des frameworks Web Node.js les plus rapides.
* **Gatsby:** Un générateur de site statique basé sur React et alimenté par GraphQL avec un écosystème très riche de plugins.
* **hapi:** un cadre riche pour la création d'applications et de services qui permet aux développeurs de se concentrer sur l'écriture d'une logique d'application réutilisable au lieu de passer du temps à créer une infrastructure.
* **koa:** Il est construit par la même équipe qui développe **Express**, vise à être encore plus simple et plus petit, en s'appuyant sur des années de connaissances. Le nouveau projet est né de la nécessité de créer des changements incompatibles sans perturber la communauté existante.
* **Loopback.io:** facilite la création d'applications modernes nécessitant des intégrations complexes.
* **Meteor:** Un framework full-stack puissant, vous permettant une approche isomorphe de la création d'applications avec JavaScript, du partage de code sur le client et le serveur. Autrefois un outil standard qui fournissait tout, s'intègre désormais aux bibliothèques frontend React, Vue et Angular. Peut également être utilisé pour créer des applications mobiles.
* **Micro:** Un serveur très léger pour créer des microservices HTTP asynchrones.
* **NestJS:** un framework Node.js progressif basé sur TypeScript pour créer des applications côté serveur efficaces, fiables et évolutives de niveau entreprise.
* **Next.js:** cadre React qui vous offre la meilleure expérience de développement avec toutes les fonctionnalités dont vous avez besoin pour la production: rendu hybride statique et serveur, prise en charge de TypeScript, regroupement intelligent, pré-extraction de route, etc.
* **Nx:** Une boîte à outils pour le développement monorepo full-stack à l'aide de NestJS, Express, React, Angular et plus encore! Nx vous aide à faire évoluer votre développement d'une seule application de création d'équipe à plusieurs équipes collaborant sur plusieurs applications!
* **Sapper:** Sapper est un framework permettant de créer des applications Web de toutes tailles, avec une belle expérience de développement et un routage flexible basé sur un système de fichiers. Offres SSR et plus encore!
* **Socket.io:** un moteur de communication en temps réel pour créer des applications réseau.
* **Strapi:** Strapi est un __CMS headless__ flexible et open-source qui donne aux développeurs la liberté de choisir leurs outils et frameworks préférés tout en permettant aux éditeurs de gérer et de distribuer facilement leur contenu. En rendant le panneau d'administration et l'API extensibles via un système de plugins, Strapi permet aux plus grandes entreprises du monde d'accélérer la livraison de contenu tout en créant de belles expériences numériques.

## L'environnement de Node

Dans le navigateur, la plupart du temps, vous interagissez avec le DOM ou d'autres API de plate-forme Web comme les cookies. Ceux-ci n'existent pas dans Node.js, bien sûr. Vous ne disposez pas du document, de la fenêtre et de tous les autres objets fournis par le navigateur.

* Node ne s'execute pas dans le navigateur
* Les objets: `window`, `localstorage`, `document` n'existent donc pas dans Node. Il n'est pas possible d'interragir avec le DOM.
* Node reçoit des requêtes `HTTP`, il s'execute côté serveur (comme `PHP`), il peut interragir avec l'OS et le filesystem.
* Node peut interagir avec une base de donnée
* Node peut contrôler des dossiers, écrire, lire et supprimer des fichiers
* avec Node, vous pouvez utiliser la dernière version d'EcmaScript sans vous soucier de la compatiblité du navigateur

Node JS repose sur plusieures librairies et outils indépendants :

### Libraries

[V8](https://nodejs.org/en/docs/meta/topics/dependencies/#v8)
[libuv](https://nodejs.org/en/docs/meta/topics/dependencies/#libuv)
[llhttp](https://nodejs.org/en/docs/meta/topics/dependencies/#llhttp)
[c-ares](https://nodejs.org/en/docs/meta/topics/dependencies/#c-ares)
[OpenSSL](https://nodejs.org/en/docs/meta/topics/dependencies/#openssl)
[zlib](https://nodejs.org/en/docs/meta/topics/dependencies/#zlib)

### Outils

[npm](https://nodejs.org/en/docs/meta/topics/dependencies/#npm)
[gyp](https://nodejs.org/en/docs/meta/topics/dependencies/#gyp)
[gtest](https://nodejs.org/en/docs/meta/topics/dependencies/#gtest)

Nous utiliserons **npm** pour gérer les dépendances d'un projet, mais il en existe d'autre comme par exemple : *yarn*, *pnpm*, ou encore *bun*.

- https://yarnpkg.com/
- https://pnpm.io/fr/
- https://bun.sh/


Pour aller plus loin avec nodejs:

https://nodejs.org/
https://nodejs.dev/learn


