/* Khanna, Ankit 1001553616
   Singh, Shivam 1001766008
   Naragam, Krishna Chaitanya 1001836274
*/
Vue.component('line-chart', {
    extends: VueChartJs.Line,
    mounted() {
        this.renderChart({
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Number of Immigrants registered',
                    backgroundColor: 'lightgreen',
                    data: [40, 39, 10, 40, 39, 80, 40]
                }
            ]
        }, { responsive: true, maintainAspectRatio: false })
    }

})



var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Country Admin!'
    }
})
// Countries and continents CRUD
new Vue({
    el: '#continents',
    vuetify: new Vuetify(),
    data: () => ({
        dialog: false,
        dialogDelete: false,
        headers: [
            {
                text: 'Country Name',
                align: 'start',
                sortable: true,
                value: 'name',
            },
            { text: 'countryID', value: 'countryID' },
            { text: 'continentID', value: 'continent' },
            { text: 'acceptsImmigrants', value: 'acceptsImmigrants' },
            { text: 'isSafe', value: 'isSafe' },
            { text: 'Actions', value: 'actions', sortable: false },
        ],
        countries: [],
        editedIndex: -1,
        editedItem: {
            name: 'Name',
            countryID: 0,
            continent: 'Africa',
            acceptsImmigrants: 1,
            isSafe: 1,
        },
        defaultItem: {
            name: 'Name',
            countryID: 0,
            continent: 'Africa',
            acceptsImmigrants: 1,
            isSafe: 1,
        },
    }),

    computed: {
        formTitle() {
            return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
        },
    },

    watch: {
        dialog(val) {
            val || this.close()
        },
        dialogDelete(val) {
            val || this.closeDelete()
        },
    },

    created() {
        this.initialize()
    },

    methods: {
        initialize() {
            this.countries = [
                {
                    "name": "Tonga",
                    "countryID": 1,
                    "continent": "2",
                    "acceptsImmigrants": "No",
                    "isSafe": "Yes"
                },
                {
                    "name": "Kuwait",
                    "countryID": 2,
                    "continent": "2",
                    "acceptsImmigrants": "No",
                    "isSafe": "Yes"
                },
                {
                    "name": "Dominica",
                    "countryID": 3,
                    "continent": "5",
                    "acceptsImmigrants": "Yes",
                    "isSafe": "No"
                },
                {
                    "name": "Ecuador",
                    "countryID": 4,
                    "continent": "6",
                    "acceptsImmigrants": "Yes",
                    "isSafe": "Yes"
                },
                {
                    "name": "Bouvet Island",
                    "countryID": 5,
                    "continent": "7",
                    "acceptsImmigrants": "Yes",
                    "isSafe": "Yes"
                },
                {
                    "name": "Myanmar",
                    "countryID": 6,
                    "continent": "6",
                    "acceptsImmigrants": "No",
                    "isSafe": "No"
                },
                {
                    "name": "Kiribati",
                    "countryID": 7,
                    "continent": "4",
                    "acceptsImmigrants": "No",
                    "isSafe": "Yes"
                },
                {
                    "name": "Bahamas",
                    "countryID": 8,
                    "continent": "6",
                    "acceptsImmigrants": "No",
                    "isSafe": "Yes"
                },
                {
                    "name": "Falkland Islands",
                    "countryID": 9,
                    "continent": "4",
                    "acceptsImmigrants": "No",
                    "isSafe": "No"
                },
                {
                    "name": "United States",
                    "countryID": 10,
                    "continent": "3",
                    "acceptsImmigrants": "No",
                    "isSafe": "No"
                },
                {
                    "name": "Cayman Islands",
                    "countryID": 11,
                    "continent": "3",
                    "acceptsImmigrants": "No",
                    "isSafe": "No"
                },
                {
                    "name": "Australia",
                    "countryID": 12,
                    "continent": "7",
                    "acceptsImmigrants": "Yes",
                    "isSafe": "Yes"
                },
                {
                    "name": "United States",
                    "countryID": 13,
                    "continent": "4",
                    "acceptsImmigrants": "No",
                    "isSafe": "No"
                },
                {
                    "name": "Bouvet Island",
                    "countryID": 14,
                    "continent": "4",
                    "acceptsImmigrants": "Yes",
                    "isSafe": "Yes"
                },
                {
                    "name": "Mali",
                    "countryID": 15,
                    "continent": "4",
                    "acceptsImmigrants": "No",
                    "isSafe": "Yes"
                },
                {
                    "name": "Chile",
                    "countryID": 16,
                    "continent": "2",
                    "acceptsImmigrants": "No",
                    "isSafe": "Yes"
                },
                {
                    "name": "Nigeria",
                    "countryID": 17,
                    "continent": "2",
                    "acceptsImmigrants": "Yes",
                    "isSafe": "No"
                },
                {
                    "name": "Syria",
                    "countryID": 18,
                    "continent": "3",
                    "acceptsImmigrants": "Yes",
                    "isSafe": "Yes"
                },
                {
                    "name": "Andorra",
                    "countryID": 19,
                    "continent": "3",
                    "acceptsImmigrants": "No",
                    "isSafe": "No"
                },
                {
                    "name": "Dominican Republic",
                    "countryID": 20,
                    "continent": "7",
                    "acceptsImmigrants": "No",
                    "isSafe": "Yes"
                },
                {
                    "name": "Lesotho",
                    "countryID": 21,
                    "continent": "6",
                    "acceptsImmigrants": "No",
                    "isSafe": "Yes"
                },
                {
                    "name": "India",
                    "countryID": 22,
                    "continent": "2",
                    "acceptsImmigrants": "No",
                    "isSafe": "Yes"
                },
                {
                    "name": "Viet Nam",
                    "countryID": 23,
                    "continent": "5",
                    "acceptsImmigrants": "Yes",
                    "isSafe": "Yes"
                },
                {
                    "name": "Maldives",
                    "countryID": 24,
                    "continent": "1",
                    "acceptsImmigrants": "Yes",
                    "isSafe": "No"
                },
                {
                    "name": "Jamaica",
                    "countryID": 25,
                    "continent": "3",
                    "acceptsImmigrants": "No",
                    "isSafe": "No"
                },
                {
                    "name": "Norway",
                    "countryID": 26,
                    "continent": "5",
                    "acceptsImmigrants": "Yes",
                    "isSafe": "Yes"
                },
                {
                    "name": "Indonesia",
                    "countryID": 27,
                    "continent": "5",
                    "acceptsImmigrants": "Yes",
                    "isSafe": "Yes"
                },
                {
                    "name": "El Salvador",
                    "countryID": 28,
                    "continent": "2",
                    "acceptsImmigrants": "No",
                    "isSafe": "Yes"
                },
                {
                    "name": "Lithuania",
                    "countryID": 29,
                    "continent": "6",
                    "acceptsImmigrants": "Yes",
                    "isSafe": "No"
                },
                {
                    "name": "Saint Martin",
                    "countryID": 30,
                    "continent": "4",
                    "acceptsImmigrants": "Yes",
                    "isSafe": "Yes"
                },
                {
                    "name": "Saint Lucia",
                    "countryID": 31,
                    "continent": "6",
                    "acceptsImmigrants": "Yes",
                    "isSafe": "Yes"
                },
                {
                    "name": "Cuba",
                    "countryID": 32,
                    "continent": "5",
                    "acceptsImmigrants": "Yes",
                    "isSafe": "No"
                },
                {
                    "name": "South Sudan",
                    "countryID": 33,
                    "continent": "6",
                    "acceptsImmigrants": "No",
                    "isSafe": "No"
                },
                {
                    "name": "Seychelles",
                    "countryID": 34,
                    "continent": "6",
                    "acceptsImmigrants": "No",
                    "isSafe": "Yes"
                },
                {
                    "name": "Uruguay",
                    "countryID": 35,
                    "continent": "3",
                    "acceptsImmigrants": "No",
                    "isSafe": "No"
                },
                {
                    "name": "Laos",
                    "countryID": 36,
                    "continent": "7",
                    "acceptsImmigrants": "No",
                    "isSafe": "No"
                },
                {
                    "name": "Gibraltar",
                    "countryID": 37,
                    "continent": "1",
                    "acceptsImmigrants": "Yes",
                    "isSafe": "Yes"
                },
                {
                    "name": "South Africa",
                    "countryID": 38,
                    "continent": "7",
                    "acceptsImmigrants": "Yes",
                    "isSafe": "No"
                },
                {
                    "name": "Korea, South",
                    "countryID": 39,
                    "continent": "6",
                    "acceptsImmigrants": "No",
                    "isSafe": "Yes"
                },
                {
                    "name": "Syria",
                    "countryID": 40,
                    "continent": "6",
                    "acceptsImmigrants": "No",
                    "isSafe": "No"
                },
                {
                    "name": "Zimbabwe",
                    "countryID": 41,
                    "continent": "5",
                    "acceptsImmigrants": "Yes",
                    "isSafe": "Yes"
                },
                {
                    "name": "Spain",
                    "countryID": 42,
                    "continent": "6",
                    "acceptsImmigrants": "No",
                    "isSafe": "No"
                },
                {
                    "name": "Mozambique",
                    "countryID": 43,
                    "continent": "5",
                    "acceptsImmigrants": "Yes",
                    "isSafe": "No"
                },
                {
                    "name": "Burkina Faso",
                    "countryID": 44,
                    "continent": "1",
                    "acceptsImmigrants": "No",
                    "isSafe": "Yes"
                },
                {
                    "name": "San Marino",
                    "countryID": 45,
                    "continent": "4",
                    "acceptsImmigrants": "Yes",
                    "isSafe": "Yes"
                },
                {
                    "name": "Panama",
                    "countryID": 46,
                    "continent": "6",
                    "acceptsImmigrants": "Yes",
                    "isSafe": "Yes"
                },
                {
                    "name": "Nicaragua",
                    "countryID": 47,
                    "continent": "6",
                    "acceptsImmigrants": "Yes",
                    "isSafe": "Yes"
                },
                {
                    "name": "Serbia",
                    "countryID": 48,
                    "continent": "4",
                    "acceptsImmigrants": "Yes",
                    "isSafe": "No"
                },
                {
                    "name": "Chile",
                    "countryID": 49,
                    "continent": "5",
                    "acceptsImmigrants": "Yes",
                    "isSafe": "No"
                },
                {
                    "name": "Costa Rica",
                    "countryID": 50,
                    "continent": "2",
                    "acceptsImmigrants": "No",
                    "isSafe": "Yes"
                },
                {
                    "name": "China",
                    "countryID": 51,
                    "continent": "1",
                    "acceptsImmigrants": "Yes",
                    "isSafe": "No"
                },
                {
                    "name": "Reunion",
                    "countryID": 52,
                    "continent": "4",
                    "acceptsImmigrants": "Yes",
                    "isSafe": "No"
                },
                {
                    "name": "Austria",
                    "countryID": 53,
                    "continent": "6",
                    "acceptsImmigrants": "Yes",
                    "isSafe": "Yes"
                },
                {
                    "name": "Somalia",
                    "countryID": 54,
                    "continent": "6",
                    "acceptsImmigrants": "No",
                    "isSafe": "No"
                },
                {
                    "name": "Azerbaijan",
                    "countryID": 55,
                    "continent": "3",
                    "acceptsImmigrants": "Yes",
                    "isSafe": "Yes"
                },
                {
                    "name": "Burkina Faso",
                    "countryID": 56,
                    "continent": "7",
                    "acceptsImmigrants": "No",
                    "isSafe": "Yes"
                },
                {
                    "name": "Eritrea",
                    "countryID": 57,
                    "continent": "2",
                    "acceptsImmigrants": "No",
                    "isSafe": "Yes"
                },
                {
                    "name": "Mexico",
                    "countryID": 58,
                    "continent": "7",
                    "acceptsImmigrants": "Yes",
                    "isSafe": "No"
                },
                {
                    "name": "Norfolk Island",
                    "countryID": 59,
                    "continent": "7",
                    "acceptsImmigrants": "Yes",
                    "isSafe": "No"
                },
                {
                    "name": "Heard Island and Mcdonald Islands",
                    "countryID": 60,
                    "continent": "2",
                    "acceptsImmigrants": "No",
                    "isSafe": "No"
                },
                {
                    "name": "Ukraine",
                    "countryID": 61,
                    "continent": "5",
                    "acceptsImmigrants": "Yes",
                    "isSafe": "No"
                },
                {
                    "name": "Haiti",
                    "countryID": 62,
                    "continent": "1",
                    "acceptsImmigrants": "Yes",
                    "isSafe": "Yes"
                },
                {
                    "name": "Guyana",
                    "countryID": 63,
                    "continent": "5",
                    "acceptsImmigrants": "No",
                    "isSafe": "Yes"
                },
                {
                    "name": "Comoros",
                    "countryID": 64,
                    "continent": "5",
                    "acceptsImmigrants": "Yes",
                    "isSafe": "No"
                },
                {
                    "name": "Switzerland",
                    "countryID": 65,
                    "continent": "3",
                    "acceptsImmigrants": "No",
                    "isSafe": "Yes"
                },
                {
                    "name": "Croatia",
                    "countryID": 66,
                    "continent": "5",
                    "acceptsImmigrants": "Yes",
                    "isSafe": "No"
                },
                {
                    "name": "Rwanda",
                    "countryID": 67,
                    "continent": "1",
                    "acceptsImmigrants": "Yes",
                    "isSafe": "Yes"
                },
                {
                    "name": "Dominica",
                    "countryID": 68,
                    "continent": "1",
                    "acceptsImmigrants": "Yes",
                    "isSafe": "No"
                },
                {
                    "name": "Rwanda",
                    "countryID": 69,
                    "continent": "6",
                    "acceptsImmigrants": "Yes",
                    "isSafe": "No"
                },
                {
                    "name": "Micronesia",
                    "countryID": 70,
                    "continent": "5",
                    "acceptsImmigrants": "No",
                    "isSafe": "Yes"
                },
                {
                    "name": "Turkmenistan",
                    "countryID": 71,
                    "continent": "1",
                    "acceptsImmigrants": "No",
                    "isSafe": "Yes"
                },
                {
                    "name": "Liberia",
                    "countryID": 72,
                    "continent": "3",
                    "acceptsImmigrants": "No",
                    "isSafe": "No"
                },
                {
                    "name": "Botswana",
                    "countryID": 73,
                    "continent": "7",
                    "acceptsImmigrants": "Yes",
                    "isSafe": "No"
                },
                {
                    "name": "Qatar",
                    "countryID": 74,
                    "continent": "3",
                    "acceptsImmigrants": "Yes",
                    "isSafe": "Yes"
                },
                {
                    "name": "Lebanon",
                    "countryID": 75,
                    "continent": "7",
                    "acceptsImmigrants": "Yes",
                    "isSafe": "No"
                },
                {
                    "name": "Grenada",
                    "countryID": 76,
                    "continent": "3",
                    "acceptsImmigrants": "Yes",
                    "isSafe": "Yes"
                },
                {
                    "name": "Heard Island and Mcdonald Islands",
                    "countryID": 77,
                    "continent": "6",
                    "acceptsImmigrants": "No",
                    "isSafe": "No"
                },
                {
                    "name": "Curaçao",
                    "countryID": 78,
                    "continent": "1",
                    "acceptsImmigrants": "No",
                    "isSafe": "No"
                },
                {
                    "name": "Cocos (Keeling) Islands",
                    "countryID": 79,
                    "continent": "2",
                    "acceptsImmigrants": "Yes",
                    "isSafe": "No"
                },
                {
                    "name": "Virgin Islands, British",
                    "countryID": 80,
                    "continent": "5",
                    "acceptsImmigrants": "Yes",
                    "isSafe": "Yes"
                },
                {
                    "name": "Andorra",
                    "countryID": 81,
                    "continent": "6",
                    "acceptsImmigrants": "No",
                    "isSafe": "Yes"
                },
                {
                    "name": "Cambodia",
                    "countryID": 82,
                    "continent": "5",
                    "acceptsImmigrants": "Yes",
                    "isSafe": "Yes"
                },
                {
                    "name": "Syria",
                    "countryID": 83,
                    "continent": "1",
                    "acceptsImmigrants": "Yes",
                    "isSafe": "No"
                },
                {
                    "name": "Oman",
                    "countryID": 84,
                    "continent": "7",
                    "acceptsImmigrants": "Yes",
                    "isSafe": "Yes"
                },
                {
                    "name": "Malawi",
                    "countryID": 85,
                    "continent": "3",
                    "acceptsImmigrants": "No",
                    "isSafe": "No"
                },
                {
                    "name": "United States",
                    "countryID": 86,
                    "continent": "1",
                    "acceptsImmigrants": "Yes",
                    "isSafe": "Yes"
                },
                {
                    "name": "Korea, North",
                    "countryID": 87,
                    "continent": "2",
                    "acceptsImmigrants": "Yes",
                    "isSafe": "No"
                },
                {
                    "name": "French Polynesia",
                    "countryID": 88,
                    "continent": "5",
                    "acceptsImmigrants": "Yes",
                    "isSafe": "Yes"
                },
                {
                    "name": "Libya",
                    "countryID": 89,
                    "continent": "6",
                    "acceptsImmigrants": "Yes",
                    "isSafe": "Yes"
                },
                {
                    "name": "Colombia",
                    "countryID": 90,
                    "continent": "6",
                    "acceptsImmigrants": "Yes",
                    "isSafe": "No"
                },
                {
                    "name": "Central African Republic",
                    "countryID": 91,
                    "continent": "2",
                    "acceptsImmigrants": "No",
                    "isSafe": "No"
                },
                {
                    "name": "Paraguay",
                    "countryID": 92,
                    "continent": "6",
                    "acceptsImmigrants": "Yes",
                    "isSafe": "No"
                },
                {
                    "name": "Saint Vincent and The Grenadines",
                    "countryID": 93,
                    "continent": "1",
                    "acceptsImmigrants": "No",
                    "isSafe": "Yes"
                },
                {
                    "name": "Korea, South",
                    "countryID": 94,
                    "continent": "2",
                    "acceptsImmigrants": "Yes",
                    "isSafe": "No"
                },
                {
                    "name": "American Samoa",
                    "countryID": 95,
                    "continent": "5",
                    "acceptsImmigrants": "No",
                    "isSafe": "Yes"
                },
                {
                    "name": "Paraguay",
                    "countryID": 96,
                    "continent": "5",
                    "acceptsImmigrants": "Yes",
                    "isSafe": "No"
                },
                {
                    "name": "Greece",
                    "countryID": 97,
                    "continent": "4",
                    "acceptsImmigrants": "No",
                    "isSafe": "No"
                },
                {
                    "name": "Viet Nam",
                    "countryID": 98,
                    "continent": "3",
                    "acceptsImmigrants": "Yes",
                    "isSafe": "No"
                },
                {
                    "name": "New Caledonia",
                    "countryID": 99,
                    "continent": "7",
                    "acceptsImmigrants": "No",
                    "isSafe": "No"
                },
                {
                    "name": "United States Minor Outlying Islands",
                    "countryID": 100,
                    "continent": "6",
                    "acceptsImmigrants": "No",
                    "isSafe": "No"
                }
            ]
        },

        editItem(item) {
            this.editedIndex = this.countries.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialog = true
        },

        deleteItem(item) {
            this.editedIndex = this.countries.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialogDelete = true
        },

        deleteItemConfirm() {
            this.countries.splice(this.editedIndex, 1)
            this.closeDelete()
        },

        close() {
            this.dialog = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },

        closeDelete() {
            this.dialogDelete = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },

        save() {
            if (this.editedIndex > -1) {
                Object.assign(this.countries[this.editedIndex], this.editedItem)
            } else {
                this.countries.push(this.editedItem)
            }
            this.close()
        },
    },
})

