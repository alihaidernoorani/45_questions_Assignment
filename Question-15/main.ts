let guests: string[] = ["Albert Einstein", "Allama Iqbal", "Muhammad Ali Jinnah"]; //Stores guests

//Letting people know that a guest can't come to dinner
let unableToAttend: string = "Allama Iqbal";
console.log(`${unableToAttend} can't make it to dinner\n`);

//Replacing the guest from the guest list
let newGuest: string = "Marie Curie";
guests[guests.indexOf(unableToAttend)] = newGuest;

//Prints the new guest list
for (let i = 0; i < guests.length; i++){
    console.log(`Dear ${guests[i]}, I would like to invite you for dinner`);
}
