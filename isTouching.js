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