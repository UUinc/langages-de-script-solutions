<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP - TP1 Excercice 3 - Contact</title>

    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="header">
        <h1>CONTACT</h1>
    </div>

    <div class="contact">
        <div class="contact-data">
            <label><b>Nom:</b> <span><?php echo $_POST["nom"]; ?></span></label>
            <label><b>Email:</b> <span><?php echo $_POST["email"]; ?></span></label>
            <label><b>Message:</b></label>
            <p><?php echo $_POST["message"]; ?></p>
            <label><b>File:</b> <span><?php echo $_POST["fichier"]; ?></span></label>
        </div>
    </div>

    <div class="sticker">
        <img src="imgs/message.png" />
    </div>
</body>

</html>