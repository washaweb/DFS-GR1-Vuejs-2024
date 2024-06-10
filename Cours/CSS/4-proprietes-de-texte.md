# Modifier l'apparence des textes

## Principales propriétés de modification de texte

Voici une liste de propriétés CSS couramment utilisées pour modifier l'apparence d'un texte.

1. `color` : Définit la couleur du texte.

   Exemple :

   ```css
   p {
       color: red;
   }
   ```

2. `font-family` : Définit la famille de police du texte.

   Exemple :

   ```css
   p {
       font-family: Arial, sans-serif;
   }
   ```

3. `font-size` : Définit la taille de la police du texte.

   Exemple :

   ```css
   h1 {
       font-size: 24px;
   }
   ```

4. `font-weight` : Définit l'épaisseur de la police du texte (normale, gras, etc.).

   Exemple :

   ```css
   strong {
       font-weight: bold;
   }
   ```

5. `font-style` : Définit le style de la police du texte (normal, italique, oblique, etc.).

   Exemple :

   ```css
   em {
       font-style: italic;
   }
   ```

6. `text-decoration` : Définit la décoration du texte (souligné, barré, etc.).

   Exemple :

   ```css
   a {
       text-decoration: underline;
   }
   ```

7. `text-transform` : Transforme le texte en majuscules, minuscules ou en capitales.

   Exemple :

   ```css
   .uppercase {
       text-transform: uppercase;
   }
   ```

8. `line-height` : Définit la hauteur de ligne du texte.

   Exemple :

   ```css
   p {
       line-height: 1.5;
   }
   ```

9. `letter-spacing` : Définit l'espacement entre les lettres du texte.

   Exemple :

   ```css
   h2 {
       letter-spacing: 2px;
   }
   ```

10. `text-align` : Aligne le texte à gauche, à droite, au centre, ou justifié.

    Exemple :

    ```css
    .center-text {
        text-align: center;
    }
    ```

11. `text-indent` : Définit l'indentation de la première ligne du texte.

    Exemple :

    ```css
    p {
        text-indent: 20px;
    }
    ```

12. `white-space` : Contrôle le comportement de l'espacement et des sauts de ligne.

    Exemple :

    ```css
    pre {
        white-space: pre-line;
    }
    ```

Ces propriétés CSS vous permettent de personnaliser l'apparence du texte sur votre site web en ajustant la couleur, la police, la taille, la décoration, et d'autres aspects du texte selon vos besoins. 
Vous pouvez combiner ces propriétés pour créer des styles de texte uniques et attrayants.

## Intégrer une typographie personnalisée

### Utiliser Google fonts

Pour utiliser des polices personnalisées de Google Fonts dans votre site web, suivez ces étapes :

1. **Accédez à Google Fonts** :

   Rendez-vous sur le site Google Fonts à l'adresse https://fonts.google.com/.

2. **Recherchez une police** :

   Utilisez la barre de recherche ou explorez les différentes polices disponibles. Lorsque vous trouvez une police qui vous plaît, cliquez dessus pour en savoir plus.

3. **Sélectionnez des styles** :

   Sur la page de la police, vous pouvez choisir différents styles, comme le gras, l'italique, etc. Sélectionnez les styles que vous souhaitez utiliser dans votre site.

4. **Ajoutez la police à votre collection** :

   Cliquez sur le bouton "Sélectionner cette police" à côté du style que vous voulez. Une petite fenêtre s'ouvrira en bas de la page. Vous pouvez y voir la liste des polices que vous avez sélectionnées.

5. **Personnalisez les options** (facultatif) :

   Vous pouvez personnaliser davantage votre sélection en ajustant les options telles que la taille, l'espacement et les caractères spécifiques que vous voulez inclure.

