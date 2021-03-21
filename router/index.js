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
      // component's' 가 아니다 (path 하나당 한가지 컴포넌트 라우팅)
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

