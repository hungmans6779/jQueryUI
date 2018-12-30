<?php

  header('Content-type: application/json');
	
	//connection information
  $host = "localhost";
  $user = "root";
  $password = "your password here";
  $database = "autoComp";
  
  //make connection
  $server = mysql_connect($host, $user, $password);
  $connection = mysql_select_db($database, $server);
  
  //protect against sql injection
  mysql_real_escape_string($param, $server);
  
  //query the database
  $query = mysql_query("SELECT * FROM contacts");
	
	//start JSON object
	$contacts = "({ 'contacts':["; 
	
  //loop through and return matching entries
  for ($x = 0; $x < mysql_num_rows($query); $x++) {
    $row = mysql_fetch_assoc($query);
		$contacts .= "{'name':'" . $row["name"] . "','mail':'" . $row["mail"] . "'}";
		
		//add comma if not last row, closing brackets if is
		if ($x < mysql_num_rows($query) -1)
			$contacts .= ",";
		else
			$contacts .= "]})";
  }
	
	//return JSON with GET for JSONP callback
	$response = $_GET["jsoncallback"] . $contacts;
	echo $response;

  mysql_close($server);
?>