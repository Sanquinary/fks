<?php
 error_reporting(E_ERROR|E_WARNING);
header('Content-Type: text/html; charset=UTF-8');
$utskrift=$_POST["utskrift"];


if (isset($utskrift))
{
	echo "<head><title>Kontostrenger</title>";
	echo "<STYLE TYPE=\"text/css\">";
	echo "p {color: #0000; font-family: times new roman; font-size: 9pt;}";
	echo "b {color: #0000; font-family: times new roman; font-size: 9pt;}";
	echo "</STYLE>";
	echo "</head><body onload=\"javascript:alert('Velg landskap for å få med alle feltene'); window.print();\">";
	echo $utskrift;
	echo "</body>";
}

else
{

			echo "Finn konto/kontostreng ved Institutt for biovitenskap<br>";
				

			$fil="http://www.mn.uio.no/ibv/tjenester/kontostrenger/kontostrenger_bio.txt";
			$denne_siden="index.php";
			include("sok.php");
			/*
			echo "<br>Rapporter endringer til <a href=\"mailto:kjetibra@ibv.uio.no?Subject=Spørsmål%20om%20kontostrenger";
			echo "\">kjetil.brathen@ibv.uio.no</a>";
			*/
}

?>
