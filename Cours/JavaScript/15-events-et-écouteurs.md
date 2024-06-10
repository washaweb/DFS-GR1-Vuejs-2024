# 15 - Events et écouteurs d'événements

#Formation JS#
*Dernière mise à jour 04/01/2024*

JavaScript est un langage événementiel, c'est à dire que les fonctions sont attachées à des événements, le programme est ensuite exécuté lorsque l'événement est déclenché, par exemple lorsque l'utilisateur clique sur un bouton ou que la page est redimensionnée, que le formulaire est envoyé, etc.
Les événements et les manipulations d'utilisateur en JavaScript sont essentiels pour créer des interactions dynamiques sur une page web. Voici une explication détaillée de ces concepts :

## 1. Les événements

Les événements sont des actions qui se produisent sur une page web et qui peuvent être détectées par JavaScript. Ils peuvent être déclenchés par l'utilisateur (comme cliquer sur un bouton) ou par le navigateur lui-même (comme le chargement de la page). Certains événements courants incluent :

- **Click** : Déclenché lorsque l'utilisateur clique sur un élément.
- **Mouseover** : Déclenché lorsque le curseur de la souris survole un élément.
- **Keydown** : Déclenché lorsque l'utilisateur enfonce une touche du clavier.
- **Submit** : Déclenché lorsqu'un formulaire est soumis.
- **Load** : Déclenché lorsque la page est entièrement chargée.

## Ajout d'événements sur les balises HTML

Les événements peuvent être ajoutés à des balises HTML en utilisant des attributs spéciaux. Par exemple, pour ajouter un écouteur d'événement au clic sur un bouton, vous pouvez utiliser l'attribut `onclick` :

```html
<button onclick="alert('Hello World!')">Cliquez ici</button>
```

Les événements sont alors précédés du préfix `on` : `onclick`, `onmouseover`, `onkeydown`, etc.
Cependant, il n'est pas recommandé d'utilisé ces attributs dans le code HTML, car ils ne peuvent plus être retirés programmatiquement par la suite. On préférera utiliser des gestionnaires d'événements.

## 2. Gestion des événements

La gestion des événements en JavaScript se fait en associant des fonctions de rappel (callbacks) aux événements que vous souhaitez écouter. Vous pouvez le faire en utilisant des méthodes telles que `addEventListener` ou en assignant directement une fonction à une propriété d'événement.

### Ajout d'un écouteur d'événement

La méthode courante pour ajouter un écouteur d'événement est `addEventListener`. Cette méthode prend deux arguments obligatoires : le type d'événement à écouter (comme "click" ou "mouseover") et une fonction de rappel (callback) à exécuter lorsque l'événement se produit.

```javascript
  const bouton = document.getElementById('monBouton');
  bouton.addEventListener('click', () => {
      console.log('Le bouton a été cliqué !');
  });
```

### Retrait d'un écouteur d'événement

Pour retirer un écouteur d'événement, vous devez utiliser la méthode `removeEventListener`. Cependant, vous devez fournir la même fonction de rappel exacte que celle utilisée lors de l'ajout de l'écouteur.

```javascript
const bouton = document.getElementById('monBouton');
const handleClick = () => {
    console.log('Le bouton a été cliqué !');
};
bouton.addEventListener('click', handleClick);

// Plus tard, pour retirer l'écouteur d'événement
bouton.removeEventListener('click', handleClick);
```

### Bubbling d'événements

Le bubbling d'événements (ou propagation des événements) est un mécanisme par lequel un événement déclenché sur un élément parent se propage également à ses éléments enfants. Par défaut, les événements HTML se propagent de l'élément cible vers le haut de l'arborescence du document (de l'élément cible vers ses parents).

Par exemple, si un bouton est cliqué à l'intérieur d'un élément div, l'événement de clic sera d'abord détecté par le bouton lui-même, puis par le div parent, puis par tout autre élément parent de ce div.

### Utilisation de l'écouteur d'événement avec le bubbling

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bubbling d'événements</title>
</head>
<body>
    <div id="parent">
        <button id="monBouton">Cliquez ici</button>
    </div>
    <script>
        const parent = document.getElementById('parent');
        parent.addEventListener('click', () => {
            console.log('L\'élément parent a été cliqué !');
        });
    </script>
