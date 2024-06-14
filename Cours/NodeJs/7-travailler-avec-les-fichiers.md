Travailler avec le système de fichiers

# Statistiques du fichier

Chaque fichier est livré avec un ensemble de détails que nous pouvons inspecter à l'aide de Node.js.

En particulier, en utilisant la méthode `stat()` fournie par le module `fs`.

Vous l'appelez en passant un chemin de fichier, et une fois que Node.js obtient les détails du fichier, il appellera la fonction de rappel que vous passez, avec 2 paramètres: un message d'erreur et les statistiques du fichier:

```js
  const fs = require('fs')
  fs.stat('/Users/joe/test.txt', (err, stats) => {
    if (err) {
      console.error(err)
      return
    }
    //we have access to the file stats in `stats`
  })
```

Node.js fournit également une méthode de synchronisation, qui bloque le thread jusqu'à ce que les statistiques du fichier soient prêtes :

```js
  const fs = require('fs')
  try {
    const stats = fs.statSync('/Users/joe/test.txt')
  } catch (err) {
    console.error(err)
  }
```

Les informations sur le fichier sont incluses dans la variable stats. Quel type d'informations pouvons-nous extraire à l'aide des statistiques?

Beaucoup, y compris:

* si le fichier est un répertoire ou un fichier, utilisez `stats.isFile()` et `stats.isDirectory()`
* si le fichier est un lien symbolique utilisant `stats.isSymbolicLink()`
* la taille du fichier en octets en utilisant `stats.size()`.

Il existe d'autres méthodes avancées, mais l'essentiel de ce que vous utiliserez dans votre programmation quotidienne est la suivante.

```js
  const fs = require('fs')

  fs.stat('/Users/joe/test.txt', (err, stats) => {
    if (err) {
      console.error(err)
      return
    }

    stats.isFile() //true
    stats.isDirectory() //false
    stats.isSymbolicLink() //false
    stats.size //1024000 //= 1MB
  })
```

## Chemin de fichier

Chaque fichier du système a un chemin. Sous Linux et macOS, un chemin peut ressembler à:

`/users/joe/file.txt`

tandis que sur Windows:

`C:\utilisateurs\joe\file.txt`

Vous devez faire attention lorsque vous utilisez des chemins dans vos applications, car cette différence doit être prise en compte.

Le module `path` permet de régler ces problèmes simplement :

```js


const path = require('path')

```

### Extraire des informations d'un chemin

Étant donné un chemin, vous pouvez en extraire des informations en utilisant ces méthodes:

* **dirname:** récupère le dossier parent d'un fichier
* **basename:** récupère la partie du nom de fichier
* **extname:** récupère l'extension de fichier

Exemple: 

```js
  const notes = '/users/joe/notes.txt'

  path.dirname(notes) // /users/joe
  path.basename(notes) // notes.txt
  path.extname(notes) // .txt

  //extraire uniquement le nom du fichier sans l'extention
  path.basename(notes, path.extname(notes)) // notes

  // concaténer des chemins

  const name = 'joe'
  path.join('/', 'users', name, 'notes.txt') //'/users/joe/notes.txt'

  //résoudre des chemins 
  path.resolve('/etc', 'joe.txt') //'/etc/joe.txt'

  path.normalize('/users/joe/..//test.txt') //'/users/test.txt'
```

### Lire des fichiers

