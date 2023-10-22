const date = new Date();
const aec = date.getFullYear();

let an = prompt("Entrez votre année de naissance:");
let age = aec-an;
let min = age<18;
let maj = age>=18;

if (min) {
    alert("Vous êtes agés de "+age+" ans et êtes donc mineur.");
    
 } else if (maj) {
    alert("Vous êtes agés de "+age+" ans et êtes donc majeur.");
    
 }
