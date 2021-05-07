class Roof {
    constructor(x,y) {
   
       this.x = x;
       this.y = y;
       this.width = 520;
       this.height = 30;
   
       var options = {
           isStatic:true
       }
   
        this.body = Bodies.rectangle(x,y,this.width,this.height,options);
        
   
        World.add(world, this.body);
   
    }
   
    display() {
        var pos = this.body.position;
        rectMode(CENTER);
        fill("grey");
        stroke(0);
        rect(pos.x,pos.y,this.width,this.height);
   
        
    }
   }