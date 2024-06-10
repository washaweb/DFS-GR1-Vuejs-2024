
# Incorporer des Médias en HTML

## Introduction

HTML permet d'incorporer une variété de médias, y compris l'audio, la vidéo et des éléments interactifs, pour enrichir vos pages web.

## Balise `<audio>`

La balise `<audio>` est utilisée pour intégrer des fichiers audio dans une page web.

### Exemple :

```html
<audio controls>
    <source src="musique.mp3" type="audio/mpeg">
    Votre navigateur ne prend pas en charge l'élément audio.
</audio>
```
- `controls` ajoute des contrôles de lecture (lecture, pause, volume, etc.) à l'élément audio.
- La balise `<source>` permet de spécifier différents formats audio pour une compatibilité croissante.

## Balise `<video>`

La balise `<video>` est utilisée pour intégrer des fichiers vidéo dans une page web.

### Exemple :

```html
<video controls width="400" height="300">
    <source src="video.mp4" type="video/mp4">
    Votre navigateur ne prend pas en charge l'élément vidéo.
</video>
```

- `controls` ajoute des contrôles de lecture à l'élément vidéo.
- Vous pouvez spécifier la largeur (`width`) et la hauteur (`height`) de la vidéo.

## Balise `<iframe>`

La balise `<iframe>` permet d'intégrer des éléments interactifs, comme des cartes Google Maps ou des vidéos YouTube.

### Exemple :

```html
<iframe width="560" height="315" src="https://www.youtube.com/embed/votre_video" frameborder="0" allowfullscreen></iframe>
```
- Vous pouvez spécifier la largeur (`width`) et la hauteur (`height`) de l'iframe.
- `src` définit l'URL de la ressource à incorporer.
- `allowfullscreen` autorise le mode plein écran pour la vidéo YouTube.

## Balise `<canvas>`

La balise `<canvas>` est utilisée pour dessiner des graphiques, des animations et des éléments interactifs en utilisant JavaScript.

### Exemple :

```html
<canvas id="mon_canvas" width="400" height="200"></canvas>
```

- Vous pouvez spécifier la largeur (`width`) et la hauteur (`height`) du canvas.
- JavaScript est utilisé pour dessiner sur le canvas.

## Balise `<embed>`

La balise `<embed>` permet d'intégrer divers types de médias, y compris des animations Flash.

### Exemple :

```html
<embed src="animation.swf" width="400" height="300">
```

- `src` définit l'URL de la ressource à incorporer.
- Vous pouvez spécifier la largeur (`width`) et la hauteur (`height`).

Ces balises vous permettent d'ajouter des médias et des éléments interactifs à vos pages web, offrant une expérience utilisateur plus riche et engageante.