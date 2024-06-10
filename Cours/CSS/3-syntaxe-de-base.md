# Principaux sélecteurs

Les sélecteurs CSS sont utilisés pour cibler des éléments HTML spécifiques et leur appliquer des styles. Voici quelques-uns des principaux sélecteurs CSS :

## 1. Sélecteur de Type :

Le sélecteur de type cible tous les éléments HTML d'un type particulier.

Exemple :

```css
p {
    /* Styles pour tous les paragraphes */
}
```

## 2. Sélecteur de Classe

Le sélecteur de classe cible tous les éléments qui ont une classe spécifique.

Exemple :

```css
.ma-classe {
    /* Styles pour tous les éléments avec la classe "ma-classe" */
}
```

## 3. Sélecteur d'Identifiant

Le sélecteur d'identifiant cible un élément HTML avec un ID spécifique.

Exemple :

```css
#mon-id {
    /* Styles pour l'élément avec l'ID "mon-id" */
}
```

## 4. Sélecteur Universel (*)

Le sélecteur universel cible tous les éléments HTML sur la page.

Exemple :

```css
* {
    /* Styles pour tous les éléments */
}
```

### 5. Sélecteur Descendant

Le sélecteur descendant cible un élément spécifique qui est un descendant d'un autre élément.

Exemple :

```css
div p {
    /* Styles pour tous les paragraphes qui sont descendants de div */
}
```

## 6. Sélecteur Enfant Direct

Le sélecteur enfant direct cible un élément spécifique qui est un enfant direct d'un autre élément.

Exemple :

```css
ul > li {
    /* Styles pour toutes les listes de niveau supérieur */
}
```

## 7. Sélecteur Attribut

Le sélecteur attribut cible les éléments qui ont un attribut spécifique.

Exemple :

```css
input[type="text"] {
    /* Styles pour tous les éléments input de type "text" */
}
```

## 8. Sélecteur Pseudo-Classe

Les pseudo-classes ciblent des états spécifiques des éléments, tels que `:hover` pour les éléments survolés, `:active` pour les éléments activés, etc.

Exemple :

```css
a:hover {
    /* Styles pour les liens au survol */
}
```

## 9. Sélecteur Pseudo-Élément

Les pseudo-éléments ciblent des parties spécifiques d'un élément, tels que `::before` pour insérer du contenu avant un élément.

Exemple :

```css
p::before {
    /* Styles pour le contenu inséré avant les paragraphes */
}
```

Ce ne sont là que quelques-uns des principaux sélecteurs CSS que vous pouvez utiliser pour cibler et styliser les éléments HTML.
Vous pouvez également combiner ces sélecteurs pour créer des règles CSS complexes et précises pour vos pages web.
