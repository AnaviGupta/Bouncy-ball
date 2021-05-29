var onject1, object2, object3, object4, striker
var fr, mr

function setup() {
  createCanvas(850,400);
    
  object1= createSprite(110,350,200,10);
  object1.shapeColor="red"
  object2= createSprite(320,350,200,10);
  object2.shapeColor="green"
  object3= createSprite(530,350,200,10);
  object3.shapeColor="orange"
  object4= createSprite(740,350,200,10);
  object4.shapeColor="blue"

  striker=createSprite(400,200,10,10)
  striker.shapeColor="white"
   
  striker.velocityY=-4
  striker.velocityX=3

  edge1= createSprite(425,1,850,5)
 
  edge2= createSprite(4,200,5,400)
  
  edge3= createSprite(845,200,5,400)

  edge4= createSprite(425,395,850,5)

}

function draw() {
  background("grey"); 
  createEdgeSprites;
 
  
  //isTouching(mr,object3)  
  //isTouching(mr,object2)  
  // no return with arguments
  if(isTouching(striker,object1)){
    striker.shapeColor="red"
  }

  if(isTouching(striker,object2)){
    striker.shapeColor="green"
  }

  if(isTouching(striker,object3)){
    striker.shapeColor="orange"
  }

  if(isTouching(striker,object4)){
    striker.shapeColor="blue"
  }
  striker.bounceOff(edge1)
  striker.bounceOff(edge2)
  striker.bounceOff(edge3)
  

  striker.bounceOff(object1)
  striker.bounceOff(object2)
  striker.bounceOff(object4)

  if(striker.isTouching(object3)){
    striker.velocityX=0;
    striker.velocityY=0;
  }

  drawSprites();
}
function isTouching(a,b){
  // a and b are parameters , we are passing arguments within parameters= no return with parameter
  // no return no argument (a function without parameters where the function is just excecuted)
  // mr and object3 are arguments
  if(a.x-b.x < a.width/2+b.width/2 && b.x-a.x < a.width/2+b.width/2 && a.y-b.y < a.height/2+b.height/2 && b.y-a.y < a.height/2+b.height/2){
    return true
    // return with argument. It can dictate whether true or false. 
  }
  else {
  return false   
  }
}
 function bounceOff(a,b){
   if(a.x-b.x < a.width/2+b.width/2 && b.x-a.x < a.width/2+b.width/2 && a.y-b.y < a.height/2+b.height/2 && b.y-a.y < a.height/2+b.height/2){
     a.velocityX=a.velocityX*(-1)
     b.velocityX=b.velocityX*(-1)
   }
 }