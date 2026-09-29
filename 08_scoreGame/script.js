//closures

function score(){
    let score = 0;

    function increaseScore(points){
        score += points;
        console.log(`score is +${points}pts`);
    }

    function decreaseScore(points){
        score -= points;
        console.log(`score is -${points}pts`);
    }

    function getScore(){
        return score;
    }

    //return an object with references to the functions
    return {increaseScore , decreaseScore , getScore};
}
//create an object
const game = score();

game.increaseScore(5);
game.decreaseScore(8);
console.log(`the current score is ${game.getScore()}`);


