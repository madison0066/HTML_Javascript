window.onload = function(){
    var c = document.querySelector("canvas")
    var ctx = c.getContext("2d")

    var Background= new Image();
    Background.src = 'images/shapes.png';



    function drawRect(){

        //Draws a square border 
        ctx.fillRect(80,298,110,110);
        ctx.fillStyle = 'black';
        ctx.stroke();
        ctx.fill();

        //draws a square
        ctx.lineWidth =10;
        ctx.fillStyle ='yellow';
        ctx.strokeStyle = 'black';
        ctx.fillRect(85,303,100,100);
        ctx.stroke();
        ctx.fill();
    }

    function drawCircle(){
        //Draw a circle 
        ctx.lineWidth = 5;
        ctx.fillStyle = "#ffff00";
        ctx.strokeStyle ='red';
        ctx.beginPath();
        ctx.arc(384, 440, 67,0,2*Math.PI);
        ctx.stroke()
        ctx.fill()
    }

    function drawLine(){

        //Draw a line
        ctx.lineWidth = 5;
        ctx.strokeStyle=`rgb(255,0,0)`;
        ctx.moveTo(86,682);
        ctx.lineTo(277, 549);
        ctx.stroke();
    }

    function drawPent(){
        //558, 308
        ctx.beginPath();
        ctx.strokeStyle = '#00ffff';
        ctx.fillStyle = '#ff00ff'
        ctx.moveTo(558,308);
        ctx.lineTo(667,285);
        ctx.lineTo(723,379);
        ctx.lineTo(650,464);
        ctx.lineTo(548,420);
        ctx.lineTo(558,308);
        ctx.fill();
        ctx.stroke();

    }

    function drawStar(){
        ctx.beginPath();
        ctx.strokeStyle = `rgb(32,32,32)`;
        ctx.fillStyle = '#ffff00';
        ctx.moveTo(636,497);
        ctx.lineTo(668,555);
        ctx.lineTo(732,567);
        ctx.lineTo(689,615);
        ctx.lineTo(695,680);
        ctx.lineTo(636,653);
        ctx.lineTo(576,680);
        ctx.lineTo(583,616);
        ctx.lineTo(539,567);
        ctx.lineTo(604,555);
        ctx.lineTo(636,497);
        ctx.fill();
        ctx.stroke();
    }
   
    function draw(){
        drawRect()
        drawCircle()
        drawLine()
        drawPent()
        drawStar()
        
    }
    
    draw()

}