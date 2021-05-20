class Rope{
    constructor(body1,body2,offX,offY){
        this.offsetX = offX;
        this.offsetY = offY;
        this.pointB = body2.position;
        var options = {
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX,y:this.offsetY},
            stiffness:0.01,
            lenght:10
        }
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }
    display(){
        var posA = this.rope.bodyA.position;
        var posB = this.rope.bodyB.position;
        line(posA.x,posA.y+this.offsetY,posB.x+this.offsetX,posB.y);
    }
}