// Countries CRUD
new Vue({
    el: '#countries',
    vuetify: new Vuetify(),
    data: () => ({
        dialog: false,
        dialogDelete: false,
        headers: [
            {
                text: 'Country ID',
                align: 'start',
                sortable: true,
                value: 'countryID',
            },
            { text: 'Population in Thousands', value: 'populationInThousands' },
            { text: 'Number of Cities', value: 'numberOfCities' },
            { text: 'Number of Immigrants', value: 'numberOfImmigrants' },
            { text: 'Actions', value: 'actions', sortable: false },
        ],
        countries: [],
        editedIndex: -1,
        editedItem: {
            countryID: 0,
            populationInThousands: 0,
            numberOfCities: 0,
            numberOfImmigrants: 0,
        },
        defaultItem: {
            countryID: 0,
            populationInThousands: 0,
            numberOfCities: 0,
            numberOfImmigrants: 0,
        },
    }),

    computed: {
        formTitle() {
            return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
        },
    },

    watch: {
        dialog(val) {
            val || this.close()
        },
        dialogDelete(val) {
            val || this.closeDelete()
        },
    },

    created() {
        this.initialize()
    },

    methods: {
        initialize() {
            this.countries = [
                {
                    "countryID": 1,
                    "populationInThousands": 341,
                    "numberOfCities": 67,
                    "numberOfImmigrants": 2463
                },
                {
                    "countryID": 2,
                    "populationInThousands": 223,
                    "numberOfCities": 60,
                    "numberOfImmigrants": 433
                },
                {
                    "countryID": 3,
                    "populationInThousands": 578,
                    "numberOfCities": 76,
                    "numberOfImmigrants": 9084
                },
                {
                    "countryID": 4,
                    "populationInThousands": 838,
                    "numberOfCities": 87,
                    "numberOfImmigrants": 6450
                },
                {
                    "countryID": 5,
                    "populationInThousands": 167,
                    "numberOfCities": 44,
                    "numberOfImmigrants": 4574
                },
                {
                    "countryID": 6,
                    "populationInThousands": 642,
                    "numberOfCities": 59,
                    "numberOfImmigrants": 3116
                },
                {
                    "countryID": 7,
                    "populationInThousands": 591,
                    "numberOfCities": 69,
                    "numberOfImmigrants": 1801
                },
                {
                    "countryID": 8,
                    "populationInThousands": 938,
                    "numberOfCities": 87,
                    "numberOfImmigrants": 9790
                },
                {
                    "countryID": 9,
                    "populationInThousands": 821,
                    "numberOfCities": 15,
                    "numberOfImmigrants": 5070
                },
                {
                    "countryID": 10,
                    "populationInThousands": 782,
                    "numberOfCities": 98,
                    "numberOfImmigrants": 4025
                },
                {
                    "countryID": 11,
                    "populationInThousands": 177,
                    "numberOfCities": 64,
                    "numberOfImmigrants": 3714
                },
                {
                    "countryID": 12,
                    "populationInThousands": 132,
                    "numberOfCities": 25,
                    "numberOfImmigrants": 700
                },
                {
                    "countryID": 13,
                    "populationInThousands": 563,
                    "numberOfCities": 81,
                    "numberOfImmigrants": 2482
                },
                {
                    "countryID": 14,
                    "populationInThousands": 537,
                    "numberOfCities": 68,
                    "numberOfImmigrants": 5944
                },
                {
                    "countryID": 15,
                    "populationInThousands": 422,
                    "numberOfCities": 42,
                    "numberOfImmigrants": 6697
                },
                {
                    "countryID": 16,
                    "populationInThousands": 587,
                    "numberOfCities": 50,
                    "numberOfImmigrants": 8956
                },
                {
                    "countryID": 17,
                    "populationInThousands": 597,
                    "numberOfCities": 86,
                    "numberOfImmigrants": 1593
                },
                {
                    "countryID": 18,
                    "populationInThousands": 593,
                    "numberOfCities": 72,
                    "numberOfImmigrants": 8586
                },
                {
                    "countryID": 19,
                    "populationInThousands": 495,
                    "numberOfCities": 63,
                    "numberOfImmigrants": 7424
                },
                {
                    "countryID": 20,
                    "populationInThousands": 765,
                    "numberOfCities": 89,
                    "numberOfImmigrants": 3384
                },
                {
                    "countryID": 21,
                    "populationInThousands": 532,
                    "numberOfCities": 31,
                    "numberOfImmigrants": 8962
                },
                {
                    "countryID": 22,
                    "populationInThousands": 723,
                    "numberOfCities": 95,
                    "numberOfImmigrants": 7833
                },
                {
                    "countryID": 23,
                    "populationInThousands": 817,
                    "numberOfCities": 33,
                    "numberOfImmigrants": 5180
                },
                {
                    "countryID": 24,
                    "populationInThousands": 842,
                    "numberOfCities": 65,
                    "numberOfImmigrants": 4082
                },
                {
                    "countryID": 25,
                    "populationInThousands": 602,
                    "numberOfCities": 75,
                    "numberOfImmigrants": 5469
                },
                {
                    "countryID": 26,
                    "populationInThousands": 241,
                    "numberOfCities": 67,
                    "numberOfImmigrants": 145
                },
                {
                    "countryID": 27,
                    "populationInThousands": 667,
                    "numberOfCities": 65,
                    "numberOfImmigrants": 4763
                },
                {
                    "countryID": 28,
                    "populationInThousands": 771,
                    "numberOfCities": 59,
                    "numberOfImmigrants": 9405
                },
                {
                    "countryID": 29,
                    "populationInThousands": 646,
                    "numberOfCities": 70,
                    "numberOfImmigrants": 9550
                },
                {
                    "countryID": 30,
                    "populationInThousands": 121,
                    "numberOfCities": 88,
                    "numberOfImmigrants": 8970
                },
                {
                    "countryID": 31,
                    "populationInThousands": 142,
                    "numberOfCities": 37,
                    "numberOfImmigrants": 3327
                },
                {
                    "countryID": 32,
                    "populationInThousands": 652,
                    "numberOfCities": 62,
                    "numberOfImmigrants": 8270
                },
                {
                    "countryID": 33,
                    "populationInThousands": 821,
                    "numberOfCities": 33,
                    "numberOfImmigrants": 9009
                },
                {
                    "countryID": 34,
                    "populationInThousands": 516,
                    "numberOfCities": 31,
                    "numberOfImmigrants": 906
                },
                {
                    "countryID": 35,
                    "populationInThousands": 790,
                    "numberOfCities": 41,
                    "numberOfImmigrants": 2556
                },
                {
                    "countryID": 36,
                    "populationInThousands": 128,
                    "numberOfCities": 95,
                    "numberOfImmigrants": 9025
                },
                {
                    "countryID": 37,
                    "populationInThousands": 196,
                    "numberOfCities": 71,
                    "numberOfImmigrants": 4398
                },
                {
                    "countryID": 38,
                    "populationInThousands": 796,
                    "numberOfCities": 33,
                    "numberOfImmigrants": 6637
                },
                {
                    "countryID": 39,
                    "populationInThousands": 746,
                    "numberOfCities": 87,
                    "numberOfImmigrants": 5735
                },
                {
                    "countryID": 40,
                    "populationInThousands": 963,
                    "numberOfCities": 22,
                    "numberOfImmigrants": 455
                },
                {
                    "countryID": 41,
                    "populationInThousands": 311,
                    "numberOfCities": 43,
                    "numberOfImmigrants": 3666
                },
                {
                    "countryID": 42,
                    "populationInThousands": 685,
                    "numberOfCities": 61,
                    "numberOfImmigrants": 3653
                },
                {
                    "countryID": 43,
                    "populationInThousands": 330,
                    "numberOfCities": 40,
                    "numberOfImmigrants": 6271
                },
                {
                    "countryID": 44,
                    "populationInThousands": 611,
                    "numberOfCities": 25,
                    "numberOfImmigrants": 3059
                },
                {
                    "countryID": 45,
                    "populationInThousands": 725,
                    "numberOfCities": 16,
                    "numberOfImmigrants": 1782
                },
                {
                    "countryID": 46,
                    "populationInThousands": 971,
                    "numberOfCities": 51,
                    "numberOfImmigrants": 3028
                },
                {
                    "countryID": 47,
                    "populationInThousands": 60,
                    "numberOfCities": 91,
                    "numberOfImmigrants": 3240
                },
                {
                    "countryID": 48,
                    "populationInThousands": 536,
                    "numberOfCities": 26,
                    "numberOfImmigrants": 279
                },
                {
                    "countryID": 49,
                    "populationInThousands": 612,
                    "numberOfCities": 25,
                    "numberOfImmigrants": 2165
                },
                {
                    "countryID": 50,
                    "populationInThousands": 85,
                    "numberOfCities": 18,
                    "numberOfImmigrants": 492
                },
                {
                    "countryID": 51,
                    "populationInThousands": 999,
                    "numberOfCities": 49,
                    "numberOfImmigrants": 921
                },
                {
                    "countryID": 52,
                    "populationInThousands": 921,
                    "numberOfCities": 16,
                    "numberOfImmigrants": 5196
                },
                {
                    "countryID": 53,
                    "populationInThousands": 844,
                    "numberOfCities": 71,
                    "numberOfImmigrants": 5339
                },
                {
                    "countryID": 54,
                    "populationInThousands": 373,
                    "numberOfCities": 49,
                    "numberOfImmigrants": 4772
                },
                {
                    "countryID": 55,
                    "populationInThousands": 665,
                    "numberOfCities": 49,
                    "numberOfImmigrants": 5042
                },
                {
                    "countryID": 56,
                    "populationInThousands": 272,
                    "numberOfCities": 37,
                    "numberOfImmigrants": 4288
                },
                {
                    "countryID": 57,
                    "populationInThousands": 116,
                    "numberOfCities": 72,
                    "numberOfImmigrants": 1090
                },
                {
                    "countryID": 58,
                    "populationInThousands": 326,
                    "numberOfCities": 32,
                    "numberOfImmigrants": 8000
                },
                {
                    "countryID": 59,
                    "populationInThousands": 609,
                    "numberOfCities": 33,
                    "numberOfImmigrants": 7369
                },
                {
                    "countryID": 60,
                    "populationInThousands": 666,
                    "numberOfCities": 54,
                    "numberOfImmigrants": 5727
                },
                {
                    "countryID": 61,
                    "populationInThousands": 368,
                    "numberOfCities": 95,
                    "numberOfImmigrants": 3900
                },
                {
                    "countryID": 62,
                    "populationInThousands": 211,
                    "numberOfCities": 26,
                    "numberOfImmigrants": 4526
                },
                {
                    "countryID": 63,
                    "populationInThousands": 183,
                    "numberOfCities": 26,
                    "numberOfImmigrants": 9304
                },
                {
                    "countryID": 64,
                    "populationInThousands": 439,
                    "numberOfCities": 91,
                    "numberOfImmigrants": 1613
                },
                {
                    "countryID": 65,
                    "populationInThousands": 248,
                    "numberOfCities": 47,
                    "numberOfImmigrants": 560
                },
                {
                    "countryID": 66,
                    "populationInThousands": 532,
                    "numberOfCities": 34,
                    "numberOfImmigrants": 6223
                },
                {
                    "countryID": 67,
                    "populationInThousands": 743,
                    "numberOfCities": 29,
                    "numberOfImmigrants": 4519
                },
                {
                    "countryID": 68,
                    "populationInThousands": 120,
                    "numberOfCities": 16,
                    "numberOfImmigrants": 2088
                },
                {
                    "countryID": 69,
                    "populationInThousands": 360,
                    "numberOfCities": 80,
                    "numberOfImmigrants": 2965
                },
                {
                    "countryID": 70,
                    "populationInThousands": 985,
                    "numberOfCities": 69,
                    "numberOfImmigrants": 378
                },
                {
                    "countryID": 71,
                    "populationInThousands": 599,
                    "numberOfCities": 63,
                    "numberOfImmigrants": 3697
                },
                {
                    "countryID": 72,
                    "populationInThousands": 782,
                    "numberOfCities": 62,
                    "numberOfImmigrants": 4586
                },
                {
                    "countryID": 73,
                    "populationInThousands": 621,
                    "numberOfCities": 29,
                    "numberOfImmigrants": 8807
                },
                {
                    "countryID": 74,
                    "populationInThousands": 927,
                    "numberOfCities": 61,
                    "numberOfImmigrants": 4854
                },
                {
                    "countryID": 75,
                    "populationInThousands": 738,
                    "numberOfCities": 80,
                    "numberOfImmigrants": 8311
                },
                {
                    "countryID": 76,
                    "populationInThousands": 459,
                    "numberOfCities": 74,
                    "numberOfImmigrants": 4773
                },
                {
                    "countryID": 77,
                    "populationInThousands": 70,
                    "numberOfCities": 18,
                    "numberOfImmigrants": 6077
                },
                {
                    "countryID": 78,
                    "populationInThousands": 795,
                    "numberOfCities": 31,
                    "numberOfImmigrants": 6843
                },
                {
                    "countryID": 79,
                    "populationInThousands": 328,
                    "numberOfCities": 77,
                    "numberOfImmigrants": 1176
                },
                {
                    "countryID": 80,
                    "populationInThousands": 711,
                    "numberOfCities": 66,
                    "numberOfImmigrants": 6163
                },
                {
                    "countryID": 81,
                    "populationInThousands": 69,
                    "numberOfCities": 98,
                    "numberOfImmigrants": 3495
                },
                {
                    "countryID": 82,
                    "populationInThousands": 262,
                    "numberOfCities": 79,
                    "numberOfImmigrants": 6364
                },
                {
                    "countryID": 83,
                    "populationInThousands": 677,
                    "numberOfCities": 84,
                    "numberOfImmigrants": 276
                },
                {
                    "countryID": 84,
                    "populationInThousands": 206,
                    "numberOfCities": 62,
                    "numberOfImmigrants": 4793
                },
                {
                    "countryID": 85,
                    "populationInThousands": 359,
                    "numberOfCities": 76,
                    "numberOfImmigrants": 1399
                },
                {
                    "countryID": 86,
                    "populationInThousands": 779,
                    "numberOfCities": 71,
                    "numberOfImmigrants": 8960
                },
                {
                    "countryID": 87,
                    "populationInThousands": 945,
                    "numberOfCities": 34,
                    "numberOfImmigrants": 658
                },
                {
                    "countryID": 88,
                    "populationInThousands": 146,
                    "numberOfCities": 24,
                    "numberOfImmigrants": 9132
                },
                {
                    "countryID": 89,
                    "populationInThousands": 753,
                    "numberOfCities": 53,
                    "numberOfImmigrants": 4307
                },
                {
                    "countryID": 90,
                    "populationInThousands": 779,
                    "numberOfCities": 65,
                    "numberOfImmigrants": 3702
                },
                {
                    "countryID": 91,
                    "populationInThousands": 938,
                    "numberOfCities": 99,
                    "numberOfImmigrants": 6843
                },
                {
                    "countryID": 92,
                    "populationInThousands": 152,
                    "numberOfCities": 15,
                    "numberOfImmigrants": 8270
                },
                {
                    "countryID": 93,
                    "populationInThousands": 586,
                    "numberOfCities": 86,
                    "numberOfImmigrants": 1861
                },
                {
                    "countryID": 94,
                    "populationInThousands": 88,
                    "numberOfCities": 74,
                    "numberOfImmigrants": 4950
                },
                {
                    "countryID": 95,
                    "populationInThousands": 907,
                    "numberOfCities": 87,
                    "numberOfImmigrants": 9786
                },
                {
                    "countryID": 96,
                    "populationInThousands": 664,
                    "numberOfCities": 48,
                    "numberOfImmigrants": 4354
                },
                {
                    "countryID": 97,
                    "populationInThousands": 774,
                    "numberOfCities": 76,
                    "numberOfImmigrants": 2165
                },
                {
                    "countryID": 98,
                    "populationInThousands": 580,
                    "numberOfCities": 65,
                    "numberOfImmigrants": 3677
                },
                {
                    "countryID": 99,
                    "populationInThousands": 952,
                    "numberOfCities": 25,
                    "numberOfImmigrants": 5803
                },
                {
                    "countryID": 100,
                    "populationInThousands": 632,
                    "numberOfCities": 67,
                    "numberOfImmigrants": 8225
                }
            ]
        },

        editItem(item) {
            this.editedIndex = this.countries.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialog = true
        },

        deleteItem(item) {
            this.editedIndex = this.countries.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialogDelete = true
        },

        deleteItemConfirm() {
            this.countries.splice(this.editedIndex, 1)
            this.closeDelete()
        },

        close() {
            this.dialog = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },

        closeDelete() {
            this.dialogDelete = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },

        save() {
            if (this.editedIndex > -1) {
                Object.assign(this.countries[this.editedIndex], this.editedItem)
            } else {
                this.countries.push(this.editedItem)
            }
            this.close()
        },
    },
})

