class Constraint{
    constructor(bodyA,bodyB,offsetX){
        var options = {
            bodyA:bodyA,bodyB:bodyB,
            length:300
        }
        this.constraint = Matter.Constraint.create(options)
        World.add(world,this.constraint)
        this.x = offsetX
    }
    display(){
        var a = this.constraint.bodyA.position
        var b = this.constraint.bodyB.position
        fill("blue")
        line(a.x,a.y,b.x+this.x,b.y)
    }
}