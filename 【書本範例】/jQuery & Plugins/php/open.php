<?php
$openfile=$_GET["file"];
$file=fopen("code/ui/Tab/" . $openfile . ".html","r");
while(!feof($file))
  {
	  echo fgets($file);
  }
fclose($file);
?>