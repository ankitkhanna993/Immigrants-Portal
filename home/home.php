<!--
   Khanna, Ankit 1001553616
   Singh, Shivam 1001766008
   Naragam, Krishna Chaitanya 1001836274
-->
<?php
$user = $_COOKIE['loggedIn'];
error_reporting(0);
?>
<!DOCTYPE html>
<html>

<head>
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

  <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css" rel="stylesheet">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">

  <script src="https://cdn.tiny.cloud/1/qagffr3pkuv17a8on1afax661irst1hbr4e6tbv888sz91jc/tinymce/5/tinymce.min.js"
    referrerpolicy="origin"></script>
  <title>Home</title>
</head>

<body>
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
                <v-tab v-if="this.role == this.immigrant" href="../immigrant/immigrant.php">Immigrant Services</v-tab>
                <v-tab v-if="this.role != this.immigrant" href="../visitor/visitor.php">Visitor Services</v-tab>
                <v-tab href="http://sxs6008.uta.cloud/wdm/">Forums/Blog</v-tab>
                <v-tab href="../contact_us/contact_us.php">Contact Us</v-tab>
                <v-tab v-if="this.role == this.immigrant" href="/wdm/user.php?logout=true">Logout</v-tab>
                <v-tab v-if="this.role == this.immigrant" href="http://chat.kxn6274.uta.cloud/">Chat</v-tab>
            </v-tabs>
            </template>
          </v-app-bar>
        </div>
        <div>
          <v-container>
            <v-card-title style="font-size: 150%;">Welcome to Immigrants Portal</v-card-title>
            <v-card-subtitle style="font-size: 110%;">Portal that brings Immigrants together</v-card-subtitle>
          </v-container>
          <v-btn elevation="24" large rounded x-large style="margin-left: 150px;" href="../login/login.php" v-show="$user == null">
            Login
          </v-btn>
          <v-btn elevation="24" large rounded x-large style="margin-left: 30px;" href="../register/register.php" v-show="$user == null">
            Register
          </v-btn>
        </div>
        <br>
        <div id="carousel">
          <v-app id="inspire">
            <v-carousel>
              <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src" reverse-transition="fade-transition"
                transition="fade-transition"></v-carousel-item>
            </v-carousel>
          </v-app>
        </div>
      </v-main>
    </v-app>
  </div>
</body>
<script src="https://cdn.jsdelivr.net/npm/vue@2.x/dist/vue.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.js"></script>
<script src="home.js"></script>

</html>
