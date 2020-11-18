

    var c = document.querySelector('canvas');
    var ctx = c.getContext('2d');

//Array of words
var rps = [];
rps[0] = `Rock` 
rps[1] = `Paper`
rps[2] = `Scissors`

//Array of Buttons
var btn = document.querySelectorAll(`a`)
//Changes the words in the buttons
btn[0].innerHTML = rps[0]
btn[1].innerHTML = rps[1]
btn[2].innerHTML = rps[2]

//Makes the buttons clickable.
//Once clicked they call the play function
btn[0].addEventListener(`click`, function(e){
    play(0)
})
btn[1].addEventListener(`click`, function(e){
    play(1)
})
btn[2].addEventListener(`click`, function(e){
    play(2)
})

//Play function accepts an integer
//generates an integer 0-2
//Displays the player's choice and computer's choice

    function play(pChoice){
        ctx.clearRect(0,0,c.width,c.height);
        var cChoice = Math.floor(Math.random()*2.999999)

        ctx.fillStyle = "darkblue"
        ctx.font = "40px Georgia"
        ctx.textAlign = 'center';
        ctx.fillText("Player's Choice: " + rps[pChoice] + "|| Computer choice: " + rps[cChoice], c.width/2, c.height/2);
        ctx.drawImage(img,10,10);

        

        switch(pChoice){
            case 0:
                if(cChoice === 0)
                {
                //display a tie
                ctx.fillText(`Computer also chose rock. You Tied`, c.width/2, c.height/2+ 100);
                }
            else if(cChoice === 1)
            {
                //display a loss
                ctx.fillText(`Computer chose paper. You Lost`,c.width/2, c.height/2+ 100)
            }
            else
            {
                //display a win
                ctx.fillText(`Computer chose scissors. You Won`,c.width/2, c.height/2+ 100)
            }
            break;

            case 1:
                if(cChoice === 0)
                {
                    //display a tie
                    ctx.fillText(`The Computer chose rock. You Win`,c.width/2, c.height/2+ 100)
                }
                else if(cChoice === 1)
                {
                    //display a loss
                    ctx.fillText(`Computer chose paper too. Its a tie`,c.width/2, c.height/2+ 100)
                }
                else
                {
                    //display a win
                    ctx.fillText(`Computer chose scissors. You Lost`,c.width/2, c.height/2+ 100)
                } 
            break;

            case 2:
                if(cChoice === 0)
                {
                    //display a tie
                    ctx.fillText(`Computer chose rock. You Lost`,c.width/2, c.height/2+ 100)
                }
                else if(cChoice === 1)
                {
                    //display a loss
                    ctx.fillText(`Computer chose paper. You Win`,c.width/2, c.height/2+ 100)
                }
                else
                {
                    //display a win
                    ctx.fillText(`Computer chose scissors. You Tied`,c.width/2, c.height/2+ 100)
                }
             break;
        }
    }
