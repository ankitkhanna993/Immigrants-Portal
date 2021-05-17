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

    <script src="https://cdn.tiny.cloud/1/09hn5cgm8tjcqxcxu5w7irfp5ectmuxquc338nmoomd0qf4o/tinymce/5/tinymce.min.js"
        referrerpolicy="origin"></script>
    <!-- Prod version below -->
    <!-- <script src="https://cdn.jsdelivr.net/npm/vue@2"></script> -->
    <title>Services</title>
</head>

<body>
    <script> let user_is = <?php $user = $_COOKIE['loggedIn']; ?></script>
    <div id="app">
        <v-app>
            <v-main>
                <div>
                    <v-app-bar dense color="#1d4647" dark>
                        <template v-slot:extension>
                            <v-tabs>
                                <v-tab href="../home/home.php">Home</v-tab>
                                <v-tab href="../about_us/about_us.php">About Us</v-tab>
                                <v-tab href="../services/services.php">Services</v-tab>
                                <v-tab v-if="user_is !=null" href="../immigrant/immigrant.php">Immigrant Services</v-tab>
                                <v-tab v-if="user_is !=null" href="../visitor/visitor.php">Visitor Services</v-tab>
                                <v-tab href="http://sxs6008.uta.cloud/wdm/">Forums/Blog</v-tab>
                                <v-tab href="../contact_us/contact_us.php">Contact Us</v-tab>
                                <v-tab v-if="user_is !=null" href="/wdm/user.php?logout=true">Logout</v-tab>
                                <v-tab v-if="user_is !=null" href="http://chat.kxn6274.uta.cloud/">Chat</v-tab>
                            </v-tabs>
                        </template>
                    </v-app-bar>
                </div>
                <div>
                <v-container>
                    <?php if ($_COOKIE['loggedIn'] != null){
                        echo "<p><b>Welcome " . $user . "</b></p>";
                    } ?>
                </v-container>
                    <v-container>
                        <h1>Services Offered</h1>
                    </v-container>
                    <div>
                        <v-container>
                            <h2>Places to Visit (Top recommendations)</h2>
                        </v-container>
                        <v-container>
                            <p><b>Krishna (6 March 2021):</b> Aliquam fringilla!<br />
                                166-8205 Lectus St.<br />
                                Lobnya <br />
                                El Salvador
                            </p>
                        </v-container>
                        <v-container>
                            <p><b>Krishna (3 March 2021):</b> Eu Nibh Vulputate Incorporated<br />
                                5154 Non St.<br />
                                auctor velit. <br />
                                Maldives
                            </p>
                        </v-container>
                    </div>
                </div>
                <div>
                    <v-container>
                        <h2>Tips/Contributions (Top recommendations)</h2>
                    </v-container>
                    <v-container>
                        <p><b>Krishna (10 March 2021):</b> The palce at 123 main street is awseome and a must visit!</p>
                    </v-container>
                    <v-container>
                        <p><b>Krishna (9 March 2021):</b> The palce at 345 Cooper street is not worth the time!</p>
                    </v-container>
                </div>


                <v-container>
                    <h2>Shared Images</h2>
                </v-container>
                <div id="carousel">
                    <v-app id="inspire">
                        <v-carousel>
                            <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"
                                reverse-transition="fade-transition" transition="fade-transition"></v-carousel-item>
                        </v-carousel>
                    </v-app>
                </div>

            </v-main>
        </v-app>
    </div>



</body>
<script src="https://cdn.jsdelivr.net/npm/vue@2.x/dist/vue.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.js"></script>
<script src="services.js"></script>

</html>
