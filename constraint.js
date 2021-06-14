class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.05,
            length:50
        }
        this.pointB=pointB;
        this.body = Constraint.create(options);
        World.add(world, this.body);
    }
    fly(){
        this.body.bodyA=null
    }

    display(){
        if(this.body.bodyA){
            var pointA = this.body.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(5);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}