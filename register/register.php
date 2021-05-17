<!--
   Khanna, Ankit 1001553616
   Singh, Shivam 1001766008
   Naragam, Krishna Chaitanya 1001836274
-->

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
    <title>Register</title>
</head>

<body>
<div id="app">
    <v-app id="inspire">
        <div>
            <v-app-bar dense color="#1d4647" dark>
                <template v-slot:extension>
                    <v-tabs>
                        <v-tab href="../home/home.php">Home</v-tab>
                        <v-tab href="../about_us/about_us.html">About Us</v-tab>
                        <v-tab href="../services/services.html">Services</v-tab>
                        <v-tab v-if="role == immigrant" href="../immigrant/immigrant.php">Immigrant Services</v-tab>
                        <v-tab v-if="role != immigrant" href="../visitor/visitor.php">Visitor Services</v-tab>
                        <v-tab href="http://sxs6008.uta.cloud/wdm/">Forums/Blog</v-tab>
                        <v-tab href="../contact_us/contact_us.html">Contact Us</v-tab>
                    </v-tabs>
                </template>
            </v-app-bar>
        </div>
        <h1 style="margin-top: 15px;">Sign Up</h1>
        <v-form id="check-login-form" v-model="valid" lazy-validation>
            <v-text-field v-model="fname" :counter="15" :rules="nameRules" label="First Name" required style="margin-top: 5px;"></v-text-field>
            <v-text-field v-model="lname" :counter="15" :rules="nameRules" label="Last Name" required></v-text-field>
            <v-text-field v-model="email" type="email" :rules="emailRules" label="E-mail" required></v-text-field>
            <v-text-field v-model="contact_num" :counter="12" :rules="nameRules" label="Contact Number" required></v-text-field>
            <v-text-field v-model="country" :rules="nameRules" label="Country" required></v-text-field>
            <v-text-field v-model="city" :rules="nameRules" label="City" required></v-text-field>
            <v-text-field v-model="userType" :rules="nameRules" label="Immigrant/Visitor" required></v-text-field>
            <v-text-field v-model="profession" :rules="nameRules" label="Profession" required></v-text-field>
            <v-text-field v-model="password" type="password" :rules="pwdRules" label="Password" required></v-text-field>
            <v-btn id="loginBtn" type="button" color="success" v-on:click="redirectToLogin"
                   elevation="24"
                   large
                   rounded
                   x-large
                   style="margin-left: 0px;"
            >
                Create Account
            </v-btn>
            <p style="margin-top: 15px; margin-left: 5px;">Already registered?</p>
            <a href="../login/login.php" style="margin-left: 5px;"/>Sign In</a>
        </v-form>
    </v-app>
</div>
</body>

<script src="https://cdn.jsdelivr.net/npm/vue@2.x/dist/vue.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.js"></script>
<script src="register.js"></script>

</html>
