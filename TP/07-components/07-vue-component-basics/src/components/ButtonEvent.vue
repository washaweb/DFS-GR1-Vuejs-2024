<template>
  <div class="border rounded p-3 mb-3">
    <input type="text" v-model="message" />
    <p>{{ message }}</p>
    <button class="btn btn-success" @click="onUpdateEvent()">Cliquez-moi</button>
  </div>
</template>

<script>
export default {
  // on doit déclarer les événements personnalisés utilisé, tout comme les props :
  emits: ['onUpdateMessage'],
  data() {
    return {
      message: ''
    }
  },
  methods: {
    onUpdateEvent() {
      // on emmet un événement personnalisé pour communiquer avec le composant parent, celui-ci devra "écouter" l'événement onUpdateMessage pour réagir à la donnée transmise
      this.$emit('onUpdateMessage', this.message)
    }
  }
}
</script>

<style scoped></style>
