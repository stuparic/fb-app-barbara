onload = function () {
for (j = 0; j < document.frmMain.checkgroup.length; j++){
        document.frmMain.checkgroup[j].disabled = true ;
        }
    	document.frmMain.Naruci.disabled = true;
		disableDodajButton();
}


var i = 0;
var porudzba = "";
var addSpices = "";
var UkupnaPorudzbina1 = "";
var UkupnaPorudzbina2 = "";
var UkupnaPorudzbina3 = "";
var UkupnaPorudzbina4 = "";
var UkupnaPorudzbina5 = "";
var UkupnaPorudzbina6 = "";
var UkupnaPorudzbina7 = "";
var UkupnaPorudzbina8 = "";
var UkupnaPorudzbina9 = "";

var Cena1 = 0;
var Cena2 = 0;
var Cena3 = 0;
var Cena4 = 0;
var Cena5 = 0;
var Cena6 = 0;
var Cena7 = 0;
var Cena8 = 0;
var Cena9 = 0;

var Spice0 = "Pavlaka";
var Spice1 = "Majonez";
var Spice2 = "Kecap";
var Spice3 = "Urnebes";
var Spice4 = "Paradajz";
var Spice5 = "Zelena";
var Spice6 = "Luk";

var ukupnaCena = 0;

function inc(){
i++;
addSpices = "";

if (i == 1){
    if(document.frmMain.Vrste[document.frmMain.Vrste.selectedIndex].value == "Sendvici i Rostilj"){
        UkupnaPorudzbina1 = VrsteName + ' -> ' + PodvrsteName + ' -> ' + VelicineName + ' -> ' + 'Premazi: ' + spiceNames() + "\n" + "\n";
        Cena1 = parseInt(document.frmMain.Cena.value);
    }else if(document.frmMain.Vrste[document.frmMain.Vrste.selectedIndex].value == "Dobro jutro sa Barbarom"){
	    UkupnaPorudzbina1 = VrsteName + ' -> ' + PodvrsteName + "\n" + "\n";
        Cena1 = parseInt(document.frmMain.Cena.value);
	}else if(document.frmMain.Vrste[document.frmMain.Vrste.selectedIndex].value == "Pica") {
        UkupnaPorudzbina1 = VrsteName + ' -> ' + PodvrsteName + ' -> ' + VelicineName + ' -> ' + 'Sosevi: ' + getSoseviName() + "\n" + "\n";
        Cena1 = parseInt(document.frmMain.Cena.value);
    }else if(document.frmMain.Vrste[document.frmMain.Vrste.selectedIndex].value == "Chicken Meni") {
        UkupnaPorudzbina1 = VrsteName + ' -> ' + PodvrsteName + ' -> ' + VelicineName + ' -> ' + 'Sosevi: ' + getSoseviName() + "\n" + "\n";
        Cena1 = parseInt(document.frmMain.Cena.value);
    }else if(document.frmMain.Vrste[document.frmMain.Vrste.selectedIndex].value == "A La Carte"){
	    UkupnaPorudzbina1 = VrsteName + ' -> ' + PodvrsteName + "\n" + "\n";
        Cena1 = parseInt(document.frmMain.Cena.value);
	}else{
        UkupnaPorudzbina1 = VrsteName + ' -> ' + PodvrsteName + ' -> ' + VelicineName  + "\n" + "\n";
        Cena1 = parseInt(document.frmMain.Cena.value);
    }
}else if (i == 2){
    if(document.frmMain.Vrste[document.frmMain.Vrste.selectedIndex].value == "Sendvici i Rostilj"){
        UkupnaPorudzbina2 = VrsteName + ' -> ' + PodvrsteName + ' -> ' + VelicineName + ' -> ' + 'Premazi: ' + spiceNames() + "\n" + "\n";
        Cena2 = parseInt(document.frmMain.Cena.value);
    }else if(document.frmMain.Vrste[document.frmMain.Vrste.selectedIndex].value == "Dobro jutro sa Barbarom"){
	    UkupnaPorudzbina2 = VrsteName + ' -> ' + PodvrsteName + "\n" + "\n";
        Cena2 = parseInt(document.frmMain.Cena.value);
	}else if(document.frmMain.Vrste[document.frmMain.Vrste.selectedIndex].value == "Pica"){
        UkupnaPorudzbina2 = VrsteName + ' -> ' + PodvrsteName + ' -> ' + VelicineName + ' -> ' + 'Sosevi: ' + getSoseviName() + "\n" + "\n";
        Cena2 = parseInt(document.frmMain.Cena.value);
	}else if(document.frmMain.Vrste[document.frmMain.Vrste.selectedIndex].value == "Chicken Meni") {
        UkupnaPorudzbina2 = VrsteName + ' -> ' + PodvrsteName + ' -> ' + VelicineName + ' -> ' + 'Sosevi: ' + getSoseviName() + "\n" + "\n";
        Cena2 = parseInt(document.frmMain.Cena.value);
    }else if(document.frmMain.Vrste[document.frmMain.Vrste.selectedIndex].value == "A La Carte"){
	    UkupnaPorudzbina2 = VrsteName + ' -> ' + PodvrsteName + "\n" + "\n";
        Cena2 = parseInt(document.frmMain.Cena.value);
	}else{
        UkupnaPorudzbina2 = VrsteName + ' -> ' + PodvrsteName + ' -> ' + VelicineName  + "\n" + "\n";
        Cena2 = parseInt(document.frmMain.Cena.value);
    }
}else if (i == 3){
    if(document.frmMain.Vrste[document.frmMain.Vrste.selectedIndex].value == "Sendvici i Rostilj"){
        UkupnaPorudzbina3 = VrsteName + ' -> ' + PodvrsteName + ' -> ' + VelicineName + ' -> ' + 'Premazi: ' + spiceNames() + "\n" + "\n";
        Cena3 = parseInt(document.frmMain.Cena.value);
    }else if(document.frmMain.Vrste[document.frmMain.Vrste.selectedIndex].value == "Dobro jutro sa Barbarom"){
	    UkupnaPorudzbina3 = VrsteName + ' -> ' + PodvrsteName + "\n" + "\n";
        Cena3 = parseInt(document.frmMain.Cena.value);
	}else if(document.frmMain.Vrste[document.frmMain.Vrste.selectedIndex].value == "Pica"){
        UkupnaPorudzbina3 = VrsteName + ' -> ' + PodvrsteName + ' -> ' + VelicineName + ' -> ' + 'Sosevi: ' + getSoseviName() + "\n" + "\n";
        Cena3 = parseInt(document.frmMain.Cena.value);
	}else if(document.frmMain.Vrste[document.frmMain.Vrste.selectedIndex].value == "Chicken Meni") {
        UkupnaPorudzbina3 = VrsteName + ' -> ' + PodvrsteName + ' -> ' + VelicineName + ' -> ' + 'Sosevi: ' + getSoseviName() + "\n" + "\n";
        Cena3 = parseInt(document.frmMain.Cena.value);
    }else if(document.frmMain.Vrste[document.frmMain.Vrste.selectedIndex].value == "A La Carte"){
	    UkupnaPorudzbina3 = VrsteName + ' -> ' + PodvrsteName + "\n" + "\n";
        Cena3 = parseInt(document.frmMain.Cena.value);
	}else{
        UkupnaPorudzbina3 = VrsteName + ' -> ' + PodvrsteName + ' -> ' + VelicineName  + "\n" + "\n";
        Cena3 = parseInt(document.frmMain.Cena.value);
    }
}else if (i == 4){
    if(document.frmMain.Vrste[document.frmMain.Vrste.selectedIndex].value == "Sendvici i Rostilj"){
        UkupnaPorudzbina4 = VrsteName + ' -> ' + PodvrsteName + ' -> ' + VelicineName + ' -> ' + 'Premazi: ' + spiceNames() + "\n" + "\n";
        Cena4 = parseInt(document.frmMain.Cena.value);
    }else if(document.frmMain.Vrste[document.frmMain.Vrste.selectedIndex].value == "Dobro jutro sa Barbarom"){
	    UkupnaPorudzbina4 = VrsteName + ' -> ' + PodvrsteName + "\n" + "\n";
        Cena4 = parseInt(document.frmMain.Cena.value);
	}else if(document.frmMain.Vrste[document.frmMain.Vrste.selectedIndex].value == "Pica"){
        UkupnaPorudzbina4 = VrsteName + ' -> ' + PodvrsteName + ' -> ' + VelicineName + ' -> ' + 'Sosevi: ' + getSoseviName() + "\n" + "\n";
        Cena4 = parseInt(document.frmMain.Cena.value);
	}else if(document.frmMain.Vrste[document.frmMain.Vrste.selectedIndex].value == "Chicken Meni") {
        UkupnaPorudzbina4 = VrsteName + ' -> ' + PodvrsteName + ' -> ' + VelicineName + ' -> ' + 'Sosevi: ' + getSoseviName() + "\n" + "\n";
        Cena4 = parseInt(document.frmMain.Cena.value);
    }else if(document.frmMain.Vrste[document.frmMain.Vrste.selectedIndex].value == "A La Carte"){
	    UkupnaPorudzbina4 = VrsteName + ' -> ' + PodvrsteName + "\n" + "\n";
        Cena4 = parseInt(document.frmMain.Cena.value);
	}else{
        UkupnaPorudzbina4 = VrsteName + ' -> ' + PodvrsteName + ' -> ' + VelicineName  + "\n" + "\n";
        Cena4 = parseInt(document.frmMain.Cena.value);
    }
}else if (i == 5){
	if(document.frmMain.Vrste[document.frmMain.Vrste.selectedIndex].value == "Sendvici i Rostilj"){
        UkupnaPorudzbina5 = VrsteName + ' -> ' + PodvrsteName + ' -> ' + VelicineName + ' -> ' + 'Premazi: ' + spiceNames() + "\n" + "\n";
        Cena5 = parseInt(document.frmMain.Cena.value);
    }else if(document.frmMain.Vrste[document.frmMain.Vrste.selectedIndex].value == "Dobro jutro sa Barbarom"){
	    UkupnaPorudzbina5 = VrsteName + ' -> ' + PodvrsteName + "\n" + "\n";
        Cena5 = parseInt(document.frmMain.Cena.value);
	}else if(document.frmMain.Vrste[document.frmMain.Vrste.selectedIndex].value == "Pica"){
        UkupnaPorudzbina5 = VrsteName + ' -> ' + PodvrsteName + ' -> ' + VelicineName + ' -> ' + 'Sosevi: ' + getSoseviName() + "\n" + "\n";
        Cena5 = parseInt(document.frmMain.Cena.value);
	}else if(document.frmMain.Vrste[document.frmMain.Vrste.selectedIndex].value == "Chicken Meni") {
        UkupnaPorudzbina5 = VrsteName + ' -> ' + PodvrsteName + ' -> ' + VelicineName + ' -> ' + 'Sosevi: ' + getSoseviName() + "\n" + "\n";
        Cena5 = parseInt(document.frmMain.Cena.value);
    }else if(document.frmMain.Vrste[document.frmMain.Vrste.selectedIndex].value == "A La Carte"){
	    UkupnaPorudzbina5 = VrsteName + ' -> ' + PodvrsteName + "\n" + "\n";
        Cena5 = parseInt(document.frmMain.Cena.value);
	}else{
        UkupnaPorudzbina5 = VrsteName + ' -> ' + PodvrsteName + ' -> ' + VelicineName  + "\n" + "\n";
        Cena5 = parseInt(document.frmMain.Cena.value);
    }
}else if (i == 6){
    if(document.frmMain.Vrste[document.frmMain.Vrste.selectedIndex].value == "Sendvici i Rostilj"){
        UkupnaPorudzbina6 = VrsteName + ' -> ' + PodvrsteName + ' -> ' + VelicineName + ' -> ' + 'Premazi: ' + spiceNames() + "\n" + "\n";
        Cena6 = parseInt(document.frmMain.Cena.value);
    }else if(document.frmMain.Vrste[document.frmMain.Vrste.selectedIndex].value == "Dobro jutro sa Barbarom"){
	    UkupnaPorudzbina6 = VrsteName + ' -> ' + PodvrsteName + "\n" + "\n";
        Cena6 = parseInt(document.frmMain.Cena.value);
	}else if(document.frmMain.Vrste[document.frmMain.Vrste.selectedIndex].value == "Pica"){
        UkupnaPorudzbina6 = VrsteName + ' -> ' + PodvrsteName + ' -> ' + VelicineName + ' -> ' + 'Sosevi: ' + getSoseviName() + "\n" + "\n";
        Cena6 = parseInt(document.frmMain.Cena.value);
	}else if(document.frmMain.Vrste[document.frmMain.Vrste.selectedIndex].value == "Chicken Meni") {
        UkupnaPorudzbina6 = VrsteName + ' -> ' + PodvrsteName + ' -> ' + VelicineName + ' -> ' + 'Sosevi: ' + getSoseviName() + "\n" + "\n";
        Cena6 = parseInt(document.frmMain.Cena.value);
    }else if(document.frmMain.Vrste[document.frmMain.Vrste.selectedIndex].value == "A La Carte"){
	    UkupnaPorudzbina6 = VrsteName + ' -> ' + PodvrsteName + "\n" + "\n";
        Cena6 = parseInt(document.frmMain.Cena.value);
	}else{
        UkupnaPorudzbina6 = VrsteName + ' -> ' + PodvrsteName + ' -> ' + VelicineName  + "\n" + "\n";
        Cena6 = parseInt(document.frmMain.Cena.value);
    }
}else if (i == 7){
    if(document.frmMain.Vrste[document.frmMain.Vrste.selectedIndex].value == "Sendvici i Rostilj"){
        UkupnaPorudzbina7 = VrsteName + ' -> ' + PodvrsteName + ' -> ' + VelicineName + ' -> ' + 'Premazi: ' + spiceNames() + "\n" + "\n";
        Cena7 = parseInt(document.frmMain.Cena.value);
    }else if(document.frmMain.Vrste[document.frmMain.Vrste.selectedIndex].value == "Dobro jutro sa Barbarom"){
	    UkupnaPorudzbina7 = VrsteName + ' -> ' + PodvrsteName + "\n" + "\n";
        Cena7 = parseInt(document.frmMain.Cena.value);
	}else if(document.frmMain.Vrste[document.frmMain.Vrste.selectedIndex].value == "Pica"){
        UkupnaPorudzbina7 = VrsteName + ' -> ' + PodvrsteName + ' -> ' + VelicineName + ' -> ' + 'Sosevi: ' + getSoseviName() + "\n" + "\n";
        Cena7 = parseInt(document.frmMain.Cena.value);
	}else if(document.frmMain.Vrste[document.frmMain.Vrste.selectedIndex].value == "Chicken Meni") {
        UkupnaPorudzbina7 = VrsteName + ' -> ' + PodvrsteName + ' -> ' + VelicineName + ' -> ' + 'Sosevi: ' + getSoseviName() + "\n" + "\n";
        Cena7 = parseInt(document.frmMain.Cena.value);
    }else if(document.frmMain.Vrste[document.frmMain.Vrste.selectedIndex].value == "A La Carte"){
	    UkupnaPorudzbina7 = VrsteName + ' -> ' + PodvrsteName + "\n" + "\n";
        Cena7 = parseInt(document.frmMain.Cena.value);
	}else{
        UkupnaPorudzbina7 = VrsteName + ' -> ' + PodvrsteName + ' -> ' + VelicineName  + "\n" + "\n";
        Cena7 = parseInt(document.frmMain.Cena.value);
    }
}else if (i == 8){
    if(document.frmMain.Vrste[document.frmMain.Vrste.selectedIndex].value == "Sendvici i Rostilj"){
        UkupnaPorudzbina8 = VrsteName + ' -> ' + PodvrsteName + ' -> ' + VelicineName + ' -> ' + 'Premazi: ' + spiceNames() + "\n" + "\n";
        Cena8 = parseInt(document.frmMain.Cena.value);
    }else if(document.frmMain.Vrste[document.frmMain.Vrste.selectedIndex].value == "Dobro jutro sa Barbarom"){
	    UkupnaPorudzbina8 = VrsteName + ' -> ' + PodvrsteName + "\n" + "\n";
        Cena8 = parseInt(document.frmMain.Cena.value);
	}else if(document.frmMain.Vrste[document.frmMain.Vrste.selectedIndex].value == "Pica"){
        UkupnaPorudzbina8 = VrsteName + ' -> ' + PodvrsteName + ' -> ' + VelicineName + ' -> ' + 'Sosevi: ' + getSoseviName() + "\n" + "\n";
        Cena8 = parseInt(document.frmMain.Cena.value);
	}else if(document.frmMain.Vrste[document.frmMain.Vrste.selectedIndex].value == "Chicken Meni") {
        UkupnaPorudzbina8 = VrsteName + ' -> ' + PodvrsteName + ' -> ' + VelicineName + ' -> ' + 'Sosevi: ' + getSoseviName() + "\n" + "\n";
        Cena8 = parseInt(document.frmMain.Cena.value);
    }else if(document.frmMain.Vrste[document.frmMain.Vrste.selectedIndex].value == "A La Carte"){
	    UkupnaPorudzbina8 = VrsteName + ' -> ' + PodvrsteName + "\n" + "\n";
        Cena8 = parseInt(document.frmMain.Cena.value);
	}else{
        UkupnaPorudzbina8 = VrsteName + ' -> ' + PodvrsteName + ' -> ' + VelicineName  + "\n" + "\n";
        Cena8 = parseInt(document.frmMain.Cena.value);
    }
}else if (i == 9){
    if(document.frmMain.Vrste[document.frmMain.Vrste.selectedIndex].value == "Sendvici i Rostilj"){
        UkupnaPorudzbina9 = VrsteName + ' -> ' + PodvrsteName + ' -> ' + VelicineName + ' -> ' + 'Premazi: ' + spiceNames() + "\n" + "\n";
        Cena9 = parseInt(document.frmMain.Cena.value);
    }else if(document.frmMain.Vrste[document.frmMain.Vrste.selectedIndex].value == "Dobro jutro sa Barbarom"){
	    UkupnaPorudzbina9 = VrsteName + ' -> ' + PodvrsteName + "\n" + "\n";
        Cena9 = parseInt(document.frmMain.Cena.value);
	}else if(document.frmMain.Vrste[document.frmMain.Vrste.selectedIndex].value == "Pica"){
        UkupnaPorudzbina9 = VrsteName + ' -> ' + PodvrsteName + ' -> ' + VelicineName + ' -> ' + 'Sosevi: ' + getSoseviName() + "\n" + "\n";
        Cena9 = parseInt(document.frmMain.Cena.value);
	}else if(document.frmMain.Vrste[document.frmMain.Vrste.selectedIndex].value == "Chicken Meni") {
        UkupnaPorudzbina9 = VrsteName + ' -> ' + PodvrsteName + ' -> ' + VelicineName + ' -> ' + 'Sosevi: ' + getSoseviName() + "\n" + "\n";
        Cena9 = parseInt(document.frmMain.Cena.value);
    }else if(document.frmMain.Vrste[document.frmMain.Vrste.selectedIndex].value == "A La Carte"){
	    UkupnaPorudzbina9 = VrsteName + ' -> ' + PodvrsteName + "\n" + "\n";
        Cena9 = parseInt(document.frmMain.Cena.value);
	}else{
        UkupnaPorudzbina9 = VrsteName + ' -> ' + PodvrsteName + ' -> ' + VelicineName  + "\n" + "\n";
        Cena9 = parseInt(document.frmMain.Cena.value);
    }
}    

    porudzba = UkupnaPorudzbina1 + UkupnaPorudzbina2 + UkupnaPorudzbina3 + UkupnaPorudzbina4 +
    UkupnaPorudzbina5 + UkupnaPorudzbina6 + UkupnaPorudzbina7 + UkupnaPorudzbina8 + UkupnaPorudzbina9;
	
	document.frmMain.PorudzbaHolder.value = porudzba;
	
	ukupnaCena = Cena1 + Cena2 + Cena3 + Cena4 + Cena5 + Cena6 + Cena7 + Cena8 + Cena9;
	document.frmMain.UkupnaCena.value = ukupnaCena;
	ClearOptions(document.frmMain.Podvrste);
    ClearOptions(document.frmMain.Velicina);
    ClearOptions(document.frmMain.Sosevi);
	disableDodajButton();
	scrollTextArea();
}

