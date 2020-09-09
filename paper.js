class Paper {
    constructor(x, y, width, height) {
      var options = {
          'restitution':1,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("paper.png");
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y)
      rotate(this.body.angle)
      rectMode(CENTER);
      //fill(80); 
      //ellipseMode(RADIUS);
      //ellipse(0, 0, this.width, this.height)
      image(this.image,-10 ,-20 , 50, 50);

      pop();
    }
  };