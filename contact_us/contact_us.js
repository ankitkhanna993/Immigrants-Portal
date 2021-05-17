/* Khanna, Ankit 1001553616
   Singh, Shivam 1001766008
   Naragam, Krishna Chaitanya 1001836274
*/
tinymce.init({
    selector: '#mytextarea'
});

new Vue({
	el: '#app',
	vuetify: new Vuetify(),
	// components: {
	// 	'editor': Editor
	//   },
	data: () => ({
	  valid: true,
	  immigrant: "Immigrant",
	  role: $cookies.get('role'),
	  name: '',
	  nameRules: [
		v => !!v || 'Name is required',
		v => (v && v.length <= 10) || 'Name must be less than 10 characters',
	  ],
	  email: '',
	  content:'Give your suggestions here!',
	  emailRules: [
		v => !!v || 'E-mail is required',
		v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
	  ],
	}),
  
	methods: {
	  validate () {
		x = this.$refs.form.validate()
		if(x)
		window.location.href='mailto:kchaitanya863@gmail.com?subject='+encodeURIComponent(this.name)+"&body="+encodeURIComponent(this.content);
	  },
	  reset () {
		this.$refs.form.reset()
	  },
	  resetValidation () {
		this.$refs.form.resetValidation()
	  },
	},
  })