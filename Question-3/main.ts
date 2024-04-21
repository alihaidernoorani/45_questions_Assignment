let personName: string = "Ali Haider Noorani"; //Stores person name
console.log(personName.toUpperCase()); //Shows name in uppercase
console.log(personName.toLowerCase()); //Shows name in lowercase
console.log(personName.replace(/\b\w/g, word => word.toUpperCase())); //Shows name in titlecase