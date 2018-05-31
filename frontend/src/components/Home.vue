<template>
  <div class="home">
    <div class="columns">
      <div class="column is-offset-4 is-4">
        <h1 class="title">Welcome to Django-Channels/VueJS Chat</h1>
        <input type="text" class="input" placeholder="Select a username" v-model="username">
        <button class="button is-dark chat-button" @click="onEnterChat">Go to chat</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        username: ''
      }
    },
    methods: {
      onEnterChat() {
        console.log("Hello");
        if (this.username !== '') {
          this.$store.commit('SET_NAME', this.username);
          this.$router.push('/chat');
        } else {
          alert("Username can't be empty");
        }
      }
    }
  }
</script>

<style scoped>
  .home {
    text-align: center;
  }
  .chat-button {
    margin-top: 10px;
  }
</style>
