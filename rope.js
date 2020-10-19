class rope {
    constructor(bodyA, pointB) {
        var options={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.1,
            length: 150
        }
        //this.stiffness=stiffness;
        //this.length=length;
        //this.bodyA=bodyA;
        //this.bodyB=bodyB;
        this.pointB=pointB;
        this.rope=Constraint.create(options);
        World.add(world,this.rope);
    }

    display(){
        strokeWeight(4);
        line(this.rope.bodyA.position.x, this.rope.bodyA.position.y, this.pointB.x, this.pointB.y);
    }


}