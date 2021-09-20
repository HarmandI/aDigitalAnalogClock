function demarrerLaMontre (i){
    
// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");

//Extraire l'heure actuel à l'aide de l'objet Date()

let dAujourdhui=new Date();
    
//Stocker l'heure , minute , seconde  dans des varaiables
let heures = dAujourdhui.getHours();
let minutes= dAujourdhui.getMinutes();
let secondes = dAujourdhui.getSeconds();
console.log(heures);

// Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
// Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré

let timSec=heures*3600+minutes*60+secondes


let secondeDegre=(timSec*(360/60));
let minuteDegre= (timSec*(360/3600));
let heureDegre = (timSec*(360/43200));



// Déplacer les aiguilles 
AIGUILLEHR.style.transform=`rotate(${heureDegre}deg)`;
AIGUILLEMIN.style.transform=`rotate(${minuteDegre}deg)`;
AIGUILLESEC.style.transform=`rotate(${secondeDegre}deg)`;

}
// Exercuter la fonction chaque second

var interval = setInterval(demarrerLaMontre, 1000);



