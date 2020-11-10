var points = new Array(50);


const offsetY = canvas.height/2-mapsize/2;
const offsetX = canvas.width/2-mapsize/2;
console.log(canvas.height);
function setup(){
    

    neron = new Perceptron;

    for (var i=0;i<points.length;i++){
        points[i] = new Point;
        
    }
}
function draw(){
    drawRect(offsetX,offsetY,mapsize,mapsize,"#fff");
    drawLine(offsetX,offsetY,mapsize+offsetX,mapsize+offsetY,"#000");

    
    
    for (var i=0;i<points.length;i++){
        var target = points[i].label;
        var inputs = [points[i].x,points[i].y]; 
        
        guess = neron.guess(inputs);
        
        if(guess == 1){
            ctx.fillStyle = "#0f0";
        }else{
            ctx.fillStyle = "#f00"; 
        }
        drawCircle(points[i].x+offsetX,points[i].y+offsetY,4);
        neron.train(inputs,target); 
    }
}


setup();
draw();
//console.log("test");