function reset_form(){
document.frmMain.reset();
}

function spiceNames(){
	
	for (j = 0; j < document.frmMain.checkgroup.length; j++){
	
		if ((document.frmMain.checkgroup[j].checked == true) && (document.frmMain.checkgroup[j].disabled == false)&& (j == 0)){
			addSpices = addSpices + Spice0 + " ";
		}
		if ((document.frmMain.checkgroup[j].checked == true) && (document.frmMain.checkgroup[j].disabled == false)&& (j == 1)){
			addSpices = addSpices + Spice1 + " ";
		}
		if ((document.frmMain.checkgroup[j].checked == true) && (document.frmMain.checkgroup[j].disabled == false)&& (j == 2)){
			addSpices = addSpices + Spice2 + " ";
		}
		if ((document.frmMain.checkgroup[j].checked == true) && (document.frmMain.checkgroup[j].disabled == false)&& (j == 3)){
			addSpices = addSpices + Spice3 + " ";
		}
		if ((document.frmMain.checkgroup[j].checked == true) && (document.frmMain.checkgroup[j].disabled == false)&& (j == 4)){
			addSpices = addSpices + Spice4 + " ";
		}
		if ((document.frmMain.checkgroup[j].checked == true) && (document.frmMain.checkgroup[j].disabled == false)&& (j == 5)){
			addSpices = addSpices + Spice5 + " ";
		}
		if ((document.frmMain.checkgroup[j].checked == true) && (document.frmMain.checkgroup[j].disabled == false)&& (j == 6)){
			addSpices = addSpices + Spice6 + " ";
		}
    }
	return addSpices;
}

