<template>
  <header class="shadow">
    <nav class="navbar navbar-expand-lg bg-white">
      <div class="container-fluid">
        <RouterLink class="navbar-brand" activeClass="" exactActiveClass="" to="/"
          >BILL APP</RouterLink
        >

        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink class="nav-link" aria-current="page" to="/">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" aria-current="page" to="/bills">Bills</RouterLink>
          </li>
          <!-- <li class="nav-item">
            <RouterLink class="nav-link" aria-current="page" to="/clients">Clients</RouterLink>
          </li> -->
          <li class="nav-item">
            <RouterLink class="nav-link" aria-current="page" to="/create-bill">Create</RouterLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
// imort du composant de lien depuis vue-router
import { RouterLink } from 'vue-router'

export default {
  components: {
    RouterLink
  }
}
</script>

<style scoped></style>
