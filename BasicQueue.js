//Most basic implenentation of queues. 
//Queues are FIFO (first in, first out)

function Queue() {
	collection = [];
  
  this.print = function() {
  	console.log(collection);
  }
  
  this.enqueue = function(obj){
  	collection.push(obj);
  }
  
  this.dequeue = function(){
  	return collection.shift();
  }
  
  this.front = function(){
  	return collection[0];
  }
  
  this.size = function(){
  	return collection.length;
  }
  
  this.isEmpty = function(){
  	return (collection.length === 0);
  }
}

var x = new Queue();
x.enqueue('a');
x.enqueue('b');
x.enqueue('c');
x.print();
x.dequeue();
console.log(x.front());
x.print();
