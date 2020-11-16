//Array of choices 
var rps = [];
rps[0] = "Rock";
rps[1] = "Paper";
rps[2] = "Scissors";

//Array of buttons
var btn = document.querySelectorAll('a');
btn[0].innerHTML = rps[0];
btn[1].innerHTML = rps[1];
btn[2].innerHTML = rps[2];

//When the buttons are clicked, play game
//Event listener for rock
btn[0].addEventListener('click', function(e){
    play(0);
})
//For paper
btn[1].addEventListener('click', function(e){
    play(1);
})
//For scissors
btn[2].addEventListener('click', function(e){
    play(2);
})


function play(playersChoice){
    var cpuChoice = Math.floor(Math.random()*2.9999);

    //Example of a switch case
    switch(playersChoice){
        case 0: 
            if(cpuChoice===0){
                alert("Computer Chooses Rock, You tied.")
            }
            else if(cpuChoice===1){
                alert("Computer Chooses Paper, You Lost.")
            }
            else{
                alert("computer Chooses Scissors, You Win! :)")
            }
        break;
        case 1: 
            if(cpuChoice===0){
            alert("Computer Chooses Rock, You Win! :)")
              }
            else if(cpuChoice===1){
            alert("Computer Chooses Paper, You Tied.")
             }
            else
            alert("computer Chooses Scissors, You Lost. ")
             }
        break;
        case 2:
            if(cpuChoice===0){
            alert("Computer Chooses Rock, You Lost.")
            }
            else if(cpuChoice===1){
            alert("Computer Chooses Paper, You Win! :)")
            }
            else
            alert("computer Chooses Scissors, You Tied.")
            }
        break;

    }

}

