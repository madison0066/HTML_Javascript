//JavaScript goes here

var c = document.querySelector('canvas');
var ctx = c.getContext('2d');
var mario = new Image();
mario.src = 'images/mario.png';


//This will start the timer for the animation
var timer = requestAnimationFrame(draw);

var x = 0;

//Values represent the start and finish line
var start = 105;
var finish = 700;

//Fuel Values
var startFuel = 702;
var fuel = startFuel;

var barFullWidth = 300;

//Start Timer Stuff
var sec = 3;
var fps = 60;
var frames = fps;


function draw() {

    //This will call the animation again
    timer = requestAnimationFrame(draw);
    //Clear the screen
    ctx.clearRect(0, 0, c.width, c.height)


    //Draw everything to the screen
 




    drawStartLine()
    drawFinishLine()
    drawCar()
    drawSprite()
    drawFuelBar()
    drawFuelText()

    if (sec > 0){ 
        runStartTimer();
        drawStartTimer();  

    }
    else{
        if (fuel > 0){
            x += 1;
            fuel -= 1;

        }
    }


    //Updating x
 
    //Checks to see when we run our of fuel or pass the finish line 

    if (fuel <= 0 || x + 100 > finish) {
        drawResults();

    }
}
function runStartTimer(){
    frames -= 1;

    if (frames < 0){
        frames =fps;
        sec -= 1;
    }

}

function drawStartTimer(){
    ctx.fillStyle = 'black';
    ctx.font = '30px Arial';
    ctx.textAlign = "center"
    ctx.fillText(sec, c.width / 2, c.height / 2)
}


function drawResults() {
    if (x + 100 > finish) {
        ctx.fillStyle = 'black';
        ctx.font = '30px Arial';
        ctx.textAlign = "center"
        ctx.fillText("You made it, you win!", c.width / 2, c.height / 2)
    }
    else {
        ctx.fillStyle = 'black';
        ctx.font = '30px Arial';
        ctx.textAlign = "center"
        ctx.fillText("You ran out of fuel, you lost :(", c.width / 2, c.height / 2)
    }
}



function drawSprite(){
    ctx.drawImage(mario, x, 50, 100, 200);
}

function drawCar() {
    ctx.fillStyle = 'teal';
    ctx.fillRect(x, c.height / 2, 100, 50);

}

function drawStartLine() {
    ctx.fillStyle = 'green';
    ctx.fillRect(start, 100, 10, 400);
}

function drawFinishLine() {
    ctx.fillStyle = 'purple';
    ctx.fillRect(finish, 100, 10, 400);
}

function drawFuelBar() {
    var currentBarWidth = barFullWidth * getFuelPercent();
    ctx.fillStyle = 'yellow';
    ctx.fillRect(start, 70, currentBarWidth, 20);
}

function drawFuelText() {
    ctx.fillStyle = 'black';
    ctx.font = '30px Arial';
    ctx.fillText(fuel.toFixed(0), start, 45);

}

function getFuelPercent() {
    return fuel / startFuel;

}