</body>
</html>
```

Dans cet exemple, même si l'écouteur d'événement est ajouté à l'élément parent, il sera déclenché lorsque le bouton est cliqué à l'intérieur de cet élément en raison du bubbling d'événements.

En résumé, les écouteurs d'événements sont utilisés pour détecter et réagir aux actions de l'utilisateur sur une page web. Ils peuvent être ajoutés et retirés dynamiquement, et le bubbling d'événements est un comportement important à comprendre lors de la gestion des événements dans le DOM.

## L'objet Event

L'objet `Event` en JavaScript représente un événement qui se produit dans le navigateur pendant l'interaction de l'utilisateur avec la page web. Cet objet contient des informations sur l'événement lui-même, telles que son type, la cible sur laquelle il s'est produit, les coordonnées de la souris, etc. Lorsqu'un gestionnaire d'événement est déclenché, cet objet est passé en argument au gestionnaire d'événement, fournissant ainsi toutes les informations nécessaires sur l'événement qui s'est produit.

Voici quelques-unes des propriétés les plus couramment utilisées de l'objet `Event` :

1. **`type`** : Le type de l'événement (par exemple, "click", "mouseover", "keydown", etc.).
2. **`target`** : L'élément sur lequel l'événement a été déclenché (la cible de l'événement).
3. **`currentTarget`** : L'élément qui a actuellement le gestionnaire d'événements attaché.
4. **`preventDefault()`** : Méthode qui empêche le comportement par défaut de l'événement (par exemple, empêcher le formulaire de se soumettre ou empêcher un lien de naviguer vers une nouvelle page).
5. **`stopPropagation()`** : Méthode qui arrête la propagation de l'événement dans la phase de bubbling ou de capture.
6. **`keyCode`** : Le code de la touche du clavier pressée (pour les événements de clavier).
7. **`clientX`**, **`clientY`** : Les coordonnées horizontales et verticales du pointeur de la souris par rapport à la fenêtre de visualisation.

### Exemple d'utilisation dans un gestionnaire d'événement

```js
const bouton = document.getElementById('monBouton');
bouton.addEventListener('click', (event) => {
    console.log('Événement type :', event.type);
    console.log('Élément cible :', event.target);
    console.log('Coordonnées de la souris :', event.clientX, event.clientY);
    event.preventDefault(); // Empêche le comportement par défaut du clic sur le lien
});
```

Dans cet exemple, lorsque le bouton est cliqué, les informations sur l'événement sont affichées dans la console, et la méthode `preventDefault()` est utilisée pour empêcher le comportement par défaut de l'événement de clic (dans ce cas, le lien ne naviguera pas vers une nouvelle page).

### preventDefault

Il arrive parfois que l'on souhaite stopper le comportement par défaut de l'éléments sur lequel on a interragit.

Par exemple, lorsqu'on clique sur le bouton submit d'un formulaire, et que l'on souhaite stopper l'envoi pour effectuer d'abord une vérification des champs avant l'envoi avec Javascript :

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Formulaire de vérification</title>
</head>
<body>

<form id="monFormulaire">
    <label for="nom">Nom :</label>
    <input type="text" id="nom" name="nom"><br><br>
    
    <label for="email">Email :</label>
    <input type="email" id="email" name="email"><br><br>
    
    <button type="submit">Envoyer</button>
</form>

<script>
const formulaire = document.getElementById('monFormulaire');

formulaire.addEventListener('submit', (event) => {
    // Récupérer les valeurs des champs du formulaire
    const nom = document.getElementById('nom').value;
    const email = document.getElementById('email').value;
    
    // Vérifier si les champs sont vides
    if (nom.trim() === '' || email.trim() === '') {
        // Empêcher la soumission du formulaire
        event.preventDefault();
        // Afficher un message d'erreur
        alert('Veuillez remplir tous les champs du formulaire.');
    }
});
</script>

</body>
</html>
```

Dans cet exemple, nous avons un formulaire simple avec un champ de texte pour le nom et un champ d'email. Lorsque le formulaire est soumis, un gestionnaire d'événements est déclenché. Dans ce gestionnaire, nous récupérons les valeurs des champs du formulaire et vérifions s'ils sont vides en utilisant trim() pour supprimer les espaces vides au début et à la fin. Si l'un des champs est vide, nous utilisons preventDefault() pour empêcher la soumission du formulaire et affichons un message d'erreur. Sinon, le formulaire est soumis normalement.

## stopPropagation

Pour empêcher la propagation d'un événement et donc stopper le bubbling d'événements, vous pouvez utiliser la méthode `stopPropagation()` sur l'objet de l'événement lui-même. Cette méthode arrête la propagation de l'événement à travers la phase de bubbling.

Voici comment l'utiliser dans un gestionnaire d'événements :

```html
  <div onclick="alert('ça ne marche pas')">
    <button id="button">click me</button>
  </div>
```

```javascript
  const button = document.getElementById('button');
  button.addEventListener('click', (event) => {
    event.stopPropagation();
    console.log('Le bouton a été cliqué, mais ne déclenchera par l’alert du div !');
  });
```

Dans cet exemple, lorsque le lien est cliqué, la propagation de l'événement de clic est stoppée, donc aucun autre gestionnaire d'événements sur les éléments parents ne sera appelé.

Il est important de noter que `stopPropagation()` n'empêche pas l'exécution du gestionnaire d'événements actuel sur l'élément sur lequel il est appelé. Cela signifie que le gestionnaire d'événements associé au bouton sera toujours exécuté dans cet exemple. Si vous souhaitez également empêcher l'exécution du gestionnaire d'événements actuel, vous pouvez utiliser `event.preventDefault()` en plus de `stopPropagation()`.
