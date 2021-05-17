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
    <title>Login</title>
</head>

<body>
<div id="app">
    <v-app id="inspire">
        <div>
            <v-app-bar dense color="#1d4647" dark>
                <template v-slot:extension>
                    <v-tabs>
                        <v-tab href="../home/home.php">Home</v-tab>
                        <v-tab href="../about_us/about_us.php">About Us</v-tab>
                        <v-tab href="../services/services.php">Services</v-tab>
                        <v-tab v-if="role == immigrant" href="../immigrant/immigrant.php">Immigrant Services</v-tab>
                        <v-tab v-if="role != immigrant" href="../visitor/visitor.php">Visitor Services</v-tab>
                        <v-tab href="http://sxs6008.uta.cloud/wdm/">Forums/Blog</v-tab>
                        <v-tab href="../contact_us/contact_us.php">Contact Us</v-tab>
                    </v-tabs>
                </template>
            </v-app-bar>
        </div>
        <h1 style="margin-top: 15px;">Sign In</h1>
        <v-form id="check-login-form" @submit.prevent="checkLogin" ref="form" v-model="valid" lazy-validation>
            <v-text-field v-model="email" type="email" :rules="emailRules" label="E-mail" required style="margin-bottom: 5px;"></v-text-field>
            <v-text-field v-model="password" type="password" :rules="pwdRules" label="Password" required style="margin-top: 5px;"></v-text-field>
            <v-btn id="loginBtn" type="submit" color="success" form="check-login-form" v-on:click="checkLogin"
                   elevation="24"
                   large
                   rounded
                   x-large
                   style="margin-left: 0px;"
            >
                Login
            </v-btn>
            <p style="margin-top: 15px;">Not registered?</p>
            <a href="../register/register.php"/>Create an account</a>
        </v-form>
    </v-app>
</div>
</body>

<script src="https://cdn.jsdelivr.net/npm/vue@2.x/dist/vue.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.js"></script>
<script src="login.js"></script>

</html>
