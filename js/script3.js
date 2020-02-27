let etages = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

const generatePyramid = (etages) => { 
let hashtag = "#";
let line = "";

// syntaxe de for: for([initialisation]; [condition]; [incrémentation]) { };
  for (let i=1; i<=etages; i++ ) { //nombre de lignes n
    for (let j=1; j<=etages-i; j++ ) {    //nombre d'espaces est égal au nombre de lignes -i
      line = line + " ";  
    }


    for (let k = 1; k <= i; k++) { //on met un hashtag à la fin de chaque ligne
      line = line + hashtag;  
    }
    console.log(line);
    line = "";
  }
}


generatePyramid(etages)
