'use strict';

const vm = new Vue({
  el: '#app',
  data: {
    num : 10,
  },
  methods: {
    cook : function () {
      this.num += 1;
    }
  }
});