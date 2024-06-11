<template>
  <div class="container py-5">
    <!-- exercice créer une TODO liste -->
    <ul id="todos" class="list-group">
      <!-- structure référence à créer 
      <li class="list-group-item">[case à cocher readonly] Titre de la todo (+classe barrer si achevée: "text-decoration-line-through")</li> 
      -->
      <li v-for="todo in todos" :key="todo.id" class="list-group-item d-flex align-items-center">
        <div class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            role="switch"
            aria-label="done/undone"
            v-model="todo.done"
          />
        </div>
        <div class="me-auto">
          {{ todo.text }}
        </div>
        <button class="btn btn-danger me-1">Supprimer</button>
        <button class="btn btn-primary">Editer</button>
      </li>
    </ul>

    <!-- 
    Exercice TODO:
    Réaliser une Todo liste en Vue JS, ajouter un tableau de 5 todos dans les données du contrôleur, chaque todo aura la structure suivante :
    {
      id: 1,
      text: 'Titre de la todo',
      done: false,
    },
    afficher les todos dans la vue à l'aide d'une boucle dans le ul#todos située ci-dessus dans le code
    Puis dans l'ordre :
    - si done = true, ajouter la classe text-decoration-line-through sur le texte de la todo
    - si je clique sur le bouton supprimer... effacer la todo
    - si je clique sur le bouton éditer, remplacer le texte de la todo, par un champ input éditable par l'utilisateur, remplacer les boutons supprimer et modifier par des boutons "annuler" et "valider", au click sur le bouton annuler, restaurer le texte d'origine de la todo, au clique sur le boutone "valider", enregistrer le texte modifié par l'utilisateur. Dans les deux cas, restaurer l'affichage du texte (masque l'imput et les boutons d'édition)
    - ajouter un formulaire en haut de la page, pour créer une nouvelle todo : un champ input permet de saisir le texte de la nouvelle todo, un bouton "Ajouter" permet de valider la création (activber le bouton uniquement si le texte dépasse 2 caractères).
 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      todos: [
        {
          id: 1,
          text: 'Learn JavaScript',
          done: false
        },
        {
          id: 2,
          text: 'Learn Vue',
          done: true
        },
        {
          id: 3,
          text: 'Build something awesome',
          done: false
        },
        {
          id: 4,
          text: 'Profit',
          done: false
        },
        {
          id: 5,
          text: 'Profit',
          done: false
        }
      ]
    }
  }
}
</script>

<style scoped></style>
