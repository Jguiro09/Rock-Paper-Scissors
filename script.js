var score =
{
    win: 0,
    lose: 0,
    tie: 0
}

var userAnswer = "";
var compAnswer = "";
var repeat = true;

alert("Hello! Welcome to Rock, Paper, Scissors!");


while(repeat == true)
{

    start();

    function start()
    {
        userAnswer = prompt("Please enter 'r', 'p,', 's'").toLowerCase();
        userAnswer = check(userAnswer);
        compAnswer = computerAnswer(compAnswer);
        score = game(compAnswer, userAnswer, score);
        alert("Win: " + score.win + "\n" + "Lose: " + score.lose + "\n" + "Tie: " + score.tie);
        repeat = again();
    }

    function check(userAnswer)
    {
        while(!(userAnswer == 'r' || userAnswer == 'p' || userAnswer == 's'))
        {
            userAnswer = prompt("Please enter ONLY 'r', 'p', or 's'");
        }
        console.log("User's answer: " + userAnswer);
        return userAnswer;
    }

    function computerAnswer(compAnswer)
    {
        var answers = ['rock', 'paper', 'scissors'];

        
        compAnswer = answers[Math.floor(Math.random()*3)]; 
        

        alert("The computer chose: " + compAnswer);
        console.log("Computer's answer: " + compAnswer);
        return compAnswer;
    }

    function game (compAnswer, userAnswer, score)
    {

        if(userAnswer == 'r')
        {
            if(compAnswer == 'rock')
            {
                alert("you tied!");
                score.tie += 1;
            }

            if(compAnswer == 'scissors')
            {
                alert("you won!");
                score.win += 1;
            }

            if(compAnswer == 'paper')
            {
                alert("you lose!");
                score.lose += 1;
            }
        }

        if(userAnswer == 's')
        {
            if(compAnswer == 'rock')
            {
                alert("you lose!")
                score.lose += 1;
            }

            if(compAnswer ==  'scissors')
            {
                alert("you tied!")
                score.tie += 1;
            }

            if(compAnswer == 'paper')
            {
                alert ("you win!")
                score.win += 1;
            }
        }

        if(userAnswer == 'p')
        {
            if(compAnswer == 'rock')
            {
                alert("you won!");
                score.win += 1;;
            }

            if(compAnswer ==  'scissors')
            {
                alert("you lose!");
                score.lose += 1;
            }

            if(compAnswer == 'paper')
            {
                alert("you tied!");
                score.tie += 1;
            }
        }

        return score;
    }

    function again()
    {
        var a = confirm("Play again?");
        if (a == true)
        {
            return true;
        }

        else
        {
            return false;
        }
    }
}
