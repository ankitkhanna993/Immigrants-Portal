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
  password: '',
  fname: '',
  lname: '',
  email: '',
  contact_num: '',
  country: '',
  city: '',
  userType: '',
  profession: '',
  pwdRules: [
  v => !!v || 'Passowrd is required',
  v => (v && v.length >= 5) || 'Password must be greater than 4 characters',
  ],
  nameRules: [
  v => !!v || 'Name is required',
  v => (v && v.length <= 10) || 'Name must be less than 10 characters',
  ],
  email: '',
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
  redirectToLogin () {
    window.location.href = "/wdm/reg.php?fname="+encodeURIComponent(this.email)+"&lname="+encodeURIComponent(this.lname)+
    "&email="+encodeURIComponent(this.email)+"&mobile="+encodeURIComponent(this.contact_num)+"&cntry_id="+encodeURIComponent(Math.floor(Math.random() * 235))+
    "&user_type="+encodeURIComponent(this.userType)+"&profession="+encodeURIComponent(this.profession)+"&pwd="+encodeURIComponent(this.password)+
    "&city_id="+encodeURIComponent(Math.floor(Math.random() * 235))
  }
}
})
