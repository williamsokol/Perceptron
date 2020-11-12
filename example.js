
var points = new Array(50);
var trainingIndex =0;

var lineP1 = new Point(-mapsize/2,f(-mapsize/2));
var lineP2 = new Point(mapsize/2,f(mapsize/2));



console.log(canvas.height);
function setup(){
    

    neron = new Perceptron;

    for (var i=0;i<points.length;i++){
        points[i] = new Point;
        
    }
    
    
}
function draw(){
    var lineP3 = new Point(-mapsize/2,neron.guessY(-mapsize/2));
    var lineP4 = new Point(mapsize/2,neron.guessY(mapsize/2));

    drawRect(offsetX,offsetY,mapsize,mapsize,"#fff");
    drawLine(lineP1.px,lineP1.py,lineP2.px,lineP2.py,"#000");
    
    drawLine(lineP3.px,lineP3.py, lineP4.px,lineP4.py,"#000");

    
    
    for (var i=0;i<points.length;i++){
        var training = points[trainingIndex];
        var target = training.label;
        var inputs = [training.x,training.y,training.bias]; 
        
        
        neron.train(inputs,target); 
        
        //display every dot :
        var inputs2 = [points[i].x,points[i].y,training.bias]; 

        guess = neron.guess(inputs2);
        if(guess == 1){
            ctx.fillStyle = "#0f0";
        }else{
            ctx.fillStyle = "#f00"; 
        }
        
        drawCircle(points[i].px,points[i].py,4);
        trainingIndex++;
    }
    
    
    if(trainingIndex >= points.length){
        trainingIndex = 0;
    }
}


setup();
thing();
function thing(){
    window.setTimeout(function(){
        
        draw();
        window.requestAnimationFrame(thing);
    },1000/30)
    
    
}

//console.log("test");