function zavrsi_narudzbu() {

	var cenaProvera = parseInt(document.frmMain.UkupnaCena.value);
		document.frmMain.Vrste.disabled = true;
		document.frmMain.Podvrste.disabled = true;
		document.frmMain.Velicina.disabled = true;
		document.frmMain.Dodaj.disabled = true;
		document.frmMain.Ponisti.disabled = true;
		document.frmMain.Naruci.disabled = false;
		
	if (cenaProvera < 400) {
		document.frmMain.UkupnaCena.value = cenaProvera + 120;
		
	}

}

function validate(form) { 

	if (form.PorudzbaHolder.value === null || form.PorudzbaHolder.value == " ") { 
		alert('Morate poruciti bar jedan proizvod'); 
		form.Vrste.focus(); 
		return false;
	}
	if (form.Ime.value === null || form.Ime.value == " ") { 
		alert('Morate uneti ime'); 
		form.Ime.focus(); 
		form.Ime.select(); 
		return false;
	}
	if (form.Telefon.value === null || form.Telefon.value == " "){
		alert ('Morate uneti broj telefona');
		form.Telefon.focus();
		form.Telefon.select();
		return false;
	}
	if (form.Adresa.value === null || form.Adresa.value == " "){
		alert ('Morate uneti adresu');
		form.Adresa.focus();
		form.Adresa.select();
		return false;
	}
	var x=form.Email.value;
	var atpos=x.indexOf("@");
	var dotpos=x.lastIndexOf(".");
	if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length){
		alert("Unesite validnu e-mail adresu");
		return false;
	}	
}

function reset_narudzba(){

	document.frmMain.PorudzbaHolder.value = '';
	document.frmMain.Cena.value = '';
	document.frmMain.UkupnaCena.value = '';
	i = 0;
	porudzba = "";
	UkupnaPorudzbina1 = "";
	UkupnaPorudzbina2 = "";
	UkupnaPorudzbina3 = "";
	UkupnaPorudzbina4 = "";
	UkupnaPorudzbina5 = "";
	UkupnaPorudzbina6 = "";
	UkupnaPorudzbina7 = "";
	UkupnaPorudzbina8 = "";
	UkupnaPorudzbina9 = "";
	Cena1 = 0;
	Cena2 = 0;
	Cena3 = 0;
	Cena4 = 0;
	Cena5 = 0;
	Cena6 = 0;
	Cena7 = 0;
	Cena8 = 0;
	Cena9 = 0;
}

function PopulatePodvrste() {

document.frmMain.Cena.value = '';
document.frmMain.UkupnaCena.value = '';

var VrsteList = document.frmMain.Vrste;
VrsteName = VrsteList.options[VrsteList.selectedIndex].text;

   ClearOptions(document.frmMain.Podvrste);
   ClearOptions(document.frmMain.Velicina);
   ClearOptions(document.frmMain.Sosevi);
   
   if (VrsteList[VrsteList.selectedIndex].value == "Pica") {
      AddToOptionList(document.frmMain.Podvrste, "Madjarica", "Madjarica");
      AddToOptionList(document.frmMain.Podvrste, "Kaprićoza", "Kaprićoza");
	  AddToOptionList(document.frmMain.Podvrste, "Mediteraneo", "Mediteraneo");
	  AddToOptionList(document.frmMain.Podvrste, "Barbara", "Barbara");
	  AddToOptionList(document.frmMain.Podvrste, "Barbara Deluxe", "Barbara Deluxe");
	  AddToOptionList(document.frmMain.Podvrste, "Vegetarijana", "Vegetarijana");
	  AddToOptionList(document.frmMain.Podvrste, "Posna", "Posna"); 
	  populateSosevi();	  
	  addTooltip();
   }
   
   if (VrsteList[VrsteList.selectedIndex].value == "Barbarina domaca trpeza") {
       AddToOptionList(document.frmMain.Podvrste, "Supa/Čorba", "Supa/Čorba");
       AddToOptionList(document.frmMain.Podvrste, "Barbara gril meni", "Barbara gril meni");
	   AddToOptionList(document.frmMain.Podvrste, "Gulaš", "Gulaš");
	   AddToOptionList(document.frmMain.Podvrste, "Musaka", "Musaka");
	   AddToOptionList(document.frmMain.Podvrste, "Pasulj sa suvium mesom", "Pasulj sa suvium mesom");
	   AddToOptionList(document.frmMain.Podvrste, "Pileća pljeskavica", "Pileća pljeskavica");
	   AddToOptionList(document.frmMain.Podvrste, "Grilovani batak", "Grilovani batak");
	   AddToOptionList(document.frmMain.Podvrste, "Pileća pljeskavica", "Pileća pljeskavica");
	   AddToOptionList(document.frmMain.Podvrste, "Natur šnicla", "Natur šnicla");
	   AddToOptionList(document.frmMain.Podvrste, "Faširana šicla", "Faširana šnicla");
	   AddToOptionList(document.frmMain.Podvrste, "Roštilj kobasica", "Roštilj kobasica");
	   AddToOptionList(document.frmMain.Podvrste, "Karadjordjeva šnicla", "Karadjordjeva šnicla");
	   AddToOptionList(document.frmMain.Podvrste, "Pileći paprikaš", "Pileći paprikaš");
	   AddToOptionList(document.frmMain.Podvrste, "Pomfrit", "Pomfrit");
	   addTooltip();
   }

   if (VrsteList[VrsteList.selectedIndex].value == "Slana Palacinka") {
      AddToOptionList(document.frmMain.Podvrste, "Pizza Palačinka", "Pizza Palačinka");
      AddToOptionList(document.frmMain.Podvrste, "Mediteranska Palačinka", "Mediteranska Palačinka");
	  AddToOptionList(document.frmMain.Podvrste, "Vegetarijano Palačinka", "Vegetarijano Palačinka");
	  AddToOptionList(document.frmMain.Podvrste, "Lalina Palačinka", "Lalina Palačinka");
	  AddToOptionList(document.frmMain.Podvrste, "Stevina Vratolomija Palačinka", "Stevina Vratolomija Palačinka");
	  AddToOptionList(document.frmMain.Podvrste, "Prolećna Palačinka", "Prolećna Palačinka");
      AddToOptionList(document.frmMain.Podvrste, "Mexico Palačinka", "Mexico Palačinka");
	  AddToOptionList(document.frmMain.Podvrste, "Tatarska Palačinka", "Tatarska Palačinka");
	  AddToOptionList(document.frmMain.Podvrste, "Barbara 1 Palačinka", "Barbara 1 Palačinka");
	  AddToOptionList(document.frmMain.Podvrste, "Barbara 2 Palačinka", "Barbara 2 Palačinka");
	  AddToOptionList(document.frmMain.Podvrste, "Integralna Palačinka", "Integralna Palačinka");
	  addTooltip();
   }
   
   if (VrsteList[VrsteList.selectedIndex].value == "Slatka Palacinka") {
      AddToOptionList(document.frmMain.Podvrste, "Kinder Palačinka", "Kinder Palačinka");
	  AddToOptionList(document.frmMain.Podvrste, "Rafaelo Palačinka", "Rafaelo Palačinka");
	  AddToOptionList(document.frmMain.Podvrste, "Bonžita Palačinka", "Bonžita Palačinka");
	  AddToOptionList(document.frmMain.Podvrste, "Bakina Palačinka", "Bakina Palačinka");
	  AddToOptionList(document.frmMain.Podvrste, "Dečija radost Palačinka", "Dečija radost Palačinka");
	  AddToOptionList(document.frmMain.Podvrste, "Snikers Palačinka", "Snikers Palačinka");
	  AddToOptionList(document.frmMain.Podvrste, "Bananeros Palačinka", "Bananeros Palačinka");
	  AddToOptionList(document.frmMain.Podvrste, "Šašava Palačinka", "Šašava Palačinka");
	  AddToOptionList(document.frmMain.Podvrste, "Barbara Palačinka", "Barbara Palačinka");
	  AddToOptionList(document.frmMain.Podvrste, "Sezonska Palačinka", "Sezonska Palačinka");
	  addTooltip();
   }
   
   if (VrsteList[VrsteList.selectedIndex].value == "Sendvici i Rostilj") {
      AddToOptionList(document.frmMain.Podvrste, "Index sendvič", "Index sendvič");
      AddToOptionList(document.frmMain.Podvrste, "Dimljeni index sendvič", "Dimljeni index sendvič");
	  AddToOptionList(document.frmMain.Podvrste, "Sendvič piletina", "Sendvič piletina");
	  AddToOptionList(document.frmMain.Podvrste, "Sendvič punjena piletina", "Sendvič punjena piletina");
	  AddToOptionList(document.frmMain.Podvrste, "Stevina vratolomija sendvič", "Stevina vratolomija sendvič");
	  AddToOptionList(document.frmMain.Podvrste, "Lalin sendvič", "Lalin sendvič");
	  AddToOptionList(document.frmMain.Podvrste, "Vegetarijano sendvič", "Vegetarijano sendvič");
	  AddToOptionList(document.frmMain.Podvrste, "Pecenica sendvič", "Pecenica sendvič");
	  AddToOptionList(document.frmMain.Podvrste, "Suvi vrat sendvič", "Suvi vrat sendvič");
	  AddToOptionList(document.frmMain.Podvrste, "Kulen sendvič", "Kulen sendvič");
	  AddToOptionList(document.frmMain.Podvrste, "Tunjevina sendvič", "Tunjevina sendvič");
	  AddToOptionList(document.frmMain.Podvrste, "Pljeskavica u lepinji", "Pljeskavica u lepinji");
	  AddToOptionList(document.frmMain.Podvrste, "Punjena pljeskavica u lepinji", "Punjena pljeskavica u lepinji");
	  AddToOptionList(document.frmMain.Podvrste, "Špikovana pljeskavica u lepinji", "Špikovana pljeskavica u lepinji");
	  AddToOptionList(document.frmMain.Podvrste, "Ćevapi u lepinji", "Ćevapi u lepinji");
	  AddToOptionList(document.frmMain.Podvrste, "Pileće belo meso", "Pileće belo meso");
	  AddToOptionList(document.frmMain.Podvrste, "Bečka šnicla u lepinji", "Bečka šnicla u lepinji");
	  addTooltip();
   }
   
   if (VrsteList[VrsteList.selectedIndex].value == "Dobro jutro sa Barbarom") {
      AddToOptionList(document.frmMain.Podvrste, "Omlet u somunu", "Omlet u somunu");
      AddToOptionList(document.frmMain.Podvrste, "Omlet sa šunkom u somunu", "Omlet sa šunkom u somunu");
	  AddToOptionList(document.frmMain.Podvrste, "Omlet sa sirom u somunu", "Omlet sa sirom u somunu");
	  AddToOptionList(document.frmMain.Podvrste, "Omlet sa slaninom u somunu", "Omlet sa slaninom u somunu");
	  AddToOptionList(document.frmMain.Podvrste, "Barbara omlet u somunu", "Barbara omlet u somunu");
	  AddToOptionList(document.frmMain.Podvrste, "Mexico omlet u somunu", "Mexico omlet u somunu");
	  AddToOptionList(document.frmMain.Podvrste, "Stevina vratolomija u somunu", "Stevina vratolomija u somunu");
	  AddToOptionList(document.frmMain.Podvrste, "Chicken Nuggets u somunu", "Chicken Nuggets u somunu");
	  AddToOptionList(document.frmMain.Podvrste, "Cheese Chicken Nuggets u somunu", "Cheese Chicken Nuggets u somunu");
	  AddToOptionList(document.frmMain.Podvrste, "Index sendvič u somunu", "Index sendvič u somunu");
	  AddToOptionList(document.frmMain.Podvrste, "2 kroasana + esspreso", "2 kroasana + esspreso");
	  addTooltip();
   }
   
   if (VrsteList[VrsteList.selectedIndex].value == "Chicken Meni") {
      AddToOptionList(document.frmMain.Podvrste, "Pileća krilca", "Pileća krilca");
      AddToOptionList(document.frmMain.Podvrste, "Chicken Nnuggets Meni", "Chicken Nnuggets Meni");
	  AddToOptionList(document.frmMain.Podvrste, "Cheese Chicken Nnuggets Meni", "Cheese Chicken Nnuggets Meni");
	  AddToOptionList(document.frmMain.Podvrste, "Cheese Chicken Burger", "Cheese Chicken Burger");
	  AddToOptionList(document.frmMain.Podvrste, "Chicken Burger", "Chicken Burger");
	  AddToOptionList(document.frmMain.Podvrste, "Cheese Chicken Nuggets", "Cheese Chicken Nuggets");
	  AddToOptionList(document.frmMain.Podvrste, "Chicken Bacon Nuggets", "Chicken Bacon Nuggets");
	  AddToOptionList(document.frmMain.Podvrste, "Chicken Onion Nuggets", "Chicken Onion Nuggets");
	  AddToOptionList(document.frmMain.Podvrste, "Punjeni batak u somunu", "Punjeni batak u somunu");
	  AddToOptionList(document.frmMain.Podvrste, "Batak u somunu", "Batak u somunu");
	  AddToOptionList(document.frmMain.Podvrste, "Desperado Chicken Nuggets", "Desperado Chicken Nuggets");
	  AddToOptionList(document.frmMain.Podvrste, "Chicken obrok meni", "Chicken obrok meni");
	  AddToOptionList(document.frmMain.Podvrste, "Chicken Fingers", "Chicken Fingers");
	  AddToOptionList(document.frmMain.Podvrste, "Cheese Chicken Fingers", "Cheese Chicken Fingers");
	  AddToOptionList(document.frmMain.Podvrste, "Desperado Chicken Fingers", "Desperado Chicken Fingers");
	  addTooltip();
   }
   
   if (VrsteList[VrsteList.selectedIndex].value == "Posebna Ponuda") {
      AddToOptionList(document.frmMain.Podvrste, "Mali index + kola", "Mali index + kola");
	  AddToOptionList(document.frmMain.Podvrste, "Veliki index + kola", "Veliki index + kola");
	  AddToOptionList(document.frmMain.Podvrste, "Giros obrok meni + kola", "Giros obrok meni + kola");
      AddToOptionList(document.frmMain.Podvrste, "Barbarina trojka", "Barbarina trojka");
      AddToOptionList(document.frmMain.Podvrste, "Barbara Ćevap meni", "Barbara Ćevap meni");
	  AddToOptionList(document.frmMain.Podvrste, "Barbara Nuggets", "Barbara Nuggets");
	  AddToOptionList(document.frmMain.Podvrste, "Barbara Bacon Nuggets", "Barbara Bacon Nuggets");
	  AddToOptionList(document.frmMain.Podvrste, "Barbara Onion Nuggets", "Barbara Onion Nuggets");
	  addTooltip();
   }
   
   if (VrsteList[VrsteList.selectedIndex].value == "Salate") {
      AddToOptionList(document.frmMain.Podvrste, "Barbara Salata", "Barbara Salata");
	  AddToOptionList(document.frmMain.Podvrste, "Meksička Salata", "Meksička Salata");
	  AddToOptionList(document.frmMain.Podvrste, "Mediteranska Salata", "Mediteranska Salata");
      AddToOptionList(document.frmMain.Podvrste, "Kineska Salata", "Kineska Salata");
      AddToOptionList(document.frmMain.Podvrste, "Grčka Salata", "Grčka Salata");
	  AddToOptionList(document.frmMain.Podvrste, "Šefe koj ti je vrag", "Šefe koj ti je vrag");
	  AddToOptionList(document.frmMain.Podvrste, "Segreto", "Segreto");
	  addTooltip();
   }
   
   if (VrsteList[VrsteList.selectedIndex].value == "A La Carte") {
      AddToOptionList(document.frmMain.Podvrste, "Karadjordjeva šnicla", "Karadjordjeva šnicla");
	  AddToOptionList(document.frmMain.Podvrste, "Karadjordjeva sa dim sirom", "Karadjordjeva sa dim sirom");
	  AddToOptionList(document.frmMain.Podvrste, "Bečka šnicla", "Bečka šnicla");
      AddToOptionList(document.frmMain.Podvrste, "Pileće grudi-susam", "Pileće grudi-susam");
      AddToOptionList(document.frmMain.Podvrste, "Pohovani kačkavalj", "Pohovani kačkavalj");
	  AddToOptionList(document.frmMain.Podvrste, "Barbara posni tanjir", "Barbara posni tanjir");
	  AddToOptionList(document.frmMain.Podvrste, "Mešano meso", "Mešano meso");
	  AddToOptionList(document.frmMain.Podvrste, "Pljeskavica porcija", "Pljeskavica porcija");
	  AddToOptionList(document.frmMain.Podvrste, "Ćevapi porcija", "Ćevapi porcija");
	  AddToOptionList(document.frmMain.Podvrste, "Krmenadla porcija", "Krmenadla porcija");
	  AddToOptionList(document.frmMain.Podvrste, "Pileći stek", "Pileći stek");
	  AddToOptionList(document.frmMain.Podvrste, "Bela vešalica", "Bela vešalica");
	  AddToOptionList(document.frmMain.Podvrste, "Punjena bela vešalica", "Punjena bela vešalica");
	  AddToOptionList(document.frmMain.Podvrste, "Barbara stek", "Barbara stek");
	  AddToOptionList(document.frmMain.Podvrste, "Barbara mućkalica", "Barbara mućkalica");
	  AddToOptionList(document.frmMain.Podvrste, "Barbara grill meni", "Barbara grill meni");
	  AddToOptionList(document.frmMain.Podvrste, "Barbara miks", "Barbara miks");
	  AddToOptionList(document.frmMain.Podvrste, "Kupus salata", "Kupus salata");
	  AddToOptionList(document.frmMain.Podvrste, "Paradajz salata", "Paradajz salata");
	  AddToOptionList(document.frmMain.Podvrste, "Šopska salata", "Šopska salata");
	  AddToOptionList(document.frmMain.Podvrste, "Srpska salata", "Srpska salata");
	  AddToOptionList(document.frmMain.Podvrste, "Turšija", "Turšija");
	  AddToOptionList(document.frmMain.Podvrste, "Ljuta paprika", "Ljuta paprika");
	  AddToOptionList(document.frmMain.Podvrste, "Hleb", "Hleb");
	  AddToOptionList(document.frmMain.Podvrste, "Meksiko stek", "Meksiko stek");
	  AddToOptionList(document.frmMain.Podvrste, "Ćevap u vratu", "Ćevap u vratu");
	  AddToOptionList(document.frmMain.Podvrste, "Karadjordjeva gigant", "Karadjordjeva gigant");
	  AddToOptionList(document.frmMain.Podvrste, "Karadjordjeva gigant-dim sir", "Karadjordjeva gigant-dim sir");  
	  addTooltip();
   }
}


