<?php

  /* connection information */
  $host = "localhost";
  $user = "root";
  $password = "your password here";
  $database = "autoComp";
  
  /* make connection */
  $server = mysql_connect($host, $user, $password);
  $connection = mysql_select_db($database, $server);
  
  /* get querystring parameter */
  $param = $_GET['q'];
  
  /* protect against sql injection */
  mysql_real_escape_string($param, $server);
  
  /* query the database */
  $query = mysql_query("SELECT * FROM countries WHERE country LIKE '$param%'");

  /* loop through and return matching entries */
  for ($x = 0; $x < mysql_num_rows($query); $x++) {
    $row = mysql_fetch_assoc($query);
    $output = $row['country']."\n";
    echo $output;
  }

  mysql_close($server);
?>
