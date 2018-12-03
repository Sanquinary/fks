<?php

#echo "sok.php<br>";
#echo $fil;


$sokefrase=$_POST["sokefrase"];
$soktype=$_POST["soktype"];$avd=$_POST["avd"];
$utskrift=$_POST["utskrift"];


#les fil inn i 2d array
$linje = file($fil);
#Kunne også tatt en variabel som angir hvilken kolonne som skal stå ved vis
#print_r($linje);

if ($fil2 != "") {
#Kunne heller tatt et array av filnavn
$linje2 = file($fil2);
$linje=array_merge($linje, $linje2);
}

$antlinjer=count($linje);
for ($i=0; $i<$antlinjer; $i++){
$ord[$i] = explode ("::", $linje[$i]);
for ($o=0; $o<count($ord[$i]); $o++)
{
$ord[$i][$o]=stripslashes(trim(chop($ord[$i][$o])));
}
if ($i>0)
{
$avdeling[]=$ord[$i][2];
}
}

#fjern blanke
$avdeling = array_diff($avdeling, array(''));

#finn avdelinger
$avdeling=array_unique($avdeling);
sort($avdeling);
array_slice($avdeling, 0, count($avdeling));
sort($avdeling);

#rens søkefrase
#echo $sokefrase;
#$sokefrase=trim($sokefrase);
#$sokefrase=stripslashes($sokefrase);
#$sokefrase=stripcslashes($sokefrase);
#$sokefrase=preg_replace("/", "\/", $sokefrase);

echo "<table border=0>";

echo "<td>";
echo "<form method=post action=".$denne_siden.">";
echo "<input type=text size=40 name=sokefrase value=\"$sokefrase\">";
echo "<input type=submit value=\"Søk\">";
echo "<br>";
echo "</form>";
echo "</td>";


echo "</table>";

if ($sokefrase!="" or $avd!="") {
#finn oppføringer, lagre dem i $felt
$sokeord = explode (" ", $sokefrase);
$antkol=count($ord[0]);
for ($r=1; $r<$antlinjer; $r++){
$treff="0";
for ($k=0; $k<$antkol; $k++){
if ($brukt[$r]!="1"){
if ($soktype=="avd"){
$string_pattern=trim(chop(strtolower(preg_replace("/", "\/", strtr($avd, "���", "���")))));
$string_subject=trim(chop(strtolower(preg_replace("/", "\/", strtr($ord[$r][$k], "���", "���")))));
if ($string_pattern==$string_subject or $string_pattern=="alle"){$treff="1";}
}
else{
for ($i=0; $i<count($sokeord); $i++){
$string_pattern=strtr($sokeord[$i], "���", "���");
$string_subject=strtr($ord[$r][$k], "���", "���");
if (preg_match ("/$string_pattern/i",$string_subject)){$treff="1";}
}
}
if ($treff=="1"){
$antoppf=$antoppf+1;
for ($feltnr=0; $feltnr<$antkol; $feltnr++){
$felt[$antoppf][$feltnr]=$ord[$r][$feltnr];
if (empty($felt[$antoppf][$feltnr])){
$felt[$antoppf][$feltnr]="&nbsp;";
}
}
$brukt[$r]="1";
}
}
}
}

if ($antoppf==""){$antoppf="0";}
if ($antoppf==1){
echo "Fant 1 oppføring:";
}
else{
echo "Fant $antoppf oppføringer:";
}
#skriv resultat
if ($antoppf>0){
for ($tittelfeltnr=0; $tittelfeltnr<$antkol; $tittelfeltnr++)
{
$presultat1.="<td><b>";
$presultat1.=$ord[0][$tittelfeltnr];
$presultat1.="</b></td>\n";
}
$presultat1.="<tr>\n";
$presultat1.="<td colspan=".($antkol)."><hr></td>\n";
$presultat1.="</tr>\n";
$presultat1.="<tr>\n";
for ($oppfnr=1; $oppfnr<=$antoppf; $oppfnr++){
for ($k=0; $k<count($felt[$oppfnr]); $k++){
$vresultat1.="<td valign=top>\n<p>";
$uresultat1.="<td valign=top>\n<p>";
if (preg_match ("/@/i", $felt[$oppfnr][$k])){
$vresultat1.="<a href=mailto:".$felt[$oppfnr][$k].">".$felt[$oppfnr][$k]."</a>";
}
else
{
$vresultat1.=$felt[$oppfnr][$k];
}
if ($k==0)
{
#$uresultat1.=$felt[$oppfnr][$k];
$del=explode(",", $felt[$oppfnr][0]);
$uresultat1.="<b>".$del[0].", </b>";
for ($t=1; $t<count($del); $t++)
{
$uresultat1.=$del[$t];
}
}
else
{
$uresultat1.=$felt[$oppfnr][$k];
}
$vresultat1.="</p>\n</td>\n";
$uresultat1.="</p>\n</td>\n";
}
$vresultat1.="</tr><tr>\n";
$uresultat1.="</tr><tr>\n";
}
$presultat2.="</tr>\n";
$presultat2.="<tr>\n";
$presultat2.="<td colspan=".($antkol)."><hr></td>\n";
$presultat2.="</tr>\n";

$vresultat=$presultat1.$vresultat1.$presultat2;
$uresultat=$presultat1.$uresultat1.$presultat2;


#$vresultat=preg_replace("t3gn_2g�s", "\"", $vresultat);
#$uresultat=preg_replace("t3gn_2g�s", "-", $uresultat);

echo "<form action=\"index.php\" method=\"post\">";
echo "<input type=\"hidden\" name=\"utskrift\" value=\"<table border=5 cellpadding=3 cellspacing=0>".$uresultat."</table>\">";
echo "<input type=\"submit\" value=\"Utskrift\">";
echo "<br><br>";
echo "<table border=0 cellpadding=4 cellspacing=0>";
echo $vresultat;
echo "</table>";
}
}
/*
*/

/*

"/@/i","$felt[$oppfnr][$k]"

Redigering
Legge til oppf�ringer som brukernavn (bruk finnscript)
Parse g�se�yne og slasher etc.
logg
trykke p� knapp og vips kommer paste-bare emailadresser
plukke ut relevant info og sende til mob
vis hele listen knapp
sortering
f� vekk "avdeling"
bold etternavn, eller ikke brekk navn?
*/
?>
