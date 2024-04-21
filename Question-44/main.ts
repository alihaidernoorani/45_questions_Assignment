function make_sandwich (...ingredients: string[]){
    console.log(`A sandwitch containing ${ingredients} was ordered`);
}

make_sandwich("ham","cheese");
make_sandwich("turkey", "lettuce", "tomato");
make_sandwich("avocado", "sprouts", "mustard", "mayo");