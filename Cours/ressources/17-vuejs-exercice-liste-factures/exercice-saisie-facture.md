# Exercice écran de saisie d'une facture

- Intégrer bootstrap (version sass) dans le projet pour les styles
- Créer la vue de base
- Créer un composant par ligne (par facture)
- La capture d'écran jointe sert de référence à la vue que vous devez créer.

- BONUS 1: au clic sur le bouton éditer afficher un formulaire sous la liste, qui permet d'éditer une facture
- BONUS 2: au clic sur le bouton créer, utiliser le même formulaire pour créer une nouvelle facture

TIP: Utilisez la documentation de VueJs sur 'v-model' pour en savoir plus sur les formulaires en vueJs.

Données de base d'une facture à utiliser dans le projet:

```js
{
  bills: [
    {
      id: 1,
      billnum: 209345600,
      description: 'Création de site internet et hébergement',
      date: '08/03/2023',
      client: {
        idclient: 1,
        firstName: 'Marc',
        lastName: 'Scout',
        companyName: 'Lumon Industries'
      },
      prestations: [
        {
          description: 'Etude graphique UX',
          qty: 2,
          price: 450.00
        },
        {
          description: 'Création d’un site Wordpress',
          qty: 5,
          price: 450.00
        },
        {
          description: 'Hébergement annuel',
          qty: 1,
          price: 250.00
        },
      ],
      discount: 0.00,
      paid: 0.00,
      totalHT: 3400,
      tva: 20,
      totalTTC: 4080
    },
    //ajouter des autres bills
  ]
}
```
