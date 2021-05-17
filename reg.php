<?php
$fname = $_GET['fname'];
$lname = $_GET['lname'];
$email = $_GET['email'];
$mobile = $_GET['mobile'];
$cntry_id = $_GET['cntry_id'];
$user_type = $_GET['user_type'];
$profession = $_GET['profession'];
$pwd = $_GET['pwd'];
$school_id = $_GET['school_id'];
$city_id = $_GET['city_id'];


$conn = new mysqli("kxn6274.uta.cloud","kxn6274_wdm_user", "Qwertyui!23", "kxn6274_wdm_2");
if ($conn -> connect_error) {
    echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
    exit();
}

if(!($email && $pwd) && ($_COOKIE['loggedIn'] != null)){
    echo "loggedIn as " .$_COOKIE['loggedIn'] . "<br>";
}
else if($email && $pwd) {

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)){
        echo "registration Failed, Invalid Email <a href=\"/wdm/user.php?logout=true\">Register here!</a>";
        exit();

    }
    if (preg_match("/^.*(?=.{8,10})(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).*$/", $pwd) === 0){
        echo "registration Failed, Invalid Password <a href=\"/wdm/user.php?logout=true\">Register here!</a>";
        exit();

    }


    $sql = "INSERT INTO kxn6274_wdm_2.users (fname, lname, email, mobile, cntry_id, user_type, profession, pwd, school_id, city_id)" .
        "VALUES ('$fname', '$lname', '$email', '$mobile', '$cntry_id', '$user_type', '$profession', '$pwd', '$school_id', '$city_id');";
//    echo "sql is: " . $sql;
//    $sql="SELECT * FROM users WHERE email='$username' and pwd='$password' LIMIT 1";
//    $res = mysqli_query($conn, $sql);
    if ($conn->query($sql) === TRUE) {

        $to = $email;

        $subject = "Registration Confirmation";
        $message = "Registration is successful. Thank You. Login at http://kxn6274.uta.cloud/wdm";
        $headers = "From: email@mail.com";
        mail($to, $subject, $message, $headers);
        echo "registration successful <a href=\"/wdm/user.php?logout=true\">login here!</a>";
        header("Location: /wdm/login/login.php");
//     http_redirect("http://kxn6274.uta.cloud/wdm/user.php?logout=true");
    } else {
        echo "registration Failed <a href=\"/wdm/user.php?logout=true\">Register here!</a>";
        header("Location: /wdm/login/login.php");
//        http_redirect("http://kxn6274.uta.cloud/wdm/register/register.html");
    }
}

//echo $res;
//
//echo "Hello world";
