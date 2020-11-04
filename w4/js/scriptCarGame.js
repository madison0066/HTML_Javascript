//JavaScript goes here

var c = document.querySelector('canvas');
var ctx = c.getContext('2d');
var aang = new Image();
aang.src = 'images/aangSprite.png';

var katara = new Image();
katara.src = 'images/kataraSprite.png';



//This will start the timer for the animation
var timer = requestAnimationFrame(draw);

var x = 0;

//Values represent the start and finish line
var start = 58;
var finish = 956;

//Fuel Values
var startFuel = 860;
var fuel = startFuel;

var barFullWidth = 512;

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
    drawSprite()
    drawSprite2()
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
        ctx.font = '30px Oswald';
        ctx.textAlign = "center"
        ctx.fillText("You made it, you win!", c.width / 2, c.height / 2)
    }
    else {
        ctx.fillStyle = 'black';
        ctx.font = '30px Oswald';
        ctx.textAlign = "center"
        ctx.fillText("You ran out of fuel, you lost :(", c.width / 2, c.height / 2)
    }
}



function drawSprite(){
    ctx.drawImage(aang, x, 100, 200, 200);
}

function drawSprite2(){
    ctx.drawImage(katara, x, 400, 200, 200);
}

function drawStartLine() {
    ctx.fillStyle = 'black';
    ctx.fillRect(start, 100, 10, 600);
}

function drawFinishLine() {
    ctx.fillStyle = 'green';
    ctx.fillRect(finish, 100, 10, 600);
}

function drawFuelBar() {
    var currentBarWidth = barFullWidth * getFuelPercent();
    ctx.fillStyle = 'lightblue';
    ctx.fillRect(start, 70, currentBarWidth, 20);
}

function drawFuelText() {
    ctx.fillStyle = 'black';
    ctx.font = '30px Oswald';
    ctx.fillText(fuel.toFixed(0), start, 45);

}

function getFuelPercent() {
    return fuel / startFuel;

}