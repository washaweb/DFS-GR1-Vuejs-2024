<template>
  <nav class="navbar navbar-expand-lg bg-white border-bottom border-1 shadow-sm pb-0">
    <div class="container">
      <RouterLink class="navbar-brand py-0" to="/">
        <img src="@/assets/imgs/r2.svg" alt="R2-D2" class="logo me-2" />
        <span class="fs-4 fw-semibold">{{ appTitle }}</span>
      </RouterLink>

      <ul class="navbar-nav ms-auto">
        <li class="nav-item" v-for="navItem of navigation" :key="navItem.link">
          <RouterLink
            class="nav-link"
            active-class="border-bottom border-primary border-3 active pb-3"
            :to="navItem.link"
            >{{ navItem.name }}</RouterLink
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
  props: {
    appTitle: {
      type: String,
      default: 'Star Wars API'
    }
  },
  components: {
    RouterLink
  },
  data() {
    return {
      navigation: [
        {
          name: 'Planètes',
          link: '/planets'
        },
        {
          name: 'Personnages',
          link: '/characters'
        }
      ]
    }
  }
}
</script>

<style scoped>
.logo {
  max-height: 50px;
}
</style>
