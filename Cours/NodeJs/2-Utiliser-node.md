## Utiliser Node

## démarrer un programme Node

Pour utiliser node, il est d'abord nécessaire de l'installer globalement sur son environnement :

https://nodejs.org/en/

Vous pouvez soit installer la dernière version à partir de l'installeur officiel disponible sur le site internet, soit utiliser un gestionnaire de version de Node (`nvm`, `fnm`, `brew`, `docker`...) qui vous permettra de gérer plusieurs versions isolées de nodejs, utile pour la rétro-comptabilité.

Voici un exemple d'installation avec `nvm` (Node Version Manager) :

```sh
# installs nvm (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# download and install Node.js (you may need to restart the terminal)
nvm install 18.6.1
nvm install 20

# define default version
nvm alias default 20

# use another version
nvm use 18.16.1

# list all version installed by nvm
nvm -l

# verifies the right Node.js version is in the environment
node -v # should print `v18.16.1`

# verifies the right NPM version is in the environment
npm -v
```

La manière habituelle d'exécuter un programme Node.js consiste à exécuter la commande disponible globalement `node` (une fois que vous avez installé Node.js) et à transmettre le nom du fichier que vous souhaitez exécuter.

Si votre fichier d'application Node.js principal est app.js, vous pouvez l'appeler en tapant:

```bash

node app.js

```

> Assurez-vous d'être dans le dossier qui contient votre application :-)

Pour arrêter le processus de l'application, utilisez le raccourcis clavier `ctrl-C`

> Vous pouvez également programmer des processus qui mettrons fin au serveur (voir [ici](https://nodejs.dev/learn/how-to-exit-from-a-nodejs-program) )


## Lire des variables d'environnement

Le module de noyau de processus de Node.js fournit la propriété `env` qui héberge toutes les variables d'environnement qui ont été définies au moment du démarrage du processus.

Voici un exemple qui accède à la variable d'environnement `NODE_ENV`, qui est définie sur `development` par défaut.

Remarque: le processus ne nécessite pas de "requis", il est automatiquement disponible.

```js
    process.env.NODE_ENV // "development"
```

Vous pouvez donc définir n'importe quelle variable d'environnement qui sera accessible dans votre application à l'aide de `process.env.NOM_DE_VARIABLE`

Ces variables prennent le plus sonvent place dans un fichier .ENV à la racine de votre projet.

## Lire des variables d'arguments de commande

Vous pouvez transmettre n'importe quel nombre d'arguments lors de l'appel d'une application Node.js à l'aide de

```bash
    node app.js
```

Les arguments peuvent être autonomes ou avoir une clé et une valeur.

Par exemple:

```bash
    node app.js joe
    # ou
    node app.js name = joe
```

Cela change la façon dont vous récupérerez cette valeur dans le code Node.js.
La façon dont vous le récupérez utilise l'objet de processus intégré à Node.js.

Il expose une propriété `argv`, qui est un tableau contenant tous les arguments d'appel de la ligne de commande.

* Le premier élément est le chemin complet de la commande node.
* Le deuxième élément est le chemin complet du fichier en cours d'exécution.

Tous les arguments supplémentaires sont présents à partir de la troisième position.

Vous pouvez parcourir tous les arguments (y compris le chemin de `node` et le chemin du fichier) en utilisant une boucle:

```js
    process.argv.forEach ((val, index) => {
    console.log (`$ {index}: $ {val}`)
    })
```

Vous ne pouvez obtenir que les arguments supplémentaires en créant un nouveau tableau qui exclut les 2 premiers paramètres:

```js
    const args = process.argv.slice (2)
```

Si vous avez un argument sans nom d'index, comme ceci:

```bash
    node app.js joe
```

vous pouvez y accéder en utilisant

```js
    const args = process.argv.slice (2)
    args[0]
```

Dans ce cas:

```bash
    node app.js name = joe
```

* args[0] est `name=joe`, et vous devez l'analyser. La meilleure façon de le faire est d'utiliser la bibliothèque `minimist`, qui permet de traiter les arguments:

```js

    const args = require ('minimist') (process.argv.slice (2))
    args ['nom'] // joe

```

Cette fois, vous devez utiliser des doubles tirets avant chaque nom d'argument:

```bash
    node app.js --name = joe

```

## Utiliser le retour dans la commande

Vous pouvez utiliser la commande `console.log()` dans votre programme. Les résultats seront affichés directement dans le terminal du programme.

```js
    const x = 'x'
    const y = 'y'
    console.log(x, y)
    console.log('My %s has %d years', 'cat', 2)
    console.clear()
```
