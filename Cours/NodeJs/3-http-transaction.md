# Anatomie d'une transaction HTTP

Dans le cadre d'une application web, tout passe par des transactions HTTP, une requête est émise par le client vers le serveur, le serveur (votre application Node) reçoit la demande `request`. Ensuite, après avoir analysé la requête et exécuter ses transaction, renvoie une réponse : `response`.

## Créer le serveur

Toute application de serveur Web de nœud devra à un moment donné créer un objet serveur Web. Cela se fait en utilisant `createServer`.

```js
  const http = require('http');

  const server = http.createServer((request, response) => {
    // magic happens here!
  });
```

La fonction transmise à `createServer` est appelée une fois pour chaque requête HTTP effectuée sur ce serveur, elle s'appelle donc le gestionnaire de requêtes. En fait, l'objet `server` renvoyé par `createServer` est un `EventEmitter`, et ce que nous avons ici n'est qu'un raccourci pour créer un objet serveur, puis ajouter l'écouteur plus tard.

```js
  const server = http.createServer();
  server.on('request', (request, response) => {
    // the same kind of magic happens here!
  });
```

Lorsqu'une requête HTTP atteint le serveur, Node appelle la fonction de gestionnaire de requêtes avec quelques objets pratiques pour traiter la transaction, la **requête** et la **réponse**.

Afin de servir réellement les demandes, la méthode d'écoute doit être appelée sur l'objet serveur. Dans la plupart des cas, tout ce dont vous aurez besoin pour écouter est le numéro de port sur lequel vous voulez que le serveur écoute. Il existe également d'autres options, consultez l'API de référence pour plus d'infos.

## Méthode, URL et en-têtes

Lors du traitement d'une requête, la première chose que vous voudrez probablement faire est de regarder la méthode et l'URL, afin que les actions appropriées puissent être entreprises. Node.js rend cela relativement indolore en mettant des propriétés pratiques sur l'objet de requête.

```js
  const { method, url } = request;
```

- **La méthode** ici sera toujours une méthode / un verbe HTTP normal (`get, put, post, patch, delete`...).
- **L'URL** est l'URL complète sans le serveur, le protocole ou le port. Pour une URL typique, cela signifie tout ce qui suit et y compris la troisième barre oblique.
- **Les en-têtes** sont situées dans leur propre objet sur demande appelé en-têtes.

```js
  const { headers } = request;
  const userAgent = headers['user-agent'];
```

Il est important de noter ici que tous les en-têtes sont représentés en minuscules uniquement, quelle que soit la manière dont le client les a réellement envoyés. Cela simplifie la tâche d'analyse.

Si certains en-têtes sont répétés, leurs valeurs sont écrasées ou jointes sous forme de chaînes séparées par des virgules, selon l'en-tête. Dans certains cas, cela peut être problématique, donc `rawHeaders` est également disponible.

## Request Body

Lors de la réception d'une requête `POST` ou `PUT`, le corps de la requête peut être important pour votre application. Accéder aux données du `body` de la requête est un peu plus complexe que d'accéder aux en-têtes. 

L'objet de requête qui est passé à un gestionnaire implémente l'interface `ReadableStream`. Ce flux peut être écouté ou diffusé ailleurs comme n'importe quel autre flux. 
Nous pouvons extraire les données du flux en écoutant les événements «data» et «end» du flux. 

Le bloc émis dans chaque événement 'data' est un Buffer. Si vous savez qu'il s'agira de données sous forme de chaîne, la meilleure chose à faire est de collecter les données dans un tableau, puis à la «fin», de les concaténer et de les stringifier.

```js
  let body = [];
  request.on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body).toString();
    // at this point, `body` has the entire request body stored in it as a string
  });
```

