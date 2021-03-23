'use strict';

const vm = new Vue({
  el: '#app',
  data: {
    num: 10,
  },
  methods: {
    addNum: function () {
      this.num += 1;
    },
    logText: function () {
      console.log('changed');
    },
  },
  watch: {
    num: function () {
      this.logText();
    }
  }
})