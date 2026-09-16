//number guessing game
let min = 1;
let max = 100;
let r = Math.floor(Math.random() * (max - min))+min;
let guessed = false;
while(!guessed){
    let num = window.prompt(`enter a enumber between ${min}-${max}`);
    let guess = Number(num);

    if(guess < min || guess > max){
        window.alert(`enter valid number`);
    }
    else if(guess == NaN){
        window.alert(`cannot enter nan`);
    }
    else if(guess === r){
        window.alert(`guessed it right!!!!`);
        guessed = true;
    }
}