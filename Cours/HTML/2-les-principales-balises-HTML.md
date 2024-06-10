# Les principales Balises HTML

## Introduction aux Balises HTML

HTML (HyperText Markup Language) utilise des balises pour marquer différents éléments sur une page web. Voici quelques balises couramment utilisées :

### 1. `<div>`

La balise `<div>` est utilisée pour diviser une page web en sections ou en conteneurs.

Exemple :

```html
<div id="conteneur">
    <p>Ceci est un paragraphe à l'intérieur d'une div.</p>
</div>
```

### 2. `<span>`

La balise `<span>` est utilisée pour appliquer des styles à une partie de texte à l'intérieur d'un élément.

Exemple :

```html
<p>Le texte normal <span style="color: red;">texte en rouge</span>.</p>
```

### 3. `<a>`

La balise `<a>` est utilisée pour créer des liens hypertexte.

Exemple :

```html
<a href="https://www.example.com">Visitez Example.com</a>
```

### 4. `<img>`

La balise `<img>` est utilisée pour afficher des images sur la page.

Exemple :

```html
<img src="image.jpg" alt="Description de l'image">
```

### 5. `<ul>` et `<ol>`

Les balises `<ul>` (liste non ordonnée) et `<ol>` (liste ordonnée) sont utilisées pour créer des listes.

Exemple d'une liste non ordonnée :

```html
<ul>
    <li>Élément 1</li>
    <li>Élément 2</li>
</ul>
```

Exemple d'une liste ordonnée :
```html
<ol>
    <li>Étape 1</li>
    <li>Étape 2</li>
</ol>
```

### 6. `<table>`

La balise `<table>` est utilisée pour créer des tableaux.

Exemple :

```html
<table>
    <tr>
        <th>Titre 1</th>
        <th>Titre 2</th>
    </tr>
    <tr>
        <td>Donnée 1</td>
        <td>Donnée 2</td>
    </tr>
</table>
```

### 7. `<form>`

La balise `<form>` est utilisée pour créer des formulaires interactifs.

Exemple :

```html
<form action="traitement.php" method="post">
    <label for="nom">Nom :</label>
    <input type="text" id="nom" name="nom">
    <input type="submit" value="Envoyer">
</form>
```

### 8. `<input>`

La balise `<input>` est utilisée dans les formulaires pour recueillir des informations de l'utilisateur.

Exemple :

```html
<input type="text" id="nom" name="nom" placeholder="Entrez votre nom">
```

### 9. `<button>`

La balise `<button>` est utilisée pour créer des boutons interactifs.

Exemple :

```html
<button type="button">Cliquez-moi</button>
```

### 10. `<iframe>`

La balise `<iframe>` est utilisée pour incorporer des pages web ou d'autres contenus.

Exemple :

```html
<iframe src="https://www.example.com"></iframe>
```

Ces balises sont quelques-unes des plus couramment utilisées en HTML, mais il en existe de nombreuses autres pour des fonctionnalités plus avancées.
