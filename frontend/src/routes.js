import Chat from './components/Chat';
import Home from './components/Home';
import store from './store/store';

export const routes = [
  {
    path: '',
    component: Home
  },
  {
    path: '/chat',
    component: Chat,
    beforeEnter: (to, from, next) => {
      if (store.state.username === '') {
        next('/');
      } else {
        next();
      }
    }
  }
]
