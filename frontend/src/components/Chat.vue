<template>
  <div>
    <div class="messages">
      <app-messages></app-messages>
    </div>
    <footer>
      <app-send-message></app-send-message>
    </footer>
  </div>
</template>

<script>
  import Messages from './Messages';
  import SendMessage from './SendMessage';

  export default {
    data() {
      return {
        username: ''
      }
    },
    mounted() {
      this.$store.commit('CONNECT_SOCKET');
    },
    components: {
      appMessages: Messages,
      appSendMessage: SendMessage
    }
  }
</script>

<style scoped></style>
