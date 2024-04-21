function make_shirt(size: string = "large", message: string = "I love TypeScript"){
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
}

make_shirt(); //Calls function make_shirt() which uses the default values of shirt and message
make_shirt("medium"); //Calls function make_shirt() which uses the default value of message and medium shirt
make_shirt("small", "Code is Life"); //Calls function make_shirt() which uses small as the size and Code is Life as the message