class Bob {
    constructor(x,y) {
   
       this.x = x;
       this.y = y;
      
      
       var options = {
           isStatic:true
       }
   
       this.radius = 40;
        
  this.body = Bodies.circle(x,y,this.radius,options);

        World.add(world, this.body);
   
    }
   
    display() {
        push();
        var pos = this.body.position;
        ellipseMode(CENTER);
        fill('fuchsia');
        stroke(0);
        ellipse(pos.x,pos.y,80,80);
        pop()
   
        
    }
   }