<?php 

$host = "localhost";
$dbname = "emsi";
$login = "root";
$password = "";

try
{
    $connexion = new PDO("mysql:host=$host;dbname=$dbname",$login, $password);

    echo "connected";
}
catch(PDOException $e)
{
    echo "error: ". $e->getMessage();
}


?>