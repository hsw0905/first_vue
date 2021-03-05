"use strict";

let appHeader = {
  template: '<button v-on:click="passEvent">click me</button>',
  methods: {
    passEvent: function () {
      this.$emit('pass');
    }
  }
}

let appContent = {
  template: '<button v-on:click="plusEvent">Add</button>',
  methods: {
    plusEvent: function () {
      this.$emit('plus');
    }
  }
}

new Vue({
  el: '#app',
  components: {
    'app-header' : appHeader,
    'app-content': appContent,
  },
  methods: {
    logText: function () {
      console.log('hello');
    },
    logNum: function () {
      this.num += 1;
      console.log(this.num);
    }
  },
  data: {
    num:10,
  }

});