    var canvas=document.getElementById("canvas");
    var ctx=canvas.getContext("2d");
    var radius=10;
    
    var user={
        x:0,
        y:(canvas.height-80)/2,
        height:80,
        width:10,
        color:"RED",
        score:0
    };
    var comp={
        x:(canvas.width-10),
        y:(canvas.height-80)/2,
        height:80,
        width:10,
        color:"BLUE",
        score:0
    };
    var ball={
        x:(canvas.width/2),
        y:(canvas.height/2),
        radius:10,
        color:"BLACK",
        speedx:4,
        speedy:4
    };
    function drawrect(x,y,width,height,color){
        ctx.beginPath();
        ctx.rect(x,y,width,height);
        ctx.fillStyle=color;
        ctx.fill();
    }
    function text(x,y,text,color){
        ctx.fillStyle=color;
        ctx.font="20px Arial";
        ctx.fillText(text,x,y);
    }
    function drawcircle(x,y,radius,color){
        ctx.beginPath();
        ctx.arc(x,y,radius,0,Math.PI*2,false);
        ctx.fillStyle=color;
        ctx.fill();
    }
    
    function draw(){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        drawrect(user.x,user.y,user.width,user.height,user.color);
        drawrect(comp.x,comp.y,comp.width,comp.height,comp.color);
        drawcircle(ball.x,ball.y,ball.radius,ball.color);
        text(canvas.width/4,canvas.height/7,user.score,"BLACK");
        text(3*canvas.width/4,canvas.height/7,comp.score,"BLACK");
        for(var c=0;c<=400;c+=40){
            drawrect((canvas.width/2-1),20+c,2,20,"BLACK");
        }
    }
    var interval=setInterval(draw,10);