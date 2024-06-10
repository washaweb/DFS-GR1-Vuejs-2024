<template>
  <MainHeader app-title="Exercice Star Wars API" />
  <main class="container my-4">
    <RouterView />
  </main>
  <footer>
    <p class="py-5 text-center">&copy; {{ currentYear }} - MNS</p>
  </footer>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue'
import { RouterView } from 'vue-router'
export default {
  components: {
    RouterView,
    MainHeader
  },
  computed: {
    currentYear() {
      return new Date().getFullYear()
    }
  }
}
</script>
