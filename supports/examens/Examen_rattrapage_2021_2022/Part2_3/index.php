<!DOCTYPE html>
<html>

<head>
    <title>Exam ratt</title>
</head>

<body>
    <?php include("connexion.php"); ?>
    <fieldset>
        <legend>inscription</legend>
        <form action="insertion.php" method="POST">
            <div>
                <label>Nom et prenom </label>
                <input type="text" name="nomprenom" id="nomprenom" onchange="testNom()" />
            </div>
            <div>
                <label>Age</label>
                <input type="number" name="age" id="age" onchange="testAge()" />
            </div>
            <div>
                <label>Genre</label>
                <input type="radio" name="genre" id="genreF" value="F"/><label> F</label>
                <input type="radio" name="genre" id="genreM" value="M" checked/><label> M</label>
            </div>
            <input type="submit" value="inscrire" />
            <input type="submit" value="annuler" />
        </form>
    </fieldset>

    <script>
        function testNom() {
            var nomprenom = document.getElementById("nomprenom").value;
            if (nomprenom === "") {
                alert("nom et prenom sont vide");
            }
        }

        function testAge() {
            var age = document.getElementById("age").value;
            if (age === undefined || age < 5 || age > 30) {
                alert("Age non valide");
            }
        }

        function testGenre() {
            var genreM = document.getElementById("genreM");
            var genreF = document.getElementById("genreF");

            if (genreM.checked === genreF.checked) {
                alert("rak zamel");
            }
            if (genreM.checked) {
                alert("Bonjour Monsieur");
            }
            if (genreF.checked) {
                alert("Bonjour mademoiselle");
            }
        }
    </script>
</body>

</html>