function comptevoyelle(str) {
    const count = str.match(/(a|e|i|o|u|y)/gi).length;
    return count;
  }
  
  const string = prompt("Entrez un mot: ");
  const result = comptevoyelle(string);
  console.log = alert("Votre mot contient "+result+" voyelles.");
  