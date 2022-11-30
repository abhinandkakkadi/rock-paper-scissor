
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
      { 
        result.innerHTML =`You win! ${playerSelection} beats ${computerSelection}`;
        userPoints+=1;
        if(userPoints== 5)
        {   document.body.style.backgroundColor = 'red'
            document.getElementById('round').innerHTML = "You win the whole round";
            
            
        }
      }
   if(playerSelection === 'rock' && computerSelection === 'paper' || playerSelection === 'scissor' && computerSelection === 'rock'
      || playerSelection === 'paper' &&  computerSelection === 'scissor' )
     {  
        result.innerHTML =`You lose! ${computerSelection} beats ${playerSelection}`;
        compPoints+=1;
        if(compPoints == 5)
        {   document.body.style.backgroundColor = 'green'
            document.getElementById('round').innerHTML ="You lose the whole round";
            
        }
     }

   if( playerSelection === 'rock' && computerSelection === 'rock' || playerSelection === 'scissor' && computerSelection === 'scissor'||
       playerSelection === 'paper' && computerSelection === 'paper' )
    {   
        result.innerHTML =`Tie both are ${computerSelection}`;
    }
  
  
}


  
        
                    document.getElementById("rock").addEventListener("click", function()
            {round(getComputerChoice(),rock.innerHTML)})


            document.getElementById('paper').addEventListener('click',function(){
                round(getComputerChoice(),paper.innerHTML)
            })

            document.getElementById('scissor').addEventListener('click',function(){
                round(getComputerChoice(),scissor.innerHTML)
            })
       
        
    
 



// (document.getElementById("rock").addEventListener("click", function()
// {round(getComputerChoice(),rock.innerHTML)}))


// document.getElementById('paper').addEventListener('click',function(){
//     round(getComputerChoice(),paper.innerHTML)
// })

// document.getElementById('scissor').addEventListener('click',function(){
//     round(getComputerChoice(),scissor.innerHTML)
// })



