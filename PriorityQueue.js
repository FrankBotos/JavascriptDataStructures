//more advanced queue, with priority var to determine initial position of objects

function PriorityQueue() {
	var collection = [];
  
  this.printCollection = function(){
  	console.log(collection);
  }
  
  this.enqueue = function(obj) {
  	if (this.isEmpty()){
    	collection.push(obj);
    } else {
    	var added = false;
      for (var i=0; i<collection.length; i++){
      	if (obj[1] < collection[i][1]){
        	collection.splice(i,0,obj);
          added = true;
          break;
        }
      }
      if (!added){
      	collection.push(obj);
      }
    }
  }
  
  this.dequeue = function() {
  	var value = collection.shift();
    return value[0];
  }
  
  this.front = function() {
  	return collection[0];
  }
  
  this.size = function() {
  	return collection.length;
  }
  
  this.isEmpty = function() {
  	return collection.length === 0;
  }
}

var q = new PriorityQueue();
q.enqueue(['person1 person1', 2]);
q.enqueue(['person2 person 2', 3]);
q.enqueue(['person3 person3', 1]);
q.enqueue(['person4 person4', 2]);
q.printCollection();
q.dequeue();
console.log(q.front());
q.printCollection();
