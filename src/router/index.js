import Vue from 'vue';
import Router from 'vue-router';
import ListaArticulos from '@/components/ListaArticulos';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ListaArticulos',
      component: ListaArticulos,
    },
  ],
});
