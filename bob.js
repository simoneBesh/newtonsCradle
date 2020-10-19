class bob {
    constructor(x, y, r) {
    var options = {
        isStatic: false,
        restitution: 1,
        friction:2,
        density:1.2

     }
     //this.image = loadImage ("sprites/paper.png");
     this.x=x;
     this.y=y;
     this.r=r;
     this.body = Bodies.circle(this.x, this.y, this.r/2, options);
     //this.width = 20;
     //this.height = 20;
          
     World.add(world, this.body);
        }
        display(){
          var pos =this.body.position;
          push();
          translate(pos.x, pos.y);
          rotate(this.body.angle);
          ellipseMode(RADIUS);
          fill("pink");
          //strokeWeight(4);
          //stroke("white");
          ellipse(0, 0, this.r, this.r);
          pop();
        }
     

}