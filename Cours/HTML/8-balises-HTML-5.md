# Les nouvelles balises HTML5

HTML5 a introduit de nombreuses nouvelles balises pour rendre le marquage des pages web plus sémantique et significatif. Ces balises permettent une meilleure structuration du contenu et une amélioration de l'accessibilité. Voici quelques-unes des principales balises HTML5 :

1. `<header>` : Cette balise représente l'en-tête d'une section ou d'une page. Elle contient généralement des éléments tels que des logos, des titres, des menus de navigation, etc.
2. `<nav>` : Utilisée pour définir une section de navigation, cette balise est généralement utilisée pour regrouper les liens de navigation de haut niveau.
3. `<main>` : Cette balise indique le contenu principal de la page, et il ne devrait y avoir qu'une seule occurrence de cette balise par page.
4. `<article>` : Utilisée pour définir une section de contenu indépendante et autonome, comme un article de blog, une actualité, un commentaire, etc.
5. `<section>` : Permet de diviser une page en sections logiques ou thématiques. Elle est utile pour organiser le contenu de manière hiérarchique.
6. `<aside>` : Représente du contenu qui est généralement considéré comme secondaire ou complémentaire au contenu principal de la page, comme une barre latérale.
7. `<footer>` : Représente le pied de page d'une section ou d'une page. Elle contient généralement des informations telles que les informations de copyright, les liens vers la politique de confidentialité, etc.
8. `<figure>` et `<figcaption>` : `<figure>` est utilisée pour encapsuler du contenu multimédia, comme des images, des vidéos, ou des graphiques, tandis que `<figcaption>` est utilisée pour fournir une légende ou une description de ce contenu.
9. `<time>` : Cette balise est utilisée pour marquer des dates ou des heures dans le contenu de la page de manière sémantique.
10. `<mark>` : Utilisée pour mettre en évidence ou marquer du texte dans le contenu, souvent pour indiquer des termes de recherche ou des éléments importants.
11. `<progress>` : Cette balise permet de créer une barre de progression pour afficher l'état d'avancement d'une tâche ou d'une opération.
12. `<meter>` : Utilisée pour représenter une mesure dans un intervalle spécifique, comme une jauge ou un graphique.
13. `<details>` et `<summary>` : `<details>` est utilisée pour créer un élément de détails ou de divulgation, tandis que `<summary>` définit le texte visible pour activer ou désactiver les détails.
14. `<dialog>` : Cette balise permet de créer une boîte de dialogue modale pour interagir avec l'utilisateur.
15. `<wbr>` : Utilisée pour indiquer un point d'insertion possible pour un saut de ligne facultatif.

Ces balises HTML5 ont été conçues pour rendre la structure des pages web plus claire et faciliter l'interprétation du contenu par les navigateurs et les lecteurs d'écran. L'utilisation appropriée de ces balises peut améliorer l'accessibilité et le référencement de votre site web, tout en rendant votre code HTML plus sémantique et lisible.

## Exemple d'utilisation

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ma page HTML5</title>
</head>
<body>

<header>
    <h1>Mon Site Web</h1>
    <nav>
        <ul>
            <li><a href="#">Accueil</a></li>
            <li><a href="#">À propos</a></li>
            <li><a href="#">Services</a></li>
        </ul>
    </nav>
</header>

<main>
    <section>
        <h2>Article 1</h2>
        <article>
            <h3>Titre de l'article</h3>
            <p>Ceci est le contenu de mon premier article.</p>
        </article>
    </section>

    <section>
        <h2>Article 2</h2>
        <article>
            <h3>Un autre article</h3>
            <p>Ceci est un autre article dans une section différente.</p>
        </article>
    </section>
</main>

<aside>
    <h2>Barre latérale</h2>
    <p>Contenu de la barre latérale.</p>
</aside>

<footer>
    <p>&copy; 2023 Mon Site Web. Tous droits réservés.</p>
</footer>

</body>
</html>
```

Dans cet exemple :

- `<header>` contient le titre du site et la navigation.
- `<nav>` regroupe les liens de navigation.
- `<main>` englobe le contenu principal de la page, composé de deux `<section>` contenant des `<article>`.
- `<aside>` est utilisée pour la barre latérale.
- `<footer>` contient les informations de copyright.

Cet exemple illustre comment vous pouvez utiliser les nouvelles balises HTML5 pour structurer votre page de manière sémantique et rendre le code plus lisible et compréhensible.
