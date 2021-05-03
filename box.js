class Box{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.5,
            'friction':0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.Visibility = 255;
        World.add(world, this.body);
      
       
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
     
if(this.body.speed<3){
  rect(0,0,this.width,this.height)
}
else {

  World.remove(world,this.body)
  push();
  this.Visibility=this.Visibility-20
  tint(255,this.Visibility);
 rect(this.body.position.x,this.body.position.y,this.width,this.height);
 pop();
}
pop()
}
      }