// Schools and hospitals by country
new Vue({
    el: '#schools_hospitals',
    vuetify: new Vuetify(),
    data: () => ({
        dialog: false,
        dialogDelete: false,
        headers: [
            {
                text: 'Name',
                align: 'start',
                sortable: true,
                value: 'name',
            },
            { text: 'countryID', value: 'countryID' },
            { text: 'city', value: 'city' },
            { text: 'School/Hospital', value: 'school_hospital' },
            { text: 'capacity', value: 'capacity' },
        ],
        schools_hospitals: [],
        editedIndex: -1,
        editedItem: {
            name: '',
            countryID: 0,
            city: '',
            school_hospital: 'School',
            capacity: 0,
        },
        defaultItem: {
            name: '',
            countryID: 0,
            city: '',
            school_hospital: 'School',
            capacity: 0,
        },
    }),

    computed: {
        formTitle() {
            return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
        },
    },

    watch: {
        dialog(val) {
            val || this.close()
        },
        dialogDelete(val) {
            val || this.closeDelete()
        },
    },

    created() {
        this.initialize()
    },

    methods: {
        initialize() {
            this.schools_hospitals = [
                {
                    "countryID": 96,
                    "city": "Murdochville",
                    "name": "Fermentum Fermentum Arcu Consulting",
                    "school_hospital": "School",
                    "capacity": 2352
                },
                {
                    "countryID": 20,
                    "city": "Sant'Elia a Pianisi",
                    "name": "Fames Ac Company",
                    "school_hospital": "Hospital",
                    "capacity": 657
                },
                {
                    "countryID": 19,
                    "city": "Lobnya",
                    "name": "Nec Quam Curabitur Incorporated",
                    "school_hospital": "School",
                    "capacity": 1711
                },
                {
                    "countryID": 54,
                    "city": "Heestert",
                    "name": "Molestie Pharetra Industries",
                    "school_hospital": "Hospital",
                    "capacity": 1947
                },
                {
                    "countryID": 99,
                    "city": "Temuka",
                    "name": "Lorem Eget Mollis Institute",
                    "school_hospital": "School",
                    "capacity": 1599
                },
                {
                    "countryID": 43,
                    "city": "Alajuelita",
                    "name": "Sit Amet Orci LLC",
                    "school_hospital": "School",
                    "capacity": 1265
                },
                {
                    "countryID": 51,
                    "city": "Halesowen",
                    "name": "Eleifend PC",
                    "school_hospital": "Hospital",
                    "capacity": 1859
                },
                {
                    "countryID": 60,
                    "city": "Denver",
                    "name": "Eu Nibh Vulputate Incorporated",
                    "school_hospital": "School",
                    "capacity": 711
                },
                {
                    "countryID": 11,
                    "city": "Kukatpalle",
                    "name": "Sed Pede Nec Corp.",
                    "school_hospital": "School",
                    "capacity": 2495
                },
                {
                    "countryID": 91,
                    "city": "Faisalabad",
                    "name": "Sed Inc.",
                    "school_hospital": "School",
                    "capacity": 1885
                },
                {
                    "countryID": 55,
                    "city": "Soledad de Graciano Sánchez",
                    "name": "Dignissim Pharetra Industries",
                    "school_hospital": "Hospital",
                    "capacity": 1045
                },
                {
                    "countryID": 19,
                    "city": "Tunja",
                    "name": "Quis Diam LLC",
                    "school_hospital": "Hospital",
                    "capacity": 2308
                },
                {
                    "countryID": 27,
                    "city": "Ludlow",
                    "name": "Sagittis Lobortis Foundation",
                    "school_hospital": "School",
                    "capacity": 2728
                },
                {
                    "countryID": 61,
                    "city": "Khuzdar",
                    "name": "Semper Limited",
                    "school_hospital": "School",
                    "capacity": 677
                },
                {
                    "countryID": 76,
                    "city": "Joliet",
                    "name": "Mauris LLC",
                    "school_hospital": "Hospital",
                    "capacity": 1246
                },
                {
                    "countryID": 57,
                    "city": "As",
                    "name": "Nec Diam Duis LLP",
                    "school_hospital": "Hospital",
                    "capacity": 1855
                },
                {
                    "countryID": 59,
                    "city": "San Giovanni la Punta",
                    "name": "Dapibus Ligula Aliquam Corporation",
                    "school_hospital": "Hospital",
                    "capacity": 1533
                },
                {
                    "countryID": 23,
                    "city": "NeuprŽ",
                    "name": "Cursus Diam Company",
                    "school_hospital": "School",
                    "capacity": 2993
                },
                {
                    "countryID": 1,
                    "city": "Vietri di Potenza",
                    "name": "Tincidunt Foundation",
                    "school_hospital": "School",
                    "capacity": 2397
                },
                {
                    "countryID": 100,
                    "city": "Mezen",
                    "name": "Accumsan Convallis Ante Company",
                    "school_hospital": "Hospital",
                    "capacity": 2751
                },
                {
                    "countryID": 34,
                    "city": "Meldert",
                    "name": "Orci Luctus Et Inc.",
                    "school_hospital": "School",
                    "capacity": 2938
                },
                {
                    "countryID": 96,
                    "city": "Klabbeek",
                    "name": "Pede Blandit Corp.",
                    "school_hospital": "Hospital",
                    "capacity": 2907
                },
                {
                    "countryID": 4,
                    "city": "Attock",
                    "name": "Interdum Curabitur Consulting",
                    "school_hospital": "Hospital",
                    "capacity": 920
                },
                {
                    "countryID": 30,
                    "city": "Oosterhout",
                    "name": "Convallis In Incorporated",
                    "school_hospital": "Hospital",
                    "capacity": 1980
                },
                {
                    "countryID": 12,
                    "city": "Wambeek",
                    "name": "Suspendisse Aliquet Sem Inc.",
                    "school_hospital": "Hospital",
                    "capacity": 1369
                },
                {
                    "countryID": 16,
                    "city": "Shaki",
                    "name": "Vel Lectus Cum Associates",
                    "school_hospital": "Hospital",
                    "capacity": 1998
                },
                {
                    "countryID": 76,
                    "city": "Frankfurt am Main",
                    "name": "Fringilla LLP",
                    "school_hospital": "Hospital",
                    "capacity": 2102
                },
                {
                    "countryID": 33,
                    "city": "Phoenix",
                    "name": "Pulvinar Institute",
                    "school_hospital": "Hospital",
                    "capacity": 1659
                },
                {
                    "countryID": 36,
                    "city": "Bahawalnagar",
                    "name": "Ante Dictum Incorporated",
                    "school_hospital": "Hospital",
                    "capacity": 2309
                },
                {
                    "countryID": 22,
                    "city": "Ereğli",
                    "name": "Luctus Et Inc.",
                    "school_hospital": "School",
                    "capacity": 1516
                },
                {
                    "countryID": 46,
                    "city": "Rutigliano",
                    "name": "Dignissim Institute",
                    "school_hospital": "School",
                    "capacity": 1832
                },
                {
                    "countryID": 37,
                    "city": "Kidwelly",
                    "name": "Lorem Foundation",
                    "school_hospital": "School",
                    "capacity": 2150
                },
                {
                    "countryID": 31,
                    "city": "Saint Petersburg",
                    "name": "Placerat Orci Lacus Industries",
                    "school_hospital": "Hospital",
                    "capacity": 2408
                },
                {
                    "countryID": 78,
                    "city": "Akron",
                    "name": "Eu Erat Inc.",
                    "school_hospital": "Hospital",
                    "capacity": 516
                },
                {
                    "countryID": 61,
                    "city": "Gangneung",
                    "name": "Cursus Limited",
                    "school_hospital": "School",
                    "capacity": 1351
                },
                {
                    "countryID": 78,
                    "city": "Antofagasta",
                    "name": "Aliquet LLP",
                    "school_hospital": "Hospital",
                    "capacity": 1807
                },
                {
                    "countryID": 8,
                    "city": "Cavasso Nuovo",
                    "name": "Lorem Ltd",
                    "school_hospital": "Hospital",
                    "capacity": 1487
                },
                {
                    "countryID": 31,
                    "city": "Saint-Louis",
                    "name": "Dui Suspendisse Corporation",
                    "school_hospital": "School",
                    "capacity": 2198
                },
                {
                    "countryID": 31,
                    "city": "Fort William",
                    "name": "Donec Felis Inc.",
                    "school_hospital": "School",
                    "capacity": 1266
                },
                {
                    "countryID": 31,
                    "city": "Opdorp",
                    "name": "Cubilia Limited",
                    "school_hospital": "Hospital",
                    "capacity": 2067
                },
                {
                    "countryID": 39,
                    "city": "Fortaleza",
                    "name": "Ipsum LLP",
                    "school_hospital": "Hospital",
                    "capacity": 2415
                },
                {
                    "countryID": 25,
                    "city": "Bilbo",
                    "name": "Ac Associates",
                    "school_hospital": "School",
                    "capacity": 2603
                },
                {
                    "countryID": 51,
                    "city": "Sant'Angelo a Cupolo",
                    "name": "Purus Duis Foundation",
                    "school_hospital": "Hospital",
                    "capacity": 2485
                },
                {
                    "countryID": 24,
                    "city": "Yellowhead County",
                    "name": "Id Company",
                    "school_hospital": "Hospital",
                    "capacity": 775
                },
                {
                    "countryID": 15,
                    "city": "Henstedt-Ulzburg",
                    "name": "Lobortis Consulting",
                    "school_hospital": "School",
                    "capacity": 2844
                },
                {
                    "countryID": 35,
                    "city": "Spaniard's Bay",
                    "name": "Est Limited",
                    "school_hospital": "Hospital",
                    "capacity": 1149
                },
                {
                    "countryID": 6,
                    "city": "Palagianello",
                    "name": "Ut Tincidunt Vehicula PC",
                    "school_hospital": "Hospital",
                    "capacity": 2475
                },
                {
                    "countryID": 89,
                    "city": "Ruette",
                    "name": "Euismod Et Associates",
                    "school_hospital": "Hospital",
                    "capacity": 2034
                },
                {
                    "countryID": 23,
                    "city": "Saint-GŽry",
                    "name": "Quisque Inc.",
                    "school_hospital": "School",
                    "capacity": 2880
                },
                {
                    "countryID": 9,
                    "city": "Murree",
                    "name": "Ut Limited",
                    "school_hospital": "Hospital",
                    "capacity": 1903
                },
                {
                    "countryID": 71,
                    "city": "Baardegem",
                    "name": "Enim Diam Consulting",
                    "school_hospital": "Hospital",
                    "capacity": 2484
                },
                {
                    "countryID": 37,
                    "city": "Duncan",
                    "name": "Elit Associates",
                    "school_hospital": "Hospital",
                    "capacity": 802
                },
                {
                    "countryID": 60,
                    "city": "Bhopal",
                    "name": "Amet Metus Aliquam LLC",
                    "school_hospital": "School",
                    "capacity": 2466
                },
                {
                    "countryID": 84,
                    "city": "Campochiaro",
                    "name": "Eu Lacus Institute",
                    "school_hospital": "School",
                    "capacity": 2590
                },
                {
                    "countryID": 99,
                    "city": "Yorkton",
                    "name": "Molestie Pharetra Nibh Foundation",
                    "school_hospital": "School",
                    "capacity": 1271
                },
                {
                    "countryID": 79,
                    "city": "Ulyanovsk",
                    "name": "Erat Etiam Institute",
                    "school_hospital": "Hospital",
                    "capacity": 2012
                },
                {
                    "countryID": 61,
                    "city": "Laren",
                    "name": "Magna Nam Ligula Consulting",
                    "school_hospital": "School",
                    "capacity": 1555
                },
                {
                    "countryID": 92,
                    "city": "Limburg a.d. Lahn",
                    "name": "Phasellus In Institute",
                    "school_hospital": "Hospital",
                    "capacity": 2170
                },
                {
                    "countryID": 27,
                    "city": "Santa Cesarea Terme",
                    "name": "Proin Non Massa Associates",
                    "school_hospital": "Hospital",
                    "capacity": 700
                },
                {
                    "countryID": 83,
                    "city": "Witney",
                    "name": "Sed Neque LLC",
                    "school_hospital": "School",
                    "capacity": 2952
                },
                {
                    "countryID": 4,
                    "city": "Valle del Guamuez",
                    "name": "Mattis LLC",
                    "school_hospital": "School",
                    "capacity": 2207
                },
                {
                    "countryID": 91,
                    "city": "Mission",
                    "name": "Morbi Accumsan Institute",
                    "school_hospital": "Hospital",
                    "capacity": 1892
                },
                {
                    "countryID": 32,
                    "city": "La Ligua",
                    "name": "Tristique Senectus Et Limited",
                    "school_hospital": "School",
                    "capacity": 842
                },
                {
                    "countryID": 2,
                    "city": "Sint-Kwintens-Lennik",
                    "name": "Pede Consulting",
                    "school_hospital": "Hospital",
                    "capacity": 1240
                },
                {
                    "countryID": 68,
                    "city": "Gorbea",
                    "name": "Orci Quis Lectus Institute",
                    "school_hospital": "Hospital",
                    "capacity": 1178
                },
                {
                    "countryID": 34,
                    "city": "Walhain",
                    "name": "Sed Consulting",
                    "school_hospital": "School",
                    "capacity": 1940
                },
                {
                    "countryID": 32,
                    "city": "Nijlen",
                    "name": "Per Inceptos Corp.",
                    "school_hospital": "Hospital",
                    "capacity": 1889
                },
                {
                    "countryID": 93,
                    "city": "Rio nell'Elba",
                    "name": "Lobortis Limited",
                    "school_hospital": "Hospital",
                    "capacity": 1035
                },
                {
                    "countryID": 6,
                    "city": "Jacksonville",
                    "name": "Sed Associates",
                    "school_hospital": "School",
                    "capacity": 1147
                },
                {
                    "countryID": 16,
                    "city": "New Westminster",
                    "name": "Ac Mi Institute",
                    "school_hospital": "Hospital",
                    "capacity": 1430
                },
                {
                    "countryID": 62,
                    "city": "Trollhättan",
                    "name": "Diam Pellentesque Habitant Industries",
                    "school_hospital": "Hospital",
                    "capacity": 2382
                },
                {
                    "countryID": 34,
                    "city": "Luckenwalde",
                    "name": "Nisl Nulla LLP",
                    "school_hospital": "Hospital",
                    "capacity": 2910
                },
                {
                    "countryID": 22,
                    "city": "Mount Pearl",
                    "name": "Purus Maecenas Company",
                    "school_hospital": "School",
                    "capacity": 2910
                },
                {
                    "countryID": 69,
                    "city": "Villers-la-Tour",
                    "name": "Lacinia Sed Congue LLP",
                    "school_hospital": "School",
                    "capacity": 737
                },
                {
                    "countryID": 31,
                    "city": "Chesapeake",
                    "name": "Urna Nec Inc.",
                    "school_hospital": "School",
                    "capacity": 2919
                },
                {
                    "countryID": 99,
                    "city": "Gebze",
                    "name": "Arcu Eu Odio LLP",
                    "school_hospital": "School",
                    "capacity": 1995
                },
                {
                    "countryID": 65,
                    "city": "Schwedt",
                    "name": "Vestibulum Neque Incorporated",
                    "school_hospital": "Hospital",
                    "capacity": 904
                },
                {
                    "countryID": 23,
                    "city": "Matagami",
                    "name": "Donec Nibh Enim Corp.",
                    "school_hospital": "School",
                    "capacity": 2875
                },
                {
                    "countryID": 37,
                    "city": "North Shore",
                    "name": "Dolor Quam Elementum Corp.",
                    "school_hospital": "School",
                    "capacity": 771
                },
                {
                    "countryID": 29,
                    "city": "Nashville",
                    "name": "Massa Associates",
                    "school_hospital": "Hospital",
                    "capacity": 2588
                },
                {
                    "countryID": 24,
                    "city": "Bayonne",
                    "name": "Accumsan Neque Et Corporation",
                    "school_hospital": "Hospital",
                    "capacity": 2577
                },
                {
                    "countryID": 95,
                    "city": "Challand-Saint-Victor",
                    "name": "Ante PC",
                    "school_hospital": "School",
                    "capacity": 2474
                },
                {
                    "countryID": 65,
                    "city": "Rae Lakes",
                    "name": "Adipiscing Lobortis Foundation",
                    "school_hospital": "Hospital",
                    "capacity": 1223
                },
                {
                    "countryID": 69,
                    "city": "Zeveneken",
                    "name": "Mi Corp.",
                    "school_hospital": "Hospital",
                    "capacity": 2082
                },
                {
                    "countryID": 54,
                    "city": "Des Moines",
                    "name": "Consectetuer Company",
                    "school_hospital": "School",
                    "capacity": 1456
                },
                {
                    "countryID": 6,
                    "city": "Zerkegem",
                    "name": "Sed Dolor Fusce Incorporated",
                    "school_hospital": "Hospital",
                    "capacity": 999
                },
                {
                    "countryID": 59,
                    "city": "Bexbach",
                    "name": "Eleifend Corp.",
                    "school_hospital": "School",
                    "capacity": 2060
                },
                {
                    "countryID": 21,
                    "city": "Naninne",
                    "name": "Sem Vitae LLP",
                    "school_hospital": "Hospital",
                    "capacity": 2558
                },
                {
                    "countryID": 9,
                    "city": "Purral",
                    "name": "Pharetra Sed Hendrerit PC",
                    "school_hospital": "Hospital",
                    "capacity": 1172
                },
                {
                    "countryID": 51,
                    "city": "Arbroath",
                    "name": "Amet Foundation",
                    "school_hospital": "Hospital",
                    "capacity": 1655
                },
                {
                    "countryID": 1,
                    "city": "Panchià",
                    "name": "Ullamcorper Inc.",
                    "school_hospital": "Hospital",
                    "capacity": 1934
                },
                {
                    "countryID": 96,
                    "city": "Wollongong",
                    "name": "Nullam Ltd",
                    "school_hospital": "Hospital",
                    "capacity": 2680
                },
                {
                    "countryID": 61,
                    "city": "Vicuña",
                    "name": "Felis Orci Adipiscing Institute",
                    "school_hospital": "School",
                    "capacity": 1660
                },
                {
                    "countryID": 88,
                    "city": "İzmit",
                    "name": "Nulla LLC",
                    "school_hospital": "Hospital",
                    "capacity": 2499
                },
                {
                    "countryID": 86,
                    "city": "Saint John",
                    "name": "Vitae Incorporated",
                    "school_hospital": "Hospital",
                    "capacity": 695
                },
                {
                    "countryID": 75,
                    "city": "Frederick",
                    "name": "Massa Mauris Inc.",
                    "school_hospital": "Hospital",
                    "capacity": 1987
                },
                {
                    "countryID": 33,
                    "city": "Oswestry",
                    "name": "Ut Corp.",
                    "school_hospital": "School",
                    "capacity": 1906
                },
                {
                    "countryID": 92,
                    "city": "Cumberland County",
                    "name": "Felis Purus Limited",
                    "school_hospital": "School",
                    "capacity": 2579
                },
                {
                    "countryID": 13,
                    "city": "Castelluccio Inferiore",
                    "name": "Eros Nec Industries",
                    "school_hospital": "School",
                    "capacity": 2149
                },
                {
                    "countryID": 7,
                    "city": "Etawah",
                    "name": "A Associates",
                    "school_hospital": "Hospital",
                    "capacity": 2614
                }
            ]
        },

        editItem(item) {
            this.editedIndex = this.schools_hospitals.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialog = true
        },

        deleteItem(item) {
            this.editedIndex = this.schools_hospitals.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialogDelete = true
        },

        deleteItemConfirm() {
            this.schools_hospitals.splice(this.editedIndex, 1)
            this.closeDelete()
        },

        close() {
            this.dialog = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },

        closeDelete() {
            this.dialogDelete = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },

        save() {
            if (this.editedIndex > -1) {
                Object.assign(this.schools_hospitals[this.editedIndex], this.editedItem)
            } else {
                this.schools_hospitals.push(this.editedItem)
            }
            this.close()
        },
    },
})

