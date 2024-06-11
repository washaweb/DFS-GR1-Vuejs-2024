<template>
  <div class="border rounded p-3 mb-3">
    <input type="text" v-model="message" />
    <p>{{ message }}</p>
    <button class="btn btn-success" @click="onUpdateEvent()">Cliquez-moi</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: ''
    }
  },
  methods: {
    onUpdateEvent() {
      alert(this.message)
    }
  }
}
</script>

<style scoped></style>
