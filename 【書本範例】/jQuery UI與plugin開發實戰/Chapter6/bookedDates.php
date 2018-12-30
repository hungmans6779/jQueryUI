<?php

  header('Content-type: application/json');

  //define booked dates as JSON
  $dates = "({ 'dates':[
		{'month':1,'day':5},
		{'month':1,'day':6},
		{'month':1,'day':19},
		{'month':2,'day':9},
		{'month':2,'day':10},
		{'month':3,'day':16},
		{'month':3,'day':23},
		{'month':4,'day':13},
		{'month':4,'day':15},
		{'month':5,'day':4},
		{'month':5,'day':12},
		{'month':5,'day':13},
		{'month':6,'day':15},
		{'month':6,'day':16},
		{'month':7,'day':13},
		{'month':8,'day':17},
		{'month':9,'day':9},
		{'month':9,'day':10},
		{'month':9,'day':11},
		{'month':10,'day':13},
		{'month':10,'day':14},
		{'month':10,'day':27},
		{'month':11,'day':16},
		{'month':12,'day':28},
		{'month':12,'day':29},
		{'month':12,'day':30}
	]})";
  $response = $_GET["jsoncallback"] . $dates; 

  //echo response
  echo $response;
 
?>