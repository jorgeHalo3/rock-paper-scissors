var rounds = prompt("please ender rounds");
if (rounds != null) {
}const game= () => {
    let pScore = 0;
    let cScore = 0;
}
///// game
const computerOption = ["rock","paper","scissors"];
Options.forEach(option => {
    option.addEventListner("click",function(){

const computerNumber = math.flor(math.random()* 3);
const computerChoices = computerOption[computerNumber];


setTimeout(() => {
    compareHands(this.textContent,computerChoice);


    const updateScore =() =>{
    const playerScore = document.querySelector(".player-score p"); 
}
const computerScore = document.querySelector(".computer-score p"); 
playerScore.textcontent= playerScore;
computerScore.textcontent= computerScore;
const compareHands = (playerChoice, computerChoices)=>{
    const winner = document.querySelector(".winner");
   /// tie
    if(playerChoice == computerChoices){
        winner.textContent = "it is a tie";
        return;
    }
    //rock
    if(playerChoice === "rock"){
        if(computerChoice === "scissors"){
            winner.textContent = "player wins"
        pScore++;
        updateScore();
        return;
        }else{
            winner.textContent = "computer wins";
            cScore ++;
            updateScore();
            return;
    
        }

    }
    /// paper
    if(playerChoice === "papper"){
    if(computerChoice === "scissors"){
        winner.textContent = "computer wins"
    cScore++;
    updateScore();    
    return;
    }else{
        winner.textContent = "player wins";
        pScore++;
        updateScore();
        return;
    }
    }
    //// scissors 
    if (playerChoice ==="scissors"){
        if(computerChoice ==="rock"){
            winner.textcontent= "computer wins"
          cScore++;
          updateScore(); 
          return;
        }else{
            winner.textcontent = "player wins";
            pScore++;
            updateScore()
            return;
        }
    }
}})})})