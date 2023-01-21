<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP - TP1 Excercice 3</title>

    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="header">
        <h1>CONTACTER MOI</h1>
    </div>

    <div class="contact">
        <form action="contact.php" method="POST">
            <input id="nom" name="nom" type="text" placeholder="Votre Nom" />
            <input id="email" name="email" type="email" placeholder="Votre Email" />
            <textarea id="message" name="message" placeholder="Message"></textarea>
            <input id="fichier" name="fichier" type="file"/>
            <input type="submit" value="Envoyer" />
        </form>
    </div>

    <div class="sticker">
        <img src="imgs/message.png"/>
    </div>
</body>

</html>