// Places to visit by country
new Vue({
    el: '#places_to_visit',
    vuetify: new Vuetify(),
    data: () => ({
        dialog: false,
        dialogDelete: false,
        headers: [
            {
                text: 'Name',
                align: 'start',
                sortable: true,
                value: 'name',
            },
            { text: 'Country ID', value: 'countryID' },
            { text: 'Place ID', value: 'placeID' },
            { text: 'GPS', value: 'gps' },
            { text: 'Street Address', value: 'street_address' },
            { text: 'Actions', value: 'actions', sortable: false },
        ],
        places_to_visit: [],
        editedIndex: -1,
        editedItem: {
            name: '',
            countryID: 0,
            continent: 0,
            acceptsImmigrants: 0,
            isSafe: 0,
        },
        defaultItem: {
            name: '',
            countryID: 0,
            continent: 0,
            acceptsImmigrants: 0,
            isSafe: 0,
        },
    }),

    computed: {
        formTitle() {
            return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
        },
    },

    watch: {
        dialog(val) {
            val || this.close()
        },
        dialogDelete(val) {
            val || this.closeDelete()
        },
    },

    created() {
        this.initialize()
    },

    methods: {
        initialize() {
            this.places_to_visit = [
                {
                    "countryID": 50,
                    "street_address": "2388 Amet Av.",
                    "gps": "52.56938, -59.89838",
                    "name": "urna, nec",
                    "placeID": 1
                },
                {
                    "countryID": 64,
                    "street_address": "640-7707 Magna. Rd.",
                    "gps": "45.24913, 22.39302",
                    "name": "blandit. Nam",
                    "placeID": 2
                },
                {
                    "countryID": 84,
                    "street_address": "P.O. Box 255, 1968 Integer Street",
                    "gps": "71.22758, 133.96699",
                    "name": "quis massa.",
                    "placeID": 3
                },
                {
                    "countryID": 28,
                    "street_address": "P.O. Box 951, 6386 Id, Street",
                    "gps": "-42.49098, -99.57441",
                    "name": "mus. Proin",
                    "placeID": 4
                },
                {
                    "countryID": 100,
                    "street_address": "879-4599 Mauris, Rd.",
                    "gps": "-39.13197, -60.39581",
                    "name": "fermentum convallis",
                    "placeID": 5
                },
                {
                    "countryID": 28,
                    "street_address": "166-8205 Lectus St.",
                    "gps": "3.05631, -148.76436",
                    "name": "Aliquam fringilla",
                    "placeID": 6
                },
                {
                    "countryID": 72,
                    "street_address": "1244 Est, Avenue",
                    "gps": "56.1645, -160.66521",
                    "name": "justo faucibus",
                    "placeID": 7
                },
                {
                    "countryID": 96,
                    "street_address": "135-3648 Turpis. Avenue",
                    "gps": "1.63163, -23.15153",
                    "name": "sagittis. Nullam",
                    "placeID": 8
                },
                {
                    "countryID": 7,
                    "street_address": "P.O. Box 917, 2393 Non Ave",
                    "gps": "-22.6203, 120.33712",
                    "name": "eget metus.",
                    "placeID": 9
                },
                {
                    "countryID": 70,
                    "street_address": "Ap #692-3324 Volutpat St.",
                    "gps": "-62.64838, 103.30716",
                    "name": "risus varius",
                    "placeID": 10
                },
                {
                    "countryID": 10,
                    "street_address": "P.O. Box 303, 8204 Eu, Street",
                    "gps": "2.26141, 105.93539",
                    "name": "vel pede",
                    "placeID": 11
                },
                {
                    "countryID": 79,
                    "street_address": "P.O. Box 234, 618 Elit, St.",
                    "gps": "44.55273, 128.07297",
                    "name": "bibendum fermentum",
                    "placeID": 12
                },
                {
                    "countryID": 67,
                    "street_address": "9710 Vestibulum St.",
                    "gps": "-47.62376, 132.35391",
                    "name": "Pellentesque ut",
                    "placeID": 13
                },
                {
                    "countryID": 4,
                    "street_address": "2795 Nulla Road",
                    "gps": "66.47782, 84.08343",
                    "name": "lorem, vehicula",
                    "placeID": 14
                },
                {
                    "countryID": 10,
                    "street_address": "2200 Donec Rd.",
                    "gps": "9.62064, -130.59827",
                    "name": "ultricies dignissim",
                    "placeID": 15
                },
                {
                    "countryID": 35,
                    "street_address": "1386 Rutrum Rd.",
                    "gps": "-51.89258, 98.604",
                    "name": "Proin vel",
                    "placeID": 16
                },
                {
                    "countryID": 7,
                    "street_address": "Ap #100-9674 Malesuada Rd.",
                    "gps": "-2.9707, 124.64092",
                    "name": "consectetuer ipsum",
                    "placeID": 17
                },
                {
                    "countryID": 28,
                    "street_address": "P.O. Box 732, 8774 Est. Ave",
                    "gps": "9.96671, 165.6177",
                    "name": "erat semper",
                    "placeID": 18
                },
                {
                    "countryID": 85,
                    "street_address": "Ap #640-154 Et, Ave",
                    "gps": "-2.94111, -43.67108",
                    "name": "netus et",
                    "placeID": 19
                },
                {
                    "countryID": 2,
                    "street_address": "5154 Non St.",
                    "gps": "56.42725, -81.1593",
                    "name": "bibendum fermentum",
                    "placeID": 20
                },
                {
                    "countryID": 64,
                    "street_address": "9023 Egestas. Rd.",
                    "gps": "8.90617, 132.67821",
                    "name": "placerat, augue.",
                    "placeID": 21
                },
                {
                    "countryID": 82,
                    "street_address": "P.O. Box 264, 6600 Lectus Road",
                    "gps": "-60.78949, 161.67546",
                    "name": "auctor velit.",
                    "placeID": 22
                },
                {
                    "countryID": 59,
                    "street_address": "4587 Molestie Rd.",
                    "gps": "-0.55761, 148.30692",
                    "name": "Fusce dolor",
                    "placeID": 23
                },
                {
                    "countryID": 56,
                    "street_address": "P.O. Box 625, 5432 Dui, Avenue",
                    "gps": "-10.60614, 113.35722",
                    "name": "Suspendisse eleifend.",
                    "placeID": 24
                },
                {
                    "countryID": 58,
                    "street_address": "5371 Amet Ave",
                    "gps": "51.18005, 123.94156",
                    "name": "Maecenas ornare",
                    "placeID": 25
                },
                {
                    "countryID": 40,
                    "street_address": "1042 Quis Rd.",
                    "gps": "-57.76719, -170.92",
                    "name": "ultrices posuere",
                    "placeID": 26
                },
                {
                    "countryID": 90,
                    "street_address": "P.O. Box 376, 890 Metus. Rd.",
                    "gps": "-68.9667, 24.00605",
                    "name": "consectetuer adipiscing",
                    "placeID": 27
                },
                {
                    "countryID": 68,
                    "street_address": "728-4476 Pede. Avenue",
                    "gps": "14.82124, 64.11898",
                    "name": "sed sem",
                    "placeID": 28
                },
                {
                    "countryID": 89,
                    "street_address": "7621 Cum Avenue",
                    "gps": "81.67706, -127.62797",
                    "name": "scelerisque mollis.",
                    "placeID": 29
                },
                {
                    "countryID": 54,
                    "street_address": "978-9247 Ultrices, Rd.",
                    "gps": "-79.09683, 124.38168",
                    "name": "ultricies sem",
                    "placeID": 30
                },
                {
                    "countryID": 53,
                    "street_address": "2309 Ipsum Road",
                    "gps": "62.87227, -116.88795",
                    "name": "in consequat",
                    "placeID": 31
                },
                {
                    "countryID": 95,
                    "street_address": "P.O. Box 590, 5373 Dolor. St.",
                    "gps": "71.96934, 147.10015",
                    "name": "dictum magna.",
                    "placeID": 32
                },
                {
                    "countryID": 30,
                    "street_address": "P.O. Box 178, 5601 Nunc Avenue",
                    "gps": "15.29405, -105.60281",
                    "name": "nec, cursus",
                    "placeID": 33
                },
                {
                    "countryID": 70,
                    "street_address": "P.O. Box 146, 1205 Elit Av.",
                    "gps": "18.14048, 16.16788",
                    "name": "Vivamus non",
                    "placeID": 34
                },
                {
                    "countryID": 12,
                    "street_address": "453-9436 Aenean Ave",
                    "gps": "-38.04673, 38.82805",
                    "name": "ante dictum",
                    "placeID": 35
                },
                {
                    "countryID": 42,
                    "street_address": "4695 Dolor Av.",
                    "gps": "-8.32211, -30.18339",
                    "name": "vestibulum nec,",
                    "placeID": 36
                },
                {
                    "countryID": 56,
                    "street_address": "887-9915 Nisi Rd.",
                    "gps": "1.05297, 9.85973",
                    "name": "elit pede,",
                    "placeID": 37
                },
                {
                    "countryID": 35,
                    "street_address": "Ap #908-3686 Donec Ave",
                    "gps": "-44.43178, -113.92901",
                    "name": "Aliquam erat",
                    "placeID": 38
                },
                {
                    "countryID": 69,
                    "street_address": "7399 Odio Street",
                    "gps": "-2.74368, 79.20968",
                    "name": "lectus sit",
                    "placeID": 39
                },
                {
                    "countryID": 4,
                    "street_address": "Ap #994-972 Turpis Av.",
                    "gps": "-20.55138, -65.62375",
                    "name": "Nunc sollicitudin",
                    "placeID": 40
                },
                {
                    "countryID": 87,
                    "street_address": "Ap #528-9776 Ut Ave",
                    "gps": "62.25121, 62.09589",
                    "name": "vel, vulputate",
                    "placeID": 41
                },
                {
                    "countryID": 67,
                    "street_address": "9527 Phasellus St.",
                    "gps": "-28.73483, -124.53498",
                    "name": "dolor egestas",
                    "placeID": 42
                },
                {
                    "countryID": 19,
                    "street_address": "Ap #533-8868 Pretium Street",
                    "gps": "-52.39995, -15.26072",
                    "name": "vel, mauris.",
                    "placeID": 43
                },
                {
                    "countryID": 100,
                    "street_address": "Ap #442-7014 Erat. Rd.",
                    "gps": "-32.70476, 130.64864",
                    "name": "Cras dolor",
                    "placeID": 44
                },
                {
                    "countryID": 8,
                    "street_address": "Ap #516-892 Urna, Street",
                    "gps": "-45.233, 110.65722",
                    "name": "et ultrices",
                    "placeID": 45
                },
                {
                    "countryID": 7,
                    "street_address": "P.O. Box 716, 9801 Ipsum Avenue",
                    "gps": "3.45774, 139.4307",
                    "name": "dui. Fusce",
                    "placeID": 46
                },
                {
                    "countryID": 59,
                    "street_address": "P.O. Box 216, 2664 Nulla. Street",
                    "gps": "73.0089, 38.52123",
                    "name": "nonummy. Fusce",
                    "placeID": 47
                },
                {
                    "countryID": 8,
                    "street_address": "P.O. Box 846, 4726 Ut Road",
                    "gps": "-72.77699, 91.49126",
                    "name": "elementum sem,",
                    "placeID": 48
                },
                {
                    "countryID": 42,
                    "street_address": "7195 Quam Avenue",
                    "gps": "1.36011, 81.98586",
                    "name": "magna nec",
                    "placeID": 49
                },
                {
                    "countryID": 16,
                    "street_address": "P.O. Box 656, 8682 Vel Road",
                    "gps": "27.73445, -111.07313",
                    "name": "faucibus lectus,",
                    "placeID": 50
                },
                {
                    "countryID": 91,
                    "street_address": "P.O. Box 965, 1741 Aenean Ave",
                    "gps": "-40.8362, 55.83147",
                    "name": "Sed neque.",
                    "placeID": 51
                },
                {
                    "countryID": 53,
                    "street_address": "844-1187 Suscipit, St.",
                    "gps": "-25.52562, -117.92014",
                    "name": "adipiscing elit.",
                    "placeID": 52
                },
                {
                    "countryID": 41,
                    "street_address": "P.O. Box 984, 1910 Natoque Street",
                    "gps": "73.85236, 122.049",
                    "name": "dui. Cras",
                    "placeID": 53
                },
                {
                    "countryID": 88,
                    "street_address": "P.O. Box 672, 1386 Ullamcorper Rd.",
                    "gps": "4.00721, 170.4077",
                    "name": "nunc id",
                    "placeID": 54
                },
                {
                    "countryID": 57,
                    "street_address": "937-2468 Blandit St.",
                    "gps": "23.34149, 77.07205",
                    "name": "eget metus.",
                    "placeID": 55
                },
                {
                    "countryID": 82,
                    "street_address": "Ap #631-5511 Ac Ave",
                    "gps": "71.15134, -13.75692",
                    "name": "Cras interdum.",
                    "placeID": 56
                },
                {
                    "countryID": 70,
                    "street_address": "Ap #203-5022 Convallis Rd.",
                    "gps": "-23.99818, 152.6385",
                    "name": "tortor nibh",
                    "placeID": 57
                },
                {
                    "countryID": 65,
                    "street_address": "660-5474 Proin St.",
                    "gps": "36.80679, -14.56516",
                    "name": "placerat, augue.",
                    "placeID": 58
                },
                {
                    "countryID": 21,
                    "street_address": "131-4186 Ac, Road",
                    "gps": "27.2826, 28.32689",
                    "name": "eget metus",
                    "placeID": 59
                },
                {
                    "countryID": 75,
                    "street_address": "P.O. Box 850, 8332 Gravida. St.",
                    "gps": "15.41227, 148.94812",
                    "name": "dui lectus",
                    "placeID": 60
                },
                {
                    "countryID": 99,
                    "street_address": "1174 Tempor Ave",
                    "gps": "38.51898, 150.08458",
                    "name": "Sed eu",
                    "placeID": 61
                },
                {
                    "countryID": 86,
                    "street_address": "Ap #479-7906 Blandit Avenue",
                    "gps": "-16.92442, -124.21135",
                    "name": "eros turpis",
                    "placeID": 62
                },
                {
                    "countryID": 13,
                    "street_address": "P.O. Box 687, 9113 Parturient Street",
                    "gps": "-12.14073, 55.88874",
                    "name": "eget mollis",
                    "placeID": 63
                },
                {
                    "countryID": 26,
                    "street_address": "P.O. Box 863, 1256 Aliquet St.",
                    "gps": "10.67436, -23.77367",
                    "name": "turpis egestas.",
                    "placeID": 64
                },
                {
                    "countryID": 62,
                    "street_address": "Ap #909-8749 Nonummy Rd.",
                    "gps": "26.00404, -69.23078",
                    "name": "mi lorem,",
                    "placeID": 65
                },
                {
                    "countryID": 79,
                    "street_address": "718-1972 Euismod Street",
                    "gps": "-63.92043, -85.70211",
                    "name": "velit eu",
                    "placeID": 66
                },
                {
                    "countryID": 53,
                    "street_address": "P.O. Box 443, 2553 Lectus Road",
                    "gps": "-3.82542, -118.39248",
                    "name": "orci tincidunt",
                    "placeID": 67
                },
                {
                    "countryID": 99,
                    "street_address": "4046 Urna. Road",
                    "gps": "32.76722, -134.57009",
                    "name": "elit. Nulla",
                    "placeID": 68
                },
                {
                    "countryID": 19,
                    "street_address": "P.O. Box 109, 4214 Nec Ave",
                    "gps": "-31.64223, -163.6329",
                    "name": "tempor augue",
                    "placeID": 69
                },
                {
                    "countryID": 85,
                    "street_address": "P.O. Box 705, 1230 Erat Road",
                    "gps": "-56.38781, 158.2092",
                    "name": "hendrerit neque.",
                    "placeID": 70
                },
                {
                    "countryID": 88,
                    "street_address": "Ap #451-5084 Libero. Av.",
                    "gps": "19.22816, 122.29598",
                    "name": "mauris blandit",
                    "placeID": 71
                },
                {
                    "countryID": 58,
                    "street_address": "6528 Cursus. Street",
                    "gps": "67.53537, -47.4137",
                    "name": "Cras sed",
                    "placeID": 72
                },
                {
                    "countryID": 81,
                    "street_address": "759-7114 Nec, Road",
                    "gps": "-14.70305, -142.51967",
                    "name": "ullamcorper magna.",
                    "placeID": 73
                },
                {
                    "countryID": 88,
                    "street_address": "Ap #678-4943 Malesuada Street",
                    "gps": "39.38844, 58.82512",
                    "name": "nibh sit",
                    "placeID": 74
                },
                {
                    "countryID": 96,
                    "street_address": "547-4606 Dictum. Street",
                    "gps": "58.66145, 61.75251",
                    "name": "ipsum leo",
                    "placeID": 75
                },
                {
                    "countryID": 11,
                    "street_address": "Ap #464-9601 Tellus. Avenue",
                    "gps": "45.50889, -151.37462",
                    "name": "mauris eu",
                    "placeID": 76
                },
                {
                    "countryID": 62,
                    "street_address": "P.O. Box 140, 3683 Neque Road",
                    "gps": "-72.61482, -136.57371",
                    "name": "Vivamus molestie",
                    "placeID": 77
                },
                {
                    "countryID": 29,
                    "street_address": "P.O. Box 327, 5605 Nonummy. Street",
                    "gps": "-58.35269, -57.27906",
                    "name": "ridiculus mus.",
                    "placeID": 78
                },
                {
                    "countryID": 97,
                    "street_address": "5380 In Ave",
                    "gps": "8.70439, -132.35206",
                    "name": "ac libero",
                    "placeID": 79
                },
                {
                    "countryID": 77,
                    "street_address": "Ap #718-430 Turpis Avenue",
                    "gps": "52.26991, 119.26531",
                    "name": "non enim",
                    "placeID": 80
                },
                {
                    "countryID": 64,
                    "street_address": "4706 Ut Rd.",
                    "gps": "33.99983, -39.27557",
                    "name": "a mi",
                    "placeID": 81
                },
                {
                    "countryID": 35,
                    "street_address": "5488 Mi St.",
                    "gps": "21.21831, 112.50983",
                    "name": "consequat, lectus",
                    "placeID": 82
                },
                {
                    "countryID": 74,
                    "street_address": "Ap #535-6603 Enim Rd.",
                    "gps": "46.43693, -173.36074",
                    "name": "consequat enim",
                    "placeID": 83
                },
                {
                    "countryID": 57,
                    "street_address": "125-7027 Nulla Road",
                    "gps": "-48.58978, 147.45858",
                    "name": "quis, tristique",
                    "placeID": 84
                },
                {
                    "countryID": 18,
                    "street_address": "489-7043 In Rd.",
                    "gps": "36.68895, -39.14578",
                    "name": "porta elit,",
                    "placeID": 85
                },
                {
                    "countryID": 68,
                    "street_address": "8776 Id Road",
                    "gps": "-79.23954, 137.20557",
                    "name": "luctus vulputate,",
                    "placeID": 86
                },
                {
                    "countryID": 79,
                    "street_address": "9310 Enim, Rd.",
                    "gps": "16.69803, -154.23887",
                    "name": "lorem semper",
                    "placeID": 87
                },
                {
                    "countryID": 44,
                    "street_address": "461-9966 Eu Rd.",
                    "gps": "53.88402, -167.11716",
                    "name": "a tortor.",
                    "placeID": 88
                },
                {
                    "countryID": 5,
                    "street_address": "950-1652 Accumsan Street",
                    "gps": "1.09775, 3.81288",
                    "name": "elementum sem,",
                    "placeID": 89
                },
                {
                    "countryID": 36,
                    "street_address": "664-7910 Viverra. St.",
                    "gps": "22.0663, 162.08133",
                    "name": "nonummy ipsum",
                    "placeID": 90
                },
                {
                    "countryID": 21,
                    "street_address": "Ap #915-9191 Ligula Street",
                    "gps": "-14.16699, -101.82453",
                    "name": "eu, ultrices",
                    "placeID": 91
                },
                {
                    "countryID": 18,
                    "street_address": "8325 Nulla Rd.",
                    "gps": "33.16314, 22.1508",
                    "name": "elementum, dui",
                    "placeID": 92
                },
                {
                    "countryID": 47,
                    "street_address": "8299 Sed Ave",
                    "gps": "1.90341, -164.15679",
                    "name": "dui. Fusce",
                    "placeID": 93
                },
                {
                    "countryID": 85,
                    "street_address": "P.O. Box 904, 4340 In Avenue",
                    "gps": "-68.61705, -122.49525",
                    "name": "est tempor",
                    "placeID": 94
                },
                {
                    "countryID": 53,
                    "street_address": "5103 Nec, Ave",
                    "gps": "-8.92295, -24.18093",
                    "name": "non nisi.",
                    "placeID": 95
                },
                {
                    "countryID": 5,
                    "street_address": "9994 Enim. Avenue",
                    "gps": "39.83356, -112.98291",
                    "name": "felis. Nulla",
                    "placeID": 96
                },
                {
                    "countryID": 53,
                    "street_address": "P.O. Box 812, 3915 Proin Road",
                    "gps": "51.63773, -21.82509",
                    "name": "interdum feugiat.",
                    "placeID": 97
                },
                {
                    "countryID": 85,
                    "street_address": "P.O. Box 923, 5132 Risus St.",
                    "gps": "68.44721, 92.74551",
                    "name": "nonummy ac,",
                    "placeID": 98
                },
                {
                    "countryID": 62,
                    "street_address": "P.O. Box 486, 2366 Mauris Street",
                    "gps": "-42.78497, -34.88414",
                    "name": "malesuada fames",
                    "placeID": 99
                },
                {
                    "countryID": 82,
                    "street_address": "850-7231 Aliquet St.",
                    "gps": "39.89344, 134.10677",
                    "name": "nec enim.",
                    "placeID": 100
                }
            ]
        },

        editItem(item) {
            this.editedIndex = this.places_to_visit.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialog = true
        },

        deleteItem(item) {
            this.editedIndex = this.places_to_visit.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialogDelete = true
        },

        deleteItemConfirm() {
            this.places_to_visit.splice(this.editedIndex, 1)
            this.closeDelete()
        },

        close() {
            this.dialog = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },

        closeDelete() {
            this.dialogDelete = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },

        save() {
            if (this.editedIndex > -1) {
                Object.assign(this.places_to_visit[this.editedIndex], this.editedItem)
            } else {
                this.places_to_visit.push(this.editedItem)
            }
            this.close()
        },
    },
})