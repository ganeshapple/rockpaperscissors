document.addEventListener('DOMContentLoaded',()=>
{
    const choices = ['rock', 'paper', 'scissors'];
    let tie = 0;
    let you = 0;
    let computer = 0;
    function getComputerChoice()
    {
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }
    function determineWinner(userChoice, computerChoice)
    {
        if(userChoice === computerChoice)
        {
            tie += 1;
            return 'It\'s a tie!';
        }
        if((userChoice === 'rock' && computerChoice === 'scissors') ||(userChoice === 'paper' && computerChoice === 'rock') ||(userChoice === 'scissors' && computerChoice === 'paper'))
        {
            you += 1;
            return 'You win!';
        }
        else
        {
            computer += 1;
            return 'Computer wins!';
        }
    }
    const buttons = document.querySelectorAll('.choice');
    const userChoiceElement = document.getElementById('user-choice');
    const computerChoiceElement = document.getElementById('computer-choice');
    const winnerElement = document.getElementById('winner');
    const youWonElement = document.getElementById('you-won');
    const computerWonElement = document.getElementById('computer-won');
    const tiedElement = document.getElementById('tied');
    buttons.forEach(button =>
    {
        button.addEventListener('click',()=>
        {
            const userChoice = button.id;
            const computerChoice = getComputerChoice();
            userChoiceElement.textContent = `Your Choice: ${userChoice}`;
            computerChoiceElement.textContent = `Computer's Choice: ${computerChoice}`;
            const winner = determineWinner(userChoice, computerChoice);
            winnerElement.textContent = `Winner: ${winner}`;
            youWonElement.textContent = `You Won: ${you} Times`;
            computerWonElement.textContent = `Computer Won: ${computer} Times`;
            tiedElement.textContent = `Tied: ${tie} Times`; 
        });
    });
});