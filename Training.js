class Point
{ 
    constructor()
    {
        this.x = getRndInteger(0,200);
        this.y =  getRndInteger(0,200);
        
        

        if (this.x>this.y)
        {
            this.label = 1;
        }else{
            this.label = -1;
        } 
        
    }
   
}