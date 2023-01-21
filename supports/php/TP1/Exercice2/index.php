<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP - TP1 Excercice 2</title>
</head>

<body>
    <?php
    $notes_etudiants = array(
        'Mohammed' => 16,
        'Amina' => 20,
        'Ayoub' => 10,
        'Yassin' => 7,
        'Fatima' => 18,
        'Hajar' => 11,
        'Anas' => 9.75,
        'Baraa' => 17,
        'Yahya' => 17,
    );

    $notes_etudiants["rayhan"] = 15;
    $notes_etudiants["oussama"] = 18;
    ?>

    <h3>Tri par clés</h3>
    <?php
    //sort by key
    ksort($notes_etudiants);
    ?>
    <table>
        <thead>
            <tr>
                <td><b>Nom</b></td>
                <td><b>Note</b></td>
            </tr>
        </thead>
        <tbody>
            <?php
            foreach ($notes_etudiants as $key => $value) {
                echo "<tr>";
                echo "<td>$key</td>";
                echo "<td>$value</td>";
                echo "</tr>";
            }
            ?>
        </tbody>
    </table>
    <br />
    <h3>Tri par valeurs</h3>
    <?php
    //sort by value
    asort($notes_etudiants);
    ?>
    <table>
        <thead>
            <tr>
                <td><b>Nom</b></td>
                <td><b>Note</b></td>
            </tr>
        </thead>
        <tbody>
            <?php
            foreach ($notes_etudiants as $key => $value) {
                echo "<tr>";
                echo "<td>$key</td>";
                echo "<td>$value</td>";
                echo "</tr>";
            }
            ?>
        </tbody>
    </table>

    <h3>L’étudiant qui a eu la meilleure note:
        <span>
            <?php
            $best = max($notes_etudiants);
            foreach ($notes_etudiants as $key => $value) {
                if ($value == $best) {
                    echo $key;
                    break;
                }
            }
            ?>
        </span>
    </h3>

    <h3>La moyenne de la classe:
        <span>
            <?php
            $moy = 0;
            $len = count($notes_etudiants);
            foreach ($notes_etudiants as $note) {
                $moy += $note;
            }
            echo round($moy/$len, 2);
            ?>
        </span>
    </h3>

</body>

</html>