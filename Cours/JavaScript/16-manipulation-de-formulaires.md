# 16 - Manipulation de formulaires

#Formation JS#
*Dernière mise à jour 04/01/2024*


La manipulation des formulaires et des inputs en JavaScript permet de récupérer les valeurs des champs de formulaire, de les modifier dynamiquement et de valider les données avant de les soumettre. 

## Récupérer la valeur d'un champ de formulaire

Pour récupérer la valeur d'un champ de formulaire, vous pouvez utiliser la propriété `value` de l'élément input.

```js
const nom = document.getElementById('nom').value;
```

## Modifier la valeur d'un champ de formulaire

Pour modifier la valeur d'un champ de formulaire, vous pouvez également utiliser la propriété `value`.

```js
document.getElementById('nom').value = 'Nouvelle valeur';
```

## Valider les données d'un formulaire

Vous pouvez valider les données d'un formulaire en vérifiant si les champs sont remplis correctement avant de soumettre le formulaire. Par exemple, vous pouvez vérifier si un champ est vide ou si une adresse e-mail est valide.

## Empêcher la soumission d'un formulaire

Pour empêcher la soumission d'un formulaire en JavaScript, vous pouvez utiliser la méthode `preventDefault()` de l'objet Event dans le gestionnaire d'événements de soumission (`submit`).

```js
formulaire.addEventListener('submit', (event) => {
    event.preventDefault();
    // Autres opérations de validation ou de traitement
});
```

## Ajouter ou supprimer des attributs à un champ de formulaire

Vous pouvez ajouter ou supprimer des attributs HTML à un champ de formulaire en utilisant les méthodes `setAttribute()` et `removeAttribute()`.

```js
document.getElementById('email').setAttribute('disabled', true);
document.getElementById('email').removeAttribute('disabled');
```

## Manipuler les classes CSS d'un champ de formulaire

Vous pouvez ajouter, supprimer ou basculer des classes CSS sur un champ de formulaire en utilisant les méthodes `classList.add()`, `classList.remove()` et `classList.toggle()`.

```js
document.getElementById('email').classList.add('error');
document.getElementById('email').classList.remove('error');
document.getElementById('email').classList.toggle('error');
```

Ces opérations de base permettent de manipuler les formulaires et les inputs en JavaScript de manière dynamique et interactive, ce qui est utile pour la création d'applications web interactives.

## Exemple

Voici un exemple complet d'interaction avec un formulaire en HTML, CSS et JavaScript. Dans cet exemple, nous récupérons les valeurs des champs de formulaire lors de la soumission du formulaire, validons les données et affichons un message de confirmation si les données sont valides.

HTML :

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Formulaire d'interaction</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>

  <form id="monFormulaire">
      <label for="nom">Nom :</label>
      <input type="text" id="nom" name="nom"><br><br>
      
      <label for="email">Email :</label>
      <input type="email" id="email" name="email"><br><br>
      
      <button type="submit">Envoyer</button>
  </form>

  <div id="message"></div>

  <script src="script.js"></script>
</body>
</html>
```

CSS (styles.css) :

```css
/* Styles CSS */
#error-message {
    color: red;
}
```

JavaScript (script.js) :

```javascript
// Récupérer le formulaire
const formulaire = document.getElementById('monFormulaire');
// Récupérer le champ de message
const message = document.getElementById('message');

// Ajouter un gestionnaire d'événements de soumission au formulaire
formulaire.addEventListener('submit', (event) => {
    // Empêcher la soumission du formulaire
    event.preventDefault();
    
    // Récupérer les valeurs des champs du formulaire
    const nom = document.getElementById('nom').value;
    const email = document.getElementById('email').value;
    
    // Valider les données du formulaire
    if (nom.trim() === '' || email.trim() === '') {
        // Afficher un message d'erreur si les champs sont vides
        message.textContent = 'Veuillez remplir tous les champs du formulaire.';
        message.classList.add('error');
    } else {
        // Afficher un message de confirmation si les données sont valides
        message.textContent = `Merci, ${nom} ! Votre formulaire a été soumis avec succès.`;
        message.classList.remove('error');
    }
});
```

Dans cet exemple, lorsque le formulaire est soumis, nous récupérons les valeurs des champs de formulaire et les validons. Si l'un des champs est vide, nous affichons un message d'erreur. Sinon, nous affichons un message de confirmation avec le nom soumis.
