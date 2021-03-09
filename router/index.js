'use strict';

const LoginComponent = {
  template: '<div>login</div>'
}
const MainComponent = {
  template: '<div>main</div>'
}

const router = new VueRouter({
  routes: [
    {
      path:'/login',
      component: LoginComponent,
    },
    {
      path:'/main',
      component: MainComponent,
    },
  ]
});

const vm = new Vue({
  el: '#app',
  router: router
});

