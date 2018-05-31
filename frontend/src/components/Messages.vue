<template>
  <div class="messages">
    <ul>
      <li v-for="message in messages" class="columns">
        <div :class="[message.type==='from' ? 'from column is-3 is-offset-9 has-background-dark has-text-white' : 'to column is-3 has-bo']">
          <p style="padding: 10px;">{{ message.message }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        messages: this.$store.state.messages,
      }
    }

  }
</script>

<style scoped>
  .messages {
    overflow: auto;
  }
  li > div {
    width: 20%;
    display: inline-block;
    border-radius: 5px;
  }
  li {
    padding: 15px;
    margin: 10px;
  }
  .from {
    float: right;
  }
  .to {
    border: 1px solid #000;
    float: left;
  }

</style>