6. **Intégrez les polices dans votre site** :

   Une fois que vous avez sélectionné vos polices, cliquez sur l'icône de la valise en bas à droite. Vous verrez une fenêtre contextuelle avec des codes d'intégration. Par défaut, Google Fonts propose deux méthodes d'intégration : "Lien HTML" et "CSS @import".

   - **Lien HTML** : Copiez le code `<link>` fourni et collez-le dans la section `<head>` de votre page HTML. Cette méthode est recommandée car elle permet un chargement asynchrone des polices pour améliorer la vitesse de chargement de la page.

   Exemple :

   ```html
   <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nom+de+la+Police">
   ```

   - **CSS @import** : Si vous préférez, vous pouvez copier le code `@import` fourni et le coller dans votre feuille de style CSS. Assurez-vous de le placer en haut de votre feuille de style.

   Exemple :

   ```css
   @import url('https://fonts.googleapis.com/css?family=Nom+de+la+Police');
   ```

7. **Utilisez la police dans votre CSS** :

   Après avoir ajouté le lien ou l'import dans votre HTML ou votre feuille de style, vous pouvez utiliser la police dans votre CSS en spécifiant la famille de police dans vos règles.

   Exemple :

   ```css
   body {
       font-family: 'Nom de la Police', sans-serif;
   }
   ```

8. **Testez votre site** :

   Assurez-vous de tester votre site pour vérifier que la police Google Fonts est correctement chargée et appliquée aux éléments que vous avez stylisés.

Google Fonts simplifie grandement l'intégration de polices personnalisées dans vos sites web et offre une grande variété de polices gratuites à choisir.


### Intégrer sa propre police de caractères

Pour insérer une police personnalisée en CSS, vous pouvez suivre ces étapes :

1. **Choisissez votre police personnalisée** :
   Tout d'abord, vous devez choisir la police que vous souhaitez utiliser. Vous pouvez trouver des polices personnalisées sur des sites web de polices en ligne tels que Google Fonts (https://fonts.google.com/), Adobe Fonts (https://fonts.adobe.com/), ou d'autres sources.

2. **Téléchargez la police** :
   Une fois que vous avez trouvé une police personnalisée qui vous convient, téléchargez-la sur votre ordinateur. Assurez-vous que le fichier de police est au format TrueType Font (TTF), OpenType Font (OTF), ou un autre format de police standard. Attention, vous devez respecter des formats de police compatibles. Vous pouvez toujours utiliser un service de conversion de font pour obtenir les bons formats comme le [Webfont Generator de FontSquirrel](https://www.fontsquirrel.com/tools/webfont-generator).

3. **Hébergez la police** :
   Vous devez héberger la police sur un serveur web ou utiliser un service de polices en ligne pour que vos visiteurs puissent la télécharger. Vous pouvez téléverser le fichier de police sur votre propre serveur ou utiliser un service tel que Google Fonts pour héberger la police.

4. **Ajoutez la police à votre feuille de style CSS** :
   Utilisez la règle `@font-face` pour définir la police personnalisée dans votre feuille de style CSS. Voici un exemple :

   ```css
   @font-face {
       font-family: 'MaPolice'; /* Nom de la police personnalisée */
       src: url('chemin-vers-le-fichier-de-la-police.ttf') format('truetype'); /* Chemin vers le fichier de la police */
   }
   ```

   Assurez-vous de remplacer `'MaPolice'` par le nom que vous souhaitez donner à votre police personnalisée et `'chemin-vers-le-fichier-de-la-police.ttf'` par le chemin relatif ou absolu vers le fichier de la police.

5. **Utilisez la police personnalisée dans votre CSS** :
   Maintenant que vous avez défini la police personnalisée, vous pouvez l'utiliser pour styliser les éléments de votre page en spécifiant la famille de police dans vos règles CSS. Par exemple :

   ```css
   body {
       font-family: 'MaPolice', sans-serif;
   }
   ```

   Dans cet exemple, `'MaPolice'` fait référence au nom que vous avez donné à la police personnalisée dans l'étape précédente.

6. **Assurez-vous que la police est chargée** :
   Veillez à ce que la police personnalisée soit correctement chargée sur votre site web en vérifiant que le chemin vers le fichier de police est correct et que la police est accessible depuis le serveur.

7. **Testez votre site** :
   Testez votre site web pour vous assurer que la police personnalisée est correctement appliquée aux éléments que vous avez stylisés.

En suivant ces étapes, vous pourrez intégrer avec succès une police personnalisée dans votre site web en utilisant CSS. Assurez-vous également de respecter les droits d'auteur et les licences de la police que vous utilisez.
