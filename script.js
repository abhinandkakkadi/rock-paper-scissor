
function getComputerChoice()
{
    const choice = ["rock" , "paper" , "scissor"];
    let computerSelection = choice[Math.floor(Math.random() * choice.length)];
    console.log(computerSelection);
}

getComputerChoice();