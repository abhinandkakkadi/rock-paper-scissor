
let compPoints = 0;
let userPoints = 0;

const result = document.getElementById('demo');


function getComputerChoice()
{
    const choice = ["rock" , "paper" , "scissor"];
    let computerSelection = choice[Math.floor(Math.random() * choice.length)];
    
    return computerSelection;
}

getComputerChoice();

function round(computerSelection,playerSelection)
{   

   
   if(playerSelection === 'rock' && computerSelection === 'scissor' || playerSelection === 'scissor' && computerSelection === 'paper'
      || playerSelection === 'paper' && computerSelection === 'rock' )
      { console.log = `You win! ${playerSelection} beats ${computerSelection}`;
        result.innerHTML =`You win! ${playerSelection} beats ${computerSelection}`;
        userPoints+=1;
      }
   if(playerSelection === 'rock' && computerSelection === 'paper' || playerSelection === 'scissor' && computerSelection === 'rock'
      || playerSelection === 'paper' &&  computerSelection === 'scissor' )
     {  console.log = `You lose! ${computerSelection} beats ${playerSelection}`;
        result.innerHTML =`You lose! ${computerSelection} beats ${playerSelection}`;
        compPoints+=1;
     }

   if( playerSelection === 'rock' && computerSelection === 'rock' || playerSelection === 'scissor' && computerSelection === 'scissor'||
       playerSelection === 'paper' && computerSelection === 'paper' )
    {   console.log = `Tie both are ${computerSelection}`;
        result.innerHTML =`Tie both are ${computerSelection}`;
    }
  
  
}

/*function game()
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
            console.log("You lose the whole round");
            break;
        }
    }
}
game(); */


// round(getComputerChoice(),rock.innerHTML)

(document.getElementById("rock").addEventListener("click", function()
{round(getComputerChoice(),rock.innerHTML)}))


document.getElementById('paper').addEventListener('click',function(){
    round(getComputerChoice(),paper.innerHTML)
})

document.getElementById('scissor').addEventListener('click',function(){
    round(getComputerChoice(),scissor.innerHTML)
})



