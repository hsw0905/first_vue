"use strict";

const vm = new Vue({
  el : '#app',
  data : {
    users : []
  },
  methods : {
    getData: function () {
      const vm = this;
      axios.get('https://jsonplaceholder.typicode.com/users/')
          .then(function(response) {
            console.log(response.data);
            vm.users = response.data;
          })
          .catch(function (error) {
            console.log(error);
          })
    }
  },

});