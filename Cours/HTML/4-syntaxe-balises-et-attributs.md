# Syntaxe, balises et attributs

- Syntaxe, balises et attributs
  - Maîtriser la syntaxe `<balise attribut="valeur"></balise>`
  - Connaître la structure : `html, head, body, <meta charset="utf-8">, title`
  - Connaître la notion de balise de type block et inline
  - Connaître les balises de contenu : `h1, h2…, p, strong, em, a, img,  div, ul, ol, object, blockquote`
  - Connaître les balises de tableau : `table, thead, tbody, tfoot, tr, th,  td, caption`

## Squelette de base d’une page HTML

Le squelette d’une page HTML est la structure qui permet de créer et d’organiser du contenu. Pour qu’il soit reconnu par les navigateurs, il doit respecter une orthographe et un ordre stricte.

 **Exemple :**

```html
  <!DOCTYPE html>

  <html>
    <head>
    <!-- En-tête de la page -->
    <meta charset="utf-8" />
    <title>Bonjour le monde</title>
    </head>

    <body>
    <!-- Corps de la page -->
    <p>Hello World!</p>
    </body>
  </html>
```

[HTML doctype declaration](http://www.w3schools.com/tags/tag_doctype.asp)

## Balise HEAD

Quand nous le regardons de haut en bas, un squelette commence par la tête, l’analogie avec le HTML ne s’arrête pas là car c’est dans la balise que se trouvent les informations nécessaires au fonctionement du corps de la page. La balise contient des éléments *obligatoires et d’autres optionnelles.*

**Exemple :**

```html
  <head>
    <!-- Jeu de caractères -->
    <meta charset="utf-8" />
    
    <!-- Titre de la page -->
    <title>Bonjour le monde</title>

    <!-- Description de la page-->
    <meta name="description" content="description pour les moteurs de recherche">
    
    <!-- Dimention de la page (cf. responsive design) -->
    <meta name="viewport" content="initial-scale=1">
    
    <!-- Lien vers un fichier CSS -->
    <link rel="stylesheet" type="text/css" 
    href="css/style.css">
    
    <!-- Lien vers un script externe -->
    <script src="js/script.js"></script>
  </head>
```

## Structure des balises HTML

Les balises HTML peuvent être de type block ou in-line. Leurs comportements sont différents mais leurs structures reste la même : il faut toujours ouvrir et fermer une balise HTML, lui ajouter un contenu et en option un attribut.

**Exemple :**

```html
  <!-- Les accolades encadrent les balises -->
  <p>Hello World!</p>
  
  <!-- Il est possible d'ajouter une class, une id ou
  les deux -->
  <h1 class="myTitle">Hello World!</h1>
```

## Les types de balises HTML

Le type des balises HTML ont chacune une fonction particulière : le type block permet de créer des sections et le type inline permet de créer des sous-sections. Les balises de types blocks englobe des balises de type in-line.


### Balises de type block

```html  
  <!-- permet de créer une zone dans la page -->
  <div></div>
  <section></section>
  <article></article>
  <main></main>

  <!-- balises pour les titres -->
  <h1>Duis aute irure dolor in reprehenderit</h1>
  <h2>Duis aute irure dolor in reprehenderit</h2>
  <h3>Duis aute irure dolor in reprehenderit</h3>
  <h4>Duis aute irure dolor in reprehenderit</h4>
  <h5>Duis aute irure dolor in reprehenderit</h5>
  <h6>Duis aute irure dolor in reprehenderit</h6>
  
  <!-- permet de créer une zone de texte -->
  <p>Lorem ipsum sit amet</p>
 ``` 

### Balise de type in-line

```html
   <!-- Mettre une portion de texte en gras, en italic -->
  <p>
     <strong>2010-2015 :</strong> Lorem ipsum sit amet, dolor
     <em>Consectetur</em>
  </p>
  
  <!-- Ajouter une image dans une page -->
  <img src="http://site.net/img/logo.png" alt="Le logo">
```

## Fonctionnement des listes HTML

Une liste HTML est un paragraphe structuré contenant une suite de lignes, ces lignes peuvent être ordonnées ou non-ordonnées. Pour fonctionner, une liste à besoin d’un conteneur ol ou ul dans lequel est associé des balises li

**Exemple :**

```html
  <!--Liste ordonnée, chaque li est un nouvel élément de la liste 1,2,3...-->
  <ol>
    <li>Lorem ipsum dolor</li> 
    <li>Duis aute irure dolor in</li> 
    <li>Excepteur sint occaecat</li> 
  </ol>
  
  <!--Liste non-ordonnée, chaque li est une nouvelle puce (•) -->
  <ul> 
    <li>Sed ut perspiciatis unde</li> 
    <li>Neque porro quisquam est</li> 
    <li>Ut enim ad minima veniam</li> 
  </ul>
```

## Le fonctionnement des liens HTML

Les liens HTML peuvent être de deux types : interne ou externe. Les liens internes servent à gérer la navigation sur plusieurs pages d’un même site alors que les externes affichent des pages qui ne font pas parti du site, les liens externes doivent être spécifier à l’utilisateur.

**Exemple :**

```html
  <a href="http://www.google.com">Aller sur la page google</a>
  <a href="mapage.html">Lien relatif au document en cours</a>
  <a href="../mapage.html">Lien relatif au document en cours, un dossier au dessus</a>
  <a href="dossier/mapage.html">Lien relatif au document dans un dossier</a>
  <a href="http://www.google.com" target="_blank">Ce lien s'ouvre dans un nouvel onglet grâce à l'attribut target="_blank"</a>
```

## Fonctionnement des tableaux HTML

Les tableaux ont un fonctionnement proche des listes mais sont composés de plus de balises. Il est possible d’afficher un tableau avec différentes options comme un titre ou un index mais également un header et un footer.

**Exemple :** 

```html
  <!-- Déclarer le tableau -->
  <table>
  
    <!-- titre du tableau -->
     <caption>Duis aute irure dolor in</caption>
  
     <!-- La balise <tr> permet d'ajouter une ligne -->
     <tr>
       <!-- deux cellules d'entête -->
       <th>Lorem</th>
       <th>Ipsum</th>
     </tr>
  
     <!-- Chaque ligne doit avoir le même nombre de colonne -->
     <tr>
       <!-- deux cellules normales -->
       <td>Sed ut perspiciatis unde</td>
       <td>Neque porro quisquam est</td>
     </tr>
  
     <tr>
       <!-- Le paramètre colspan permet de joindre des colonnes -->
       <td colspan="2">Ut enim ad minima veniam</td>
     </tr>
    
    <tr>
       <!-- Le paramètre rowspan permet de joindre des cellules sur plusieurs lignes -->
       <td rowspan="2">Ut enim ad minima veniam</td>
       <td>Neque porro quisquam est</td>
     </tr>
     <tr>
       <!-- La première cellule est fusionnée avec la ligne précédente -->
       <td>Ut enim ad minima veniam</td>
     </tr>
  </table>
```

## Fonctionnement des formulaires HTML

- Connaître les balises de formulaire : form, label, input (text, checkbox, radio), select, option, textarea, button

Pour réaliser un formulaire, il faut utiliser une suite de balises HTML pour permettre à l’utilisateur de renseigner des informations. Comme pour une liste ou un tableau, un formulaire est englobé dans un conteneur dans lequel sont associées des balises LABEL et INPUT.

**Exemple:**

```html
  <form action="" method="get" class="form-example">
  <div class="form-example">
    <label for="name">Enter your name: </label>
    <input type="text" name="name" id="name" required />
  </div>
  <div class="form-example">
    <label for="email">Enter your email: </label>
    <input type="email" name="email" id="email" required />
  </div>
  <div class="form-example">
    <input type="submit" value="Subscribe!" />
  </div>
</form>
```

```html
  <!-- La balise <form> permet de déclarer déclarer un formulaire -->
  <form method="post" action="connexion.php">


    <!-- La balise <label> permet de donner un titre au input qui porte l'identifiant indiqué dans l'attribut "for" -->
    <label for="lePseudo">Votre pseudo</label> : 
    
    <!-- La balise <input> permet de renseigner une donnée-->
    <input type="text" name="pseudo" id="lePseudo" />
    
    <!-- Un input de type submit permet de soumettre le formulaire -->
    <input type="submit" value="Envoyer" />
      
    <!-- Différents type d'imput:-->
    <input type="text" name="exemple" id="exemple" />
    <input type="mail" name="exemple" id="exemple" />
    <input type="tel" name="exemple" id="exemple" />
    <input type="number" name="exemple" id="exemple" />
    <input type="password" name="exemple" id="exemple" />
    <input type="checkbox" name="exemple" id="exemple" />
    <input type="radio" name="exemple" id="exemple" />
    
    <!-- Un input de type submit permet de soumettre le formulaire -->
    <input type="submit" value="Envoyer" />

    <!--champ de sélection-->
    <label for="animaux">Choisir un animal:</label>
    <select name="animaux" id="animaux">
      <option value="">--Veuillez choisir une option--</option>
      <option value="chien">Chien</option>
      <option value="chat">Chat</option>
      <option value="hamster">Hamster</option>
    </select>

    <!-- champ de cases à cocher -->
    <fieldset>
      <legend>Choisir une option:</legend>
      <div>
        <input type="checkbox" id="hero" name="hero" checked />
        <label for="hero">Super héro</label>
      </div>
      <div>
        <input type="checkbox" id="vilain" name="vilain" />
        <label for="vilain">Super vilain</label>
      </div>
    </fieldset>

    <!-- champ de radio boutons -->
    <fieldset>
      <legend>êtes vous d'accord ?</legend>
      <div>
        <input type="checkbox" id="oui" name="oui" checked />
        <label for="oui">Oui</label>
      </div>
      <div>
        <input type="checkbox" id="non" name="non" />
        <label for="non">Non</label>
      </div>
    </fieldset>

    <!-- champ de message -->
    <textarea placeholder="Ma demande..." name="demande" id="demande" cols="30" rows="10"></textarea>

    <p>
      <button type="submit">Valider</button>
    </p>
  </form>
```
