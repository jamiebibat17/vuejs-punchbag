new Vue({
	el: '#vue-app',
	data: {
		health: 100,
		ends: false
	},
	methods: {
		punch: function() {
			this.health = this.health - 10;
			if (this.health <= 0) {
				this.ends = true;
			}
		},
		restart: function() {
			this.health = 100;
			this.ends = false;
		}
	},
	computed: {

	}
});