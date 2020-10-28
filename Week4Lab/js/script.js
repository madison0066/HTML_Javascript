//JavaScript goes here

var c = document.querySelector('canvas');
var ctx = c.getContext('2d');


function draw(){

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
    ctx.fillStyle ='blue'
    ctx.strokeStyle = 'orange'
    ctx.beginPath();
    ctx.arc(c.width/2, c.height/2, 100, 0, 2*Math.PI);
    ctx.stroke()
    ctx.fill()
}

draw();

