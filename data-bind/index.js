"use strict";

const vm = new Vue({
  el: '#app',
  data: {
    num : 10,
    uuid : 'abcde1234',
    name : 'text-blue',
    flag : true,
    message: '',
  },
  computed: {
    doubleNum : function (){
      return this.num * 2;
    }
  }
});