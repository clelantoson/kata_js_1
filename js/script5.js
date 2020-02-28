const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

const isRentedOneTime = () => {
  let rentedOnce = true
  books.forEach(book => {
    if (book.rented === 0) {
      rentedOnce = false
    }
  });
  if (rentedOnce = true) {
    console.log("Tous les livres ont bien été loués");
  } else if (rentedOnce = false) {
    console.log("Les livres n'ont pas tous été loués");
  }
}
isRentedOneTime()


const compareLessRented = ( a, b ) => {
  if ( a.rented < b.rented ){
    return -1;
  }
  if ( a.rented> b.rented ){
    return 1;
  }
  return 0;
}

console.log(books.sort( compareLessRented ));
console.log(`${books[0].title} est le livre le moins loué`);


const compareMostRented = ( a, b ) => {
  if ( a.rented > b.rented ){
    return -1;
  }
  if ( a.rented< b.rented ){
    return 1;
  }
  return 0;
}

console.log(books.sort( compareMostRented ));
console.log(`${books[0].title} est le livre le plus loué`);


const findBook = (id) => {
  books.forEach(book => {
    if (book.id === id){
      console.log(`Le livre avec l'id ${id} est ${book.title}`);
    }
  })
}
findBook(873495)

const deleteBook = (id) => {
  books.forEach(book => {
    if (book.id === id){
      const index = books.indexOf(book)
      delete books[index]
      console.log(`Le livre avec l'id ${id}, est bien supprimé`);
    }
  })
  console.log(books)
}
deleteBook(133712)

const alphabetical= ( a, b ) => {
  if ( a.title < b.title ){
    return -1;
  }
  if ( a.title> b.title ){
    return 1;
  }
  return 0;
}

console.log(books.sort(alphabetical))