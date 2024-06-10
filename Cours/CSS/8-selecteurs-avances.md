# Sélecteurs CSS avancés

Les sélecteurs CSS avancés, tels que `>`, `~`, `+`, les pseudo-classes et les pseudo-sélecteurs, vous permettent de cibler des éléments HTML de manière plus spécifique en fonction de leur relation avec d'autres éléments, de leur état, ou de leurs caractéristiques.

1. **Sélecteur d'enfant direct (`>`)** :
   - Le sélecteur `>` cible les éléments qui sont des enfants directs d'un élément spécifié.
   - Par exemple, `div > p` ciblera tous les éléments `<p>` qui sont des enfants directs d'éléments `<div>`.

   Exemple :

   ```css
   div > p {
       color: red;
   }
   ```

2. **Sélecteur de frère général (`~`)** :
   - Le sélecteur `~` cible les éléments qui sont des frères (éléments ayant le même parent) et qui suivent immédiatement l'élément spécifié.
   - Par exemple, `h2 ~ p` ciblera tous les éléments `<p>` qui suivent immédiatement les éléments `<h2>`.

   Exemple :

   ```css
   h2 ~ p {
       font-weight: bold;
   }
   ```

3. **Sélecteur de frère adjacent (`+`)** :

   - Le sélecteur `+` cible les éléments qui sont des frères et qui sont immédiatement adjacents à l'élément spécifié.
   - Par exemple, `h2 + p` ciblera uniquement le premier élément `<p>` qui suit immédiatement un élément `<h2>`.

   Exemple :

   ```css
   h2 + p {
       font-style: italic;
   }
   ```

## Les pseudo-classes

- Les pseudo-classes permettent de cibler des éléments en fonction de leur état ou de leur interaction avec l'utilisateur.
- Par exemple, `:hover` ciblera un élément lorsque le curseur de la souris est dessus.

Exemple :

```css
a:hover {
    text-decoration: underline;
}
```

Voici d'autres exemples de pseudo-classes couramment utilisées :

- `:active` : Cible un élément lorsqu'il est activé, par exemple lorsqu'un lien est cliqué.
- `:focus` : Cible un élément lorsqu'il est en cours de 'focus', par exemple lorsqu'un champ de formulaire est sélectionné.
- `:visited` : Cible un lien qui a déjà été visité


### Exemples complet d'utilisation des pseudo-classes

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulaire interactif</title>
    <style>
        /* Style de base pour le formulaire */
        form {
            max-width: 400px;
            margin: 0 auto;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
            background-color: #f7f7f7;
        }

        /* Style des champs de formulaire */
        input[type="text"], input[type="email"], textarea {
            width: 100%;
            padding: 10px;
            margin-bottom: 10px;
            border: 1px solid #ccc;
            border-radius: 3px;
        }

        /* Style du bouton de soumission */
        input[type="submit"] {
            background-color: #007bff;
            color: #fff;
            padding: 10px 20px;
            border: none;
            border-radius: 3px;
            cursor: pointer;
        }

        /* Style du bouton de soumission au survol */
        input[type="submit"]:hover {
            background-color: #19d232;
        }
        /* Style du bouton de soumission au click */
        input[type="submit"]:active {
            background-color: #119e24;
        }

        /* Style du champ de formulaire hover */
        input[type="text"]:hover, input[type="email"]:hover, textarea:hover,
        input[type="text"]:active, input[type="email"]:active, textarea:active {
            border-color: #75b5fa;
        }
        /* Style du champ de formulaire focus */
        input[type="text"]:focus, input[type="email"]:focus, textarea:focus {
            border-color: #007bff;
            box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
        }

        /* Style du champ de formulaire au blur (lorsque l'utilisateur quitte le champ) */
        input[type="text"]:blur, input[type="email"]:blur, textarea:blur {
            border-color: #ccc;
            box-shadow: none;
        }
    </style>
</head>
<body>
    <form>
        <label for="name">Nom :</label>
        <input type="text" id="name" name="name" placeholder="Entrez votre nom">

        <label for="email">Email :</label>
        <input type="email" id="email" name="email" placeholder="Entrez votre email">

        <label for="message">Message :</label>
        <textarea id="message" name="message" rows="4" placeholder="Écrivez votre message"></textarea>

        <input type="submit" value="Envoyer">
    </form>
</body>
</html>
```

## Pseudo-sélecteurs

- Les pseudo-sélecteurs permettent de cibler des éléments en fonction de leurs caractéristiques ou de leur position dans la structure du document.
- Par exemple, `::before` cible le contenu généré avant un élément.

Exemple :

```css
p::before {
    content: "➤ ";
    color: #007bff;
}
```

Voici d'autres exemples de pseudo-sélecteurs couramment utilisés :

- `::after` : Cible le contenu généré après un élément.
- `::first-line` : Cible la première ligne de texte à l'intérieur d'un élément.
- `::first-letter` : Cible la première lettre d'un élément.
- `:first-child` : Cible le premier enfant d'un élément parent.
- `:last-child` : Cible le dernier enfant d'un élément parent.
- `::first-of-type` : Cible la première occurence d'un élément d'un certain type.
- `::last-of-type` : Cible la dernière occurence d'un élément d'un certain type.

Les pseudo-éléments `::before` et `::after` sont couramment utilisés pour ajouter du contenu généré avant et après un élément HTML. Voici un exemple simple d'utilisation de ces pseudo-éléments pour ajouter des icônes avant et après un élément de texte :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemple d'utilisation des pseudo-éléments ::before et ::after</title>
    <style>
        /* Style de base pour le texte */
        .element {
            font-size: 24px;
            font-weight: bold;
            text-align: center;
        }

        /* Ajout d'une flèche à gauche du texte */
        .element::before {
            content: "←";
            margin-right: 10px;
        }

        /* Ajout d'une étoile à droite du texte */
        .element::after {
            content: "★";
            margin-left: 10px;
        }
    </style>
</head>
<body>
    <p class="element">Texte avec des pseudo-éléments ::before et ::after</p>
</body>
</html>
```

Dans cet exemple :

- Nous avons créé un élément HTML `<p>` avec la classe `.element`.
- Nous avons utilisé les pseudo-éléments `::before` et `::after` pour ajouter respectivement une flèche à gauche et une étoile à droite du texte.
- Les propriétés `content` définissent le contenu généré, qui peut être du texte, des icônes ou même des images.
- Nous avons ajouté des marges (`margin-right` et `margin-left`) pour espacer le contenu généré du texte principal.

Lorsque vous ouvrez cette page dans un navigateur, vous verrez le texte avec une flèche à gauche et une étoile à droite, ajoutées grâce aux pseudo-éléments `::before` et `::after`. Vous pouvez personnaliser le contenu, les styles et la mise en page des pseudo-éléments pour répondre à vos besoins spécifiques.

## conclusion

Ces sélecteurs CSS avancés et pseudo-classes/pseudo-sélecteurs vous offrent un contrôle plus précis sur la mise en forme et le comportement des éléments de votre page web en ciblant des éléments spécifiques en fonction de leur relation, de leur état ou de leurs caractéristiques. Ils sont particulièrement utiles pour créer des styles interactifs et personnalisés.
