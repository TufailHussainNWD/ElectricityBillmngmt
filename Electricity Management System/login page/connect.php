<?php
$user = $_POST['Username'];
$pass = $_POST['Password'];

$conn = new mysqli('localhost', 'root', '', 'logincredentials');
if ($conn->connect_error) {
    die('connnection failed :' . $conn->connect_error);
} else {
    $stmt = $conn->prepare("insert into credentials(Username,Password)values(?,?)");
    $stmt->bind_param("ss", $user, $pass);
    $stmt->execute();
    echo "registration successfull";
    $stmt->close();
    $conn->close();
}
?>