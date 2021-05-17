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
            info: ['kc'],
            items: axios
                .get('/wdm/immigrant/ls_json.php').data(),

            //     [
            //     'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
            //     'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
            //     'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
            //     'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
            // ],
        }
    },
    mounted () {
        axios
            .get('/wdm/immigrant/ls_json.php')
            .then(response => (this.items = response.data))
    }

})

tinymce.init({
    selector: '#mytextarea',
    plugins: 'fullscreen image media link code imagetools',
});