function ClearOptions(OptionList) {

   // Always clear an option list from the last entry to the first
   for (x = OptionList.length; x >= 0; x--) {
      OptionList[x] = null;
   }
}


function AddToOptionList(OptionList, OptionValue, OptionText) {
   // Add option to the bottom of the list
   OptionList[OptionList.length] = new Option(OptionText, OptionValue);
}

function PopulateVelicine(){

   var PodvrsteList = document.frmMain.Podvrste;
   PodvrsteName = PodvrsteList.options[PodvrsteList.selectedIndex].text;
   var PodvrsteArray = PodvrsteList[PodvrsteList.selectedIndex].value;
   ClearOptions(document.frmMain.Velicina);
   var SoseviList = document.frmMain.Sosevi;
   
   ClearOptions(document.frmMain.Velicina);
   ClearOptions(document.frmMain.Sosevi);
   
   //Pice
   if ((PodvrsteArray == "Madjarica" ) || (PodvrsteArray == "Kaprićoza" )|| (PodvrsteArray == "Mediteraneo" )||
   (PodvrsteArray == "Barbara" )|| (PodvrsteArray == "Barbara Deluxe" )|| (PodvrsteArray == "Posna" )|| (PodvrsteArray == "Vegetarijana" )){
      AddToOptionList(document.frmMain.Velicina, "Mala", "Mala");
      AddToOptionList(document.frmMain.Velicina, "Velika", "Velika");
	  AddToOptionList(document.frmMain.Velicina, "Za ekipu", "Za ekipu");
	  populateSosevi();
   }
   if(PodvrsteArray == "Barbara" )
   {
		AddToOptionList(SoseviList, "Pelat", "Pelat");
		AddToOptionList(SoseviList, "Pavlaka", "Pavlaka");
		AddToOptionList(SoseviList, "Čili", "Čili");
		AddToOptionList(SoseviList, "Susam", "Susam");
		AddToOptionList(SoseviList, "Beli Luk", "Beli Luk");
		AddToOptionList(SoseviList, "Šunka", "Šunka");
		AddToOptionList(SoseviList, "Suvi vrat", "Suvi vrat");
		AddToOptionList(SoseviList, "Pečenica", "Pečenica");
		AddToOptionList(SoseviList, "Kulen", "Kulen");
		AddToOptionList(SoseviList, "Sir", "Sir");
		AddToOptionList(SoseviList, "Šampinjoni", "Šampinjoni");
		AddToOptionList(SoseviList, "Paprika", "Paprika");
		AddToOptionList(SoseviList, "Paradajz", "Paradajz");
		AddToOptionList(SoseviList, "Kukuruz", "Kukuruz");
		AddToOptionList(SoseviList, "Bosiljak", "Bosiljak");
		AddToOptionList(SoseviList, "Origano", "Origano");
		addTooltip();
   }
   //Barbarina dnevna trpeza
   if ((PodvrsteArray == "Supa/Čorba" ) || (PodvrsteArray == "Barbara gril meni" )|| (PodvrsteArray == "Gulaš" )||
   (PodvrsteArray == "Musaka" )|| (PodvrsteArray == "Pasulj sa suvium mesom" )|| (PodvrsteArray == "Pileća pljeskavica" )|| 
   (PodvrsteArray == "Natur šnicla" )|| (PodvrsteArray == "Faširana šnicla" )|| (PodvrsteArray == "Roštilj kobasica" )||
   (PodvrsteArray == "Karadjordjeva šnicla" )|| (PodvrsteArray == "Pileći paprikaš" )|| (PodvrsteArray == "Pomfrit" )|| (PodvrsteArray == "Grilovani batak" ))
   {
       AddToOptionList(document.frmMain.Velicina, "Standard", "Standard");
   }
   //Slane Palacinke
   if ((PodvrsteArray == "Pizza Palačinka" ) || (PodvrsteArray == "Mediteranska Palačinka" )|| (PodvrsteArray == "Vegetarijano Palačinka" )||
   (PodvrsteArray == "Lalina Palačinka" )|| (PodvrsteArray == "Stevina Vratolomija Palačinka" )|| (PodvrsteArray == "Prolećna Palačinka" )|| 
   (PodvrsteArray == "Mexico Palačinka" )|| (PodvrsteArray == "Tatarska Palačinka" )|| (PodvrsteArray == "Barbara 1 Palačinka" )||
   (PodvrsteArray == "Barbara 2 Palačinka" )|| (PodvrsteArray == "Integralna Palačinka" )){     
	  AddToOptionList(document.frmMain.Velicina, "Classic", "Classic");
      AddToOptionList(document.frmMain.Velicina, "Double", "Double");
	  AddToOptionList(document.frmMain.Velicina, "Za ekipu", "Za ekipu");  
   }
	  
   //Slatke Palacinke  
   if ((PodvrsteArray == "Kinder Palačinka" ) || (PodvrsteArray == "Rafaelo Palačinka" )|| (PodvrsteArray == "Bonžita Palačinka" )||
   (PodvrsteArray == "Bakina Palačinka" )|| (PodvrsteArray == "Dečija radost Palačinka" )|| (PodvrsteArray == "Snikers Palačinka" )|| 
   (PodvrsteArray == "Bananeros Palačinka" )|| (PodvrsteArray == "Šašava Palačinka" )|| (PodvrsteArray == "Barbara Palačinka" )||
   (PodvrsteArray == "Sezonska Palačinka" )){     
	  AddToOptionList(document.frmMain.Velicina, "Classic", "Classic");
      AddToOptionList(document.frmMain.Velicina, "Double", "Double");
	  AddToOptionList(document.frmMain.Velicina, "Za ekipu", "Za ekipu"); 
   }
   
   //Sendvici i rostilj      
   if ((PodvrsteArray == "Index sendvič" ) || (PodvrsteArray == "Dimljeni index sendvič" )|| (PodvrsteArray == "Sendvič piletina" )||
   (PodvrsteArray == "Sendvič punjena piletina" )|| (PodvrsteArray == "Stevina vratolomija sendvič" )|| (PodvrsteArray == "Lalin sendvič" )|| 
   (PodvrsteArray == "Vegetarijano sendvič" )|| (PodvrsteArray == "Pecenica sendvič" )|| (PodvrsteArray == "Suvi vrat sendvič" )||
   (PodvrsteArray == "Kulen sendvič" )|| (PodvrsteArray == "Tunjevina sendvič" )){     
	  AddToOptionList(document.frmMain.Velicina, "Mali", "Mali");
      AddToOptionList(document.frmMain.Velicina, "Veliki", "Veliki"); 
   }
   
   if ((PodvrsteArray == "Pljeskavica u lepinji" ) || (PodvrsteArray == "Punjena pljeskavica u lepinji" )|| (PodvrsteArray == "Špikovana pljeskavica u lepinji" )||
   (PodvrsteArray == "Ćevapi u lepinji" )|| (PodvrsteArray == "Pileće belo meso" )|| (PodvrsteArray == "Bečka šnicla u lepinji" )){
		AddToOptionList(document.frmMain.Velicina, "Standard", "Standard");
   }
   
   //Ciken meni
   if ((PodvrsteArray == "Pileća krilca" ) || (PodvrsteArray == "Chicken Nnuggets Meni" )|| (PodvrsteArray == "Cheese Chicken Nnuggets Meni" )||
   (PodvrsteArray == "Cheese Chicken Burger" )||(PodvrsteArray == "Chicken Bacon Nuggets" )|| (PodvrsteArray == "Chicken Onion Nuggets" ) || (PodvrsteArray == "Desperado Chicken Nuggets" )||
   (PodvrsteArray == "Chicken Fingers" )|| (PodvrsteArray == "Cheese Chicken Fingers" )||(PodvrsteArray == "Desperado Chicken Fingers" )){
      AddToOptionList(document.frmMain.Velicina, "Mala", "Mala");
      AddToOptionList(document.frmMain.Velicina, "Velika", "Velika");
	  AddToOptionList(document.frmMain.Velicina, "Za ekipu", "Za ekipu");
	  populateSosevi();
   }
   if((PodvrsteArray == "Chicken obrok meni" )||(PodvrsteArray == "Batak u somunu" )||(PodvrsteArray == "Punjeni batak u somunu" )){
		AddToOptionList(document.frmMain.Velicina, "Standard", "Standard");
		populateSosevi();
   }
   if((PodvrsteArray == "Chicken Burger" )|| (PodvrsteArray == "Cheese Chicken Nuggets" )){
      AddToOptionList(document.frmMain.Velicina, "Mala", "Mala");
      AddToOptionList(document.frmMain.Velicina, "Velika", "Velika");
	  populateSosevi();
   }
   //Posebna Ponuda
   if ((PodvrsteArray == "Giros obrok meni + kola" ) || (PodvrsteArray == "Barbara Nuggets" )|| (PodvrsteArray == "Barbara Bacon Nuggets" )||
   (PodvrsteArray == "Barbara Onion Nuggets" )){
      AddToOptionList(document.frmMain.Velicina, "Mala", "Mala");
      AddToOptionList(document.frmMain.Velicina, "Velika", "Velika");
	  AddToOptionList(document.frmMain.Velicina, "Za ekipu", "Za ekipu");
   }
   if((PodvrsteArray == "Mali index + kola" ) || (PodvrsteArray == "Veliki index + kola" ) || (PodvrsteArray == "Barbarina trojka" ) || (PodvrsteArray == "Barbara Ćevap meni" )){
	  AddToOptionList(document.frmMain.Velicina, "Standard", "Standard");
   }
   
   //Salate
   if ((PodvrsteArray == "Barbara Salata" ) || (PodvrsteArray == "Meksička Salata" )|| (PodvrsteArray == "Mediteranska Salata" )||
   (PodvrsteArray == "Kineska Salata" )|| (PodvrsteArray == "Grčka Salata" )|| (PodvrsteArray == "Šefe koj ti je vrag" )|| (PodvrsteArray == "Segreto" )){
      AddToOptionList(document.frmMain.Velicina, "Standard", "Standard");
   }
   
   // dobro jutro sa barbarom
    if (PodvrsteArray == "Omlet u somunu"){
	   document.frmMain.Cena.value = "140";	
	   enableDodajButton();
	}
	if (PodvrsteArray == "Omlet sa šunkom u somunu"){
	   document.frmMain.Cena.value = "150";
	   enableDodajButton();	   
	}
	if (PodvrsteArray == "Omlet sa sirom u somunu"){
	   document.frmMain.Cena.value = "150";	
	   enableDodajButton();
	}
	if (PodvrsteArray == "Omlet sa slaninom u somunu"){
	   document.frmMain.Cena.value = "150";	
	   enableDodajButton();
	}
	if (PodvrsteArray == "Barbara omlet u somunu"){
	   document.frmMain.Cena.value = "170";	
	   enableDodajButton();
	}
	if (PodvrsteArray == "Mexico omlet u somunu"){
	   document.frmMain.Cena.value = "170";	
	   enableDodajButton();
	}
	if (PodvrsteArray == "Stevina vratolomija u somunu"){
	   document.frmMain.Cena.value = "190";	
	   enableDodajButton();
	}
	if (PodvrsteArray == "Chicken Nuggets u somunu"){
	   document.frmMain.Cena.value = "230";	
	   enableDodajButton();
	}
	if (PodvrsteArray == "Cheese Chicken Nuggets u somunu"){
	   document.frmMain.Cena.value = "230";	
	   enableDodajButton();
	}
	if (PodvrsteArray == "Index sendvič u somunu"){
	   document.frmMain.Cena.value = "160";	
	   enableDodajButton();
	}
	if (PodvrsteArray == "2 Kroasana + esspreso"){
	   document.frmMain.Cena.value = "150";	
	   enableDodajButton();
	}
	//a la carte
	if (PodvrsteArray == "Karadjordjeva šnicla"){
		document.frmMain.Cena.value = "380";		
		enableDodajButton();
	}
	if (PodvrsteArray == "Karadjordjeva sa dim sirom"){
		document.frmMain.Cena.value = "450";		
		enableDodajButton();
	}
		if (PodvrsteArray == "Bečka šnicla"){
			document.frmMain.Cena.value = "320";		
			enableDodajButton();
		}
	if (PodvrsteArray == "Pileće grudi-susam"){
		document.frmMain.Cena.value = "350";		
		enableDodajButton();
	}if (PodvrsteArray == "Pohovani kačkavalj"){
		document.frmMain.Cena.value = "310";		
		enableDodajButton();
	}
	if (PodvrsteArray == "Barbara posni tanjir"){
		document.frmMain.Cena.value = "260";		
		enableDodajButton();
	}
	if (PodvrsteArray == "Mešano meso"){
		document.frmMain.Cena.value = "640";		
		enableDodajButton();
	}
	if (PodvrsteArray == "Pljeskavica porcija"){
		document.frmMain.Cena.value = "290";		
		enableDodajButton();
	}
	if (PodvrsteArray == "Ćevapi porcija"){
		document.frmMain.Cena.value = "300";		
		enableDodajButton();
	}
	if (PodvrsteArray == "Krmenadla porcija"){
		document.frmMain.Cena.value = "320";		
		enableDodajButton();
	}
	if (PodvrsteArray == "Pileći stek"){
		document.frmMain.Cena.value = "450";		
		enableDodajButton();
	}
	if (PodvrsteArray == "Bela vešalica"){
		document.frmMain.Cena.value = "370";		
		enableDodajButton();
	}
	if (PodvrsteArray == "Punjena bela vešalica"){
		document.frmMain.Cena.value = "430";		
		enableDodajButton();
	}
	if (PodvrsteArray == "Barbara stek"){
		document.frmMain.Cena.value = "450";		
		enableDodajButton();
	}
	if (PodvrsteArray == "Barbara mućkalica"){
		document.frmMain.Cena.value = "270";		
		enableDodajButton();
	}
	if (PodvrsteArray == "Barbara grill meni"){
		document.frmMain.Cena.value = "360";		
		enableDodajButton();
	}
	if (PodvrsteArray == "Barbara miks"){
		document.frmMain.Cena.value = "800";		
		enableDodajButton();
	}
	if (PodvrsteArray == "Kupus salata"){
		document.frmMain.Cena.value = "90";		
		enableDodajButton();
	}
	if (PodvrsteArray == "Paradajz salata"){
		document.frmMain.Cena.value = "120";		
		enableDodajButton();
	}
	if (PodvrsteArray == "Šopska salata"){
		document.frmMain.Cena.value = "120";		
		enableDodajButton();
	}
	if (PodvrsteArray == "Srpska salata"){
		document.frmMain.Cena.value = "100";		
		enableDodajButton();
	}
	if (PodvrsteArray == "Turšija"){
		document.frmMain.Cena.value = "120";		
		enableDodajButton();
	}
	if (PodvrsteArray == "Ljuta paprika"){
		document.frmMain.Cena.value = "30";		
		enableDodajButton();
	}
	if (PodvrsteArray == "Hleb"){
		document.frmMain.Cena.value = "10";		
		enableDodajButton();
	}
	if (PodvrsteArray == "Meksiko stek"){
		document.frmMain.Cena.value = "520";		
		enableDodajButton();
	}
	if (PodvrsteArray == "Ćevap u vratu"){
		document.frmMain.Cena.value = "550";		
		enableDodajButton();
	}
	if (PodvrsteArray == "Karadjordjeva gigant"){
		document.frmMain.Cena.value = "590";		
		enableDodajButton();
	}
	if (PodvrsteArray == "Karadjordjeva gigant-dim sir"){
		document.frmMain.Cena.value = "690";		
		enableDodajButton();
	}	
}

