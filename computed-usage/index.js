'use strict';

const vm = new Vue({
  el: '#app',
  data: {
    isError: false,
  },
  computed: {
    errorTextColor: function () {
      return this.isError ? 'warning' : null;
    }
  }
});