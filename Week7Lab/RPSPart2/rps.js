window.onload = function(){

//Array of words
var c = document.querySelector('canvas')
var ctx = c.getContext('2d')

var imgCount =3;
var images =[]
var timer = requestAnimationFrame(draw);


images[0] = new Image();
images[0].src = 'images/rock.jpg';

images[1] = new Image();
images[1].src = 'images/paper.jpg';

images[2] = new Image();
images[2].src = 'images/scissors.jpg';



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
function play(pChoice)
{
    var cChoice = Math.floor(Math.random()*2.999999)
    
    alert(rps[pChoice] + " " + rps[cChoice]) 

    switch(pChoice){
        case 0:
            if(cChoice === 0)
            {
                //display a tie
                alert(`You Tied`)
            }
            else if(cChoice === 1)
            {
                //display a loss
                alert(`You Lost`)
            }
            else
            {
                //display a win
                alert(`You Won`)
            }
            break;

            case 1:
                if(cChoice === 0)
                {
                    //display a tie
                    alert(`You Win`)
                }
                else if(cChoice === 1)
                {
                    //display a loss
                    alert(`Tie`)
                }
                else
                {
                    //display a win
                    alert(`You Lost`)
                } 
            break;

            case 2:
                if(cChoice === 0)
                {
                    //display a tie
                    alert(`You Lost`)
                }
                else if(cChoice === 1)
                {
                    //display a loss
                    alert(`You Win`)
                }
                else
                {
                    //display a win
                    alert(`You Tie`)
                }
             break;
    }
}

function draw(){
    ctx.drawImage(images[0], 300,200);
    ctx.drawImage(images[1], 400,200);
    ctx.drawImage(images[2], 500,200);

}

draw();
}