function enableCheckboxes(){
    if (document.frmMain.Vrste[document.frmMain.Vrste.selectedIndex].value == "Sendvici i Rostilj"){
        for(j=0;j<document.frmMain.checkgroup.length;j++){
           document.frmMain.checkgroup[j].disabled = false ;
		}
    }else{
		for(j=0;j<document.frmMain.checkgroup.length;j++){
           document.frmMain.checkgroup[j].disabled = true ;
		}
	}
}

function PopulateCena(){

	var CenaField = document.frmMain.Cena;	
    var VelicineList = document.frmMain.Velicina;
    VelicineName = VelicineList.options[VelicineList.selectedIndex].text;
	var VrsteArray = document.frmMain.Vrste[document.frmMain.Vrste.selectedIndex].value;
	PodvrsteArray = document.frmMain.Podvrste[document.frmMain.Podvrste.selectedIndex].value;
	var VelicinaArray = document.frmMain.Velicina[document.frmMain.Velicina.selectedIndex].value;
	
	// Pice
	if (PodvrsteArray == "Madjarica"){
	    if (VelicinaArray == "Mala" )
		   document.frmMain.Cena.value = "260";
		
		if (VelicinaArray == "Velika" )
		   document.frmMain.Cena.value = "490";

	    if (VelicinaArray == "Za ekipu" )
		   document.frmMain.Cena.value = "790";
		enableDodajButton();
	} 	
	if (PodvrsteArray == "Kaprićoza"){
	    if (VelicinaArray == "Mala" )
		   document.frmMain.Cena.value = "240";
		
		if (VelicinaArray == "Velika" )
		   document.frmMain.Cena.value = "460";

	    if (VelicinaArray == "Za ekipu" )
		   document.frmMain.Cena.value = "760";
		enableDodajButton();
	}
	if (PodvrsteArray == "Kaprićoza sa dimljenim sirom"){
	    if (VelicinaArray == "Mala" )
		   document.frmMain.Cena.value = "260";
		
		if (VelicinaArray == "Velika" )
		   document.frmMain.Cena.value = "500";

	    if (VelicinaArray == "Za ekipu" )
		   document.frmMain.Cena.value = "790";
		enableDodajButton();
	}	
	if (PodvrsteArray == "Mediteraneo"){
	    if (VelicinaArray == "Mala" )
		   document.frmMain.Cena.value = "290";
		
		if (VelicinaArray == "Velika" )
		   document.frmMain.Cena.value = "550";

	    if (VelicinaArray == "Za ekipu" )
		   document.frmMain.Cena.value = "820";
		enableDodajButton();
	}
	if (PodvrsteArray == "Barbara"){
	    if (VelicinaArray == "Mala" )
		   document.frmMain.Cena.value = "250";
		
		if (VelicinaArray == "Velika" )
		   document.frmMain.Cena.value = "560";

	    if (VelicinaArray == "Za ekipu" )
		   document.frmMain.Cena.value = "860";
		enableDodajButton();
	}
	if (PodvrsteArray == "Barbara Deluxe"){
	    if (VelicinaArray == "Mala" )
		   document.frmMain.Cena.value = "270";
		
		if (VelicinaArray == "Velika" )
		   document.frmMain.Cena.value = "540";

	    if (VelicinaArray == "Za ekipu" )
		   document.frmMain.Cena.value = "890";
		enableDodajButton();
	}
	if (PodvrsteArray == "Posna"){
	    if (VelicinaArray == "Mala" )
		   document.frmMain.Cena.value = "220";
		
		if (VelicinaArray == "Velika" )
		   document.frmMain.Cena.value = "430";

	    if (VelicinaArray == "Za ekipu" )
		   document.frmMain.Cena.value = "750";
		enableDodajButton();
	}
    if (PodvrsteArray == "Vegetarijana"){
	    if (VelicinaArray == "Mala" )
		   document.frmMain.Cena.value = "230";
		
		if (VelicinaArray == "Velika" )
		   document.frmMain.Cena.value = "440";

	    if (VelicinaArray == "Za ekipu" )
		   document.frmMain.Cena.value = "750";
		enableDodajButton();
	}
	if (PodvrsteArray == "Barbara calzone"){
	    if (VelicinaArray == "Mala" )
		   document.frmMain.Cena.value = "300";
		
		if (VelicinaArray == "Velika" )
		   document.frmMain.Cena.value = "600";

	    if (VelicinaArray == "Za ekipu" )
		   document.frmMain.Cena.value = "900";
		enableDodajButton();
	}
	if (PodvrsteArray == "Calzone classic"){
	    if (VelicinaArray == "Mala" )
		   document.frmMain.Cena.value = "280";
		
		if (VelicinaArray == "Velika" )
		   document.frmMain.Cena.value = "550";

	    if (VelicinaArray == "Za ekipu" )
		   document.frmMain.Cena.value = "850";
		enableDodajButton();
	}
	if (PodvrsteArray == "Calzone peperoni"){
	    if (VelicinaArray == "Mala" )
		   document.frmMain.Cena.value = "300";
		
		if (VelicinaArray == "Velika" )
		   document.frmMain.Cena.value = "600";

	    if (VelicinaArray == "Za ekipu" )
		   document.frmMain.Cena.value = "900";
		enableDodajButton();
	}
	if (PodvrsteArray == "Deluxe Calzone"){
	    if (VelicinaArray == "Mala" )
		   document.frmMain.Cena.value = "300";
		
		if (VelicinaArray == "Velika" )
		   document.frmMain.Cena.value = "600";

	    if (VelicinaArray == "Za ekipu" )
		   document.frmMain.Cena.value = "900";
		enableDodajButton();
	}
	
	//Barbarina trpeza
	
	if(PodvrsteArray == "Supa/Čorba"){
		document.frmMain.Cena.value = "80";
		enableDodajButton();
	}
	if (PodvrsteArray == "Barbara gril meni"){
		document.frmMain.Cena.value = "360";
		enableDodajButton();
	}
	if (PodvrsteArray == "Gulaš"){
		document.frmMain.Cena.value = "320";
		enableDodajButton();
	}
	if (PodvrsteArray == "Musaka"){
		document.frmMain.Cena.value = "320";
		enableDodajButton();
	}
	if (PodvrsteArray == "Pasulj sa suvium mesom"){
		document.frmMain.Cena.value = "320";
		enableDodajButton();
	}
	if (PodvrsteArray == "Pileća pljeskavica"){
		document.frmMain.Cena.value = "320";
		enableDodajButton();
	}
	if (PodvrsteArray == "Natur šnicla"){
		document.frmMain.Cena.value = "320";
		enableDodajButton();
	}
	if (PodvrsteArray == "Faširana šnicla"){
		document.frmMain.Cena.value = "320";
		enableDodajButton();
	}
	if (PodvrsteArray == "Roštilj kobasica"){
		document.frmMain.Cena.value = "320";
		enableDodajButton();
	}
	if (PodvrsteArray == "Karadjordjeva šnicla"){
		document.frmMain.Cena.value = "320";
		enableDodajButton();
	}
	if (PodvrsteArray == "Pileći paprikaš"){
		document.frmMain.Cena.value = "320";
		enableDodajButton();
	}
	if (PodvrsteArray == "Pomfrit"){
		document.frmMain.Cena.value = "100";
		enableDodajButton();
	}
	
	//Slane Palacinke
	
	if (PodvrsteArray == "Pizza Palačinka"){
	    if (VelicinaArray == "Classic" )
		   document.frmMain.Cena.value = "170";
		
		if (VelicinaArray == "Double" )
		   document.frmMain.Cena.value = "330";

	    if (VelicinaArray == "Za ekipu" )
		   document.frmMain.Cena.value = "480";
		enableDodajButton();
	}
	if (PodvrsteArray == "Mediteranska Palačinka"){
	    if (VelicinaArray == "Classic" )
		   document.frmMain.Cena.value = "170";
		
		if (VelicinaArray == "Double" )
		   document.frmMain.Cena.value = "330";

	    if (VelicinaArray == "Za ekipu" )
		   document.frmMain.Cena.value = "480";
		enableDodajButton();
	}
	if (PodvrsteArray == "Vegetarijano Palačinka"){
	    if (VelicinaArray == "Classic" )
		   document.frmMain.Cena.value = "150";
		
		if (VelicinaArray == "Double" )
		   document.frmMain.Cena.value = "290";

	    if (VelicinaArray == "Za ekipu" )
		   document.frmMain.Cena.value = "420";
		enableDodajButton();
	}
	if (PodvrsteArray == "Lalina Palačinka"){
	    if (VelicinaArray == "Classic" )
		   document.frmMain.Cena.value = "170";
		
		if (VelicinaArray == "Double" )
		   document.frmMain.Cena.value = "330";

	    if (VelicinaArray == "Za ekipu" )
		   document.frmMain.Cena.value = "480";
		enableDodajButton();
	}
	if (PodvrsteArray == "Stevina Vratolomija Palačinka"){
	    if (VelicinaArray == "Classic" )
		   document.frmMain.Cena.value = "170";
		
		if (VelicinaArray == "Double" )
		   document.frmMain.Cena.value = "330";

	    if (VelicinaArray == "Za ekipu" )
		   document.frmMain.Cena.value = "480";
		enableDodajButton();
	}
	if (PodvrsteArray == "Prolećna Palačinka"){
	    if (VelicinaArray == "Classic" )
		   document.frmMain.Cena.value = "170";
		
		if (VelicinaArray == "Double" )
		   document.frmMain.Cena.value = "330";

	    if (VelicinaArray == "Za ekipu" )
		   document.frmMain.Cena.value = "480";
		enableDodajButton();
	}
	if (PodvrsteArray == "Mexico Palačinka"){
	    if (VelicinaArray == "Classic" )
		   document.frmMain.Cena.value = "170";
		
		if (VelicinaArray == "Double" )
		   document.frmMain.Cena.value = "330";

	    if (VelicinaArray == "Za ekipu" )
		   document.frmMain.Cena.value = "480";
		enableDodajButton();
	}
	if (PodvrsteArray == "Tatarska Palačinka"){
	    if (VelicinaArray == "Classic" )
		   document.frmMain.Cena.value = "170";
		
		if (VelicinaArray == "Double" )
		   document.frmMain.Cena.value = "330";

	    if (VelicinaArray == "Za ekipu" )
		   document.frmMain.Cena.value = "480";
		enableDodajButton();
	}
	if (PodvrsteArray == "Barbara 1 Palačinka"){
	    if (VelicinaArray == "Classic" )
		   document.frmMain.Cena.value = "180";
		
		if (VelicinaArray == "Double" )
		   document.frmMain.Cena.value = "350";

	    if (VelicinaArray == "Za ekipu" )
		   document.frmMain.Cena.value = "500";
		enableDodajButton();
	}
	if (PodvrsteArray == "Barbara 2 Palačinka"){
	    if (VelicinaArray == "Classic" )
		   document.frmMain.Cena.value = "180";
		
		if (VelicinaArray == "Double" )
		   document.frmMain.Cena.value = "350";

	    if (VelicinaArray == "Za ekipu" )
		   document.frmMain.Cena.value = "500";
		enableDodajButton();
	}
	if (PodvrsteArray == "Integralna Palačinka"){
	    if (VelicinaArray == "Classic" )
		   document.frmMain.Cena.value = "180";
		
		if (VelicinaArray == "Double" )
		   document.frmMain.Cena.value = "350";

	    if (VelicinaArray == "Za ekipu" )
		   document.frmMain.Cena.value = "500";
		enableDodajButton();
	}

//Slatke palacinke

	if (PodvrsteArray == "Kinder Palačinka"){
	    if (VelicinaArray == "Classic" )
		   document.frmMain.Cena.value = "160";
		
		if (VelicinaArray == "Double" )
		   document.frmMain.Cena.value = "310";

	    if (VelicinaArray == "Za ekipu" )
		   document.frmMain.Cena.value = "450";
		enableDodajButton();
	}
	if (PodvrsteArray == "Rafaelo Palačinka"){
	    if (VelicinaArray == "Classic" )
		   document.frmMain.Cena.value = "170";
		
		if (VelicinaArray == "Double" )
		   document.frmMain.Cena.value = "330";

	    if (VelicinaArray == "Za ekipu" )
		   document.frmMain.Cena.value = "480";
		enableDodajButton();
	}
	if (PodvrsteArray == "Bonžita Palačinka"){
	    if (VelicinaArray == "Classic" )
		   document.frmMain.Cena.value = "160";
		
		if (VelicinaArray == "Double" )
		   document.frmMain.Cena.value = "310";

	    if (VelicinaArray == "Za ekipu" )
		   document.frmMain.Cena.value = "450";
		enableDodajButton();
	}
	if (PodvrsteArray == "Bakina Palačinka"){
	    if (VelicinaArray == "Classic" )
		   document.frmMain.Cena.value = "140";
		
		if (VelicinaArray == "Double" )
		   document.frmMain.Cena.value = "270";

	    if (VelicinaArray == "Za ekipu" )
		   document.frmMain.Cena.value = "400";
		enableDodajButton();
	}
	if (PodvrsteArray == "Dečija radost Palačinka"){
	    if (VelicinaArray == "Classic" )
		   document.frmMain.Cena.value = "150";
		
		if (VelicinaArray == "Double" )
		   document.frmMain.Cena.value = "280";

	    if (VelicinaArray == "Za ekipu" )
		   document.frmMain.Cena.value = "420";
		enableDodajButton();
	}
	if (PodvrsteArray == "Snikers Palačinka"){
	    if (VelicinaArray == "Classic" )
		   document.frmMain.Cena.value = "170";
		
		if (VelicinaArray == "Double" )
		   document.frmMain.Cena.value = "330";

	    if (VelicinaArray == "Za ekipu" )
		   document.frmMain.Cena.value = "480";
		enableDodajButton();
	}
	if (PodvrsteArray == "Bananeros Palačinka"){
	    if (VelicinaArray == "Classic" )
		   document.frmMain.Cena.value = "170";
		
		if (VelicinaArray == "Double" )
		   document.frmMain.Cena.value = "330";

	    if (VelicinaArray == "Za ekipu" )
		   document.frmMain.Cena.value = "480";
		enableDodajButton();
	}
	if (PodvrsteArray == "Šašava Palačinka"){
	    if (VelicinaArray == "Classic" )
		   document.frmMain.Cena.value = "150";
		
		if (VelicinaArray == "Double" )
		   document.frmMain.Cena.value = "280";

	    if (VelicinaArray == "Za ekipu" )
		   document.frmMain.Cena.value = "420";
		enableDodajButton();
	}
	if (PodvrsteArray == "Barbara Palačinka"){
	    if (VelicinaArray == "Classic" )
		   document.frmMain.Cena.value = "170";
		
		if (VelicinaArray == "Double" )
		   document.frmMain.Cena.value = "330";

	    if (VelicinaArray == "Za ekipu" )
		   document.frmMain.Cena.value = "480";
		enableDodajButton();
	}
	if (PodvrsteArray == "Sezonska Palačinka"){
	    if (VelicinaArray == "Classic" )
		   document.frmMain.Cena.value = "160";
		
		if (VelicinaArray == "Double" )
		   document.frmMain.Cena.value = "310";

	    if (VelicinaArray == "Za ekipu" )
		   document.frmMain.Cena.value = "450";
		enableDodajButton();
	}

// Sendvici i rostilj

	if (PodvrsteArray == "Index"){
	    if (VelicinaArray == "Mali" )
		   document.frmMain.Cena.value = "150";
		
		if (VelicinaArray == "Veliki" )
		   document.frmMain.Cena.value = "200";
		enableDodajButton();
	}
	if (PodvrsteArray == "Index sendvič"){
	    if (VelicinaArray == "Mali" )
		   document.frmMain.Cena.value = "160";
		
		if (VelicinaArray == "Veliki" )
		   document.frmMain.Cena.value = "310";
		enableDodajButton();
	}
	if (PodvrsteArray == "Dimljeni index sendvič"){
	    if (VelicinaArray == "Mali" )
		   document.frmMain.Cena.value = "170";
		
		if (VelicinaArray == "Veliki" )
		   document.frmMain.Cena.value = "220";
		enableDodajButton();
	}
	if (PodvrsteArray == "Sendvič piletina"){
	    if (VelicinaArray == "Mali" )
		   document.frmMain.Cena.value = "170";
		
		if (VelicinaArray == "Veliki" )
		   document.frmMain.Cena.value = "200";
		enableDodajButton();
	}
	if (PodvrsteArray == "Sendvič punjena piletina"){
	    if (VelicinaArray == "Mali" )
		   document.frmMain.Cena.value = "210";
		
		if (VelicinaArray == "Veliki" )
		   document.frmMain.Cena.value = "240";
		enableDodajButton();
	}
	if (PodvrsteArray == "Stevina vratolomija sendvič"){
	    if (VelicinaArray == "Mali" )
		   document.frmMain.Cena.value = "210";
		
		if (VelicinaArray == "Veliki" )
		   document.frmMain.Cena.value = "240";
		enableDodajButton();
	}
	if (PodvrsteArray == "Lalin sendvič"){
	    if (VelicinaArray == "Mali" )
		   document.frmMain.Cena.value = "170";
		
		if (VelicinaArray == "Veliki" )
		   document.frmMain.Cena.value = "220";
		enableDodajButton();
	}
	if (PodvrsteArray == "Vegetarijano sendvič"){
	    if (VelicinaArray == "Mali" )
		   document.frmMain.Cena.value = "130";
		
		if (VelicinaArray == "Veliki" )
		   document.frmMain.Cena.value = "170";
		enableDodajButton();
	}
	if (PodvrsteArray == "Pecenica sendvič"){
	    if (VelicinaArray == "Mali" )
		   document.frmMain.Cena.value = "140";
		
		if (VelicinaArray == "Veliki" )
		   document.frmMain.Cena.value = "170";
		   enableDodajButton();
	}
	if (PodvrsteArray == "Suvi vrat sendvič"){
	    if (VelicinaArray == "Mali" )
		   document.frmMain.Cena.value = "140";
		
		if (VelicinaArray == "Veliki" )
		   document.frmMain.Cena.value = "170";
		enableDodajButton();
	}
	if (PodvrsteArray == "Kulen sendvič"){
	    if (VelicinaArray == "Mali" )
		   document.frmMain.Cena.value = "140";
		
		if (VelicinaArray == "Veliki" )
		   document.frmMain.Cena.value = "170";
		enableDodajButton();
	}
	if (PodvrsteArray == "Tunjevina sendvič"){
	    if (VelicinaArray == "Mali" )
		   document.frmMain.Cena.value = "140";
		
		if (VelicinaArray == "Veliki" )
		   document.frmMain.Cena.value = "170";
		enableDodajButton();
	}
	if (PodvrsteArray == "Pljeskavica u lepinji"){
	    if (VelicinaArray == "Standard" )
		   document.frmMain.Cena.value = "150";
		   enableDodajButton();		   
	}
	if (PodvrsteArray == "Punjena pljeskavica u lepinji"){
	    if (VelicinaArray == "Standard" )
		   document.frmMain.Cena.value = "180";	
		   enableDodajButton();
	}
	if (PodvrsteArray == "Špikovana pljeskavica u lepinji"){
	    if (VelicinaArray == "Standard" )
		   document.frmMain.Cena.value = "180";
		   enableDodajButton();
	}
	if (PodvrsteArray == "Ćevapi u lepinji"){
	    if (VelicinaArray == "Standard" )
		   document.frmMain.Cena.value = "180";
			enableDodajButton();		   
	}
	if (PodvrsteArray == "Pileće belo meso"){
	    if (VelicinaArray == "Standard" )
		   document.frmMain.Cena.value = "180";
		   enableDodajButton();
	}
	if (PodvrsteArray == "Bečka šnicla u lepinji"){
	    if (VelicinaArray == "Standard" )
		   document.frmMain.Cena.value = "170";
		   enableDodajButton();
	}

//Chicken meni

	if (PodvrsteArray == "Pileća krilca"){
	    if (VelicinaArray == "Mala" )
		   document.frmMain.Cena.value = "250";
		
		if (VelicinaArray == "Velika" )
		   document.frmMain.Cena.value = "500";

	    if (VelicinaArray == "Za ekipu" )
		   document.frmMain.Cena.value = "750";
		enableDodajButton();
	}
	if (PodvrsteArray == "Chicken Nnuggets Meni"){
	    if (VelicinaArray == "Mala" )
		   document.frmMain.Cena.value = "270";
		
		if (VelicinaArray == "Velika" )
		   document.frmMain.Cena.value = "540";

	    if (VelicinaArray == "Za ekipu" )
		   document.frmMain.Cena.value = "800";
		populateSosevi();
		enableDodajButton();
	}
	if (PodvrsteArray == "Cheese Chicken Nuggets"){
	    if (VelicinaArray == "Mala" )
		   document.frmMain.Cena.value = "300";
		
		if (VelicinaArray == "Velika" )
		   document.frmMain.Cena.value = "600";

	    if (VelicinaArray == "Za ekipu" )
		   document.frmMain.Cena.value = "900";
		enableDodajButton();
	}
	if (PodvrsteArray == "Chicken Burger"){
	    if (VelicinaArray == "Mala" )
		   document.frmMain.Cena.value = "150";
		
		if (VelicinaArray == "Velika" )
		   document.frmMain.Cena.value = "200";
		enableDodajButton();
	}
	if (PodvrsteArray == "Cheese Chicken Burger"){
	    if (VelicinaArray == "Mala" )
		   document.frmMain.Cena.value = "180";
		
		if (VelicinaArray == "Velika" )
		   document.frmMain.Cena.value = "250";
		enableDodajButton();
	}
	if (PodvrsteArray == "Chicken Bacon Nuggets"){
	    if (VelicinaArray == "Mala" )
		   document.frmMain.Cena.value = "300";
		
		if (VelicinaArray == "Velika" )
		   document.frmMain.Cena.value = "600";

	    if (VelicinaArray == "Za ekipu" )
		   document.frmMain.Cena.value = "900";
		enableDodajButton();
	}
	if (PodvrsteArray == "Chicken Onion Nuggets"){
	    if (VelicinaArray == "Mala" )
		   document.frmMain.Cena.value = "290";
		
		if (VelicinaArray == "Velika" )
		   document.frmMain.Cena.value = "570";

	    if (VelicinaArray == "Za ekipu" )
		   document.frmMain.Cena.value = "850";
		enableDodajButton();
	}
	if (PodvrsteArray == "Punjeni Batak u somunu"){
	    if (VelicinaArray == "Standard" )
		   document.frmMain.Cena.value = "230";
		enableDodajButton();
	}
	if (PodvrsteArray == "Batak u somunu"){
	    if (VelicinaArray == "Standard" )
		   document.frmMain.Cena.value = "190";
		enableDodajButton();
	}
	if (PodvrsteArray == "Desperado Nuggets"){
	    if (VelicinaArray == "Mala" )
		   document.frmMain.Cena.value = "300";
		
		if (VelicinaArray == "Velika" )
		   document.frmMain.Cena.value = "600";

	    if (VelicinaArray == "Za ekipu" )
		   document.frmMain.Cena.value = "900";
		enableDodajButton();
	}
	if (PodvrsteArray == "Chicken obrok meni"){
	    if (VelicinaArray == "Standard" )
		   document.frmMain.Cena.value = "550";
		enableDodajButton();
	}
	if (PodvrsteArray == "Chicken Fingers"){
	    if (VelicinaArray == "Mala" )
		   document.frmMain.Cena.value = "250";
		
		if (VelicinaArray == "Velika" )
		   document.frmMain.Cena.value = "500";

	    if (VelicinaArray == "Za ekipu" )
		   document.frmMain.Cena.value = "750";
		enableDodajButton();
	}
	if (PodvrsteArray == "Cheese Chicken Fingers"){
	    if (VelicinaArray == "Mala" )
		   document.frmMain.Cena.value = "300";
		
		if (VelicinaArray == "Velika" )
		   document.frmMain.Cena.value = "580";

	    if (VelicinaArray == "Za ekipu" )
		   document.frmMain.Cena.value = "850";
		enableDodajButton();
	}
	if (PodvrsteArray == "Desperado Fingers"){
	    if (VelicinaArray == "Mala" )
		   document.frmMain.Cena.value = "300";
		
		if (VelicinaArray == "Velika" )
		   document.frmMain.Cena.value = "600";

	    if (VelicinaArray == "Za ekipu" )
		   document.frmMain.Cena.value = "900";
		enableDodajButton();
	}
	// Posebna ponuda
	
	if (PodvrsteArray == "Mali index + kola"){
	    if (VelicinaArray == "Standard" )
		   document.frmMain.Cena.value = "200";
		enableDodajButton();
	}
	if (PodvrsteArray == "Veliki index + kola"){
	    if (VelicinaArray == "Standard" )
		   document.frmMain.Cena.value = "250";
		enableDodajButton();
	}
	if (PodvrsteArray == "Giros obrok meni"){
	    if (VelicinaArray == "Mala" )
		   document.frmMain.Cena.value = "320";
		
		if (VelicinaArray == "Velika" )
		   document.frmMain.Cena.value = "600";

	    if (VelicinaArray == "Za ekipu" )
		   document.frmMain.Cena.value = "900";
		enableDodajButton();
	}
	if (PodvrsteArray == "Barbarina trojka"){
	    if (VelicinaArray == "Standard" )
		   document.frmMain.Cena.value = "450";
		enableDodajButton();
	}
	if (PodvrsteArray == "Barbara Ćevap meni"){
	    if (VelicinaArray == "Standard" )
		   document.frmMain.Cena.value = "330";
		enableDodajButton();
	}
	if (PodvrsteArray == "Barbara Nuggets"){
	    if (VelicinaArray == "Mala" )
		   document.frmMain.Cena.value = "270";
		
		if (VelicinaArray == "Velika" )
		   document.frmMain.Cena.value = "540";

	    if (VelicinaArray == "Za ekipu" )
		   document.frmMain.Cena.value = "800";
		enableDodajButton();
	}
	if (PodvrsteArray == "Barbara Cheese Nuggets"){
		if (VelicinaArray == "Mala" )
		   document.frmMain.Cena.value = "300";
		
		if (VelicinaArray == "Velika" )
		   document.frmMain.Cena.value = "600";

		if (VelicinaArray == "Za ekipu" )
		   document.frmMain.Cena.value = "900";
		enableDodajButton();
	}
	if (PodvrsteArray == "Barbara Bacon Nuggets"){
		if (VelicinaArray == "Mala" )
		   document.frmMain.Cena.value = "300";
		
		if (VelicinaArray == "Velika" )
		   document.frmMain.Cena.value = "600";

		if (VelicinaArray == "Za ekipu" )
		   document.frmMain.Cena.value = "900";
		enableDodajButton();
	}
	if (PodvrsteArray == "Barbara Onion Nuggets"){
		if (VelicinaArray == "Mala" )
		   document.frmMain.Cena.value = "300";
		
		if (VelicinaArray == "Velika" )
		   document.frmMain.Cena.value = "600";

		if (VelicinaArray == "Za ekipu" )
		   document.frmMain.Cena.value = "900";
		enableDodajButton();
	}
	//dobro jutro sa barbarom 
	if (PodvrsteArray == "Omlet u somunu"){
	   document.frmMain.Cena.value = "140";
	   enableDodajButton();	   
	}
	if (PodvrsteArray == "Omlet sa šunkom u somunu"){
	   document.frmMain.Cena.value = "150";
		enableDodajButton();
	}
	if (PodvrsteArray == "Omlet sa sirom u somunu"){
	   document.frmMain.Cena.value = "150";	
	   enableDodajButton();
	}
	if (PodvrsteArray == "Omlet sa slaninom u somunu"){
	   document.frmMain.Cena.value = "150";
		enableDodajButton();	   
	}
	if (PodvrsteArray == "Barbara omlet u somunu"){
	   document.frmMain.Cena.value = "170";	
	   enableDodajButton();
	}
	if (PodvrsteArray == "Mexico omlet u somunu"){
	   document.frmMain.Cena.value = "170";
		enableDodajButton();
	}
	if (PodvrsteArray == "Stevina vratolomija u somunu"){
	   document.frmMain.Cena.value = "190";
		enableDodajButton();
	}
	if (PodvrsteArray == "Chicken Nuggets u somunu"){
	   document.frmMain.Cena.value = "230";	
	   enableDodajButton();
	}
	if (PodvrsteArray == "Cheese Chicken Nuggets u somunu"){
	   document.frmMain.Cena.value = "230";	
	   enableDodajButton();
	}
	if (PodvrsteArray == "Index sendvič u somunu"){
	   document.frmMain.Cena.value = "160";	
	   enableDodajButton();
	}
	if (PodvrsteArray == "2 Kroasana + esspreso"){
	   document.frmMain.Cena.value = "150";	
	   enableDodajButton();
	}
	// Salate
	if (PodvrsteArray == "Barbara Salata"){
		if (VelicinaArray == "Standard" )
		   document.frmMain.Cena.value = "290";
		   enableDodajButton();		   
	}
	if (PodvrsteArray == "Meksička Salata"){
		if (VelicinaArray == "Standard" )
		   document.frmMain.Cena.value = "270";	
			enableDodajButton();
	}
	if (PodvrsteArray == "Mediteranska Salata"){
		if (VelicinaArray == "Standard" )
		   document.frmMain.Cena.value = "270";		
		   enableDodajButton();
	}
	if (PodvrsteArray == "Kineska Salata"){
		if (VelicinaArray == "Standard" )
		   document.frmMain.Cena.value = "330";		
		   enableDodajButton();
	}
	if (PodvrsteArray == "Grčka Salata"){
		if (VelicinaArray == "Standard" )
		   document.frmMain.Cena.value = "250";		
		   enableDodajButton();
	}
	if (PodvrsteArray == "Šefe koj ti je vrag"){
		if (VelicinaArray == "Standard" )
		   document.frmMain.Cena.value = "270";		
		   enableDodajButton();
	}
	if (PodvrsteArray == "Segreto"){
		if (VelicinaArray == "Standard" )
		   document.frmMain.Cena.value = "330";		
		   enableDodajButton();
	}
}

