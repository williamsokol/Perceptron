const mapsize = 250;

class Point
{ 
    constructor()
    {
        this.x = getRndInteger(0,mapsize);
        this.y =  getRndInteger(0,mapsize);
        
        

        if (this.x>this.y)
        {
            this.label = 1;
        }else{
            this.label = -1;
        } 
        
    }
   
}