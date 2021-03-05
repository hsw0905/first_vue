"use strict";

let appHeader = {
  template: '<h1>{{ propsdata }}</h1>',
  props: ['propsdata']
}
let appContent = {
  template: '<div>{{ propsdata }}</div>',
  props: ['propsdata']
}

new Vue({
  el:'#app',
  components: {
    'app-header': appHeader,
    'app-content': appContent,
  },
  data: {
    message: 'hi',
    num:10
  }
});