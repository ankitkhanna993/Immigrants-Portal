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
data: () => ({
  immigrant: "Immigrant",
  role: $cookies.get('role'),
  valid: true,
  email: '',
  password: '',
  pwdRules: [
  v => !!v || 'Passowrd is required',
  v => (v && v.length >= 5) || 'Password must be greater than 4 characters',
  ],
  emailRules: [
  v => !!v || 'E-mail is required',
  v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
  ]
}),

methods: {
  validate () {
  x = this.$refs.form.validate()
  if(x)
  window.location.href='mailto:kchaitanya863@gmail.com';
  },
  reset () {
  this.$refs.form.reset()
  },
  resetValidation () {
  this.$refs.form.resetValidation()
  },
  checkLogin () {
    window.location.href = "/wdm/user.php?username="+encodeURIComponent(this.email)+"&password="+encodeURIComponent(this.password)
  }
}
})
