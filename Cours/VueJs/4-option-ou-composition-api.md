# Option API ou Composition API

Lorsque l'on parle de l'architecture d'une application Vue.js, il y a deux approches principales pour interagir avec les données et effectuer des appels réseau : l'option API (ou "Options API") et la composition API.

## Option API

L'Option API est l'approche traditionnelle de Vue.js pour définir des composants en utilisant des options telles que `data`, `computed`, `methods`, `watch`, etc. Chaque option représente une partie spécifique du composant, ce qui facilite la lecture et la compréhension du code pour les débutants.

Exemple d'utilisation de l'Option API pour un composant Vue :

```javascript
export default {
  data() {
    return {
      users: []
    };
  },
  mounted() {
    fetchUsers().then(users => {
      this.users = users;
    });
  },
  methods: {
    deleteUser(id) {
      // Logique pour supprimer un utilisateur
    }
  }
};
```

## Composition API

La Composition API est une nouvelle fonctionnalité introduite dans Vue.js 3 qui permet de définir la logique d'un composant en regroupant la logique liée dans des hooks réutilisables appelés "composables". La Composition API offre plus de flexibilité et de réutilisabilité par rapport à l'Options API, ce qui la rend idéale pour les applications complexes avec une logique partagée entre plusieurs composants.

Exemple d'utilisation de la Composition API pour un composant Vue :

```javascript
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const users = ref([]);

    onMounted(async () => {
      users.value = await fetchUsers();
    });

    function deleteUser(id) {
      // Logique pour supprimer un utilisateur
    }

    return {
      users,
      deleteUser
    };
  }
};
```

Dans cet exemple :

- Nous utilisons les fonctions `ref` et `onMounted` de Vue pour définir des réactions à l'état et à l'effet de montage du composant.
- Nous retournons les variables `users` et `deleteUser` du hook `setup()`, les rendant disponibles pour utilisation dans le template.

### Comparaison

- **Options API** : Facile à comprendre pour les débutants, idéale pour les petites applications avec des composants simples.
- **Composition API** : Offre une meilleure organisation et une réutilisabilité accrue pour les composants complexes, idéale pour les applications de grande taille et les équipes de développement.

En résumé, bien que les deux approches aient leurs avantages, la Composition API est souvent préférée pour les projets Vue.js de grande envergure en raison de sa flexibilité et de sa réutilisabilité accrue. Cependant, l'Options API reste une bonne option pour les projets plus simples ou pour ceux qui préfèrent une approche plus conventionnelle.

Dans ce cours, nous utiliserons la composition API qui est plus structurante lorsqu'on commence avec Vuejs.


## Structure détaillée avec la composition API

Dans un composant, nous pouvons utiliser les datas, les methods, des watchers, des computed properties, des props, des mixins... bref, autant de choses qui font la richesse du langage VueJs et qui simplifient la tâche du développeur au quotidien. Cependant, pour chacune de ces choses, il faut définir une fonction qui sera appelée lorsque le composant sera monté. Certaines sont optionnelles, d'autres obligatoires, on dit que le framework est 'opiniated', ce qui veut dire qu'il impose des choix de conception qui se retrouvent dans la structure du langage.

```javascript
export default {
  data() {
    // data doit toujours être une fonction qui retourne un objet
    return {
      // ici les variables de données accessibles dans le template
      maVar: 'foo'
    };
  },

  computed: {
    // les computed properties sont des fonctions mises en cache et traitées comme des propriétés dans le template, elles doivent retourner quelque chose
    maComputedProperty(){
      return this.maVar + ' bar'
    }
  },

  // l'un des hooks que l'on peut utiliser lors du montage d'un composant, il en existe d'autres
  mounted() {
    // execute du code au premier chargement du composant
    // à l'intérieur d'un composant; on accèdes aux propriétés et aux méthodes avec le mot-clé this.
    console.log( this.maVar, this.maComputedProperty )
  },

  methods: {
    // on peut créer des fonctions qui seront accessible depuis d'autres fonctions ou depuis le template du composant
    maMethode(monParametre) {
      // du code qui peut être exécuté à l'appel de la fonction
      return monParametre++
    },
    maDeuxiemeMethode(){
      const num = this.maMethode(test) //lorsqu'on appelle une autre méthode depuis une fonction, ne pas oublier le this.
      console.log(num)
    }
  },
  watch: {
    // ici on peut observer des variables et déclencher des actions au changement de celle ci, la fonction porte le nom de la variable à observer
    maVar(oldval, newval){
      console.log(oldval, newval)
    }
  }
};
```
