class Launcher{
    constructor(bodyA,pointB){
        var options ={
            bodyA:bodyA,
            pointB:pointB,
            stifness:0.004,
            length:5
        }
        this.bodyA=bodyA;
        this.pointB=pointB;
        this.string=Constraint.create(options);
        World.add(world,this.string);
    }
    fly(){
        this.string.bodyA=null;

    }

    attach(body){
        this.string.bodyA=body; 
    }
    display(){
        if(this.string.bodyA){
            var pointA=this.boayA.position;
            var pointB=this.pointB;
            strokeWeight(5);
            line(pointA.x,pointA.y,pointB.x,pointB.y);;


        }



    }






}
