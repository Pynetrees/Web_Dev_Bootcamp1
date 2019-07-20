//Print all # between -10 & 19
var value = -10;
console.log("Print all # between -10 & 19")
while(value<=19){
  console.log(value);
  value++;
}
//Print all even # between 10 & 40
var evens = 10;
console.log("Print all even # between 10 & 40");
while(evens<=40){
  console.log(evens);
  evens+=2;
}
//Print all odd # between 300 & 333
var odds = 300;
console.log("Print all odd # between 300 & 333");
while(odds<=333){
  if(odds%2!==0){
    console.log(odds);
  }
  odds++;
}
//Print all # divis by 5 & 3 between 5 & 50
var division = 5;
console.log("Print all # divis by 5 & 3 between 5 & 50");
while(division<=50){
  if(division%5===0 && division%3===0){
    console.log(division);
  }
  division++;
}

//optional building our own forEach
function myForEach(arr, func){
  //loop through array
  for(i=0;i<arr.length;i++){
    //call func for each item in array
    func(arr[i]);
  }
}