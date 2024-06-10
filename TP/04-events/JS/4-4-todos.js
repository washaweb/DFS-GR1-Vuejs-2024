
import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

createApp({
  data() {
    return {
      todos: [
        {
          id: 1,
          text: 'Learn JavaScript',
          done: false,
        },
        {
          id: 2,
          text: 'Learn Vue',
          done: true,
        },
        {
          id: 3,
          text: 'Build something awesome',
          done: false,
        },
        {
          id: 4,
          text: 'Profit',
          done: false,
        },
        {
          id: 5,
          text: 'Profit',
          done: false,
        }
      ],
    }
  },
  methods: {
    onDeleteTodo(id) {
      console.log('delete', id)
      // on filtre les todos pour ne garder que les todos qui ne correspondent pas à l'id recherché
      this.todos = this.todos.filter(todo => todo.id !== id)
    },
    onEditTodo(id) {
      console.log('edit', id)
    }
  }
}).mount('#app')