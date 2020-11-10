const canvas = document.getElementById("can");

// getContext of canvas = methods and properties to draw and do a lot of thing to the canvas
const ctx = canvas.getContext('2d');

color = "#fff"



function drawRect(x,y,w,h,c){
    ctx.fillStyle = c;
    ctx.fillRect(x, y, w, h);
}
function drawCircle(x,y,r,c,fill=true){
    //ctx.fillStyle = c;

    ctx.beginPath();
    ctx.arc(x,y,r,0,2*Math.PI);
    if(fill = true){
        ctx.fill();
        //ctx.fillStyle = c;
    }
    ctx.stroke();

}
function drawLine(x1,y1,x2,y2,c)
{
    //make line:
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    //make visable:
    ctx.strokeStyle = c;
    ctx.stroke();
}
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function sign(int)
{
    if(int >= 0)
    {
        return 1;
    }else{
        return -1
    }
}