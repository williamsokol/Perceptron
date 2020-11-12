const mapsize = 250;
const offsetY = canvas.height/2-mapsize/2;  //top of board
const offsetX = canvas.width/2-mapsize/2;   //left of board

function f(x)
{
    return 2*x-10;
}

class Point
{ 
    constructor(x_,y_)
    { 
        if(x_ == undefined){
            this.x = getRndInteger(-mapsize/2,mapsize/2);
            this.y =  getRndInteger(-mapsize/2,mapsize/2);
        }else {
            this.x = x_;
            this.y = y_;
        }
        this.bias = 1 ;

        this.px =  this.x+offsetX+mapsize/2;
        this.py = (this.y*-1)+offsetY+mapsize/2;

      
        var lineY = f(this.x);
        if (this.y<lineY)
        {
            this.label = 1;
        }else{
            this.label = -1;
        } 
        
    }
   
}