
function getComputerChoice()
{
    const choice = ["rock" , "paper" , "scissor"];
    let computerSelection = choice[Math.floor(Math.random() * choice.length)];
    
    return computerSelection;
}

getComputerChoice();

function round(computerSelection,playerSelection)
{
   if(playerSelection === 'rock')
   {
     if(computerSelection === 'rock')
     {
        console.log(`Tie both are ${computerSelection}`);
     }
     if(computerSelection === 'scissor')
     {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`)
     }
     if(computerSelection === 'paper')
     {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`)
     }
   }


   if(playerSelection === 'scissor')
   {
     if(computerSelection === 'rock')
     {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
     }
     if(computerSelection === 'scissor')
     {
        console.log(`Tie both are ${computerSelection}`)
     }
     if(computerSelection === 'paper')
     {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`)
     }
   }


   if(playerSelection === 'paper')
   {
     if(computerSelection === 'rock')
     {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
     }
     if(computerSelection === 'scissor')
     {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`)
     }
     if(computerSelection === 'paper')
     {
        console.log(`Tie both are ${computerSelection}`)
     }
   }

   
   
}

function game()
{
    for( let i=0; i< 5; i++)
    {
        console.log(`Round ${i}`);
        const input = prompt("enter rock paper or scissor");
        let userChoice = input.toLowerCase();
        console.log(userChoice);
        getComputerChoice(computerSelection(),userChoice)
    }
}
