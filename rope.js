class Rope {
    constructor(bodyA,bodyB,offsetX,offsetY) {
      offsetX = this.offsetX;
      offsetY = this.offsetY;
        var options = {
          bodyA:bodyA,
          bodyB:bodyB,
          pointA:{x:this.offsetX, y:this.offsetY},
          length:400,
          stiffness:0.04,
        }
        this.rope = Matter.Constraint.create(options);
        World.add(world, this.rope);
  
    }
  
    display() {
      push();
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
  
        strokeWeight(4);
        stroke('black');

        var Anchor1X = pointA.x + this.offsetX;
        var Anchor1Y = pointA.y + this.offsetY;
        
        var Anchor2X = pointB.x;
        var Anchor2Y = pointB.y;
  
        line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
        pop();
        }
  }