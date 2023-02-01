<?php

    $nomprenom = $_POST['nomprenom'];
    $age = $_POST['age'];
    $genre = $_POST['genre'];

    include("connexion.php");

    if(!empty($nomprenom) && !empty($age))
    {
        try
        {
            $connexion->exec("INSERT INTO utilisateurs VALUES(NULL, '$nomprenom', '$age', '$genre')");
        }
        catch(Exception $e)
        {
            echo $e->getMessage();
        }
    }
?>