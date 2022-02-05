//Custom implementation of a stack in javascript
//Bit more complex, but more flexible

var Stack = function() {
    this.count = 0;//number of items in stack
    this.storage = {};
    
    //add to top of stack
    this.push = function(val){
      this.storage[this.count] = val;
      this.count++;
    }
    
    this.pop = function() {
      if(this.count===0){
        return undefined;
      }
      
      this.count--;
      var ret = this.storage[this.count];
      delete this.storage[this.count];
      return ret;
    }
    
    this.size = function() {
      return this.count;
    }
    
    this.peek = function() {
      return this.storage[this.count-1];
    }
    
  }
  
  var myStack = new Stack();
  myStack.push(5);
  myStack.push(10);
  console.log(myStack.peek());
  myStack.pop();
  console.log(myStack.peek());
