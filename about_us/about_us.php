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

  <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css" rel="stylesheet">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
  <title>About Us</title>
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
                <v-tab v-if="this.role == this.immigrant" href="/wdm/user.php?logout=true">Logout</v-tab><v-tab v-if="this.role == this.immigrant" href="http://chat.kxn6274.uta.cloud/">Chat</v-tab>
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
            <v-card-title style="font-size: 150%;">About Us</v-card-title>
          </v-container>
        </div>
        <div id="carousel" style="margin-bottom: -420px;">
          <v-app id="inspire">
            <v-carousel>
              <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src" reverse-transition="fade-transition"
                transition="fade-transition"></v-carousel-item>
            </v-carousel>
          </v-app>
        </div>
        <div>
          <v-card elevation="21" shaped style="margin-left: 30px; margin-right: 30px">
            <v-card-text style="font-style: italic; font-size: 150%;">
              "If you want to know the about the road ahead, ask someone who has already walked that path..."
            </v-card-text>
            <v-card-text style="font-size: 150%;">
              Immigration Portal has been developed with this vision to bring people who are visitors
              or immigrants to a country, together and provide them with a platform to recognize each
              other, their cultural differences and contribute to the wellness of the society.
              It provides a platform to the immigrants who had to leave their community and country
              in search for better opportunities for themselves and their family, to meet with other
              such immigrants who are going through the same transitioning as themselves. Help each
              other knowing what the do's and don'ts of the country are, knowing what rules and laws
              to follow, educating themselves.
              <br>
              <br>
              The main objective here is to bring these visitors and immigrants together so they can
              share their experiences and information about places to visit, restaurants, museums,
              views and a place for people who have come far from their homes to share nostalgia and
              recognize how the times have changed. These experiences can be in different ways like in
              forms of Blogs, Chatting, virtual meetups.
              <br>
              <br>
              The site is open to the public for registration and provides with different views
              depending on the type of user. The user can be a visitor who wishes to travel to a new
              country and wants to get to know about the place they are visiting. And a user can be an
              immigrant who is trying to make a place for themselves and their family in this new place.
            </v-card-text>
          </v-card>
        </div>
        <br>
      </v-main>
    </v-app>
  </div>
</body>
<script src="https://cdn.jsdelivr.net/npm/vue@2.x/dist/vue.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.js"></script>
<script src="about_us.js"></script>

</html>

