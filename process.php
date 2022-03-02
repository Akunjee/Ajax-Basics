<?php
    $nam=isset($_POST['name'])?$_POST['name']:'';
    $add=isset($_POST['address'])?$_POST['address']:'';

    echo "Name Is: ".$nam;
    echo "<br />";
    echo "Address Is: ".$add;