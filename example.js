var points = new Array(50);

function setup(){
    

    neron = new Perceptron;

    for (var i=0;i<points.length;i++){
        points[i] = new Point;
        
    }


    input = [12,12];
    guess = neron.guess(input);
    console.log(guess);
    
}
function draw(){
    drawRect(200,50,200,200,"#fff");
    drawLine(200,50,400,250,"#000");

    for (var i=0;i<points.length;i++){
        points[i].show();
    }
    
    for (var i=0;i<points.length;i++){
        var target = points[i].label;
        var inputs = [points[i].x,points[i].y];
        
        guess = neron.guess(input);
        
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

//draw();
//console.log("test");

