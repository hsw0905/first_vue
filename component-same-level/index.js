'use strict';

const appHeader = {
	template: '<div>header</div>',
  props: ['propsdata'],
}

const appContent = {
	template: '<div>content<button v-on:click="passNum">pass</button></div>',
  methods: {
	  passNum: function () {
	    this.$emit('pass', 10);
    }
  }
}
new Vue({
	el:'#app',
	components: {
		'app-header': appHeader,
		'app-content': appContent,
	},
  data: {
	  num: 0,
  },
  methods: {
	  deliverNum : function (value) {
      this.num = value;
    }
  }
});
