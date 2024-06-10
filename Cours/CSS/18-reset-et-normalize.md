# RESET et NORMALIZE

Les fichiers CSS tels que [normalize.css](https://necolas.github.io/normalize.css/) ou [reset.css](http://meyerweb.com/eric/tools/css/reset/) sont utilisés pour normaliser ou réinitialiser les styles par défaut des navigateurs web. Ils sont couramment utilisés au début d'un projet web pour assurer une base cohérente et prévisible pour les styles, indépendamment du navigateur et de la plateforme utilisés. Voici pourquoi ils sont utiles :

1. **Normalisation des Styles** :

   - Les navigateurs ont des styles par défaut différents pour de nombreux éléments HTML tels que les titres, les paragraphes, les listes, etc. Ces styles par défaut varient d'un navigateur à l'autre.
   - `Normalize.css` normalise ces styles par défaut en appliquant des règles CSS cohérentes pour que les éléments aient une apparence similaire sur tous les navigateurs.

   > Exemple : Sans normalisation, les titres `<h1>` peuvent avoir des tailles de police différentes sur différents navigateurs. Normalize.css garantit qu'ils ont tous la même taille de police de base.

2. **Réinitialisation des Styles** :

   - `Reset.css` réinitialise complètement tous les styles par défaut des navigateurs à zéro. Cela signifie que tous les éléments HTML n'ont aucune marge, aucun rembourrage, aucune police de caractères, aucune couleur, etc.
   - L'utilisation de `reset.css` offre un contrôle total sur la définition des styles de votre page sans être influencé par les styles par défaut des navigateurs. L'inconvéniant de celui-ci est que le développeur doit redéfinir chaque style pour chaque élément car ceux-ci sont remis à zéro par le reset.

   > Exemple : Si vous n'utilisez pas de réinitialisation et que vous commencez à définir des styles, vous pourriez être confronté à des comportements inattendus en raison des styles par défaut du navigateur.

3. **Consistance** :

   - L'utilisation de `normalize.css` ou `reset.css` permet d'obtenir une base cohérente et prévisible pour le design de votre site web. Vous pouvez ensuite ajouter vos styles personnalisés sans avoir à lutter contre les différences de rendu entre les navigateurs.

4. **Cross-browser Compatibility** :

   - Les fichiers normalize.css ou reset.css sont conçus pour améliorer la compatibilité entre les navigateurs en assurant un comportement plus cohérent sur différents navigateurs et plates-formes.

5. **Réduction des Erreurs** :

   - En normalisant ou en réinitialisant les styles, vous réduisez le risque d'erreurs de style inattendues dues à des conflits entre les styles par défaut du navigateur et vos styles personnalisés.

6. **Productivité** :

   - En utilisant ces fichiers en tant que point de départ, vous pouvez gagner du temps en ne devant pas réécrire des styles pour chaque élément HTML pour qu'ils apparaissent correctement sur tous les navigateurs.

En résumé, l'utilisation de fichiers comme `normalize.css` ou `reset.css` est une pratique courante pour établir une base de styles cohérente et contrôlée au début d'un projet web, ce qui facilite le développement et la maintenance de votre site en garantissant une apparence prévisible sur tous les navigateurs. Vous pouvez choisir entre normalize.css pour une normalisation plus légère des styles ou reset.css pour une réinitialisation complète, en fonction de vos besoins et de votre préférence.

Il existe aussi d'autres solutions pour réinitialiser les styles comme [html5Boilerplate](https://html5boilerplate.com/) par exemple.