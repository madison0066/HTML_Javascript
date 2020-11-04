//JavaScript goes here

var c = document.querySelector('canvas');
var ctx = c.getContext('2d');
var mario = new Image();
mario.src = 'images/mario.png';


//This will start the timer for the animation
var timer = requestAnimationFrame(draw);

var x = 0;



function draw(){

    //This will call the animation again
    timer = requestAnimationFrame(draw);
    //Clear the screen
    ctx.clearRect(0,0,c.width,c.height)
    x++;

    //Conditional Statement 
    if(x > c.width){
        x = -200;
    }
    
    //Draw everything to the screen
    ctx.drawImage(mario,x,100,200,200);

    //Draw a box
    ctx.fillStyle ='red';
    ctx.fillRect(200,100,200,200);

    ctx.strokeStyle= 'green'
    //Draw a line
    ctx.moveTo(0,0);
    ctx.lineTo(800, 600);
    ctx.stroke();

    ctx.moveTo(800,0);
    ctx.lineTo(0, 600);
    ctx.stroke();


    //Draw a circle 
    ctx.lineWidth = 5;
    ctx.fillStyle ='blue'
    ctx.strokeStyle = 'orange'
    ctx.beginPath();
    ctx.arc(c.width/2, c.height/2, 50, 0, 2*Math.PI);
    ctx.stroke()
    ctx.fill()

    //Draw text
    ctx.lineWidth =1;
    ctx.fillStyle = 'red'
    ctx.font = "50px Arial"
    ctx.textAlign = "center";
    ctx.fillText("Week 4 Lab", c.width/2, 50);
    ctx.strokeText("Week 4 Lab", c.width/2, 50);

    console.log("We are animating.");

}

draw();

