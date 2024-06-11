# Exercice récap

Créer une page de panier avec une liste de produits (créer 3 produits différents sur le modèle suivant):

```js
{
      brand: 'Adidas',
      product: 'Socks',
      details: ['80% coton', '20% polyester', 'Genre mixte'],
      //ajout de l'index sélectionné par défaut
      selectedVariant: 0,
      variants: [
        {
            variantId: 2234,
            variantColor: 'green',
            variantImage: 'https://picsum.photos/400/400?image=1',
            variantQuantity: 20
        },
        {
            variantId: 2235,
            variantColor: 'blue',
            variantImage: 'https://picsum.photos/400/400?image=2',
            variantQuantity: 0
        },
        {
            variantId: 2236,
            variantColor: 'red',
            variantImage: 'https://picsum.photos/400/400?image=3',
            variantQuantity: 9
        }
      ]
    }
    ```
    Créer une application vuejs avec la cli, la structure de l’application sera la suivante :

    - `App.vue` -> liste des produits, les datas contiennent ici le compteur de produit dans le panier et la structure des données (la liste des produits)
    - `components/CartProduct.vue` : détail d’un élément du panier dans lequel vous devez injecter la donnée d'un produit pour l'afficher
    - `components/CartDisplay.vue` : affichage du nombre des produits dans le panier, vous devez injecter la donnée du compteur panier ici
    
    Chaque produit (composant `CartProduct.vue`) devra comporter un bouton ajouter au panier. Cet événement devra mettre à jour le panier dans le parent `App.vue`. Il devra également mettre à jour le compteur de produit se trouvant dans `CartDisplay.vue`

  BONUS : Dans un produit `CartProduct.vue`, vous devrez afficher les propriétés de chaque produit, ainsi que ses variantes de couleur ou d’image.
  Les variantes doivent apparaître de manière interactive, en cliquant sur une couleur ou une image, le produit devra se mettre à jour avec les variantes correspondantes.
  BONUS 2: Dans `CartDisplay.vue` ajouter un bouton supprimer le panier.