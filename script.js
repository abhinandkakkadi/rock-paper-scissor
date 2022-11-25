
let compPoints = 0;
let userPoints = 0;

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
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        userPoints+=1;
     }
     if(computerSelection === 'paper')
     {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        compPoints+=1;
     }
   }


   if(playerSelection === 'scissor')
   {
     if(computerSelection === 'rock')
     {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        compPoints+=1;
     }
     if(computerSelection === 'scissor')
     {
        console.log(`Tie both are ${computerSelection}`)
     }
     if(computerSelection === 'paper')
     {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`)
        userPoints+=1;
     }
   }


   if(playerSelection === 'paper')
   {
     if(computerSelection === 'rock')
     {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        userPoints+=1;
     }
     if(computerSelection === 'scissor')
     {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        compPoints+=1;
     }
     if(computerSelection === 'paper')
     {
        console.log(`Tie both are ${computerSelection}`)
     }
   }

   
   
}

function game()
{
    for( let i=1; i<= 100; i++)
    {
        console.log(`Round ${i}`);
        const userChoice = prompt("enter rock paper or scissor");
        
        console.log(userChoice);
        round(getComputerChoice(),userChoice);
        if(userPoints== 5)
        {
            console.log("You win the whole round");
            break;
        }
        if(compPoints == 5)
        {
            console.log("You lose");
            break;
        }
    }
}
game();
