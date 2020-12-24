class Ball{
    constructor(x,y,r){
        var options = {
            friction:2,
            restitution:0.7,
            density:0.8
        }
        this.body = Bodies.circle(x,y,r,options)
        World.add(world,this.body)
        this.r=r
    }
display(){
    ellipseMode(CENTER)
    fill("green")
    ellipse(this.body.position.x,this.body.position.y,this.r,this.r)
    
}

}