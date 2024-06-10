# Les liens et les ancres

Les liens en HTML sont généralement créés en utilisant la balise `<a>`, qui est également appelée balise d'ancrage. Il existe plusieurs types de liens, notamment les liens absolus, les liens relatifs et les liens d'ancrage.

## 1. Liens Absolus :

Les liens absolus sont des liens qui spécifient l'URL complète d'une ressource sur le web, y compris le protocole (comme "http" ou "https") et le nom de domaine complet.

**Exemple :**

```html
<a href="https://www.example.com">Visitez Example.com</a>
```

Dans cet exemple, le lien pointe vers la page d'accueil du site web "https://www.example.com".

Les liens absolus peuvent aussi omettre le protocole et le nom de domaine, entre deux pages se trouvant sur un même nom de domaine avec le "raccourci" `/`:

**Exemple :**

Ces deux liens sont identiques (si la page qui contient ce lien est hébergée sur `https://www.example.com`)

```html
<a href="https://www.example.com/mapage.html">Visitez Example.com/mapage.html</a>
<a href="/mapage.html">Visitez Example.com/mapage.html</a>
```

## 2. Liens Relatifs :

Les liens relatifs sont des liens qui spécifient le chemin vers une ressource par rapport à l'emplacement de la page web actuelle. Ils ne commencent pas par le nom de domaine complet ni le protocole.

**Exemple :**

Supposons que vous ayez la structure de fichiers suivante :
```
- index.html
- pages
    - page1.html
    - page2.html
```

Si vous êtes sur la page `page1.html` et que vous souhaitez créer un lien vers `page2.html`, vous pouvez utiliser un lien relatif comme ceci :

```html
<a href="page2.html">Page 2</a>
```

Dans ce cas, le navigateur sait que la page `page2.html` est dans le même répertoire que `page1.html`.

## 3. Liens d'Ancrage (Ancres) :

Les liens d'ancrage sont utilisés pour naviguer à l'intérieur d'une page web. Ils permettent aux utilisateurs de sauter à des sections spécifiques d'une page en cliquant sur un lien.

**Exemple :**

Supposons que vous ayez une page avec une table des matières et que vous souhaitiez que les utilisateurs puissent cliquer sur un lien pour accéder à une section particulière de la page. Vous pouvez faire cela en utilisant des ancres.

Dans le contenu HTML :

```html
<a id="section1"></a>
<h2>Section 1</h2>
<p>Ceci est le contenu de la section 1.</p>
```

Dans la table des matières :

```html
<a href="#section1">Aller à la Section 1</a>
```

Dans cet exemple, lorsque les utilisateurs cliquent sur "Aller à la Section 1" dans la table des matières, ils sont dirigés vers la section avec l'id "section1" dans la même page.

## parcourir la hiérarchie des dossiers

Les liens peuvent parfois être utilisés pour naviguer entre les pages se trouvant dans des sous-dossiers et des dossiers parents d'un site web.

Supposons que nous ayons la structure de fichiers suivante pour notre site web :

```
- index.html
- pages
    - page1.html
    - page2.html
- articles
    - article1.html
- images
    - photo.jpg
```

### Lien Relatif vers une Page dans le Même Répertoire :

Si vous êtes sur la page `page1.html` et que vous souhaitez créer un lien vers `page2.html`, vous pouvez utiliser un lien relatif comme suit :

```html
<a href="page2.html">Aller à la Page 2</a>
```

Ce lien pointe vers la page `page2.html`, qui se trouve dans le même répertoire que `page1.html`.

### Lien Relatif vers une Page dans un Sous-Dossier :

Si vous êtes sur la page `page1.html` et que vous souhaitez créer un lien vers `article1.html`, qui se trouve dans le dossier `articles`, vous devez spécifier le chemin relatif vers ce dossier :

```html
<a href="articles/article1.html">Lire l'Article 1</a>
```

Le chemin `articles/article1.html` indique au navigateur que la page `article1.html` est située dans le sous-dossier `articles` par rapport à la page actuelle (`page1.html`).

### Lien Relatif vers une Page dans un Dossier Parent :

Si vous êtes sur la page `article1.html` dans le dossier `articles` et que vous souhaitez créer un lien vers la page `index.html`, qui se trouve dans le répertoire parent, vous devez utiliser `..` pour remonter au dossier parent :

```html
<a href="../index.html">Retour à la Page d'Accueil</a>
```

Le `..` signifie "dossier parent", ce qui indique au navigateur de remonter d'un niveau et de trouver `index.html` dans le répertoire principal.

### Lien Relatif vers une Image dans un Sous-Dossier :

Pour incorporer une image située dans le dossier `images` depuis la page `page1.html`, vous pouvez utiliser un lien relatif pour spécifier le chemin de l'image :

```html
<img src="images/photo.jpg" alt="Ma Photo">
```

Cela indique que l'image `photo.jpg` se trouve dans le sous-dossier `images`.

En utilisant des liens relatifs de cette manière, vous pouvez organiser efficacement la navigation dans la structure de votre site web, en faisant référence aux fichiers et aux dossiers en fonction de leur emplacement par rapport à la page actuelle.