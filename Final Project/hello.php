<!--Can't get the php stuff to work for some reason really annoying-->
<!--typing "php --version" in the console shows it should work but idk-->
<!--Hope it works for you I feel I may have installed wrong-->

<!DOCTYPE html>
<html lang="en-US">
    <head>           
        <meta charset="UTF-8">
        <meta charset="description" content="Crazy Broski 3: now in 3D">
        <meta charset="keywords" content="HTML">
        <meta charset="author" content="Matthew Sandberg">
        <meta charset="viewport" content="width=device-width, height=device-height, initial-scale=1.0">
    
        <title>php stuff</title>

        <style>
            body{
                background-color: <?php echo $_POST['color'] ?>;
            }
        </style>
    
    </head>

    <body>
        <?php
            echo date('h:i:s');
            // echo 'Name:';
            // echo $_GET['name'];
            // echo 'Favourite Color:'.$color;
        ?>

        <h2><?php echo $_POST['name'] ?> I just KNEW your favourite color was <?php echo $_POST['color'] ?></h2>

    </body>

</html>