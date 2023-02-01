<?php 

require("connexion.php");

$sql = $connexion->query("SELECT * FROM utilisateurs");
$result = $sql->fetchAll();

echo "<table><thead><tr><th>Id</th><th>Nom Prenom</th><th>Age</th><th>Genre</th></tr></thead><tbody>";

foreach($result as $row)
{
    echo "<tr>";
    echo "<td>". $row['id']."</td>";
    echo "<td>". $row['nomPrenom']."</td>";
    echo "<td>". $row['age']."</td>";
    echo "<td>". $row['genre']."</td>";
    echo "</tr>";
}

echo "</tbody></table>";

?>