//implentation of a set
//what is a set? similar to array, but no duplicate items, and no particular order
//es6 has a default set with similar features, this is a custom stack

function mySet() {

	//we will hold our set in an array, but ensure no duplicates
	var collection = [];
  
  //return true or false, checking for existence of object in set
  this.has = function(obj) {
  	return (collection.indexOf(obj) !== -1);
  }
  
  //return all values in the set
  this.values = function() {
  	return collection;
  }
  
  //we only add object if it is not already in set
  this.add = function(obj){
  	if(!this.has(obj)){
    	collection.push(obj);
      return true;
    } 
    return false;
  }
  
  this.remove = function(obj){
  	if (this.has(obj)){
    	index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    }
    return false;
  }
  
  this.size = function() {
  	return collection.length;
  }
  
  //combine both sets, without duplicates
  this.union = function(otherSet){
  	var unionSet = new mySet();
    var firstSet = this.values();
    var secondSet = otherSet.values();
    
    firstSet.forEach(function(e){
    	unionSet.add(e);
    });
    secondSet.forEach(function(e){
    	unionSet.add(e);
    });
    
    return unionSet;
  }
  
  //return items that are in both sets
  this.intersection = function(otherSet){
  	var intersectionSet = new mySet();
    var firstSet = this.values();
    
    firstSet.forEach(function(e){
    	if(otherSet.has(e)){
      	intersectionSet.add(e);
      }
    });
    
    return intersectionSet;
  }
  
  //return difference between two sets as a new set
  this.difference = function(otherSet) {
  
  	var differenceSet = new mySet();
    var firstSet = this.values();
    
    firstSet.forEach(function(e){
    	if(!otherSet.has(e)){
      	differenceSet.add(e);
      }
    });
    
    return differenceSet;
  }
  
  //test if 2nd set is within first set
  this.subset = function(otherSet){
  	var firstSet = this.values();
    return firstSet.every(function(value){
    	return otherSet.has(value);
    });
  }
}

var setA = new mySet();
var setB = new mySet();

setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");
console.log(setA.subset(setB));
console.log(setA.intersection(setB).values());

//showing the es6 set
var setC = new Set();
var setD = new Set();
setC.add("a");
setD.add("b");
setD.add("c");
setD.add("a");
setD.add("d");
console.log(setD.values());//returns iterator

setD.delete("a");
console.log(setD.has("a"));
console.log(setD.add("d"));//after adding item, it returns full set object
