# Présentation du blocage et du non-blocage

Le terme `E/S` fait principalement référence à l'interaction avec le disque du système et le réseau pris en charge par libuv.

## Blocage (blocking)

Le blocage se produit lorsque l'exécution de JavaScript supplémentaire dans le processus Node.js doit attendre la fin d'une opération non JavaScript. Cela se produit car la boucle d'événements ne peut pas continuer à exécuter JavaScript pendant qu'une opération de blocage est en cours.

Dans Node.js, JavaScript qui présente des performances médiocres en raison de son utilisation intensive en CPU plutôt que d'attendre une opération non JavaScript, telle que les E/S, n'est généralement pas appelé blocage. 
Les méthodes synchrones de la bibliothèque standard Node.js qui utilisent `libuv` sont les opérations de blocage les plus couramment utilisées.
Les modules natifs peuvent également avoir des méthodes de blocage.

Toutes les méthodes d'E/S de la bibliothèque standard Node.js fournissent des versions asynchrones, qui ne sont pas bloquantes, et acceptent les fonctions de rappel. Certaines méthodes ont également des équivalents de blocage, dont les noms se terminent par Sync.

## Comparaison du code

Les méthodes de blocage s'exécutent de manière synchrone et les méthodes non bloquantes s'exécutent de manière asynchrone.

En utilisant le module File System comme exemple, il s'agit d'un fichier synchrone lu:

```js
  const fs = require ('fs');
  const data = fs.readFileSync ('/ fichier.md'); // bloque ici jusqu'à ce que le fichier soit lu
```

Et voici un exemple asynchrone équivalent:

```js
  const fs = require ('fs');
  fs.readFile ('/ fichier.md', (err, data) => {
    if (err) throw err;
  });
```

Le premier exemple semble plus simple que le second mais présente l'inconvénient que la deuxième ligne bloque l'exécution de tout JavaScript supplémentaire jusqu'à ce que le fichier entier soit lu. Notez que dans la version synchrone, si une erreur est générée, elle devra être interceptée ou le processus plantera.

Dans la version asynchrone, c'est à l'auteur de décider si une erreur doit être générée comme indiqué.

### Développons un peu notre exemple:

```js
  const fs = require('fs');
  const data = fs.readFileSync('/file.md'); // bloque ici jusqu'à ce que le fichier soit lu
  console.log(data);
  moreWork(); // fonctionnera APRES le console.log()
```

Et voici un exemple asynchrone similaire, mais pas équivalent:

```js
  const fs = require('fs');
  fs.readFile('/file.md', (err, data) => { 
  //fonction asynchrone, non bloquante
    if (err) throw err; //permet de capter les erreurs éventuelles
    console.log(data);
  });
  moreWork(); // fonctionnera AVANT le console.log()
```

Dans le premier exemple ci-dessus, `console.log()` sera appelé avant `moreWork ()`. 
Dans le deuxième exemple, `fs.readFile()` n'est pas bloquant, donc l'exécution de JavaScript peut continuer et `moreWork()` sera appelé en premier.
La possibilité d'exécuter `moreWork()` sans attendre la fin de la lecture du fichier est un choix de conception clé qui permet un débit plus élevé.

## Concurrence et débit

L'exécution de JavaScript dans Node.js est à **thread unique**, donc la concurrence fait référence à la capacité de la boucle d'événements à exécuter des fonctions de rappel JavaScript après avoir terminé d'autres travaux. 

Tout code censé s'exécuter de manière simultanée doit permettre à la boucle d'événements de continuer à s'exécuter au fur et à mesure que des opérations non JavaScript, telles que les E/S, se produisent.

À titre d'exemple, considérons un cas où chaque demande à un serveur Web prend 50 ms pour se terminer et 45 ms sur ces 50 ms sont des E/S de base de data qui peuvent être effectuées de manière asynchrone. Le choix d'opérations asynchrones non bloquantes libère ces 45 ms par requête pour gérer d'autres requêtes. Il s'agit d'une différence de capacité significative simplement en choisissant d'utiliser des méthodes non bloquantes au lieu de méthodes bloquantes.

La boucle d'événements est différente des modèles dans de nombreux autres langages où des threads supplémentaires peuvent être créés pour gérer le travail simultané.

## Dangers du mélange de code bloquant et non bloquant

Certains schémas doivent être évités lors du traitement des E/S. Regardons un exemple:

```js
  const fs = require('fs');

  fs.readFile('/file.md', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
  fs.unlinkSync('/file.md');
```

Dans l'exemple ci-dessus, `fs.unlinkSync()` est susceptible d'être exécuté avant `fs.readFile()`, ce qui supprimerait `file.md` avant qu'il ne soit réellement lu. 
Une meilleure façon d'écrire ceci, qui est complètement non bloquant et dont l'exécution est garantie dans le bon ordre est:

```js
  const fs = require ('fs');

  fs.readFile ('/ fichier.md', (readFileErr, data) => {
    if (readFileErr) throw readFileErr;
    console.log (data);
    fs.unlink ('/ fichier.md', (unlinkErr) => {
      if (unlinkErr) throw unlinkErr;
    });
  });
```

Ce qui précède place un appel non bloquant à `fs.unlink()` dans le rappel de `fs.readFile()` qui garantit le bon ordre des opérations.
