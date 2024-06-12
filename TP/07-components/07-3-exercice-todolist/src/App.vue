<template>
  <div>
    <div class="container py-5">
      <h1 class="text-center mb-4 h3">
        <i class="fa-solid fa-listbeat me-2" /> Exercice de la todo list
      </h1>
      <!-- formulaire de création d'une nouvelle todo -->
      <div class="card my-4 shadow">
        <div class="card-body d-flex align-items-center">
          <h2 class="h6 me-3 text-nowrap mb-0 visually-hidden">Nouvelle todo :</h2>
          <div class="w-100 me-2">
            <input
              type="text"
              v-model="newTodoForm.text"
              :class="{
                'is-invalid': newTodoForm.text.length !== 0 && newTodoForm.text.length <= 2,
                'is-valid': newTodoForm.text.length !== 0 && newTodoForm.text.length > 2
              }"
              class="form-control"
              placeholder="Nouvelle todo..."
            />
          </div>
          <button @click="onCreateTodo(newTodoForm)" class="btn btn-primary text-nowrap">
            <i class="fa-solid fa-plus fa-beat" /><span class="visually-hidden">Ajouter</span>
          </button>
        </div>
      </div>
      <!-- exercice créer une TODO liste -->
      <ul id="todos" class="list-group shadow">
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
          <template v-if="todo.editionMode && editedTodo">
            <div class="w-100 me-2">
              <input type="text" v-model="editedTodo.text" class="form-control" />
            </div>
            <button
              @click="onCancelTodoEdition(todo.id)"
              class="btn btn-secondary me-1 text-nowrap"
            >
              <i class="fa-solid fa-cancel" /><span class="visually-hidden">Annuler</span>
            </button>
            <button @click="onSaveTodo(editedTodo)" class="btn btn-primary text-nowrap">
              <i class="fa-solid fa-save" /><span class="visually-hidden">Valider</span>
            </button>
          </template>
          <template v-else>
            <div class="me-auto" :class="{ 'text-decoration-line-through': todo.done }">
              {{ todo.text }}
            </div>
            <button @click="onDeleteTodo(todo.id)" class="btn btn-danger me-1 text-nowrap">
              <i class="fa-solid fa-trash" /><span class="visually-hidden">Supprimer</span>
            </button>
            <button @click="onEditTodo(todo.id)" class="btn btn-primary text-nowrap">
              <i class="fa-solid fa-pen" /><span class="visually-hidden">Editer</span>
            </button>
          </template>
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
      <div class="form-check form-switch my-4">
        <input
          class="form-check-input"
          type="checkbox"
          role="switch"
          aria-label="debug"
          v-model="debug"
        />
        Debug
      </div>
      <pre v-if="debug" class="bg-white p-4">{{ todos }}</pre>
    </div>
  </div>
</template>

<script>
// on stocke la structure d'une todo
const todoInterface = {
  id: -1,
  text: '',
  done: false
}

export default {
  data() {
    return {
      // la liste initiale des todos
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
      ],
      // un objet qui sera utilisé pour l'édition d'une todo dans un formulaire temporaire
      editedTodo: null,
      // le formulaire de création d'une nouvelle todo, par défaut avec les valeurs de l'interface d'une todo créée plus haut
      newTodoForm: { ...todoInterface },
      debug: false
    }
  },
  methods: {
    // edit a todo inline
    onEditTodo(id) {
      // recherche la todo à éditer
      const todo = this.todos.find((todo) => todo.id === id)
      // crée un formulaire temporaire pour l'édition
      this.editedTodo = { ...todo }
      // active le mode édition de cette todo pour afficher le formulaire
      todo.editionMode = true
    },
    // save edited todo
    onSaveTodo(editedTodo) {
      // on cherche la todo dans la liste
      const todo = this.todos.find((todo) => todo.id === editedTodo.id)
      // remplacement du text de la todo par celui du formulaire d'édition
      todo.text = editedTodo.text
      //reset du mode édition pour rétablir l'affichage
      todo.editionMode = false
      // vidange du formulaire temporaire
      this.editedTodo = null
    },
    // cancel edited todo
    onCancelTodoEdition(id) {
      // on rétablie l'état initial du mode édition de cette todo
      this.todos.find((todo) => todo.id === id).editionMode = false
    },
    // delete a todo
    onDeleteTodo(id) {
      // on recherche la todo à supprimer et on remplace le tableau par un nouveau tableau sans cette todo
      this.todos = this.todos.filter((todo) => todo.id !== id)
    },
    onCreateTodo(newTodo) {
      // vérification du formulaire, si la longeur du texte est inférieure à 2, ne crée rien
      if (newTodo.text.length < 2) {
        return
      }
      // rempli l'id en fonction de la longueur de la liste
      newTodo.id = Date.now()
      // pousse la nouvelle todo dans le tableau
      this.todos.push(newTodo)
      // reset du form avec les valeurs par défaut pour la prochaine saisie
      this.newTodoForm = { ...todoInterface }
    }
  }
}
</script>

<style scoped></style>
