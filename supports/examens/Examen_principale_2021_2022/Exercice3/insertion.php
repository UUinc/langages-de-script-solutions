<?php 
require("config.php");

$nom = $_POST['nom'];
$prenom = $_POST['prenom'];
$age = $_POST['age'];

$sql = "INSERT INTO etudiant(nom, prenom, age) VALUES('$nom','$prenom',$age)";

$conn->exec($sql);

header("Location: index.php");

?>