<template>
  <div class="columns">
    <div class="column is-four-fifths" style="margin-left: 12px;">
      <input @keyup.enter="onSendMessage" class="control" type="text" placeholder="Mensaje" v-model="message">
    </div>
    <div class="column">
      <button @click="onSendMessage" class="button is-dark">Send</button>
    </div>
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
      onSendMessage() {
        this.$store.dispatch('sendMessage', this.message);
        this.message = '';
      }
    }
  }
</script>

<style scoped></style>
