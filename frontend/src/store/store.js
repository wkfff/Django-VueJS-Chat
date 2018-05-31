import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    messages: [],
    channelsUrl: '127.0.0.1:8000',
    chatSocket: null,
    username: ''
  },
  mutations: {
    'SET_NAME'(store, username) {
      this.state.username = username;
    },
    'NEW_MESSAGE'(store, message) {
      this.state.messages.push(message)
    },
    'CONNECT_SOCKET'(store) {
      this.state.chatSocket = new WebSocket('ws://' + this.state.channelsUrl);
      this.state.chatSocket.onclose = (e) => {
        console.log(e);
      };
      this.state.chatSocket.onmessage = (e) => {
        console.log(e);
        let data = JSON.parse(e.data);
        let message = data['message'];
        let username = data['username'];
        this.state.messages.push({
          id: 1,
          type: username === this.state.username ? 'from' : 'to',
          message: message
        });
      };
      this.state.chatSocket.onopen = (e) => {
        // alert('Se ha establecido una conexión');
      };
    }
  },
  actions: {
    sendMessage({commit}, message) {
      this.state.chatSocket.send(JSON.stringify({
        'username': this.state.username,
        'message': message
      }));
    }

  }
});
