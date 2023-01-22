<?php
$host = "localhost";
$dbname = "emsi";
$login = "root";
$password = "";

try
{
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $login, $password);
}
catch(PDOException $e)
{
    echo $e->getMessage();
}

?>