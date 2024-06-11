export const products = [
  {
    id: 1,
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
  },
  {
    id: 2,
    brand: 'Nike',
    product: 'Baskets',
    details: ['20% coton', '80% polyester', 'men'],
    //ajout de l'index sélectionné par défaut
    selectedVariant: 0,
    variants: [
      {
        variantId: 123,
        variantColor: 'blue',
        variantImage: 'https://picsum.photos/400/400?image=6',
        variantQuantity: 7
      },
      {
        variantId: 234,
        variantColor: 'black',
        variantImage: 'https://picsum.photos/400/400?image=7',
        variantQuantity: 10
      }
    ]
  },
  {
    id: 3,
    brand: 'Puma',
    product: 'Jogging',
    details: ['20% licra', '20% polyester', '60% coton', 'Genre mixte'],
    //ajout de l'index sélectionné par défaut
    selectedVariant: 0,
    variants: [
      {
        variantId: 456,
        variantColor: 'white',
        variantImage: 'https://picsum.photos/400/400?image=10',
        variantQuantity: 10
      },
      {
        variantId: 678,
        variantColor: 'blue',
        variantImage: 'https://picsum.photos/400/400?image=11',
        variantQuantity: 4
      },
      {
        variantId: 896,
        variantColor: 'green',
        variantImage: 'https://picsum.photos/400/400?image=12',
        variantQuantity: 12
      }
    ]
  }
]
