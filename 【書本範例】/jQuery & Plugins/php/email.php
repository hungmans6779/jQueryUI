<?php
$test= trim(strtolower($_GET['email']));
$emails = array('test1@hotmail.com', 'test2@hotmail.com', 'test3@hotmail.com', 'test4@hotmail.com', 'test5@hotmail.com', 'test6@hotmail.com');
$valid = 'true';
foreach($emails as $email) {
    if( strtolower($email) == $test )
        $valid = 'false';
}
echo $valid;

?> 