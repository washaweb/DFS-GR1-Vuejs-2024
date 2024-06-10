# 01 - Présentation et historique de JavaScript

#Formation JS#
*Dernière mise à jour 04/01/2024*

## Origines et évolution

JavaScript est une langage de programmation de type multi-paradigme, créé en mai 1995 par Brendan Eich au sein de Netscape Communications Corporation. Initialement conçu pour ajouter des effets dynamiques à des pages web statiques, JavaScript est depuis devenu un outil indispensable pour la création de pages web interactives et vivantes, permettant d'ajouter une couche
d'intelligenté et de fonctionnalité supplémentaire aux applications web.

L'implémentation concurrente de JavaScript par Microsoft dans Internet Explorer jusqu'à sa version 9 se nommait JScript, tandis que celle d'Adobe Systems se nommait ActionScript. 
Depuis lors, JavaScript a connu plusieurs mises à jour et évolutions pour répondre aux besoins croissants des développeurs web et des utilisateurs. Au fil du temps, JavaScript s'est étendu au-delà de la simple manipulation du Document Object Model (DOM), en incluant des fonctionnalités telles que :

* Gestion d'événements et interactivité (changement d'état, animations...)
* Traitement de formulaires et inputs
* Manipulation de tableaux et d'arrays
* Manipulation mathématique et logique
* Fonctions et classes
* Requêtes HTTP avec AJaX (Asynchronous JavaScript And XML)
* Utilisation de bibliothèques et frameworks

## Avantages et utilisations

JavaScript est avant tout un langage de type front-end, utilisé principalement dans le développement de pages web dynamiques et interactives. Bien qu'il exite également un moteur Javascript qui fonctionne côté serveur, nomé NodeJs.

Les principaux avantages de JavaScript :

* Permet de créer des pages web plus intéractives et vivantes, en ajoutant une couche supplémentaire d'intelligenté et de fonctionnalité à la page HTML et CSS.
* Peut être utilisé pour valider les données d'un formulaire avant leur envoi vers un serveur ou effectuer des calculs sur du contenu dynamique.
* Permet de manipuler le DOM (Document Object Model) pour changer la structure, le style et le contenu des éléments HTML en réponse à des événements utilisateur ou en fonction de conditions spécifiques ou d'interactions utilisateurs.

## Inclure du JavaScript

Il existe plusieurs façon d'intégrer du JavaScript dans une page,

* Ecrire un événement directement dans les attributs d'une balise HTML (onClick, onMouseEnter, onFocus, onMouseOver, etc.)
* Ajouter une balise script dans le code HTML
* Utiliser un fichier externe

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document simple JavaScript</title>
    <!-- Ajouter un événement au bouton -->
  </head>
  <body>
    <!-- 1 : on peut ajouter un événement javascript sur n'importe quelle balise HTML, ici : appel de maFonction() au clic sur le bouton #myButton -->
    <button id="myButton" onclick="maFonction()">Appeler une fonction au click sur le bouton</button>
    <p id="myParagraph"></p>

    <!-- 2 : on peut ajouter une balise script pour inclure du code javascript -->
    <script>
      // Définissez votre fonction JavaScript ici
      function maFonction(){
        // manipulation du code HTML avec Javascript pour ajouter le texte 'Hello JavaScript' dans le p#myParagraph
        document.querySelector('#myParagraph').textContent = 'Hello JavaScript'
      }
    </script>

    <!-- 3: on peut aussi inclure du code javascript dans un fichier externe -->
    <script src="js/main.js"></script>
  </body>
</html>
```
