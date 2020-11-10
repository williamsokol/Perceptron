var points = new Array(50);

function setup(){
    

    neron = new Perceptron;

    for (var i=0;i<points.length;i++){
        points[i] = new Point;
        
    }
}
function draw(){
    drawRect(200,50,200,200,"#fff");
    drawLine(200,50,400,250,"#000");

    
    
    for (var i=0;i<points.length;i++){
        var target = points[i].label;
        var inputs = [points[i].x,points[i].y]; 
        
        guess = neron.guess(inputs);
        
        if(guess == 1){
            ctx.fillStyle = "#0f0";
        }else{
            ctx.fillStyle = "#f00"; 
        }
        drawCircle(points[i].x+200,points[i].y+50,4);
        neron.train(inputs,target); 
    }
}


setup();

draw();
//console.log("test");

