# 17 - Date

#Formation JS#
*Dernière mise à jour 04/01/2024*

La classe `Date` en JavaScript est utilisée pour représenter des dates et des heures. Elle permet de créer de nouveaux objets `Date` qui représentent différents moments dans le temps. Voici un aperçu de son utilisation avec des exemples :

## Création d'un objet Date

```js
// Création d'un objet Date représentant la date et l'heure actuelles
const currentDate = new Date();
console.log(currentDate);

// Création d'un objet Date représentant une date spécifique (année, mois, jour, heure, minute, seconde, milliseconde)
const specificDate = new Date(2022, 0, 1, 12, 0, 0, 0); // 1er janvier 2022 à midi
console.log(specificDate);

// Création d'un objet Date à partir d'une chaîne de date
const dateString = '2022-01-01T12:00:00Z';
const dateFromString = new Date(dateString);
console.log(dateFromString);
```

## Méthodes de la classe Date

```js
// Obtention de l'année, du mois, du jour, de l'heure, des minutes, des secondes et des millisecondes
console.log(currentDate.getFullYear());
console.log(currentDate.getMonth()); // Les mois sont indexés de 0 à 11 (0 correspond à janvier)
console.log(currentDate.getDate());
console.log(currentDate.getHours());
console.log(currentDate.getMinutes());
console.log(currentDate.getSeconds());
console.log(currentDate.getMilliseconds());

// Obtention du jour de la semaine (0 correspond à dimanche, 1 à lundi, etc.)
console.log(currentDate.getDay());

// Obtention du timestamp (nombre de millisecondes écoulées depuis le 1er janvier 1970 à 00:00:00 UTC)
console.log(currentDate.getTime());

// Obtention de la chaîne de date au format ISO ou locale
console.log(currentDate.toISOString());
console.log(currentDate.toLocaleString());
```

## Manipulation des dates

```js
// Ajout de jours à une date
currentDate.setDate(currentDate.getDate() + 7);
console.log(currentDate);

// Soustraction de jours à une date
currentDate.setDate(currentDate.getDate() - 3);
console.log(currentDate);
```

## Comparaison de dates

```js
// Comparaison de deux dates
const date1 = new Date(2022, 0, 1);
const date2 = new Date(2022, 0, 1);
console.log(date1.getTime() === date2.getTime()); // true

// Comparaison de dates pour déterminer l'ordre
console.log(date1 < date2); // false
console.log(date1 > date2); // false
console.log(date1.getTime() === date2.getTime()); // true
```

Ces exemples illustrent quelques-unes des fonctionnalités de base de la classe `Date` en JavaScript pour la manipulation et la représentation des dates et des heures.
