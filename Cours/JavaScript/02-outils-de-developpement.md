# 02 - Les outils du développeur pour écrire du JavaScript

#Formation JS#
*Dernière mise à jour 04/01/2024*

## La console du navigateur

Le Javascript s'exécute dans le navigateur, il est donc naturel que les outils du développeur prennent place dans celui-ci.
La console de déboggage du navigateur est une outil puissant qui aide les développeurs à débogguer et à analyser le code JavaScript exécuté dans le navigateur. Elle offre plusieurs fonctionnalités utiles pour comprendre et résoudre des problèmes avec vos applications web.

Pour afficher la console, il faut que les outils développeur soient activés et ensuite afficher le panneau de développement.

### Au clavier

- `Ctrl + Shift + I`, sauf pour Edge : `F12`
- macOS : `⌘ + ⌥ + I`

### Via les menus

- Firefox : `Menu ➤ Outils supplémentaires ➤ Outils de développement web`
- Chrome : `Plus d'outils ➤ Outils de développement`
- Safari : `Développement ➤ Afficher l'inspecteur web`. Si vous ne pouvez pas voir le menu Développement, aller sous `Safari ➤ Préférences ➤ Avancé` et vérifiez que l'option `Afficher le menu de développement` est bien coché.
- Opera : `Développement ➤ Inspecteur web`

### Via un menu contextuel

- `Cliquez-droit` sur un élément de la page web (ou `Ctrl+clic` sur macOS) et sélectionnez Examiner l'élément dans le menu qui apparait (Bonus : cette méthode ouvrira l'inspecteur et sélectionnera directement l'élément en question !).

Voici quelques-unes de ses fonctionnalités principales :

1. **Console:** Permet d'écrire et d'exécuter des commandes JavaScript directement dans la console. Cela est utile pour tester rapidement des expressions ou des fonctions. Vous pouvez également inspecter des variables et leurs valeurs, modifier leurs propriétés ou appeler des méthodes.
2. **Inspecteur:** Permet d'inspecter l'HTML, le CSS et le JavaScript de n'importe quelle page web actuellement ouverte dans votre navigateur. Cela vous permet d'explorer et de manipuler le Document Object Model (DOM) et les feuilles de style appliquées à chaque élément de la page. Cela peut aider à identifier des problèmes avec la structure ou la disposition d'une page web.
3. **Sources:** Permet de voir, éditer et débogguer des fichiers JavaScript directement dans le navigateur. Vous pouvez mettre des points d'arrêt dans votre code, passer par étapes ligne par ligne, examiner des variables et leurs valeurs à chaque point d'exécution, et même modifier le code en temps réel pour tester les changements apportés à l'application. 
4. **Réseau:** Affiche des informations sur les demandes HTTP envoyées du navigateur au serveur ainsi que les réponses reçues. Cela peut aider à identifier des problèmes de pages chargement lent ou d'erreurs réseau. Vous pouvez également inspecter les cookies et en-têtes pour chaque demande. 
5. **Profileur:** Permet de mesurer les performances de votre code JavaScript, y compris les appels de fonction, les manipulations DOM et les recalculations de style. Il fournit des rapports détaillés sur quelles parties de votre code consomment le plus de temps pour s'exécuter. Cela peut aider à optimiser votre application pour une meilleure performance. 
6. **Mémoire:** Affiche des informations sur l'utilisation de la mémoire par le navigateur et JavaScript en temps réel. Il montre le nombre d'objets, leurs tailles et leurs instances. Cela peut aider à identifier des fuites mémoires ou des problèmes de consommation excessive de mémoire.
7. **Chronomètre:** Fournit une analysis détaillée du processus de rendu, y compris le calcul de disposition, la peinture, les scripts et les styles. Il permet d'identifier des gouleaux de performances et d'optimiser votre application pour des rendus plus fluides. Ces sont juste quelques-unes des nombreuses fonctionnalités disponibles dans la console de déboggage du navigateur. Utiliser ces outils efficacement peut vous épargner du temps et de l'effort lors du déboggage et de l'optimisation de vos applications web.

## Débogguer Vs-Code

Visual Studio Code (VSCode) est un environnement de développement intégré (IDE) polyvalent et populaire pour plusieurs langages de programmation, y compris le JavaScript. VSCode offre plusieurs fonctionnalités intégrées pour vous aider à débogguer efficacement votre code JavaScript. 

Voici un guide pas à pas sur comment configurer et utiliser le déboggueur dans VSCode :

1. **Installer Node.js** : Avant de pouvoir débogguer du code JavaScript dans VSCode, vous devez avoir Node.js installé sur votre ordinateur. Vous pouvez le télécharger à partir de https://nodejs.org/en/download/. Veillez inclure npm (Node Package Manager) lors de l'installation.

2. **Installer une extension de déboggage** : Pour utiliser le déboggueur dans VSCode, vous devez avoir une extension installée qui prend en charge la déboggage JavaScript. Un choix populaire est l'"Extensions JavaSCript (LAunch.json)" créé par Microsoft. Vous pouvez l'installer à partir des vues Extensions dans VSCode ou en recherchant "Extensions JavaSCript (LAunch.json)" sur le marché. ou simplement utiliser le panneau "Exécuter et débogguer" dans VSCode.

3. **Configurer un fichier de configuration de lancement** : Un fichier de configuration de lancement indique à VSCode comment configurer et exécuter votre session de déboggage. Dans votre projet, créez un nouveau fichier nommé `launch.json` sous le répertoire `.vscode`. Ajoutez le suivant comme contenu JSON en tant que point de départ :

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Lancer le programme",
            "program": "${workspaceFolder}/index.js"
        }
    ]
}
```

Modifiez le champ `program` pour pointer vers votre fichier JavaScript que vous souhaitez
débogguer.

4. **Démarrer le déboggueur** : Pour démarrer le déboggueur, ouvrez votre fichier JavaScript
dans VSCode et posez un point d'arrêt en cliquant sur la gauche du panneau de gauche à côté
du numéro de ligne où vous souhaitez arrêter l'exécution. Appuyez sur la touche F5 (ou
utilisez le commande "Démarrer le déboggage") pour lancer une session de déboggage. Votre
code s'exécutera jusqu'à ce qu'il atteigne le point d'arrêt, à partir duquel il attendra
vos instructions supplémentaires.

5. **Utilisation du déboggueur** : Une fois que vous êtes dans une session de déboggage, vous
pouvez inspecter des variables, passer à travers le code et évaluer des expressions à
l'aide de la vue Debug dans VSCode. Vous pouvez également utiliser les raccourcis clavier
comme F10 pour passer à l'intérieur d'une fonction, F11 pour sauter sur une fonction et
Ctrl+C pour continuer l'exécution sans arrêter aux points d'arrêt.

6. **Tâches de déboggage courantes** : Quelques tâches de déboggage courantes comprennent la
mise en place de points d'arrêt conditionnels, l'utilisation de la commande "Suivant
instruction actuelle" (F8) pour exécuter la ligne actuelle et passer le prochain point
d'arrêt, et l'utilisation de la commande "Redémarrer le déboggueur" pour redémarrer votre
application depuis le début du fichier.
