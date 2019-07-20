var boring = [1,1,1,1,1,1,1];
var interest = [1,1,1,0,1,1,1];
var flipIt = ["camera", "skill", "knowledge"];
var howMuch = [1,3,6,9,11];

//printReverse() - take an array as argument & print out the elements in reverse
function printReverse(arr){
 for (i =arr.length - 1; i>=0; i--){
   console.log(arr[i]);
 }
}
//isUniform() - takes an array & returns true if all elements are identical
function isUniform(arr){
  var first = arr[0];
  for(i=1;i<arr.length; i++){
    if(arr[i] !== first){
      return false;
    }
  }
  return true;
}
//sumArray() - takes an array of # & returns the sum of the array 
function sumArray(arr){
  var total = 0;
  arr.forEach(function(element){
    total += element;
  });
  return total; 
}
//max() - takes an array of # & returns the largest # in the array. 
function max(arr){
  var max = arr[0];
  for(i=1;i< arr.length; i++){
    if(arr[i]>max){
      max = arr[i];
    }
  }
  return max;
}
