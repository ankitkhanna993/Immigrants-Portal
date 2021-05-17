<!--
   Khanna, Ankit 1001553616
   Singh, Shivam 1001766008
   Naragam, Krishna Chaitanya 1001836274
-->
<?php
$username = $_COOKIE['loggedIn'];
?>
<!DOCTYPE html>
<html>

<head>
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.1/Chart.min.js"></script>
  <script src="https://unpkg.com/vue-chartjs/dist/vue-chartjs.min.js"></script>
  <script src="https://unpkg.com/vue-cookies@1.7.4/vue-cookies.js"></script>

  <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css" rel="stylesheet">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">

  <script src="https://cdn.tiny.cloud/1/09hn5cgm8tjcqxcxu5w7irfp5ectmuxquc338nmoomd0qf4o/tinymce/5/tinymce.min.js"
    referrerpolicy="origin"></script>

  <title>Immigrant</title>
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
                <v-tab href="../about_us/about_us.html">About Us</v-tab>
                <v-tab href="../services/services.html">Services</v-tab>
                <v-tab href="../immigrant/immigrant.php">Immigrant Services</v-tab>
                <v-tab v-if="this.role != this.immigrant" href="../visitor/visitor.php">Visitor Services</v-tab>
                <v-tab href="http://sxs6008.uta.cloud/wdm/">Forums/Blog</v-tab>
                <v-tab href="../contact_us/contact_us.html">Contact Us</v-tab>
                <v-tab v-if="this.role == this.immigrant" href="/wdm/user.php?logout=true">Logout</v-tab>
                <v-tab v-if="this.role == this.immigrant" href="http://chat.kxn6274.uta.cloud/">Chat</v-tab>
              </v-tabs>
            </template>
          </v-app-bar>
        </div>
        <div>
          <v-container>
              <?php if ($_COOKIE['loggedIn'] != null){
                  echo "<p><b>Welcome " . $username . "</b></p>";
              } ?>
          </v-container>
          <v-container>
            <h1>Immigrant Tips and Contributions</h1>
            <form method="post">
              <textarea id="mytextarea" height="100px">Give Suggestions / Tips here!</textarea>
              <v-btn depressed color="primary">Submit</v-btn>
            </form>

          </v-container>
          <v-container>
              <form action="upload.php" method="post" enctype="multipart/form-data">
            <h1>Upload Photos/Videos</h1>
            <v-file-input name="fileToUpload" id="fileToUpload" label="Upload Photo/Video" filled prepend-icon="mdi-camera"></v-file-input>
            <v-btn type="submit" depressed color="primary">Upload</v-btn>
              </form>
          </v-container>

        </div>
        <div>
          <v-container>
            <h1>Tips/Contributions</h1>
          </v-container>
          <v-container>
            <p><b>Krishna (10 March 2021):</b> The palce at 123 main street is awseome and a must visit!</p>
          </v-container>
          <v-container>
            <p><b>Krishna (9 March 2021):</b> The palce at 345 Cooper street is not worth the time!</p>
          </v-container>
        </div>
        <div>
          <v-container>
            <h1>Places to Visit</h1>
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
        <v-container>
          <h1>Shared Images</h1>
        </v-container>
        <div id="carousel">
          <v-app id="inspire">
            <v-carousel>
              <v-carousel-item v-for="(item,i) in items" :key="i" :src="item" reverse-transition="fade-transition"
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
<script src="immigrant.js"></script>

</html>
