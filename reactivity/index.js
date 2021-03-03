"use strict";

const div = document.querySelector('#app');
let viewModel = {};

(function() {
	function init() {
		Object.defineProperty(viewModel, 'str', {
			get: function() {
				console.log('접근');
			},
			set: function(newValue) {
				console.log('할당', newValue);
				render(newValue);
			}
		});
	}

	function render(value) {
		div.innerHTML = value;
	}

	init();
})();