Cela peut sembler fastidieux, heureusement, il existe des librairies qui simplifie la lecture du body, comme [body-parser](https://www.npmjs.com/package/body-parser).

## Comprendre les ereurs

Étant donné que l'objet de requête est un `ReadableStream`, il s'agit également d'un `EventEmitter` et se comporte comme un objet lorsqu'une erreur se produit.

Une erreur dans le flux de requête se présente en émettant un événement `error` sur le flux. Si vous n'avez pas d'écouteur pour cet événement, l'erreur sera renvoyée, ce qui pourrait planter votre programme Node.js. 

Vous devez donc ajouter un écouteur `error` sur vos flux de requêtes, même si vous venez de le connecter et de continuer votre chemin. 
(Bien qu'il soit probablement préférable d'envoyer une sorte de réponse d'erreur HTTP. Nous en parlerons plus tard.)

```js
  request.on('error', (err) => {
    // This prints the error message and stack trace to `stderr`.
    console.error(err.stack);
  });
```

Il existe d'autres moyens de gérer ces erreurs, comme d'autres abstractions et outils, mais sachez toujours que des erreurs peuvent se produire et se produisent, et que vous allez devoir les gérer.

> https://nodejs.org/api/errors.html

## Un serveur web basique

À ce stade, nous avons couvert la création d'un serveur et la récupération de la méthode, de l'URL, des en-têtes et du corps des requêtes. Lorsque nous mettons tout cela ensemble, cela peut ressembler à ceci:

```js
  const http = require('http');

  http.createServer((request, response) => {
    const { headers, method, url } = request;
    let body = [];
    request.on('error', (err) => {
      console.error(err);
    }).on('data', (chunk) => {
      body.push(chunk);
    }).on('end', () => {
      body = Buffer.concat(body).toString();
      // At this point, we have the headers, method, url and body, and can now
      // do whatever we need to in order to respond to this request.
    });
  }).listen(8080); // Activates this server, listening on port 8080.
```

Si nous exécutons cet exemple, nous pourrons recevoir des demandes, mais pas y répondre. En fait, si vous cliquez sur cet exemple dans un navigateur Web, votre demande expirera, car rien n'est renvoyé au client.

Jusqu'à présent, nous n'avons pas du tout abordé l'objet de réponse, qui est une instance de `ServerResponse`, qui est un `WritableStream`. 
Il contient de nombreuses méthodes utiles pour renvoyer des données au client. 

## HTTP Status Code

Si vous ne vous souciez pas de le définir, le code d'état HTTP sur une réponse sera toujours `200`. 
Bien sûr, toutes les réponses HTTP ne le justifient pas, et à un moment donné, vous voudrez certainement envoyer un code d'état différent. Pour ce faire, vous pouvez définir la propriété statusCode.

```js
  response.statusCode = 404; 
  // Tell the client that the resource wasn't found.
```

Il existe d'autres raccourcis vers cela, comme nous le verrons bientôt.

## Définition des en-têtes de réponse

Les en-têtes sont définis via une méthode pratique appelée `setHeader`.

```js
  response.setHeader('Content-Type', 'application/json');
  response.setHeader('X-Powered-By', 'bacon');
```

Lors de la définition des en-têtes sur une réponse, la casse est insensible à leurs noms. Si vous définissez un en-tête à plusieurs reprises, la dernière valeur que vous définissez est la valeur qui est envoyée.

## Envoi explicite des données d'en-tête

Les méthodes de définition des en-têtes et du code d'état dont nous avons déjà parlé supposent que vous utilisez des "en-têtes implicites". Cela signifie que vous comptez sur Node pour envoyer les en-têtes pour vous au bon moment avant de commencer à envoyer des données corporelles.

Si vous le souhaitez, vous pouvez écrire explicitement les en-têtes dans le flux de réponse. Pour ce faire, il existe une méthode appelée `writeHead`, qui écrit le code d'état et les en-têtes dans le flux.

```js
  response.writeHead(200, {
    'Content-Type': 'application/json',
    'X-Powered-By': 'bacon'
  });
```

Une fois que vous avez défini les en-têtes (implicitement ou explicitement), vous êtes prêt à commencer à envoyer des données de réponse.

## Envoi du corps de la réponse

Étant donné que l'objet de réponse est un `WritableStream`, l'écriture d'un corps de réponse vers le client est juste une question d'utiliser les méthodes de flux habituelles.

```js
  response.write ('<html>');
  response.write ('<body>');
  response.write ('<h1> Bonjour le monde! </h1>');
  response.write ('</body>');
  response.write ('</html>');
  response.end ();
```

La fonction de fin `end` peut également prendre certaines données facultatives à envoyer comme dernier bit de données sur le flux, nous pouvons donc simplifier l'exemple ci-dessus comme suit.

```js
  response.end ('<html> <body> <h1> Bonjour le monde! </h1> </body> </html>');
```

> Il est important de définir l'état et les en-têtes avant de commencer à écrire des morceaux de données dans le corps. Cela a du sens, car les en-têtes viennent avant le corps dans les réponses HTTP.

## Exemple de serveur complet avec Node JS

```js
  const http = require('http');

  http.createServer((request, response) => {
  
    const { headers, method, url } = request;
      
    let body = [];

    request.on('error', (err) => {
    
        console.error(err);
    
    }).on('data', (chunk) => {
    
        body.push(chunk);
    
    }).on('end', () => {

      body = Buffer.concat(body).toString();
      
      // START

      response.on('error', (err) => {
          console.error(err);
      });

      response.statusCode = 200;
      response.setHeader('Content-Type', 'application/json');
      // Note: la ligne ci-dessous peut remplacer les 2 ligne précédentes
      // response.writeHead(200, {'Content-Type': 'application/json'})

      const responseBody = { headers, method, url, body };

      response.write(JSON.stringify(responseBody));
      response.end();
      // Note: la ligne ci-dessous peut remplacer les 2 ligne précédentes
      // response.end(JSON.stringify(responseBody))

      // END
    });
  }).listen(8080);
```


## Echo Server

Simplifions l'exemple précédent pour créer un simple serveur d'écho, qui envoie simplement toutes les données reçues dans la requête directement dans la réponse. Tout ce que nous avons à faire est de récupérer les données du flux de requête et d'écrire ces données dans le flux de réponse, comme nous l'avons fait précédemment.

```js
  const http = require('http');

  http.createServer((request, response) => {
    let body = [];
    request.on('data', (chunk) => {
      body.push(chunk);
    }).on('end', () => {
      body = Buffer.concat(body).toString();
      response.end(body);
    });
  }).listen(8080);
```

Nous avons maintenant couvert la plupart des bases de la gestion des requêtes HTTP. À ce stade, vous devriez être en mesure de:

- **Instancier un serveur HTTP** avec une fonction de gestionnaire de requêtes et faites-le écouter sur un port.
- **Obtenir des en-têtes**, des **URL**, des **méthodes** et des **données de corps** à partir des objets de requête.
- **Prendre des décisions de routage** basées sur l'URL et / ou d'autres données dans les objets de requête.
- **Envoyer des en-têtes**, des codes d'état HTTP et des données de corps via des objets de réponse.
- **Dirigez les données** des objets de demande et des objets de réponse.
- **Gérez les erreurs** de flux dans les flux de demande et de réponse.

À partir de ces bases, les serveurs HTTP Node.js peuvent être construits pour de nombreux cas d'utilisation typiques. 

Ces API fournissent de nombreuses autres choses, alors assurez-vous de lire la documentation sur l'API pour `EventEmitters`, `Streams` et `HTTP`.