Le moyen le plus simple de lire un fichier dans Node.js est d'utiliser la méthode `fs.readFile()`, en lui passant le chemin du fichier, l'encodage et une fonction de rappel qui sera appelée avec les données du fichier (et l'erreur): 

```js
  const fs = require('fs')

  fs.readFile('/Users/joe/test.txt', 'utf8' , (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    console.log(data)
  })
```

Vous pouvez également utiliser la version synchrone `fs.readFileSync()` : 

```js
  const fs = require('fs')

  try {
    const data = fs.readFileSync('/Users/joe/test.txt', 'utf8')
    console.log(data)
  } catch (err) {
    console.error(err)
  }
```

Les deux méthodes lisent le contenu complet du fichier en mémoire avant de renvoyer les données.

Cela signifie que les gros fichiers vont avoir un impact majeur sur votre consommation de mémoire et la vitesse d'exécution du programme.

Dans ce cas, une meilleure option consiste à lire le contenu du fichier à l'aide de flux.

## écrire des fichiers

Le moyen le plus simple d'écrire dans des fichiers dans Node.js consiste à utiliser l'API `fs.writeFile()`.

```js
  const fs = require('fs')

  const content = 'Some content!'

  fs.writeFile('/Users/joe/test.txt', content, err => {
    if (err) {
      console.error(err)
      return
    }
    //file written successfully
  })
```

Vous pouvez également utiliser la version synchrone `fs.writeFileSync()` :

```js
  const fs = require('fs')

  const content = 'Some content!'

  try {
    const data = fs.writeFileSync('/Users/joe/test.txt', content)
    //file written successfully
  } catch (err) {
    console.error(err)
  }
```

Par défaut, cette API remplacera le contenu du fichier s'il existe déjà.
Vous pouvez modifier la valeur par défaut en spécifiant un indicateur:

```js
  fs.writeFile('/Users/joe/test.txt', content, { flag: 'a+' }, err => {})
```

Les indicateurs que vous utiliserez probablement sont

* **r+** ouvrir le fichier pour lire et écrire
* **w+** ouvrir le fichier pour la lecture et l'écriture, en positionnant le flux au début du fichier. Le fichier est créé s'il n'existe pas
* **a** ouvrez le fichier pour l'écriture, en positionnant le flux à la fin du fichier. Le fichier est créé s'il n'existe pas
* **a+** ouvrir le fichier en lecture et en écriture, en positionnant le flux à la fin du fichier. Le fichier est créé s'il n'existe pas

> (vous pouvez trouver plus d'indicateurs sur https://nodejs.org/api/fs.html#fs_file_system_flags)

## Ajouter à un fichier

Une méthode pratique pour ajouter du contenu à la fin d'un fichier est `fs.appendFile()` (et son équivalent `fs.appendFileSync()`): 

```js
  const content = 'Some content!'

  fs.appendFile('file.log', content, err => {
    if (err) {
      console.error(err)
      return
    }
    //done!
  })
```

## Vérifier si un dossier existe

Utilisez `fs.access()` pour vérifier si le dossier existe et si Node.js peut y accéder avec ses autorisations.

## Créer un nouveau dossier

Utilisez `fs.mkdir()` ou `fs.mkdirSync()` pour créer un nouveau dossier.

```js
  const fs = require('fs')

  const folderName = '/Users/joe/test'

  try {
    if (!fs.existsSync(folderName)) {
      fs.mkdirSync(folderName)
    }
  } catch (err) {
    console.error(err)
  }
```

## Lire un dossier

Utilisez `fs.readdir()` ou `fs.readdirSync()` pour lire le contenu d'un répertoire.

Ce morceau de code lit le contenu d'un dossier, à la fois les fichiers et les sous-dossiers, et renvoie leur chemin relatif:

```js
  const fs = require('fs')
  const path = require('path')

  const folderPath = '/Users/joe'

  fs.readdirSync(folderPath)

  // You can get the full path:

  fs.readdirSync(folderPath).map(fileName => {
    return path.join(folderPath, fileName)
  })

  // You can also filter the results to only return the files, and exclude the folders:

  const isFile = fileName => {
    return fs.lstatSync(fileName).isFile()
  }

  fs.readdirSync(folderPath).map(fileName => {
    return path.join(folderPath, fileName)
  })
  .filter(isFile)
```

## Renommer un dossier

`fs.renameSync()` est la version synchrone:

```js
  const fs = require('fs')

  try {
    fs.renameSync('/Users/joe', '/Users/roger')
  } catch (err) {
    console.error(err)
  }
```

## Supprimer un dossier

Utilisez `fs.rmdir()` ou `fs.rmdirSync()` pour supprimer un dossier.

La suppression d'un dossier contenant du contenu peut être plus compliquée que nécessaire.

Dans ce cas, il est préférable d'installer le module `fs-extra`. Il s'agit d'un remplacement instantané du module `fs`, qui offre plus de fonctionnalités.

Dans ce cas, utilisez la méthode `remove()`.

Installez-le en utilisant:

`npm install fs-extra`

Puis :

```js
  const fs = require('fs-extra')

  const folder = '/Users/joe'

  fs.remove(folder, err => {
    console.error(err)
  })
```

Il peut aussi être utilisé avec des promesses :

```js
  fs.remove(folder)
    .then(() => {
      //done
    })
    .catch(err => {
      console.error(err)
    })
```

Ou avec async/await :

```js
  async function removeFolder(folder) {
    try {
      await fs.remove(folder)
      //done
    } catch (err) {
      console.error(err)
    }
  }

  const folder = '/Users/joe'
  removeFolder(folder)  
```

Plus d'infos sur les modules de fichiers de NodeJs :

* https://nodejs.dev/learn/the-nodejs-fs-module
* https://nodejs.dev/learn/the-nodejs-path-module
* https://nodejs.dev/learn/the-nodejs-os-module
* https://nodejs.dev/learn/nodejs-buffers
* https://nodejs.dev/learn/nodejs-streams
