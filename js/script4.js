const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];


console.log("Voici les personnes nées dans les années 70 :")

let seventies = []
entrepreneurs.forEach(hashPerson => {
  for(let key in hashPerson) {
    if (key === "year") {
      if ((hashPerson[key] <= 1979) && (hashPerson[key] >= 1970)) {
        seventies.push(hashPerson);
      }
    }
  }
});
console.log(seventies);


console.log("Un array de noms et prénoms :")

let name_lastn = []
entrepreneurs.forEach(hashPerson => {
    name_lastn.push({ first: hashPerson.first, last: hashPerson.last});
});
console.log(name_lastn);


console.log("Quel age aurait chaque personne aujourd'hui:")


let yeartoday = 2020
entrepreneurs.forEach(hashPerson => {
  console.log(hashPerson);
  let age = yeartoday - hashPerson.year;
  console.log(age);
});
