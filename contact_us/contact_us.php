<!--
   Khanna, Ankit 1001553616
   Singh, Shivam 1001766008
   Naragam, Krishna Chaitanya 1001836274
-->
<?php
$user = $_COOKIE['loggedIn'];
?>
<!DOCTYPE html>
<html>

<head>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.1/Chart.min.js"></script>
    <script src="https://unpkg.com/vue-chartjs/dist/vue-chartjs.min.js"></script>

    <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">

    <script src="https://cdn.tiny.cloud/1/qagffr3pkuv17a8on1afax661irst1hbr4e6tbv888sz91jc/tinymce/5/tinymce.min.js"
        referrerpolicy="origin"></script>
    <title>Contact Us</title>
</head>

<body>
    <script> let user_is = <?php $user = $_COOKIE['loggedIn']; ?></script>
    <div id="app">
        <v-app id="inspire">
            <div>
                <v-app-bar dense color="#1d4647" dark>
                    <template v-slot:extension>
                        <v-tabs>
                            <v-tab href="../home/home.php">Home</v-tab>
                            <v-tab href="../about_us/about_us.php">About Us</v-tab>
                            <v-tab href="../services/services.php">Services</v-tab>
                            <v-tab v-if="this.role == this.immigrant" href="../immigrant/immigrant.php">Immigrant Services</v-tab>
                            <v-tab v-if="this.role != this.immigrant" href="../visitor/visitor.php">Visitor Services</v-tab>
                            <v-tab href="http://sxs6008.uta.cloud/wdm/">Forums/Blog</v-tab>
                            <v-tab href="../contact_us/contact_us.php">Contact Us</v-tab>
                            <v-tab v-if="this.role == this.immigrant" href="/wdm/user.php?logout=true">Logout</v-tab><v-tab v-if="this.role == this.immigrant" href="http://chat.kxn6274.uta.cloud/">Chat</v-tab>
                        </v-tabs>
                    </template>
                </v-app-bar>
            </div>
            <v-container>
              <?php if ($_COOKIE['loggedIn'] != null){
                  echo "<p><b>Welcome " . $user . "</b></p>";
              } ?>
            </v-container>
            <h1>Contact Us!</h1>
            <p>If you are experienceing any issues, please fill this form and we will contact you with the resolution.
            </p>
            <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field v-model="name" :counter="50" :rules="nameRules" label="Name" required></v-text-field>

                <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

                <v-textarea label="Content" v-model="content"></v-textarea>
                <!-- <textarea id="mytextarea" v-model="content" height="100px">Give Suggestions / Tips here!</textarea> -->
                <v-btn :disabled="!valid" depressed color="primary" @click="validate">Submit</v-btn>

            </v-form>
        </v-app>
    </div>



</body>
<script src="https://cdn.jsdelivr.net/npm/vue@2.x/dist/vue.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.js"></script>
<script src="contact_us.js"></script>

</html>


