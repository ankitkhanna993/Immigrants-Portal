<?php
$username = $_GET["username"];
$password = $_GET['password'];
$logout = $_GET['logout'];

if($logout === "true"){
    setcookie("loggedIn", null, time() - 3600);
    setcookie("role", null, time() - 3600);
    header("Location: /wdm/home/home.php");
    echo "logged out";
    exit();
}
//$conn = new mysqli("pxb2701.uta.cloud","pxb2701_wdm", "wdmPD@123", "pxb2701_air_racket");
$conn = new mysqli("kxn6274.uta.cloud","kxn6274_wdm_user", "Qwertyui!23", "kxn6274_wdm_2");
if ($conn -> connect_error) {
  echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
  exit();
}

if(!($username && $password) && ($_COOKIE['loggedIn'] != null)){
    echo "loggedIn as " .$_COOKIE['loggedIn'] . "<br>";
}
else if($username && $password) {
    $sql="SELECT * FROM users WHERE email='$username' and pwd='$password' LIMIT 1";
    $res=mysqli_query($conn,$sql);
    $res = mysqli_fetch_assoc($res);
    $loggedIn = $res['email'];
    if ($loggedIn === $username) {
        setcookie("loggedIn", $loggedIn);
        setcookie("role", $res["user_type"]);
        if($res["user_type"] === "super_admin"){
            header("Location: /wdm/super_admin/super_admin.php");
        }
        else if ($res["user_type"] === "admin"){
            header("Location: /wdm/country_admin/country_admin.php");
        }
        else if ($res["user_type"] === "Immigrant"){
            header("Location: /wdm/immigrant/immigrant.php");
        }
        else {
            header("Location: /wdm/visitor/visitor.php");
        }

        echo "" . $loggedIn;
    }else{
        http_response_code(204);
        header("Location: /wdm/login/login.php");
//        var_dump();
        echo "login failed!";
    }
}


//echo $res;
//
//echo "Hello world";
