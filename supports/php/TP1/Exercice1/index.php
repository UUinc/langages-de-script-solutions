<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP - TP1 Excercice 1</title>
</head>

<body>
    <?php 
    //Q1

use JetBrains\PhpStorm\Internal\ReturnTypeContract;

    $notes = [10 , 5 , 13, 15.75, 2.5, 20 , 12, 11, 17, 4.5, 19.25];

    //Q2
    ////a.
    function afficheTable($tableau)
    {
        for ($i = 0; $i < count($tableau); $i++) {
            echo $tableau[$i] . " ";
        }
/*      or
        foreach($tableau as $element) {
            echo $element . " ";
        }
*/  }

    ////b.
    function moyenTable($tableau)
    {
        $moy = 0;
        foreach($tableau as $element)
        {
            $moy += $element;
        }
        return $moy/count($tableau);
    }

    ////c.
    function supValTable($tableau, $val)
    {
        $count = 0;
        foreach ($tableau as $element) {
            if($element >= $val){
                $count++;
            }
        }
        return $count;
    }

    ////d.
    function is20Exist($tableau)
    {
        foreach ($tableau as $element) {
            if ($element == 20) {
                return true;
            }
        }
        return false;
    }

    ////e
    function meilleureNote($tableau)
    {
        $best = -1;
        foreach ($tableau as $element) {
            if ($element > $best) {
                $best = $element;
            }
        }
        return $best;
    }

    //Q3
    echo "Notes: ";
    afficheTable($notes);

    echo "<br/>Moyenne: ";
    echo moyenTable($notes);

    echo "<br/>Eléments est supérieurs ou égaux à 10: ";
    echo supValTable($notes, 10);

    echo "<br/>La note 20 est présenté: ";
    if(is20Exist($notes)) 
        echo "Vrai";
    else 
        echo"Faux";

    echo "<br/>La meilleure note obtenue: ";
    echo meilleureNote($notes);
    ?>
</body>

</html>