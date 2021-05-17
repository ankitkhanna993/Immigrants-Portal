/* Khanna, Ankit 1001553616
   Singh, Shivam 1001766008
   Naragam, Krishna Chaitanya 1001836274
*/
new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  data() {
    return {
        immigrant: "Immigrant",
        loggedIn: $cookies + "asdf",
        role: $cookies.get('role'),
        items: [
            {
                src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
            },
            {
                src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
            },
            {
                src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
            },
            {
                src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
            },
        ],
    }
  },
})
