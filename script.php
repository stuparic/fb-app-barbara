<?php

import_request_variables(g, "barbara_");

$to = "stuparic.dejan@gmail.com";
$subject = "porud�bina";
$body = "Stigla je narud�bina sa FB-a!" . PHP_EOL. "Porucilac je: ".$barbara_Ime 
. PHP_EOL . "Adresa je: " . $barbara_Adresa . PHP_EOL . "Kontakt telefon je: " . $barbara_Telefon 
 . PHP_EOL . "Narud�bina je: " . $barbara_PorudzbaHolder . PHP_EOL . "Ukupna Cena je:" . $barbara_UkupnaCena . PHP_EOL . 
"Uz napomenu: " . $barbara_Napomena ;
//print $body;

if (mail($to, $subject, $body)) {
   echo("<p>Uspesno ste porucili. Prijatno!</p>");
   print( '<a href="http://barbara.dejanstuparic.com">Vrati se na stranu za narucivanje</a>' );
  } else {
   echo("<p>Neuspesno!</p>");
  }
        
?>