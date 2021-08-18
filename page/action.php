<?php 
// Variabili email
$nome = $_GET['name'];
$tel = $_GET['tel'];
$persone = $_GET['persone'];
$data = $_GET['data'];
$delay = "4";
$url = "http://archannamariadicarlo.altervista.org/";
//contenuto
// struttura email
$contenuto = 
         "Argomento dell'email :" . "Prenotazione utente". "\n"
       . "Nome e cognome: " . $nome . "\n"
       . "Numero di telefono: " . $tel . "\n"
       . "Numero dei partecipanti: " . $persone . "\n"
       . "Data scelta dall'utente :" . $data;
     
//invio l'email
mail('vittoriocampaniello58@gmail.com', 'Prenotazione utente', $contenuto);
?>



<!DOCTYPE html>
<html lang="it">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Prenotazione</title>
</head>

<body>
    <h1 class="title">
        Gentile <?php echo $nome; ?> <br />
        grazie per aver conseguito la prenotazione!
    </h1>
    <div class="message">
        <div class="float">
            <div class="top">
                <img src="/assets/loghi/logo.png" alt="" width="80px" />
                <img src="/assets/about/user.webp" alt="" width="60px" id="user" />
            </div>
            <span class="title">
                In seguito sarà ricontattato al numero
                <span> <?php echo $tel; ?></span>
            </span>
            <a href="http://archannamariadicarlo.altervista.org/">Torna alla homepage</a>
        </div>
    </div>
</body>
<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    min-height: 100vh;
    background: hsl(278, 31%, 35%);
    color: hsl(0, 0%, 100%);
}

/*stile titolo*/
.title {
    width: 100%;
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: calc(0.9rem + 1.6vmin);
    padding: 20px;
    letter-spacing: 1px;
}

/*stile messagggio*/
.message {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 20px;
    height: 80vh;
}

.message .float {
    width: 90%;
    max-width: 700px;
    height: 400px;
    margin: 20px auto;
    background: hsl(0, 0%, 0%);
    border-radius: 4px;
    padding: 20px;
}

.message .float .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.message .float .top #user {
    border-radius: 50%;
}

.message .float .title {
    text-align: center;
    font-size: calc(0.7rem + 1.3vmin);
}

.message .float .title span {
    font-weight: bold;
    margin-left: 10px;
}

.message .float a {
    text-decoration: none;
    color: hsl(0, 0%, 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    background: hsl(339, 73%, 65%);

    padding: 20px;
    width: auto;
    border-radius: 7px;
}
</style>

</html>