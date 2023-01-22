<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Examen 2021 - 2022</title>
</head>
<body>
    <!-- Excercie 3 -->
    <!-- Q1 -->
    <fieldset>
        <legend>Inscreption</legend>

        <form id="form" action="insertion.php" method="post">
            <div>
                <label>Nom </label>
            <input id="nom" name="nom" type="text" />
            </div>
            <div>
                <label>Prenom </label>
                <input id="prenom" name="prenom" type="text" />
            </div>
            <div>
                <label>Age </label>
                <input id="age" name="age" type="number" />
            </div>
            <div>
                <input id="inscrire" type="submit" value="Inscrire" />
                <input type="button" value="Annuler" />
            </div>
        </form>
    </fieldset>
    <!-- Q2 -->
    <script>
        const nom = document.getElementById("nom");
        const prenom = document.getElementById("prenom");
        const age = document.getElementById("age"); 
        const inscrire = document.getElementById("inscrire");
        const form = document.getElementById("form");

        function Validation()
        {
            if(nom.value.trim(" ") == "")
            {
                alert("Le champ NOM est oubliee");
                return false;
            }

            if (prenom.value.trim(" ") == "") {
                alert("Le champ PRENOM est oubliee");
                return false;
            }

            if (age.value < 18 || age.value > 50) {
                alert("Le champ AGE doit être un nombre entier entre 18 et 50 ans");
                return false;
            }

            return true;
        }

        inscrire.addEventListener("click", (event)=>{
            event.preventDefault();

            if(!Validation()) return;

            form.submit();
        });
        
    </script>
</body>
</html>