function getSoseviName(){

	sos = "";
	var SoseviList = document.frmMain.Sosevi;
	for (i = 0; i < SoseviList.length; i++) {
		if (SoseviList[i].selected) {
			sos = sos + SoseviList[i].value + " ";
		} 
	}
	return sos
}
function populateSosevi(){
	
	var VrsteList = document.frmMain.Vrste;
	ClearOptions(document.frmMain.Sosevi);
	var SoseviList = document.frmMain.Sosevi;
	// var PodvrsteList = document.frmMain.Podvrste;

   // var PodvrsteArray = document.frmMain.Podvrste[document.frmMain.Podvrste.selectedIndex].value;
	
	if(VrsteList[VrsteList.selectedIndex].value == "Pica"){
		AddToOptionList(SoseviList, "Cili", "Cili");
		AddToOptionList(SoseviList, "Susam", "Susam");
		AddToOptionList(SoseviList, "Beli Luk", "Beli Luk");
	}
	else if (VrsteList[VrsteList.selectedIndex].value == "Chicken Meni"){
		AddToOptionList(SoseviList, "Pavlaka", "Pavlaka");
		AddToOptionList(SoseviList, "Tartar", "Tartar");
		AddToOptionList(SoseviList, "Tzatziki", "Tzatziki");
		AddToOptionList(SoseviList, "Kari", "Kari");
		AddToOptionList(SoseviList, "Cili", "Cili");
		AddToOptionList(SoseviList, "Susam", "Susam");
		AddToOptionList(SoseviList, "Beli Luk", "Beli Luk");	
	}
}

function enableDodajButton(){
	document.frmMain.Dodaj.disabled = false;
}

function disableDodajButton(){
	document.frmMain.Dodaj.disabled = true;
}

function scrollTextArea(){
	var elem = document.frmMain.PorudzbaHolder;
	elem.scrollTop = elem.scrollHeight;
}

function addTooltip(){
	var total = $('select option').length;
	var cur;
	for ( var i = 0; i < total; i++ ){
		cur = $('select option:eq(' + i + ')');
		cur.attr( 'title', cur.html() );
	}
}
